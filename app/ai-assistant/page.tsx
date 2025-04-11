"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RAGChatInterface } from "@/components/ai/rag-chat-interface"
import { DocumentUploader } from "@/components/ai/document-uploader"
import { SentimentAnalyzer } from "@/components/ai/sentiment-analyzer"
import { AnalyticsDashboard } from "@/components/ai/analytics-dashboard"
import { AuthProvider, useAuth } from "@/components/auth-provider"
import { ProtectedRoute } from "@/components/protected-route"
import { ClientOnly } from "@/components/client-only"
import { MessageSquare, FileUp, BarChart2, ThumbsUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

function AIAssistantContent() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState("chat")

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          <span className="text-gradient-gold">AI 助手 AI Assistant</span>
        </h1>
        <Link href="/ai-assistant/history">
          <Button variant="outline" className="border-gold-500/30 text-gold-500 hover:bg-gold-500/10">
            查看历史记录 View History
          </Button>
        </Link>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 mb-6">
          <TabsTrigger value="chat" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            智能对话 Chat
          </TabsTrigger>
          <TabsTrigger value="upload" className="flex items-center gap-2">
            <FileUp className="h-4 w-4" />
            文档上传 Upload
          </TabsTrigger>
          <TabsTrigger value="sentiment" className="flex items-center gap-2">
            <ThumbsUp className="h-4 w-4" />
            情感分析 Sentiment
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <BarChart2 className="h-4 w-4" />
            分析 Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="chat" className="mt-0">
          <RAGChatInterface />
        </TabsContent>

        <TabsContent value="upload" className="mt-0">
          <DocumentUploader />
        </TabsContent>

        <TabsContent value="sentiment" className="mt-0">
          <SentimentAnalyzer />
        </TabsContent>

        <TabsContent value="analytics" className="mt-0">
          <AnalyticsDashboard />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default function AIAssistantPage() {
  return (
    <ClientOnly>
      <AuthProvider>
        <ProtectedRoute>
          <main className="min-h-screen bg-gradient-to-b from-htpa-black to-htpa-black-light">
            <div className="container mx-auto px-4 py-16">
              <AIAssistantContent />
            </div>
          </main>
        </ProtectedRoute>
      </AuthProvider>
    </ClientOnly>
  )
}
