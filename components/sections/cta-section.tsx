"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-900/20 to-gold-800/5"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Streamline Your <span className="text-gold-500">Workflow?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of teams already using StreamLine to boost their productivity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="gold" size="lg" className="rounded-full px-8 py-6 text-lg">
              <Link href="/contact">Start Your Free Trial</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-lg border-gold-500/50 text-white hover:bg-gold-500/10"
            >
              <Link href="/contact">Schedule a Demo</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
