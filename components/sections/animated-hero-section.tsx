"use client"

import { useRouter } from "next/navigation"
import BackgroundPaths from "@/components/ui/background-paths"

export default function AnimatedHeroSection() {
  const router = useRouter()

  const handleButtonClick = () => {
    router.push("/dashboard")
  }

  return (
    <section className="h-screen">
      <BackgroundPaths title="Financial Excellence" buttonText="Explore Services" onButtonClick={handleButtonClick} />
    </section>
  )
}
