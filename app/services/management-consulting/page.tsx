"use client";

import PageLayout from "@/components/layout/page-layout";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle,} from "@/components/ui/card";
import PageHeader from "@/components/ui/page-header";
import {Separator} from "@/components/ui/separator";
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Custom SVG component for management consulting visual
const ConsultingVisual = () => (
    <svg
        width="300"
        height="200"
        viewBox="0 0 300 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-90"
    >
        {/* Abstract grid pattern */}
        <path
            d="M30 30H270"
            stroke="#79673A"
            strokeWidth="0.5"
            strokeDasharray="4 4"
        />
        <path
            d="M30 70H270"
            stroke="#79673A"
            strokeWidth="0.5"
            strokeDasharray="4 4"
        />
        <path
            d="M30 110H270"
            stroke="#79673A"
            strokeWidth="0.5"
            strokeDasharray="4 4"
        />
        <path
            d="M30 150H270"
            stroke="#79673A"
            strokeWidth="0.5"
            strokeDasharray="4 4"
        />
        <path
            d="M30 30V150"
            stroke="#79673A"
            strokeWidth="0.5"
            strokeDasharray="4 4"
        />
        <path
            d="M90 30V150"
            stroke="#79673A"
            strokeWidth="0.5"
            strokeDasharray="4 4"
        />
        <path
            d="M150 30V150"
            stroke="#79673A"
            strokeWidth="0.5"
            strokeDasharray="4 4"
        />
        <path
            d="M210 30V150"
            stroke="#79673A"
            strokeWidth="0.5"
            strokeDasharray="4 4"
        />
        <path
            d="M270 30V150"
            stroke="#79673A"
            strokeWidth="0.5"
            strokeDasharray="4 4"
        />

        {/* Upward trending line */}
        <path
            d="M30 120L90 100L150 80L210 50L270 40"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeLinecap="round"
        />

        {/* Strategic nodes/points */}
        <circle cx="90" cy="100" r="5" fill="#B8860B"/>
        <circle cx="150" cy="80" r="5" fill="#D4AF37"/>
        <circle cx="210" cy="50" r="5" fill="#B8860B"/>

        {/* Abstract geometric shapes */}
        <rect x="55" y="80" width="20" height="20" fill="#D4AF37" fillOpacity="0.1" stroke="#D4AF37" strokeWidth="1"/>
        <polygon
            points="150,60 140,75 160,75"
            fill="#B8860B"
            fillOpacity="0.2"
            stroke="#B8860B"
            strokeWidth="1"
        />
        <circle cx="210" cy="80" r="15" fill="#D4AF37" fillOpacity="0.1" stroke="#D4AF37" strokeWidth="1"/>

        {/* Decorative element */}
        <path
            d="M30 170C50 150 90 190 120 165C150 140 180 180 210 155C240 130 260 150 270 140"
            stroke="#B8860B"
            strokeWidth="1"
            strokeDasharray="2 2"
            strokeOpacity="0.6"
        />
    </svg>
);

export default function ManagementConsultingPage() {
    return (
        <PageLayout>
            <PageHeader
                title="管理咨询"
                subtitle="提升管理效能，驱动企业价值增长"
            />

            <section className="py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="prose prose-lg max-w-4xl mx-auto dark:prose-invert">
                        <div className="mb-12" role="region" aria-label="管理咨询服务概述">
                            <h2 className="text-3xl font-bold mb-6 text-gold-600">服务概述</h2>
                            <p className="text-lg leading-relaxed">
                                在HTPA，我们提供专业的管理咨询服务，结合深厚的行业洞察和先进的管理理念，帮助企业应对复杂的商业挑战。我们的团队致力于优化运营效率，提升组织能力，制定并执行有效的增长战略，最终实现企业价值的最大化，助力您在竞争激烈的市场中脱颖而出。
                            </p>
                        </div>
                        <Separator className="my-8"/>

                        <div className="mb-12" role="region" aria-label="核心服务内容">
                            <h2 className="text-3xl font-bold mb-6 text-gold-600">核心服务内容</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: '战略规划与执行',
                                        description: '协助制定长期战略目标和实施计划，确保企业方向清晰并有效落地。'
                                    },
                                    {
                                        title: '组织架构设计与优化',
                                        description: '设计高效的组织结构，优化职责分工，提升团队协作和决策效率。'
                                    },
                                    {
                                        title: '业务流程改进（BPI/BPR）',
                                        description: '分析并改进业务流程，消除冗余环节，提升运营效率和响应速度。'
                                    },
                                    {
                                        title: '人力资源管理咨询',
                                        description: '提供人才招聘、绩效管理和培训发展建议，激发员工潜能。'
                                    },
                                    {
                                        title: '市场营销与销售策略',
                                        description: '制定精准的市场定位和销售策略，增强品牌影响力和市场份额。'
                                    },
                                    {
                                        title: '供应链与运营管理',
                                        description: '优化供应链流程，提升库存管理和物流效率，降低运营成本。'
                                    },
                                    {
                                        title: '数字化转型咨询',
                                        description: '指导企业实施数字化解决方案，利用技术驱动业务创新和效率提升。'
                                    },
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
                        </div>
                        <Separator className="my-8"/>

                        <div className="mb-12" role="region" aria-label="选择我们的理由">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold mb-6 text-gold-600">为何选择我们？</h2>
                                    <p className="text-lg leading-relaxed">
                                        选择HTPA，您将受益于我们结果导向的方法论、资深顾问团队的丰富跨行业经验、数据驱动的决策支持以及定制化的解决方案。我们的目标是通过深入了解您的业务需求，提供切实可行的建议，助力企业在快速变化的市场中实现持续增长。
                                    </p>
                                </div>
                                <motion.div
                                    initial={{opacity: 0, scale: 0.9}}
                                    whileInView={{opacity: 1, scale: 1}}
                                    transition={{duration: 0.5}}
                                    className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg"
                                >
                                    <Image
                                        src="/images/feature/client-meeting.webp"
                                        alt="Management consulting team meeting"
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
                            role="img" aria-label="管理咨询策略与增长的抽象图形">
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.8}}
                            >
                                <ConsultingVisual/>
                            </motion.div>
                        </div>

                        <div className="bg-gold-50 p-8 rounded-lg text-center" role="region"
                             aria-label="联系我们以获取管理咨询服务">
                            <h2 className="text-3xl font-bold mb-4 text-gold-700">获取专业的管理咨询支持</h2>
                            <p className="text-lg mb-6 text-gray-700">需要提升企业管理效能并驱动价值增长吗？立即联系我们，了解我们的咨询服务如何助力您的企业实现战略目标。</p>
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