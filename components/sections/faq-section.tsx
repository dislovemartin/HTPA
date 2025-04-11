"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

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
]

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

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
              常见<span className="text-gold-500">问题</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              以下是我们客户经常咨询的问题。如果您有其他疑问，欢迎随时联系我们。
            </p>
          </motion.div>
        </div>

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

        <div className="text-center mt-12">
          <Link
            href="/faq"
            className="inline-block bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500/10 px-8 py-3 rounded-full font-medium transition-all"
          >
            查看更多问题
          </Link>
        </div>
      </div>
    </section>
  )
}
