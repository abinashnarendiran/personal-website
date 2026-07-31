export interface Skills {
  category: string;
  skills: string[];
}

export const skillCategories: Skills[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "Python", "SQL", "Java", "PHP", "HTML5/CSS3"],
  },
  {
    category: "Frameworks & Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express", "AngularJS", "Bootstrap"],
  },
  {
    category: "AI & APIs",
    skills: ["OpenAI API", "Twilio Voice & Messaging", "REST APIs", "Apple MapKit JS", "Google APIs"],
  },
  {
    category: "Cloud, DB & DevOps",
    skills: ["AWS (EC2, S3)", "PostgreSQL", "MongoDB", "MySQL", "Docker", "Git", "Linux"],
  },
];

