import React, { useContext } from "react";
import { DataContext } from "../services/DataService";
import { Card, Input, Form, Cascader } from "antd";
import { states } from "../utils/states";
const { Item } = Form;

export const Location = () => {
  const { gramaPanchayath, setGramaPanchayath, location, setLocation } =
    useContext(DataContext);

  return (
    <Card>
      <div className="label">Place of Residence: State / District / Taluk</div>

      <Item name="district">
        <Cascader
          value={location}
          options={states}
          onChange={setLocation}
          placeholder="Kerala / Alappuzha / Ambalappuzha"
        />
      </Item>

      <div className="label">Grama Panchayath / Municipality / Corporation</div>
      <Input
        value={gramaPanchayath}
        onChange={setGramaPanchayath}
        type="text"
        placeholder="Eg: Kalamassery"
      />
    </Card>
  );
};
