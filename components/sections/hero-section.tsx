"use client"

import { useEffect, useRef } from "react"

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

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <video ref={videoRef} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/placeholder.svg?height=1080&width=1920&text=Video+Background" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black to-neutral-900 z-[-1]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          专业<span className="text-gold-500">会计服务</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          我们提供全面的会计、税务和咨询服务，帮助您实现财务目标，确保合规运营。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-gold-500 hover:bg-gold-600 text-black px-8 py-3 rounded-full font-medium transition-all">
            预约咨询
          </button>
          <button className="border border-gold-500 text-white hover:bg-gold-500/10 px-8 py-3 rounded-full font-medium transition-all">
            了解更多
          </button>
        </div>
      </div>
    </section>
  )
}
