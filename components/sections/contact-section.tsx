"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
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
              联系<span className="text-gold-500">我们</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              无论您有任何问题或需求，都可以通过以下方式联系我们。我们的团队将竭诚为您服务。
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-black border border-gold-900/30 rounded-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">发送消息</h3>
            <form className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">
                    姓名 <span className="text-gold-500">*</span>
                  </label>
                  <Input
                    id="name"
                    placeholder="您的姓名"
                    required
                    className="bg-neutral-900 border-gold-900/30 text-white focus:border-gold-500"
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
                    className="bg-neutral-900 border-gold-900/30 text-white focus:border-gold-500"
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
                  className="bg-neutral-900 border-gold-900/30 text-white focus:border-gold-500"
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
                  className="bg-neutral-900 border-gold-900/30 text-white focus:border-gold-500"
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
                  className="bg-neutral-900 border-gold-900/30 text-white focus:border-gold-500"
                />
              </div>
              <Button type="submit" variant="gold" className="w-full">
                发送消息
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-black border border-gold-900/30 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">联系方式</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-gold-900/20 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gold-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">地址</h4>
                    <p className="text-gray-400">20 Bamburgh Circle, Scarborough, ON M1W 3Y5</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-gold-900/20 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gold-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">电话</h4>
                    <p className="text-gray-400">+1 (416) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-gold-900/20 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gold-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">邮箱</h4>
                    <p className="text-gray-400">contact@htpa.ca</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-gold-900/20 rounded-lg mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gold-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">营业时间</h4>
                    <p className="text-gray-400">周一至周五: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-400">周六: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-400">周日: 休息</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black border border-gold-900/30 rounded-lg overflow-hidden h-64">
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
        </div>
      </div>
    </section>
  )
}
