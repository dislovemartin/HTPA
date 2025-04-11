import { NextResponse } from "next/server"
import { sendEmail } from "@/lib/email-service"

export async function POST(request: Request) {
  try {
    const { templateName, data, recipient } = await request.json()

    if (!templateName || !data || !recipient) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const result = await sendEmail(templateName, data, recipient)

    if (!result.success) {
      throw result.error
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
