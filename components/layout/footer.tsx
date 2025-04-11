import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import Logo from "@/components/ui/logo"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black to-neutral-950 border-t border-gold-900/20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-600/5 rounded-full filter blur-[100px] opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-600/5 rounded-full filter blur-[80px] opacity-20"></div>

      <div className="container mx-auto px-4 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Logo />
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed">
              我们是一家专业的会计师事务所，致力于为客户提供高质量的财务、税务和审计服务，帮助您实现财务目标并确保合规运营。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-500 hover:text-gold-400 transition-colors duration-300">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-neutral-500 hover:text-gold-400 transition-colors duration-300">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-neutral-500 hover:text-gold-400 transition-colors duration-300">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-neutral-500 hover:text-gold-400 transition-colors duration-300">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg after:content-[''] after:block after:w-10 after:h-0.5 after:bg-gold-600 after:mt-2">
              服务项目
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-gold-400 transition-colors duration-300 text-sm flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gold-600 rounded-full inline-block mr-2"></span>
                  财务审计与鉴证
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-gold-400 transition-colors duration-300 text-sm flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gold-600 rounded-full inline-block mr-2"></span>
                  税务规划与申报
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-gold-400 transition-colors duration-300 text-sm flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gold-600 rounded-full inline-block mr-2"></span>
                  企业注册与咨询
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-gold-400 transition-colors duration-300 text-sm flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gold-600 rounded-full inline-block mr-2"></span>
                  财务报表编制
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-gold-400 transition-colors duration-300 text-sm flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-gold-600 rounded-full inline-block mr-2"></span>
                  资产评估与管理
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg after:content-[''] after:block after:w-10 after:h-0.5 after:bg-gold-600 after:mt-2">
              联系我们
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-gold-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-neutral-400 text-sm">20 Bamburgh Circle, Scarborough, ON M1W 3Y5</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-gold-600 mr-3 flex-shrink-0" />
                <span className="text-neutral-400 text-sm">+1 (416) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-gold-600 mr-3 flex-shrink-0" />
                <span className="text-neutral-400 text-sm">contact@htpa.ca</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg after:content-[''] after:block after:w-10 after:h-0.5 after:bg-gold-600 after:mt-2">
              订阅资讯
            </h4>
            <p className="text-neutral-400 text-sm">订阅我们的电子通讯，获取最新的财税资讯和专业建议。</p>
            <div className="flex">
              <Input
                type="email"
                placeholder="您的邮箱地址"
                className="bg-neutral-900 border-gold-900/30 focus:border-gold-600 rounded-r-none text-sm"
              />
              <Button variant="gold" size="icon" className="rounded-l-none">
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-xs">
            &copy; {new Date().getFullYear()} HTPA 恒泰会计师事务所. 保留所有权利.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-neutral-500 hover:text-gold-400 text-xs transition-colors duration-300">
              隐私政策
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-gold-400 text-xs transition-colors duration-300">
              服务条款
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-gold-400 text-xs transition-colors duration-300">
              网站地图
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
