import type { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  subtitle?: string
  children?: ReactNode
}

export default function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <div className="relative py-20 md:py-28 bg-gradient-to-b from-black to-neutral-900 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-600/5 rounded-full filter blur-[100px] opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-600/5 rounded-full filter blur-[80px] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="text-gold-500">{title.split(" ")[0]}</span>
            {title.split(" ").slice(1).join(" ")}
          </h1>
          {subtitle && <p className="text-lg text-gray-300 max-w-3xl mx-auto">{subtitle}</p>}
          {children}
        </div>
      </div>
    </div>
  )
}
