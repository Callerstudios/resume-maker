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
    return <div className="text-red-500">Invalid template selected {selectedTemplate}</div>;
  }

  return (
    <div className="cv-preview-wrap">
      <div className="cv-preview-frame">
        <div className="cv-paper">
          <TemplateComponent data={formData} />
        </div>
      </div>
    </div>
  );
};

export default Preview;
