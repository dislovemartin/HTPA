import { createServerClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatDistanceToNow } from "date-fns"

export default async function ContactsPage() {
  const supabase = createServerClient()

  // Fetch contact submissions
  const { data: submissions, error } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(50)

  if (error) {
    console.error("Error fetching contact submissions:", error)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">联系表单管理</h1>
      </div>

      {submissions && submissions.length > 0 ? (
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
                    {formatDistanceToNow(new Date(submission.created_at), { addSuffix: true })}
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
      ) : (
        <Card className="bg-neutral-900 border-gold-900/30">
          <CardContent className="p-6 text-center">
            <p className="text-gray-400">暂无联系表单提交</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
