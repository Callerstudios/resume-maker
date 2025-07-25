import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "../pdf/PDFDocument";
import type { FormData } from "../utils/types";

type DownloadButtonProps = {
  data: FormData;
};

const DownloadButton: React.FC<DownloadButtonProps> = ({ data }) => {
  return (
    <PDFDownloadLink
      document={<PDFDocument data={data} />}
      fileName={`${data.name?.split(" ").join("_") || "resume"}.pdf`}
      style={{
        padding: "10px 20px",
        backgroundColor: "#4F46E5",
        color: "white",
        border: "none",
        borderRadius: "5px",
        textDecoration: "none",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      {({ loading }) => (loading ? "Generating PDF..." : "Download PDF")}
    </PDFDownloadLink>
  );
};

export default DownloadButton;
