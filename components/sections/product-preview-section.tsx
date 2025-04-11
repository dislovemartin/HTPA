"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ProductPreview() {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/10 via-gold-600/10 to-transparent" />
          <Image
            src="https://sjc.microlink.io/dACoBD81V0jhbU_TaUYiRrOVrhAXOh8TCYVdXmvVaYFIpbvF9B17bU0pnQF3gHfzVAOFzC-nwZVACScUpFYQsg.jpeg"
            alt="Huly App Interface"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>
        {/* Glow effect */}
        <div className="absolute -inset-x-20 top-0 h-[500px] bg-gradient-conic opacity-30 blur-3xl" />
      </motion.div>
    </section>
  )
}
