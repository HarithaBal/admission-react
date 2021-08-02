import { Card, Divider } from "antd";
import React, { useContext } from "react";
import { FormHeader } from "../FormHeader";
import { CommunityDataContext } from "../services/CommunityDataService";

export const CommunityData = () => {
  const { data } = useContext(CommunityDataContext);
  const details = data.data;

  return (
    <>
      <FormHeader />
      <div className="form--heading">
        <h2>Community Quota</h2>
        {data && <h2>{"Application Number: 2021-22/C/0" + data.id}</h2>}
      </div>
      <Divider />

      <Card>
        <div className="detail-container">
          <div className="detail-container--type">School Name</div>
          <div className="detail-container--value">{details.school}</div>
        </div>
        <div className="detail-container">
          <div className="detail-container--type">Name</div>
          <div className="detail-container--value">{details.name}</div>
        </div>
        <div className="detail-container">
          <div className="detail-container--type">Expansion of initials</div>
          <div className="detail-container--value">{details.initials}</div>
        </div>
        <div className="detail-container">
          <div className="detail-container--type">Gender</div>
          <div className="detail-container--value">{details.gender}</div>
        </div>
        <div className="detail-container">
          <div className="detail-container--type">Date of birth</div>
          <div className="detail-container--value">{details.dob}</div>
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
    </>
  );
};
