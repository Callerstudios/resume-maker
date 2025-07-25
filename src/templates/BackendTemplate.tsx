// src/templates/BackendTemplate.tsx

import type { FormData } from "../utils/types";

type Props = {
  data: FormData;
};

export default function BackendTemplate({ data }: Props) {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 shadow-md rounded-md text-gray-800">
      <h1 className="text-3xl font-bold border-b-2 border-gray-300 pb-2 mb-4">
        {data.name}
      </h1>
      <p className="text-sm mb-4">
        {data.email} | {data.phone} | {data.address}
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b mb-2">Summary</h2>
        <p>{data.summary}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b mb-2">Skills</h2>
        <ul className="list-disc list-inside grid grid-cols-2 gap-2">
          {data.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b mb-2">Experience</h2>
        {data.experience.map((exp, i) => (
          <div key={i} className="mb-4">
            <h3 className="font-semibold">
              {exp.role} – {exp.company}
            </h3>
            <p className="text-sm italic">
              {exp.startDate} – {exp.endDate}
            </p>
            <ul className="list-disc list-inside ml-4">
              {exp.responsibilities.map((res, j) => (
                <li key={j}>{res}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold border-b mb-2">Projects</h2>
        {data.projects && data.projects.map((proj, i) => (
          <div key={i} className="mb-3">
            <h3 className="font-semibold">{proj.name}</h3>
            <p className="italic">{proj.description}</p>
            {proj.link && (
              <a
                href={proj.link}
                className="text-blue-600 hover:underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                {proj.link}
              </a>
            )}
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold border-b mb-2">Education</h2>
        {data.education.map((edu, i) => (
          <div key={i} className="mb-2">
            <h3 className="font-semibold">
              {edu.degree} – {edu.institution}
            </h3>
            <p className="text-sm italic">
              {edu.startDate} – {edu.endDate}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
