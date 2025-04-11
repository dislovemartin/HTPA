import { Metadata } from "next"
import PageLayout from "@/components/layout/page-layout"
import PageHeader from "@/components/ui/page-header"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "财务报表编制 | [Your Company Name]", // Replace [Your Company Name]
  description: "提供专业的财务报表编制服务，帮助您了解企业的财务状况，为决策提供依据。",
  // Add more keywords relevant to financial statement preparation in Chinese
  keywords: ["财务报表", "报表编制", "会计准则", "资产负债表", "利润表", "现金流量表", "财务分析"],
}

export default function FinancialStatementPrepPage() {
  return (
    <PageLayout>
      <PageHeader
        title="财务报表编制"
        subtitle="清晰反映企业财务状况，支持明智决策"
      />

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg max-w-4xl mx-auto dark:prose-invert">
            <h2>服务概述</h2>
            <p>
              我们提供专业、准确的财务报表编制服务，严格遵循适用的会计准则（如中国企业会计准则 CAS、国际财务报告准则 IFRS 等）。我们帮助企业清晰、全面地了解其财务表现和状况，为管理层决策、投资者沟通及合规申报提供坚实基础。
            </p>
            <Separator className="my-8" />

            <h2>核心服务内容</h2>
            <ul>
              <li>月度、季度、年度财务报表编制</li>
              <li>合并财务报表编制</li>
              <li>根据特定需求定制管理报表</li>
              <li>财务报表附注撰写</li>
              <li>会计政策选择与应用咨询</li>
              <li>财务报表分析与解读</li>
              {/* Add more specific services */}
            </ul>
             <Separator className="my-8" />

            <h2>为何选择我们？</h2>
             <p>
               [在此处添加详细内容，例如：精通各类会计准则、严谨的质量控制流程、及时的报表交付、深入的财务分析能力、保密性承诺等。]
             </p>
             {/* Add more sections as needed, e.g., Reporting Standards We Follow, Sample Reports */}
          </div>
        </div>
      </section>
    </PageLayout>
  )
} 