import React, { useState } from "react";
import { createContext } from "react";
import jwt_decode from "jwt-decode";

export const AuthContext = createContext(null);

export const AuthService = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

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
        <AuthContext.Provider
            value={{ isAuthenticated, user, token, authenticate, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};
