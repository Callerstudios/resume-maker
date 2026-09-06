import React from "react";
import type { FormData } from "../utils/types";

const themeVars = {
  "--tpl-accent": "#b8860f",
  "--tpl-ink": "#1b1f1d",
  "--tpl-tag-bg": "#fbf2dd",
  "--tpl-tag-ink": "#8a6a06",
  "--tpl-tag-font": '"IBM Plex Mono", monospace',
  "--tpl-head-font": '"IBM Plex Mono", monospace',
  "--tpl-body-font": '"IBM Plex Mono", monospace',
} as React.CSSProperties;

export default function BackendTemplate({ data }: { data: FormData }) {
  return (
    <div className="cv-doc" style={{ ...themeVars, fontSize: "0.86rem" }}>
      <header style={{ background: "#1b1f1d", color: "#f2ead3", padding: "2rem 2.5rem" }}>
        <p style={{ margin: 0, fontSize: "0.75rem", color: "#8f8b7c" }}>~/resume</p>
        <h1 style={{ margin: "0.35rem 0 0", fontSize: "1.7rem", fontWeight: 600, letterSpacing: "-0.01em" }}>
          <span style={{ color: "#d9a441" }}>&gt;</span> {data.name || "your-name"}
        </h1>
        <p style={{ margin: "0.6rem 0 0", color: "#c9c4b3", fontSize: "0.82rem", lineHeight: 1.7 }}>
          {[data.email, data.phone, data.address].filter(Boolean).map((line, i) => (
            <span key={i} style={{ display: "block" }}>
              {i === 0 ? "email:  " : i === 1 ? "phone:  " : "loc:    "}
              {line}
            </span>
          ))}
        </p>
      </header>

      <div style={{ padding: "2rem 2.5rem" }}>
        {data.summary && (
          <section className="cv-doc-section" style={{ marginTop: 0 }}>
            <h2 className="cv-doc-heading">$ summary</h2>
            <p style={{ margin: 0, lineHeight: 1.65 }}>{data.summary}</p>
          </section>
        )}

        {data.skills?.filter(Boolean).length > 0 && (
          <section className="cv-doc-section">
            <h2 className="cv-doc-heading">$ skills --list</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "0.3rem 1rem" }}>
              {data.skills.filter(Boolean).map((skill, i) => (
                <div key={i} style={{ color: "#3d4038" }}>
                  <span style={{ color: "#b8860f" }}>- </span>
                  {skill}
                </div>
              ))}
            </div>
          </section>
        )}

        {data.experience?.length > 0 && (
          <section className="cv-doc-section">
            <h2 className="cv-doc-heading">$ experience --log</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              {data.experience.map((exp, i) => (
                <div key={i} style={{ borderLeft: "2px solid #ecdfb8", paddingLeft: "1rem" }}>
                  <p style={{ margin: 0, fontWeight: 600 }}>
                    {exp.role} <span style={{ color: "#8a8672" }}>@ {exp.company}</span>
                  </p>
                  <p style={{ margin: "0.15rem 0 0.5rem", fontSize: "0.78rem", color: "#8a8672" }}>
                    {exp.startDate} → {exp.endDate || "present"}
                  </p>
                  {exp.description && <p style={{ margin: "0 0 0.4rem", lineHeight: 1.6 }}>{exp.description}</p>}
                  {exp.responsibilities?.filter(Boolean).length > 0 && (
                    <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                      {exp.responsibilities.filter(Boolean).map((res, j) => (
                        <li key={j} style={{ marginBottom: "0.25rem", lineHeight: 1.55 }}>
                          <span style={{ color: "#b8860f" }}>#</span> {res}
                        </li>
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
            <h2 className="cv-doc-heading">$ projects --show</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {data.projects.filter((p) => p.name).map((proj, i) => (
                <div key={i}>
                  <p style={{ margin: 0, fontWeight: 600 }}>{proj.name}</p>
                  {proj.description && <p style={{ margin: "0.2rem 0", lineHeight: 1.55 }}>{proj.description}</p>}
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ color: "#b8860f", fontSize: "0.78rem", textDecoration: "none" }}>
                      {proj.link}
                    </a>
                  )}
                  {proj.technologies && proj.technologies.filter(Boolean).length > 0 && (
                    <p style={{ margin: "0.3rem 0 0", fontSize: "0.78rem", color: "#8a8672" }}>
                      stack: {proj.technologies.join(", ")}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {data.education?.length > 0 && (
          <section className="cv-doc-section">
            <h2 className="cv-doc-heading">$ education --history</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {data.education.map((edu, i) => (
                <p key={i} style={{ margin: 0, lineHeight: 1.6 }}>
                  <span style={{ fontWeight: 600 }}>{edu.degree}</span> — {edu.institution}{" "}
                  <span style={{ color: "#8a8672", fontSize: "0.78rem" }}>
                    ({edu.startDate}–{edu.endDate})
                  </span>
                </p>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
