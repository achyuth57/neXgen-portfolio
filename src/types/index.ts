export type ProjectCategory =
  | "AI"
  | "Full-Stack"
  | "Frontend Architecture"
  | "Developer Tools"
  | "Security"
  | "SaaS";

export type Project = {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  problem: string;
  solution: string;
  architecture: string;
  challenges: string[];
  outcome: string;
};

export type Experience = {
  id: string;
  organization: string;
  role: string;
  duration: string;
  location?: string;
  responsibilities: string[];
  contributions: string[];
  technologies: string[];
};

export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  items: string[];
};

export type TechnologyGroup = {
  id: string;
  label: string;
  description?: string;
  featured?: boolean;
  technologies: string[];
};

export type AITool = {
  id: string;
  name: string;
  description: string;
};

export type EngineeringPrinciple = {
  id: string;
  title: string;
  description: string;
};

export type AIMessage = {
  role: "user" | "assistant";
  content: string;
};

export type AIProviderType = "mock" | "openai" | "anthropic";
