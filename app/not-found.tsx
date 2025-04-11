import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent mb-6">
          404
        </h1>
        <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button variant="gold" className="rounded-full px-6">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  )
}
