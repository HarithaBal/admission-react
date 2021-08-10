import { useEffect, useState } from "react";
import { getPersistedValue, persistValue } from "../utils/helpers";

export const usePersistedState = (defaultValue, persistKey) => {
  const [state, setState] = useState(
    getPersistedValue(persistKey, defaultValue)
  );

  useEffect(() => {
    persistValue(persistKey, state);
  }, [persistKey, state]);

  return [state, setState];
};
