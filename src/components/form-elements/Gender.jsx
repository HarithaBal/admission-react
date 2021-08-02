import React, { useContext } from "react";
import { DataContext } from "../services/DataService";
import { Radio } from "antd";

export const Gender = () => {
    const { gender, setGender } = useContext(DataContext);

    return (
        <>
            <div className="label">Gender</div>
            <Radio.Group onChange={setGender} value={gender}>
                <Radio value={"female"}>Female</Radio>
                <Radio value={"male"}>Male</Radio>
            </Radio.Group>
        </>
    );
};
