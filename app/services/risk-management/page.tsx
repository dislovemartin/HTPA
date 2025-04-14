"use client";

import PageLayout from "@/components/layout/page-layout";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle,} from "@/components/ui/card";
import PageHeader from "@/components/ui/page-header";
import {Separator} from "@/components/ui/separator";
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Custom SVG component for risk management visual
const RiskManagementVisual = () => (
    <svg
        width="300"
        height="200"
        viewBox="0 0 300 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-90"
    >
        {/* Radar/shield background */}
        <circle cx="150" cy="100" r="60" stroke="#79673A" strokeWidth="0.5" strokeDasharray="4 4"/>
        <circle cx="150" cy="100" r="45" stroke="#79673A" strokeWidth="0.5" strokeDasharray="4 4"/>
        <circle cx="150" cy="100" r="30" stroke="#79673A" strokeWidth="0.5" strokeDasharray="4 4"/>
        <circle cx="150" cy="100" r="15" stroke="#79673A" strokeWidth="0.5" strokeDasharray="4 4"/>

        {/* Shield outline */}
        <path
            d="M150 40C120 60 90 55 90 100C90 140 120 160 150 170C180 160 210 140 210 100C210 55 180 60 150 40Z"
            stroke="#D4AF37"
            strokeWidth="1.5"
            fill="#1A1A1A"
        />

        {/* Risk nodes */}
        <circle cx="175" cy="70" r="6" fill="#D4AF37" fillOpacity="0.15" stroke="#D4AF37" strokeWidth="1"/>
        <circle cx="130" cy="85" r="5" fill="#B8860B" fillOpacity="0.2" stroke="#B8860B" strokeWidth="1"/>
        <circle cx="185" cy="120" r="7" fill="#D4AF37" fillOpacity="0.15" stroke="#D4AF37" strokeWidth="1"/>
        <circle cx="150" cy="140" r="6" fill="#B8860B" fillOpacity="0.2" stroke="#B8860B" strokeWidth="1"/>
        <circle cx="115" cy="110" r="8" fill="#D4AF37" fillOpacity="0.15" stroke="#D4AF37" strokeWidth="1"/>

        {/* Connection lines */}
        <path d="M150 100L175 70" stroke="#B8860B" strokeWidth="0.75" strokeDasharray="2 2"/>
        <path d="M150 100L130 85" stroke="#B8860B" strokeWidth="0.75" strokeDasharray="2 2"/>
        <path d="M150 100L185 120" stroke="#B8860B" strokeWidth="0.75" strokeDasharray="2 2"/>
        <path d="M150 100L150 140" stroke="#B8860B" strokeWidth="0.75" strokeDasharray="2 2"/>
        <path d="M150 100L115 110" stroke="#B8860B" strokeWidth="0.75" strokeDasharray="2 2"/>

        {/* Center node */}
        <circle cx="150" cy="100" r="10" fill="#D4AF37" fillOpacity="0.2" stroke="#D4AF37" strokeWidth="1.5"/>
        <circle cx="150" cy="100" r="4" fill="#D4AF37"/>

        {/* Alert indicators */}
        <path d="M175 70L180 65M130 85L125 80M185 120L190 125M150 140L155 145M115 110L110 105"
              stroke="#D4AF37"
              strokeWidth="0.75"
              strokeLinecap="round"
        />

        {/* Security grid */}
        <path d="M90 70L210 70" stroke="#79673A" strokeWidth="0.5" strokeDasharray="4 4"/>
        <path d="M90 130L210 130" stroke="#79673A" strokeWidth="0.5" strokeDasharray="4 4"/>
        <path d="M120 40L120 170" stroke="#79673A" strokeWidth="0.5" strokeDasharray="4 4"/>
        <path d="M180 40L180 170" stroke="#79673A" strokeWidth="0.5" strokeDasharray="4 4"/>
    </svg>
);

export default function RiskManagementPage() {
    return (
        <PageLayout>
            <PageHeader
                title="风险管理"
                subtitle="识别、评估并有效管理企业风险"
            />

            <section className="py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="prose prose-lg max-w-4xl mx-auto dark:prose-invert">
                        <div className="mb-12" role="region" aria-label="风险管理服务概述">
                            <h2 className="text-3xl font-bold mb-6 text-gold-600">服务概述</h2>
                            <p className="text-lg leading-relaxed">
                                在HTPA，我们提供全面的风险管理咨询服务，帮助企业建立和完善风险管理框架，主动识别、评估、监控和应对来自内外部的各类风险（包括战略风险、运营风险、财务风险、合规风险等）。我们的目标是通过系统化的风险管理方法，保护企业资产，提升决策质量，并支持企业的可持续发展战略。
                            </p>
                        </div>
                        <Separator className="my-8"/>

                        <div className="mb-12" role="region" aria-label="核心服务内容">
                            <h2 className="text-3xl font-bold mb-6 text-gold-600">核心服务内容</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    {title: '风险识别与评估', description: '帮助您识别潜在风险并评估其影响和可能性。'},
                                    {title: '风险控制与缓解', description: '制定策略以控制和缓解已识别的风险。'},
                                    {title: '合规风险管理', description: '确保您的业务符合相关法规和标准。'},
                                    {title: '风险监控与报告', description: '持续监控风险并提供详细报告。'},
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{opacity: 0, y: 20}}
                                        whileInView={{opacity: 1, y: 0}}
                                        whileHover={{scale: 1.02}}
                                        transition={{duration: 0.3}}
                                        className="h-full"
                                    >
                                        <Card
                                            className="h-full bg-neutral-900 border-neutral-800 hover:bg-gold-900/10 transition-all flex flex-col">
                                            <CardHeader>
                                                <CardTitle
                                                    className="text-xl font-semibold text-white mb-0 flex items-center gap-2">
                                                    <span className="text-gold-500 font-bold">{index + 1}.</span>
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
                        </div>
                        <Separator className="my-8"/>

                        <div className="mb-12" role="region" aria-label="选择我们的理由">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold mb-6 text-gold-600">为何选择我们？</h2>
                                    <p className="text-lg leading-relaxed">
                                        选择HTPA，您将获得前瞻性的风险视角、跨行业的丰富经验、实用的解决方案以及先进的风险管理工具支持。我们的团队致力于帮助企业建立风险意识文化，通过量身定制的风险管理策略，增强企业韧性，助力您在不确定环境中做出明智决策。
                                    </p>
                                </div>
                                <motion.div
                                    initial={{opacity: 0, scale: 0.9}}
                                    whileInView={{opacity: 1, scale: 1}}
                                    transition={{duration: 0.5}}
                                    className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg"
                                >
                                    <Image
                                        src="/images/feature/AdobeStock_250850523.webp"
                                        alt="Strategic risk management planning"
                                        fill
                                        style={{objectFit: "cover"}}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </motion.div>
                            </div>
                        </div>
                        <Separator className="my-8"/>

                        <div
                            className="mb-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 p-6"
                            role="img" aria-label="风险管理与安全保障的抽象图形">
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.8}}
                            >
                                <RiskManagementVisual/>
                            </motion.div>
                        </div>

                        <div className="bg-gold-50 p-8 rounded-lg text-center" role="region"
                             aria-label="联系我们以获取风险管理服务">
                            <h2 className="text-3xl font-bold mb-4 text-gold-700">获取专业的风险管理支持</h2>
                            <p className="text-lg mb-6 text-gray-700">需要全面的风险管理解决方案来保护您的企业吗？立即联系我们，了解我们的服务如何帮助您识别和应对潜在风险。</p>
                            <Button asChild
                                    className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 text-lg font-semibold rounded-md shadow-md">
                                <Link href="/contact">开始服务</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
} 