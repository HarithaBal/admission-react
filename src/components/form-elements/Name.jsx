import React, { useContext } from "react";
import { DataContext } from "../services/DataService";
import { Input } from "antd";

export const Name = () => {
    const { name, setName } = useContext(DataContext);

    return (
        <>
            <div className="label">Name of Applicant</div>

            <Input
                value={name}
                onChange={setName}
                type="text"
                placeholder="Eg: Harry James Potter"
            />
        </>
    );
};
