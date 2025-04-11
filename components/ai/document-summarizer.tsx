"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileUp, Loader2, FileText, CheckCircle, AlertCircle, Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/components/auth-provider"

export function DocumentSummarizer({ className }: { className?: string }) {
  const { user } = useAuth()
  const [file, setFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [summary, setSummary] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null
    setFile(selectedFile)
    setSummary(null)
    setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!file || isLoading) return

    setIsLoading(true)
    setSummary(null)
    setError(null)

    try {
      // Read the file content
      const text = await readFileAsText(file)

      // Send to API for summarization
      const response = await fetch("/api/ai/document-summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ documentText: text, documentName: file.name }),
      })

      if (!response.ok) {
        throw new Error("Failed to summarize document")
      }

      const data = await response.json()
      setSummary(data.summary)
    } catch (error) {
      console.error("Error summarizing document:", error)
      setError(
        "处理文档时出错。请确保文件格式正确并重试。Error processing document. Please ensure the file format is correct and try again.",
      )
    } finally {
      setIsLoading(false)
    }
  }

  const readFileAsText = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (e) => resolve(e.target?.result as string)
      reader.onerror = (e) => reject(e)
      reader.readAsText(file)
    })
  }

  const downloadSummary = () => {
    if (!summary) return

    const blob = new Blob([summary], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${file?.name.split(".")[0] || "document"}_summary.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <Card className={cn("w-full max-w-2xl mx-auto border-gold-500/20", className)}>
      <CardHeader className="bg-gradient-to-r from-gold-600 to-gold-500 text-black">
        <CardTitle>财务文档摘要 Financial Document Summary</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="text-center text-gray-500 py-4">
            <FileText className="mx-auto h-12 w-12 text-gold-500 mb-2" />
            <p>上传财务文档以获取AI生成的摘要</p>
            <p className="text-sm">Upload a financial document to get an AI-generated summary</p>
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-gold-50/5 hover:bg-gold-50/10 transition-colors">
            <input
              type="file"
              id="document-upload"
              onChange={handleFileChange}
              accept=".txt,.pdf,.doc,.docx,.csv,.xls,.xlsx"
              className="hidden"
              disabled={isLoading}
            />
            <label htmlFor="document-upload" className="cursor-pointer flex flex-col items-center justify-center h-32">
              <FileUp className="h-10 w-10 text-gold-500 mb-3" />
              <span className="text-base font-medium text-gold-500">
                {file ? file.name : "点击上传文件 Click to upload file"}
              </span>
              <span className="text-xs text-gray-500 mt-2">支持 .txt, .pdf, .doc, .docx, .csv, .xls, .xlsx</span>
              {file && (
                <span className="text-xs text-gray-400 mt-1">
                  {(file.size / 1024).toFixed(2)} KB • {file.type || "Unknown type"}
                </span>
              )}
            </label>
          </div>

          {file && (
            <Button
              onClick={handleSubmit}
              disabled={isLoading || !file}
              className="w-full bg-gold-500 hover:bg-gold-600 text-black h-12 text-base"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin mr-2" />
                  处理中... Processing...
                </>
              ) : (
                <>
                  <FileText className="h-5 w-5 mr-2" />
                  生成摘要 Generate Summary
                </>
              )}
            </Button>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-start">
              <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          {summary && (
            <div className="mt-6 border border-gold-500/20 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between bg-gold-500/10 p-3 border-b border-gold-500/20">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <h3 className="font-medium text-lg">摘要 Summary</h3>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-gold-500 border-gold-500/30 hover:bg-gold-500/10"
                  onClick={downloadSummary}
                >
                  <Download className="h-4 w-4 mr-1" />
                  下载 Download
                </Button>
              </div>
              <div className="bg-gold-50/5 rounded-b-lg p-5 text-sm whitespace-pre-wrap max-h-[500px] overflow-y-auto">
                {summary}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
