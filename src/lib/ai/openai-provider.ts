import type { AIMessage } from "@/types";
import type { AIProvider } from "./provider";

export class OpenAIProvider implements AIProvider {
  private apiKey: string;
  private model: string;

  constructor(apiKey: string, model = "gpt-4o-mini") {
    this.apiKey = apiKey;
    this.model = model;
  }

  async generateResponse(
    messages: AIMessage[],
    context?: string
  ): Promise<string> {
    const systemMessage = context
      ? { role: "system" as const, content: context }
      : null;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: this.model,
        messages: [
          ...(systemMessage ? [systemMessage] : []),
          ...messages.map((m) => ({ role: m.role, content: m.content })),
        ],
        max_tokens: 1024,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`OpenAI API error: ${response.status} - ${error}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content ?? "No response generated.";
  }
}
