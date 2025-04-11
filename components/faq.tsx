"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "HTPA恒泰会计师事务所提供哪些语言的服务？",
    answer:
      "HTPA恒泰会计师事务所提供英语、粤语和普通话服务，致力于为不同语言背景的客户提供贴心支持。无论您使用哪种语言，我们都能确保沟通顺畅，服务到位。",
  },
  {
    question: "如何预约HTPA恒泰会计师事务所的咨询服务？",
    answer:
      "您可以通过我们网站上的联系表格、电话或直接发送电子邮件来预约咨询服务。我们的团队会在24小时内回复您，并安排合适的时间进行面对面或线上咨询。",
  },
  {
    question: "HTPA恒泰会计师事务所的服务费用是如何计算的？",
    answer:
      "我们的服务费用根据服务类型、复杂程度和所需时间而定。对于个人税务申报，我们通常提供固定价格；对于企业服务，我们会根据具体需求提供定制化报价。您可以联系我们获取详细的价格信息。",
  },
  {
    question: "我需要准备哪些材料来进行个人所得税申报？",
    answer:
      "对于个人所得税申报，您通常需要准备的材料包括：T4表格（就业收入）、T5表格（投资收入）、T4A表格（其他收入）、RRSP缴款收据、医疗费用收据、慈善捐款收据、教育相关费用证明等。具体所需材料可能因个人情况而异，我们的团队会提供详细指导。",
  },
  {
    question: "HTPA恒泰会计师事务所如何帮助企业优化税务策略？",
    answer:
      "我们会全面分析您企业的财务状况、业务模式和发展规划，结合最新的税法规定，为您量身定制合法有效的税务优化方案。这可能包括合理安排收入和支出时间、充分利用税收抵免和扣除项目、优化企业结构等策略，帮助您在合法合规的前提下最大限度地减轻税务负担。",
  },
  {
    question: "HTPA恒泰会计师事务所能否处理跨境税务问题？",
    answer:
      "是的，我们拥有丰富的国际税务经验，能够处理各种跨境税务问题。无论是个人的海外资产申报、外国税收抵免申请，还是企业的跨国业务税务规划、转移定价等复杂问题，我们都能提供专业的解决方案，帮助您合理安排全球税务事务。",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            <span className="text-gradient text-gold">常见问题</span> FAQ
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            以下是我们客户经常咨询的问题。如果您有其他疑问，欢迎随时联系我们。
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-950 rounded-lg shadow-md overflow-hidden opacity-0 animate-slide-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gold transition-colors">
                  <span className="text-left font-medium text-white">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-300">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
