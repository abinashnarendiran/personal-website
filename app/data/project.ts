export interface Project {
  title: string;
  status: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string | null;
}

export const currentProject: Project = {
  title: "Sports Analytics Platform",
  status: "In Progress",
  description: "A full-stack fantasy metrics & sports analytics platform built with modern TypeScript and API integrations.",
  techStack: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Restful APIs", "PostgreSQL"],
  githubUrl: "https://github.com/abinashnarendiran/fourthdownanalytics",
  liveUrl: null,
};