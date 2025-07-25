import type { CVData } from "../utils/types";

type Props = {
  data: CVData;
};

export default function UXDesignerTemplate({ data }: Props) {
  const {
    name,
    title,
    summary,
    contact,
    skills,
    experience,
    projects,
    education,
  } = data;

  return (
    <div className="w-full max-w-3xl mx-auto bg-white p-8 text-gray-800 text-sm font-sans print:text-black">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold tracking-tight">{name}</h1>
        <p className="text-lg text-gray-600">{title}</p>
        <div className="mt-2 flex flex-wrap justify-center text-xs gap-x-3 text-gray-700">
          {contact.email && <span>{contact.email}</span>}
          {contact.phone && <span>• {contact.phone}</span>}
          {contact.linkedin && <span>• LinkedIn: {contact.linkedin}</span>}
          {contact.website && <span>• {contact.website}</span>}
          {contact.github && <span>• GitHub: {contact.github}</span>}
        </div>
      </div>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-base font-semibold mb-1 text-gray-800">Profile</h2>
        <p>{summary}</p>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-base font-semibold mb-1 text-gray-800">
          Tools & Skills
        </h2>
        <ul className="flex flex-wrap gap-2 text-sm">
          {skills.map((skill, i) => (
            <li key={i} className="bg-pink-100 text-pink-700 px-2 py-1 rounded">
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-base font-semibold mb-2 text-gray-800">
          Experience
        </h2>
        {experience.map((exp, i) => (
          <div key={i} className="mb-4">
            <p className="font-medium">
              {exp.role} – {exp.company}
            </p>
            <p className="text-xs text-gray-600">
              {exp.startDate} – {exp.endDate || "Present"}
            </p>
            <ul className="list-disc list-inside mt-1">
              {exp.description.map((desc, j) => (
                <li key={j}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-base font-semibold mb-2 text-gray-800">
          Selected Projects
        </h2>
        {projects.map((proj, i) => (
          <div key={i} className="mb-2">
            <p className="font-medium">
              {proj.link ? (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {proj.name}
                </a>
              ) : (
                proj.name
              )}
            </p>
            <p className="text-sm">{proj.description}</p>
          </div>
        ))}
      </section>

      {/* Education */}
      <section>
        <h2 className="text-base font-semibold mb-1 text-gray-800">
          Education
        </h2>
        <p className="font-medium">
          {education.degree}, {education.school}
        </p>
        <p className="text-sm text-gray-600">{education.year}</p>
      </section>
    </div>
  );
}
