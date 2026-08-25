import type { AIMessage } from "@/types";
import type { AIProvider } from "./provider";

const MOCK_RESPONSES: Record<string, string> = {
  skills:
    "Based on Achyuth's portfolio, his strongest areas include React and frontend architecture, UI/UX engineering (HTML5, CSS3, Bootstrap, design-to-code), full-stack work (PHP, MySQL, REST/SOAP APIs), and growing AI-augmented engineering practices with tools like Cursor, Claude, and Copilot.",
  frontend:
    "Achyuth has deep frontend experience: Sr Project Engineer at Wipro building React SPAs with routing, forms, and API integrations; Front End Developer at Tech Mahindra working with Angular and responsive UI; plus earlier UI/UX design work. Core stack includes React, JavaScript, HTML5, CSS3, Bootstrap, and Angular.",
  ai: "Achyuth uses AI throughout the engineering lifecycle: Cursor for AI-powered development, Claude for reasoning and architecture, ChatGPT for research and debugging, GitHub Copilot for productivity, plus AI SDKs and agents for building intelligent applications. He positions AI as an engineering multiplier — not a replacement for fundamentals.",
  projects:
    "His featured work includes React SPA platform engineering at Wipro, Angular frontend applications at Tech Mahindra, and full-stack web/admin systems at Erudite Web Solutions (HTML/CSS/JS with PHP and MySQL).",
  experience:
    "Career path: UI/UX Designer at Mallareddy Groups (2012–2014) → Web Developer at Erudite Web Solutions (2014–2016) → Front End Developer at Tech Mahindra (2016–2019) → Sr Project Engineer at Wipro (2019–Present). Based in Gachibowli, Hyderabad.",
  default:
    "I'm running in development mode with mock responses grounded in Achyuth's portfolio. Try asking about skills, frontend experience at Wipro/Tech Mahindra, AI tools, projects, or his career path.",
};

function findMockResponse(question: string): string {
  const q = question.toLowerCase();
  if (q.includes("skill") || q.includes("strongest")) return MOCK_RESPONSES.skills;
  if (q.includes("frontend") || q.includes("react") || q.includes("wipro"))
    return MOCK_RESPONSES.frontend;
  if (q.includes("ai") || q.includes("tool")) return MOCK_RESPONSES.ai;
  if (q.includes("project") || q.includes("built") || q.includes("work"))
    return MOCK_RESPONSES.projects;
  if (q.includes("experience") || q.includes("career") || q.includes("company"))
    return MOCK_RESPONSES.experience;
  return MOCK_RESPONSES.default;
}

export class MockAIProvider implements AIProvider {
  async generateResponse(messages: AIMessage[]): Promise<string> {
    const lastUserMessage = [...messages]
      .reverse()
      .find((m) => m.role === "user");

    await new Promise((resolve) => setTimeout(resolve, 800));

    if (!lastUserMessage) {
      return MOCK_RESPONSES.default;
    }

    return `[Mock AI Response]\n\n${findMockResponse(lastUserMessage.content)}`;
  }
}
