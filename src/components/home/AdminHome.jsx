import React from "react";
import { Link } from "react-router-dom";
export const AdminHome = () => {
  return (
    <div>
      <div className="options">
        <Link to="/students/registered" className="options-item">
          Registered Students
        </Link>
        <Link to="/students/unapproved" className="options-item">
          Unapproved Students
        </Link>
      </div>
    </div>
  );
};
