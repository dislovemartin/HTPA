import type React from "react"
import "./globals.css"
import { Inter, Noto_Sans_SC, Roboto_Mono } from "next/font/google"
import { LanguageProvider } from "@/components/language-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from "@next/third-parties/google"
import { GoogleTagManager } from "@/components/google-tag-manager"
import { SearchConsoleVerification } from "@/components/search-console-verification"

// Latin fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

// Chinese font
const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
  weight: ["400", "500", "700"],
  display: "swap",
})

// Monospace font for numbers and code
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
})

// Metadata...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <SearchConsoleVerification verificationId="YOUR_VERIFICATION_ID" />
      </head>
      <body className={`${inter.variable} ${notoSansSC.variable} ${robotoMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Analytics />
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
        <GoogleTagManager gtmId="GTM-XXXXXXX" />
      </body>
    </html>
  )
}


import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
