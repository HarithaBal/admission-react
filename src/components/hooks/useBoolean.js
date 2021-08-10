import { usePersistedState } from "./usePersistedState";

export const useBoolean = (initialValue, persistKey) => {
  const [value, setValue] = usePersistedState(initialValue, persistKey);

  const toggleValue = () => {
    setValue((value) => !value);
  };

  return [value, toggleValue, setValue];
};
