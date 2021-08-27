import { Modal } from "antd";
import React from "react";
import { Document, Page } from "react-pdf";
import { capitalize } from "./utils/helpers";

export const DocModal = ({ show = false, handleClose, fileToShow }) => {
  console.log(fileToShow);
  const [_numPages, setNumPages] = React.useState(null);
  const [pageNumber] = React.useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Modal
      title={capitalize(fileToShow?.doc_type?.name || "Document")}
      visible={show}
      onOk={handleClose}
      onCancel={handleClose}
    >
      {fileToShow?.data?.file.includes(".pdf") ? (
        <Document
          file={fileToShow?.data?.file || null}
          onLoadSuccess={onDocumentLoadSuccess}
          style={{ maxWidth: "100%" }}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      ) : (
        <img
          style={{ maxWidth: "100%" }}
          src={fileToShow?.data?.file || null}
          alt="document"
        />
      )}
    </Modal>
  );
};
