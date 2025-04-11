import Image from "next/image"
import Link from "next/link"
import { CalendarIcon, Clock } from "lucide-react"

interface BlogPostCardProps {
  title: string
  excerpt: string
  slug: string
  date: string
  readTime: string
  imageSrc: string
  imageAlt: string
}

export function BlogPostCard({ title, excerpt, slug, date, readTime, imageSrc, imageAlt }: BlogPostCardProps) {
  return (
    <div className="group bg-neutral-900 rounded-xl overflow-hidden border border-gold-900/30 hover:border-gold-500/50 transition-all duration-300">
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative h-48 md:h-64 overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-400 mb-3">
          <div className="flex items-center mr-4">
            <CalendarIcon className="h-4 w-4 mr-1 text-gold-500" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-gold-500" />
            <span>{readTime}</span>
          </div>
        </div>
        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-500 transition-colors">{title}</h3>
        </Link>
        <p className="text-gray-400 mb-4 line-clamp-3">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="text-gold-500 hover:text-gold-400 flex items-center text-sm font-medium"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
