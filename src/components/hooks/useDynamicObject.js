import { useState } from "react";

export const useDynamicObject = (newValue) => {
  const [values, setValues] = useState([{ ...newValue() }]);

  const addNewValue = () => {
    setValues((values) => [...values, { ...newValue() }]);
  };

  const changeValue = (id, type, newValue) => {
    setValues(
      values.map((value) => {
        if (id === value.id) {
          const tempValue = { ...value };
          tempValue[type] = newValue;
          return tempValue;
        }
        return value;
      })
    );
  };

  const deleteValue = (toBeDeleted) => {
    setValues(values.filter((value) => toBeDeleted !== value.id));
  };

  return [values, addNewValue, deleteValue, changeValue];
};
