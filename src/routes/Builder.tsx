import React, { useState } from "react";
import CVForm from "../components/CVForm";
import Preview from "./Preview";
import DownloadButton from "../components/DownloadButton";
import type { FormData, TemplateKey } from "../utils/types";
import { defaultFormData } from "../constants";

const Builder: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [selectedTemplate, setSelectedTemplate] =
    useState<TemplateKey>("frontend");

  const handleFormChange = (updatedData: FormData) => {
    setFormData(updatedData);
  };

  const handleTemplateChange = (template: TemplateKey) => {
    setSelectedTemplate(template);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left: Form and Template Selector */}
      <div className="space-y-6">
        <div>
          <label className="block mb-1 font-semibold">Select Template:</label>
          <select
            value={selectedTemplate}
            onChange={(e) =>
              handleTemplateChange(e.target.value as TemplateKey)
            }
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="data-scientist">Data Scientist</option>
            <option value="ux-designer">UX Designer</option>
          </select>
        </div>

        <CVForm formData={formData} onChange={handleFormChange} />
      </div>

      {/* Right: Preview and Download */}
      <div className="space-y-4">
        <Preview formData={formData} selectedTemplate={selectedTemplate} />
        <DownloadButton data={formData}/>
      </div>
    </div>
  );
};

export default Builder;
