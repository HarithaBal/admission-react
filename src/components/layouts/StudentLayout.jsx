import Avatar from "react-gravatar-or-initials";
import React, { useContext } from "react";
import { AuthContext } from "../services/AuthService";
import { HelpCircle, Home, LogOut } from "react-feather";
import { Link, NavLink } from "react-router-dom";
import { Button, Tooltip } from "antd";

export const StudentLayout = ({ children }) => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="student-layout">
      <div className="title">St. Francis Higher Secondary School For Girls</div>
      <div className="nav">
        <div className="nav-left">
          <NavLink exact to="/" className="nav-item">
            <Home />
            <span>Home</span>
          </NavLink>
          <NavLink to="/help" className="nav-item">
            <HelpCircle />
            <span>Support</span>
          </NavLink>
        </div>
        <div className="nav-right">
          <Tooltip title="Logout">
            <Button
              className="nav-right--name"
              type="primary"
              icon={<LogOut />}
              onClick={logout}
            />
          </Tooltip>
          <Link to="/profile" className="nav-right--name">
            {user?.data?.name || "John Doe"}
          </Link>
          <Link to="/profile">
            <Avatar
              email={user?.data?.email || "john@example.com"}
              name={user?.data?.name || "John Doe"}
              size={50}
              fontSize={0.5}
              className="nav-right--avatar"
            />
          </Link>
        </div>
      </div>

      <div className="container content">{children}</div>

      <div className="footer">
        <span>Copyright &copy;{new Date().getFullYear()}</span>
      </div>
    </div>
  );
};
