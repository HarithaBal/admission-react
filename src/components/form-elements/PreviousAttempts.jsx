import { Checkbox, Input, DatePicker, Button } from "antd";
import React, { useContext } from "react";
import { Plus, X } from "react-feather";
import { DataContext } from "../services/DataService";

export const PreviousAttempts = () => {
  const {
    havePreviousAttempts,
    togglePreviousAttempts,
    previousAttempts,
    addNewAttempt,
    deleteAttempt,
    changeAttempt,
  } = useContext(DataContext);

  return (
    <>
      <Checkbox
        checked={havePreviousAttempts}
        onChange={togglePreviousAttempts}
      >
        Have you appeared for SSLC or equivalent examination more than once ?
      </Checkbox>

      {havePreviousAttempts && (
        <>
          <span>Your last 3 attempts details</span>
          {previousAttempts.map((attempt, index) => (
            <div key={attempt.id} className="attempt">
              <span className="sl-no">{index + 1}</span>
              <Input
                type="number"
                placeholder="Register number"
                className="flex-1"
                value={attempt.register_number}
                onChange={(e) => {
                  changeAttempt(attempt.id, "register_number", e.target.value);
                }}
              />
              <DatePicker
                className="flex-1"
                placeholder="Month and year"
                picker="month"
                onChange={(_, dateString) => {
                  changeAttempt(attempt.id, "date", dateString);
                }}
              />
              <Button
                shape="circle"
                icon={<X size="16px" />}
                size="small"
                className="flex-center remove-btn"
                onClick={() => {
                  deleteAttempt(attempt.id);
                }}
                danger
              />
            </div>
          ))}
        </>
      )}

      {havePreviousAttempts && (
        <div className="new-btn">
          <span className="new-btn-text">Add new</span>
          <Button
            type="primary"
            shape="circle"
            icon={<Plus />}
            size="large"
            className="flex-center"
            onClick={addNewAttempt}
            disabled={previousAttempts.length > 2}
          />
        </div>
      )}
    </>
  );
};
