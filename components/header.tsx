"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = (lang: "zh-CN" | "en" | "zh-HK") => {
    setLanguage(lang)
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-htpa-black/95 backdrop-blur-md shadow-md" : "bg-htpa-black/80 backdrop-blur-sm",
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative h-16 w-48">
            <Image src="/images/htpa-logo.png" alt="HTPA 恒泰会计师事务所" fill className="object-contain" priority />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-6 md:flex">
          <Link href="/" className="text-white hover:text-htpa-gold transition-colors duration-200">
            {t("nav.home")}
          </Link>
          <Link href="/about" className="text-white hover:text-htpa-gold transition-colors duration-200">
            {t("nav.about")}
          </Link>
          <Link href="/services" className="text-white hover:text-htpa-gold transition-colors duration-200">
            {t("nav.services")}
          </Link>
          <Link href="/testimonials" className="text-white hover:text-htpa-gold transition-colors duration-200">
            {t("nav.testimonials")}
          </Link>
          <Link href="/faq" className="text-white hover:text-htpa-gold transition-colors duration-200">
            {t("nav.faq")}
          </Link>
          <Link href="/contact" className="text-white hover:text-htpa-gold transition-colors duration-200">
            {t("nav.contact")}
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:+14161234567"
            className="flex items-center text-white hover:text-htpa-gold transition-colors duration-200"
          >
            <Phone className="h-4 w-4 mr-2" />
            <span className="font-medium">416-123-4567</span>
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-white hover:text-htpa-gold">
                <Globe className="h-4 w-4" />
                <span>{language === "zh-CN" ? "中文" : language === "en" ? "EN" : "粤语"}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-htpa-black border-htpa-gold">
              <DropdownMenuItem onClick={() => toggleLanguage("zh-CN")} className="text-white hover:text-htpa-gold">
                {t("lang.zh-CN")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleLanguage("en")} className="text-white hover:text-htpa-gold">
                {t("lang.en")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleLanguage("zh-HK")} className="text-white hover:text-htpa-gold">
                {t("lang.zh-HK")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="gold-button">{t("hero.cta")}</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <a
            href="tel:+14161234567"
            className="flex items-center justify-center h-10 w-10 rounded-md text-white hover:text-htpa-gold transition-colors"
            aria-label="Call us"
          >
            <Phone className="h-5 w-5" />
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1 p-0 h-10 w-10 text-white hover:text-htpa-gold"
              >
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-htpa-black border-htpa-gold">
              <DropdownMenuItem onClick={() => toggleLanguage("zh-CN")} className="text-white hover:text-htpa-gold">
                {t("lang.zh-CN")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleLanguage("en")} className="text-white hover:text-htpa-gold">
                {t("lang.en")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleLanguage("zh-HK")} className="text-white hover:text-htpa-gold">
                {t("lang.zh-HK")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            className="flex items-center justify-center h-10 w-10 rounded-md text-white hover:text-htpa-gold transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="container mx-auto px-4 pb-4 md:hidden animate-fade-in">
          <nav className="flex flex-col space-y-4 bg-htpa-black-light rounded-lg p-4 shadow-lg border border-htpa-gold/20">
            <Link
              href="/"
              className="text-white hover:text-htpa-gold transition-colors p-2 rounded-md hover:bg-htpa-black"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-htpa-gold transition-colors p-2 rounded-md hover:bg-htpa-black"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-htpa-gold transition-colors p-2 rounded-md hover:bg-htpa-black"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.services")}
            </Link>
            <Link
              href="/testimonials"
              className="text-white hover:text-htpa-gold transition-colors p-2 rounded-md hover:bg-htpa-black"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.testimonials")}
            </Link>
            <Link
              href="/faq"
              className="text-white hover:text-htpa-gold transition-colors p-2 rounded-md hover:bg-htpa-black"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.faq")}
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-htpa-gold transition-colors p-2 rounded-md hover:bg-htpa-black"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
            <Button className="gold-button w-full mt-2">{t("hero.cta")}</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
