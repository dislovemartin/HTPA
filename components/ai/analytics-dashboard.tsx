"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { createClient } from "@/lib/supabase/client"
import { Loader2, BarChart2, PieChartIcon, TrendingUp } from "lucide-react"
import { useAuth } from "@/components/auth-provider"

export function AnalyticsDashboard() {
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState(true)
  const [usageData, setUsageData] = useState<any[]>([])
  const [queryTypes, setQueryTypes] = useState<any[]>([])
  const [responseTime, setResponseTime] = useState<any[]>([])
  const [activeTab, setActiveTab] = useState("usage")

  useEffect(() => {
    if (user?.id) {
      fetchAnalyticsData()
    }
  }, [user])

  const fetchAnalyticsData = async () => {
    setIsLoading(true)
    try {
      const supabase = createClient()

      // Fetch usage data
      const { data: usageData } = await supabase.rpc("get_daily_usage_stats")
      setUsageData(usageData || [])

      // Fetch query types
      const { data: queryTypes } = await supabase.rpc("get_query_type_distribution")
      setQueryTypes(queryTypes || [])

      // Fetch response time data
      const { data: responseTime } = await supabase.rpc("get_response_time_trends")
      setResponseTime(responseTime || [])
    } catch (error) {
      console.error("Error fetching analytics data:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // Sample data for development (remove in production)
  const sampleUsageData = [
    { date: "2023-11-01", queries: 12 },
    { date: "2023-11-02", queries: 19 },
    { date: "2023-11-03", queries: 15 },
    { date: "2023-11-04", queries: 25 },
    { date: "2023-11-05", queries: 32 },
    { date: "2023-11-06", queries: 18 },
    { date: "2023-11-07", queries: 29 },
  ]

  const sampleQueryTypes = [
    { type: "Tax Questions", count: 45, color: "#FFD700" },
    { type: "Accounting", count: 30, color: "#DAA520" },
    { type: "Document Analysis", count: 15, color: "#B8860B" },
    { type: "General Inquiries", count: 10, color: "#CD853F" },
  ]

  const sampleResponseTime = [
    { date: "2023-11-01", time: 1.2 },
    { date: "2023-11-02", time: 1.5 },
    { date: "2023-11-03", time: 1.3 },
    { date: "2023-11-04", time: 1.1 },
    { date: "2023-11-05", time: 0.9 },
    { date: "2023-11-06", time: 1.0 },
    { date: "2023-11-07", time: 0.8 },
  ]

  // Use sample data if real data is empty
  const displayUsageData = usageData.length > 0 ? usageData : sampleUsageData
  const displayQueryTypes = queryTypes.length > 0 ? queryTypes : sampleQueryTypes
  const displayResponseTime = responseTime.length > 0 ? responseTime : sampleResponseTime

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-gold-500" />
      </div>
    )
  }

  return (
    <Card className="w-full border-gold-500/20">
      <CardHeader className="bg-gradient-to-r from-gold-600 to-gold-500 text-black">
        <CardTitle>AI 助手分析 AI Assistant Analytics</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="usage" className="flex items-center gap-2">
              <BarChart2 className="h-4 w-4" />
              使用统计 Usage
            </TabsTrigger>
            <TabsTrigger value="types" className="flex items-center gap-2">
              <PieChartIcon className="h-4 w-4" />
              查询类型 Query Types
            </TabsTrigger>
            <TabsTrigger value="performance" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              性能 Performance
            </TabsTrigger>
          </TabsList>

          <TabsContent value="usage" className="mt-0">
            <Card className="border-gold-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">每日查询量 Daily Queries</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={displayUsageData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="queries" fill="#FFD700" name="Queries" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="types" className="mt-0">
            <Card className="border-gold-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">查询类型分布 Query Type Distribution</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={displayQueryTypes}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="count"
                        nameKey="type"
                      >
                        {displayQueryTypes.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="mt-0">
            <Card className="border-gold-500/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">响应时间趋势 Response Time Trends</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={displayResponseTime}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="time" stroke="#FFD700" name="Response Time (s)" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
