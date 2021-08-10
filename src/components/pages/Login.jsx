import React, { useContext, useState } from "react";
import Particles from "react-tsparticles";
import { Form, Input, Button, Alert } from "antd";
import particleData from "../../utils/particles.json";
import { loginRequest } from "../requests/authRequests";
import { parseError } from "../utils/parseError";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../services/AuthService";

export const Login = () => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    const { authenticate } = useContext(AuthContext);
    const history = useHistory();

    const onFinish = async (values) => {
        setLoading(true);
        setErrors([]);
        try {
            const response = await loginRequest(values);
            console.log(response.data);
            authenticate(response.data.access_token);
            history.push("/");
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
                <h1>Login</h1>
                <div className="form">
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                                {
                                    type: "email",
                                    message: "The input is not valid E-mail!",
                                },
                                {
                                    required: true,
                                    message: "Please input your E-mail!",
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
                                    message: "Please input your password!",
                                },
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
                                Login
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
                        Don't have an account ?
                        <Link to="/register"> Register </Link>instead
                    </div>
                </div>
            </div>
        </div>
    );
};
