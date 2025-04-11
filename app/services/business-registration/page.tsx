import PageLayout from "@/components/layout/page-layout"
import PageHeader from "@/components/ui/page-header"
import { Separator } from "@/components/ui/separator"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "企业注册与咨询 | [Your Company Name]", // Replace [Your Company Name]
    description: "提供一站式企业注册和咨询服务，帮助您快速启动业务，实现商业目标。",
    // Add more keywords relevant to business registration and consulting in Chinese
    keywords: ["企业注册", "公司注册", "工商注册", "创业咨询", "商业计划", "股权架构", "外资企业注册"],
}

export default function BusinessRegistrationPage() {
    return (
        <PageLayout>
            <PageHeader
                title="企业注册与咨询"
                subtitle="简化流程，加速您的商业启动"
            />

            <section className="py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="prose prose-lg max-w-4xl mx-auto dark:prose-invert">
                        <h2>服务概述</h2>
                        <p>
                            我们提供全面、高效的企业注册与咨询服务，旨在帮助创业者和企业快速、合规地完成公司设立流程。从初步咨询到注册完成，我们提供一站式解决方案，为您扫清障碍，让您专注于核心业务发展。
                        </p>
                        <Separator className="my-8" />

                        <h2>核心服务内容</h2>
                        <ul>
                            <li>内资、外资公司注册咨询与代办</li>
                            <li>公司类型选择与股权架构设计</li>
                            <li>注册地址选择建议</li>
                            <li>银行开户协助</li>
                            <li>后续资质申请咨询（如ICP许可证等）</li>
                            <li>公司变更与注销服务</li>
                            {/* Add more specific services */}
                        </ul>
                        <Separator className="my-8" />

                        <h2>为何选择我们？</h2>
                        <p>
                            [在此处添加详细内容，例如：熟悉各地政策法规、高效专业的团队、一站式服务体验、透明的收费标准、丰富的行业经验等。]
                        </p>
                        {/* Add more sections as needed, e.g., Registration Process, FAQ */}
                    </div>
                </div>
            </section>
        </PageLayout>
    )
} 