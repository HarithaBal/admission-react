import { Card, Select } from "antd";
import React, { useContext } from "react";
import { DataContext } from "../services/DataService";

const preferencesData = [
    {
        id: 1,
        value: "Science Biology Group (Physics, Chemistry, Mathematics, Biology)",
    },
    {
        id: 2,
        value: "Science Computer Group (Physics, Chemistry, Mathematics, Computer Science)",
    },
    {
        id: 3,
        value: "Commerce Group (Business Studies, Economics, Accountancy, Computer Application)",
    },
];

export const Preferences = () => {
    const { preferences, changePreference } = useContext(DataContext);

    return (
        <Card title="Group and Subject combinations">
            <div className="label">First Preference</div>
            <Select
                value={preferences.preference_1}
                onChange={(e) => {
                    changePreference("preference_1", e);
                }}
            >
                {preferencesData.map((preferences) => (
                    <Select.Option key={preferences.id} value={preferences.id}>
                        {preferences.value}
                    </Select.Option>
                ))}
            </Select>
            <div className="label">Second Preference</div>

            <Select
                value={preferences.preference_2}
                onChange={(e) => {
                    changePreference("preference_2", e);
                }}
            >
                {preferencesData
                    .filter((item) => item.id !== preferences.preference_1)
                    .map((preferences) => (
                        <Select.Option
                            key={preferences.id}
                            value={preferences.id}
                        >
                            {preferences.value}
                        </Select.Option>
                    ))}
            </Select>
            <div className="label">Third Preference</div>
            <Select
                value={preferences.preference_3}
                onChange={(e) => {
                    changePreference("preference_3", e);
                }}
            >
                {preferencesData
                    .filter(
                        (item) =>
                            item.id !== preferences.preference_1 &&
                            item.id !== preferences.preference_2
                    )
                    .map((preferences) => (
                        <Select.Option
                            key={preferences.id}
                            value={preferences.id}
                        >
                            {preferences.value}
                        </Select.Option>
                    ))}
            </Select>
        </Card>
    );
};
