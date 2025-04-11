import { NextResponse } from "next/server"
import { callNvidiaAPI } from "@/lib/nvidia-service"

export async function POST(request: Request) {
  try {
    const { text } = await request.json()

    if (!text) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 })
    }

    const systemPrompt = `You are a sentiment analysis expert. Analyze the provided text and determine whether the sentiment is positive, negative, or neutral.
    
    Provide your analysis in the following JSON format:
    {
      "sentiment": "positive|negative|neutral",
      "score": 0.0 to 1.0 (where 1.0 is strongly positive/negative and 0.0 is neutral),
      "analysis": "A brief explanation of your analysis"
    }
    
    Only respond with valid JSON. Do not include any other text in your response.`

    const prompt = `Analyze the sentiment of the following text: "${text}"`

    const response = await callNvidiaAPI(prompt, systemPrompt)

    // Parse the JSON response
    try {
      const jsonResponse = JSON.parse(response)
      return NextResponse.json(jsonResponse)
    } catch (error) {
      console.error("Error parsing JSON response:", error)
      return NextResponse.json({ error: "Failed to parse sentiment analysis response" }, { status: 500 })
    }
  } catch (error) {
    console.error("Error analyzing sentiment:", error)
    return NextResponse.json({ error: "Failed to analyze sentiment" }, { status: 500 })
  }
}
