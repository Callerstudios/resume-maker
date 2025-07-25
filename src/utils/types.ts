// Work experience entry
export type Experience = {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  description: string[];
};

// Project entry
export type Project = {
  name: string;
  link?: string;
  description: string;
};

// Education section
export type Education = {
  school: string;
  degree: string;
  year: string;
};

// Contact information
export type Contact = {
  email: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  website?: string;
};

// Main CV structure
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
export type FormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  summary: string;
  skills: string[];
  projects: {
    name: string;
    description: string;
    link?: string;
  }[];
  experience: {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    responsibilities: string[];
  }[];
  education: {
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
  }[];
};