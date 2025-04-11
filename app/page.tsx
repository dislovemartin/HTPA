import PageLayout from "@/components/layout/page-layout"
import AboutSection from "@/components/sections/about-section"
import ContactSection from "@/components/sections/contact-section"
import FaqSection from "@/components/sections/faq-section"
import HeroSection from "@/components/sections/hero-section"
import ServicesSection from "@/components/sections/services-section"
import StatsSection from "@/components/sections/stats-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import WhyChooseUsSection from "@/components/sections/why-choose-us-section"

export default function Home() {
  return (
    <PageLayout showParticles={true}>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <StatsSection />
      <AboutSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </PageLayout>
  )
}
