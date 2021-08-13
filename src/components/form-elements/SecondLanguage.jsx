import React from "react"
import {Input,Form} from "antd"
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
        <Input placeholder="Eg: Hindi" />
      </Form.Item>
        
    )
}

export default SecondLanguage;
