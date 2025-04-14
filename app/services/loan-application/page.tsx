"use client";

import PageLayout from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Banknote, CheckSquare, FileSignature, Handshake, Landmark, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

const loanServices = [
    {
        icon: Banknote,
        title: "房贷申请指导",
        description: "专业评估房产价值，优化贷款方案，提高通过率"
    },
    {
        icon: FileSignature,
        title: "贷款文件准备",
        description: "协助准备完整申请材料，确保文件合规"
    },
    {
        icon: Handshake,
        title: "银行对接服务",
        description: "快速对接多家银行，获取最优贷款条件"
    },
    {
        icon: ShieldCheck,
        title: "信用评估优化",
        description: "提供信用评估建议，提升贷款成功率"
    }
];

const faqs = [
    {
        question: "我的信用分数不高，还能申请贷款吗？",
        answer: "信用分数是重要因素，但不是唯一决定因素。我们会综合评估您的整体财务状况，寻找适合您的贷款方案，并提供改善信用的建议。"
    },
    {
        question: "贷款申请需要多长时间？",
        answer: "时间因贷款类型、金额和金融机构而异。我们的目标是通过专业准备和高效沟通，尽可能缩短审批时间。通常房贷需要几周，小型信用贷款可能更快。"
    },
    {
        question: "你们的服务收费是怎样的？",
        answer: "我们的收费结构透明。通常对于房贷，我们的佣金由贷款机构支付。对于其他咨询服务，我们会根据服务复杂性提前告知费用。首次咨询通常是免费的。"
    },
    {
        question: "通过你们申请和直接去银行申请有什么不同？",
        answer: "作为贷款经纪人，我们可以同时接触多家银行和贷款机构的产品，为您比较并争取最优方案，节省您的时间和精力。而直接去银行，您只能获得该银行的产品信息。此外，我们更了解审批要求，能提高您的申请成功率。"
    }
];

export default function LoanApplication() {
    return (
        <PageLayout>
            {/* Hero Section */}
            <section className="relative py-24 sm:py-32 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900">
                            专业的贷款申请服务
                        </h1>
                        <p className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            HTPA提供全面的贷款申请支持，从房贷到信用贷款，我们专业的团队将帮助您顺利获得所需资金。
                        </p>
                        <Button
                            asChild
                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 py-3 text-lg shadow-md hover:shadow-lg transition-all"
                        >
                            <Link href="/contact">免费初步咨询</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Key Services Section */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-neutral-900">
                        我们的服务
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {loanServices.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="h-full text-center p-6 border border-neutral-200 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 group bg-white">
                                        <CardHeader className="items-center p-0 mb-4">
                                            <div className="bg-blue-100 rounded-full p-4 inline-block mb-4 group-hover:bg-blue-200 transition-colors">
                                                <IconComponent className="w-8 h-8 text-blue-600" />
                                            </div>
                                            <CardTitle className="text-xl font-semibold text-neutral-800 group-hover:text-blue-700 transition-colors">
                                                {service.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-0">
                                            <p className="text-neutral-600 text-base leading-relaxed">
                                                {service.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 px-4 md:px-8 bg-neutral-50 border-t border-neutral-100">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-neutral-900">
                        为什么选择我们
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-neutral-800">专业团队</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                我们的团队由注册贷款经纪人组成，拥有丰富的行业经验和专业知识，能够为您提供最专业的贷款申请指导。
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-neutral-800">全面服务</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                从贷款评估、文件准备到银行对接，我们提供一站式服务，确保您的贷款申请流程顺利进行。
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-neutral-800">快速响应</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                我们承诺快速响应您的咨询，及时处理您的申请，确保您能够尽快获得所需资金。
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-neutral-800">透明收费</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                我们提供透明的收费结构，所有费用在服务前明确告知，确保您能够放心选择我们的服务。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-neutral-900">常见问题</h2>
                    <Accordion type="single" collapsible className="w-full bg-white p-0 md:p-0 rounded-lg border-0 md:border border-neutral-200 md:shadow-sm">
                        {faqs.map((faq, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <AccordionItem
                                    value={`faq${index}`}
                                    className="border-b border-neutral-200 last:border-b-0 px-4 md:px-6"
                                >
                                    <AccordionTrigger
                                        className="text-left text-lg font-medium text-neutral-800 hover:text-blue-600 hover:no-underline py-5 transition-colors duration-200 group flex justify-between items-center w-full"
                                    >
                                        <span>{faq.question}</span>
                                        <ChevronDown className="h-5 w-5 text-neutral-400 group-hover:text-blue-600 transition-transform duration-300 group-data-[state=open]:rotate-180 ml-auto flex-shrink-0" />
                                    </AccordionTrigger>
                                    <AccordionContent
                                        className="text-neutral-600 pt-1 pb-5 text-base leading-relaxed overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
                                    >
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 md:px-8 text-center bg-gradient-to-t from-blue-50 via-neutral-50 to-neutral-50 border-t border-neutral-100">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-neutral-900">开始您的贷款之旅</h2>
                    <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
                        无论您是购房置业、企业发展还是个人周转，我们的专业团队都能为您提供量身定制的贷款解决方案。
                    </p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Button
                            asChild
                            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 py-3 text-lg shadow-md hover:shadow-lg transition-all"
                        >
                            <Link href="/contact">立即预约咨询</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </PageLayout>
    );
}
