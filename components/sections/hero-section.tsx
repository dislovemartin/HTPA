"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5

      // Add error handling
      videoRef.current.addEventListener("error", () => {
        console.error("Video failed to load")
        if (videoRef.current) {
          videoRef.current.style.display = "none"
        }
      })
    }
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <video ref={videoRef} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/placeholder.svg?height=1080&width=1920&text=Video+Background" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in"
        >
          专业<span className="text-gold-500">会计服务</span>
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in stagger-1"
        >
          我们提供全面的会计、税务和咨询服务，帮助您实现财务目标，确保合规运营。
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in stagger-2"
        >
          <Button asChild variant="gold" size="lg" className="rounded-full px-8 py-3 font-medium transition-all">
            <Link href="/contact">预约咨询</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-gold-500 text-white hover:bg-gold-500/10 hover:text-white rounded-full px-8 py-3 font-medium transition-all">
            <Link href="/services">了解更多</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
