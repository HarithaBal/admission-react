import React, { useContext } from "react";
import { AdminHome } from "../home/AdminHome";
import { StudentHome } from "../home/StudentHome";
import { AuthContext } from "../services/AuthService";
export const Home = () => {
  const { user } = useContext(AuthContext);

  return user?.user_type === "admin" ? <AdminHome /> : <StudentHome />;
};
