// Work experience entry
export type Experience = {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  description: string[]; // Bullet points
};

// Project entry
type Project = {
  name: string;
  description: string;
  type: "frontend" | "backend" | "fullstack"; // include this
  link?: string;
  technologies?: string[];
  previewImage?: string;
};


// Education entry
export type Education = {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description?: string;
};


// Contact information
export type Contact = {
  email: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  website?: string;
};

// Main CV data structure used for rendering
export type CVData = {
  name: string;
  title: string;
  summary: string;
  contact: Contact;
  skills: string[];
  experience: Experience[];
  projects: Project[];
  education: Education;
};

// Template role types
export type TemplateKey =
  | "frontend"
  | "backend"
  | "data-scientist"
  | "ux-designer";

// Form input structure (editable)
export type FormData = {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  summary?: string;

  education: {
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
    year?: string;
    description?: string;
  }[];

  experience: {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;
    responsibilities: string[];
  }[];

  skills: string[];

  projects?: Project[];

  role: TemplateKey;
};
