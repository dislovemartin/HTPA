"use client"

import { Award, Users, Lightbulb, Clock } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

const reasons = [
  {
    icon: <Award className="h-12 w-12 text-htpa-gold" />,
    titleKey: "why.reason1",
    descriptionKey: "why.reason1.desc",
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-htpa-gold" />,
    titleKey: "why.reason2",
    descriptionKey: "why.reason2.desc",
  },
  {
    icon: <Users className="h-12 w-12 text-htpa-gold" />,
    titleKey: "why.reason3",
    descriptionKey: "why.reason3.desc",
  },
  {
    icon: <Clock className="h-12 w-12 text-htpa-gold" />,
    titleKey: "why.reason4",
    descriptionKey: "why.reason4.desc",
  },
]

// Stats section data
const stats = [
  { value: "40+", label: "年行业经验 Years Experience" },
  { value: "1000+", label: "满意客户 Happy Clients" },
  { value: "5000+", label: "成功案例 Successful Cases" },
  { value: "20+", label: "专业团队成员 Team Members" },
]

export default function WhyChooseUs() {
  const { t } = useLanguage()

  return (
    <section className="section-padding bg-htpa-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-htpa-gold/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 w-96 h-96 bg-htpa-gold/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            <span className="text-gradient-gold">{t("why.title")}</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">{t("why.subtitle")}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="rounded-lg bg-htpa-black-light p-6 shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-2 opacity-0 animate-slide-up border border-htpa-gold/20"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="mb-4 flex justify-center transform transition-transform duration-300 hover:scale-110">
                {reason.icon}
              </div>
              <h3 className="mb-3 text-center text-xl font-semibold text-white">{t(reason.titleKey)}</h3>
              <p className="text-center text-gray-300">{t(reason.descriptionKey)}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-htpa-black-light rounded-xl shadow-lg p-8 glass-effect">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="opacity-0 animate-slide-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-htpa-gold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
