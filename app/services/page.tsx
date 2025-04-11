"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import PageLayout from "@/components/layout/page-layout"
import PageHeader from "@/components/ui/page-header"
import { Button } from "@/components/ui/button"
import { BarChart3, Building2, FileText, Calculator, Shield, Users } from "lucide-react"

const services = [
  {
    icon: <BarChart3 className="h-8 w-8 text-gold-500" />,
    title: "审计与鉴证",
    description: "我们提供全面的审计与鉴证服务，确保您的财务报表准确无误，符合相关法规要求。",
    details:
      "我们的审计与鉴证服务包括财务报表审计、合规审计、内部控制审计、特殊目的审计等。我们的专业团队将确保您的财务报表准确无误，符合相关法规要求，提高财务透明度和可信度。",
  },
  {
    icon: <FileText className="h-8 w-8 text-gold-500" />,
    title: "税务规划与申报",
    description: "我们提供专业的税务规划和申报服务，帮助您合理避税，降低税务风险。",
    details:
      "我们的税务规划与申报服务包括个人所得税申报、企业所得税申报、增值税申报、税务筹划、税务咨询等。我们的专业团队将帮助您合理避税，降低税务风险，确保税务合规。",
  },
  {
    icon: <Building2 className="h-8 w-8 text-gold-500" />,
    title: "企业注册与咨询",
    description: "我们提供一站式企业注册和咨询服务，帮助您快速启动业务，实现商业目标。",
    details:
      "我们的企业注册与咨询服务包括公司注册、变更、注销、商标注册、专利申请、企业管理咨询等。我们的专业团队将帮助您快速启动业务，实现商业目标。",
  },
  {
    icon: <Calculator className="h-8 w-8 text-gold-500" />,
    title: "财务报表编制",
    description: "我们提供专业的财务报表编制服务，帮助您了解企业的财务状况，为决策提供依据。",
    details:
      "我们的财务报表编制服务包括资产负债表、利润表、现金流量表、所有者权益变动表等财务报表的编制。我们的专业团队将帮助您了解企业的财务状况，为决策提供依据。",
  },
  {
    icon: <Shield className="h-8 w-8 text-gold-500" />,
    title: "风险管理",
    description: "我们提供全面的风险管理服务，帮助您识别、评估和管理企业面临的各种风险。",
    details:
      "我们的风险管理服务包括风险识别、风险评估、风险控制、风险监测等。我们的专业团队将帮助您识别、评估和管理企业面临的各种风险，确保企业的可持续发展。",
  },
  {
    icon: <Users className="h-8 w-8 text-gold-500" />,
    title: "管理咨询",
    description: "我们提供专业的管理咨询服务，帮助您提高企业管理水平，实现企业价值最大化。",
    details:
      "我们的管理咨询服务包括战略规划、组织结构设计、流程优化、绩效管理、人力资源管理等。我们的专业团队将帮助您提高企业管理水平，实现企业价值最大化。",
  },
]

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHeader title="服务 项目" subtitle="我们提供全面的会计、税务和咨询服务，帮助您实现财务目标，确保合规运营。" />

      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-600/5 rounded-full filter blur-[100px] opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-600/5 rounded-full filter blur-[80px] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-900 border border-gold-900/30 rounded-lg p-6 hover:border-gold-500/50 transition-all duration-300 hover:shadow-gold"
              >
                <div className="mb-4 p-3 bg-gold-900/20 inline-block rounded-lg">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <Button
                  variant="outline"
                  className="border-gold-900/30 text-gold-500 hover:bg-gold-900/20 hover:border-gold-500"
                >
                  了解更多
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full filter blur-[100px] opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                我们的<span className="text-gold-500">服务流程</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                我们的服务流程旨在为客户提供高效、专业的服务体验。从初步咨询到最终交付，我们的团队将全程陪伴您，确保您的需求得到满足。
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-900/30 flex items-center justify-center text-gold-500 font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">初步咨询</h3>
                    <p className="text-gray-400">了解您的需求和目标，提供初步建议和解决方案。</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-900/30 flex items-center justify-center text-gold-500 font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">方案制定</h3>
                    <p className="text-gray-400">根据您的需求和目标，制定个性化的服务方案。</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-900/30 flex items-center justify-center text-gold-500 font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">服务实施</h3>
                    <p className="text-gray-400">由专业团队执行服务方案，确保高质量的服务交付。</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-900/30 flex items-center justify-center text-gold-500 font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">成果交付</h3>
                    <p className="text-gray-400">向您交付服务成果，并提供详细的解释和建议。</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-900/30 flex items-center justify-center text-gold-500 font-bold mr-4">
                    5
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">持续支持</h3>
                    <p className="text-gray-400">提供持续的支持和咨询，确保您的需求得到长期满足。</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button variant="gold" size="lg" className="rounded-full px-8">
                  联系我们
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-gold-600/20 to-gold-900/20 blur-lg opacity-50"></div>
              <div className="relative overflow-hidden rounded-xl border border-gold-900/30">
                <Image
                  src="/placeholder.svg?height=600&width=800&text=Service+Process"
                  alt="服务流程"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              常见<span className="text-gold-500">问题</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              以下是关于我们服务的一些常见问题。如果您有其他疑问，欢迎随时联系我们。
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
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
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <div className="border border-gold-900/30 rounded-lg overflow-hidden bg-neutral-900">
                  <div className="p-4">
                    <h3 className="font-medium text-white">{faq.question}</h3>
                  </div>
                  <div className="p-4 pt-0 border-t border-gold-900/30">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="gold" size="lg" className="rounded-full px-8">
              查看更多问题
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
