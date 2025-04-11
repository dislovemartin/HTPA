import { NextResponse } from "next/server"
import { ingestDocument } from "@/lib/rag-service"

export async function POST(request: Request) {
  try {
    const { title, content, metadata } = await request.json()

    if (!title || !content) {
      return NextResponse.json({ error: "Title and content are required" }, { status: 400 })
    }

    const result = await ingestDocument(title, content, metadata)

    return NextResponse.json({ success: true, message: result })
  } catch (error) {
    console.error("Error ingesting document:", error)
    return NextResponse.json({ error: "Failed to ingest document" }, { status: 500 })
  }
}
