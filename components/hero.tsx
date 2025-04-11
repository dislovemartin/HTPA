"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-htpa-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 -translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-htpa-gold/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 w-96 h-96 bg-htpa-gold/10 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              <span className="text-gradient-gold">{t("hero.title")}</span>
            </h1>
            <p className="text-lg text-gray-300">{t("hero.subtitle")}</p>
            <div className="flex space-x-4">
              <Button className="gold-button text-lg py-3 px-8">{t("hero.cta")}</Button>
              <Button variant="outline" className="text-white border-htpa-gold hover:bg-htpa-gold/10">
                {t("hero.cta.secondary")}
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-htpa-gold to-htpa-gold-light opacity-30 blur"></div>
            <div className="relative overflow-hidden rounded-lg bg-gray-950 shadow-xl border border-htpa-gold/20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-image-j1T06Fdzw4Ggya9ITt7w09y069.png"
                alt="HTPA Accounting Services"
                className="w-full h-auto"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
