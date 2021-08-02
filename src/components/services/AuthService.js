import React from "react";
import { createContext } from "react";
import jwt_decode from "jwt-decode";
import { useCustomState } from "../hooks/useCustomState";

export const AuthContext = createContext(null);

const PERSIST_KEY = "auth";

const defaultValue = {
  isAuthenticated: false,
  token: null,
  user: null,
};

export const AuthService = ({ children }) => {
  const [state, updateState] = useCustomState(defaultValue, PERSIST_KEY);

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

  return (
    <AuthContext.Provider value={{ ...state, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
