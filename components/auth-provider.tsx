"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import type { Session, User } from "@supabase/supabase-js"

type AuthContextType = {
  user: User | null
  session: Session | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signUp: (email: string, password: string) => Promise<{ error: any; data: any }>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<{ error: any }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const setData = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession()
      if (error) {
        console.error(error)
        setIsLoading(false)
        return
      }
      setSession(session)
      setUser(session?.user ?? null)
      setIsLoading(false)
    }

    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setIsLoading(false)
    })

    setData()

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    return { error }
  }

  const signUp = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({ email, password })
    return { data, error }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  const resetPassword = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    return { error }
  }

  const value = {
    user,
    session,
    isLoading,
    signIn,
    signUp,
    signOut,
    resetPassword,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
