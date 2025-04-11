import { NextResponse } from "next/server"
import { generateRAGResponse } from "@/lib/rag-service"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  try {
    const { query, userId, conversationId } = await request.json()

    if (!query) {
      return NextResponse.json({ error: "Query is required" }, { status: 400 })
    }

    // Track analytics
    const supabase = createClient()
    await supabase.from("analytics_events").insert({
      event_name: "rag_query",
      event_data: { query, userId, conversationId },
      created_at: new Date().toISOString(),
    })

    const response = await generateRAGResponse(query, userId, conversationId)

    return NextResponse.json({
      success: true,
      response,
    })
  } catch (error) {
    console.error("Error generating RAG response:", error)
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 })
  }
}
