"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, Loader2, Bot, User, Copy, CheckCircle, RefreshCw, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/components/auth-provider"
import { createClient } from "@/lib/supabase/client"

interface Message {
  id?: string
  role: "user" | "assistant"
  content: string
  timestamp?: string
}

interface Conversation {
  id: string
  title: string
  last_query: string
  created_at: string
  updated_at: string
}

export function RAGChatInterface() {
  const { user } = useAuth()
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [copySuccess, setCopySuccess] = useState<number | null>(null)
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null)
  const [showConversations, setShowConversations] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Fetch user's conversations
  useEffect(() => {
    if (user) {
      fetchConversations()
    }
  }, [user])

  const fetchConversations = async () => {
    if (!user) return

    try {
      const supabase = createClient()
      const { data, error } = await supabase
        .from("rag_conversations")
        .select("*")
        .eq("user_id", user.id)
        .order("updated_at", { ascending: false })
        .limit(10)

      if (error) throw error
      setConversations(data || [])
    } catch (error) {
      console.error("Error fetching conversations:", error)
    }
  }

  // Fetch messages for current conversation
  useEffect(() => {
    if (currentConversationId) {
      fetchMessages(currentConversationId)
    }
  }, [currentConversationId])

  const fetchMessages = async (conversationId: string) => {
    try {
      const supabase = createClient()
      const { data, error } = await supabase
        .from("rag_messages")
        .select("*")
        .eq("conversation_id", conversationId)
        .order("created_at", { ascending: true })

      if (error) throw error

      setMessages(
        data?.map((msg) => ({
          id: msg.id,
          role: msg.role,
          content: msg.content,
          timestamp: msg.created_at,
        })) || [],
      )
    } catch (error) {
      console.error("Error fetching messages:", error)
    }
  }

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
      const response = await fetch("/api/rag/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: userMessage,
          userId: user?.id,
          conversationId: currentConversationId,
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
          content: data.response || "Sorry, I couldn't process your request.",
        },
      ])

      // Update conversation list
      fetchConversations()

      // Update current conversation ID if this is a new conversation
      if (!currentConversationId && data.conversationId) {
        setCurrentConversationId(data.conversationId)
      }
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

  const startNewConversation = () => {
    setCurrentConversationId(null)
    setMessages([])
    inputRef.current?.focus()
  }

  const selectConversation = (conversationId: string) => {
    setCurrentConversationId(conversationId)
    setShowConversations(false)
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

  const formatDate = (dateString?: string) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  return (
    <div className="flex h-[700px] w-full max-w-4xl mx-auto">
      {/* Conversation sidebar */}
      {showConversations && (
        <div className="w-64 bg-htpa-black-light border-r border-gold-500/20 overflow-y-auto">
          <div className="p-3 border-b border-gold-500/20">
            <Button onClick={startNewConversation} className="w-full bg-gold-500 hover:bg-gold-600 text-black">
              New Conversation
            </Button>
          </div>
          <div className="p-2">
            <h3 className="text-sm font-medium text-gold-500 mb-2">Recent Conversations</h3>
            {conversations.length === 0 ? (
              <p className="text-xs text-gray-400 p-2">No conversations yet</p>
            ) : (
              <ul className="space-y-1">
                {conversations.map((conv) => (
                  <li key={conv.id}>
                    <button
                      onClick={() => selectConversation(conv.id)}
                      className={cn(
                        "w-full text-left p-2 rounded text-sm hover:bg-gold-500/10 flex flex-col",
                        currentConversationId === conv.id && "bg-gold-500/20",
                      )}
                    >
                      <span className="truncate font-medium">
                        {conv.title || conv.last_query.substring(0, 20) + "..."}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        {formatDate(conv.updated_at)}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {/* Main chat area */}
      <Card className="flex-1 flex flex-col border-gold-500/20 overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-gold-600 to-gold-500 text-black flex-shrink-0">
          <div className="flex justify-between items-center">
            <CardTitle>智能助手 AI Assistant</CardTitle>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="bg-black/10 border-black/20 text-black hover:bg-black/20"
                onClick={() => setShowConversations(!showConversations)}
              >
                <Clock className="h-4 w-4 mr-1" />
                History
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-black/10 border-black/20 text-black hover:bg-black/20"
                onClick={startNewConversation}
              >
                <RefreshCw className="h-4 w-4 mr-1" />
                New
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4 flex-1 overflow-y-auto bg-gradient-to-b from-htpa-black to-htpa-black-light">
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
                    {message.timestamp && (
                      <div className="text-xs text-gray-400 mt-1">{formatDate(message.timestamp)}</div>
                    )}
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
              placeholder="输入您的问题... Type your question..."
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
    </div>
  )
}
