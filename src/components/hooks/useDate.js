import { useState } from "react";

export const useDate = (initialValue = null) => {
    const [date, setDate] = useState(initialValue);

    const updateDate = (_, date) => {
        setDate(date);
    };

    return [date, updateDate, setDate];
};
