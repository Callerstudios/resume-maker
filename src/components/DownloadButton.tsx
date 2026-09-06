import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Download } from "lucide-react";
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
      className="btn btn-primary"
      style={{ textDecoration: "none" }}
    >
      {({ loading }) => (
        <>
          <Download size={15} />
          {loading ? "Generating PDF…" : "Download PDF"}
        </>
      )}
    </PDFDownloadLink>
  );
};

export default DownloadButton;
