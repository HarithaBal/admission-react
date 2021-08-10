import { usePersistedState } from "./usePersistedState";

export const useCustomState = (defaultValue, persistKey) => {
  const [state, setState] = usePersistedState(defaultValue, persistKey);

  const updateState = (type, value) => {
    setState((state) => {
      const tempState = { ...state };
      tempState[type] = value;
      return tempState;
    });
  };

  return [state, updateState, setState];
};
