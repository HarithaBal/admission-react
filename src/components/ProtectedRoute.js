import React, { useContext } from "react";
import { AuthContext } from "./services/AuthService";
import { Route } from "react-router-dom";
import { StudentLayout } from "./layouts/StudentLayout";
import { Login } from "./pages/Login";
import { AdminLayout } from "./layouts/AdminLayout";

const Layout = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user.user_type === "admin") {
    return <AdminLayout>{children}</AdminLayout>;
  }

  return <StudentLayout>{children}</StudentLayout>;
};

export const ProtectedRoute = ({ component: Component, path, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      path={path}
      render={(props) =>
        isAuthenticated ? (
          <Layout>
            <Component {...rest} {...props} />
          </Layout>
        ) : (
          <Login />
        )
      }
    />
  );
};
