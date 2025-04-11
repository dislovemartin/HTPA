import type React from "react"
import "./globals.css"
import { Inter, Noto_Sans_SC } from "next/font/google"
import type { Metadata } from "next"
import { LanguageProvider } from "@/components/language-provider"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
  weight: ["400", "500", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "HTPA 恒泰会计师事务所 | 专业会计税务服务",
  description:
    "HTPA恒泰会计师事务所提供专业的会计、税务和财务管理服务，包括个人所得税申报、公司纳税申报、税务审计、企业注册等。",
  keywords: "会计师事务所, CPA, 税务服务, 个人所得税, 公司纳税申报, 安省会计师, Scarborough会计师",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://htpa.ca",
    title: "HTPA 恒泰会计师事务所 | 专业会计税务服务",
    description:
      "HTPA恒泰会计师事务所提供专业的会计、税务和财务管理服务，包括个人所得税申报、公司纳税申报、税务审计、企业注册等。",
    siteName: "HTPA 恒泰会计师事务所",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoSansSC.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'