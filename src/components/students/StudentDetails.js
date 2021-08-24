import React from "react";
import { Tag } from "antd";
import { capitalize } from "../utils/helpers";

export const StudentDetails = (details) => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    setItems(() => {
      const temp = [];
      details.details.forEach((detail) => {
        if (!temp.includes(detail.doc_type.name)) {
          temp.push(detail.doc_type.name);
        }
      });
      return temp;
    });
  }, [details]);

  return (
    <div className="student-details">
      {items.map((item) => (
        <Tag key={item} color="green">
          {capitalize(item)}
        </Tag>
      ))}
    </div>
  );
};
