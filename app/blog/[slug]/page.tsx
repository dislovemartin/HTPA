"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { notFound } from "next/navigation"
import PageLayout from "@/components/layout/page-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, ThumbsUp } from "lucide-react"

// This would normally come from a database or API
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
    content: `
      <p>Managing tasks in a remote team presents unique challenges. Without the benefit of face-to-face interaction, it's crucial to have clear systems and processes in place to ensure everyone stays on the same page and projects move forward efficiently.</p>
      
      <h2>1. Use a Dedicated Task Management Tool</h2>
      <p>The foundation of effective remote task management is a good task management tool. Look for features like task assignment, due dates, priority levels, status tracking, and the ability to organize tasks into projects or categories. Popular options include Asana, Trello, Monday.com, and of course, StreamLine.</p>
      
      <h2>2. Break Down Projects into Manageable Tasks</h2>
      <p>Large projects can be overwhelming, especially when working remotely. Break them down into smaller, more manageable tasks with clear deliverables. This makes it easier to track progress and gives team members a sense of accomplishment as they complete each task.</p>
      
      <h2>3. Set Clear Expectations and Deadlines</h2>
      <p>When assigning tasks, be explicit about what needs to be done, who is responsible, and when it's due. Vague instructions lead to confusion and delays. Include all relevant details, resources, and references in the task description.</p>
      
      <h2>4. Prioritize Tasks Effectively</h2>
      <p>Not all tasks are created equal. Use a prioritization system (like the Eisenhower Matrix or MoSCoW method) to help team members understand which tasks need immediate attention and which can wait. This is especially important in remote settings where team members may need to make independent decisions about what to work on next.</p>
      
      <h2>5. Establish Regular Check-ins</h2>
      <p>Schedule regular team meetings to review progress, discuss challenges, and adjust priorities as needed. These check-ins provide accountability and keep everyone aligned. They also offer an opportunity to celebrate wins and maintain team morale.</p>
      
      <h2>6. Document Everything</h2>
      <p>In a remote environment, documentation becomes even more critical. Ensure that task requirements, decisions, and progress updates are documented and accessible to all team members. This reduces misunderstandings and provides a reference point for future work.</p>
      
      <h2>7. Use Automation Where Possible</h2>
      <p>Look for opportunities to automate routine tasks and notifications. Many task management tools offer automation features that can help streamline workflows, reduce manual work, and ensure nothing falls through the cracks.</p>
      
      <h2>8. Implement Time Tracking</h2>
      <p>Time tracking helps remote teams understand how long tasks actually take, which improves future planning and resource allocation. It also provides visibility into workloads and can help identify bottlenecks or inefficiencies.</p>
      
      <h2>9. Foster Asynchronous Communication</h2>
      <p>Remote teams often work across different time zones. Embrace asynchronous communication by providing comprehensive task descriptions and context, so team members can make progress independently without waiting for real-time responses.</p>
      
      <h2>10. Celebrate Completed Tasks</h2>
      <p>Acknowledge and celebrate when tasks are completed successfully. This positive reinforcement boosts morale and motivation, which can be particularly important in remote settings where team members might otherwise feel isolated.</p>
      
      <h2>Conclusion</h2>
      <p>Effective task management is the backbone of successful remote teamwork. By implementing these strategies, you can help your team stay organized, focused, and productive, no matter where they're located. Remember that finding the right approach may require some experimentation – be open to adjusting your processes based on what works best for your specific team and projects.</p>
    `,
    relatedPosts: ["collaboration-tools", "communication-strategies", "productivity-hacks"],
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
    content: `<p>This is a placeholder for the full article content.</p>`,
    relatedPosts: ["task-management-tips", "communication-strategies", "team-building-activities"],
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
    content: `<p>This is a placeholder for the full article content.</p>`,
    relatedPosts: ["task-management-tips", "collaboration-tools", "remote-work-challenges"],
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
    content: `<p>This is a placeholder for the full article content.</p>`,
    relatedPosts: ["task-management-tips", "remote-work-challenges", "team-building-activities"],
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
    content: `<p>This is a placeholder for the full article content.</p>`,
    relatedPosts: ["task-management-tips", "communication-strategies", "productivity-hacks"],
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
    content: `<p>This is a placeholder for the full article content.</p>`,
    relatedPosts: ["collaboration-tools", "communication-strategies", "remote-work-challenges"],
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.id === params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = post.relatedPosts
    .map((id) => blogPosts.find((post) => post.id === id))
    .filter(Boolean) as typeof blogPosts

  return (
    <PageLayout>
      <section className="pt-32 pb-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-600/5 rounded-full filter blur-[100px] opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-600/5 rounded-full filter blur-[80px] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <Link href="/blog" className="inline-flex items-center text-gold-500 hover:text-gold-400 mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>

            <div className="bg-neutral-900 border border-gold-900/30 rounded-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span className="bg-gold-500 text-black px-2 py-1 rounded text-xs font-medium mr-4">
                    {post.category}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{post.title}</h1>

                <div className="flex items-center pb-8 mb-8 border-b border-gold-900/30">
                  <div className="w-10 h-10 rounded-full bg-gold-900/30 flex items-center justify-center text-gold-500 mr-3">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-white font-medium">{post.author}</div>
                    <div className="text-sm text-gray-400">Content Writer</div>
                  </div>
                  <div className="ml-auto flex space-x-2">
                    <button className="p-2 rounded-full bg-black/50 text-gray-400 hover:text-gold-500">
                      <Share2 className="h-5 w-5" />
                    </button>
                    <button className="p-2 rounded-full bg-black/50 text-gray-400 hover:text-gold-500">
                      <Bookmark className="h-5 w-5" />
                    </button>
                    <button className="p-2 rounded-full bg-black/50 text-gray-400 hover:text-gold-500">
                      <ThumbsUp className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="prose prose-invert prose-gold max-w-none mb-8">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                <div className="flex flex-wrap gap-2 pt-8 border-t border-gold-900/30">
                  <span className="text-gray-400">Tags:</span>
                  {["Remote Work", "Task Management", "Productivity", "Team Collaboration"].map((tag, index) => (
                    <Link
                      key={index}
                      href={`/blog?tag=${tag}`}
                      className="bg-black text-gold-500 px-3 py-1 rounded-full text-xs hover:bg-gold-900/20"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${relatedPost.id}`}>
                      <div className="bg-neutral-900 border border-gold-900/30 rounded-lg overflow-hidden hover:border-gold-500/50 transition-all duration-300 h-full flex flex-col">
                        <div className="p-6">
                          <div className="flex items-center text-xs text-gray-400 mb-2">
                            <span className="text-gold-500">{relatedPost.category}</span>
                            <span className="mx-2">•</span>
                            <span>{relatedPost.readingTime}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-white mb-2">{relatedPost.title}</h3>
                          <p className="text-gray-400 text-sm line-clamp-2">{relatedPost.description}</p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-12 bg-neutral-900 border border-gold-900/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-400 mb-6">
                Get the latest articles, tips, and resources delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-black border-gold-900/30 text-white focus:border-gold-500 rounded-full flex-1"
                />
                <Button variant="gold" className="rounded-full px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  )
}
