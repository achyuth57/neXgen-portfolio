import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { skillCategories, technologyGroups } from "@/data/skills";

/**
 * Knowledge base context for the AI assistant.
 * This is injected into AI prompts so responses are grounded in portfolio data.
 */
export function buildAIContext(): string {
  const skillsText = skillCategories
    .map((cat) => `${cat.title}: ${cat.items.join(", ")}`)
    .join("\n");

  const techText = technologyGroups
    .map((group) => `${group.label}: ${group.technologies.join(", ")}`)
    .join("\n");

  const projectsText = projects
    .map(
      (p) =>
        `- ${p.title} (${p.category}): ${p.description}. Technologies: ${p.technologies.join(", ")}`
    )
    .join("\n");

  const experienceText = experience
    .map(
      (e) =>
        `- ${e.role} at ${e.organization} (${e.duration}): ${e.responsibilities.join("; ")}`
    )
    .join("\n");

  return `
You are an AI assistant representing ${profile.name}, a ${profile.title}.

IMPORTANT RULES:
- Only answer based on the information provided below.
- If you don't know something or it's not in the context, say "I don't have that information in my knowledge base."
- Do not invent projects, metrics, companies, or achievements.
- Be professional, concise, and helpful.
- Position AI as an engineering multiplier, not a replacement for fundamentals.

ABOUT:
${profile.about.intro}
${profile.about.focus}
Location: ${profile.location}
Email: ${profile.email}
Education: ${profile.education.map((e) => `${e.degree} — ${e.institution} (${e.year})`).join("; ")}

PRINCIPLES:
${profile.about.principles.map((p) => `${p.title}: ${p.description}`).join("\n")}

SKILLS:
${skillsText}

TECHNOLOGIES:
${techText}

PROJECTS:
${projectsText}

EXPERIENCE:
${experienceText}

ENGINEERING PHILOSOPHY:
${profile.philosophy.principles.map((p) => `${p.title}: ${p.description}`).join("\n")}

AI ENGINEERING APPROACH:
AI doesn't replace engineering fundamentals — it amplifies them.
Tools used: Cursor (AI-powered IDE), Claude (reasoning & architecture), ChatGPT (research & debugging), GitHub Copilot (productivity), AI SDKs (building AI apps), AI Agents (autonomous task execution).
AI is used throughout the software engineering lifecycle: ideation, architecture, development, testing, review, and deployment.
`.trim();
}

export const aiSuggestedQuestions = [
  "What are Achyuth's strongest skills?",
  "Tell me about his frontend experience.",
  "What AI tools does he use?",
  "What projects has he built?",
  "How does he approach engineering?",
];

export const aiTools = [
  {
    id: "cursor",
    name: "Cursor",
    description: "AI-powered development environment for accelerated coding and exploration.",
  },
  {
    id: "claude",
    name: "Claude",
    description:
      "Reasoning, architecture exploration, coding, and technical analysis.",
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    description:
      "Research, ideation, debugging, and technical exploration assistance.",
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    description: "AI-assisted coding and developer productivity enhancement.",
  },
  {
    id: "ai-sdks",
    name: "AI SDKs",
    description: "Building AI-powered applications and intelligent experiences.",
  },
  {
    id: "ai-agents",
    name: "AI Agents",
    description:
      "Designing systems where AI can reason, investigate, and execute tasks.",
  },
];

export const aiWorkflowSteps = [
  "Idea",
  "Architecture",
  "AI-assisted Development",
  "Implementation",
  "Testing",
  "Review",
  "Deployment",
];
