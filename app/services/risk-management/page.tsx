import { Metadata } from "next"
import PageLayout from "@/components/layout/page-layout"
import PageHeader from "@/components/ui/page-header"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "风险管理 | [Your Company Name]", // Replace [Your Company Name]
  description: "提供全面的风险管理服务，帮助您识别、评估和管理企业面临的各种风险。",
  // Add more keywords relevant to risk management in Chinese
  keywords: ["风险管理", "内部控制", "风险评估", "合规风险", "操作风险", "财务风险", "企业风险管理"],
}

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
            <h2>服务概述</h2>
            <p>
              我们提供全面的风险管理咨询服务，帮助企业建立和完善风险管理框架，主动识别、评估、监控和应对来自内外部的各类风险（包括战略风险、运营风险、财务风险、合规风险等），从而保护企业资产，提升决策质量，实现可持续发展。
            </p>
            <Separator className="my-8" />

            <h2>核心服务内容</h2>
            <ul>
              <li>企业风险管理（ERM）体系建设与评估</li>
              <li>内部控制体系设计、评估与优化</li>
              <li>专项风险评估（如：网络安全、供应链风险）</li>
              <li>合规风险管理与咨询</li>
              <li>业务连续性计划（BCP）制定</li>
              <li>危机管理与应对</li>
              {/* Add more specific services */}
            </ul>
             <Separator className="my-8" />

            <h2>为何选择我们？</h2>
             <p>
               [在此处添加详细内容，例如：前瞻性的风险视角、跨行业的专业经验、实用的解决方案、先进的风险管理工具、帮助建立风险文化等。]
             </p>
             {/* Add more sections as needed, e.g., Our Risk Management Framework, Industry Focus */}
          </div>
        </div>
      </section>
    </PageLayout>
  )
} 