"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    content:
      "HTPA会计师事务所的专业团队帮助我们解决了复杂的税务问题，他们的建议为我们节省了大量的税款。非常感谢他们的专业服务！",
    author: "张先生",
    position: "科技公司CEO",
  },
  {
    content:
      "作为一名小企业主，我一直在寻找可靠的会计服务。HTPA不仅提供了高质量的财务报表，还为我的业务提供了宝贵的战略建议。",
    author: "李女士",
    position: "餐饮企业老板",
  },
  {
    content:
      "我们公司的税务申报一直由HTPA处理，他们的专业知识和细致工作确保了我们的合规性，同时最大限度地减少了我们的税务负担。",
    author: "王先生",
    position: "房地产投资者",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-neutral-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-600/5 rounded-full filter blur-[100px] opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-600/5 rounded-full filter blur-[80px] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              客户<span className="text-gold-500">评价</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              听听我们的客户如何评价HTPA恒泰会计师事务所的专业服务和团队。
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-gold-500/20 z-0">
              <Quote size={80} />
            </div>

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-black border border-gold-900/30 rounded-lg p-8 md:p-12 relative z-10 min-h-[250px] flex flex-col justify-center"
            >
              <p className="text-xl md:text-2xl text-white italic mb-8 leading-relaxed">
                {testimonials[currentIndex].content}
              </p>
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 rounded-full bg-gold-900/30 flex items-center justify-center text-gold-500 font-semibold mr-4 flex-shrink-0">
                  {testimonials[currentIndex].author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonials[currentIndex].author}</div>
                  <div className="text-gray-400 text-sm">{testimonials[currentIndex].position}</div>
                </div>
              </div>
            </motion.div>

            <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-[-20px] md:px-[-40px] z-20">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="bg-black/50 hover:bg-gold-900/30 border-gold-900/30 hover:border-gold-500/50 text-gold-500 rounded-full backdrop-blur-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="bg-black/50 hover:bg-gold-900/30 border-gold-900/30 hover:border-gold-500/50 text-gold-500 rounded-full backdrop-blur-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </Button>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors duration-300",
                    currentIndex === index ? "bg-gold-500 scale-125" : "bg-neutral-700 hover:bg-neutral-600"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
