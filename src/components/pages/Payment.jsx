import {
  Alert,
  Form,
  Checkbox,
  Input,
  Button,
  Tag,
  Card,
  Divider,
  Tooltip,
} from "antd";
import React, { useEffect, useState, useContext } from "react";
import { usePersistedState } from "../hooks/usePersistedState";
import { addPaymentData, getLogsRequest } from "../requests/authRequests";
import { AuthContext } from "../services/AuthService";
import { parseError } from "../utils/parseError";

const persistKey = "paymentLogs";

const paymentOptions = ["Community Quota", "Management Quota"];

export const Payment = () => {
  const [logs, setLogs] = usePersistedState([], persistKey);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const { token } = useContext(AuthContext);

  const fetchLogs = async () => {
    try {
      const response = await getLogsRequest(token);
      if (response?.data?.data) {
        setLogs(response.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onFinish = async (values) => {
    console.log(values);
    setLoading(true);
    setErrors([]);
    try {
      const response = await addPaymentData(values, token);
      if (response.data) {
        fetchLogs();
      }
    } catch (e) {
      const error = parseError(e);
      setErrors(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="payment">
      <div className="payment-form">
        <h1>Submit Payment</h1>
        <Form
          name="payment_form"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          onFinish={onFinish}
        >
          <Form.Item
            name="payment_types"
            label="What all payments have you made ?"
            rules={[
              { required: true, message: "Please select at least one option" },
            ]}
          >
            <Checkbox.Group options={paymentOptions}></Checkbox.Group>
          </Form.Item>

          <Form.Item
            name="amount"
            label="How much have you paid ?"
            rules={[{ required: true, message: "Please enter a valid amount" }]}
          >
            <Input type="number" placeholder="Eg: 500" min="0" />
          </Form.Item>

          <Form.Item
            name="transaction_id"
            label="UPI Transaction ID"
            rules={[
              {
                required: true,
                message: "Please enter a valid transaction ID",
              },
            ]}
          >
            <Input placeholder="Eg: SAQIM123saXXXXXX" />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }} className="flex-center">
            <Button loading={loading} type="primary" htmlType="submit">
              Add Payment Data
            </Button>
          </Form.Item>
        </Form>

        {errors.length > 0 &&
          errors.map((error, index) => (
            <Alert message={error} key={index} type="error" showIcon />
          ))}
      </div>
      <div className="payment-logs">
        <h1>Payment Logs</h1>
        {logs.map((log) => (
          <Card key={log.id}>
            <h4>
              <span>
                Payment Record ID
                <span>#SFHSS100{log.id}</span>
              </span>
              {log.data?.isVerified ? (
                <Tag color="green">Verified</Tag>
              ) : (
                <Tooltip title="Payment information has not been verified by School">
                  <Tag color="red">Not verified</Tag>
                </Tooltip>
              )}
            </h4>
            <Divider />
            <div className="logs">
              <div className="log-item">
                <div className="log-item--type">Amount</div>
                <div className="log-item--value">{log.data.amount}</div>
              </div>
              <div className="log-item">
                <div className="log-item--type">UPI Transaction ID</div>
                <div className="log-item--value">{log.data.transaction_id}</div>
              </div>
            </div>
            <div className="tag">
              <div className="tag--type">Paid for</div>
              <div className="tag--value">
                {log.data.payment_types.map((type) => (
                  <Tag className="tag-payment" color="#00adb5" key={type}>
                    {type}
                  </Tag>
                ))}
              </div>
            </div>
          </Card>
        ))}
        {logs.length === 0 && (
          <Alert type="warning" message="No logs to show" showIcon />
        )}
      </div>
    </div>
  );
};
