"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUp, Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function Footer() {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-htpa-black text-white relative">
      {/* Scroll to top button */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
        <Button
          onClick={scrollToTop}
          className="h-10 w-10 rounded-full gold-button p-0 shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative h-20 w-48">
                <Image src="/images/htpa-logo.png" alt="HTPA 恒泰会计师事务所" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-gray-400">专业财税，从不妥协！让CPA持证会计师为您的未来保驾护航！</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-htpa-gold transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-htpa-gold transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-htpa-gold transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-htpa-gold transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-htpa-gold">服务 Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-htpa-gold transition-colors">
                  会计服务 Accounting Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-htpa-gold transition-colors">
                  商业服务 Business Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-htpa-gold transition-colors">
                  税务服务 Tax Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-htpa-gold transition-colors">
                  贷款申请 Loan Applications
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-htpa-gold transition-colors">
                  福利申报 Benefit Applications
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-htpa-gold">关于我们 About Us</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-htpa-gold transition-colors">
                  公司简介 Company Profile
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-htpa-gold transition-colors">
                  团队成员 Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-htpa-gold transition-colors">
                  职业机会 Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-htpa-gold transition-colors">
                  客户评价 Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-htpa-gold transition-colors">
                  常见问题 FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-htpa-gold">联系我们 Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-htpa-gold mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">20 Bamburgh Circle, Scarborough, ON M1W 3Y5</span>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-htpa-gold mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">416-123-4567</span>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-htpa-gold mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">info@htpa.ca</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-htpa-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} HTPA 恒泰会计师事务所. {t("footer.rights")}
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-htpa-gold text-sm transition-colors">
                {t("footer.privacy")}
              </Link>
              <Link href="#" className="text-gray-400 hover:text-htpa-gold text-sm transition-colors">
                {t("footer.terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
