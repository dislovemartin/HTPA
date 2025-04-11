"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import PageLayout from "@/components/layout/page-layout"
import PageHeader from "@/components/ui/page-header"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHeader title="关于 我们" subtitle="了解我们的公司历史、使命和价值观，以及我们如何帮助客户实现财务目标。" />

      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full filter blur-[100px] opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-gold-600/20 to-gold-900/20 blur-lg opacity-50"></div>
              <div className="relative overflow-hidden rounded-xl border border-gold-900/30">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=About+Us"
                  alt="关于我们"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                我们的<span className="text-gold-500">历史</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                我们是一家专业的会计师事务所，拥有多年的行业经验和专业知识。我们的团队由持证会计师组成，致力于为客户提供高质量的财务、税务和审计服务。
              </p>
              <p className="text-gray-400 leading-relaxed">
                我们的使命是帮助客户实现财务目标，提供个性化的解决方案，满足不同客户的特定需求。无论您是个人、小型企业还是大型公司，我们都能为您提供专业的服务。
              </p>
              <div className="pt-4">
                <Button variant="gold" size="lg" className="rounded-full px-8">
                  了解更多
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-900 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-600/5 rounded-full filter blur-[100px] opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              我们的<span className="text-gold-500">价值观</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              我们的价值观指导着我们的工作方式和与客户的互动。这些核心原则是我们业务的基础。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-black border border-gold-900/30 rounded-lg p-6 hover:border-gold-500/50 transition-all duration-300"
            >
              <div className="mb-4 p-3 bg-gold-900/20 inline-block rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gold-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">诚信</h3>
              <p className="text-gray-400">
                我们以最高的道德标准开展业务，始终保持透明和诚实。我们的客户可以信任我们提供准确和可靠的服务。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black border border-gold-900/30 rounded-lg p-6 hover:border-gold-500/50 transition-all duration-300"
            >
              <div className="mb-4 p-3 bg-gold-900/20 inline-block rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gold-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">卓越</h3>
              <p className="text-gray-400">
                我们追求卓越，不断提高我们的专业知识和服务质量。我们致力于超越客户的期望，提供最高水平的服务。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-black border border-gold-900/30 rounded-lg p-6 hover:border-gold-500/50 transition-all duration-300"
            >
              <div className="mb-4 p-3 bg-gold-900/20 inline-block rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gold-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">客户至上</h3>
              <p className="text-gray-400">
                我们将客户的需求放在首位，提供个性化的解决方案，满足每个客户的特定需求。我们致力于建立长期的合作关系。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              我们的<span className="text-gold-500">团队</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              我们的团队由经验丰富的专业人士组成，致力于为您提供最优质的服务。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-900 border border-gold-900/30 rounded-lg overflow-hidden hover:border-gold-500/50 transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Team+Member+${index}`}
                    alt={`团队成员 ${index}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">团队成员 {index}</h3>
                  <p className="text-gold-500 text-sm mb-3">职位</p>
                  <p className="text-gray-400 text-sm">团队成员简介，包括专业背景、经验和专长领域。</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
