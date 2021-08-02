import React, { useContext, useState } from "react";
import {
    Form,
    Input,
    Button,
    DatePicker,
    Radio,
    Checkbox,
    Divider,
    message,
} from "antd";
import { FormHeader } from "../FormHeader";
import { Declaration } from "../Declaration";
import { DeclarationContext } from "../services/DeclarationService";
import { useDate } from "../hooks/useDate";
import { SchoolName } from "../form-elements/SchoolName";
import { Name } from "../form-elements/Name";
import { Gender } from "../form-elements/Gender";
import { DOB } from "../form-elements/DOB";
import { Location } from "../form-elements/Location";
import { Guardian } from "../form-elements/Guardian";
import { Address } from "../form-elements/Address";
import { Preferences } from "../form-elements/Preferences";
import { PhoneEmail } from "../form-elements/PhoneEmail";
import { PreviousAttempts } from "../form-elements/PreviousAttempts";
import { Marks } from "../form-elements/Marks";
import { DataContext } from "../services/DataService";
import { managementFormRequest } from "../requests/authRequests";
import { AuthContext } from "../services/AuthService";

const { Item } = Form;

export const plainOptions = [
    "Orthopaedical",
    "Blind",
    "Deaf",
    "Mental/Brain Distress",
    "Handicapped",
    "Not Applicable",
];

export const ManagementForm = () => {
    const [passing, setPassing] = useDate();
    const [submitted, setSubmitted] = useState(false);

    const { token } = useContext(AuthContext);
    const { accepted, place } = useContext(DeclarationContext);

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

    // check passing issue
    // refactor differently abled

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
            passing,
        };

        if (isAddressSame) {
            data["currentAddress"] = data["permanentAddress"];
            data["currentPin"] = data["permanentPin"];
        } else {
            data["currentAddress"] = currentAddress;
            data["currentPin"] = currentPin;
        }

        data["previousAttempts"] = havePreviousAttempts ? previousAttempts : [];

        try {
            const response = await managementFormRequest(data, token);
            message.success("Form submitted successfully");
            setSubmitted(response.data);
        } catch (e) {
            message.error("Something went wrong. Please try again");
        }

        console.log("Received values of form: ", data);
    };

    return (
        <div className="form">
            <FormHeader />
            <div className="form--heading">
                <h2>Management Quota</h2>
                {submitted && (
                    <h4>Application Number: 2021-22/M/{submitted?.data?.data?.id || "error"}</h4>
                )}
            </div>
            <Divider />
            <Form
                name="management_form"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
            >
                <Item
                    name="qualifying_examination"
                    label="Name of Qualifying Examination"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input placeholder="Eg: SSLC" />
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

                <SchoolName />

                <Item
                    name="passing"
                    label="Month & Year of passing"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <DatePicker
                        onChange={setPassing}
                        picker="month"
                        placeholder="Month and year"
                    />
                </Item>

                <Name />
                <Gender />
                <DOB />
                <Guardian />

                <Item
                    name="community"
                    label="Community Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input type="text" placeholder="Community" />
                </Item>

                <Item
                    name="is_latin_catholic"
                    label="Whether applicant belongs to Latin Catholic (if yes, attach the copy of catechism certificate)"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Radio.Group>
                        <Radio value={false}>No</Radio>
                        <Radio value={true}>Yes</Radio>
                    </Radio.Group>
                </Item>

                <Item
                    name="differently_abled"
                    label="Whether applicant is differently abled (Choose relevant)"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Checkbox.Group options={plainOptions} />
                </Item>

                <Location />
                <Address />
                <PhoneEmail />
                <PreviousAttempts />
                <Divider />
                <Marks />
                <Divider />
                <Preferences />
                <Divider />
                <Declaration />

                <Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        disabled={!accepted}
                    >
                        Submit Form
                    </Button>
                </Item>
            </Form>
        </div>
    );
};
