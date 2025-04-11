import { NextResponse } from "next/server"
import { summarizeDocument } from "@/lib/groq-service"
import { createServerClient } from "@/lib/supabase/server"
import { cookies } from "next/headers"

export async function POST(request: Request) {
  try {
    // Get the user session
    const cookieStore = cookies()
    const supabase = createServerClient(cookieStore)
    const {
      data: { session },
    } = await supabase.auth.getSession()
    const userId = session?.user?.id

    const { documentText, documentName } = await request.json()

    if (!documentText) {
      return NextResponse.json({ error: "Document text is required" }, { status: 400 })
    }

    const summary = await summarizeDocument(documentText, documentName || "Untitled Document", userId)

    return NextResponse.json({ summary })
  } catch (error) {
    console.error("Error in Document Summary API:", error)
    return NextResponse.json({ error: "Failed to summarize document" }, { status: 500 })
  }
}
