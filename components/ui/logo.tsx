import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  scrolled?: boolean
}

export default function Logo({ scrolled = false }: LogoProps) {
  return (
    <div className={cn("transition-all duration-300", scrolled ? "h-10 w-auto" : "h-12 w-auto")}>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HTPA%20LOGO%20A1%EF%BC%88%E7%AB%96%E7%89%88%EF%BC%894-4-2025%20%E8%BD%AC%E6%9B%B2_%E7%94%BB%E6%9D%BF%201-KexSOellbVTpH9lSaMaowjSRVYU1OD.png"
        alt="HTPA 恒泰会计师事务所"
        width={120}
        height={120}
        className="h-full w-auto"
        priority
      />
    </div>
  )
}
