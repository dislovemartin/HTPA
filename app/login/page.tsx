"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AuthProvider, useAuth } from "@/components/auth-provider"
import { ClientOnly } from "@/components/client-only"
import Link from "next/link"
import { Loader2 } from "lucide-react"

function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { signIn } = useAuth()
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirect = searchParams.get("redirect") || "/ai-assistant"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await signIn(email, password)
      if (error) throw error
      router.push(redirect)
    } catch (error: any) {
      setError(error.message || "登录失败，请检查您的凭据。Login failed, please check your credentials.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-300">
          电子邮箱 Email
        </label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-htpa-black-light border-gold-500/20 text-white focus:border-gold-500"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium text-gray-300">
          密码 Password
        </label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="bg-htpa-black-light border-gold-500/20 text-white focus:border-gold-500"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gold-500 hover:bg-gold-600 text-black h-12 text-base"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
            登录中... Logging in...
          </>
        ) : (
          "登录 Login"
        )}
      </Button>
    </form>
  )
}

export default function LoginPage() {
  return (
    <ClientOnly>
      <AuthProvider>
        <main className="min-h-screen bg-gradient-to-b from-htpa-black to-htpa-black-light flex items-center justify-center p-4">
          <Card className="w-full max-w-md border-gold-500/20">
            <CardHeader className="bg-gradient-to-r from-gold-600 to-gold-500 text-black">
              <CardTitle className="text-center">HTPA AI 助手登录</CardTitle>
              <CardDescription className="text-black/70 text-center">
                登录以访问HTPA的AI助手功能
                <br />
                Login to access HTPA's AI assistant features
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <LoginForm />
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 border-t p-6 border-gold-500/20">
              <p className="text-sm text-gray-400 text-center">
                没有账户？请联系HTPA会计师事务所获取访问权限。
                <br />
                Don't have an account? Please contact HTPA Accounting for access.
              </p>
              <Link href="/" className="text-gold-500 hover:text-gold-400 text-sm text-center block">
                返回主页 Return to Homepage
              </Link>
            </CardFooter>
          </Card>
        </main>
      </AuthProvider>
    </ClientOnly>
  )
}
