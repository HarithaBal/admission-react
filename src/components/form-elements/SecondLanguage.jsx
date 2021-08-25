import React from "react";
import { Select, Form } from "antd";
const SecondLanguage = () => {
  return (
    <Form.Item
      rules={[
        {
          required: true,
        },
      ]}
      label="Second language chosen"
      name="second_language"
    >
      <Select>
        <Select.Option value="malayalam">Malayalam</Select.Option>
        <Select.Option value="hindi">Hindi</Select.Option>
      </Select>
    </Form.Item>
  );
};

export default SecondLanguage;
