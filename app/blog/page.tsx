"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import PageLayout from "@/components/layout/page-layout"
import PageHeader from "@/components/ui/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: "task-management-tips",
    title: "10 Task Management Tips for Remote Teams",
    description:
      "Learn how to effectively manage tasks and keep your remote team productive with these proven strategies.",
    date: "2023-03-15",
    category: "Productivity",
    author: "Jane Smith",
    readingTime: "5 min read",
  },
  {
    id: "collaboration-tools",
    title: "The Best Collaboration Tools for 2023",
    description:
      "Discover the top collaboration tools that can help your team work together more effectively, no matter where they are.",
    date: "2023-02-28",
    category: "Tools",
    author: "John Doe",
    readingTime: "8 min read",
  },
  {
    id: "communication-strategies",
    title: "Effective Communication Strategies for Distributed Teams",
    description:
      "Communication is key for distributed teams. Learn how to improve your team's communication and avoid common pitfalls.",
    date: "2023-02-10",
    category: "Communication",
    author: "Emily Johnson",
    readingTime: "6 min read",
  },
  {
    id: "productivity-hacks",
    title: "5 Productivity Hacks That Actually Work",
    description:
      "Cut through the noise and discover productivity techniques that have been proven to boost efficiency and output.",
    date: "2023-01-25",
    category: "Productivity",
    author: "Michael Brown",
    readingTime: "7 min read",
  },
  {
    id: "remote-work-challenges",
    title: "Overcoming the Challenges of Remote Work",
    description:
      "Remote work comes with its own set of challenges. Here's how to address them and create a thriving remote work environment.",
    date: "2023-01-12",
    category: "Remote Work",
    author: "Sarah Wilson",
    readingTime: "9 min read",
  },
  {
    id: "team-building-activities",
    title: "Virtual Team Building Activities That Actually Work",
    description:
      "Build a strong team culture even when working remotely with these engaging and effective virtual team building activities.",
    date: "2022-12-20",
    category: "Team Building",
    author: "David Lee",
    readingTime: "10 min read",
  },
]

const categories = ["All", "Productivity", "Tools", "Communication", "Remote Work", "Team Building"]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory])

  const handleNewsletterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const email = event.currentTarget.email.value
    console.log("Newsletter subscription submitted for:", email)
    // TODO: Implement actual newsletter subscription logic (e.g., API call)
    alert(`Thank you for subscribing with ${email}! (Functionality pending)`)
    event.currentTarget.reset()
  }

  return (
    <PageLayout>
      <PageHeader
        title="Blog"
        subtitle="Insights, tips, and strategies to help your team work more efficiently and effectively."
      >
        <div className="mt-8 max-w-md mx-auto">
          <div className="relative">
            <label htmlFor="blog-search" className="sr-only">
              Search articles
            </label>
            <Input
              id="blog-search"
              type="search"
              placeholder="Search articles..."
              className="bg-black border-gold-900/30 text-white focus:border-gold-500 pl-10 pr-4 py-2 rounded-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-describedby="search-icon"
            />
            <Search
              id="search-icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
        </div>
      </PageHeader>

      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-600/5 rounded-full filter blur-[100px] opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-600/5 rounded-full filter blur-[80px] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap justify-center gap-4 mb-12" role="group" aria-label="Filter by category">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={selectedCategory === category}
                className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-gold-500 text-black"
                    : "bg-neutral-900 text-white border border-gold-900/30 hover:border-gold-500/50 hover:bg-neutral-800"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  layout
                >
                  <Link href={`/blog/${post.id}`} aria-label={`Read more about ${post.title}`}>
                    <article className="bg-neutral-900 border border-gold-900/30 rounded-lg overflow-hidden hover:border-gold-500/50 transition-all duration-300 h-full flex flex-col group">
                      <div className="aspect-video bg-gradient-to-br from-black to-neutral-900 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                          <div className="w-16 h-16 rounded-full bg-gold-900/20 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-8 w-8 text-gold-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute top-4 left-4 bg-black/80 text-gold-500 text-xs font-medium px-2 py-1 rounded z-10">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center text-sm text-gray-400 mb-3">
                          <Calendar className="h-4 w-4 mr-1" aria-hidden="true" />
                          <time dateTime={post.date}>{post.date}</time>
                          <span className="mx-2" aria-hidden="true">•</span>
                          <Clock className="h-4 w-4 mr-1" aria-hidden="true" />
                          <span>{post.readingTime}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gold-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 mb-4 flex-1">{post.description}</p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gold-900/10">
                          <div className="text-sm text-gray-400">
                            By: <span className="text-gold-500">{post.author}</span>
                          </div>
                          <div className="text-gold-500 flex items-center text-sm font-medium">
                            Read More <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search or category filters.</p>
            </div>
          )}

          <div className="flex justify-center mt-12">
            <Button
              variant="gold"
              size="lg"
              className="rounded-full px-8"
              disabled
              aria-disabled="true"
            >
              Load More
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full filter blur-[100px] opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Subscribe to Our <span className="text-gold-500">Newsletter</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Get the latest articles, tips, and resources delivered straight to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <Input
                id="newsletter-email"
                type="email"
                name="email"
                placeholder="Your email address"
                required
                className="bg-black border-gold-900/30 text-white focus:border-gold-500 rounded-full flex-1"
                aria-required="true"
              />
              <Button type="submit" variant="gold" className="rounded-full px-6">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
