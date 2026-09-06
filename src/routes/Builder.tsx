import React from "react";
import CVForm from "../components/CVForm";
import Preview from "./Preview";
import DownloadButton from "../components/DownloadButton";
import type { FormData, TemplateKey } from "../utils/types";
import { defaultFormData } from "../constants";
import "../styles/cv-theme.css";

type TemplateMeta = {
  label: string;
  accent: string;
  accentSoft: string;
};

const TEMPLATE_META: Record<TemplateKey, TemplateMeta> = {
  frontend: { label: "Frontend Developer", accent: "#3652ff", accentSoft: "#eef0ff" },
  backend: { label: "Backend Developer", accent: "#b8860f", accentSoft: "#fbf2dd" },
  "data-scientist": { label: "Data Scientist", accent: "#c2650b", accentSoft: "#fdf0e4" },
  "ux-designer": { label: "UX Designer", accent: "#d6486b", accentSoft: "#fdedf1" },
};

const Builder: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>(defaultFormData);
  const [selectedTemplate, setSelectedTemplate] = React.useState<TemplateKey>("frontend");

  const handleFormChange = (updatedData: FormData) => {
    setFormData(updatedData);
  };

  const handleTemplateChange = (template: TemplateKey) => {
    setSelectedTemplate(template);
    setFormData((prev) => ({ ...prev, role: template }));
  };

  return (
    <div className="cv-app" style={{ minHeight: "100vh" }}>
      <header className="cv-topbar">
        <div className="cv-brand">
          <span className="cv-brand-mark">CV</span>
          Resume Builder
        </div>

        <div className="cv-template-picker">
          {(Object.keys(TEMPLATE_META) as TemplateKey[]).map((key) => {
            const meta = TEMPLATE_META[key];
            const isActive = selectedTemplate === key;
            return (
              <button
                key={key}
                type="button"
                className="cv-template-chip"
                data-active={isActive}
                style={
                  {
                    "--chip-accent": meta.accent,
                    "--chip-accent-soft": meta.accentSoft,
                  } as React.CSSProperties
                }
                onClick={() => handleTemplateChange(key)}
              >
                <span className="cv-template-chip-swatch" />
                {meta.label}
              </button>
            );
          })}
        </div>
      </header>

      <div
        className="max-w-7xl mx-auto p-4 md:p-6"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "1.5rem",
        }}
      >
        <div className="builder-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
          <style>{`
            @media (min-width: 960px) {
              .builder-grid { grid-template-columns: minmax(320px, 460px) 1fr; align-items: start; }
              .builder-preview-col { position: sticky; top: 1.5rem; }
            }
          `}</style>

          <div>
            <CVForm formData={formData} onChange={handleFormChange} />
          </div>

          <div className="builder-preview-col" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Preview formData={formData} selectedTemplate={selectedTemplate} />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <DownloadButton data={formData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;
