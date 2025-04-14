"use client"

import PageLayout from "@/components/layout/page-layout"
import {Button} from "@/components/ui/button"
import PageHeader from "@/components/ui/page-header"
import {motion} from "framer-motion"
import {
    BookOpen,
    Briefcase,
    Building2,
    CircleCheck,
    ClipboardList,
    FileText,
    Globe,
    Home,
    Receipt,
    Shield,
    User,
    Users,
    Wallet,
    ArrowRight
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation'; 
// Shadcn UI Imports
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"
import { ChevronDown } from "lucide-react";

// Define slugs for each service
const serviceSlugs: { [key: string]: string } = {
    "审计与鉴证": "audit-assurance",
    "税务规划与申报": "tax-planning",
    "企业注册与咨询": "business-registration",
    "财务报表服务": "financial-statement",
    "风险管理": "risk-management",
    "管理咨询": "management-consulting",
    "遗产规划": "estate-planning",
    "贷款申请": "loan-application",
    "专业记账服务": "bookkeeping",
    "公司税务": "corporate-tax",
    "HST退税服务": "hst-rebates",
    "国际税务服务": "international-tax",
    "薪资发放服务": "payroll",
    "个人报税服务": "personal-tax-filing",
    "房地产税务服务": "real-estate-tax",
}

interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
    benefit: string;
    slug: string;
    href: string;
}

const services: Service[] = [
    {
        icon: <CircleCheck className="h-6 w-6 text-neutral-600 group-hover:text-neutral-900 transition-colors"/>, 
        title: "财务审计与鉴证",
        description: "确保财报准确、合规，是获取贷款、吸引投资者与维护企业透明度的基石。",
        benefit: "通过独立的审计意见，提升财务透明度，建立市场信誉。",
        slug: serviceSlugs["审计与鉴证"],
        href: "/services/audit-assurance",
    },
    {
        icon: <FileText className="h-6 w-6 text-neutral-600 group-hover:text-neutral-900 transition-colors"/>,
        title: "税务规划与申报",
        description: "量身定制节税策略，确保申报合规、税负最小化。",
        benefit: "最大化税务优惠，减少风险，确保您的税务事务井井有条。",
        slug: serviceSlugs["税务规划与申报"],
        href: "/services/tax-planning",
    },
    {
        icon: <Building2 className="h-6 w-6 text-neutral-600 group-hover:text-neutral-900 transition-colors"/>,
        title: "企业注册与咨询",
        description: "一站式办理公司注册、税号申请与业务许可证，确保您合法合规地开启事业。",
        benefit: "从法律结构到合规建议，全程支持您的创业之旅。",
        slug: serviceSlugs["企业注册与咨询"],
        href: "/services/business-registration",
    },
    {
        icon: <ClipboardList className="h-6 w-6 text-neutral-600 group-hover:text-neutral-900 transition-colors"/>,
        title: "财务报表服务",
        description: "生成高透明度、合规性强的财报，提升企业信用与融资能力。",
        benefit: "清晰洞察财务状况，支持战略规划和投资决策。",
        slug: serviceSlugs["财务报表服务"],
        href: "/services/financial-statement",
    },
    {
        icon: <Shield className="h-6 w-6 text-neutral-600 group-hover:text-neutral-900 transition-colors"/>, 
        title: "遗产规划",
        description: "帮助客户合理安排和分配其资产，确保资产的传承和税务的有效管理，避免不必要的法律或税务负担。",
        benefit: "确保您的资产安全传承，减少税务负担。",
        slug: serviceSlugs["遗产规划"],
        href: "/services/estate-planning",
    },
    {
        icon: <Users className="h-6 w-6 text-neutral-600 group-hover:text-neutral-900 transition-colors"/>, 
        title: "贷款申请",
        description: "由注册贷款经纪人主理，提供多种贷款申请指导，提升通过率，快速对接银行和放款机构。",
        benefit: "提高贷款通过率，快速获得资金支持。",
        slug: serviceSlugs["贷款申请"],
        href: "/services/loan-application",
    },
    {
        icon: <BookOpen className="h-6 w-6 text-neutral-600 group-hover:text-neutral-900 transition-colors"/>,
        title: "专业记账服务",
        description: "确保财务记录准确无误，简化运营流程，满足监管要求。",
        benefit: "腾出时间专注于核心业务，同时保持财务健康。",
        slug: serviceSlugs["专业记账服务"],
        href: "/services/bookkeeping",
    },
    {
        icon: <Briefcase className="h-6 w-6 text-neutral-600 group-hover:text-neutral-900 transition-colors"/>,
        title: "公司税务",
        description: "提供全面的公司税务申报与规划服务，确保合规性，优化税务负担。",
        benefit: "利用最新的税务法规，最大化您的企业利益。",
        slug: serviceSlugs["公司税务"],
        href: "/services/corporate-tax",
    },
    {
        icon: <Receipt className="h-6 w-6 text-neutral-600 group-hover:text-neutral-900 transition-colors"/>,
        title: "HST退税服务",
        description: "专业协助申请各类HST退税，包括新房、商业运营等，最大化您的退款额度。",
        benefit: "简化复杂的退税流程，快速获得应有的退款。",
        slug: serviceSlugs["HST退税服务"],
        href: "/services/hst-rebates",
    },
    {
        icon: <Globe className="h-6 w-6 text-neutral-600 group-hover:text-neutral-900 transition-colors"/>,
        title: "国际税务服务",
        description: "处理跨境税务问题，包括外国收入申报、资产披露及税务协定应用。",
        benefit: "优化跨境税务结构，确保符合国际法规。",
        slug: serviceSlugs["国际税务服务"],
        href: "/services/international-tax",
    },
    {
        icon: <Wallet className="h-6 w-6 text-neutral-600 group-hover:text-neutral-900 transition-colors"/>,
        title: "薪资发放服务",
        description: "全面的薪资管理，包括税务代扣、报告和合规。",
        benefit: "确保员工准时收到薪酬，同时满足所有法律要求。",
        slug: serviceSlugs["薪资发放服务"],
        href: "/services/payroll",
    },
    {
        icon: <User className="h-6 w-6 text-neutral-600 group-hover:text-neutral-900 transition-colors"/>,
        title: "个人报税服务",
        description: "为个人、家庭和自雇人士提供准确、高效的报税服务。",
        benefit: "最大化您的退税额，确保申报无误，避免审计风险。",
        slug: serviceSlugs["个人报税服务"],
        href: "/services/personal-tax-filing",
    },
    {
        icon: <Home className="h-6 w-6 text-neutral-600 group-hover:text-neutral-900 transition-colors"/>,
        title: "房地产税务服务",
        description: "针对房产买卖、租赁及用途变更提供税务咨询与规划。",
        benefit: "优化房产交易、租赁收入和税务减免策略。",
        slug: serviceSlugs["房地产税务服务"],
        href: "/services/real-estate-tax",
    },
    {
        icon: <Shield className="h-6 w-6 text-neutral-600 group-hover:text-neutral-900 transition-colors"/>,
        title: "风险管理",
        description: "提供全面的风险管理服务，帮助识别、评估和管理企业面临的各种潜在风险。",
        benefit: "保护您的业务免受不可预见的威胁，确保持续运营。",
        slug: serviceSlugs["风险管理"],
        href: "/services/risk-management", 
    },
    {
        icon: <Users className="h-6 w-6 text-neutral-600 group-hover:text-neutral-900 transition-colors"/>,
        title: "管理咨询",
        description: "提供专业的管理咨询服务，优化运营流程，提升企业效率，实现价值最大化。",
        benefit: "通过战略洞察和流程改进，推动业务增长和创新。",
        slug: serviceSlugs["管理咨询"],
        href: "/services/management-consulting",
    },
]

export default function ServicesPage() {
    const router = useRouter();

    const handleServiceClick = (href: string) => {
        router.push(href);
    };

    const breadcrumbItems = [
        {name: "主页", href: "/"},
        {name: "服务"},
    ]

    return (
        <PageLayout>
            <PageHeader
                title="我们的专业服务"
                subtitle="探索HTPA恒泰会计师事务所提供的全面会计、税务和咨询服务。"
            />

            {/* Services Grid Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.slug}
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: index * 0.1}}
                                viewport={{once: true}}
                                className="group relative p-8 bg-neutral-50 hover:bg-neutral-100 rounded-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-neutral-200"
                                onClick={() => handleServiceClick(service.href)}
                            >
                                <div className="flex items-start space-x-4 mb-4">
                                    <div className="flex-shrink-0">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                                            {service.title}
                                        </h3>
                                        <p className="text-neutral-600 text-base leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                     <ArrowRight className="h-5 w-5 text-neutral-500" />
                                 </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 bg-gradient-to-b from-white to-neutral-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            我们的<span className="text-blue-600">服务流程</span>
                        </h2>
                        <p className="text-neutral-600 max-w-2xl mx-auto">
                            我们采用系统化的方法，确保为每位客户提供高效、透明的服务体验。
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[ // Sample steps, customize as needed
                            { icon: <User className="h-8 w-8 text-blue-600" />, title: "初步咨询", description: "了解您的需求和目标。" },
                            { icon: <BookOpen className="h-8 w-8 text-blue-600" />, title: "方案制定", description: "为您量身定制解决方案。" },
                            { icon: <Briefcase className="h-8 w-8 text-blue-600" />, title: "执行与跟进", description: "高效执行并持续优化。" },
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="text-center p-6 bg-white rounded-lg shadow-sm border border-neutral-100"
                            >
                                <div className="flex justify-center items-center mb-4 h-16 w-16 rounded-full bg-blue-100 mx-auto">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-800 mb-2">{step.title}</h3>
                                <p className="text-neutral-600 text-sm">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            常见<span className="text-blue-600">问题</span>
                        </h2>
                        <p className="text-neutral-600 max-w-3xl mx-auto">
                            以下是关于我们服务的一些常见问题。如果您有其他疑问，欢迎随时联系我们。
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="w-full">
                            {[
                                {
                                    id: "faq-1",
                                    question: "你们提供哪些服务？",
                                    answer:
                                        "我们提供全面的会计服务，包括财务报表编制、税务规划与申报、审计与鉴证、企业注册与咨询、资产评估与管理等。无论您是个人、小型企业还是大型公司，我们都能为您提供专业的服务。",
                                },
                                {
                                    id: "faq-2",
                                    question: "你们的收费标准是怎样的？",
                                    answer:
                                        "我们的收费标准根据服务类型、复杂程度和所需时间而定。我们承诺提供透明的价格，并在开始工作前与客户明确费用。请联系我们获取详细的价格信息。",
                                },
                                {
                                    id: "faq-3",
                                    question: "如何预约咨询？",
                                    answer:
                                        "您可以通过我们网站上的联系表格、电话或电子邮件预约咨询。我们的团队会在24小时内回复您，并安排合适的时间进行面对面或线上咨询。",
                                },
                            ].map((faq) => (
                                <AccordionItem
                                    key={faq.id}
                                    value={faq.id}
                                    className="border-b border-neutral-200 last:border-b-0"
                                >
                                    <AccordionTrigger className="text-left hover:no-underline py-4 font-medium text-neutral-800">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-1 pb-4 text-neutral-600">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    <div className="text-center mt-12">
                        <Button variant="outline" size="lg" className="rounded-full px-8 border-neutral-300 text-neutral-700 hover:bg-neutral-100">
                            查看更多问题
                        </Button>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}
