import React, { useState } from "react";
import type { CVData } from "../utils/types";
import { defaultTemplates } from "../utils/defaultTemplates";
import FrontendTemplate from "../templates/FrontendTemplate"; // Swap based on selected template

export default function CVForm() {
  const [formData, setFormData] = useState<CVData>(defaultTemplates.frontend);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name.includes("contact.")) {
      const key = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        contact: {
          ...prev.contact,
          [key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleListChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    key: keyof CVData
  ) => {
    const list = e.target.value
      .split("\n")
      .filter((line) => line.trim() !== "");
    setFormData((prev) => ({ ...prev, [key]: list as any }));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
      {/* FORM */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold mb-2">CV Form</h2>

        <input
          className="input w-full"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          className="input w-full"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
        />

        <textarea
          className="input w-full h-24"
          name="summary"
          placeholder="Professional Summary"
          value={formData.summary}
          onChange={handleChange}
        />

        <h3 className="font-semibold">Contact</h3>

        <input
          className="input w-full"
          name="contact.email"
          placeholder="Email"
          value={formData.contact.email}
          onChange={handleChange}
        />
        <input
          className="input w-full"
          name="contact.phone"
          placeholder="Phone"
          value={formData.contact.phone || ""}
          onChange={handleChange}
        />
        <input
          className="input w-full"
          name="contact.github"
          placeholder="GitHub"
          value={formData.contact.github || ""}
          onChange={handleChange}
        />
        <input
          className="input w-full"
          name="contact.linkedin"
          placeholder="LinkedIn"
          value={formData.contact.linkedin || ""}
          onChange={handleChange}
        />
        <input
          className="input w-full"
          name="contact.website"
          placeholder="Website"
          value={formData.contact.website || ""}
          onChange={handleChange}
        />

        <h3 className="font-semibold">Skills (one per line)</h3>
        <textarea
          className="input w-full h-24"
          placeholder="Skills"
          value={formData.skills.join("\n")}
          onChange={(e) => handleListChange(e, "skills")}
        />
      </div>

      {/* PREVIEW */}
      <div className="border rounded p-4 bg-white shadow overflow-auto">
        <h2 className="text-lg font-semibold mb-4">Live Preview</h2>
        <FrontendTemplate data={formData} />
      </div>
    </div>
  );
}
