import React, { useContext } from "react";
import { AuthContext } from "./services/AuthService";
import { Route } from "react-router-dom";
import { StudentLayout } from "./layouts/StudentLayout";
import { Login } from "./pages/Login";

export const ProtectedRoute = ({ component: Component, path, ...rest }) => {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            path={path}
            render={(props) =>
                isAuthenticated ? (
                    <StudentLayout>
                        <Component {...rest} {...props} />
                    </StudentLayout>
                ) : (
                    <Login />
                )
            }
        />
    );
};
