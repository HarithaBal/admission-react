import React, { useState, useEffect } from "react";
import { createContext } from "react";
import jwt_decode from "jwt-decode";
import { persistValue, getPersistedValue } from "../utils/helpers";

export const AuthContext = createContext(null);

const PERSIST_KEY = "auth";

const defaultValue = {
  isAuthenticated: false,
  token: null,
  user: null,
};

export const AuthService = ({ children }) => {
  const [state, setState] = useState(
    getPersistedValue(PERSIST_KEY, defaultValue)
  );

  const updateState = (type, value) => {
    setState((state) => {
      const tempState = { ...state };
      tempState[type] = value;
      return tempState;
    });
  };

  const setIsAuthenticated = (value) => {
    updateState("isAuthenticated", value);
  };

  const setToken = (value) => {
    updateState("token", value);
  };

  const setUser = (value) => {
    updateState("user", value);
  };

  const authenticate = (token) => {
    setIsAuthenticated(true);
    setToken(token);
    setUser(jwt_decode(token));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    persistValue(PERSIST_KEY, state);
  }, [state]);

  return (
    <AuthContext.Provider value={{ ...state, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
