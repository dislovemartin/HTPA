import { createServerClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function POST() {
  const supabase = createServerClient()
  await supabase.auth.signOut()

  return NextResponse.redirect(new URL("/login", process.env.NEXT_PUBLIC_SITE_URL))
}
