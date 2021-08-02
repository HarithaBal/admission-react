import React, { useState } from "react";
import Particles from "react-tsparticles";
import { Form, Input, Button, Alert } from "antd";
import particleData from "../../utils/particles.json";
import { registerRequest } from "../requests/authRequests";
import { parseError } from "../utils/parseError";
import { Link } from "react-router-dom";

export const Register = () => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const [status, setStatus] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        setErrors([]);
        setStatus(false);
        try {
            const response = await registerRequest(values);
            console.log(response.data);
            setStatus(true);
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

    return (
        <div className="page-container">
            <Particles options={particleData} />
            <div className="login">
                {status ? (
                    <div className="flex-center" style={{ height: "40vh" }}>
                        <Alert
                            message="Account created successfully"
                            description="Your account creation was successful. Verify your email to continue. Check your email for verification link."
                            type="success"
                            showIcon
                        />
                    </div>
                ) : (
                    <>
                        <h1>Create New Account</h1>
                        <div className="form">
                            <Form
                                name="basic"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    label="Name"
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input your name!",
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Phone"
                                    name="phone"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your phone number!",
                                        },
                                    ]}
                                >
                                    <Input type="number" />
                                </Form.Item>

                                <Form.Item
                                    name="email"
                                    label="E-mail"
                                    rules={[
                                        {
                                            type: "email",
                                            message:
                                                "The input is not valid E-mail!",
                                        },
                                        {
                                            required: true,
                                            message:
                                                "Please input your E-mail!",
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your password!",
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    label="Password Confirmation"
                                    name="password_confirmation"
                                    dependencies={["password"]}
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please confirm your password!",
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (
                                                    !value ||
                                                    getFieldValue(
                                                        "password"
                                                    ) === value
                                                ) {
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
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    wrapperCol={{ span: 5 }}
                                    className="flex-center"
                                >
                                    <Button
                                        loading={loading}
                                        type="primary"
                                        htmlType="submit"
                                    >
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>

                            {errors.length > 0 &&
                                errors.map((error, index) => (
                                    <Alert
                                        message={error}
                                        key={index}
                                        type="error"
                                        showIcon
                                    />
                                ))}

                            <div>
                                Already have an account ?
                                <Link to="/login"> Login </Link>instead
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
