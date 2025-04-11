export interface BlogPost {
  id: string
  title: string
  description: string
  date: string
  category: string
  author: string
  readingTime: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "tax-planning-strategies",
    title: "2024年个人税务规划策略",
    description: "了解如何通过有效的税务规划策略，合法地减少您的税务负担，最大化您的税后收入。",
    date: "2024-03-15",
    category: "税务规划",
    author: "张会计师",
    readingTime: "5 分钟",
  },
  {
    id: "business-registration-guide",
    title: "在加拿大注册公司的完整指南",
    description: "本指南将帮助您了解在加拿大注册公司的步骤、所需文件以及各种公司类型的优缺点。",
    date: "2024-02-28",
    category: "企业注册",
    author: "李顾问",
    readingTime: "8 分钟",
  },
  {
    id: "gst-hst-explained",
    title: "GST/HST申报详解：小企业主必读",
    description: "详细解释GST/HST的申报要求、时间表和常见错误，帮助小企业主避免罚款和利息。",
    date: "2024-02-10",
    category: "税务合规",
    author: "王税务专家",
    readingTime: "6 分钟",
  },
  {
    id: "rrsp-vs-tfsa",
    title: "RRSP vs TFSA：哪个更适合您的退休规划？",
    description: "比较RRSP和TFSA的优缺点，帮助您根据个人情况选择最适合的退休储蓄工具。",
    date: "2024-01-25",
    category: "退休规划",
    author: "刘财务顾问",
    readingTime: "7 分钟",
  },
  {
    id: "tax-deductions-self-employed",
    title: "自雇人士可申请的税务减免",
    description: "全面介绍自雇人士可以申请的税务减免项目，帮助您最大化税务优惠。",
    date: "2024-01-12",
    category: "税务减免",
    author: "张会计师",
    readingTime: "9 分钟",
  },
  {
    id: "accounting-software-comparison",
    title: "小企业会计软件比较：QuickBooks vs Xero vs Wave",
    description: "对比流行的小企业会计软件，帮助您选择最适合您业务需求的解决方案。",
    date: "2023-12-20",
    category: "会计技术",
    author: "陈技术顾问",
    readingTime: "10 分钟",
  },
]
