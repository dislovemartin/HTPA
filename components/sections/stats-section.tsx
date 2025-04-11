"use client"

import { motion } from "framer-motion"
import AnimatedCounter from "@/components/ui/animated-counter"
import { cn } from "@/lib/utils"

const stats = [
  { value: "40+", label: "年行业经验" },
  { value: "5000+", label: "满意客户" },
  { value: "100%", label: "CPA持证率" },
  { value: "3", label: "服务语言" },
]

export default function StatsSection() {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-900/10 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-x-0 md:divide-x md:divide-gold-900/50">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "text-center",
                "md:px-8",
                index > 0 && index < 2 && "pt-8 md:pt-0"
              )}
            >
              <AnimatedCounter
                value={stat.value}
                className="text-4xl md:text-5xl font-bold text-gold-500 mb-2 block"
              />
              <div className="text-gray-400 uppercase tracking-wider text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
