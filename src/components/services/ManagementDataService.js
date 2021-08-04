import React, { createContext } from "react";
import { useCustomState } from "../hooks/useCustomState";

export const ManagementDataContext = createContext(null);

const PERSIST_KEY = "managementData";

const defaultValue = {
  isAvailable: false,
  data: null,
};

export const ManagementDataService = ({ children }) => {
  const [state, updateState] = useCustomState(defaultValue, PERSIST_KEY);

  const setIsAvailable = (value) => {
    updateState("isAvailable", value);
  };

  const setData = (value) => {
    updateState("data", value);
  };

  const reset = () => {
    setData(null);
    setIsAvailable(false);
  };

  const set = (data) => {
    setIsAvailable(true);
    setData(data);
  };

  return (
    <ManagementDataContext.Provider
      value={{
        ...state,
        set,
        reset,
      }}
    >
      {children}
    </ManagementDataContext.Provider>
  );
};
