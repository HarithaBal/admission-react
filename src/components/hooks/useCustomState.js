import { useState, useEffect } from "react";
import { getPersistedValue, persistValue } from "../utils/helpers";

export const useCustomState = (defaultValue, persistKey) => {
  const [state, setState] = useState(
    getPersistedValue(persistKey, defaultValue)
  );

  const updateState = (type, value) => {
    setState((state) => {
      const tempState = { ...state };
      tempState[type] = value;
      return tempState;
    });
  };

  useEffect(() => {
    persistValue(persistKey, state);
  }, [persistKey, state]);

  return [state, updateState, setState];
};
