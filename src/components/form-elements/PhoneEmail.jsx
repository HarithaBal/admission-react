import { Card, Input } from "antd";
import React, { useContext } from "react";
import { DataContext } from "../services/DataService";

export const PhoneEmail = () => {
    const { phone, setPhone, email, setEmail } = useContext(DataContext);

    return (
        <Card>
            <div className="label">Phone Number</div>
            <Input
                value={phone}
                onChange={setPhone}
                type="number"
                placeholder="Whatsapp Number :+91 98765 43210"
            />
            <div className="label">Email Address (if any)</div>
            <Input
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="potter.harry@hogwarts.in"
            />
        </Card>
    );
};
