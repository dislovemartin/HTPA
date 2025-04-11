"use client"

import { useState, useRef, useEffect } from "react"
import { Calculator, Building, FileText, ChevronRight, X } from "lucide-react"
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
import { useInView } from "react-intersection-observer"

const services = [
  {
    id: "accounting-services",
    icon: <Calculator className="h-10 w-10 text-htpa-gold" aria-hidden="true" />,
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
    id: "business-services",
    icon: <Building className="h-10 w-10 text-htpa-gold" aria-hidden="true" />,
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
    id: "tax-services",
    icon: <FileText className="h-10 w-10 text-htpa-gold" aria-hidden="true" />,
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

// Hook to detect reduced motion preference
const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const listener = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", listener)

    return () => mediaQuery.removeEventListener("change", listener)
  }, [])
  return prefersReducedMotion
}

interface ServiceCardProps {
  service: (typeof services)[0]
  index: number
  onOpenDialog: (index: number) => void
  prefersReducedMotion: boolean
}

function ServiceCard({ service, index, onOpenDialog, prefersReducedMotion }: ServiceCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    delay: prefersReducedMotion ? 0 : 100 + index * 100,
  })

  const cardId = `service-card-${service.id}`
  const buttonId = `service-button-${service.id}`

  return (
    <Card
      ref={ref}
      id={cardId}
      className={`
        flex flex-col overflow-hidden
        border-t-4 border-t-primary bg-background border-border
        transition-all duration-500 ease-out
        ${inView && !prefersReducedMotion ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      aria-labelledby={`${cardId}-title`}
    >
      <CardHeader className="pb-2">
        <div
          className={`
            mb-4 transition-transform duration-300
            ${!prefersReducedMotion ? "group-hover:scale-110" : ""}
          `}
        >
          {service.icon}
        </div>
        <CardTitle id={`${cardId}-title`} className="text-xl text-foreground">{service.title}</CardTitle>
        <CardDescription className="text-muted-foreground min-h-[3em]">{service.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <div className="mb-4 h-40 relative rounded overflow-hidden flex-shrink-0">
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.description} // Use description for more context, or a more specific alt text
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Added sizes attribute
            loading={index === 0 ? "eager" : "lazy"} // Load first image eagerly
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" aria-hidden="true"></div>
        </div>
        <ul className="space-y-2 text-sm mb-6 flex-grow">
          {service.items.slice(0, 2).map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mr-2 text-primary" aria-hidden="true">•</span>
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
        <Button
          id={buttonId}
          variant="outline"
          className={`
            w-full mt-auto border-primary text-primary
            hover:bg-primary/10 hover:border-primary/50 group
            focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background
          `}
          onClick={() => onOpenDialog(index)}
          aria-haspopup="dialog"
          aria-controls="service-dialog" // Controls the dialog
        >
          More Details
          <ChevronRight
            className={`
              ml-2 h-4 w-4 transition-transform duration-300
              ${!prefersReducedMotion ? "group-hover:translate-x-1" : ""}
            `}
            aria-hidden="true"
          />
        </Button>
      </CardContent>
    </Card>
  )
}

export default function Services() {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(null)
  const { t } = useLanguage()
  const prefersReducedMotion = usePrefersReducedMotion()
  const dialogContentRef = useRef<HTMLDivElement>(null)
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null)

  const handleOpenDialog = (index: number) => {
    triggerButtonRef.current = document.getElementById(`service-button-${services[index].id}`) as HTMLButtonElement
    setSelectedServiceIndex(index)
  }

  const handleCloseDialog = () => {
    setSelectedServiceIndex(null)
    // Return focus to the trigger button after closing
    triggerButtonRef.current?.focus()
  }

  useEffect(() => {
    if (selectedServiceIndex !== null && dialogContentRef.current) {
      // Focus the dialog content or the close button when opened
      const focusableElements = dialogContentRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const firstFocusable = focusableElements[0] // Typically the close button or title
      firstFocusable?.focus()
    }
  }, [selectedServiceIndex])

  const selectedService = selectedServiceIndex !== null ? services[selectedServiceIndex] : null

  return (
    <section id="services" aria-labelledby="services-heading" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 id="services-heading" className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-gradient-primary">{t("services.title")}</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">{t("services.subtitle")}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onOpenDialog={handleOpenDialog}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </div>

      {/* Service Details Dialog */}
      <Dialog open={selectedService !== null} onOpenChange={handleCloseDialog}>
        <DialogContent
          id="service-dialog"
          ref={dialogContentRef}
          className="sm:max-w-[600px] bg-background border-primary text-foreground"
          aria-labelledby="service-dialog-title"
          aria-describedby="service-dialog-description"
          onEscapeKeyDown={handleCloseDialog}
          onPointerDownOutside={handleCloseDialog}
        >
          {selectedService && (
            <>
              <DialogHeader>
                <DialogTitle id="service-dialog-title" className="flex items-center text-foreground">
                  {selectedService.icon}
                  <span className="ml-2">{selectedService.title}</span>
                </DialogTitle>
                <DialogDescription id="service-dialog-description" className="text-muted-foreground sr-only"> {/* Screen reader only description */}
                  Detailed information about {selectedService.title}.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-4 max-h-[60vh] overflow-y-auto pr-2"> {/* Make content scrollable */}
                <p className="text-muted-foreground">{selectedService.details}</p>
                <h4 className="font-semibold text-foreground">服务项目 Service Items:</h4>
                <ul className="space-y-2">
                  {selectedService.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-primary" aria-hidden="true">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <DialogClose asChild>
                <Button
                   className="gold-button absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                   aria-label="Close dialog"
                   onClick={handleCloseDialog} // Ensure close handler is called
                 >
                  <X className="h-4 w-4" />
                </Button>
              </DialogClose>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
