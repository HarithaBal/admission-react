import React from "react";
import { createContext } from "react";
import jwt_decode from "jwt-decode";
import { useCustomState } from "../hooks/useCustomState";
import { message } from "antd";

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
    const user = jwt_decode(token);
    console.log({ user });
    setIsAuthenticated(true);
    setToken(token);
    setUser({
      ...user,
      expires_in: new Date().setSeconds(parseInt(user.expires_in)),
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setToken(null);
    setUser(null);
  };

  React.useEffect(() => {
    if (state.isAuthenticated) {
      if (new Date() >= state?.user?.expires_in) {
        // If token has expired
        message.error(`Token has expired. Please log in again.`);
        logout();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <AuthContext.Provider value={{ ...state, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
