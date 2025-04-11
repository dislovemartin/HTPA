import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, BarChart3, Users, FileText, Clock, TrendingUp, TrendingDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your projects and team activity.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <div className="text-xs text-muted-foreground">+2 from last month</div>
          </CardContent>
          <div className="bg-palette-beige px-4 py-2">
            <div className="flex items-center justify-between text-xs">
              <div className="font-medium text-palette-navy">3 active</div>
              <div className="flex items-center gap-1 text-emerald-500">
                <TrendingUp className="h-3 w-3" />
                <span>12%</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <div className="text-xs text-muted-foreground">+1 from last month</div>
          </CardContent>
          <div className="bg-palette-beige px-4 py-2">
            <div className="flex items-center justify-between text-xs">
              <div className="font-medium text-palette-navy">6 active now</div>
              <div className="flex items-center gap-1 text-emerald-500">
                <TrendingUp className="h-3 w-3" />
                <span>8%</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Documents</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <div className="text-xs text-muted-foreground">+5 from last month</div>
          </CardContent>
          <div className="bg-palette-beige px-4 py-2">
            <div className="flex items-center justify-between text-xs">
              <div className="font-medium text-palette-navy">3 new</div>
              <div className="flex items-center gap-1 text-emerald-500">
                <TrendingUp className="h-3 w-3" />
                <span>16%</span>
              </div>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Hours Tracked</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">164</div>
            <div className="text-xs text-muted-foreground">This month</div>
          </CardContent>
          <div className="bg-palette-beige px-4 py-2">
            <div className="flex items-center justify-between text-xs">
              <div className="font-medium text-palette-navy">42 this week</div>
              <div className="flex items-center gap-1 text-red-500">
                <TrendingDown className="h-3 w-3" />
                <span>4%</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
            <CardDescription>Your most recently updated projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Website Redesign", status: "In Progress", progress: 65 },
                { name: "Mobile App Development", status: "Planning", progress: 25 },
                { name: "Marketing Campaign", status: "Completed", progress: 100 },
              ].map((project) => (
                <div key={project.name} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">{project.name}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span
                        className={`mr-2 h-2 w-2 rounded-full ${
                          project.status === "Completed"
                            ? "bg-emerald-500"
                            : project.status === "In Progress"
                              ? "bg-palette-navy"
                              : "bg-blue-500"
                        }`}
                      />
                      {project.status}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${
                          project.status === "Completed"
                            ? "bg-emerald-500"
                            : project.status === "In Progress"
                              ? "bg-palette-navy"
                              : "bg-blue-500"
                        }`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium">{project.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="ml-auto">
              View All Projects
              <ArrowUpRight className="ml-1 h-3 w-3" />
            </Button>
          </CardFooter>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Team Activity</CardTitle>
            <CardDescription>Recent activity from your team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  user: "Alex Johnson",
                  action: "completed a task",
                  time: "2 hours ago",
                  avatar: "/placeholder.svg?height=32&width=32",
                },
                {
                  user: "Sarah Miller",
                  action: "added a comment",
                  time: "4 hours ago",
                  avatar: "/placeholder.svg?height=32&width=32",
                },
                {
                  user: "David Chen",
                  action: "uploaded a document",
                  time: "Yesterday",
                  avatar: "/placeholder.svg?height=32&width=32",
                },
                {
                  user: "Emma Wilson",
                  action: "created a new project",
                  time: "2 days ago",
                  avatar: "/placeholder.svg?height=32&width=32",
                },
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-full overflow-hidden bg-muted">
                    <img
                      src={activity.avatar || "/placeholder.svg"}
                      alt={activity.user}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span> {activity.action}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="ml-auto">
              View All Activity
              <ArrowUpRight className="ml-1 h-3 w-3" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
