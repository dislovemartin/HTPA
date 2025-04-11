import { Metadata } from "next"
import PageLayout from "@/components/layout/page-layout"
import PageHeader from "@/components/ui/page-header"
import { Separator } from "@/components/ui/separator"
import { Calculator, Percent, Landmark, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "税务规划与申报 | [Your Company Name]", // Replace [Your Company Name]
  description: "提供专业的税务规划和申报服务，帮助您合理避税，降低税务风险。",
  // Add more keywords relevant to tax planning and filing in Chinese
  keywords: ["税务规划", "税务申报", "企业所得税", "个人所得税", "增值税", "税务咨询", "合理避税"],
}

export default function TaxPlanning() {
  return (
    <PageLayout>
      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto text-gray-800">
        {/* Custom Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gold-700">Tax Planning & Filing</h1>
          <p className="text-lg text-gray-600">Maximizing savings and ensuring compliance with strategic tax solutions.</p>
        </div>

        {/* Overview Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gold-600 flex items-center gap-2">
            <Calculator className="w-8 h-8" /> About Our Tax Services
          </h2>
          <p className="text-lg leading-relaxed">
            At HTPA, our tax planning and filing services are designed to optimize your tax position while ensuring full compliance with current regulations. We help individuals and businesses minimize liabilities and maximize returns through proactive strategies and meticulous preparation.
          </p>
        </div>

        {/* Core Services Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gold-600 flex items-center gap-2">
            <Percent className="w-8 h-8" /> Core Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-3">
              <Calculator className="w-6 h-6 text-gold-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Tax Planning Strategies</h3>
                <p>Customized plans to reduce tax burdens through deductions, credits, and timing strategies.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Percent className="w-6 h-6 text-gold-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Tax Return Preparation</h3>
                <p>Accurate and timely filing for individuals, businesses, and complex entities.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Landmark className="w-6 h-6 text-gold-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Compliance & Advisory</h3>
                <p>Guidance on tax laws and regulations to avoid penalties and ensure adherence.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calculator className="w-6 h-6 text-gold-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Audit Support</h3>
                <p>Representation and support during tax audits or disputes with authorities.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits Section */}
        <div className="mb-12 bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold mb-6 text-gold-600 flex items-center gap-2">
            <Check className="w-8 h-8" /> Key Benefits
          </h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-start gap-3"><Check className="w-6 h-6 text-green-500 mt-1" /><span>Maximized tax savings through strategic planning.</span></li>
            <li className="flex items-start gap-3"><Check className="w-6 h-6 text-green-500 mt-1" /><span>Reduced risk of errors with expert preparation.</span></li>
            <li className="flex items-start gap-3"><Check className="w-6 h-6 text-green-500 mt-1" /><span>Peace of mind with full compliance to tax laws.</span></li>
            <li className="flex items-start gap-3"><Check className="w-6 h-6 text-green-500 mt-1" /><span>Personalized advice tailored to your financial situation.</span></li>
          </ul>
        </div>

        {/* Placeholder for Imagery/Graphic */}
        <div className="mb-12 bg-gray-200 h-64 flex items-center justify-center rounded-lg">
          <p className="text-gray-600 text-lg">[Placeholder: Tax Savings or Optimization Graphic]</p>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gold-50 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4 text-gold-700">Optimize Your Tax Strategy</h2>
          <p className="text-lg mb-6 text-gray-700">Ready to save more on taxes? Contact us today to explore how our tax planning services can benefit you or your business.</p>
          <Button asChild className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 text-lg font-semibold rounded-md shadow-md">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  )
} 