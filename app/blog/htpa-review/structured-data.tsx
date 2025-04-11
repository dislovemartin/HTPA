import type { BlogPosting } from "schema-dts"

export const htpaReviewStructuredData: BlogPosting = {
  "@type": "BlogPosting",
  headline: "Top-Rated HTPA 恒泰会计师事务所 Review: 10 Powerful Reasons to Trust This CPA Firm",
  description:
    "Discover why HTPA 恒泰会计师事务所 is Ontario's most trusted CPA firm. From tax filing to audit and loans—learn what sets HTPA apart in accounting excellence.",
  image: "https://htpa.ca/images/htpa-accounting-team.jpg",
  datePublished: "2023-04-11T08:00:00+08:00",
  dateModified: "2023-04-11T08:00:00+08:00",
  author: {
    "@type": "Organization",
    name: "HTPA 恒泰会计师事务所",
    url: "https://htpa.ca",
  },
  publisher: {
    "@type": "Organization",
    name: "HTPA 恒泰会计师事务所",
    logo: {
      "@type": "ImageObject",
      url: "https://htpa.ca/images/htpa-logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://htpa.ca/blog/htpa-review",
  },
}
