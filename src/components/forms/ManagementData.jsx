import { Card, Divider } from "antd";
import React, { useContext } from "react";
import { FormHeader } from "../FormHeader";
import { ManagementDataContext } from "../services/ManagementDataService";

export const ManagementData = () => {
  const { data } = useContext(ManagementDataContext);
  const details = data.data;

  const preferencesData = [
    {
      id: 1,
      value: "Science Biology Group (Physics, Chemistry, Mathematics, Biology)",
    },
    {
      id: 2,
      value:
        "Science Computer Group (Physics, Chemistry, Mathematics, Computer Science)",
    },
    {
      id: 3,
      value:
        "Commerce Group (Business Studies, Economics, Accountancy, Computer Application)",
    },
  ];
  function findArrayElementById(id) {
    return preferencesData.find((element) => {
      return element.id === id;
    }).value;
  }

  function iaAnyGradeExist() {
    var isExists = false;
    details.otherGrades.forEach(function (item) {
      if (item.subject != null) {
        isExists = true;
      }
    });
    return isExists;
  }

  return (
    <>
      <FormHeader />
      <div className="form--heading">
        <h2>Management Quota</h2>
        {data && <h2>{"Application Number: 2021-22/M/0" + data.id}</h2>}
      </div>
      <Divider />

      <Card>
        <div className="detail-container">
          <div className="detail-container--type">
            Name of Qualifying Examination
          </div>
          <div className="detail-container--value">
            {details.qualifying_examination}
          </div>
        </div>
        <div className="detail-container">
          <div className="detail-container--type">Register Number</div>
          <div className="detail-container--value">
            {details.register_number}
          </div>
        </div>
        <div className="detail-container">
          <div className="detail-container--type">School Name</div>
          <div className="detail-container--value">{details.school}</div>
        </div>
        <div className="detail-container">
          <div className="detail-container--type">Month & Year of passing</div>
          <div className="detail-container--value">{details.passing}</div>
        </div>
        <div className="detail-container">
          <div className="detail-container--type">Name</div>
          <div className="detail-container--value">{details.name}</div>
        </div>

        <div className="detail-container">
          <div className="detail-container--type">Gender</div>
          <div className="detail-container--value">{details.gender}</div>
        </div>
        <div className="detail-container">
          <div className="detail-container--type">Date of birth</div>
          <div className="detail-container--value">{details.dob}</div>
        </div>
        <div className="detail-container">
          <div className="detail-container--type">Email id</div>
          <div className="detail-container--value">{details.email}</div>
        </div>
        <div className="detail-container">
          <div className="detail-container--type">Phone Number</div>
          <div className="detail-container--value">{details.phone}</div>
        </div>
      </Card>

      <Card title="Place of Residence">
        <div className="detail-container">
          <div className="detail-container--type">State</div>
          <div className="detail-container--value">{details.state}</div>
        </div>
        <div className="detail-container">
          <div className="detail-container--type">District</div>
          <div className="detail-container--value">{details.district}</div>
        </div>
        <div className="detail-container">
          <div className="detail-container--type">Taluk</div>
          <div className="detail-container--value">{details.taluk}</div>
        </div>
        <div className="detail-container">
          <div className="detail-container--type">
            Grama Panchayath / Municipality / Corporation
          </div>
          <div className="detail-container--value">
            {details.gramaPanchayath}
          </div>
        </div>
        <div className="detail-container">
          <div className="detail-container--type">Permanent Address</div>
          <div className="detail-container--value">
            {details.permanentAddress}
          </div>
        </div>
        <div className="detail-container">
          <div className="detail-container--type">pin</div>
          <div className="detail-container--value">{details.permanentPin}</div>
        </div>
        <div className="detail-container">
          <div className="detail-container--type">
            Address to which communications are to be sent
          </div>
          <div className="detail-container--value">
            {details.currentAddress}
          </div>
        </div>
        <div className="detail-container">
          <div className="detail-container--type">pin</div>
          <div className="detail-container--value">{details.currentPin}</div>
        </div>
      </Card>
      <Card>
        <div className="detail-container">
          <div className="detail-container--type">
            Name of Father / Mother / Guardian
          </div>
          <div className="detail-container--value">{details.guardian}</div>
        </div>
        <div className="detail-container">
          <div className="detail-container--type">
            Occupation of Father / Mother / Guardian
          </div>
          <div className="detail-container--value">
            {details.guardianOccupation}
          </div>
        </div>
      </Card>
      <Card>
        <div className="detail-container">
          <div className="detail-container--type">Community</div>
          <div className="detail-container--value">{details.community}</div>
        </div>
        <div className="detail-container">
          <div className="detail-container--type">Religion</div>
          <div className="detail-container--value">{details.religion}</div>
        </div>
        <div className="detail-container">
          <div className="detail-container--type">Caste</div>
          <div className="detail-container--value">{details.caste}</div>
        </div>
      </Card>
      <Card>
        <div className="detail-container">
          <div className="detail-container--type">
            Whether applicant belongs to Latin Catholic
          </div>
          <div className="detail-container--value">
            {details.is_latin_catholic ? "Yes" : "No"}
          </div>
        </div>
        <div className="detail-container">
          <div className="detail-container--type">
            Whether applicant is differently abled
          </div>
          <div className="detail-container--value">
            {details.differently_abled}
          </div>
        </div>
      </Card>

      {details.previousAttempts.length !== 0 && (
        <Card title="previousAttempts">
          {details.previousAttempts.map((item, index) => (
            <ol>
              <li key={index}>
                <div className="detail-container">
                  <div className="detail-container--type">date :</div>
                  <div className="detail-container--value">{item.date}</div>
                  <div className="detail-container--type">Register no :</div>
                  <div className="detail-container--value">
                    {item.register_number}
                  </div>
                </div>
              </li>
            </ol>
          ))}
        </Card>
      )}
      {(details.grades.lang1 ||
        details.grades.lang2 ||
        details.grades.eng ||
        details.grades.hin ||
        details.grades.phy ||
        details.grades.che ||
        details.grades.bio ||
        details.grades.ss ||
        details.grades.maths ||
        details.grades.it) && (
        <Card title="Grades obtained for Qualifying Examination (SSLC)">
          {details.grades.lang1 && (
            <div className="detail-container">
              <div className="detail-container--type">Language 1</div>
              <div className="detail-container--value">
                {details.grades.lang1}
              </div>
            </div>
          )}
          {details.grades.lang2 && (
            <div className="detail-container">
              <div className="detail-container--type">Language 2</div>
              <div className="detail-container--value">
                {details.grades.lang2}
              </div>
            </div>
          )}
          {details.grades.eng && (
            <div className="detail-container">
              <div className="detail-container--type">English</div>
              <div className="detail-container--value">
                {details.grades.eng}
              </div>
            </div>
          )}
          {details.grades.hin && (
            <div className="detail-container">
              <div className="detail-container--type">Hindi</div>
              <div className="detail-container--value">
                {details.grades.hin}
              </div>
            </div>
          )}
          {details.grades.phy && (
            <div className="detail-container">
              <div className="detail-container--type">Physics</div>
              <div className="detail-container--value">
                {details.grades.phy}
              </div>
            </div>
          )}
          {details.grades.che && (
            <div className="detail-container">
              <div className="detail-container--type">Chemistry</div>
              <div className="detail-container--value">
                {details.grades.che}
              </div>
            </div>
          )}
          {details.grades.bio && (
            <div className="detail-container">
              <div className="detail-container--type">Biology</div>
              <div className="detail-container--value">
                {details.grades.bio}
              </div>
            </div>
          )}
          {details.grades.ss && (
            <div className="detail-container">
              <div className="detail-container--type">S.S.</div>
              <div className="detail-container--value">{details.grades.ss}</div>
            </div>
          )}
          {details.grades.maths && (
            <div className="detail-container">
              <div className="detail-container--type">Maths</div>
              <div className="detail-container--value">
                {details.grades.maths}
              </div>
            </div>
          )}
          {details.grades.it && (
            <div className="detail-container">
              <div className="detail-container--type">I.T.</div>
              <div className="detail-container--value">{details.grades.it}</div>
            </div>
          )}
        </Card>
      )}
      {iaAnyGradeExist() && (
        <Card title="C.B.S.E., I.C.S.E. and for other streams">
          {details.otherGrades.map((items, id) => (
            <ol>
              <li key={id}>
                <div className="detail-container">
                  <div className="detail-container--type">{items.subject}</div>

                  <div className="detail-container--value">{items.marks}</div>
                  <div className="detail-container--value">
                    {items.maxMarks}
                  </div>
                </div>
              </li>
            </ol>
          ))}
        </Card>
      )}
      <Card title="Group and Subject combinations">
        <div className="detail-container">
          <div className="detail-container--type">First Preference</div>
          <div className="detail-container--value">
            {findArrayElementById(details.preferences.preference_1)}
          </div>
        </div>
        <div className="detail-container">
          <div className="detail-container--type">Second Preference</div>
          <div className="detail-container--value">
            {findArrayElementById(details.preferences.preference_2)}
          </div>
        </div>
        <div className="detail-container">
          <div className="detail-container--type">Third Preference</div>
          <div className="detail-container--value">
            {findArrayElementById(details.preferences.preference_3)}
          </div>
        </div>
      </Card>
      <Card>
        <div className="detail-container">
          <div className="detail-container--type">Second language chosen</div>
          <div className="detail-container--value">
            {details.second_language}
          </div>
        </div>
      </Card>
      <div className="detail-container">
        <div className="detail-container--type">place</div>
        <div className="detail-container--value">{details.place}</div>
      </div>
    </>
  );
};
