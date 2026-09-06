import React from "react";
import type { FormData } from "../utils/types";

const themeVars = {
  "--tpl-accent": "#3652ff",
  "--tpl-ink": "#14171f",
  "--tpl-tag-bg": "#eef0ff",
  "--tpl-tag-ink": "#3652ff",
  "--tpl-tag-font": '"IBM Plex Mono", monospace',
  "--tpl-head-font": '"Manrope", sans-serif',
  "--tpl-body-font": '"Manrope", sans-serif',
} as React.CSSProperties;

const FrontendTemplate: React.FC<{ data: FormData }> = ({ data }) => {
  return (
    <div className="cv-doc" style={{ ...themeVars, padding: "2.75rem 3rem" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "1rem", borderBottom: "2px solid var(--tpl-accent)", paddingBottom: "1rem" }}>
        <div>
          <h1 style={{ fontSize: "1.9rem", fontWeight: 800, letterSpacing: "-0.02em", margin: 0 }}>
            {data.name || "Your Name"}
          </h1>
          <p style={{ margin: "0.3rem 0 0", fontSize: "0.85rem", color: "#4b4f5a", fontFamily: '"IBM Plex Mono", monospace' }}>
            {[data.email, data.phone, data.address].filter(Boolean).join("  ·  ") || "email · phone · location"}
          </p>
        </div>
      </header>

      {data.summary && (
        <section className="cv-doc-section">
          <p style={{ fontSize: "0.92rem", lineHeight: 1.6, maxWidth: "58ch" }}>{data.summary}</p>
        </section>
      )}

      {data.skills?.length > 0 && (
        <section className="cv-doc-section">
          <h2 className="cv-doc-heading">Skills</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {data.skills.filter(Boolean).map((skill, idx) => (
              <span className="cv-tag" key={idx}>
                &lt;{skill}&nbsp;/&gt;
              </span>
            ))}
          </div>
        </section>
      )}

      {data.experience?.length > 0 && (
        <section className="cv-doc-section">
          <h2 className="cv-doc-heading">Experience</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            {data.experience.map((exp, idx) => (
              <div key={idx} style={{ display: "grid", gridTemplateColumns: "7.5rem 1fr", gap: "1rem" }}>
                <div style={{ fontSize: "0.78rem", color: "#6b7280", fontFamily: '"IBM Plex Mono", monospace', paddingTop: "0.1rem" }}>
                  {exp.startDate} – {exp.endDate || "Present"}
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: "0.98rem", fontWeight: 700 }}>{exp.role}</h3>
                  <p style={{ margin: "0.1rem 0 0.4rem", fontSize: "0.85rem", color: "#4b4f5a" }}>{exp.company}</p>
                  {exp.description && (
                    <p style={{ margin: "0 0 0.3rem", fontSize: "0.88rem", lineHeight: 1.55 }}>{exp.description}</p>
                  )}
                  {exp.responsibilities?.filter(Boolean).length > 0 && (
                    <ul style={{ margin: 0, paddingLeft: "1.1rem", fontSize: "0.88rem", lineHeight: 1.6 }}>
                      {exp.responsibilities.filter(Boolean).map((res, j) => (
                        <li key={j}>{res}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {data.projects && data.projects.filter((p) => p.name).length > 0 && (
        <section className="cv-doc-section">
          <h2 className="cv-doc-heading">Projects</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {data.projects.filter((p) => p.name).map((project, idx) => (
              <div key={idx} style={{ border: "1px solid #e2e1dc", borderRadius: "8px", padding: "0.85rem 1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "0.75rem" }}>
                  <h3 style={{ margin: 0, fontSize: "0.95rem", fontWeight: 700 }}>{project.name}</h3>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.78rem", color: "var(--tpl-accent)", fontFamily: '"IBM Plex Mono", monospace', textDecoration: "none" }}>
                      {project.link.replace(/^https?:\/\//, "")}
                    </a>
                  )}
                </div>
                {project.description && (
                  <p style={{ margin: "0.35rem 0", fontSize: "0.86rem", lineHeight: 1.55 }}>{project.description}</p>
                )}
                {project.previewImage && (
                  <img
                    src={project.previewImage}
                    alt={`${project.name} preview`}
                    style={{ marginTop: "0.5rem", borderRadius: "6px", maxHeight: "160px", width: "auto" }}
                  />
                )}
                {project.technologies && project.technologies.filter(Boolean).length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginTop: "0.5rem" }}>
                    {project.technologies.filter(Boolean).map((tech, i) => (
                      <span className="cv-tag" key={i} style={{ fontSize: "0.72rem" }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {data.education?.length > 0 && (
        <section className="cv-doc-section">
          <h2 className="cv-doc-heading">Education</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {data.education.map((edu, idx) => (
              <div key={idx} style={{ display: "grid", gridTemplateColumns: "7.5rem 1fr", gap: "1rem" }}>
                <div style={{ fontSize: "0.78rem", color: "#6b7280", fontFamily: '"IBM Plex Mono", monospace' }}>
                  {edu.startDate} – {edu.endDate}
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: "0.92rem", fontWeight: 700 }}>{edu.degree}</h3>
                  <p style={{ margin: "0.1rem 0 0", fontSize: "0.85rem", color: "#4b4f5a" }}>{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default FrontendTemplate;
