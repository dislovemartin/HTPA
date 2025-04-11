"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChatInterface } from "./chat-interface"

export function TaxGuidance({ className }: { className?: string }) {
  const [userInfo, setUserInfo] = useState({
    incomeType: "",
    filingStatus: "",
    province: "",
    hasBusinessIncome: false,
    hasInvestmentIncome: false,
    hasForeignIncome: false,
  })
  const [showChat, setShowChat] = useState(false)

  const handleChange = (field: string, value: string | boolean) => {
    setUserInfo((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowChat(true)
  }

  if (showChat) {
    return (
      <div className={className}>
        <div className="mb-4 p-3 bg-gold-50/10 rounded-lg">
          <h3 className="font-medium mb-2">您的税务信息 Your Tax Information</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              收入类型 Income Type: <span className="font-medium">{userInfo.incomeType}</span>
            </div>
            <div>
              申报状态 Filing Status: <span className="font-medium">{userInfo.filingStatus}</span>
            </div>
            <div>
              省份 Province: <span className="font-medium">{userInfo.province}</span>
            </div>
            <div>
              商业收入 Business Income:{" "}
              <span className="font-medium">{userInfo.hasBusinessIncome ? "是 Yes" : "否 No"}</span>
            </div>
            <div>
              投资收入 Investment Income:{" "}
              <span className="font-medium">{userInfo.hasInvestmentIncome ? "是 Yes" : "否 No"}</span>
            </div>
            <div>
              国外收入 Foreign Income:{" "}
              <span className="font-medium">{userInfo.hasForeignIncome ? "是 Yes" : "否 No"}</span>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={() => setShowChat(false)} className="mt-2">
            编辑信息 Edit Information
          </Button>
        </div>

        <ChatInterface
          title="税务申报指南 Tax Filing Guidance"
          placeholder="输入您的税务问题... Type your tax question..."
          apiEndpoint="/api/ai/tax-guidance"
          additionalData={{ userInfo }}
          initialMessages={[
            {
              role: "assistant",
              content:
                "感谢您提供税务信息。我现在可以为您提供更具针对性的税务申报指导。请问您有什么具体问题？\n\nThank you for providing your tax information. I can now provide you with more targeted tax filing guidance. What specific questions do you have?",
            },
          ]}
        />
      </div>
    )
  }

  return (
    <Card className={className}>
      <CardHeader className="bg-gradient-to-r from-gold-600 to-gold-500 text-black">
        <CardTitle>税务申报指南 Tax Filing Guidance</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">收入类型 Income Type</label>
            <Select onValueChange={(value) => handleChange("incomeType", value)} required>
              <SelectTrigger>
                <SelectValue placeholder="选择收入类型 Select income type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="employment">就业收入 Employment Income</SelectItem>
                <SelectItem value="self-employed">自雇收入 Self-employed</SelectItem>
                <SelectItem value="business">企业收入 Business Income</SelectItem>
                <SelectItem value="investment">投资收入 Investment Income</SelectItem>
                <SelectItem value="retirement">退休收入 Retirement Income</SelectItem>
                <SelectItem value="mixed">混合收入 Mixed Income</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">申报状态 Filing Status</label>
            <Select onValueChange={(value) => handleChange("filingStatus", value)} required>
              <SelectTrigger>
                <SelectValue placeholder="选择申报状态 Select filing status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">单身 Single</SelectItem>
                <SelectItem value="married">已婚 Married</SelectItem>
                <SelectItem value="common-law">同居伴侣 Common-law Partner</SelectItem>
                <SelectItem value="separated">分居 Separated</SelectItem>
                <SelectItem value="divorced">离婚 Divorced</SelectItem>
                <SelectItem value="widowed">丧偶 Widowed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">省份 Province</label>
            <Select onValueChange={(value) => handleChange("province", value)} required>
              <SelectTrigger>
                <SelectValue placeholder="选择省份 Select province" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AB">阿尔伯塔省 Alberta</SelectItem>
                <SelectItem value="BC">不列颠哥伦比亚省 British Columbia</SelectItem>
                <SelectItem value="MB">曼尼托巴省 Manitoba</SelectItem>
                <SelectItem value="NB">新不伦瑞克省 New Brunswick</SelectItem>
                <SelectItem value="NL">纽芬兰与拉布拉多省 Newfoundland and Labrador</SelectItem>
                <SelectItem value="NS">新斯科舍省 Nova Scotia</SelectItem>
                <SelectItem value="ON">安大略省 Ontario</SelectItem>
                <SelectItem value="PE">爱德华王子岛 Prince Edward Island</SelectItem>
                <SelectItem value="QC">魁北克省 Quebec</SelectItem>
                <SelectItem value="SK">萨斯喀彻温省 Saskatchewan</SelectItem>
                <SelectItem value="NT">西北地区 Northwest Territories</SelectItem>
                <SelectItem value="NU">努纳武特地区 Nunavut</SelectItem>
                <SelectItem value="YT">育空地区 Yukon</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="hasBusinessIncome"
                checked={userInfo.hasBusinessIncome}
                onChange={(e) => handleChange("hasBusinessIncome", e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-gold-600 focus:ring-gold-500"
              />
              <label htmlFor="hasBusinessIncome" className="ml-2 text-sm">
                我有商业收入 I have business income
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="hasInvestmentIncome"
                checked={userInfo.hasInvestmentIncome}
                onChange={(e) => handleChange("hasInvestmentIncome", e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-gold-600 focus:ring-gold-500"
              />
              <label htmlFor="hasInvestmentIncome" className="ml-2 text-sm">
                我有投资收入 I have investment income
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="hasForeignIncome"
                checked={userInfo.hasForeignIncome}
                onChange={(e) => handleChange("hasForeignIncome", e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-gold-600 focus:ring-gold-500"
              />
              <label htmlFor="hasForeignIncome" className="ml-2 text-sm">
                我有国外收入 I have foreign income
              </label>
            </div>
          </div>

          <Button type="submit" className="w-full bg-gold-500 hover:bg-gold-600 text-black mt-4">
            继续 Continue
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
