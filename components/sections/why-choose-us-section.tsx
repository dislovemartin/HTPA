"use client"

import { motion } from "framer-motion"
import { Award, Users, TrendingUp, Shield } from "lucide-react"

const reasons = [
  {
    icon: <Award className="h-10 w-10 text-gold-500" />,
    title: "CPA持证专家团队",
    description: "全部业务由注册会计师主理，专业严谨，值得信赖。",
  },
  {
    icon: <Users className="h-10 w-10 text-gold-500" />,
    title: "个性化解决方案",
    description: "根据客户情况定制最优财税策略，满足您的特定需求。",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-gold-500" />,
    title: "全周期税务支持",
    description: "从注册、报税到审计、优化，一站式服务全程无忧。",
  },
  {
    icon: <Shield className="h-10 w-10 text-gold-500" />,
    title: "0错误率承诺",
    description: "战略型合作伙伴，不止于做账，更注重长期价值。",
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-600/5 rounded-full filter blur-[100px] opacity-30"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gold-600/5 rounded-full filter blur-[80px] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              为什么<span className="text-gold-500">选择我们</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              作为安省会计行业的专业典范，HTPA
              恒泰会计师事务所以客户价值为核心，致力于通过精准合规的财税方案，帮助客户摆脱繁杂问题，重获财务自由。
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center h-full"
            >
              <div className="bg-neutral-900 border border-gold-900/30 rounded-lg p-8 hover:border-gold-500/50 card-hover transition-all duration-300 h-full flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-900/20 mb-6 flex-shrink-0">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{reason.title}</h3>
                <p className="text-gray-400 flex-grow">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
