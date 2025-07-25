// src/templates/UXDesignerTemplate.tsx
import React from "react";
import type { FormData } from "../utils/types";

interface Props {
  data: FormData;
}

const UXDesignerTemplate: React.FC<Props> = ({ data }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <header className="mb-4">
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p className="text-gray-600">{data.role}</p>
        <p className="text-sm">
          {data.email} | {data.phone}
        </p>
        <p className="text-sm">{data.address}</p>
      </header>

      <section className="mb-4">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Profile</h2>
        <p>{data.summary}</p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Skills</h2>
        <ul className="flex flex-wrap gap-2">
          {data.skills.map((skill, idx) => (
            <li key={idx} className="bg-gray-100 text-sm px-2 py-1 rounded">
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Experience</h2>
        {data.experience.map((exp, idx) => (
          <div key={idx} className="mb-3">
            <h3 className="font-bold">
              {exp.role} - {exp.company}
            </h3>
            <p className="text-sm text-gray-500">
              {exp.startDate} – {exp.endDate}
            </p>
            <p className="text-sm">{exp.description}</p>
          </div>
        ))}
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold border-b pb-1 mb-2">Education</h2>
        {data.education.map((edu, idx) => (
          <div key={idx} className="mb-3">
            <h3 className="font-bold">
              {edu.degree} - {edu.institution}
            </h3>
            <p className="text-sm text-gray-500">
              {edu.startDate} – {edu.endDate}
            </p>
          </div>
        ))}
      </section>

      {data.projects && data.projects.length > 0 && (
        <section className="mb-4">
          <h2 className="text-xl font-semibold border-b pb-1 mb-2">Projects</h2>
          {data.projects.map((proj, idx) => (
            <div key={idx} className="mb-2">
              <h3 className="font-semibold">{proj.name}</h3>
              <p className="text-sm">{proj.description}</p>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm underline"
                >
                  View Project
                </a>
              )}
              {proj.technologies && proj.technologies?.length > 0 && (
                <p>
                  <strong>Technologies:</strong>{" "}
                  {proj.technologies.join(", ")}
                </p>
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default UXDesignerTemplate;
