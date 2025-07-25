import React from "react";
import type { FormData, TemplateKey } from "../utils/types";
import { templates } from "../templates";

type Props = {
  formData: FormData;
  selectedTemplate: TemplateKey;
};

const Preview: React.FC<Props> = ({ formData, selectedTemplate }) => {
  const TemplateComponent = templates[selectedTemplate];

  if (!TemplateComponent) {
    return <div className="text-red-500">Invalid template selected</div>;
  }

  return (
    <div className="border rounded-lg p-4 bg-white shadow-md">
      <h2 className="text-xl font-bold mb-4">CV Preview</h2>
      <div className="text-sm">
        <TemplateComponent data={formData} />
      </div>
    </div>
  );
};

export default Preview;
