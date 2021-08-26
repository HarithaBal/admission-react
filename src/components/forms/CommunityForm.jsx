import {
  Divider,
  Form,
  Button,
  Input,
  Card,
  Checkbox,
  message,
  Cascader,
} from "antd";
import React, { useContext } from "react";
import { Declaration } from "../Declaration";
import { Address } from "../form-elements/Address";
import { DOB } from "../form-elements/DOB";
import { Gender } from "../form-elements/Gender";
import { Guardian } from "../form-elements/Guardian";
import { Marks } from "../form-elements/Marks";
import { Name } from "../form-elements/Name";
import { Preferences } from "../form-elements/Preferences";
import { SchoolName } from "../form-elements/SchoolName";
import { FormHeader } from "../FormHeader";
import { communityFormRequest } from "../requests/authRequests";
import { AuthContext } from "../services/AuthService";
import { DataContext } from "../services/DataService";
import { DeclarationContext } from "../services/DeclarationService";
import { plainOptions } from "./ManagementForm";
import { Location } from "../form-elements/Location";
import { CommunityDataContext } from "../services/CommunityDataService";
import SecondLanguage from "../form-elements/SecondLanguage";
import { usePersistedState } from "../hooks/usePersistedState";
import { useHistory } from "react-router";
const { Item } = Form;

export const CommunityForm = () => {
  const { token } = useContext(AuthContext);
  const { accepted, place } = useContext(DeclarationContext);
  const { set } = useContext(CommunityDataContext);
  const [diocese, setDiocese] = usePersistedState("", "diocese");
  const [loading, setLoading] = React.useState(false);

  const history = useHistory();

  const options = [
    {
      value: "Kerala",
      label: "Kerala",
      children: [
        {
          value: "Kochi",
          label: "Kochi",
        },
        {
          value: "Quilon",
          label: "Quilon",
        },
        {
          value: "Trivandrum",
          label: "Trivandrum",
        },
        {
          value: "Kannur",
          label: "Kannur",
        },
        {
          value: "Vijayapuram",
          label: "Vijayapuram",
        },
        {
          value: "Alleppey",
          label: "Alleppey",
        },
        {
          value: "Calicut",
          label: "Calicut",
        },
        {
          value: "Kottapuram",
          label: "Kottapuram",
        },
        {
          value: "Neyyattinkara",
          label: "Neyyattinkara",
        },
        {
          value: "Sultanpet",
          label: "Sultanpet",
        },
        {
          value: "Verapoly",
          label: "Verapoly",
        },
      ],
    },
  ];
  const {
    name,
    school,
    gender,
    dob,
    guardian,
    guardianOccupation,
    state,
    district,
    taluk,
    gramaPanchayath,
    permanentAddress,
    permanentPin,
    isAddressSame,
    currentAddress,
    currentPin,
    phone,
    email,
    havePreviousAttempts,
    previousAttempts,
    grades,
    otherGrades,
    preferences,
  } = useContext(DataContext);

  const onFinish = async (values) => {
    const data = {
      ...values,
      school,
      name,
      gender,
      dob,
      guardian,
      guardianOccupation,
      state,
      district,
      taluk,
      gramaPanchayath,
      permanentAddress,
      permanentPin,
      phone,
      email,
      grades,
      otherGrades,
      preferences,
      place,
    };
    if (isAddressSame) {
      data["currentAddress"] = data["permanentAddress"];
      data["currentPin"] = data["permanentPin"];
    } else {
      data["currentAddress"] = currentAddress;
      data["currentPin"] = currentPin;
    }

    data["previousAttempts"] = havePreviousAttempts ? previousAttempts : [];
    setLoading(true);
    try {
      const response = await communityFormRequest(data, token);
      message.success("Form submitted successfully");
      set(response.data.data);
      history.push("/");
    } catch (e) {
      message.error("Something went wrong. Please try again");
    } finally {
      setLoading(false);
    }

    console.log("Received values of form: ", data);
  };
  return (
    <>
      <FormHeader />
      <div className="form--heading">
        <h2>Community Quota</h2>
      </div>
      <Divider />
      <Form
        name="community_form"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <SchoolName />
        <Name />

        <Item
          name="initials"
          label="Expansion of initials"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Item>

        <Item
          name="register_number"
          label="Register Number"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="number" placeholder="Register Number" />
        </Item>

        <Item
          name="single_window_application_number"
          label="Single Window Application Number"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Item>

        <Gender />

        <DOB />

        <Location />

        <Guardian />

        <Item
          name="differently_abled"
          label="Whether applicant is differently abled (Choose relevant).If applicable, attach the medical certificate and supporting documents."
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Checkbox.Group options={plainOptions} />
        </Item>

        <Address />

        <Card title="Caste / community">
          <Item
            name="caste_name"
            label="Caste / Community"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Latin Catholic/Anglo-Indian" />
          </Item>
        </Card>

        <Card title="Name of Parish and Diocese">
          <Item
            name="diocese_name"
            label="Diocese"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Cascader
              defaultValue={diocese}
              options={options}
              onChange={setDiocese}
            />
          </Item>
          <Item
            name="parish_name"
            label="Parish"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Item>
        </Card>

        <Marks />
        <Divider />
        <Preferences />
        <Divider />
        <SecondLanguage />
        <Divider />
        <Declaration />

        <Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            disabled={!accepted}
            loading={loading}
          >
            Submit Form
          </Button>
        </Item>
      </Form>
    </>
  );
};
