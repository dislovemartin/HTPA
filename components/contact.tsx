"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { submitContactForm } from "@/app/actions/contact-actions"
import { useAnalytics } from "@/hooks/use-analytics"

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { t } = useLanguage()
  const { trackEvent } = useAnalytics()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    // Track form submission event
    trackEvent("generate_lead", {
      service_type: formData.get("service"),
      form_id: "contact_main",
    })

    // Call the server action
    const result = await submitContactForm(formData)

    if (result.success) {
      setFormSubmitted(true)
      form.reset()
      setTimeout(() => setFormSubmitted(false), 5000)
    } else {
      // Handle error
      alert(result.message)
    }
  }

  return (
    <section id="contact" className="section-padding bg-htpa-black-light relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-htpa-gold/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            <span className="text-gradient-gold">{t("contact.title")}</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">{t("contact.subtitle")}</p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <Card className="border-none shadow-lg overflow-hidden bg-htpa-black border border-htpa-gold/20">
              <CardHeader className="bg-htpa-gold text-htpa-black pb-3">
                <CardTitle>联系方式 Contact Information</CardTitle>
                <CardDescription className="text-htpa-black/80">您可以通过以下方式联系我们</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-htpa-gold flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{t("contact.address")}</h3>
                    <p className="text-gray-300">20 Bamburgh Circle, Scarborough, ON M1W 3Y5</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-4 h-6 w-6 text-htpa-gold flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{t("contact.phone")}</h3>
                    <p className="text-gray-300">416-123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-htpa-gold flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{t("contact.email")}</h3>
                    <p className="text-gray-300">info@htpa.ca</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="mr-4 h-6 w-6 text-htpa-gold flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{t("contact.hours")}</h3>
                    <div className="space-y-1 text-gray-300">
                      <p>周一至周五: 9:00 AM - 6:00 PM</p>
                      <p>周六: 10:00 AM - 4:00 PM</p>
                      <p>周日: 预约制 By Appointment</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="rounded-lg overflow-hidden shadow-lg border border-htpa-gold/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.3853086240813!2d-79.3143423!3d43.7967747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d3c6a9ebb9f5%3A0x9e4a3f2d4b1e8de0!2s20%20Bamburgh%20Cir%2C%20Scarborough%2C%20ON%20M1W%203Y5%2C%20Canada!5e0!3m2!1sen!2sus!4v1712789336619!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HTPA Office Location"
              ></iframe>
            </div>
          </div>

          <div className="rounded-lg bg-htpa-black p-8 shadow-lg border-t-4 border-t-htpa-gold border border-htpa-gold/20">
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="rounded-full bg-green-900/20 p-3 mb-4">
                  <CheckCircle className="h-12 w-12 text-green-500" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">{t("contact.form.success")}</h3>
                <p className="text-gray-300 max-w-md">
                  我们已收到您的信息，将在24小时内与您联系。如有紧急事项，请直接致电我们。
                </p>
              </div>
            ) : (
              <>
                <h3 className="mb-6 text-2xl font-semibold text-white">{t("contact.form.title")}</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">
                        {t("contact.form.name")} <span className="text-htpa-gold">*</span>
                      </label>
                      <Input
                        id="name"
                        placeholder="您的姓名 Your Name"
                        required
                        className="bg-htpa-black-light border-htpa-gold/20 text-white focus:border-htpa-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        {t("contact.form.email")} <span className="text-htpa-gold">*</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="您的邮箱 Your Email"
                        required
                        className="bg-htpa-black-light border-htpa-gold/20 text-white focus:border-htpa-gold"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                      {t("contact.form.phone")}
                    </label>
                    <Input
                      id="phone"
                      placeholder="您的电话 Your Phone"
                      className="bg-htpa-black-light border-htpa-gold/20 text-white focus:border-htpa-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-gray-300">
                      {t("contact.form.service")} <span className="text-htpa-gold">*</span>
                    </label>
                    <select
                      id="service"
                      className="w-full rounded-md border border-htpa-gold/20 bg-htpa-black-light px-3 py-2 text-white focus:border-htpa-gold focus:outline-none focus:ring-1 focus:ring-htpa-gold"
                      required
                    >
                      <option value="">请选择服务类型 Select Service Type</option>
                      <option value="personal-tax">个人所得税申报 Personal Tax Filing</option>
                      <option value="corporate-tax">公司纳税申报 Corporate Tax Filing</option>
                      <option value="audit">税务审计 Tax Audit</option>
                      <option value="business-reg">企业注册 Business Registration</option>
                      <option value="financial-statement">财务报表服务 Financial Statement Services</option>
                      <option value="benefits">福利申报 Benefit Applications</option>
                      <option value="loan">贷款申请 Loan Applications</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      {t("contact.form.message")} <span className="text-htpa-gold">*</span>
                    </label>
                    <Textarea
                      id="message"
                      placeholder="请详细描述您的需求 Please describe your needs in detail"
                      rows={4}
                      required
                      className="bg-htpa-black-light border-htpa-gold/20 text-white focus:border-htpa-gold"
                    />
                  </div>
                  <Button type="submit" className="w-full gold-button shadow-md hover:shadow-lg transition-all">
                    {t("contact.form.submit")}
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    提交此表格即表示您同意我们的隐私政策，并允许我们使用您提供的信息与您联系。
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
