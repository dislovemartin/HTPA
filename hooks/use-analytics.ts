"use client"

import { useEffect, useCallback } from "react"

type EventParams = {
  [key: string]: string | number | boolean | undefined
}

export function useAnalytics() {
  // Check if window and gtag are available (client-side only)
  const isGtagAvailable = useCallback(() => {
    return typeof window !== "undefined" && typeof window.gtag !== "undefined"
  }, [])

  // Track page views
  useEffect(() => {
    if (!isGtagAvailable()) return

    const handleRouteChange = (url: string) => {
      window.gtag("config", "G-XXXXXXXXXX", {
        page_path: url,
      })
    }

    // Track initial page view
    handleRouteChange(window.location.pathname)

    return () => {
      // Clean up if needed
    }
  }, [isGtagAvailable])

  // Track custom events
  const trackEvent = useCallback(
    (eventName: string, params?: EventParams) => {
      if (!isGtagAvailable()) return

      window.gtag("event", eventName, params)

      // Optional: Save to database via API call
      try {
        fetch("/api/analytics/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ eventName, params }),
        })
      } catch (error) {
        console.error("Failed to save analytics event:", error)
      }
    },
    [isGtagAvailable],
  )

  return { trackEvent }
}
