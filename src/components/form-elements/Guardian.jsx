import React, { useContext } from "react";
import { DataContext } from "../services/DataService";
import { Card, Input } from "antd";

export const Guardian = () => {
    const { guardian, setGuardian, guardianOccupation, setGuardianOccupation } =
        useContext(DataContext);

    return (
        <Card>
            <div className="label">Name of Father / Mother / Guardian</div>
            <Input
                value={guardian}
                onChange={setGuardian}
                type="text"
                placeholder="Eg: James Sirius Potter"
            />
            <div className="label">
                Occupation of Father / Mother / Guardian
            </div>
            <Input
                value={guardianOccupation}
                onChange={setGuardianOccupation}
                type="text"
                placeholder="Eg: Musician"
            />
        </Card>
    );
};
