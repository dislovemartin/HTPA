"use client"

import { useState, useEffect } from "react"
import { getContactSubmissions, type ContactFormData } from "@/app/actions/contact-actions"
import PageLayout from "@/components/layout/page-layout"
import PageHeader from "@/components/ui/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatDistanceToNow } from "date-fns"

export default function AdminPage() {
  const [submissions, setSubmissions] = useState<ContactFormData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadSubmissions() {
      try {
        setLoading(true)
        const data = await getContactSubmissions()
        setSubmissions(data)
      } catch (err) {
        setError("加载提交数据时出错")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadSubmissions()
  }, [])

  return (
    <PageLayout>
      <PageHeader title="管理 面板" subtitle="查看和管理联系表单提交" />

      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-600/5 rounded-full filter blur-[100px] opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-600/5 rounded-full filter blur-[80px] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">联系表单提交</h2>
            <Button variant="gold" onClick={() => window.location.reload()} className="rounded-full">
              刷新数据
            </Button>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="w-12 h-12 border-4 border-gold-500/30 border-t-gold-500 rounded-full animate-spin"></div>
            </div>
          ) : error ? (
            <Card className="bg-red-900/20 border-red-500/50">
              <CardContent className="p-6">
                <p className="text-white">{error}</p>
              </CardContent>
            </Card>
          ) : submissions.length === 0 ? (
            <Card className="bg-neutral-900 border-gold-900/30">
              <CardContent className="p-6 text-center">
                <p className="text-gray-400">暂无提交数据</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {submissions.map((submission) => (
                <Card
                  key={submission.id}
                  className="bg-neutral-900 border-gold-900/30 hover:border-gold-500/50 transition-all"
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-white">{submission.subject}</CardTitle>
                      <span className="text-xs text-gray-400">
                        {formatDistanceToNow(new Date(submission.createdAt), { addSuffix: true })}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-gray-400 mb-1">姓名</p>
                        <p className="text-white">{submission.name}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-1">邮箱</p>
                        <p className="text-white">{submission.email}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-1">电话</p>
                        <p className="text-white">{submission.phone || "未提供"}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">消息</p>
                      <p className="text-white whitespace-pre-wrap">{submission.message}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  )
}
