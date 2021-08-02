import React, { createContext } from "react";
import { useCustomState } from "../hooks/useCustomState";

export const CommunityDataContext = createContext(null);

const PERSIST_KEY = "communityData";

const defaultValue = {
  isAvailable: false,
  data: null,
};

export const CommunityDataService = ({ children }) => {
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
    <CommunityDataContext.Provider
      value={{
        ...state,
        set,
        reset,
      }}
    >
      {children}
    </CommunityDataContext.Provider>
  );
};
