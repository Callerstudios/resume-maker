import React from "react";
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
    <div className="space-y-6 p-6 max-w-3xl mx-auto">
      {/* Basic Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        <input
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={(e) => handleChange("address", e.target.value)}
          className="input"
        />
      </div>

      {/* Summary */}
      <textarea
        placeholder="Professional Summary"
        value={formData.summary}
        onChange={(e) => handleChange("summary", e.target.value)}
        className="input w-full"
      />

      {/* Role */}
      <select
        value={formData.role}
        onChange={(e) =>
          handleChange("role", e.target.value as FormData["role"])
        }
        className="input"
      >
        <option value="">Select Role</option>
        <option value="frontend">Frontend Developer</option>
        <option value="backend">Backend Developer</option>
        <option value="data-scientist">Data Scientist</option>
        <option value="ux-designer">UX Designer</option>
      </select>

      {/* Education */}
      <section>
        <h2 className="text-lg font-bold mb-2">Education</h2>
        {formData.education.map((edu, i) => (
          <div key={i} className="space-y-2 mb-4">
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
              placeholder="Start Date"
              value={edu.startDate}
              onChange={(e) =>
                updateArray<Education>(
                  "education",
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
              value={edu.endDate}
              onChange={(e) =>
                updateArray<Education>(
                  "education",
                  i,
                  "endDate",
                  e.target.value
                )
              }
              className="input"
            />
            <button
              type="button"
              onClick={() => removeEntry("education", i)}
              className="text-red-600 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            addEntry("education", {
              institution: "",
              degree: "",
              startDate: "",
              endDate: "",
              year: "",
            })
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
          <div key={i} className="space-y-2 mb-4">
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
              placeholder="Role"
              value={exp.role}
              onChange={(e) =>
                updateArray<Experience>("experience", i, "role", e.target.value)
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
              value={exp.description.join("\n")}
              onChange={(e) =>
                updateArray<Experience>(
                  "experience",
                  i,
                  "description",
                  e.target.value.split("\n")
                )
              }
              className="input"
            />
            <button
              type="button"
              onClick={() => removeEntry("experience", i)}
              className="text-red-600 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            addEntry("experience", {
              company: "",
              role: "",
              startDate: "",
              endDate: "",
              description: [],
              responsibilities: [],
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
          className="input w-full"
        />
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-lg font-bold mb-2">Projects</h2>
        {formData.projects?.map((proj, i) => (
          <div key={i} className="space-y-2 mb-4">
            <input
              type="text"
              placeholder="Project Name"
              value={proj.name}
              onChange={(e) =>
                updateArray<Project>("projects", i, "name", e.target.value)
              }
              className="input"
            />
            <input
              type="text"
              placeholder="Link"
              value={proj.link || ""}
              onChange={(e) =>
                updateArray<Project>("projects", i, "link", e.target.value)
              }
              className="input"
            />
            <textarea
              placeholder="Project Description"
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
              type="button"
              onClick={() => removeEntry("projects", i)}
              className="text-red-600 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            addEntry("projects", {
              name: "",
              description: "",
              link: "",
              technologies: [],
            })
          }
          className="btn"
        >
          + Add Project
        </button>
      </section>
    </div>
  );
}
