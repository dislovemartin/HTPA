import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function Newsletter() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="h-12 w-12 mx-auto mb-4 opacity-80 text-gold" />
          <h2 className="text-3xl font-bold mb-4 text-gold">订阅我们的税务通讯</h2>
          <p className="text-gray-300 mb-8">获取最新的税务资讯、财务建议和会计知识，帮助您更好地管理个人和企业财务。</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="您的电子邮箱 Your Email"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus-visible:ring-white"
            />
            <Button className="bg-gold text-black hover:bg-yellow-500">订阅 Subscribe</Button>
          </form>
          <p className="text-xs text-gray-300 mt-4">
            我们尊重您的隐私，绝不会向第三方分享您的信息。您可以随时取消订阅。
          </p>
        </div>
      </div>
    </section>
  )
}
