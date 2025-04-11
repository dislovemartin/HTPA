import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"

const team = [
  {
    name: "张伟",
    role: "首席会计师 / Chief Accountant",
    bio: "张伟先生拥有超过15年的会计经验，是一名持证CPA会计师。他专注于企业税务规划和财务管理，帮助众多企业优化财务结构。",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "李明",
    role: "税务总监 / Tax Director",
    bio: "李明先生在税务领域有超过10年的经验，精通个人和企业税务申报。他的专业知识帮助客户合法节省大量税款。",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "王丽",
    role: "财务顾问 / Financial Advisor",
    bio: "王丽女士是一名经验丰富的财务顾问，专注于个人财务规划和投资建议。她帮助客户制定长期财务目标并实现财务自由。",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "陈强",
    role: "贷款经纪人 / Mortgage Broker",
    bio: "陈强先生是一名注册贷款经纪人，拥有丰富的房贷和商业贷款经验。他帮助客户获得最优惠的贷款条件，实现购房和创业梦想。",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function Team() {
  return (
    <section className="section-padding bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            <span className="text-gradient-gold">专业团队</span> Our Team
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            我们的团队由经验丰富的专业人士组成，致力于为您提供最优质的财税服务。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden card-hover border-none shadow-lg opacity-0 animate-slide-up bg-black border border-htpa-gold/20"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-htpa-gold text-sm mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="p-2 rounded-full bg-htpa-black-light text-htpa-gold hover:bg-htpa-gold/10 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-full bg-htpa-black-light text-htpa-gold hover:bg-htpa-gold/10 transition-colors"
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
