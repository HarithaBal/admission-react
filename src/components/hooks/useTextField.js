import { useState } from "react";

export const useTextField = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const updateValue = (e) => {
    setValue(e.target.value);
  };

  return [value, updateValue];
};
