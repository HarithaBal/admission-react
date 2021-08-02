import React, { createContext, useState } from "react";
import { useBoolean } from "../hooks/useBoolean";

export const DeclarationContext = createContext(null);

export const DeclarationService = ({ children }) => {
    const [accepted, toggleAccepted] = useBoolean(false);
    const [place, setPlace] = useState("");

    return (
        <DeclarationContext.Provider
            value={{ accepted, toggleAccepted, place, setPlace }}
        >
            {children}
        </DeclarationContext.Provider>
    );
};
