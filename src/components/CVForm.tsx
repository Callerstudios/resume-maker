import React from "react";
import type { FormData } from "../utils/types";

type Props = {
  formData: FormData;
  onChange: (updatedFormData: FormData) => void;
};

export default function CVForm({ formData, onChange }: Props) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };

  const handleSkillChange = (index: number, value: string) => {
    const newSkills = [...formData.skills];
    newSkills[index] = value;
    onChange({ ...formData, skills: newSkills });
  };

  const addSkill = () => {
    onChange({ ...formData, skills: [...formData.skills, ""] });
  };

  const handleEducationChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updated = [...formData.education];
    updated[index] = { ...updated[index], [field]: value };
    onChange({ ...formData, education: updated });
  };

const addEducation = () => {
  onChange({
    ...formData,
    education: [
      ...formData.education,
      {
        institution: "",
        degree: "",
        startDate: "",
        endDate: "",
        year: "",
        description: "",
      },
    ],
  });
};


  const handleExperienceChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updated = [...formData.experience];
    updated[index] = { ...updated[index], [field]: value };
    onChange({ ...formData, experience: updated });
  };

  const addExperience = () => {
    onChange({
      ...formData,
      experience: [
        ...formData.experience,
        {
          company: "",
          role: "",
          startDate: "",
          endDate: "",
          description: "",
          responsibilities: [""],
        },
      ],
    });
  };

  const handleProjectChange = (index: number, field: string, value: string) => {
    const updated = [...(formData.projects ?? [])];
    updated[index] = { ...updated[index], [field]: value };
    onChange({ ...formData, projects: updated });
  };

const addProject = () => {
  onChange({
    ...formData,
    projects: [
      ...(formData.projects ?? []),
      { name: "", description: "", link: "", technologies: [] },
    ],
  });
};


  return (
    <form className="max-w-3xl mx-auto space-y-6 p-4">
      <div>
        <label>Name</label>
        <input
          className="form-input w-full"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          className="form-input w-full"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          className="form-input w-full"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Address</label>
        <input
          className="form-input w-full"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Summary</label>
        <textarea
          className="form-textarea w-full"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Skills</label>
        {formData.skills.map((skill, i) => (
          <input
            key={i}
            className="form-input w-full my-1"
            value={skill}
            onChange={(e) => handleSkillChange(i, e.target.value)}
          />
        ))}
        <button type="button" onClick={addSkill} className="btn mt-2">
          Add Skill
        </button>
      </div>

      <div>
        <h3 className="font-bold mt-4">Education</h3>
        {formData.education.map((edu, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
            <input
              placeholder="Institution"
              className="form-input"
              value={edu.institution}
              onChange={(e) =>
                handleEducationChange(i, "institution", e.target.value)
              }
            />
            <input
              placeholder="Degree"
              className="form-input"
              value={edu.degree}
              onChange={(e) =>
                handleEducationChange(i, "degree", e.target.value)
              }
            />
            <input
              placeholder="Year"
              className="form-input"
              value={edu.year}
              onChange={(e) => handleEducationChange(i, "year", e.target.value)}
            />
          </div>
        ))}
        <button type="button" onClick={addEducation} className="btn mt-2">
          Add Education
        </button>
      </div>

      <div>
        <h3 className="font-bold mt-4">Experience</h3>
        {formData.experience.map((exp, i) => (
          <div key={i} className="space-y-1 mb-4">
            <input
              placeholder="Company"
              className="form-input w-full"
              value={exp.company}
              onChange={(e) =>
                handleExperienceChange(i, "company", e.target.value)
              }
            />
            <input
              placeholder="Role"
              className="form-input w-full"
              value={exp.role}
              onChange={(e) =>
                handleExperienceChange(i, "role", e.target.value)
              }
            />
            <input
              placeholder="Start Date"
              className="form-input w-full"
              value={exp.startDate}
              onChange={(e) =>
                handleExperienceChange(i, "startDate", e.target.value)
              }
            />
            <input
              placeholder="End Date"
              className="form-input w-full"
              value={exp.endDate}
              onChange={(e) =>
                handleExperienceChange(i, "endDate", e.target.value)
              }
            />
            <textarea
              placeholder="Description"
              className="form-textarea w-full"
              value={exp.description}
              onChange={(e) =>
                handleExperienceChange(i, "description", e.target.value)
              }
            />
          </div>
        ))}
        <button type="button" onClick={addExperience} className="btn mt-2">
          Add Experience
        </button>
      </div>

      <div>
        <h3 className="font-bold mt-4">Projects</h3>
        {formData.projects &&
          formData.projects.map((proj, index) => (
            <div key={index} className="space-y-1 mb-4">
              <input
                placeholder="Project Name"
                className="form-input w-full"
                value={proj.name}
                onChange={(e) => handleProjectChange(index, "name", e.target.value)}
              />
              <textarea
                placeholder="Project Description"
                className="form-textarea w-full"
                value={proj.description}
                onChange={(e) =>
                  handleProjectChange(index, "description", e.target.value)
                }
              />
              <input
                placeholder="Project Link"
                className="form-input w-full"
                value={proj.link}
                onChange={(e) => handleProjectChange(index, "link", e.target.value)}
              />
              <input
                type="text"
                value={proj.technologies?.join(", ")}
                onChange={(e) => {
                  const techs = e.target.value.split(",").map((t) => t.trim());
                  const updatedProjects =
                    formData.projects?.map((p, i) =>
                      i === index ? { ...p, technologies: techs } : p
                    ) || [];

                  onChange({
                    ...formData,
                    projects: updatedProjects,
                  });
                }}
                placeholder="Technologies used (comma separated)"
              />
            </div>
          ))}
        <button type="button" onClick={addProject} className="btn mt-2">
          Add Project
        </button>
      </div>
    </form>
  );
}
