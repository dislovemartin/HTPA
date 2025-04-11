import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const userMessage = body.message;

    if (!userMessage || typeof userMessage !== "string") {
      return NextResponse.json(
        { error: "Invalid message format" },
        { status: 400 }
      );
    }

    // --- Placeholder for Actual AI Logic ---
    // Here you would typically call your AI model (e.g., OpenAI, Anthropic, etc.)
    // For now, we'll simulate a response based on the input.
    console.log("Received message:", userMessage);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate processing delay
    const aiResponseText = `AI processed: "${userMessage}"`;
    // --- End Placeholder ---

    return NextResponse.json({ response: aiResponseText });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
