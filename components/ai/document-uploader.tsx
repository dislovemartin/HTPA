"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FileUp, Loader2, FileText, CheckCircle, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAuth } from "@/components/auth-provider"

export function DocumentUploader({ className }: { className?: string }) {
  const { user } = useAuth()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null
    if (!selectedFile) return

    setFile(selectedFile)
    setTitle(selectedFile.name)

    try {
      const text = await readFileAsText(selectedFile)
      setContent(text)
    } catch (err) {
      setError("Could not read file content. Please ensure it's a text file.")
      console.error(err)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title || !content || isLoading) return

    setIsLoading(true)
    setSuccess(null)
    setError(null)

    try {
      const response = await fetch("/api/documents/ingest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          content,
          metadata: {
            uploaded_by: user?.id,
            file_name: file?.name,
            file_type: file?.type,
            file_size: file?.size,
            upload_date: new Date().toISOString(),
          },
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to ingest document")
      }

      const data = await response.json()
      setSuccess(data.message || "Document successfully ingested!")

      // Reset form
      setTitle("")
      setContent("")
      setFile(null)
      if (fileInputRef.current) fileInputRef.current.value = ""
    } catch (error) {
      console.error("Error ingesting document:", error)
      setError("Failed to ingest document. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className={cn("w-full max-w-2xl mx-auto border-gold-500/20", className)}>
      <CardHeader className="bg-gradient-to-r from-gold-600 to-gold-500 text-black">
        <CardTitle>文档上传 Document Upload</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="block text-sm font-medium text-gold-500">
              文档标题 Document Title
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter document title"
              required
              className="border-gold-500/30 focus:border-gold-500"
            />
          </div>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center bg-gold-50/5 hover:bg-gold-50/10 transition-colors">
            <input
              type="file"
              id="document-upload"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".txt,.md,.csv,.json"
              className="hidden"
              disabled={isLoading}
            />
            <label htmlFor="document-upload" className="cursor-pointer flex flex-col items-center justify-center h-32">
              <FileUp className="h-10 w-10 text-gold-500 mb-3" />
              <span className="text-base font-medium text-gold-500">
                {file ? file.name : "点击上传文件  Click to upload file"}
              </span>
              <span className="text-xs text-gray-500 mt-2">支持 .txt, .md, .csv, .json</span>
              {file && (
                <span className="text-xs text-gray-400 mt-1">
                  {(file.size / 1024).toFixed(2)} KB • {file.type || "Unknown type"}
                </span>
              )}
            </label>
          </div>

          <div className="space-y-2">
            <label htmlFor="content" className="block text-sm font-medium text-gold-500">
              文档内容 Document Content
            </label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter or paste document content here"
              required
              className="min-h-[200px] border-gold-500/30 focus:border-gold-500"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading || !title || !content}
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
                上传文档 Upload Document
              </>
            )}
          </Button>

          {success && (
            <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-start">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-green-700">{success}</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-start">
              <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
