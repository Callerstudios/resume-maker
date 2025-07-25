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
    },
  ],
  role: "frontend", // default role
};
