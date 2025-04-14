"use client";

import PageLayout from "@/components/layout/page-layout";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle,} from "@/components/ui/card";
import {motion} from "framer-motion";
import {CheckSquare, FileSearch, ShieldCheck, Workflow} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Custom SVG component for audit and assurance visual
const AuditVisual = () => (
    <svg
        width="300"
        height="200"
        viewBox="0 0 300 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-90"
    >
        {/* Document outlines */}
        <rect x="110" y="40" width="80" height="120" rx="2" fill="#1A1A1A" stroke="#D4AF37" strokeWidth="1"/>

        {/* Document lines */}
        <path d="M120 60H180" stroke="#B8860B" strokeWidth="0.75"/>
        <path d="M120 70H180" stroke="#B8860B" strokeWidth="0.75"/>
        <path d="M120 80H160" stroke="#B8860B" strokeWidth="0.75"/>
        <path d="M120 90H170" stroke="#B8860B" strokeWidth="0.75"/>
        <path d="M120 100H165" stroke="#B8860B" strokeWidth="0.75"/>
        <path d="M120 110H175" stroke="#B8860B" strokeWidth="0.75"/>
        <path d="M120 120H160" stroke="#B8860B" strokeWidth="0.75"/>
        <path d="M120 130H170" stroke="#B8860B" strokeWidth="0.75"/>
        <path d="M120 140H155" stroke="#B8860B" strokeWidth="0.75"/>

        {/* Check marks */}
        <path d="M185 65L190 70L200 60" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M185 95L190 100L200 90" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M185 125L190 130L200 120" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round"/>

        {/* Magnifying glass */}
        <circle cx="70" cy="100" r="20" stroke="#D4AF37" strokeWidth="1.5" fill="#1A1A1A"/>
        <circle cx="70" cy="100" r="15" stroke="#79673A" strokeWidth="0.5" strokeDasharray="2 2" fill="none"/>
        <path d="M85 115L100 130" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round"/>

        {/* Connection lines */}
        <path d="M90 100L110 100" stroke="#B8860B" strokeWidth="0.75" strokeDasharray="3 2"/>
        <circle cx="90" cy="100" r="2" fill="#D4AF37"/>
        <circle cx="110" cy="100" r="2" fill="#D4AF37"/>

        {/* Certificate/stamp */}
        <rect x="200" y="130" width="40" height="30" rx="2" stroke="#D4AF37" strokeWidth="1" fill="#1A1A1A"/>
        <circle cx="220" cy="145" r="8" stroke="#D4AF37" strokeWidth="1" fill="#1A1A1A"/>
        <path d="M216 145L219 148L224 143" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round"
              strokeLinejoin="round"/>
        <path d="M210 135H230" stroke="#B8860B" strokeWidth="0.5"/>
        <path d="M210 155H230" stroke="#B8860B" strokeWidth="0.5"/>

        {/* Background grid element */}
        <path d="M50 55H250" stroke="#79673A" strokeWidth="0.3" strokeDasharray="1 3"/>
        <path d="M50 85H250" stroke="#79673A" strokeWidth="0.3" strokeDasharray="1 3"/>
        <path d="M50 115H250" stroke="#79673A" strokeWidth="0.3" strokeDasharray="1 3"/>
        <path d="M50 145H250" stroke="#79673A" strokeWidth="0.3" strokeDasharray="1 3"/>
    </svg>
);

export default function AuditAssurance() {
    return (
        <PageLayout>
            <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto text-gray-800">
                {/* Custom Header Section */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold mb-4 text-gold-700">Audit & Assurance</h1>
                    <p className="text-lg text-gray-600">确保财务健康的基石，提供精确审计与鉴证服务</p>
                </div>

                {/* Overview Section */}
                <div className="mb-12" role="region" aria-label="审计服务概述">
                    <h2 className="text-3xl font-bold mb-6 text-gold-600 flex items-center gap-2">
                        <FileSearch className="w-8 h-8"/> 关于我们的审计服务
                    </h2>
                    <p className="text-lg leading-relaxed">
                        在HTPA恒泰会计师事务所，我们提供全面的审计和鉴证服务，旨在提升您的财务报表的可靠性，并确保符合法规要求。我们的细致方法帮助企业与利益相关者建立信任，保持财务透明度。我们的团队由经验丰富的审计专家组成，致力于为您的业务提供定制化的审计解决方案，解决复杂的财务挑战。
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
                        每一个成功的企业背后，精确的财务记录管理和审计流程起着至关重要的作用。我们理解每个企业的财务需求各不相同，因此提供专属定制的会计服务，以确保您的财务管理精准无误。我们的审计流程不仅对公司业绩进行客观核查，还帮助向投资者和利益相关者证明您的企业在遵循标准的财务报告规范。
                    </p>
                </div>

                {/* Core Services Section */}
                <div className="mb-12" role="region" aria-label="核心审计服务">
                    <h2 className="text-3xl font-bold mb-6 text-gold-600 flex items-center gap-2">
                        <CheckSquare className="w-8 h-8"/> 核心服务
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: '财务报表审计',
                                description: '对财务记录进行彻底检查，提供关于准确性和公正性的独立意见，确保您的财务数据值得信赖。'
                            },
                            {
                                title: '合规性审计',
                                description: '确保遵守特定于您业务的行业标准、法律和法规，降低合规风险。'
                            },
                            {
                                title: '内部审计',
                                description: '评估内部控制和流程，以提高运营效率和风险管理能力，保护您的业务。'
                            },
                            {
                                title: '鉴证服务',
                                description: '为非财务信息提供信心，包括可持续性和运营指标，帮助您展示全面的业务价值。'
                            },
                            {
                                title: '应收账款管理',
                                description: '核对您的所有应收账款，确保您已收到所有欠款，优化现金流管理。'
                            },
                            {
                                title: '银行对账与记录维护',
                                description: '定期进行银行对账，确保账面记录与银行数据的一致性，及时发现并解决任何异常。'
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
                                            <ShieldCheck className="w-5 h-5 text-gold-500"/>
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

                {/* Add visual section */}
                <div
                    className="mb-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 p-6"
                    role="img" aria-label="审计与鉴证的抽象图形">
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 0.8}}
                    >
                        <AuditVisual/>
                    </motion.div>
                </div>

                {/* Why Choose Us Section */}
                <div className="mb-12 bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h2 className="text-3xl font-bold mb-6 text-gold-600 flex items-center gap-2">
                        <Workflow className="w-8 h-8"/> 为什么选择我们？
                    </h2>
                    <ul className="space-y-4 list-none pl-0 text-lg">
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">•</span>
                            <span><strong>专业保障：</strong>我们的会计专家团队具备多年行业经验和严格的职业操守，确保每一笔财务记录精准无误。</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">•</span>
                            <span><strong>灵活定制：</strong>根据不同规模和行业特点，为企业量身定制财务记录方案，满足多样化的需求。</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">•</span>
                            <span><strong>安全保密：</strong>我们采用先进的数据加密和安全措施，确保企业财务信息的安全性和机密性。</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gold-500 mr-2">•</span>
                            <span><strong>清晰流程：</strong>我们遵循结构化的审计方法，确保每一项审计工作的透明度和彻底性。</span>
                        </li>
                    </ul>
                </div>

                {/* FAQ Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gold-600">常见问题</h2>
                    <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-4">
                            <h3 className="font-semibold text-lg mb-2">为什么我的企业需要专业的财务记录管理服务？</h3>
                            <p>专业的财务记录管理服务不仅能确保日常交易记录的准确性，还能帮助企业更好地理解财务健康状况。通过专业的财务记录，企业能够及时发现问题，制定数据驱动的决策，并确保财务合规。此外，专业服务还能节省企业在繁琐财务管理上的时间和精力。</p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4">
                            <h3 className="font-semibold text-lg mb-2">我们的企业规模较小，财务记录管理服务适合我们吗？</h3>
                            <p>无论企业规模大小，精准的财务记录都至关重要。对于小型企业，专业的财务记录管理能有效控制成本、优化现金流，并简化税务申报流程。我们可以根据企业的规模和需求，提供量身定制的解决方案，确保您获得最适合的服务支持。</p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4">
                            <h3 className="font-semibold text-lg mb-2">财务记录管理服务与会计服务有何区别？</h3>
                            <p>财务记录管理服务（Bookkeeping）侧重于日常交易的记录、整理和分类，确保财务数据的准确性，为会计报告提供基础。会计服务则侧重于更高级的财务分析、报表编制和税务规划。简而言之，财务记录管理是会计的基础，我们的服务可以帮助企业完成从基础记录到财务报表的全过程。</p>
                        </div>
                    </div>
                </div>

                {/* Placeholder for Imagery/Graphic - REPLACED */}
                <div className="mb-12 relative w-full h-64 rounded-lg overflow-hidden shadow-lg" role="img"
                     aria-label="审计与鉴证服务流程图解">
                    <Image
                        src="/images/feature/AdobeStock_481150888.webp"
                        alt="审计与鉴证服务流程图解"
                        fill
                        style={{objectFit: "cover"}}
                        sizes="100vw"
                    />
                </div>

                {/* Call to Action Section */}
                <div className="bg-gold-50 p-8 rounded-lg text-center">
                    <h2 className="text-3xl font-bold mb-4 text-gold-700">立即咨询审计服务</h2>
                    <p className="text-lg mb-6 text-gray-700">准备提升您的财务透明度和合规性？联系我们，了解我们的审计服务如何帮助您的企业建立信任和信心。</p>
                    <Button asChild
                            className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 text-lg font-semibold rounded-md shadow-md">
                        <Link href="/contact">立即咨询</Link>
                    </Button>
                </div>
            </section>
        </PageLayout>
    )
} 