import { createServerClient as createServerClientSupabase } from "@supabase/ssr"
import type { cookies } from "next/headers"
import type { CookieOptions } from "@supabase/ssr"

export function createServerClient(cookieStore: ReturnType<typeof cookies>) {
  return createServerClientSupabase(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
      set(name: string, value: string, options: CookieOptions) {
        cookieStore.set({ name, value, ...options })
      },
      remove(name: string, options: CookieOptions) {
        cookieStore.set({ name, value: "", ...options })
      },
    },
  })
}

// Export createClient as a named export
export { createServerClient as createClient }
