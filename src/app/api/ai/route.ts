import { NextResponse } from "next/server";
import { aiService } from "@/lib/ai/service";
import type { AIMessage } from "@/types";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const messages: AIMessage[] = body.messages;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    const lastMessage = messages[messages.length - 1];
    if (lastMessage.role !== "user" || !lastMessage.content.trim()) {
      return NextResponse.json(
        { error: "Last message must be a non-empty user message" },
        { status: 400 }
      );
    }

    const response = await aiService.chat(messages);

    return NextResponse.json({
      message: response,
      isMockMode: aiService.isMockMode(),
    });
  } catch (error) {
    console.error("AI API error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "AI service is temporarily unavailable",
      },
      { status: 500 }
    );
  }
}
