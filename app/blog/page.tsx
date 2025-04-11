"use client"

import { motion } from "framer-motion"
import PageLayout from "@/components/layout/page-layout"
import PageHeader from "@/components/ui/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
// Make sure to import the BlogPostCard component
import { BlogPostCard } from "@/components/blog/blog-post-card"
import { blogPosts } from "@/lib/blog-data"

const categories = ["All", "Productivity", "Tools", "Communication", "Remote Work", "Team Building"]

export default function BlogPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Blog"
        subtitle="Insights, tips, and strategies to help your team work more efficiently and effectively."
      >
        <div className="mt-8 max-w-md mx-auto">
          <div className="relative">
            <Input
              placeholder="Search articles..."
              className="bg-black border-gold-900/30 text-white focus:border-gold-500 pl-10 pr-4 py-2 rounded-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </PageHeader>

      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-600/5 rounded-full filter blur-[100px] opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-600/5 rounded-full filter blur-[80px] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`px-4 py-2 rounded-full text-sm ${
                  index === 0
                    ? "bg-gold-500 text-black"
                    : "bg-neutral-900 text-white border border-gold-900/30 hover:border-gold-500/50"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
                date={post.date}
                readTime={post.readTime}
                imageSrc={post.imageSrc}
                imageAlt={post.imageAlt}
              />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="gold" size="lg" className="rounded-full px-8">
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
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-black border-gold-900/30 text-white focus:border-gold-500 rounded-full"
              />
              <Button variant="gold" className="rounded-full px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
