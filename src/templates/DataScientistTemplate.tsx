import React from "react";
import type { FormData } from "../utils/types";

const themeVars = {
  "--tpl-accent": "#c2650b",
  "--tpl-ink": "#20211f",
  "--tpl-tag-bg": "#fdf0e4",
  "--tpl-tag-ink": "#a3540a",
  "--tpl-tag-font": '"Manrope", sans-serif',
  "--tpl-head-font": '"Source Serif 4", serif',
  "--tpl-body-font": '"Manrope", sans-serif',
} as React.CSSProperties;

export default function DataScientistTemplate({ data }: { data: FormData }) {
  return (
    <div className="cv-doc" style={{ ...themeVars, padding: "2.75rem 3rem" }}>
      <header>
        <h1 style={{ margin: 0, fontSize: "2rem", fontWeight: 600, letterSpacing: "-0.01em" }}>
          {data.name || "Your Name"}
        </h1>
        <p style={{ margin: "0.4rem 0 0", fontSize: "0.85rem", color: "#5b5d59" }}>
          {[data.email, data.phone, data.address].filter(Boolean).join("   |   ") || "email | phone | location"}
        </p>
        <div style={{ height: "1px", background: "#e2e1dc", margin: "1.1rem 0 0" }} />
      </header>

      {data.summary && (
        <section className="cv-doc-section">
          <p style={{ margin: 0, fontSize: "0.94rem", lineHeight: 1.65, maxWidth: "62ch" }}>{data.summary}</p>
        </section>
      )}

      {data.skills?.filter(Boolean).length > 0 && (
        <section className="cv-doc-section">
          <h2 className="cv-doc-heading" style={{ fontFamily: "var(--tpl-head-font)", fontSize: "1rem", color: "var(--tpl-ink)", fontWeight: 600, borderBottom: "2px solid var(--tpl-accent)", paddingBottom: "0.35rem", display: "block" }}>
            Technical skills
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "0.5rem 1rem", marginTop: "0.7rem" }}>
            {data.skills.filter(Boolean).map((skill, i) => (
              <div key={i} style={{ fontSize: "0.85rem", borderLeft: "2px solid #f2d9bd", paddingLeft: "0.6rem" }}>
                {skill}
              </div>
            ))}
          </div>
        </section>
      )}

      {data.experience?.length > 0 && (
        <section className="cv-doc-section">
          <h2 style={{ fontFamily: "var(--tpl-head-font)", fontSize: "1rem", color: "var(--tpl-ink)", fontWeight: 600, borderBottom: "2px solid var(--tpl-accent)", paddingBottom: "0.35rem", margin: 0 }}>
            Professional experience
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", marginTop: "0.9rem" }}>
            {data.experience.map((exp, i) => (
              <div key={i}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem" }}>
                  <h3 style={{ margin: 0, fontFamily: "var(--tpl-head-font)", fontSize: "1.02rem", fontWeight: 600 }}>
                    {exp.role}, {exp.company}
                  </h3>
                  <span style={{ fontSize: "0.78rem", color: "#8a8a86" }}>
                    {exp.startDate} – {exp.endDate || "Present"}
                  </span>
                </div>
                {exp.description && (
                  <p style={{ margin: "0.35rem 0", fontSize: "0.88rem", lineHeight: 1.6 }}>{exp.description}</p>
                )}
                {exp.responsibilities?.filter(Boolean).length > 0 && (
                  <ul style={{ margin: "0.3rem 0 0", paddingLeft: "1.15rem", fontSize: "0.88rem", lineHeight: 1.6 }}>
                    {exp.responsibilities.filter(Boolean).map((res, j) => (
                      <li key={j}>{res}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {data.projects && data.projects.filter((p) => p.name).length > 0 && (
        <section className="cv-doc-section">
          <h2 style={{ fontFamily: "var(--tpl-head-font)", fontSize: "1rem", color: "var(--tpl-ink)", fontWeight: 600, borderBottom: "2px solid var(--tpl-accent)", paddingBottom: "0.35rem", margin: 0 }}>
            Projects &amp; analyses
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem", marginTop: "0.9rem" }}>
            {data.projects.filter((p) => p.name).map((proj, i) => (
              <div key={i}>
                <h3 style={{ margin: 0, fontFamily: "var(--tpl-head-font)", fontSize: "0.98rem", fontWeight: 600 }}>
                  {proj.name}
                </h3>
                {proj.description && (
                  <p style={{ margin: "0.25rem 0", fontSize: "0.87rem", lineHeight: 1.55, fontStyle: "italic", color: "#42433f" }}>
                    {proj.description}
                  </p>
                )}
                {proj.link && (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.8rem", color: "var(--tpl-accent)" }}>
                    {proj.link}
                  </a>
                )}
                {proj.technologies && proj.technologies.filter(Boolean).length > 0 && (
                  <p style={{ margin: "0.3rem 0 0", fontSize: "0.82rem" }}>
                    <strong>Tools:</strong> {proj.technologies.join(", ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {data.education?.length > 0 && (
        <section className="cv-doc-section">
          <h2 style={{ fontFamily: "var(--tpl-head-font)", fontSize: "1rem", color: "var(--tpl-ink)", fontWeight: 600, borderBottom: "2px solid var(--tpl-accent)", paddingBottom: "0.35rem", margin: 0 }}>
            Education
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.8rem" }}>
            {data.education.map((edu, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
                <h3 style={{ margin: 0, fontFamily: "var(--tpl-head-font)", fontSize: "0.94rem", fontWeight: 600 }}>
                  {edu.degree} — {edu.institution}
                </h3>
                <span style={{ fontSize: "0.78rem", color: "#8a8a86" }}>
                  {edu.startDate} – {edu.endDate}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
