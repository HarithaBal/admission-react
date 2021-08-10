import { usePersistedState } from "./usePersistedState";

export const useDate = (initialValue = null, persistKey) => {
    const [date, setDate] = usePersistedState(initialValue, persistKey);

    const updateDate = (_, date) => {
        setDate(date);
    };

    return [date, updateDate, setDate];
};
