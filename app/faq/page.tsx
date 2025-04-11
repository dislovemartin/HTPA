"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import PageLayout from "@/components/layout/page-layout"
import PageHeader from "@/components/ui/page-header"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "你们提供哪些服务？",
    answer:
      "我们提供全面的会计服务，包括财务报表编制、税务规划与申报、审计与鉴证、企业注册与咨询、资产评估与管理等。无论您是个人、小型企业还是大型公司，我们都能为您提供专业的服务。",
  },
  {
    question: "你们的收费标准是怎样的？",
    answer:
      "我们的收费标准根据服务类型、复杂程度和所需时间而定。我们承诺提供透明的价格，并在开始工作前与客户明确费用。请联系我们获取详细的价格信息。",
  },
  {
    question: "如何预约咨询？",
    answer:
      "您可以通过我们网站上的联系表格、电话或电子邮件预约咨询。我们的团队会在24小时内回复您，并安排合适的时间进行面对面或线上咨询。",
  },
  {
    question: "你们的团队有哪些资质？",
    answer:
      "我们的团队由持证会计师组成，拥有丰富的行业经验和专业知识。我们的成员定期参加专业培训，确保掌握最新的会计准则和税法变化。",
  },
  {
    question: "你们能处理国际业务吗？",
    answer: "是的，我们能够处理国际业务。我们的团队熟悉跨境税务和会计事务，可以为有国际业务需求的客户提供专业的服务。",
  },
  {
    question: "你们的服务区域是哪里？",
    answer: "我们主要服务于上海地区的客户，但也可以为全国各地的客户提供远程服务。如果您有特殊需求，请与我们联系。",
  },
  {
    question: "你们的服务流程是怎样的？",
    answer:
      "我们的服务流程包括初步咨询、需求分析、方案制定、服务实施和成果交付。我们会根据客户的具体需求，提供个性化的服务方案。",
  },
  {
    question: "如何确保我的信息安全？",
    answer:
      "我们非常重视客户信息的安全。我们采用先进的信息安全技术和严格的内部管理制度，确保客户信息的保密性和安全性。",
  },
]

export default function FaqPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <PageLayout>
      <PageHeader title="常见 问题" subtitle="以下是我们客户经常咨询的问题。如果您有其他疑问，欢迎随时联系我们。" />

      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-600/5 rounded-full filter blur-[100px] opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-600/5 rounded-full filter blur-[80px] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <div
                  className={`border border-gold-900/30 rounded-lg overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "bg-neutral-900" : "bg-black"
                  }`}
                >
                  <button
                    className="flex justify-between items-center w-full p-4 text-left"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-medium text-white">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-gold-500 transition-transform duration-300 ${
                        activeIndex === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeIndex === index ? "max-h-96 p-4 pt-0" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full filter blur-[100px] opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              还有<span className="text-gold-500">问题？</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              如果您有其他问题，欢迎随时联系我们。我们的团队将竭诚为您服务。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-black border border-gold-900/30 rounded-lg p-6 hover:border-gold-500/50 transition-all duration-300 text-center"
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">发送邮件</h3>
              <p className="text-gray-400 mb-4">发送邮件给我们，我们会在24小时内回复您。</p>
              <a href="mailto:contact@htpa.ca" className="text-gold-500 hover:text-gold-400">
                contact@htpa.ca
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black border border-gold-900/30 rounded-lg p-6 hover:border-gold-500/50 transition-all duration-300 text-center"
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">致电我们</h3>
              <p className="text-gray-400 mb-4">直接致电我们，我们的客服团队将为您解答问题。</p>
              <a href="tel:+14161234567" className="text-gold-500 hover:text-gold-400">
                +1 (416) 123-4567
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-black border border-gold-900/30 rounded-lg p-6 hover:border-gold-500/50 transition-all duration-300 text-center"
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">预约咨询</h3>
              <p className="text-gray-400 mb-4">预约面对面或线上咨询，我们的专业团队将为您提供个性化的解决方案。</p>
              <a href="/contact" className="text-gold-500 hover:text-gold-400">
                立即预约
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
