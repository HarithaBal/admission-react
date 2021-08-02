import { Card, Input, Button } from "antd";
import React, { useContext } from "react";
import { Plus, X } from "react-feather";
import { DataContext } from "../services/DataService";

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
              <Input
                type="text"
                className="grade--type"
                value={grades.lang1}
                onChange={(e) => {
                  changeGrades("lang1", e.target.value);
                }}
              />
            </div>
            <div className="grade">
              <div className="grade--type">Language 2</div>
              <Input
                type="text"
                className="grade--type"
                value={grades.lang2}
                onChange={(e) => {
                  changeGrades("lang2", e.target.value);
                }}
              />
            </div>
            <div className="grade">
              <div className="grade--type">English</div>
              <Input
                type="text"
                className="grade--type"
                value={grades.eng}
                onChange={(e) => {
                  changeGrades("eng", e.target.value);
                }}
              />
            </div>
            <div className="grade">
              <div className="grade--type">Hindi</div>
              <Input
                type="text"
                className="grade--type"
                value={grades.hin}
                onChange={(e) => {
                  changeGrades("hin", e.target.value);
                }}
              />
            </div>
            <div className="grade">
              <div className="grade--type">Physics</div>
              <Input
                type="text"
                className="grade--type"
                value={grades.phy}
                onChange={(e) => {
                  changeGrades("phy", e.target.value);
                }}
              />
            </div>
            <div className="grade">
              <div className="grade--type">Chemistry</div>
              <Input
                type="text"
                className="grade--type"
                value={grades.che}
                onChange={(e) => {
                  changeGrades("che", e.target.value);
                }}
              />
            </div>
            <div className="grade">
              <div className="grade--type">Biology</div>
              <Input
                type="text"
                className="grade--type"
                value={grades.bio}
                onChange={(e) => {
                  changeGrades("bio", e.target.value);
                }}
              />
            </div>
            <div className="grade">
              <div className="grade--type">S.S.</div>
              <Input
                type="text"
                className="grade--type"
                value={grades.ss}
                onChange={(e) => {
                  changeGrades("ss", e.target.value);
                }}
              />
            </div>
            <div className="grade">
              <div className="grade--type">Maths.</div>
              <Input
                type="text"
                className="grade--type"
                value={grades.maths}
                onChange={(e) => {
                  changeGrades("maths", e.target.value);
                }}
              />
            </div>
            <div className="grade">
              <div className="grade--type">I.T.</div>
              <Input
                type="text"
                className="grade--type"
                value={grades.it}
                onChange={(e) => {
                  changeGrades("it", e.target.value);
                }}
              />
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
              <Input
                type="text"
                placeholder="Maximum Marks / Grade"
                className="flex-1"
                value={otherGrade.maxMarks}
                onChange={(e) => {
                  updateGrade(otherGrade.id, "maxMarks", e.target.value);
                }}
              />
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
