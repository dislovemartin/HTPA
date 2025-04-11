"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, Phone } from "lucide-react"
import Link from "next/link"

export default function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="bg-black border border-gold-500/50 rounded-lg shadow-lg p-4 max-w-xs">
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              aria-label="Close"
            >
              <X size={16} />
            </button>
            <div className="flex items-start space-x-4">
              <div className="bg-gold-900/30 p-2 rounded-full">
                <Phone className="h-6 w-6 text-gold-500" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">需要专业财税建议？</h3>
                <p className="text-gray-400 text-sm mb-3">我们的CPA团队随时为您提供专业支持</p>
                <Button variant="gold" size="sm" className="w-full rounded-full">
                  <Link href="/contact">立即咨询</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
