"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, Loader2, Bot, User, Copy, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/components/auth-provider"

interface Message {
  role: "user" | "assistant"
  content: string
}

interface ChatInterfaceProps {
  title: string
  placeholder?: string
  apiEndpoint: string
  initialMessages?: Message[]
  additionalData?: any
  className?: string
}

export function ChatInterface({
  title,
  placeholder = "输入您的问题... Type your question...",
  apiEndpoint,
  initialMessages = [],
  additionalData = {},
  className,
}: ChatInterfaceProps) {
  const { user } = useAuth()
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [copySuccess, setCopySuccess] = useState<number | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Focus input on initial render
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")

    // Add user message to chat
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: userMessage,
          ...additionalData,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to get response")
      }

      const data = await response.json()

      // Add assistant response to chat
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.response || data.summary || "Sorry, I couldn't process your request.",
        },
      ])
    } catch (error) {
      console.error("Error getting AI response:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "抱歉，处理您的请求时出现了错误。请稍后再试。Sorry, there was an error processing your request. Please try again later.",
        },
      ])
    } finally {
      setIsLoading(false)
      // Focus input after response
      inputRef.current?.focus()
    }
  }

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopySuccess(index)
        setTimeout(() => setCopySuccess(null), 2000)
      },
      (err) => {
        console.error("Could not copy text: ", err)
      },
    )
  }

  return (
    <Card className={cn("w-full max-w-2xl mx-auto border-gold-500/20", className)}>
      <CardHeader className="bg-gradient-to-r from-gold-600 to-gold-500 text-black">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 h-[500px] overflow-y-auto bg-gradient-to-b from-htpa-black to-htpa-black-light">
        <div className="space-y-4">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              <Bot className="mx-auto h-16 w-16 text-gold-500 mb-4 opacity-80" />
              <p className="text-lg mb-2 text-gold-500/90">您好！我是HTPA的AI助手。</p>
              <p className="text-base mb-6 text-gold-500/90">Hello! I'm HTPA's AI assistant.</p>
              <p className="text-sm text-gray-400">请输入您的问题，我会尽力帮助您。</p>
              <p className="text-sm text-gray-400">Please enter your question, and I'll do my best to help you.</p>
            </div>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex gap-3 rounded-lg p-4 animate-fade-in",
                  message.role === "user"
                    ? "bg-gold-500/10 ml-6 border border-gold-500/20"
                    : "bg-gold-500/20 mr-6 border border-gold-500/30",
                )}
              >
                <div className="flex-shrink-0 mt-1">
                  {message.role === "assistant" ? (
                    <div className="h-8 w-8 rounded-full bg-gold-500 flex items-center justify-center">
                      <Bot className="h-5 w-5 text-black" />
                    </div>
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
                      <User className="h-5 w-5 text-gray-200" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                  {message.role === "assistant" && (
                    <div className="flex justify-end mt-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 px-2 text-xs text-gray-400 hover:text-gold-500"
                        onClick={() => copyToClipboard(message.content, index)}
                      >
                        {copySuccess === index ? (
                          <span className="flex items-center">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            已复制 Copied
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Copy className="h-3 w-3 mr-1" />
                            复制 Copy
                          </span>
                        )}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex gap-3 rounded-lg p-4 bg-gold-500/20 mr-6 border border-gold-500/30 animate-pulse">
              <div className="flex-shrink-0 mt-1">
                <div className="h-8 w-8 rounded-full bg-gold-500 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-black" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin text-gold-500" />
                <span className="text-sm text-gold-500/80">思考中... Thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      <CardFooter className="border-t p-3 bg-htpa-black border-gold-500/20">
        <form onSubmit={handleSubmit} className="flex w-full gap-2">
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            disabled={isLoading}
            className="flex-1 bg-htpa-black-light border-gold-500/30 text-white focus:border-gold-500 h-12"
          />
          <Button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-gold-500 hover:bg-gold-600 text-black h-12 px-6"
          >
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
