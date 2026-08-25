export const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "AI", href: "#ai-engineering" },
  { label: "Ask My AI", href: "#ask-my-ai" },
] as const;

export const SECTION_IDS = {
  hero: "hero",
  about: "about",
  expertise: "expertise",
  technologies: "technologies",
  aiEngineering: "ai-engineering",
  projects: "projects",
  experience: "experience",
  architecture: "architecture",
  askMyAi: "ask-my-ai",
  contact: "contact",
} as const;

export const CONTAINER_CLASS = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";
