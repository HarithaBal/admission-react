import { Card, Divider, Upload, Spin } from "antd";
import React, { useState } from "react";
import { usePersistedState } from "../hooks/usePersistedState";
import { Plus } from "react-feather";

export const DocumentsForm = () => {
  const [image] = usePersistedState(null, "image");
  const [loading] = useState(false);

  const handleChange = () => {};

  return (
    <div className="documents">
      <h1>Upload Supporting Documents</h1>
      <Divider />

      <div className="contents disabled">
        <div className="disabled-overlay">
          <span>Coming soon...</span>
        </div>
        <Card title="Passport Sized Photo">
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            onChange={handleChange}
          >
            {image ? (
              <img src={image} alt="avatar" style={{ width: "100%" }} />
            ) : (
              <div>
                {loading ? <Spin /> : <Plus />}
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </Upload>
        </Card>

        <Card title="Catechism Certificate">
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            onChange={handleChange}
          >
            {image ? (
              <img src={image} alt="avatar" style={{ width: "100%" }} />
            ) : (
              <div>
                {loading ? <Spin /> : <Plus />}
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </Upload>
        </Card>

        <Card title="Declaration of Parish Priest">
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            onChange={handleChange}
          >
            {image ? (
              <img src={image} alt="avatar" style={{ width: "100%" }} />
            ) : (
              <div>
                {loading ? <Spin /> : <Plus />}
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </Upload>
        </Card>
      </div>
    </div>
  );
};
