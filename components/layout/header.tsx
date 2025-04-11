"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "@/components/ui/logo"
import LanguageSwitcher from "@/components/ui/language-switcher"

const navItems = [
  { name: "首页", href: "/" },
  { name: "服务", href: "/services" },
  { name: "关于我们", href: "/about" },
  { name: "团队", href: "/team" },
  { name: "博客", href: "/blog" },
  { name: "常见问题", href: "/faq" },
  { name: "联系我们", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-gradient-to-r from-black/90 to-neutral-900/90 backdrop-blur-md py-3 shadow-lg shadow-gold-900/10"
          : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative z-10">
            <Logo scrolled={scrolled} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-gold-400 transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button variant="gold" size="sm" className="rounded-full px-6 font-medium tracking-wide">
              <Link href="/contact">预约咨询</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 p-2 text-white focus:outline-none"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gradient-to-b from-black to-neutral-900 border-t border-gold-900/20"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-gold-400 py-2 border-b border-gold-900/10 flex justify-between items-center"
                  >
                    {item.name}
                    <ChevronDown size={16} className="text-gold-600" />
                  </Link>
                ))}
                <Button variant="gold" size="lg" className="mt-4 w-full rounded-full font-medium tracking-wide">
                  <Link href="/contact" className="w-full" onClick={() => setIsOpen(false)}>
                    预约咨询
                  </Link>
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
