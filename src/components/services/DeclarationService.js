import React, { createContext } from "react";
import { useBoolean } from "../hooks/useBoolean";
import { usePersistedState } from "../hooks/usePersistedState";

export const DeclarationContext = createContext(null);

export const DeclarationService = ({ children }) => {
  const [accepted, toggleAccepted] = useBoolean(false, "accepted");
  const [place, setPlace] = usePersistedState("", "place");

  return (
    <DeclarationContext.Provider
      value={{ accepted, toggleAccepted, place, setPlace }}
    >
      {children}
    </DeclarationContext.Provider>
  );
};
