type Experience = {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  description: string[];
};

type Project = {
  name: string;
  link?: string;
  description: string;
};

type CVData = {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    phone?: string;
    github?: string;
    linkedin?: string;
    website?: string;
  };
  skills: string[];
  experience: Experience[];
  projects: Project[];
  education: {
    school: string;
    degree: string;
    year: string;
  };
};

type Props = {
  data: CVData;
};

export default function FrontendTemplate({ data }: Props) {
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
    <div className="w-full max-w-3xl mx-auto bg-white p-8 text-gray-900 text-sm leading-relaxed font-sans print:text-black">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-lg text-gray-600">{title}</p>
        <div className="mt-2 text-xs space-x-3 text-gray-700">
          {contact.email && <span>{contact.email}</span>}
          {contact.phone && <span>• {contact.phone}</span>}
          {contact.github && <span>• GitHub: {contact.github}</span>}
          {contact.linkedin && <span>• LinkedIn: {contact.linkedin}</span>}
          {contact.website && <span>• {contact.website}</span>}
        </div>
      </div>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-base font-semibold mb-1 text-gray-800">Summary</h2>
        <p>{summary}</p>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-base font-semibold mb-1 text-gray-800">Skills</h2>
        <ul className="flex flex-wrap gap-2 text-sm">
          {skills.map((skill, i) => (
            <li key={i} className="bg-gray-200 px-2 py-1 rounded">
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
              {exp.description.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-base font-semibold mb-2 text-gray-800">Projects</h2>
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
