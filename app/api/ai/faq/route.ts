import { NextResponse } from "next/server"
import { getFaqResponse } from "@/lib/groq-service"
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

    const { question } = await request.json()

    if (!question) {
      return NextResponse.json({ error: "Question is required" }, { status: 400 })
    }

    const response = await getFaqResponse(question, userId)

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Error in FAQ API:", error)
    return NextResponse.json({ error: "Failed to get response from AI assistant" }, { status: 500 })
  }
}
