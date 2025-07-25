// src/templates/FrontendTemplate.tsx
import React from "react";
import type { FormData } from "../utils/types";

const FrontendTemplate: React.FC<{ data: FormData }> = ({ data }) => {
  return (
    <div className="p-8 max-w-3xl mx-auto bg-white text-gray-900 font-sans leading-relaxed">
      {/* Name and Contact */}
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold">{data.name}</h1>
        <p>
          {data.email} | {data.phone} | {data.address}
        </p>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">
          Professional Summary
        </h2>
        <p>{data.summary}</p>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">
          Skills
        </h2>
        <ul className="flex flex-wrap gap-2">
          {data.skills.map((skill, idx) => (
            <li
              key={idx}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      {data.projects && <section className="mb-6">
        <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">
          Projects
        </h2>
        {data.projects.map((project, idx) => (
          <div key={idx} className="mb-3">
            <h3 className="font-bold">{project.name}</h3>
            <p>{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-sm"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </section>}

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">
          Work Experience
        </h2>
        {data.experience.map((exp, idx) => (
          <div key={idx} className="mb-4">
            <h3 className="font-bold">
              {exp.title} - {exp.company}
            </h3>
            <p className="text-sm text-gray-600">
              {exp.startDate} - {exp.endDate}
            </p>
            <ul className="list-disc ml-6 mt-1 text-sm">
              {exp.responsibilities.map((res, i) => (
                <li key={i}>{res}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education */}
      <section>
        <h2 className="text-xl font-semibold border-b border-gray-300 pb-1 mb-2">
          Education
        </h2>
        {data.education.map((edu, idx) => (
          <div key={idx} className="mb-3">
            <h3 className="font-bold">{edu.degree}</h3>
            <p>{edu.school}</p>
            <p className="text-sm text-gray-600">
              {edu.startDate} - {edu.endDate}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FrontendTemplate;
