import React, { useContext } from "react";
import { DataContext } from "../services/DataService";
import { Input } from "antd";

export const SchoolName = () => {
    const { school, setSchool } = useContext(DataContext);

    return (
        <>
            <div className="label">
                Name of School in which the applicant studied for SSLC or
                equivalent
            </div>
            <Input
                value={school}
                onChange={setSchool}
                type="text"
                placeholder="School name"
            />
        </>
    );
};
