import { Card, Divider, Checkbox, Input } from "antd";
import React, { useContext } from "react";
import { DeclarationContext } from "./services/DeclarationService";

export const Declaration = () => {
    const { accepted, toggleAccepted, place, setPlace } =
        useContext(DeclarationContext);

    return (
        <Card title="Declaration" className="declaration">
            <Checkbox checked={accepted} onChange={toggleAccepted}>
                I do state that all the information furnished above is true and
                I know that any false information in the application will result
                in cancellation of my candidature.
            </Checkbox>
            <Divider />
            <Input
                type="text"
                value={place}
                onChange={(e) => {
                    setPlace(e.target.value);
                }}
                placeholder="Place. Eg: Aluva"
            />
        </Card>
    );
};
