import { Metadata } from "next"
import PageLayout from "@/components/layout/page-layout"
import PageHeader from "@/components/ui/page-header"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "管理咨询 | [Your Company Name]", // Replace [Your Company Name]
  description: "提供专业的管理咨询服务，帮助您提高企业管理水平，实现企业价值最大化。",
  // Add more keywords relevant to management consulting in Chinese
  keywords: ["管理咨询", "战略咨询", "运营优化", "组织架构", "人力资源咨询", "市场营销", "数字化转型"],
}

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
            <h2>服务概述</h2>
            <p>
              我们提供专业的管理咨询服务，结合深厚的行业洞察和先进的管理理念，帮助企业应对复杂的商业挑战，优化运营效率，提升组织能力，制定并执行有效的增长战略，最终实现企业价值的最大化。
            </p>
            <Separator className="my-8" />

            <h2>核心服务内容</h2>
            <ul>
              <li>战略规划与执行</li>
              <li>组织架构设计与优化</li>
              <li>业务流程改进（BPI/BPR）</li>
              <li>人力资源管理咨询</li>
              <li>市场营销与销售策略</li>
              <li>供应链与运营管理</li>
              <li>数字化转型咨询</li>
              {/* Add more specific services */}
            </ul>
             <Separator className="my-8" />

            <h2>为何选择我们？</h2>
             <p>
               [在此处添加详细内容，例如：结果导向的方法论、资深顾问团队、丰富的跨行业经验、数据驱动的决策支持、定制化的解决方案等。]
             </p>
             {/* Add more sections as needed, e.g., Our Consulting Process, Case Studies */}
          </div>
        </div>
      </section>
    </PageLayout>
  )
} 