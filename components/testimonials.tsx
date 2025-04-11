"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

const testimonials = [
  {
    quote:
      "HTPA恒泰会计师事务所的专业服务让我们的企业税务管理变得轻松高效。他们的团队不仅专业知识丰富，而且服务态度极佳。",
    author: "张先生",
    position: "科技公司CEO",
    company: "创新科技有限公司",
    rating: 5,
  },
  {
    quote:
      "作为一名小企业主，我一直在寻找可靠的会计服务。HTPA恒泰会计师事务所不仅帮我解决了复杂的税务问题，还为我提供了宝贵的财务建议。",
    author: "李女士",
    position: "创始人",
    company: "优品家居",
    rating: 5,
  },
  {
    quote:
      "我已经与HTPA恒泰会计师事务所合作超过5年了。他们的专业知识和个性化服务让我的个人税务管理变得简单明了。强烈推荐！",
    author: "王先生",
    position: "自由职业者",
    company: "",
    rating: 5,
  },
  {
    quote:
      "HTPA恒泰会计师事务所的国际税务服务帮助我们成功拓展了海外业务。他们对跨境税务的深入了解为我们节省了大量时间和资金。",
    author: "陈女士",
    position: "财务总监",
    company: "环球贸易集团",
    rating: 5,
  },
  {
    quote: "在HTPA恒泰会计师事务所的帮助下，我们成功优化了企业税务结构，合法节省了大量税款。他们的专业团队值得信赖。",
    author: "刘先生",
    position: "总经理",
    company: "恒兴建筑有限公司",
    rating: 5,
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { t } = useLanguage()

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            <span className="text-gradient-gold">{t("testimonials.title")}</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">{t("testimonials.subtitle")}</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="p-8 h-full border-none shadow-lg bg-black border border-htpa-gold/20">
                    <div className="flex flex-col h-full">
                      <Quote className="h-12 w-12 text-htpa-gold/30 mb-6" />
                      <p className="text-lg mb-8 flex-grow italic text-gray-300">"{testimonial.quote}"</p>
                      <div className="mt-auto">
                        <div className="flex mb-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < testimonial.rating ? "text-htpa-gold fill-htpa-gold" : "text-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="font-semibold text-white">{testimonial.author}</p>
                        <p className="text-sm text-gray-400">
                          {testimonial.position}
                          {testimonial.company && `, ${testimonial.company}`}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full h-10 w-10 border-htpa-gold text-htpa-gold hover:bg-htpa-gold/10 hover:border-htpa-gold-light"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>

            {/* Indicators */}
            <div className="flex items-center space-x-2 mx-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index ? "w-6 bg-htpa-gold" : "w-2 bg-htpa-gold/30"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full h-10 w-10 border-htpa-gold text-htpa-gold hover:bg-htpa-gold/10 hover:border-htpa-gold-light"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
