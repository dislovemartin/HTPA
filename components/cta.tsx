"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export default function CTA() {
  const { t } = useLanguage()

  return (
    <section className="bg-htpa-gold text-htpa-black py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("cta.title")}</h2>
          <p className="text-xl mb-8">{t("cta.subtitle")}</p>
          <Button
            size="lg"
            className="bg-htpa-black text-htpa-gold hover:bg-htpa-black-light shadow-lg border border-htpa-gold"
          >
            {t("cta.button")}
          </Button>
        </div>
      </div>
    </section>
  )
}
