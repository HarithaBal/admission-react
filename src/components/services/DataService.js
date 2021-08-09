import React, { createContext } from "react";
import { useBoolean } from "../hooks/useBoolean";
import { useDate } from "../hooks/useDate";
import { useDynamicObject } from "../hooks/useDynamicObject";
import { usePersistedState } from "../hooks/usePersistedState";
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
  const [name, setName] = useTextField("", "name");
  const [school, setSchool] = useTextField("", "school");
  const [gender, setGender] = useTextField("", "gender");
  const [state, setState] = useTextField("", "state");
  const [district, setDistrict] = useTextField("", "district");
  const [taluk, setTaluk] = useTextField("", "taluk");
  const [gramaPanchayath, setGramaPanchayath] = useTextField(
    "",
    "gramaPanchayath"
  );
  const [guardian, setGuardian] = useTextField("", "guardian");
  const [guardianOccupation, setGuardianOccupation] = useTextField(
    "",
    "guardianOccupation"
  );
  const [permanentAddress, setPermanentAddress] = useTextField(
    "",
    "permanentAddress"
  );
  const [permanentPin, setPermanentPin] = useTextField("", "permanentPin");
  const [currentAddress, setCurrentAddress] = useTextField(
    "",
    "currentAddress"
  );
  const [currentPin, setCurrentPin] = useTextField("", "currentPin");
  const [phone, setPhone] = useTextField("", "phone");
  const [email, setEmail] = useTextField("", "email");

  const [dob, setDob] = useDate(null, "dob");
  const [isAddressSame, toggleSameAddress] = useBoolean(false, "isAddressSame");
  const [preferences, setPreferences] = usePersistedState(
    getPreferences,
    "preferences"
  );

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

  const [havePreviousAttempts, togglePreviousAttempts] = useBoolean(
    false,
    "havePreviousAttempts"
  );

  const [previousAttempts, addNewAttempt, deleteAttempt, changeAttempt] =
    useDynamicObject(newAttempt, "previousAttempts");

  const [grades, setGrades] = usePersistedState(initialGrades, "grades");

  const changeGrades = (type, value) => {
    setGrades((grades) => {
      const tempGrades = { ...grades };
      tempGrades[type] = value;
      return tempGrades;
    });
  };

  const [otherGrades, addNewGrade, deleteGrade, updateGrade] = useDynamicObject(
    newGrade,
    "otherGrades"
  );

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
