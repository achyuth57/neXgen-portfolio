import { siteConfig } from "@/config/site";

export const profile = {
  name: siteConfig.name,
  shortName: "Achyuth",
  title: siteConfig.title,
  tagline: "Frontend Architect • Full-Stack Developer • AI Builder",
  headline: "I build scalable products\nand intelligent experiences.",
  subheadline:
    "I'm Achyuth Kumar Vaddi — a Senior Software Development Engineer based in Bengaluru with 10+ years of experience in frontend architecture, Micro Front-End systems, and cybersecurity product UI. I enjoy turning complex engineering problems into simple, scalable experiences.",
  location: "Bengaluru, Karnataka, India",
  email: "achyuthkumar57@gmail.com",
  phone: "+91 88868 26678",
  github: siteConfig.links.github,
  linkedin: siteConfig.links.linkedin,
  photo: "/images/profile.png",
  about: {
    intro:
      "I'm Achyuth Kumar Vaddi, a Senior Software Development Engineer with 10+ years of experience spanning UI/UX design, frontend architecture, Micro Front-End systems, and cybersecurity product engineering.",
    focus:
      "My career has grown from UI/UX design into frontend architecture and distributed Micro Front-End platforms. Today I work at Trellix on XDR/EDR/SOAR security products, building scalable, maintainable systems that teams can confidently evolve — with AI as an engineering multiplier.",
    principles: [
      {
        id: "architecture" as const,
        title: "Architecture over complexity",
        description:
          "Prefer clear system boundaries and composable layers over tangled, hard-to-change code.",
      },
      {
        id: "performance" as const,
        title: "Performance by design",
        description:
          "Bake speed, budgets, and perceived performance into the design — not as a late patch.",
      },
      {
        id: "developer-experience" as const,
        title: "Developer experience matters",
        description:
          "Great tooling, feedback loops, and clarity help teams ship better software faster.",
      },
      {
        id: "ai-multiplier" as const,
        title: "AI as an engineering multiplier",
        description:
          "Use AI to amplify fundamentals across the lifecycle — never to replace sound engineering.",
      },
    ],
  },
  education: [
    {
      id: "btech",
      degree: "Bachelor of Technology in Information Technology",
      institution: "JNTUK, Kakinada",
      year: "2010",
    },
    {
      id: "intermediate",
      degree: "Intermediate",
      institution: "Aditya Jr College, Amalapuram",
      year: "2006",
    },
    {
      id: "ssc",
      degree: "SSC",
      institution: "K.B.C School, Kothapeta",
      year: "2004",
    },
  ],
  heroTechnologies: [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "AI Agents",
  ],
  philosophy: {
    title: "How I Think About Engineering",
    principles: [
      {
        id: "scalability",
        title: "Scalability",
        description:
          "Design systems that grow with product complexity without sacrificing maintainability.",
      },
      {
        id: "maintainability",
        title: "Maintainability",
        description:
          "Write code and architecture that teams can understand, extend, and evolve confidently.",
      },
      {
        id: "performance",
        title: "Performance",
        description:
          "Treat performance as a design constraint, not an afterthought.",
      },
      {
        id: "dx",
        title: "Developer Experience",
        description:
          "Great developer experience leads to better products and faster iteration.",
      },
      {
        id: "security",
        title: "Security",
        description:
          "Build security into architecture from the start, not as a patch.",
      },
      {
        id: "observability",
        title: "Observability",
        description:
          "Systems should be understandable in production, not just in development.",
      },
      {
        id: "automation",
        title: "Automation",
        description:
          "Automate repetitive work so engineers can focus on high-value problems.",
      },
      {
        id: "ai-engineering",
        title: "AI-assisted Engineering",
        description:
          "Use AI to amplify engineering fundamentals across the entire lifecycle.",
      },
    ],
  },
} as const;
