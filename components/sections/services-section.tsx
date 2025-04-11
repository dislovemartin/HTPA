"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Building2, Calculator, CheckCircle, FileText, Shield, Users } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: <CheckCircle className="h-8 w-8 text-gold-500" />,
    title: "财务审计与鉴证",
    description: "确保财报准确、合规，是获取贷款、吸引投资者与维护企业透明度的基石。",
  },
  {
    icon: <FileText className="h-8 w-8 text-gold-500" />,
    title: "税务规划与申报",
    description: "量身定制节税策略，确保申报合规、税负最小化。",
  },
  {
    icon: <Building2 className="h-8 w-8 text-gold-500" />,
    title: "企业注册与咨询",
    description: "一站式办理公司注册、税号申请与业务许可证，确保您合法合规地开启事业。",
  },
  {
    icon: <Calculator className="h-8 w-8 text-gold-500" />,
    title: "财务报表编制",
    description: "生成高透明度、合规性强的财报，提升企业信用与融资能力。",
  },
  {
    icon: <Shield className="h-8 w-8 text-gold-500" />,
    title: "遗产规划",
    description: "帮助客户妥善安排资产传承与税务优化，规避法律与税务风险，保障下一代财富安全。",
  },
  {
    icon: <Users className="h-8 w-8 text-gold-500" />,
    title: "贷款申请",
    description: "由资深贷款经纪人主理，支持房贷、商业贷款、信用贷款等申请，提升成功率。",
  },
]

export default function ServicesSection() {
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
              我们的<span className="text-gold-500">服务</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              我们提供全面的会计、税务和咨询服务，帮助您实现财务目标，确保合规运营。
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black border border-gold-900/30 rounded-lg p-6 hover:border-gold-500/50 card-hover transition-all duration-300 hover:shadow-gold"
            >
              <div className="mb-4 p-3 bg-gold-900/20 inline-block rounded-lg">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <Link
                href="/services"
                className="text-gold-500 hover:text-gold-400 flex items-center text-sm font-medium group"
              >
                了解更多
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button asChild variant="outline" size="lg" className="border-gold-500 text-gold-500 hover:bg-gold-500/10 hover:text-gold-400 rounded-full px-8 py-3 font-medium transition-all">
            <Link href="/services">查看所有服务</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
