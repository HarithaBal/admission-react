import { useState } from "react";

export const useBoolean = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const toggleValue = () => {
        setValue((value) => !value);
    };

    return [value, toggleValue, setValue];
};
