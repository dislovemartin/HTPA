"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState<string | undefined>(undefined)
  const [step, setStep] = useState(1)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { t } = useLanguage()

  const availableTimes = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    // In a real implementation, this would send the booking data to a server
  }

  const resetModal = () => {
    setStep(1)
    setDate(undefined)
    setTime(undefined)
    setFormSubmitted(false)
  }

  const handleClose = () => {
    resetModal()
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] bg-black text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center text-gold">
            {formSubmitted ? "预约成功！" : "预约免费咨询 Book a Free Consultation"}
          </DialogTitle>
          <DialogDescription className="text-center text-gray-300">
            {formSubmitted
              ? "我们已收到您的预约请求，将尽快与您确认。"
              : "选择您方便的时间，我们的专业团队将为您提供一对一咨询服务。"}
          </DialogDescription>
        </DialogHeader>

        {formSubmitted ? (
          <div className="flex flex-col items-center py-6">
            <div className="w-16 h-16 bg-gray-950 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gold">预约已确认</h3>
            <p className="text-gray-300 text-center mb-6">
              {date && time ? `您已预约 ${format(date, "yyyy年MM月dd日")} ${time}` : "您的预约已提交"}
            </p>
            <Button onClick={handleClose} className="bg-[#D7AB5E] hover:bg-[#C99B4E] text-white">
              完成 Done
            </Button>
          </div>
        ) : (
          <>
            {step === 1 && (
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">选择日期 Select Date</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal text-gray-300",
                          !date && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4 text-gold" />
                        {date ? format(date, "PPP") : "选择日期 Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-black border-gray-900">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => {
                          // Disable past dates and weekends
                          const now = new Date()
                          now.setHours(0, 0, 0, 0)
                          const day = date.getDay()
                          return date < now || day === 0
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {date && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">选择时间 Select Time</label>
                    <div className="grid grid-cols-4 gap-2">
                      {availableTimes.map((t) => (
                        <Button
                          key={t}
                          variant={time === t ? "default" : "outline"}
                          className={time === t ? "bg-[#D7AB5E] hover:bg-[#C99B4E]" : ""}
                          onClick={() => setTime(t)}
                        >
                          {t}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex justify-end pt-4">
                  <Button
                    onClick={() => setStep(2)}
                    disabled={!date || !time}
                    className="bg-[#D7AB5E] hover:bg-[#C99B4E] text-white"
                  >
                    下一步 Next
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-4 py-4">
                <div className="flex items-center space-x-2 bg-gray-950 p-2 rounded-md mb-4">
                  <Clock className="h-5 w-5 text-[#D7AB5E]" />
                  <span className="text-sm text-gray-300">
                    您已选择: {date && format(date, "yyyy年MM月dd日")} {time}
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      姓名 Name <span className="text-red-500">*</span>
                    </label>
                    <Input id="name" placeholder="您的姓名" required className="bg-black border-gray-700 text-white" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                      电话 Phone <span className="text-red-500">*</span>
                    </label>
                    <Input id="phone" placeholder="您的电话" required className="bg-black border-gray-700 text-white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    邮箱 Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="您的邮箱"
                    className="bg-black border-gray-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-gray-300">
                    服务类型 Service Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    className="w-full rounded-md border border-gray-700 bg-black px-3 py-2 text-white focus:border-[#D7AB5E] focus:outline-none focus:ring-1 focus:ring-[#D7AB5E]"
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
                    备注 Notes
                  </label>
                  <Textarea
                    id="message"
                    placeholder="请简要描述您的需求"
                    rows={3}
                    className="bg-black border-gray-700 text-white"
                  />
                </div>

                <div className="flex justify-between pt-4">
                  <Button type="button" variant="outline" onClick={() => setStep(1)} className="text-gray-300">
                    返回 Back
                  </Button>
                  <Button type="submit" className="bg-[#D7AB5E] hover:bg-[#C99B4E] text-white">
                    确认预约 Confirm
                  </Button>
                </div>
              </form>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
