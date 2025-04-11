"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AuthProvider, useAuth } from "@/components/auth-provider"
import { ProtectedRoute } from "@/components/protected-route"
import { ClientOnly } from "@/components/client-only"
import { createClient } from "@/lib/supabase/client"
import { Loader2, MessageSquare, FileText, Send } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

function HistoryContent() {
  const { user } = useAuth()
  const [conversations, setConversations] = useState<any[]>([])
  const [documentSummaries, setDocumentSummaries] = useState<any[]>([])
  const [automatedResponses, setAutomatedResponses] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("conversations")

  useEffect(() => {
    const fetchHistory = async () => {
      if (!user) return

      setIsLoading(true)
      const supabase = createClient()

      try {
        // Fetch conversations
        const { data: conversationsData, error: conversationsError } = await supabase
          .from("ai_conversations")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(50)

        if (conversationsError) throw conversationsError
        setConversations(conversationsData || [])

        // Fetch document summaries
        const { data: summariesData, error: summariesError } = await supabase
          .from("ai_document_summaries")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(50)

        if (summariesError) throw summariesError
        setDocumentSummaries(summariesData || [])

        // Fetch automated responses
        const { data: responsesData, error: responsesError } = await supabase
          .from("ai_automated_responses")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(50)

        if (responsesError) throw responsesError
        setAutomatedResponses(responsesData || [])
      } catch (error) {
        console.error("Error fetching history:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchHistory()
  }, [user])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-gold-500" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          <span className="text-gradient-gold">AI 助手历史记录</span>
        </h1>
        <Link href="/ai-assistant">
          <Button variant="outline" className="border-gold-500/30 text-gold-500 hover:bg-gold-500/10">
            返回 AI 助手
          </Button>
        </Link>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="conversations" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            对话历史 Conversations
          </TabsTrigger>
          <TabsTrigger value="documents" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            文档摘要 Documents
          </TabsTrigger>
          <TabsTrigger value="responses" className="flex items-center gap-2">
            <Send className="h-4 w-4" />
            自动回复 Responses
          </TabsTrigger>
        </TabsList>

        <TabsContent value="conversations" className="mt-0 space-y-4">
          {conversations.length === 0 ? (
            <Card className="border-gold-500/20">
              <CardContent className="p-6 text-center text-gray-400">
                <MessageSquare className="h-12 w-12 mx-auto mb-3 text-gray-500" />
                <p>您还没有任何对话历史记录。</p>
                <p className="text-sm">You don't have any conversation history yet.</p>
              </CardContent>
            </Card>
          ) : (
            conversations.map((conversation) => (
              <Card key={conversation.id} className="border-gold-500/20 overflow-hidden">
                <CardHeader className="bg-gold-500/10 py-3 px-4">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-base font-medium">
                      {conversation.conversation_type === "faq" ? "会计问答 FAQ" : "税务指南 Tax Guidance"}
                    </CardTitle>
                    <span className="text-xs text-gray-400">{formatDate(conversation.created_at)}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium text-gold-500">问题 Question</h3>
                    <p className="text-sm bg-gold-500/5 p-2 rounded">{conversation.question}</p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium text-gold-500">回答 Answer</h3>
                    <p className="text-sm bg-gold-500/10 p-2 rounded whitespace-pre-wrap">{conversation.answer}</p>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="documents" className="mt-0 space-y-4">
          {documentSummaries.length === 0 ? (
            <Card className="border-gold-500/20">
              <CardContent className="p-6 text-center text-gray-400">
                <FileText className="h-12 w-12 mx-auto mb-3 text-gray-500" />
                <p>您还没有任何文档摘要历史记录。</p>
                <p className="text-sm">You don't have any document summary history yet.</p>
              </CardContent>
            </Card>
          ) : (
            documentSummaries.map((summary) => (
              <Card key={summary.id} className="border-gold-500/20 overflow-hidden">
                <CardHeader className="bg-gold-500/10 py-3 px-4">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-base font-medium">{summary.document_name}</CardTitle>
                    <span className="text-xs text-gray-400">{formatDate(summary.created_at)}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium text-gold-500">文档预览 Document Preview</h3>
                    <p className="text-xs bg-gold-500/5 p-2 rounded max-h-20 overflow-y-auto">
                      {summary.document_text}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium text-gold-500">摘要 Summary</h3>
                    <p className="text-sm bg-gold-500/10 p-2 rounded whitespace-pre-wrap">{summary.summary}</p>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="responses" className="mt-0 space-y-4">
          {automatedResponses.length === 0 ? (
            <Card className="border-gold-500/20">
              <CardContent className="p-6 text-center text-gray-400">
                <Send className="h-12 w-12 mx-auto mb-3 text-gray-500" />
                <p>您还没有任何自动回复历史记录。</p>
                <p className="text-sm">You don't have any automated response history yet.</p>
              </CardContent>
            </Card>
          ) : (
            automatedResponses.map((response) => (
              <Card key={response.id} className="border-gold-500/20 overflow-hidden">
                <CardHeader className="bg-gold-500/10 py-3 px-4">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-base font-medium">自动回复 Automated Response</CardTitle>
                    <span className="text-xs text-gray-400">{formatDate(response.created_at)}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-4 space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium text-gold-500">咨询内容 Inquiry</h3>
                    <p className="text-sm bg-gold-500/5 p-2 rounded">{response.inquiry}</p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium text-gold-500">回复 Response</h3>
                    <p className="text-sm bg-gold-500/10 p-2 rounded whitespace-pre-wrap">{response.response}</p>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default function HistoryPage() {
  return (
    <ClientOnly>
      <AuthProvider>
        <ProtectedRoute>
          <main className="min-h-screen bg-gradient-to-b from-htpa-black to-htpa-black-light">
            <div className="container mx-auto px-4 py-16">
              <HistoryContent />
            </div>
          </main>
        </ProtectedRoute>
      </AuthProvider>
    </ClientOnly>
  )
}
