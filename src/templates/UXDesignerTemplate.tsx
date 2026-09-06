import React from "react";
import type { FormData } from "../utils/types";

const themeVars = {
  "--tpl-accent": "#d6486b",
  "--tpl-ink": "#241b1e",
  "--tpl-tag-bg": "#fdedf1",
  "--tpl-tag-ink": "#b23458",
  "--tpl-tag-font": '"Manrope", sans-serif',
  "--tpl-head-font": '"Fraunces", serif',
  "--tpl-body-font": '"Manrope", sans-serif',
} as React.CSSProperties;

const dotGrid: React.CSSProperties = {
  backgroundImage: "radial-gradient(#e9d3da 1px, transparent 1px)",
  backgroundSize: "14px 14px",
};

const UXDesignerTemplate: React.FC<{ data: FormData }> = ({ data }) => {
  return (
    <div className="cv-doc" style={themeVars}>
      <header style={{ ...dotGrid, padding: "2.5rem 2.75rem 2rem" }}>
        <h1 style={{ margin: 0, fontFamily: "var(--tpl-head-font)", fontStyle: "italic", fontWeight: 500, fontSize: "2.3rem", lineHeight: 1.1 }}>
          {data.name || "Your Name"}
        </h1>
        {data.summary && (
          <p style={{ margin: "0.9rem 0 0", fontSize: "0.95rem", lineHeight: 1.65, maxWidth: "48ch" }}>
            {data.summary}
          </p>
        )}
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "2rem", padding: "0 2.75rem 2.5rem" }}>
        <aside style={{ borderLeft: "2px solid var(--tpl-accent)", paddingLeft: "1rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div>
            <h2 className="cv-doc-heading" style={{ marginBottom: "0.5rem" }}>Contact</h2>
            <div style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "#3f3438" }}>
              {data.email && <div>{data.email}</div>}
              {data.phone && <div>{data.phone}</div>}
              {data.address && <div>{data.address}</div>}
            </div>
          </div>

          {data.skills?.filter(Boolean).length > 0 && (
            <div>
              <h2 className="cv-doc-heading" style={{ marginBottom: "0.5rem" }}>Skills</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                {data.skills.filter(Boolean).map((skill, idx) => (
                  <span className="cv-tag" key={idx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {data.education?.length > 0 && (
            <div>
              <h2 className="cv-doc-heading" style={{ marginBottom: "0.5rem" }}>Education</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {data.education.map((edu, idx) => (
                  <div key={idx}>
                    <p style={{ margin: 0, fontSize: "0.85rem", fontWeight: 700 }}>{edu.degree}</p>
                    <p style={{ margin: "0.1rem 0 0", fontSize: "0.78rem", color: "#7a6b70" }}>{edu.institution}</p>
                    <p style={{ margin: "0.1rem 0 0", fontSize: "0.75rem", color: "#a3939a" }}>
                      {edu.startDate}–{edu.endDate}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>

        <main style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          {data.experience?.length > 0 && (
            <section>
              <h2 className="cv-doc-heading">Experience</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.15rem" }}>
                {data.experience.map((exp, idx) => (
                  <div key={idx}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem" }}>
                      <h3 style={{ margin: 0, fontFamily: "var(--tpl-head-font)", fontSize: "1.08rem", fontWeight: 600 }}>
                        {exp.role}
                      </h3>
                      <span style={{ fontSize: "0.76rem", color: "#a3939a" }}>
                        {exp.startDate} – {exp.endDate || "Present"}
                      </span>
                    </div>
                    <p style={{ margin: "0.1rem 0 0.4rem", fontSize: "0.85rem", color: "#7a6b70" }}>{exp.company}</p>
                    {exp.description && (
                      <p style={{ margin: 0, fontSize: "0.88rem", lineHeight: 1.6 }}>{exp.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.projects && data.projects.filter((p) => p.name).length > 0 && (
            <section>
              <h2 className="cv-doc-heading">Selected work</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {data.projects.filter((p) => p.name).map((proj, idx) => (
                  <div key={idx} style={{ display: "grid", gridTemplateColumns: proj.previewImage ? "1fr 120px" : "1fr", gap: "1rem", alignItems: "start" }}>
                    <div>
                      <h3 style={{ margin: 0, fontFamily: "var(--tpl-head-font)", fontSize: "1rem", fontWeight: 600 }}>
                        {proj.name}
                      </h3>
                      {proj.description && (
                        <p style={{ margin: "0.25rem 0", fontSize: "0.86rem", lineHeight: 1.55 }}>{proj.description}</p>
                      )}
                      {proj.link && (
                        <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.78rem", color: "var(--tpl-accent)" }}>
                          View project
                        </a>
                      )}
                      {proj.technologies && proj.technologies.filter(Boolean).length > 0 && (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginTop: "0.4rem" }}>
                          {proj.technologies.filter(Boolean).map((tech, i) => (
                            <span className="cv-tag" key={i} style={{ fontSize: "0.72rem" }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    {proj.previewImage && (
                      <img
                        src={proj.previewImage}
                        alt={`${proj.name} preview`}
                        style={{ width: "120px", height: "90px", objectFit: "cover", borderRadius: "6px" }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default UXDesignerTemplate;
