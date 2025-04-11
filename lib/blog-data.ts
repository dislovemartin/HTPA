export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  date: string
  readTime: string
  author: {
    name: string
    avatar: string
  }
  imageSrc: string
  imageAlt: string
  content?: string
  tags?: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Top-Rated HTPA 恒泰会计师事务所 Review: 10 Powerful Reasons to Trust This CPA Firm",
    slug: "htpa-review",
    excerpt:
      "Discover why HTPA 恒泰会计师事务所 is Ontario's most trusted CPA firm. From tax filing to audit and loans—learn what sets HTPA apart in accounting excellence.",
    date: "April 11, 2023",
    readTime: "12 min read",
    author: {
      name: "HTPA Team",
      avatar: "/placeholder.svg?height=50&width=50&text=HT",
    },
    imageSrc: "/placeholder.svg?height=600&width=1200&text=HTPA+Accounting+Excellence",
    imageAlt: "HTPA Accounting Excellence",
    tags: ["Accounting", "CPA", "Tax Services", "Ontario"],
  },
  // Keep any existing blog posts here
]
