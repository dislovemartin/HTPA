import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createServerClient } from "@/lib/supabase/server";
import { formatDistanceToNow } from "date-fns";
import { cookies } from "next/headers";

// Add RAG-related imports

// Define an interface for the submission data
interface Submission {
  id: string
  subject: string
  created_at: string
  name: string
  email: string
  phone?: string | null
  message: string
}

interface Document {
  id: string
  title: string
  content: string
  similarity: number
  metadata: any  // Retain as is, or specify if known
}

export default async function ContactsPage() {
  const cookieStore = cookies()
  const supabase = createServerClient(cookieStore)

  // Fetch contact submissions
  const { data: submissions, error } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(50)

  if (error) {
    console.error("Error fetching contact submissions:", error)
  }

  // Simplified RAG query function with fixes
  const fetchRAGDocuments = async (query: string, embedding: number[]) => {
    const { data: ragResults, error: ragError } = await supabase.rpc('match_documents', {
      query_embedding: embedding,
      match_threshold: 0.5,
      match_count: 5
    }).returns<Document[]>();

    if (ragError) {
      console.error("RAG query error:", ragError);
      return [];
    }
    return ragResults || [];
  };

  // Fix invalid expression by using a valid array placeholder
  const sampleQueryEmbedding = [0.1, 0.2, 0.3];  // Replaced invalid ellipsis with a complete array
  const ragDocuments = await fetchRAGDocuments("sample query", sampleQueryEmbedding);

  return (
    <div className="space-y-6 bg-background text-foreground">
      <div className="flex justify-between items-start p-4 border-border hover:border-primary/50 transition-all">
        <h1 className="text-2xl font-bold text-foreground">联系表单管理</h1>
      </div>

      {/* RAG Results Section */}
      {ragDocuments.length > 0 && (
        <div className="mb-6 p-4 border border-border rounded-lg bg-muted/10">
          <h2 className="text-xl font-semibold text-primary mb-2">相关文档 (RAG Results)</h2>
          <div className="grid grid-cols-1 gap-4">
            {ragDocuments.map((doc: Document) => (  // Added explicit type for doc
              <Card key={doc.id} className="bg-card p-4">
                <CardTitle className="text-foreground">{doc.title}</CardTitle>
                <p className="text-muted-foreground mt-2">{doc.content.substring(0, 100)}...</p>
                <p className="text-xs text-muted-foreground">Similarity: {(doc.similarity * 100).toFixed(2)}%</p>
              </Card>
            ))}
          </div>
        </div>
      )}

      {submissions && submissions.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
          {submissions.map((submission: Submission) => (
            <Card
              key={submission.id}
              className="bg-gradient-to-br from-card to-card/80 border-border hover:border-primary/50 transition-all shadow-sm hover:shadow-md focus:outline focus:outline-primary/50"
              aria-label={`Contact submission: ${submission.subject}`}
            >
              <CardHeader className="pb-2 bg-muted/10">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-semibold text-primary">{submission.subject}</CardTitle>
                  <span className="text-muted-foreground text-xs">
                    {formatDistanceToNow(new Date(submission.created_at), { addSuffix: true })}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">姓名</p>
                    <p className="text-foreground font-medium" aria-label="Name">{submission.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">邮箱</p>
                    <p className="text-foreground font-medium" aria-label="Email">{submission.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">电话</p>
                    <p className="text-foreground font-medium" aria-label="Phone">{submission.phone || "未提供"}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">消息</p>
                  <p className="text-foreground whitespace-pre-wrap" aria-label="Message">{submission.message}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="bg-card border-border shadow-sm text-center p-6">
          <CardContent>
            <p className="text-muted-foreground" aria-label="No submissions">暂无联系表单提交</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
