"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import PageLayout from "@/components/layout/page-layout"
import PageHeader from "@/components/ui/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send the form data to a server
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  return (
    <PageLayout>
      <PageHeader
        title="联系 我们"
        subtitle="无论您有任何问题或需求，都可以通过以下方式联系我们。我们的团队将竭诚为您服务。"
      />

      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-600/5 rounded-full filter blur-[100px] opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-600/5 rounded-full filter blur-[80px] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start">
                <div className="p-3 bg-gold-900/20 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">地址</h3>
                  <p className="text-gray-400">20 Bamburgh Circle, Scarborough, ON M1W 3Y5</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-gold-900/20 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">电话</h3>
                  <p className="text-gray-400">+1 (416) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-gold-900/20 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">邮箱</h3>
                  <p className="text-gray-400">contact@htpa.ca</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-gold-900/20 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">营业时间</h3>
                  <p className="text-gray-400">周一至周五: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-400">周六: 10:00 AM - 2:00 PM</p>
                  <p className="text-gray-400">周日: 休息</p>
                </div>
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden border border-gold-900/30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.1990411952!2d-79.31690492346847!3d43.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d3f1af6d5bbf%3A0x4e0a3ff25e0e8ce4!2s20%20Bamburgh%20Cir%2C%20Scarborough%2C%20ON%20M1W%203Y5%2C%20Canada!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-neutral-900 border border-gold-900/30 rounded-lg p-8"
            >
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="rounded-full bg-green-900/20 p-3 mb-4">
                    <CheckCircle className="h-12 w-12 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">消息已发送</h3>
                  <p className="text-gray-400 max-w-md">
                    感谢您的咨询！我们已收到您的信息，将在24小时内与您联系。如有紧急事项，请直接致电我们。
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-semibold text-white mb-6">发送消息</h3>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-400">
                          姓名 <span className="text-gold-500">*</span>
                        </label>
                        <Input
                          id="name"
                          placeholder="您的姓名"
                          required
                          className="bg-black border-gold-900/30 text-white focus:border-gold-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-400">
                          邮箱 <span className="text-gold-500">*</span>
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="您的邮箱"
                          required
                          className="bg-black border-gold-900/30 text-white focus:border-gold-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-400">
                        电话
                      </label>
                      <Input
                        id="phone"
                        placeholder="您的电话"
                        className="bg-black border-gold-900/30 text-white focus:border-gold-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-400">
                        主题 <span className="text-gold-500">*</span>
                      </label>
                      <Input
                        id="subject"
                        placeholder="消息主题"
                        required
                        className="bg-black border-gold-900/30 text-white focus:border-gold-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-400">
                        消息 <span className="text-gold-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        placeholder="请输入您的消息"
                        rows={4}
                        required
                        className="bg-black border-gold-900/30 text-white focus:border-gold-500"
                      />
                    </div>
                    <Button type="submit" variant="gold" className="w-full">
                      发送消息
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
