import { NextResponse } from "next/server"
import { generateAutomatedResponse } from "@/lib/groq-service"
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

    const { inquiry } = await request.json()

    if (!inquiry) {
      return NextResponse.json({ error: "Inquiry is required" }, { status: 400 })
    }

    const response = await generateAutomatedResponse(inquiry, userId)

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Error in Automated Response API:", error)
    return NextResponse.json({ error: "Failed to generate automated response" }, { status: 500 })
  }
}
