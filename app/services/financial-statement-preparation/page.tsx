"use client";

import PageLayout from "@/components/layout/page-layout";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle,} from "@/components/ui/card"; // Added Card imports
import PageHeader from "@/components/ui/page-header";
import {motion} from "framer-motion"; // Corrected import
import Image from "next/image"; // Import next/image
import Link from "next/link";

// Custom SVG component for financial statement preparation visual
const FinancialStatementVisual = () => (
    <svg
        width="300"
        height="200"
        viewBox="0 0 300 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-90"
    >
        {/* Financial statement layout */}
        <rect x="60" y="40" width="120" height="140" rx="2" fill="#1A1A1A" stroke="#D4AF37" strokeWidth="1"/>
        <rect x="70" y="50" width="100" height="20" rx="1" fill="#1A1A1A" stroke="#79673A" strokeWidth="0.5"/>

        {/* Title and header lines */}
        <path d="M80 60H160" stroke="#D4AF37" strokeWidth="1"/>
        <path d="M70 80H180" stroke="#B8860B" strokeWidth="0.75"/>

        {/* Data rows */}
        <path d="M80 95H110" stroke="#B8860B" strokeWidth="0.75"/>
        <path d="M130 95H160" stroke="#B8860B" strokeWidth="0.75"/>

        <path d="M80 110H110" stroke="#B8860B" strokeWidth="0.75"/>
        <path d="M130 110H160" stroke="#B8860B" strokeWidth="0.75"/>

        <path d="M80 125H110" stroke="#B8860B" strokeWidth="0.75"/>
        <path d="M130 125H160" stroke="#B8860B" strokeWidth="0.75"/>

        <path d="M80 140H110" stroke="#B8860B" strokeWidth="0.75"/>
        <path d="M130 140H160" stroke="#B8860B" strokeWidth="0.75"/>

        <path d="M70 155H180" stroke="#D4AF37" strokeWidth="1"/>
        <path d="M80 165H110" stroke="#D4AF37" strokeWidth="1"/>
        <path d="M130 165H160" stroke="#D4AF37" strokeWidth="1"/>

        {/* Column divider */}
        <path d="M120 80V170" stroke="#79673A" strokeWidth="0.5" strokeDasharray="2 2"/>

        {/* Chart element */}
        <rect x="190" y="80" width="60" height="60" rx="2" fill="#1A1A1A" stroke="#D4AF37" strokeWidth="1"/>

        {/* Bar chart */}
        <rect x="200" y="125" width="8" height="10" fill="#D4AF37" fillOpacity="0.3" stroke="#D4AF37"
              strokeWidth="0.5"/>
        <rect x="212" y="115" width="8" height="20" fill="#B8860B" fillOpacity="0.3" stroke="#B8860B"
              strokeWidth="0.5"/>
        <rect x="224" y="105" width="8" height="30" fill="#D4AF37" fillOpacity="0.3" stroke="#D4AF37"
              strokeWidth="0.5"/>
        <rect x="236" y="95" width="8" height="40" fill="#B8860B" fillOpacity="0.3" stroke="#B8860B" strokeWidth="0.5"/>

        {/* Chart axis */}
        <path d="M200 90H245" stroke="#79673A" strokeWidth="0.5"/>
        <path d="M200 105H245" stroke="#79673A" strokeWidth="0.5" strokeDasharray="1 1"/>
        <path d="M200 120H245" stroke="#79673A" strokeWidth="0.5" strokeDasharray="1 1"/>

        {/* Calculator icon */}
        <rect x="210" y="150" width="20" height="25" rx="1" fill="#1A1A1A" stroke="#D4AF37" strokeWidth="0.75"/>
        <path d="M213 155H227" stroke="#B8860B" strokeWidth="0.5"/>
        <path d="M213 160H227" stroke="#B8860B" strokeWidth="0.5"/>
        <path d="M213 165H227" stroke="#B8860B" strokeWidth="0.5"/>
        <path d="M213 170H227" stroke="#B8860B" strokeWidth="0.5"/>

        {/* Connecting lines */}
        <path d="M180 100L190 100" stroke="#B8860B" strokeWidth="0.5" strokeDasharray="2 1"/>
        <path d="M180 140L190 140" stroke="#B8860B" strokeWidth="0.5" strokeDasharray="2 1"/>
        <circle cx="180" cy="100" r="2" fill="#D4AF37" fillOpacity="0.5"/>
        <circle cx="190" cy="100" r="2" fill="#D4AF37" fillOpacity="0.5"/>
        <circle cx="180" cy="140" r="2" fill="#D4AF37" fillOpacity="0.5"/>
        <circle cx="190" cy="140" r="2" fill="#D4AF37" fillOpacity="0.5"/>
    </svg>
);

export default function FinancialStatementPreparationPage() {
    return (
        <PageLayout>
            <PageHeader
                title="财务报表编制"
                subtitle="精准记录，助力您的业务决策。"
            />
            <div className="container mx-auto py-10 space-y-16">
                <section role="region" aria-label="财务报表服务概述" className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight">服务概述</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        我们的财务报表编制服务旨在帮助您准确记录和分析财务数据，确保符合相关法规和准则。无论是月度、季度还是年度报表，我们都能为您提供定制化的解决方案，助力您的业务决策和战略规划。
                    </p>
                </section>

                <section role="region" aria-label="核心服务内容" className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight">核心服务内容</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "资产负债表编制",
                                description: "全面记录您的资产、负债和所有者权益状况，提供清晰的财务snapshot。"
                            },
                            {title: "利润表编制", description: "详细分析您的收入、成本和利润情况，评估业务盈利能力。"},
                            {title: "现金流量表编制", description: "追踪您的现金流入和流出情况，确保资金流动性管理。"},
                            {
                                title: "财务报表分析与解读",
                                description: "提供深入的财务分析报告，帮助您理解数据背后的业务含义。"
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                whileHover={{scale: 1.02}}
                                transition={{duration: 0.3}}
                                className="h-full" // Ensure motion div takes full height for layout
                            >
                                <Card
                                    className="h-full bg-neutral-900 border-neutral-800 hover:bg-gold-900/10 transition-all flex flex-col">
                                    <CardHeader>
                                        <CardTitle
                                            className="text-xl font-semibold text-white mb-0 flex items-center gap-2">
                                            <span className="text-gold-500 text-2xl">•</span>
                                            {item.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-gray-400 flex-grow">
                                        {item.description}
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section role="region" aria-label="为何选择我们" className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-4">为何选择我们？</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                我们的团队由经验丰富的财务专家组成，熟悉国内外会计准则，能够为您提供高质量的财务报表编制服务。我们注重细节，确保数据的准确性和合规性，同时提供个性化的建议，帮助您优化财务管理流程。
                            </p>
                            <ul className="space-y-3 text-lg text-muted-foreground">
                                <li className="flex items-center space-x-3">
                                    <span className="text-primary">✓</span>
                                    <span>专业团队，多年财务管理经验</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="text-primary">✓</span>
                                    <span>定制化服务，满足不同行业需求</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="text-primary">✓</span>
                                    <span>严格保密，保护您的财务数据安全</span>
                                </li>
                            </ul>
                        </div>
                        <motion.div
                            initial={{opacity: 0, scale: 0.9}}
                            whileInView={{opacity: 1, scale: 1}}
                            transition={{duration: 0.5}}
                            className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg"
                        >
                            <Image
                                src="/images/feature/AdobeStock_484420457.webp"
                                alt="Financial professionals reviewing statements"
                                fill
                                style={{objectFit: "cover"}}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>
                    </div>
                </section>

                <section role="region" aria-label="财务报表流程图" className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight">财务报表编制流程</h2>
                    <div
                        className="mb-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 p-6"
                        role="img" aria-label="财务报表编制的抽象图形">
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.8}}
                        >
                            <FinancialStatementVisual/>
                        </motion.div>
                    </div>
                </section>

                <section role="region" aria-label="联系我们" className="space-y-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tight">联系我们，获取财务报表服务</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        准备好优化您的财务管理了吗？立即联系我们，获取专业的财务报表编制服务，为您的业务决策提供坚实的数据支持。
                    </p>
                    <div className="flex justify-center">
                        <Button asChild>
                            <Link href="/contact">联系我们</Link>
                        </Button>
                    </div>
                </section>
            </div>
        </PageLayout>
    )
} 