"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import PageLayout from "@/components/layout/page-layout"
import PageHeader from "@/components/ui/page-header"
import { Linkedin, Mail } from "lucide-react"

const teamMembers = [
  {
    name: "张志明",
    position: "首席执行官 / 注册会计师",
    bio: "张志明先生拥有超过20年的会计和财务管理经验，是加拿大特许专业会计师协会(CPA)的成员。他专注于为中大型企业提供财务审计、税务规划和战略咨询服务。",
    image: "/placeholder.svg?height=400&width=400&text=张志明",
  },
  {
    name: "李婉婷",
    position: "税务总监 / 注册会计师",
    bio: "李婉婷女士是税务领域的专家，拥有15年的税务咨询经验。她精通个人和企业税务规划，帮助客户优化税务结构，合法合规地降低税务负担。",
    image: "/placeholder.svg?height=400&width=400&text=李婉婷",
  },
  {
    name: "王建国",
    position: "审计经理 / 注册会计师",
    bio: "王建国先生专注于审计服务，拥有10年的审计经验。他熟悉各类企业的审计要求，能够提供高质量的审计报告，帮助客户提高财务透明度。",
    image: "/placeholder.svg?height=400&width=400&text=王建国",
  },
  {
    name: "陈美玲",
    position: "财务顾问 / 注册会计师",
    bio: "陈美玲女士是财务规划和投资管理专家，拥有12年的财务咨询经验。她帮助客户制定个性化的财务规划方案，实现财务目标。",
    image: "/placeholder.svg?height=400&width=400&text=陈美玲",
  },
  {
    name: "刘伟明",
    position: "企业咨询顾问",
    bio: "刘伟明先生专注于企业咨询服务，拥有15年的企业管理和战略规划经验。他帮助企业优化业务流程，提高运营效率，实现可持续发展。",
    image: "/placeholder.svg?height=400&width=400&text=刘伟明",
  },
  {
    name: "赵丽华",
    position: "贷款经纪人",
    bio: "赵丽华女士是持牌贷款经纪人，拥有8年的贷款服务经验。她熟悉各类贷款产品和申请流程，帮助客户获得最优惠的贷款条件。",
    image: "/placeholder.svg?height=400&width=400&text=赵丽华",
  },
  {
    name: "林志强",
    position: "客户服务经理",
    bio: "林志强先生负责客户服务和关系管理，拥有10年的客户服务经验。他确保客户获得最佳的服务体验，及时解决客户的问题和需求。",
    image: "/placeholder.svg?height=400&width=400&text=林志强",
  },
  {
    name: "黄晓明",
    position: "行政助理",
    bio: "黄晓明先生负责日常行政工作，拥有5年的行政管理经验。他协助团队处理各类行政事务，确保办公室运作顺畅高效。",
    image: "/placeholder.svg?height=400&width=400&text=黄晓明",
  },
]

export default function TeamPage() {
  return (
    <PageLayout>
      <PageHeader title="我们的 团队" subtitle="我们的团队由经验丰富的专业人士组成，致力于为您提供最优质的服务。" />

      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-600/5 rounded-full filter blur-[100px] opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-600/5 rounded-full filter blur-[80px] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-neutral-900 border border-gold-900/30 rounded-lg overflow-hidden hover:border-gold-500/50 transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-gold-500 text-sm mb-3">{member.position}</p>
                  <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="p-2 rounded-full bg-neutral-800 text-gold-500 hover:bg-gold-900/20 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-full bg-neutral-800 text-gold-500 hover:bg-gold-900/20 transition-colors"
                      aria-label={`LinkedIn profile of ${member.name}`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full filter blur-[100px] opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              加入<span className="text-gold-500">我们的团队</span>
            </h2>
            <p className="text-gray-400 mb-8">
              我们始终欢迎优秀的人才加入我们的团队。如果您对会计、税务或财务管理充满热情，并希望在专业环境中发展您的职业生涯，请发送您的简历给我们。
            </p>
            <a
              href="/contact"
              className="inline-block bg-gold-500 hover:bg-gold-600 text-black px-8 py-3 rounded-full font-medium transition-all"
            >
              查看职位空缺
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
