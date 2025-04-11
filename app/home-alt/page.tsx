import PageLayout from "@/components/layout/page-layout"
import AnimatedHeroSection from "@/components/sections/animated-hero-section"
import ServicesSection from "@/components/sections/services-section"
import WhyChooseUsSection from "@/components/sections/why-choose-us-section"
import StatsSection from "@/components/sections/stats-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import FaqSection from "@/components/sections/faq-section"
import ContactSection from "@/components/sections/contact-section"

export default function AlternativeHome() {
  return (
    <PageLayout className="p-0">
      <AnimatedHeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </PageLayout>
  )
}
