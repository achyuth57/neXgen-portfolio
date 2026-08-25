import type { AIMessage } from "@/types";

export interface AIProvider {
  generateResponse(
    messages: AIMessage[],
    context?: string
  ): Promise<string>;
}

export type AIProviderConfig = {
  provider: "mock" | "openai" | "anthropic";
  apiKey?: string;
  model?: string;
};
