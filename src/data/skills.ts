import type { SkillCategory, TechnologyGroup } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-engineering",
    title: "AI Engineering",
    description:
      "Integrating AI into products and using AI tools to accelerate the engineering lifecycle.",
    items: [
      "AI applications",
      "AI agents",
      "LLM integrations",
      "AI SDKs",
      "Prompt engineering",
      "AI-assisted development",
    ],
  },
  {
    id: "frontend-architecture",
    title: "Frontend Architecture",
    description:
      "Building scalable UI systems with React, modern JavaScript, and component-driven architecture.",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "SPA architecture",
      "Component design",
      "State & routing",
      "Performance-focused UI",
    ],
  },
  {
    id: "full-stack",
    title: "Full-Stack Development",
    description:
      "Delivering end-to-end web applications across frontend, APIs, and data layers.",
    items: [
      "Node.js",
      "REST APIs",
      "SOAP services",
      "PHP",
      "MySQL",
      "PostgreSQL",
      "Authentication flows",
    ],
  },
  {
    id: "ui-ux",
    title: "UI / UX Engineering",
    description:
      "Designing and implementing polished, accessible, responsive interfaces.",
    items: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Responsive design",
      "Photoshop",
      "Design-to-code",
      "UI integration",
    ],
  },
];

export const technologyGroups: TechnologyGroup[] = [
  {
    id: "ai",
    label: "AI",
    description: "AI tools and systems that amplify engineering across the lifecycle.",
    featured: true,
    technologies: [
      "Claude",
      "ChatGPT",
      "Cursor",
      "GitHub Copilot",
      "AI SDKs",
      "AI Agents",
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    description: "Modern UI platforms for scalable, performant product experiences.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Angular",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "jQuery",
      "Tailwind",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description: "APIs, data layers, and services that power reliable applications.",
    technologies: ["Node.js", "PHP", "REST APIs", "SOAP", "MySQL", "PostgreSQL"],
  },
  {
    id: "design-tools",
    label: "Design & Tools",
    description: "Design-to-code workflows and everyday engineering tooling.",
    technologies: ["Photoshop", "Git", "GitHub", "Responsive Design", "SEO"],
  },
];
