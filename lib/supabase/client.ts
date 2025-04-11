"use client"

import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client using environment variables
// Ensure these variables are accessible in your client-side environment
// (e.g., prefixed with NEXT_PUBLIC_ in Next.js)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Check if the variables are loaded correctly
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL or Anon Key is missing in environment variables.");
}

// Export the initialized Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Function to trigger Google Sign-In
export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      // Optional: Specify query parameters for Google's OAuth flow
      // queryParams: {
      //   access_type: 'offline',
      //   prompt: 'consent',
      // },
      // Optional: Redirect URL after sign-in (defaults to site URL)
      // redirectTo: 'http://localhost:3000/welcome' // Or your production callback URL
    },
  });

  if (error) {
    console.error('Error signing in with Google:', error.message);
    // Potentially return the error or handle it further
    return { data, error };
  } else {
    // Redirects to Google for authentication
    console.log('Redirecting to Google for sign in...');
    // The user will be redirected back to your app after successful auth
    // Return data for potential chaining or logging
    return { data, error: null };
  }
}

// Function to sign out
export async function signOut() {
    const { error } = await supabase.auth.signOut();
     if (error) {
        console.error('Error signing out:', error.message);
    } else {
        console.log('Signed out successfully');
    }
    // Return error status
    return { error };
}

// Note: Listening for auth state changes is typically done in a higher-level
// component or context provider that wraps your application, rather than in
// the client initialization file itself.
// Example:
// supabase.auth.onAuthStateChange((event, session) => {
//   console.log('Auth event:', event, session);
//   // Update global state, context, etc.
// });
