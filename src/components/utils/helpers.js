export const persistValue = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getPersistedValue = (key, defaultValue = null) => {
  const data = localStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  }

  return defaultValue;
};
