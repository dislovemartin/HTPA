import PageLayout from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { CheckSquare, FileSearch, ShieldCheck, Workflow } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "审计与鉴证 | [Your Company Name]", // Replace [Your Company Name]
    description: "提供全面的审计与鉴证服务，确保您的财务报表准确无误，符合相关法规要求。",
    // Add more keywords relevant to audit and assurance in Chinese
    keywords: ["审计", "鉴证", "财务报表审计", "内部控制", "合规性", "财务报告"],
}

export default function AuditAssurance() {
    return (
        <PageLayout>
            <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto text-gray-800">
                {/* Custom Header Section */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold mb-4 text-gold-700">Audit & Assurance</h1>
                    <p className="text-lg text-gray-600">Ensuring financial integrity and compliance with expert audit services.</p>
                </div>

                {/* Overview Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gold-600 flex items-center gap-2">
                        <FileSearch className="w-8 h-8" /> About Our Audit Services
                    </h2>
                    <p className="text-lg leading-relaxed">
                        At HTPA, we provide comprehensive audit and assurance services designed to enhance the reliability of your financial statements and ensure compliance with regulatory requirements. Our meticulous approach helps businesses build trust with stakeholders and maintain financial transparency.
                    </p>
                </div>

                {/* Core Services Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-gold-600 flex items-center gap-2">
                        <CheckSquare className="w-8 h-8" /> Core Services
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex items-start gap-3">
                            <ShieldCheck className="w-6 h-6 text-gold-500 mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Financial Statement Audits</h3>
                                <p>Thorough examination of financial records to provide an independent opinion on accuracy and fairness.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <FileSearch className="w-6 h-6 text-gold-500 mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Compliance Audits</h3>
                                <p>Ensuring adherence to industry standards, laws, and regulations specific to your business.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckSquare className="w-6 h-6 text-gold-500 mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Internal Audits</h3>
                                <p>Evaluating internal controls and processes to improve operational efficiency and risk management.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <ShieldCheck className="w-6 h-6 text-gold-500 mt-1" />
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Assurance Services</h3>
                                <p>Providing confidence in non-financial information, including sustainability and operational metrics.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Audit Approach Section */}
                <div className="mb-12 bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h2 className="text-3xl font-bold mb-6 text-gold-600 flex items-center gap-2">
                        <Workflow className="w-8 h-8" /> Our Audit Approach
                    </h2>
                    <p className="text-lg mb-4">We follow a structured methodology to ensure thoroughness and transparency in every audit engagement.</p>
                    <ol className="space-y-4 list-decimal pl-5 text-lg">
                        <li><strong>Planning:</strong> Understanding your business, risks, and objectives to tailor our audit strategy.</li>
                        <li><strong>Risk Assessment:</strong> Identifying key areas of financial and operational risk.</li>
                        <li><strong>Execution:</strong> Detailed testing and analysis of financial data and controls.</li>
                        <li><strong>Reporting:</strong> Clear, actionable insights and recommendations for improvement.</li>
                    </ol>
                </div>

                {/* Placeholder for Imagery/Graphic */}
                <div className="mb-12 bg-gray-200 h-64 flex items-center justify-center rounded-lg">
                    <p className="text-gray-600 text-lg">[Placeholder: Audit & Compliance Graphic or Image]</p>
                </div>

                {/* Call to Action Section */}
                <div className="bg-gold-50 p-8 rounded-lg text-center">
                    <h2 className="text-3xl font-bold mb-4 text-gold-700">Request an Audit Consultation</h2>
                    <p className="text-lg mb-6 text-gray-700">Ready to ensure your financial integrity? Contact us today to discuss how our audit services can benefit your organization.</p>
                    <Button asChild className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 text-lg font-semibold rounded-md shadow-md">
                        <Link href="/contact">Get Started</Link>
                    </Button>
                </div>
            </section>
        </PageLayout>
    )
} 