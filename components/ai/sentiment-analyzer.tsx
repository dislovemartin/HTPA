"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, SmilePlus, Frown, Meh, ThumbsUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function SentimentAnalyzer({ className }: { className?: string }) {
  const [text, setText] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{
    sentiment: "positive" | "negative" | "neutral"
    score: number
    analysis: string
  } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!text.trim() || isLoading) return

    setIsLoading(true)

    try {
      const response = await fetch("/api/ai/sentiment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      })

      if (!response.ok) {
        throw new Error("Failed to analyze sentiment")
      }

      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error("Error analyzing sentiment:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const getSentimentIcon = () => {
    if (!result) return null

    switch (result.sentiment) {
      case "positive":
        return <SmilePlus className="h-12 w-12 text-green-500" />
      case "negative":
        return <Frown className="h-12 w-12 text-red-500" />
      case "neutral":
        return <Meh className="h-12 w-12 text-yellow-500" />
      default:
        return null
    }
  }

  const getSentimentColor = () => {
    if (!result) return ""

    switch (result.sentiment) {
      case "positive":
        return "bg-green-50 border-green-200"
      case "negative":
        return "bg-red-50 border-red-200"
      case "neutral":
        return "bg-yellow-50 border-yellow-200"
      default:
        return ""
    }
  }

  return (
    <Card className={cn("w-full max-w-2xl mx-auto border-gold-500/20", className)}>
      <CardHeader className="bg-gradient-to-r from-gold-600 to-gold-500 text-black">
        <CardTitle>情感分析 Sentiment Analysis</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="text" className="block text-sm font-medium text-gold-500">
              输入文本 Input Text
            </label>
            <Textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text to analyze sentiment..."
              required
              className="min-h-[150px] border-gold-500/30 focus:border-gold-500"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading || !text.trim()}
            className="w-full bg-gold-500 hover:bg-gold-600 text-black h-12 text-base"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin mr-2" />
                分析中... Analyzing...
              </>
            ) : (
              <>
                <ThumbsUp className="h-5 w-5 mr-2" />
                分析情感 Analyze Sentiment
              </>
            )}
          </Button>

          {result && (
            <div className={cn("border rounded-md p-4", getSentimentColor())}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  {getSentimentIcon()}
                  <div className="ml-4">
                    <h3 className="text-lg font-medium capitalize">{result.sentiment}</h3>
                    <div className="flex items-center mt-1">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className={cn(
                            "h-2.5 rounded-full",
                            result.sentiment === "positive"
                              ? "bg-green-500"
                              : result.sentiment === "negative"
                                ? "bg-red-500"
                                : "bg-yellow-500",
                          )}
                          style={{ width: `${Math.abs(result.score * 100)}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-sm">{Math.abs(result.score * 100).toFixed(0)}%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm whitespace-pre-wrap">{result.analysis}</div>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
