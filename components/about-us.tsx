"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

export default function AboutUs() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-htpa-gold to-htpa-gold-light opacity-30 blur"></div>
            <div className="relative overflow-hidden rounded-lg bg-gray-950 shadow-xl border border-htpa-gold/20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Zf438awAxLFjH5BdrrEgKaWcSqR7CA.png"
                alt="HTPA Accounting Team"
                className="w-full h-auto"
                width={600}
                height={400}
              />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              <span className="text-gradient-gold">{t("about.title")}</span>
            </h2>
            <p className="text-lg text-gray-300">{t("about.subtitle")}</p>
            <p className="text-lg text-gray-300">{t("about.content")}</p>
            <p className="text-lg text-gray-300">{t("about.languages")}</p>
            <Button className="gold-button text-lg py-6 px-8">{t("about.more")}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
