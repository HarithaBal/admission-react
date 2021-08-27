import { Card, Divider, Upload, Spin, Button, message, Tag, Alert } from "antd";
import React, { useState } from "react";
import { usePersistedState } from "../hooks/usePersistedState";
import { Plus } from "react-feather";
import { getFiles, uploadFile } from "../requests/authRequests";
import { AuthContext } from "../services/AuthService";
import { useBoolean } from "../hooks/useBoolean";
import { DocModal } from "../DocModal";

const docTypes = [
  {
    handle: "ration_card",
    name: "Ration Card",
    requiredFor: ["management", "community"],
  },
  {
    handle: "aadhar_card",
    name: "Aadhar Card",
    requiredFor: ["management", "community"],
  },
  {
    handle: "sslc_marklist",
    name: "SSLC Marklist",
    requiredFor: ["management", "community"],
  },
  {
    handle: "declaration_from_parish_priest",
    name: "Declaration from Parish Priest",
    requiredFor: ["community"],
  },
  { handle: "other_certificates", name: "Other Certificates", requiredFor: [] },
];

const uploadProps = {
  name: "avatar",
  listType: "picture-card",
  className: "avatar-uploader",
  showUploadList: true,
  maxCount: 1,
};

export const DocumentsForm = () => {
  const [files, setFiles] = usePersistedState([], "files");
  const [loading, setLoading] = useState(false);
  const [activeDocType, setActiveDocType] = useState(null);
  const [activeFile, setActiveFile] = useState(null);
  const [showModal, toggleModal] = useBoolean(false);
  const [fileToShow, setFileToShow] = useState(null);

  const { token } = React.useContext(AuthContext);

  const fetchFiles = async () => {
    setLoading(true);
    try {
      const response = await getFiles(token);
      setFiles(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchFiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append("file", activeFile);

    try {
      await uploadFile(formData, token, activeDocType);
      resetDoc();
      message.success("File uploaded successfully");
      fetchFiles();
    } catch (error) {
      // message.error(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  };

  const getClassName = (handle) => {
    if (activeDocType) {
      if (activeDocType !== handle) {
        return "disabled";
      }
    }
  };

  const viewFile = (handle) => {
    toggleModal();
    setFileToShow(files.find((file) => file.doc_type.name === handle));
    console.log("viewfile");
  };

  const hasFileType = (handle) => {
    return files.find((file) => file.doc_type.name === handle) !== undefined;
  };

  const resetDoc = () => {
    setActiveDocType(null);
    setActiveFile(null);
  };

  React.useEffect(() => {
    if (!showModal) {
      setFileToShow(null);
    }
  }, [showModal]);

  return (
    <div className="documents">
      <h1>Upload Supporting Documents</h1>
      <Divider />

      <Alert
        type="info"
        showIcon
        message="Instructions"
        description="The maximum accepted file size 2 MB. Files can be either images (jpg/jpeg/png etc) or pdf"
      />

      <div className="contents">
        {docTypes.map((docType) => (
          <Card
            title={docType.name}
            key={docType.handle}
            className={getClassName(docType.handle)}
          >
            {docType.requiredFor.length > 0 ? (
              <>
                Required for :{" "}
                {docType.requiredFor.map((type) => (
                  <Tag color="#00adb5" key={type}>
                    {type} quota
                  </Tag>
                ))}
              </>
            ) : (
              <Tag color="error">Optional</Tag>
            )}
            <Divider />

            <Upload
              {...uploadProps}
              maxCount={docType.handle === "other_certificates" ? null : 1}
              beforeUpload={(file) => {
                setActiveDocType(docType.handle);
                setActiveFile(file);
                return false;
              }}
            >
              <div>{loading ? <Spin /> : <Plus />}</div>
            </Upload>
            {hasFileType(docType.handle) && (
              <>
                <Button
                  onClick={() => {
                    viewFile(docType.handle);
                  }}
                >
                  View uploaded file
                </Button>
              </>
            )}
            <Button
              loading={loading}
              disabled={activeDocType !== docType.handle}
              type="primary"
              onClick={handleClick}
            >
              {hasFileType(docType.handle) ? "Upload another" : "Upload"}
            </Button>
            {activeDocType === docType.handle && (
              <Button type="primary" danger onClick={resetDoc}>
                Cancel
              </Button>
            )}
          </Card>
        ))}
      </div>
      <DocModal
        show={showModal}
        fileToShow={fileToShow}
        handleClose={toggleModal}
      />
    </div>
  );
};
