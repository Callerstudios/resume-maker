import React, { useState } from "react";
import type { FormData } from "../utils/types";
import LinkImagePreview from "./LinkImagePreview";
import {
  User,
  FileText,
  Sparkles,
  Briefcase,
  GraduationCap,
  FolderKanban,
  Plus,
  Trash2,
  ChevronDown,
} from "lucide-react";

type Props = {
  formData: FormData;
  onChange: (updatedFormData: FormData) => void;
};

type SectionKey =
  | "contact"
  | "summary"
  | "skills"
  | "experience"
  | "education"
  | "projects";

const SECTIONS: {
  key: SectionKey;
  title: string;
  subtitle: string;
  icon: React.ElementType;
}[] = [
  { key: "contact", title: "Contact", subtitle: "Name and how to reach you", icon: User },
  { key: "summary", title: "Summary", subtitle: "A short introduction", icon: FileText },
  { key: "skills", title: "Skills", subtitle: "Tools and technologies", icon: Sparkles },
  { key: "experience", title: "Experience", subtitle: "Roles you've held", icon: Briefcase },
  { key: "education", title: "Education", subtitle: "Where you studied", icon: GraduationCap },
  { key: "projects", title: "Projects", subtitle: "Things you've built", icon: FolderKanban },
];

export default function CVForm({ formData, onChange }: Props) {
  const [openSection, setOpenSection] = useState<SectionKey | null>("contact");

  const toggleSection = (key: SectionKey) => {
    setOpenSection((current) => (current === key ? null : key));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };

  // ---------- Skills ----------
  const handleSkillChange = (index: number, value: string) => {
    const newSkills = [...formData.skills];
    newSkills[index] = value;
    onChange({ ...formData, skills: newSkills });
  };

  const addSkill = () => {
    onChange({ ...formData, skills: [...formData.skills, ""] });
  };

  const removeSkill = (index: number) => {
    onChange({ ...formData, skills: formData.skills.filter((_, i) => i !== index) });
  };

  // ---------- Education ----------
  const handleEducationChange = (index: number, field: string, value: string) => {
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

  const removeEducation = (index: number) => {
    onChange({ ...formData, education: formData.education.filter((_, i) => i !== index) });
  };

  // ---------- Experience ----------
  const handleExperienceChange = (index: number, field: string, value: string) => {
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

  const removeExperience = (index: number) => {
    onChange({ ...formData, experience: formData.experience.filter((_, i) => i !== index) });
  };

  const handleResponsibilityChange = (expIndex: number, respIndex: number, value: string) => {
    const updated = [...formData.experience];
    const responsibilities = [...updated[expIndex].responsibilities];
    responsibilities[respIndex] = value;
    updated[expIndex] = { ...updated[expIndex], responsibilities };
    onChange({ ...formData, experience: updated });
  };

  const addResponsibility = (expIndex: number) => {
    const updated = [...formData.experience];
    updated[expIndex] = {
      ...updated[expIndex],
      responsibilities: [...updated[expIndex].responsibilities, ""],
    };
    onChange({ ...formData, experience: updated });
  };

  const removeResponsibility = (expIndex: number, respIndex: number) => {
    const updated = [...formData.experience];
    updated[expIndex] = {
      ...updated[expIndex],
      responsibilities: updated[expIndex].responsibilities.filter((_, i) => i !== respIndex),
    };
    onChange({ ...formData, experience: updated });
  };

  // ---------- Projects ----------
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
        {
          name: "",
          description: "",
          link: "",
          technologies: [],
          type: "frontend",
          previewImage: "",
        },
      ],
    });
  };

  const removeProject = (index: number) => {
    onChange({ ...formData, projects: (formData.projects ?? []).filter((_, i) => i !== index) });
  };

  return (
    <form className="cv-form" onSubmit={(e) => e.preventDefault()}>
      {SECTIONS.map(({ key, title, subtitle, icon: Icon }) => {
        const isOpen = openSection === key;
        return (
          <div className="cv-section" key={key}>
            <button
              type="button"
              className="cv-section-header"
              onClick={() => toggleSection(key)}
              aria-expanded={isOpen}
            >
              <span className="cv-section-header-left">
                <span className="cv-section-icon">
                  <Icon size={15} />
                </span>
                <span>
                  <span className="cv-section-title">{title}</span>
                  <span className="cv-section-subtitle" style={{ display: "block" }}>
                    {subtitle}
                  </span>
                </span>
              </span>
              <ChevronDown className="cv-section-chevron" data-open={isOpen} size={18} />
            </button>

            {isOpen && (
              <div className="cv-section-body">
                {key === "contact" && (
                  <>
                    <div>
                      <label className="cv-field-label">Full name</label>
                      <input
                        className="form-input"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jordan Lee"
                      />
                    </div>
                    <div className="cv-grid-2">
                      <div>
                        <label className="cv-field-label">Email</label>
                        <input
                          className="form-input"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jordan@email.com"
                        />
                      </div>
                      <div>
                        <label className="cv-field-label">Phone</label>
                        <input
                          className="form-input"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 555 010 2020"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="cv-field-label">Address</label>
                      <input
                        className="form-input"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="City, Country"
                      />
                    </div>
                  </>
                )}

                {key === "summary" && (
                  <div>
                    <label className="cv-field-label">Professional summary</label>
                    <textarea
                      className="form-textarea"
                      name="summary"
                      value={formData.summary}
                      onChange={handleChange}
                      placeholder="A couple of sentences on your experience and what you're looking for next."
                    />
                  </div>
                )}

                {key === "skills" && (
                  <>
                    {formData.skills.map((skill, i) => (
                      <div className="cv-skill-row" key={i}>
                        <input
                          className="form-input"
                          value={skill}
                          onChange={(e) => handleSkillChange(i, e.target.value)}
                          placeholder="TypeScript"
                        />
                        <button
                          type="button"
                          className="btn btn-ghost btn-icon-only"
                          onClick={() => removeSkill(i)}
                          aria-label="Remove skill"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    ))}
                    <button type="button" onClick={addSkill} className="btn">
                      <Plus size={14} /> Add skill
                    </button>
                  </>
                )}

                {key === "experience" && (
                  <>
                    {formData.experience.map((exp, i) => (
                      <div key={i} className="cv-entry-card">
                        <button
                          type="button"
                          className="cv-entry-remove"
                          onClick={() => removeExperience(i)}
                          aria-label="Remove experience entry"
                        >
                          <Trash2 size={15} />
                        </button>
                        <div className="cv-grid-2">
                          <input
                            placeholder="Company"
                            className="form-input"
                            value={exp.company}
                            onChange={(e) => handleExperienceChange(i, "company", e.target.value)}
                          />
                          <input
                            placeholder="Role"
                            className="form-input"
                            value={exp.role}
                            onChange={(e) => handleExperienceChange(i, "role", e.target.value)}
                          />
                        </div>
                        <div className="cv-grid-2">
                          <input
                            placeholder="Start date"
                            className="form-input"
                            value={exp.startDate}
                            onChange={(e) => handleExperienceChange(i, "startDate", e.target.value)}
                          />
                          <input
                            placeholder="End date"
                            className="form-input"
                            value={exp.endDate}
                            onChange={(e) => handleExperienceChange(i, "endDate", e.target.value)}
                          />
                        </div>
                        <textarea
                          placeholder="Short description"
                          className="form-textarea"
                          value={exp.description}
                          onChange={(e) => handleExperienceChange(i, "description", e.target.value)}
                        />
                        <div>
                          <label className="cv-field-label">Key responsibilities</label>
                          {exp.responsibilities.map((resp, j) => (
                            <div className="cv-bullet-row" key={j} style={{ marginBottom: "0.4rem" }}>
                              <input
                                className="form-input"
                                value={resp}
                                onChange={(e) => handleResponsibilityChange(i, j, e.target.value)}
                                placeholder="Led migration to a new build pipeline"
                              />
                              <button
                                type="button"
                                className="btn btn-ghost btn-icon-only"
                                onClick={() => removeResponsibility(i, j)}
                                aria-label="Remove responsibility"
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>
                          ))}
                          <button
                            type="button"
                            className="btn"
                            onClick={() => addResponsibility(i)}
                          >
                            <Plus size={14} /> Add bullet
                          </button>
                        </div>
                      </div>
                    ))}
                    <button type="button" onClick={addExperience} className="btn">
                      <Plus size={14} /> Add experience
                    </button>
                  </>
                )}

                {key === "education" && (
                  <>
                    {formData.education.map((edu, i) => (
                      <div key={i} className="cv-entry-card">
                        <button
                          type="button"
                          className="cv-entry-remove"
                          onClick={() => removeEducation(i)}
                          aria-label="Remove education entry"
                        >
                          <Trash2 size={15} />
                        </button>
                        <input
                          placeholder="Institution"
                          className="form-input"
                          value={edu.institution}
                          onChange={(e) => handleEducationChange(i, "institution", e.target.value)}
                        />
                        <input
                          placeholder="Degree"
                          className="form-input"
                          value={edu.degree}
                          onChange={(e) => handleEducationChange(i, "degree", e.target.value)}
                        />
                        <div className="cv-grid-2">
                          <input
                            placeholder="Start year"
                            className="form-input"
                            value={edu.startDate}
                            onChange={(e) => handleEducationChange(i, "startDate", e.target.value)}
                          />
                          <input
                            placeholder="End year"
                            className="form-input"
                            value={edu.endDate}
                            onChange={(e) => handleEducationChange(i, "endDate", e.target.value)}
                          />
                        </div>
                      </div>
                    ))}
                    <button type="button" onClick={addEducation} className="btn">
                      <Plus size={14} /> Add education
                    </button>
                  </>
                )}

                {key === "projects" && (
                  <>
                    {formData.projects &&
                      formData.projects.map((proj, index) => (
                        <div key={index} className="cv-entry-card">
                          <button
                            type="button"
                            className="cv-entry-remove"
                            onClick={() => removeProject(index)}
                            aria-label="Remove project"
                          >
                            <Trash2 size={15} />
                          </button>
                          <input
                            placeholder="Project name"
                            className="form-input"
                            value={proj.name}
                            onChange={(e) => handleProjectChange(index, "name", e.target.value)}
                          />
                          <textarea
                            placeholder="What it does, your role, the outcome"
                            className="form-textarea"
                            value={proj.description}
                            onChange={(e) => handleProjectChange(index, "description", e.target.value)}
                          />
                          <input
                            placeholder="Project link"
                            className="form-input"
                            value={proj.link}
                            onChange={(e) => handleProjectChange(index, "link", e.target.value)}
                          />
                          {proj.link && (
                            <LinkImagePreview
                              url={proj.link ?? ""}
                              onImageExtracted={(imgUrl) => {
                                handleProjectChange(index, "previewImage", imgUrl ?? "");
                              }}
                            />
                          )}
                          <input
                            className="form-input"
                            value={proj.technologies?.join(", ") ?? ""}
                            onChange={(e) => {
                              const techs = e.target.value.split(",").map((t) => t.trim());
                              const updatedProjects =
                                formData.projects?.map((p, i) =>
                                  i === index ? { ...p, technologies: techs } : p
                                ) || [];
                              onChange({ ...formData, projects: updatedProjects });
                            }}
                            placeholder="Technologies used, comma separated"
                          />
                        </div>
                      ))}
                    <button type="button" onClick={addProject} className="btn">
                      <Plus size={14} /> Add project
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        );
      })}
    </form>
  );
}
