import React from "react";
import notFound from "../../images/404.gif";
import { StudentLayout } from "../layouts/StudentLayout";

export const NotFound = () => {
  return (
    <StudentLayout>
      <div className="flex-center">
        <img src={notFound} alt="Not found" />
      </div>
    </StudentLayout>
  );
};
