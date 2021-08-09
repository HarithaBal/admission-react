import { usePersistedState } from "./usePersistedState";

export const useTextField = (defaultValue, persistKey = "temp") => {
  const [value, setValue] = usePersistedState(defaultValue, persistKey);

  const updateValue = (e) => {
    setValue(e.target.value);
  };

  return [value, updateValue];
};
