"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, Download, Filter, Mail, MoreHorizontal, Phone, Plus } from "lucide-react"
import { useState } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DataTable } from "@/components/ui/data-table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Define the Team Member type
type TeamMember = {
  id: string
  name: string
  email: string
  role: string
  department: string
  status: "active" | "away" | "offline"
  phone: string
  joinedDate: string
}

// Sample data
const teamMembers: TeamMember[] = [
  {
    id: "EMP-1234",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    role: "Product Manager",
    department: "Product",
    status: "active",
    phone: "+1 (555) 123-4567",
    joinedDate: "2021-06-12T09:00:00",
  },
  {
    id: "EMP-5678",
    name: "Michael Chen",
    email: "michael.chen@example.com",
    role: "Senior Developer",
    department: "Engineering",
    status: "active",
    phone: "+1 (555) 234-5678",
    joinedDate: "2020-03-22T14:30:00",
  },
  {
    id: "EMP-9012",
    name: "Emily Rodriguez",
    email: "emily.rodriguez@example.com",
    role: "UI/UX Designer",
    department: "Design",
    status: "away",
    phone: "+1 (555) 345-6789",
    joinedDate: "2022-02-10T11:15:00",
  },
  {
    id: "EMP-3456",
    name: "David Kim",
    email: "david.kim@example.com",
    role: "Content Strategist",
    department: "Marketing",
    status: "offline",
    phone: "+1 (555) 456-7890",
    joinedDate: "2021-05-03T16:45:00",
  },
  {
    id: "EMP-7890",
    name: "Alex Thompson",
    email: "alex.thompson@example.com",
    role: "SEO Specialist",
    department: "Marketing",
    status: "active",
    phone: "+1 (555) 567-8901",
    joinedDate: "2022-05-15T10:30:00",
  },
  {
    id: "EMP-2345",
    name: "Jessica Lee",
    email: "jessica.lee@example.com",
    role: "Frontend Developer",
    department: "Engineering",
    status: "active",
    phone: "+1 (555) 678-9012",
    joinedDate: "2021-04-28T13:20:00",
  },
  {
    id: "EMP-6789",
    name: "Ryan Martinez",
    email: "ryan.martinez@example.com",
    role: "Backend Developer",
    department: "Engineering",
    status: "away",
    phone: "+1 (555) 789-0123",
    joinedDate: "2020-05-10T09:45:00",
  },
  {
    id: "EMP-0123",
    name: "Sophia Wilson",
    email: "sophia.wilson@example.com",
    role: "Data Analyst",
    department: "Analytics",
    status: "active",
    phone: "+1 (555) 890-1234",
    joinedDate: "2022-03-15T11:00:00",
  },
]

export default function TeamPage() {
  const [data] = useState<TeamMember[]>(teamMembers)

  // Define columns for the data table
  const columns: ColumnDef<TeamMember>[] = [
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Name
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const name = row.getValue("name") as string
        const initials = name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()

        return (
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${initials}`} alt={name} />
              <AvatarFallback className="bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-100">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-primary-900 dark:text-primary-50">{name}</div>
              <div className="text-xs text-primary-600 dark:text-primary-400">{row.original.role}</div>
            </div>
          </div>
        )
      },
    },
    {
      accessorKey: "department",
      header: "Department",
      cell: ({ row }) => (
        <Badge
          variant="outline"
          className="bg-secondary-50 text-secondary-800 border-secondary-200 dark:bg-secondary-900 dark:text-secondary-200 dark:border-secondary-800"
        >
          {row.getValue("department")}
        </Badge>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string

        return (
          <div className="flex items-center">
            <div
              className={`h-2.5 w-2.5 rounded-full mr-2 ${
                status === "active" ? "bg-success-500" : status === "away" ? "bg-warning-500" : "bg-secondary-400"
              }`}
            ></div>
            <span
              className={
                status === "active"
                  ? "text-success-700 dark:text-success-400"
                  : status === "away"
                    ? "text-warning-700 dark:text-warning-400"
                    : "text-secondary-700 dark:text-secondary-400"
              }
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </div>
        )
      },
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => {
        const email = row.getValue("email") as string

        return (
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2 text-primary-500 dark:text-primary-400" />
            <a
              href={`mailto:${email}`}
              className="text-primary-700 hover:text-primary-900 hover:underline dark:text-primary-300 dark:hover:text-primary-100"
            >
              {email}
            </a>
          </div>
        )
      },
    },
    {
      accessorKey: "phone",
      header: "Phone",
      cell: ({ row }) => {
        const phone = row.getValue("phone") as string

        return (
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-primary-500 dark:text-primary-400" />
            <a
              href={`tel:${phone.replace(/\D/g, "")}`}
              className="text-primary-700 hover:text-primary-900 hover:underline dark:text-primary-300 dark:hover:text-primary-100"
            >
              {phone}
            </a>
          </div>
        )
      },
    },
    {
      accessorKey: "joinedDate",
      header: "Joined",
      cell: ({ row }) => {
        const joinedDate = row.getValue("joinedDate") as string
        const date = new Date(joinedDate)
        const formattedDate = new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }).format(date)

        // Calculate how long ago they joined
        const now = new Date()
        const diffTime = Math.abs(now.getTime() - date.getTime())
        const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365))

        return (
          <div className="flex flex-col">
            <span className="text-primary-800 dark:text-primary-200">{formattedDate}</span>
            <span className="text-xs text-primary-500 dark:text-primary-400">
              {diffYears > 0 ? `${diffYears} ${diffYears === 1 ? "year" : "years"} ago` : "This year"}
            </span>
          </div>
        )
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const member = row.original

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(member.email)}>
                Copy email
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View profile</DropdownMenuItem>
              <DropdownMenuItem>Send message</DropdownMenuItem>
              <DropdownMenuItem>Schedule meeting</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-error-600 dark:text-error-400">Remove from team</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  return (
    <div className="container mx-auto py-10">
      <div className="grid gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-primary-900 dark:text-primary-50">Team Members</h1>
          <p className="text-primary-600 dark:text-primary-400">Manage your team and their access.</p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <TabsList>
              <TabsTrigger value="all">All Members</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="away">Away</TabsTrigger>
              <TabsTrigger value="offline">Offline</TabsTrigger>
            </TabsList>

            <div className="flex gap-2">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Member
              </Button>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 border-primary-200 dark:border-primary-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium text-primary-900 dark:text-primary-50">
                    Total Members
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary-900 dark:text-primary-50">{teamMembers.length}</div>
                  <p className="text-xs text-primary-600 dark:text-primary-400 mt-1">Across all departments</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-success-50 to-success-100 dark:from-success-900 dark:to-success-800 border-success-200 dark:border-success-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium text-success-900 dark:text-success-50">Active</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-success-900 dark:text-success-50">
                    {teamMembers.filter((m) => m.status === "active").length}
                  </div>
                  <p className="text-xs text-success-700 dark:text-success-300 mt-1">Currently online</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-warning-50 to-warning-100 dark:from-warning-900 dark:to-warning-800 border-warning-200 dark:border-warning-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium text-warning-900 dark:text-warning-50">Away</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-warning-900 dark:text-warning-50">
                    {teamMembers.filter((m) => m.status === "away").length}
                  </div>
                  <p className="text-xs text-warning-700 dark:text-warning-300 mt-1">Temporarily unavailable</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900 dark:to-secondary-800 border-secondary-200 dark:border-secondary-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-medium text-secondary-900 dark:text-secondary-50">
                    Offline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-secondary-900 dark:text-secondary-50">
                    {teamMembers.filter((m) => m.status === "offline").length}
                  </div>
                  <p className="text-xs text-secondary-700 dark:text-secondary-300 mt-1">Not currently available</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="p-0">
                <DataTable columns={columns} data={data} searchKey="name" searchPlaceholder="Search team members..." />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="active" className="mt-0">
            <Card>
              <CardContent className="p-0">
                <DataTable
                  columns={columns}
                  data={data.filter((member) => member.status === "active")}
                  searchKey="name"
                  searchPlaceholder="Search active members..."
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="away" className="mt-0">
            <Card>
              <CardContent className="p-0">
                <DataTable
                  columns={columns}
                  data={data.filter((member) => member.status === "away")}
                  searchKey="name"
                  searchPlaceholder="Search away members..."
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="offline" className="mt-0">
            <Card>
              <CardContent className="p-0">
                <DataTable
                  columns={columns}
                  data={data.filter((member) => member.status === "offline")}
                  searchKey="name"
                  search
                  searchPlaceholder="Search offline members..."
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
