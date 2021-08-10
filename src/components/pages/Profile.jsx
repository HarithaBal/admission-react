import React, { useContext, useState } from "react";
import { AuthContext } from "../services/AuthService";
import Avatar from "react-gravatar-or-initials";
import { Form, Input, Button, Alert, message } from "antd";
import { parseError } from "../utils/parseError";
import { updatePasswordRequest } from "../requests/authRequests";

export const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const {
    isAuthenticated,
    user: { data },
    token,
  } = useContext(AuthContext);

  const onFinish = async (values) => {
    setLoading(true);
    setErrors([]);
    try {
      const response = await updatePasswordRequest(values, token);
      console.log(response.data);
      message.success(response.data.message);
    } catch (e) {
      const error = parseError(e);
      if (Array.isArray(error)) {
        setErrors(error);
      } else {
        setErrors([error]);
      }
    }
    setLoading(false);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="profile">
      <h1>Profile</h1>
      <div className="profile-contents">
        <div className="profile-details">
          <Avatar
            email={data?.email || "john@example.com"}
            name={data?.name || "John Doe"}
            size={300}
            fontSize={0.5}
            className="profile-avatar"
          />
          <div className="details">
            <div className="details-item">
              <div className="details-item--type">Email</div>
              <div className="details-item--value">{data.email}</div>
            </div>
            <div className="details-item">
              <div className="details-item--type">Phone</div>
              <div className="details-item--value">{data.phone}</div>
            </div>
          </div>
        </div>
        <div className="change-password">
          <h2>Change Password</h2>
          <Form
            name="change-password"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{
              current_password: "",
              password: "",
              password_confirmation: "",
            }}
            onFinish={onFinish}
          >
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Input your current password",
                },
              ]}
              name="current_password"
              label="Current password"
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  min: 8,
                  message:
                    "Its better if password are more than 8 characters long",
                },
                {
                  required: true,
                  message: "Input your new password",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="password_confirmation"
              label="Password confirmation"
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 5 }} className="flex-center">
              <Button loading={loading} type="primary" htmlType="submit">
                Update password
              </Button>
            </Form.Item>
          </Form>

          {errors.length > 0 &&
            errors.map((error, index) => (
              <Alert message={error} key={index} type="error" showIcon />
            ))}
        </div>
      </div>
    </div>
  );
};
