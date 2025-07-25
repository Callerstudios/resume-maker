import type { FormData, Experience, Education, Project } from "../utils/types";

type Props = {
  formData: FormData;
  onChange: (updated: FormData) => void;
};

export default function CVForm({ formData, onChange }: Props) {
  const handleChange = (field: keyof FormData, value: any) => {
    onChange({ ...formData, [field]: value });
  };

  const updateArray = <T,>(
    field: keyof FormData,
    index: number,
    key: keyof T,
    value: any
  ) => {
    const updatedArray = [...(formData[field] as T[])];
    updatedArray[index] = { ...updatedArray[index], [key]: value };
    onChange({ ...formData, [field]: updatedArray });
  };

  const addEntry = (field: keyof FormData, emptyObj: any) => {
    const updated = [...(formData[field] as any[]), emptyObj];
    onChange({ ...formData, [field]: updated });
  };

  const removeEntry = (field: keyof FormData, index: number) => {
    const updated = [...(formData[field] as any[])];
    updated.splice(index, 1);
    onChange({ ...formData, [field]: updated });
  };

  return (
    <div className="space-y-6 p-4">
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Full Name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className="input"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="input"
        />
        <input
          type="tel"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className="input"
        />
        <textarea
          placeholder="Professional Summary"
          value={formData.summary}
          onChange={(e) => handleChange("summary", e.target.value)}
          className="input"
        />
      </div>

      {/* Education */}
      <section>
        <h2 className="text-lg font-bold mb-2">Education</h2>
        {formData.education.map((edu, i) => (
          <div key={i} className="mb-4 space-y-2">
            <input
              type="text"
              placeholder="Institution"
              value={edu.institution}
              onChange={(e) =>
                updateArray<Education>(
                  "education",
                  i,
                  "institution",
                  e.target.value
                )
              }
              className="input"
            />
            <input
              type="text"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) =>
                updateArray<Education>("education", i, "degree", e.target.value)
              }
              className="input"
            />
            <input
              type="text"
              placeholder="Year"
              value={edu.year}
              onChange={(e) =>
                updateArray<Education>("education", i, "year", e.target.value)
              }
              className="input"
            />
            <button
              onClick={() => removeEntry("education", i)}
              className="text-red-600 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={() =>
            addEntry("education", { institution: "", degree: "", year: "" })
          }
          className="btn"
        >
          + Add Education
        </button>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-lg font-bold mb-2">Experience</h2>
        {formData.experience.map((exp, i) => (
          <div key={i} className="mb-4 space-y-2">
            <input
              type="text"
              placeholder="Company"
              value={exp.company}
              onChange={(e) =>
                updateArray<Experience>(
                  "experience",
                  i,
                  "company",
                  e.target.value
                )
              }
              className="input"
            />
            <input
              type="text"
              placeholder="Title"
              value={exp.role}
              onChange={(e) =>
                updateArray<Experience>(
                  "experience",
                  i,
                  "role",
                  e.target.value
                )
              }
              className="input"
            />
            <input
              type="text"
              placeholder="Start Date"
              value={exp.startDate}
              onChange={(e) =>
                updateArray<Experience>(
                  "experience",
                  i,
                  "startDate",
                  e.target.value
                )
              }
              className="input"
            />
            <input
              type="text"
              placeholder="End Date"
              value={exp.endDate}
              onChange={(e) =>
                updateArray<Experience>(
                  "experience",
                  i,
                  "endDate",
                  e.target.value
                )
              }
              className="input"
            />
            <textarea
              placeholder="Description"
              value={exp.description}
              onChange={(e) =>
                updateArray<Experience>(
                  "experience",
                  i,
                  "description",
                  e.target.value
                )
              }
              className="input"
            />
            <button
              onClick={() => removeEntry("experience", i)}
              className="text-red-600 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={() =>
            addEntry("experience", {
              company: "",
              title: "",
              startDate: "",
              endDate: "",
              description: "",
            })
          }
          className="btn"
        >
          + Add Experience
        </button>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-lg font-bold mb-2">Skills</h2>
        <textarea
          placeholder="E.g., JavaScript, React, Node.js"
          value={formData.skills.join(", ")}
          onChange={(e) =>
            handleChange(
              "skills",
              e.target.value.split(",").map((s) => s.trim())
            )
          }
          className="input"
        />
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-lg font-bold mb-2">Projects</h2>
        {formData.projects && formData.projects.map((proj, i) => (
          <div key={i} className="mb-4 space-y-2">
            <input
              type="text"
              placeholder="Title"
              value={proj.name}
              onChange={(e) =>
                updateArray<Project>("projects", i, "name", e.target.value)
              }
              className="input"
            />
            <textarea
              placeholder="Description"
              value={proj.description}
              onChange={(e) =>
                updateArray<Project>(
                  "projects",
                  i,
                  "description",
                  e.target.value
                )
              }
              className="input"
            />
            <button
              onClick={() => removeEntry("projects", i)}
              className="text-red-600 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={() => addEntry("projects", { title: "", description: "" })}
          className="btn"
        >
          + Add Project
        </button>
      </section>
    </div>
  );
}
