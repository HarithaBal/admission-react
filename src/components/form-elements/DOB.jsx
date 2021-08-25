import React, { useContext } from "react";
import { DataContext } from "../services/DataService";
import { DatePicker } from "antd";

export const DOB = () => {
  const { setDob } = useContext(DataContext);

  return (
    <>
      <div className="label">Date of birth</div>
      <DatePicker
        placeholder="Date of birth"
        format={"DD/MM/YYYY"}
        onChange={setDob}
      />
    </>
  );
};
