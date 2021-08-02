import React, { createContext, useState } from "react";
import { useBoolean } from "../hooks/useBoolean";
import { useDate } from "../hooks/useDate";
import { useDynamicObject } from "../hooks/useDynamicObject";
import { useTextField } from "../hooks/useTextField";

export const DataContext = createContext(null);

const getPreferences = () => {
    return { preference_1: null, preference_2: null, preference_3: null };
};

const newAttempt = () => {
    return { id: new Date(), register_number: null, date: null };
};

const initialGrades = {
    lang1: null,
    lang2: null,
    eng: null,
    hin: null,
    phy: null,
    che: null,
    bio: null,
    ss: null,
    maths: null,
    it: null,
};

const newGrade = () => {
    return { id: new Date(), subject: null, marks: null, maxMarks: null };
};

export const DataService = ({ children }) => {
    const [name, setName] = useTextField("");
    const [school, setSchool] = useTextField("");
    const [gender, setGender] = useTextField("");
    const [dob, setDob] = useDate();
    const [state, setState] = useTextField("");
    const [district, setDistrict] = useTextField("");
    const [taluk, setTaluk] = useTextField("");
    const [gramaPanchayath, setGramaPanchayath] = useTextField("");
    const [guardian, setGuardian] = useTextField("");
    const [guardianOccupation, setGuardianOccupation] = useTextField("");
    const [permanentAddress, setPermanentAddress] = useTextField("");
    const [permanentPin, setPermanentPin] = useTextField("");
    const [isAddressSame, toggleSameAddress] = useBoolean(false);
    const [currentAddress, setCurrentAddress] = useTextField("");
    const [currentPin, setCurrentPin] = useTextField("");

    const [preferences, setPreferences] = useState(getPreferences);

    const changePreference = (type, value) => {
        setPreferences((preferences) => {
            const tempPreferences = { ...preferences };
            tempPreferences[type] = value;
            if (type === "preference_1") {
                tempPreferences["preference_2"] = null;
                tempPreferences["preference_3"] = null;
            }
            if (type === "preference_2") {
                tempPreferences["preference_3"] = null;
            }
            return tempPreferences;
        });
    };

    const [phone, setPhone] = useTextField("");
    const [email, setEmail] = useTextField("");

    const [havePreviousAttempts, togglePreviousAttempts] = useBoolean(false);

    const [previousAttempts, addNewAttempt, deleteAttempt, changeAttempt] =
        useDynamicObject(newAttempt);

    const [grades, setGrades] = useState(initialGrades);

    const changeGrades = (type, value) => {
        setGrades((grades) => {
            const tempGrades = { ...grades };
            tempGrades[type] = value;
            return tempGrades;
        });
    };

    const [otherGrades, addNewGrade, deleteGrade, updateGrade] =
        useDynamicObject(newGrade);

    return (
        <DataContext.Provider
            value={{
                name,
                setName,
                school,
                setSchool,
                gender,
                setGender,
                dob,
                setDob,
                state,
                setState,
                district,
                setDistrict,
                taluk,
                setTaluk,
                gramaPanchayath,
                setGramaPanchayath,
                guardian,
                setGuardian,
                guardianOccupation,
                setGuardianOccupation,
                permanentAddress,
                setPermanentAddress,
                permanentPin,
                setPermanentPin,
                currentAddress,
                setCurrentAddress,
                currentPin,
                setCurrentPin,
                isAddressSame,
                toggleSameAddress,
                preferences,
                changePreference,
                phone,
                setPhone,
                email,
                setEmail,
                havePreviousAttempts,
                togglePreviousAttempts,
                previousAttempts,
                addNewAttempt,
                deleteAttempt,
                changeAttempt,
                grades,
                changeGrades,
                otherGrades,
                addNewGrade,
                deleteGrade,
                updateGrade,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
