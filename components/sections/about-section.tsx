"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section className="py-20 bg-neutral-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-600/5 rounded-full filter blur-[100px] opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-600/5 rounded-full filter blur-[80px] opacity-20"></div>

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
                src="/placeholder.svg?height=600&width=800&text=HTPA+Accounting+Team"
                alt="HTPA 恒泰会计师事务所团队"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <motion.h2
              custom={0}
              variants={textVariants}
              className="text-3xl md:text-4xl font-bold text-white"
            >
              关于<span className="text-gold-500">我们</span>
            </motion.h2>
            <motion.p
              custom={1}
              variants={textVariants}
              className="text-gray-400 leading-relaxed"
            >
              依托恒泰集团近40年的行业积淀与深厚商业背景，HTPA
              恒泰会计师事务所汇聚了一支由注册会计师（CPA）与持牌贷款经纪人组成的多语种专业团队，拥有近20年为中大型企业及个人提供全方位财税服务的实践经验。
            </motion.p>
            <motion.p
              custom={2}
              variants={textVariants}
              className="text-gray-400 leading-relaxed"
            >
              在瞬息万变的经济环境中，我们不仅帮助客户解决复杂的财税问题，更提供战略性的管理支持，让您专注发展，稳健前行。
            </motion.p>
            <motion.div
              custom={3}
              variants={textVariants}
              className="pt-4"
            >
              <Button asChild variant="gold" size="lg" className="rounded-full px-8 py-3 font-medium transition-all">
                <Link href="/about">了解更多</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
