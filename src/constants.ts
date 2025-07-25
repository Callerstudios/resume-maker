import type { FormData } from "./utils/types";

export const defaultFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  address: "",
  summary: "",
  skills: [],
  education: [
    {
      institution: "",
      degree: "",
      startDate: "",
      endDate: "",
      description: "",
      year: "",
    },
  ],
  experience: [
    {
      company: "",
      role: "",
      startDate: "",
      endDate: "",
      description: "",
      responsibilities: [""],
    },
  ],
  projects: [
    {
      name: "",
      description: "",
      link: "",
      type: "frontend", // default type
      technologies: [],
    },
  ],
  role: "frontend", // default role
};
