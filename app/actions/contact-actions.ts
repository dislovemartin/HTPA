"use server"

import { cookies } from "next/headers"
import { createServerClient } from "@/lib/supabase/server"

export type ContactFormData = {
  id?: string
  name: string
  email: string
  phone?: string
  subject: string
  message: string
  created_at?: string
  status?: "new" | "in_progress" | "completed"
}

export async function submitContactForm(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return { success: false, message: "请填写所有必填字段" }
    }

    // Create submission object
    const submission: ContactFormData = {
      name,
      email,
      phone: phone || undefined,
      subject,
      message,
      status: "new",
    }

    // Store in Supabase
    const cookieStore = cookies()
    const supabase = createServerClient(cookieStore)
    const { error } = await supabase.from("contact_submissions").insert(submission)

    if (error) {
      console.error("Error inserting contact submission:", error)
      throw error
    }

    return {
      success: true,
      message: "您的消息已成功提交！我们将尽快与您联系。",
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      message: "提交表单时出错，请稍后再试。",
    }
  }
}

export async function getContactSubmissions(): Promise<ContactFormData[]> {
  try {
    const cookieStore = cookies()
    const supabase = createServerClient(cookieStore)
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      throw error
    }

    return data || []
  } catch (error) {
    console.error("Error fetching contact submissions:", error)
    return []
  }
}
