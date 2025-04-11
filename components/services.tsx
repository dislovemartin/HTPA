"use client"

import { useState } from "react"
import { Calculator, Building, FileText, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

const services = [
  {
    icon: <Calculator className="h-10 w-10 text-htpa-gold" />,
    title: "会计服务 Accounting Services",
    description: "审计与鉴证、企业注册、遗产规划",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Zf438awAxLFjH5BdrrEgKaWcSqR7CA.png",
    items: [
      "审计与鉴证 - 帮助企业和组织确保财务报表的准确性和合规性",
      "企业注册 - 帮助企业完成注册服务，并确保企业在法律上得到承认",
      "遗产规划 - 帮助客户合理安排和分配其资产，以确保资产的传承和税务的有效管理",
    ],
    details:
      "我们的会计服务由持证CPA会计师提供，确保您的财务报表准确无误，符合最新的会计准则和法规要求。我们的审计服务可以帮助您识别潜在的财务风险，提高财务透明度，增强投资者和利益相关者的信心。企业注册服务包括公司成立、商业名称注册、税号申请等，为您的业务提供坚实的法律基础。遗产规划服务则帮助您合理安排资产，最大限度地减少税务负担，确保财富顺利传承。",
  },
  {
    icon: <Building className="h-10 w-10 text-htpa-gold" />,
    title: "商业服务 Business Services",
    description: "会计薄记、薪资发放、财务报表服务、福利申报、贷款申请",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dHo8dWxgzAa7vRdb7MnpQ06jMYk9Pw.png",
    items: [
      "会计薄记 - 为安省小型企业开放簿记业务",
      "薪资发放 - 确保您的企业在遵循复杂的薪资法规的同时，能够高效地处理员工薪资相关事务",
      "财务报表服务 - 旨在为您提供高质量、全面、合规的财务报表",
      "福利申报 - 协助申请各类政府福利",
      "贷款申请 - 由注册贷款经纪人主理，提供多种贷款申请指导",
    ],
    details:
      "我们的商业服务旨在帮助企业主专注于业务发展，而无需担心繁琐的财务管理工作。会计薄记服务包括日常交易记录、银行对账、财务报表准备等，确保您的财务记录准确完整。薪资发放服务涵盖员工薪资计算、税款扣缴、年终报税等，帮助您遵守劳工法规，避免不必要的罚款。财务报表服务则为您提供专业的财务分析和报告，帮助您做出明智的商业决策。福利申报和贷款申请服务由经验丰富的专业人员提供，确保您能够获得应有的政府福利和所需的融资支持。",
  },
  {
    icon: <FileText className="h-10 w-10 text-htpa-gold" />,
    title: "税务服务 Tax Services",
    description: "个人所得税申报、公司纳税申报、房地产/房屋相关税务、国际税务、安省HST退税服务",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HiK3GSXEOg1TvxZhazx9OWfSsEY5lX.png",
    items: [
      "个人所得税申报 - 提供专业、准确的个人所得税申报服务",
      "公司纳税申报 - 为企业提供全面的公司报税服务",
      "房地产/房屋相关税务 - 为房地产相关的税务问题提供专业解决方案",
      "国际税务 - 提供专业的国际税务服务",
      "安省HST退税服务 - 提供专业的HST退税服务",
    ],
    details:
      "我们的税务服务由经验丰富的税务专家提供，帮助个人和企业在合法合规的前提下最大限度地减轻税务负担。个人所得税申报服务包括收入申报、扣除项目优化、税收抵免申请等，确保您不会多缴一分税款。公司纳税申报服务涵盖企业所得税、销售税、雇主税等各类税务申报，帮助您避免税务风险。房地产税务服务专注于房产交易、租赁、投资等相关税务规划，帮助您合理安排房地产投资。国际税务服务则为跨境业务和投资提供专业指导，帮助您应对复杂的国际税务环境。安省HST退税服务确保您能够及时、准确地申请并获得应退税款。",
  },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const { t } = useLanguage()

  return (
    <section id="services" className="section-padding bg-htpa-black-light">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            <span className="text-gradient-gold">{t("services.title")}</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">{t("services.subtitle")}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="card-hover overflow-hidden border-t-4 border-t-htpa-gold bg-htpa-black border border-htpa-gold/20 opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <CardHeader className="pb-2">
                <div className="mb-4 transform transition-transform duration-300 hover:scale-110">{service.icon}</div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                <CardDescription className="text-gray-400">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 h-40 relative rounded overflow-hidden">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-htpa-black to-transparent"></div>
                </div>
                <ul className="space-y-2 text-sm mb-6">
                  {service.items.slice(0, 2).map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-htpa-gold">•</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-htpa-gold text-htpa-gold hover:bg-htpa-gold/10 hover:border-htpa-gold-light group"
                  onClick={() => setSelectedService(index)}
                >
                  {t("services.more")}
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Service Details Dialog */}
      <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="sm:max-w-[600px] bg-htpa-black border-htpa-gold">
          <DialogHeader>
            <DialogTitle className="flex items-center text-white">
              {selectedService !== null && services[selectedService].icon}
              <span className="ml-2">{selectedService !== null && services[selectedService].title}</span>
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              {selectedService !== null && services[selectedService].description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <p className="text-gray-300">{selectedService !== null && services[selectedService].details}</p>
            <h4 className="font-semibold text-white">服务项目 Service Items:</h4>
            <ul className="space-y-2">
              {selectedService !== null &&
                services[selectedService].items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 text-htpa-gold">•</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
            </ul>
          </div>
          <div className="mt-6 flex justify-end">
            <DialogClose asChild>
              <Button className="gold-button">关闭 Close</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
