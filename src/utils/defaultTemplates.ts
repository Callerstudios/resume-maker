import type { CVData } from "./types";


export const defaultTemplates: Record<string, CVData> = {
  frontend: {
    name: "Jane Doe",
    title: "Frontend Developer",
    summary:
      "Creative and detail-oriented Frontend Developer with 3+ years of experience building responsive, user-friendly web applications using React, TypeScript, and modern CSS frameworks. Passionate about performance, accessibility, and delivering polished UI/UX experiences.",

    contact: {
      email: "janedoe@example.com",
      phone: "+1234567890",
      github: "github.com/janedoe",
      linkedin: "linkedin.com/in/janedoe",
      website: "janedoe.dev",
    },

    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Git",
      "Figma",
      "Responsive Design",
      "Unit Testing",
    ],

    experience: [
      {
        company: "TechHub Inc.",
        role: "Frontend Engineer",
        startDate: "Jan 2022",
        endDate: "Present",
        description: [
          "Built and maintained responsive interfaces with React and Tailwind.",
          "Collaborated with UX designers to deliver pixel-perfect components.",
          "Integrated REST APIs and handled state management with Redux Toolkit.",
        ],
      },
      {
        company: "WebWorks Studio",
        role: "Junior Frontend Developer",
        startDate: "Jul 2020",
        endDate: "Dec 2021",
        description: [
          "Developed reusable UI components for a design system.",
          "Improved site performance by implementing lazy loading and code splitting.",
          "Worked closely with backend developers to troubleshoot integration issues.",
        ],
      },
    ],

    projects: [
      {
        name: "Portfolio Website",
        link: "https://janedoe.dev",
        description:
          "A personal portfolio showcasing my projects, skills, and blog posts. Built with React and styled using Tailwind CSS.",
          type: "frontend",
      },
    ],

    education: {
      institution: "State University",
      degree: "B.Sc. in Computer Science",
      startDate: "2016",
      endDate: "2020",
    },
  },
};
