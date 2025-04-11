import type { ReactNode } from "react"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FloatingCta from "@/components/ui/floating-cta"
import ParticlesBackground from "@/components/ui/particles-background"

interface PageLayoutProps {
  children: ReactNode
  showParticles?: boolean
  className?: string
}

export default function PageLayout({ children, showParticles = false, className = "" }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative">
      {showParticles && <ParticlesBackground />}
      <Header />
      <main className={`flex-grow ${className}`}>{children}</main>
      <Footer />
      <FloatingCta />
    </div>
  )
}
