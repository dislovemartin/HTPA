"use client"

import { createClient } from "@supabase/supabase-js"

// Create a single supabase client for the client side
export const createClientClient = () => {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}

// Export createClient as a named export
export { createClient }
