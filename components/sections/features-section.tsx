"use client"

import { motion } from "framer-motion"
import { CheckCircle, Zap, Users, TrendingUp } from "lucide-react"

const features = [
  {
    icon: <CheckCircle className="h-8 w-8 text-gold-500" />,
    title: "Task Management",
    description:
      "Organize and prioritize tasks with ease. Assign tasks, set deadlines, and track progress in real-time.",
  },
  {
    icon: <Zap className="h-8 w-8 text-gold-500" />,
    title: "Real-time Collaboration",
    description: "Work together seamlessly in real-time. Edit documents, share feedback, and make decisions faster.",
  },
  {
    icon: <Users className="h-8 w-8 text-gold-500" />,
    title: "Team Communication",
    description:
      "Stay connected with built-in messaging. Create channels for different projects or teams, share files, and keep everyone in the loop.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-gold-500" />,
    title: "Analytics Dashboard",
    description:
      "Track progress and gain insights with powerful analytics. Monitor team performance, identify bottlenecks, and make data-driven decisions.",
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-neutral-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-600/5 rounded-full filter blur-[100px] opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-600/5 rounded-full filter blur-[80px] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key <span className="text-gold-500">Features</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Our platform offers a comprehensive suite of tools to help your team work more efficiently and
              effectively.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black border border-gold-900/30 rounded-lg p-6 hover:border-gold-500/50 transition-all duration-300 hover:shadow-gold"
            >
              <div className="mb-4 p-3 bg-gold-900/20 inline-block rounded-lg">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
