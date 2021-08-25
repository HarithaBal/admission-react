import { Card, Input, Button, Select } from "antd";
import React, { useContext } from "react";
import { Plus, X } from "react-feather";
import { DataContext } from "../services/DataService";

const options = ["A+", "A", "B+", "B", "C+", "C", "D+", "D"];
const cbseOptions = ["A1", "A2", "B1", "B2", "C1", "C2", "D1"];

export const Marks = () => {
  const {
    grades,
    changeGrades,
    otherGrades,
    addNewGrade,
    deleteGrade,
    updateGrade,
  } = useContext(DataContext);

  return (
    <>
      <Card title="Grades obtained for Qualifying Examination (SSLC)">
        <div className="grade-table">
          <div className="grade heading">
            <div className="grade--type">Subject</div>
            <div className="grade--value">Grade</div>
          </div>
          <div className="grade">
            <div className="grade--type">Language 1</div>
            <Select
              className="grade--type"
              value={grades.lang1}
              onChange={(e) => {
                changeGrades("lang1", e);
              }}
            >
              {options.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div className="grade">
            <div className="grade--type">Language 2</div>
            <Select
              className="grade--type"
              value={grades.lang2}
              onChange={(e) => {
                changeGrades("lang2", e);
              }}
            >
              {options.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div className="grade">
            <div className="grade--type">English</div>
            <Select
              className="grade--type"
              value={grades.eng}
              onChange={(e) => {
                changeGrades("eng", e);
              }}
            >
              {options.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div className="grade">
            <div className="grade--type">Hindi</div>
            <Select
              className="grade--type"
              value={grades.hin}
              onChange={(e) => {
                changeGrades("hin", e);
              }}
            >
              {options.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div className="grade">
            <div className="grade--type">Physics</div>
            <Select
              className="grade--type"
              value={grades.phy}
              onChange={(e) => {
                changeGrades("phy", e);
              }}
            >
              {options.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div className="grade">
            <div className="grade--type">Chemistry</div>
            <Select
              className="grade--type"
              value={grades.che}
              onChange={(e) => {
                changeGrades("che", e);
              }}
            >
              {options.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div className="grade">
            <div className="grade--type">Biology</div>
            <Select
              className="grade--type"
              value={grades.bio}
              onChange={(e) => {
                changeGrades("bio", e);
              }}
            >
              {options.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div className="grade">
            <div className="grade--type">S.S.</div>
            <Select
              className="grade--type"
              value={grades.ss}
              onChange={(e) => {
                changeGrades("ss", e);
              }}
            >
              {options.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div className="grade">
            <div className="grade--type">Maths.</div>
            <Select
              className="grade--type"
              value={grades.maths}
              onChange={(e) => {
                changeGrades("maths", e);
              }}
            >
              {options.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div className="grade">
            <div className="grade--type">I.T.</div>
            <Select
              className="grade--type"
              value={grades.it}
              onChange={(e) => {
                changeGrades("it", e);
              }}
            >
              {options.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>
          </div>
        </div>
      </Card>

      <Card title="C.B.S.E., I.C.S.E. and for other streams">
        {otherGrades.map((otherGrade, index) => (
          <div key={otherGrade.id} className="attempt">
            <span className="sl-no">{index + 1}</span>
            <Input
              type="text"
              placeholder="Subject"
              className="flex-1"
              value={otherGrade.subject}
              onChange={(e) => {
                updateGrade(otherGrade.id, "subject", e.target.value);
              }}
            />
            <Input
              type="text"
              placeholder="Marks"
              className="flex-1"
              value={otherGrade.marks}
              onChange={(e) => {
                updateGrade(otherGrade.id, "marks", e.target.value);
              }}
            />
            <Select
              placeholder="Grade"
              className="flex-1"
              value={otherGrade.maxMarks}
              onChange={(e) => {
                updateGrade(otherGrade.id, "maxMarks", e);
              }}
            >
              {options.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>
            <Button
              shape="circle"
              icon={<X size="16px" />}
              size="small"
              className="flex-center remove-btn "
              onClick={() => {
                deleteGrade(otherGrade.id);
              }}
              danger
            />
          </div>
        ))}
        <div className="new-btn">
          <span className="new-btn-text">Add new</span>
          <Button
            type="primary"
            shape="circle"
            icon={<Plus />}
            size="large"
            className="flex-center"
            onClick={addNewGrade}
            disabled={otherGrades.length > 8}
          />
        </div>
      </Card>
    </>
  );
};
