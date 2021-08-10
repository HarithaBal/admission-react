import { usePersistedState } from "./usePersistedState";

export const useDynamicObject = (newValue, persistKey) => {
  const [values, setValues] = usePersistedState(
    [{ ...newValue() }],
    persistKey
  );

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
