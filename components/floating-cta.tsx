"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import BookingModal from "@/components/booking-modal"

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      // Show the floating CTA after scrolling down 500px
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 animate-fade-in flex flex-col space-y-3">
        <a
          href="tel:+14161234567"
          className="gold-button shadow-lg rounded-full p-3 flex items-center justify-center animate-pulse-gold"
          aria-label="Call us"
        >
          <Phone className="h-6 w-6" />
        </a>
        <Button
          className="gold-button shadow-lg rounded-full p-3"
          onClick={() => setIsBookingOpen(true)}
          aria-label="Book a consultation"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile-specific bottom bar (visible only on small screens) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black shadow-lg border-t border-htpa-gold/20 z-50 py-2 px-4">
        <div className="flex justify-between">
          <a href="tel:+14161234567" className="flex-1 flex flex-col items-center justify-center text-htpa-gold">
            <Phone className="h-5 w-5 mb-1" />
            <span className="text-xs">一键拨打</span>
          </a>
          <Button
            className="flex-1 flex flex-col items-center justify-center bg-transparent hover:bg-transparent text-htpa-gold"
            onClick={() => setIsBookingOpen(true)}
          >
            <MessageSquare className="h-5 w-5 mb-1" />
            <span className="text-xs">免费咨询</span>
          </Button>
        </div>
      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}
