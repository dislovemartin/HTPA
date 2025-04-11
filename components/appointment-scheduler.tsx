"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { format } from "date-fns"
import { useAnalytics } from "@/hooks/use-analytics"

export default function AppointmentScheduler() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [availableSlots, setAvailableSlots] = useState<string[]>([])
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [bookingSuccess, setBookingSuccess] = useState(false)
  const { trackEvent } = useAnalytics()

  // Mock available slots for now
  useEffect(() => {
    if (!selectedDate) return

    // In a real implementation, this would fetch from an API
    const mockSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"]
    setAvailableSlots(mockSlots)
  }, [selectedDate])

  const handleBookAppointment = async () => {
    if (!selectedDate || !selectedSlot) return

    setLoading(true)
    try {
      // In a real implementation, this would call an API
      // For now, we'll just simulate a successful booking
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Send confirmation email
      await fetch("/api/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          templateName: "appointmentConfirmation",
          data: {
            name: "Client Name", // Get from form
            service: "Tax Consultation",
            date: format(selectedDate, "yyyy年MM月dd日"),
            time: selectedSlot,
            accountant: "Zhang Wei",
            requiredDocuments: [
              "Personal identification",
              "Previous tax returns",
              "Income statements",
              "Expense receipts",
            ],
          },
          recipient: "client@example.com", // Get from form
        }),
      })

      setBookingSuccess(true)

      // Track the appointment booking in analytics
      trackEvent("book_appointment", {
        appointment_date: format(selectedDate, "yyyy-MM-dd"),
        appointment_time: selectedSlot,
      })
    } catch (error) {
      console.error("Error booking appointment:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="border-gold-900/30 bg-neutral-900">
      <CardHeader>
        <CardTitle className="text-white">预约咨询 Book a Consultation</CardTitle>
      </CardHeader>
      <CardContent>
        {bookingSuccess ? (
          <div className="text-center py-8">
            <div className="text-green-500 text-4xl mb-4">✓</div>
            <h3 className="text-xl font-semibold text-white mb-2">预约成功！</h3>
            <p className="text-gray-400">
              您已成功预约 {format(selectedDate!, "yyyy年MM月dd日")} {selectedSlot} 的咨询。
              我们已发送确认邮件至您的邮箱，请查收。
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-400 mb-2">选择日期 Select Date</label>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                disabled={(date) => {
                  // Disable past dates, Sundays, and full days
                  const now = new Date()
                  now.setHours(0, 0, 0, 0)
                  const day = date.getDay()
                  return date < now || day === 0
                }}
                className="bg-black border border-gold-900/30 rounded-md p-3"
              />
            </div>

            {selectedDate && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-400 mb-2">选择时间 Select Time</label>
                {loading ? (
                  <div className="flex justify-center py-4">
                    <div className="w-6 h-6 border-2 border-gold-500/30 border-t-gold-500 rounded-full animate-spin"></div>
                  </div>
                ) : availableSlots.length > 0 ? (
                  <div className="grid grid-cols-3 gap-2">
                    {availableSlots.map((slot) => (
                      <Button
                        key={slot}
                        variant={selectedSlot === slot ? "default" : "outline"}
                        className={selectedSlot === slot ? "bg-gold-500 hover:bg-gold-600" : ""}
                        onClick={() => setSelectedSlot(slot)}
                      >
                        {slot}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-400 text-center py-2">所选日期没有可用时段，请选择其他日期。</p>
                )}
              </div>
            )}

            {selectedDate && selectedSlot && (
              <Button
                onClick={handleBookAppointment}
                disabled={loading}
                className="w-full bg-gold-500 hover:bg-gold-600 text-black"
              >
                {loading ? "处理中..." : "确认预约 Confirm Booking"}
              </Button>
            )}
          </>
        )}
      </CardContent>
    </Card>
  )
}
