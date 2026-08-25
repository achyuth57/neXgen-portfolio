import type { AIMessage } from "@/types";
import type { AIProvider, AIProviderConfig } from "./provider";
import { MockAIProvider } from "./mock-provider";
import { OpenAIProvider } from "./openai-provider";
import { AnthropicProvider } from "./anthropic-provider";
import { buildAIContext } from "@/data/ai-context";

function createProvider(config: AIProviderConfig): AIProvider {
  switch (config.provider) {
    case "openai":
      if (!config.apiKey) {
        throw new Error("OpenAI API key is required");
      }
      return new OpenAIProvider(config.apiKey, config.model);
    case "anthropic":
      if (!config.apiKey) {
        throw new Error("Anthropic API key is required");
      }
      return new AnthropicProvider(config.apiKey, config.model);
    case "mock":
    default:
      return new MockAIProvider();
  }
}

function getProviderConfig(): AIProviderConfig {
  const provider = (process.env.AI_PROVIDER ?? "mock") as AIProviderConfig["provider"];
  const apiKey = process.env.AI_API_KEY;

  return {
    provider: provider === "openai" || provider === "anthropic" ? provider : "mock",
    apiKey,
    model: process.env.AI_MODEL,
  };
}

export class AIService {
  private provider: AIProvider;

  constructor(provider?: AIProvider) {
    this.provider = provider ?? createProvider(getProviderConfig());
  }

  async chat(messages: AIMessage[]): Promise<string> {
    const context = buildAIContext();
    return this.provider.generateResponse(messages, context);
  }

  isMockMode(): boolean {
    const config = getProviderConfig();
    return config.provider === "mock" || !config.apiKey;
  }
}

export const aiService = new AIService();
