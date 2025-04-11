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
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background/80 backdrop-blur-sm",
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
          <Link href="/" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
            {t("nav.home")}
          </Link>
          <Link href="/about" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
            {t("nav.about")}
          </Link>
          <Link href="/services" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
            {t("nav.services")}
          </Link>
          <Link href="/testimonials" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
            {t("nav.testimonials")}
          </Link>
          <Link href="/faq" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
            {t("nav.faq")}
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
            {t("nav.contact")}
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="tel:+14161234567"
            className="flex items-center text-foreground hover:text-primary transition-colors duration-200"
          >
            <Phone className="h-4 w-4 mr-2" />
            <span className="font-medium">416-123-4567</span>
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-foreground hover:text-primary">
                <Globe className="h-4 w-4" />
                <span>{language === "zh-CN" ? "中文" : language === "en" ? "EN" : "粤语"}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-background border-border">
              <DropdownMenuItem onClick={() => toggleLanguage("zh-CN")} className="text-foreground hover:text-primary focus:text-primary focus:bg-accent">
                {t("lang.zh-CN")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleLanguage("en")} className="text-foreground hover:text-primary focus:text-primary focus:bg-accent">
                {t("lang.en")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleLanguage("zh-HK")} className="text-foreground hover:text-primary focus:text-primary focus:bg-accent">
                {t("lang.zh-HK")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="btn-primary">{t("hero.cta")}</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 md:hidden">
          <a
            href="tel:+14161234567"
            className="flex items-center justify-center h-10 w-10 rounded-md text-foreground hover:text-primary transition-colors"
            aria-label="Call us"
          >
            <Phone className="h-5 w-5" />
          </a>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1 p-0 h-10 w-10 text-foreground hover:text-primary"
              >
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-background border-border">
              <DropdownMenuItem onClick={() => toggleLanguage("zh-CN")} className="text-foreground hover:text-primary focus:text-primary focus:bg-accent">
                {t("lang.zh-CN")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleLanguage("en")} className="text-foreground hover:text-primary focus:text-primary focus:bg-accent">
                {t("lang.en")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleLanguage("zh-HK")} className="text-foreground hover:text-primary focus:text-primary focus:bg-accent">
                {t("lang.zh-HK")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button
            className="flex items-center justify-center h-10 w-10 rounded-md text-foreground hover:text-primary transition-colors"
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
          <nav className="flex flex-col space-y-4 bg-card rounded-lg p-4 shadow-lg border border-border">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.home")}
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="/services"
              className="text-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.services")}
            </Link>
            <Link
              href="/testimonials"
              className="text-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.testimonials")}
            </Link>
            <Link
              href="/faq"
              className="text-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.faq")}
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("nav.contact")}
            </Link>
            <Button className="btn-primary w-full mt-2">{t("hero.cta")}</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
