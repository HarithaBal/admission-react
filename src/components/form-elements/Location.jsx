import React, { useContext } from "react";
import { DataContext } from "../services/DataService";
import { Card, Input } from "antd";

export const Location = () => {
    const {
        state,
        setState,
        district,
        setDistrict,
        taluk,
        setTaluk,
        gramaPanchayath,
        setGramaPanchayath,
    } = useContext(DataContext);

    return (
        <Card>
            <div className="label">Place of Residence: State</div>
            <Input
                value={state}
                onChange={setState}
                type="text"
                placeholder="Eg: Kerala"
            />
            <div className="label">District</div>
            <Input
                value={district}
                onChange={setDistrict}
                type="text"
                placeholder="Eg: Ernakulam"
            />
            <div className="label">Taluk</div>
            <Input
                value={taluk}
                onChange={setTaluk}
                type="text"
                placeholder="Eg: Kochi"
            />

            <div className="label">
                Grama Panchayath / Municipality / Corporation
            </div>
            <Input
                value={gramaPanchayath}
                onChange={setGramaPanchayath}
                type="text"
                placeholder="Eg: Kalamassery"
            />
        </Card>
    );
};
