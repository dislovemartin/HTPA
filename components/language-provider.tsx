"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "zh-CN" | "en" | "zh-HK"
type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  "zh-CN": {
    // Navigation
    "nav.home": "首页",
    "nav.about": "关于我们",
    "nav.services": "服务项目",
    "nav.testimonials": "客户推荐",
    "nav.faq": "常见问题",
    "nav.contact": "联系我们",
    "nav.blog": "财税资讯",

    // Hero Section
    "hero.title": "CPA专业持证会计师，助您精准掌控每一分资产！",
    "hero.subtitle": "近20年会计财经领域经验，为您提供全方位财税服务",
    "hero.cta": "预约咨询",
    "hero.cta.secondary": "了解更多",

    // Services
    "services.title": "我们的服务",
    "services.subtitle":
      "HTPA恒泰会计师事务所依托于恒泰集团近40年的深厚的背景和多年的商业、金融领域实践，拥有近20年的综合大型企业报税经营经验。",
    "services.accounting": "会计服务",
    "services.business": "商业服务",
    "services.tax": "税务服务",
    "services.more": "了解更多",

    // Why Choose Us
    "why.title": "为什么选择HTPA恒泰会计师事务所？",
    "why.subtitle":
      "在安省，作为该领域的领军代表，HTPA恒泰会计师事务所凭借卓越的专业知识与高度负责的态度，以客户利益为核心，定制高效、合法的解决方案。",
    "why.reason1": "CPA认证专家坐镇",
    "why.reason1.desc": "专业值得信赖，所有会计业务均由持证CPA主理，确保严谨、合法、合规。",
    "why.reason2": "个性化定制方案",
    "why.reason2.desc": "不同客户，不同需求，我们为您打造最优财税策略。",
    "why.reason3": "全方位税务支持",
    "why.reason3.desc": "无论是个人、创业者，还是大型企业，我们都能提供从报税到税务筹划的全方位服务。",
    "why.reason4": "精准高效，零错误率",
    "why.reason4.desc": "我们不只是做账，更是您在财务管理上的战略伙伴！",

    // About
    "about.title": "关于HTPA恒泰会计师事务所",
    "about.subtitle":
      "HTPA恒泰会计师事务所依托于恒泰集团近40年的深厚的背景和多年的商业、金融领域实践，拥有近20年的综合大型企业报税经营，我们精通各类财税服务。",
    "about.content":
      "在这个瞬息万变的经济环境中，财务管理不仅关乎企业存亡，更决定了个人的财富未来。HTPA恒泰会计师事务所拥有近20年会计财经领域的经验，汇聚一支持证CPA会计师和贷款经纪人（Mortgage Broker)在内的多位资深专家团队，凭借深厚的专业知识和丰富的行业经验，为个人和企业提供精准、高效、合规的会计税务与财务管理服务。",
    "about.languages": "HTPA恒泰会计师事务所提供英语、粤语和普通话服务，致力于为不同语言背景的客户提供贴心支持。",
    "about.more": "了解更多",

    // Testimonials
    "testimonials.title": "客户评价",
    "testimonials.subtitle": "听听我们的客户怎么说。以下是一些与HTPA恒泰会计师事务所合作过的客户的真实评价。",

    // Contact
    "contact.title": "联系我们",
    "contact.subtitle": "无论您是个人、初创企业，还是发展中的公司，我们都能助您轻松驾驭财税管理，迈向更高的财富巅峰！",
    "contact.address": "地址",
    "contact.phone": "电话",
    "contact.email": "电子邮件",
    "contact.hours": "营业时间",
    "contact.form.title": "发送咨询",
    "contact.form.name": "姓名",
    "contact.form.email": "邮箱",
    "contact.form.phone": "电话",
    "contact.form.service": "服务类型",
    "contact.form.message": "留言",
    "contact.form.submit": "提交",
    "contact.form.success": "感谢您的咨询！我们已收到您的信息，将在24小时内与您联系。",

    // Footer
    "footer.rights": "版权所有",
    "footer.privacy": "隐私政策",
    "footer.terms": "服务条款",

    // CTA
    "cta.title": "准备好开始了吗？",
    "cta.subtitle": "联系我们，获取专业的财税服务，让您的财务管理更加轻松高效。",
    "cta.button": "立即联系",

    // Language Switcher
    "lang.zh-CN": "简体中文",
    "lang.en": "English",
    "lang.zh-HK": "繁體中文",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.testimonials": "Testimonials",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.blog": "Blog",

    // Hero Section
    "hero.title": "Professional CPA Services to Help You Control Every Asset",
    "hero.subtitle":
      "Nearly 20 years of accounting and financial experience, providing comprehensive financial services",
    "hero.cta": "Book a Consultation",
    "hero.cta.secondary": "Learn More",

    // Services
    "services.title": "Our Services",
    "services.subtitle":
      "HTPA Accounting Firm, backed by Hengtai Group's 40 years of experience in business and finance, has nearly 20 years of comprehensive tax filing experience for large enterprises.",
    "services.accounting": "Accounting Services",
    "services.business": "Business Services",
    "services.tax": "Tax Services",
    "services.more": "Learn More",

    // Why Choose Us
    "why.title": "Why Choose HTPA Accounting Firm?",
    "why.subtitle":
      "As a leader in the field in Ontario, HTPA Accounting Firm creates efficient and legal solutions tailored to client interests, backed by excellent professional knowledge and a highly responsible attitude.",
    "why.reason1": "Certified CPA Experts",
    "why.reason1.desc":
      "Professional and trustworthy, all accounting services are handled by certified CPAs, ensuring rigor, legality, and compliance.",
    "why.reason2": "Personalized Solutions",
    "why.reason2.desc": "Different clients, different needs. We create optimal tax strategies for you.",
    "why.reason3": "Comprehensive Tax Support",
    "why.reason3.desc":
      "Whether for individuals, entrepreneurs, or large enterprises, we provide comprehensive services from tax filing to tax planning.",
    "why.reason4": "Precise, Efficient, Zero Error Rate",
    "why.reason4.desc": "We're not just accountants, but your strategic partners in financial management!",

    // About
    "about.title": "About HTPA Accounting Firm",
    "about.subtitle":
      "HTPA Accounting Firm, backed by Hengtai Group's 40 years of experience in business and finance, has nearly 20 years of comprehensive tax filing experience for large enterprises, mastering various financial services.",
    "about.content":
      "In this rapidly changing economic environment, financial management concerns not only the survival of businesses but also the future of personal wealth. HTPA Accounting Firm has nearly 20 years of experience in accounting and finance, bringing together a team of certified CPAs and mortgage brokers, providing accurate, efficient, and compliant accounting, tax, and financial management services for individuals and businesses.",
    "about.languages":
      "HTPA Accounting Firm provides services in English, Cantonese, and Mandarin, committed to providing attentive support to clients of different language backgrounds.",
    "about.more": "Learn More",

    // Testimonials
    "testimonials.title": "Testimonials",
    "testimonials.subtitle":
      "Hear what our clients have to say. Below are some genuine reviews from clients who have worked with HTPA Accounting Firm.",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle":
      "Whether you are an individual, a startup, or a developing company, we can help you navigate financial management with ease and reach greater financial heights!",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.hours": "Business Hours",
    "contact.form.title": "Send Inquiry",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone",
    "contact.form.service": "Service Type",
    "contact.form.message": "Message",
    "contact.form.submit": "Submit",
    "contact.form.success":
      "Thank you for your inquiry! We have received your information and will contact you within 24 hours.",

    // Footer
    "footer.rights": "All Rights Reserved",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",

    // CTA
    "cta.title": "Ready to Get Started?",
    "cta.subtitle":
      "Contact us to get professional financial services and make your financial management easier and more efficient.",
    "cta.button": "Contact Now",

    // Language Switcher
    "lang.zh-CN": "简体中文",
    "lang.en": "English",
    "lang.zh-HK": "繁體中文",
  },
  "zh-HK": {
    // Navigation
    "nav.home": "首頁",
    "nav.about": "關於我們",
    "nav.services": "服務項目",
    "nav.testimonials": "客戶推薦",
    "nav.faq": "常見問題",
    "nav.contact": "聯繫我們",
    "nav.blog": "財稅資訊",

    // Hero Section
    "hero.title": "CPA專業持證會計師，助您精準掌控每一分資產！",
    "hero.subtitle": "近20年會計財經領域經驗，為您提供全方位財稅服務",
    "hero.cta": "預約諮詢",
    "hero.cta.secondary": "了解更多",

    // Services
    "services.title": "我們的服務",
    "services.subtitle":
      "HTPA恒泰會計師事務所依託於恒泰集團近40年的深厚的背景和多年的商業、金融領域實踐，擁有近20年的綜合大型企業報稅經營經驗。",
    "services.accounting": "會計服務",
    "services.business": "商業服務",
    "services.tax": "稅務服務",
    "services.more": "了解更多",

    // Why Choose Us
    "why.title": "為什麼選擇HTPA恒泰會計師事務所？",
    "why.subtitle":
      "在安省，作為該領域的領軍代表，HTPA恒泰會計師事務所憑藉卓越的專業知識與高度負責的態度，以客戶利益為核心，定制高效、合法的解決方案。",
    "why.reason1": "CPA認證專家坐鎮",
    "why.reason1.desc": "專業值得信賴，所有會計業務均由持證CPA主理，確保嚴謹、合法、合規。",
    "why.reason2": "個性化定制方案",
    "why.reason2.desc": "不同客戶，不同需求，我們為您打造最優財稅策略。",
    "why.reason3": "全方位稅務支持",
    "why.reason3.desc": "無論是個人、創業者，還是大型企業，我們都能提供從報稅到稅務籌劃的全方位服務。",
    "why.reason4": "精準高效，零錯誤率",
    "why.reason4.desc": "我們不只是做賬，更是您在財務管理上的戰略夥伴！",

    // About
    "about.title": "關於HTPA恒泰會計師事務所",
    "about.subtitle":
      "HTPA恒泰會計師事務所依託於恒泰集團近40年的深厚的背景和多年的商業、金融領域實踐，擁有近20年的綜合大型企業報稅經營，我們精通各類財稅服務。",
    "about.content":
      "在這個瞬息萬變的經濟環境中，財務管理不僅關乎企業存亡，更決定了個人的財富未來。HTPA恒泰會計師事務所擁有近20年會計財經領域的經驗，匯聚一支持證CPA會計師和貸款經紀人（Mortgage Broker)在內的多位資深專家團隊，憑藉深厚的專業知識和豐富的行業經驗，為個人和企業提供精準、高效、合規的會計稅務與財務管理服務。",
    "about.languages": "HTPA恒泰會計師事務所提供英語、粵語和普通話服務，致力於為不同語言背景的客戶提供貼心支持。",
    "about.more": "了解更多",

    // Testimonials
    "testimonials.title": "客戶評價",
    "testimonials.subtitle": "聽聽我們的客戶怎麼說。以下是一些與HTPA恒泰會計師事務所合作過的客戶的真實評價。",

    // Contact
    "contact.title": "聯繫我們",
    "contact.subtitle": "無論您是個人、初創企業，還是發展中的公司，我們都能助您輕鬆駕馭財稅管理，邁向更高的財富巔峰！",
    "contact.address": "地址",
    "contact.phone": "電話",
    "contact.email": "電子郵件",
    "contact.hours": "營業時間",
    "contact.form.title": "發送諮詢",
    "contact.form.name": "姓名",
    "contact.form.email": "郵箱",
    "contact.form.phone": "電話",
    "contact.form.service": "服務類型",
    "contact.form.message": "留言",
    "contact.form.submit": "提交",
    "contact.form.success": "感謝您的諮詢！我們已收到您的信息，將在24小時內與您聯繫。",

    // Footer
    "footer.rights": "版權所有",
    "footer.privacy": "隱私政策",
    "footer.terms": "服務條款",

    // CTA
    "cta.title": "準備好開始了嗎？",
    "cta.subtitle": "聯繫我們，獲取專業的財稅服務，讓您的財務管理更加輕鬆高效。",
    "cta.button": "立即聯繫",

    // Language Switcher
    "lang.zh-CN": "简体中文",
    "lang.en": "English",
    "lang.zh-HK": "繁體中文",
  },
}

const LanguageContext = createContext<LanguageContextType>({
  language: "zh-CN",
  setLanguage: () => {},
  t: () => "",
})

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("zh-CN")

  useEffect(() => {
    // Update HTML lang attribute when language changes
    document.documentElement.lang = language
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}
