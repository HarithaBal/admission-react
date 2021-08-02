import React, { createContext, useState } from "react";

export const CommunityDataContext = createContext(null);

export const CommunityDataService = ({ children }) => {
    const [isAvailable, setIsAvailable] = useState(false);
    const [data, setData] = useState(null);

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
                isAvailable,
                data,
                set,
                reset,
            }}
        >
            {children}
        </CommunityDataContext.Provider>
    );
};
