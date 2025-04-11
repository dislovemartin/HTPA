"use client"

import { useState } from "react"
import type { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, ArrowUpDown, Check, X, Plus, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Define the Project type
type Project = {
  id: string
  name: string
  status: "active" | "completed" | "paused" | "draft"
  createdAt: string
  dueDate: string | null
  progress: number
  assignedTo: string
}

// Sample data
const projects: Project[] = [
  {
    id: "PROJ-1234",
    name: "Website Redesign",
    status: "active",
    createdAt: "2023-04-12T09:00:00",
    dueDate: "2023-06-30T17:00:00",
    progress: 65,
    assignedTo: "Sarah Johnson",
  },
  {
    id: "PROJ-5678",
    name: "Mobile App Development",
    status: "active",
    createdAt: "2023-03-22T14:30:00",
    dueDate: "2023-08-15T17:00:00",
    progress: 32,
    assignedTo: "Michael Chen",
  },
  {
    id: "PROJ-9012",
    name: "Brand Identity Update",
    status: "completed",
    createdAt: "2023-02-10T11:15:00",
    dueDate: "2023-04-05T17:00:00",
    progress: 100,
    assignedTo: "Emily Rodriguez",
  },
  {
    id: "PROJ-3456",
    name: "Content Strategy",
    status: "paused",
    createdAt: "2023-05-03T16:45:00",
    dueDate: "2023-07-20T17:00:00",
    progress: 48,
    assignedTo: "David Kim",
  },
  {
    id: "PROJ-7890",
    name: "SEO Optimization",
    status: "draft",
    createdAt: "2023-05-15T10:30:00",
    dueDate: null,
    progress: 0,
    assignedTo: "Alex Thompson",
  },
  {
    id: "PROJ-2345",
    name: "E-commerce Integration",
    status: "active",
    createdAt: "2023-04-28T13:20:00",
    dueDate: "2023-06-15T17:00:00",
    progress: 75,
    assignedTo: "Jessica Lee",
  },
  {
    id: "PROJ-6789",
    name: "Social Media Campaign",
    status: "active",
    createdAt: "2023-05-10T09:45:00",
    dueDate: "2023-06-10T17:00:00",
    progress: 85,
    assignedTo: "Ryan Martinez",
  },
  {
    id: "PROJ-0123",
    name: "Analytics Dashboard",
    status: "completed",
    createdAt: "2023-03-15T11:00:00",
    dueDate: "2023-05-01T17:00:00",
    progress: 100,
    assignedTo: "Sophia Wilson",
  },
  {
    id: "PROJ-4567",
    name: "User Research",
    status: "paused",
    createdAt: "2023-04-05T14:00:00",
    dueDate: "2023-05-20T17:00:00",
    progress: 60,
    assignedTo: "Daniel Brown",
  },
  {
    id: "PROJ-8901",
    name: "Content Migration",
    status: "draft",
    createdAt: "2023-05-18T15:30:00",
    dueDate: null,
    progress: 0,
    assignedTo: "Olivia Garcia",
  },
]

export default function ProjectsPage() {
  const [data] = useState<Project[]>(projects)

  // Define columns for the data table
  const columns: ColumnDef<Project>[] = [
    {
      accessorKey: "id",
      header: "ID",
      cell: ({ row }) => (
        <div className="font-mono text-xs text-primary-700 dark:text-primary-300">{row.getValue("id")}</div>
      ),
    },
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Project
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => (
        <div className="font-medium text-primary-900 dark:text-primary-50">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string

        return (
          <Badge
            variant={
              status === "active"
                ? "default"
                : status === "completed"
                  ? "success"
                  : status === "paused"
                    ? "warning"
                    : "secondary"
            }
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        )
      },
    },
    {
      accessorKey: "progress",
      header: "Progress",
      cell: ({ row }) => {
        const progress = row.getValue("progress") as number

        // Determine progress color based on value
        const getProgressColor = () => {
          if (progress < 25) return "bg-secondary-500 dark:bg-secondary-600"
          if (progress < 50) return "bg-warning-500 dark:bg-warning-600"
          if (progress < 75) return "bg-info-500 dark:bg-info-600"
          return "bg-success-500 dark:bg-success-600"
        }

        return (
          <div className="w-full">
            <div className="flex items-center">
              <div className="w-full bg-secondary-100 dark:bg-secondary-900 rounded-full h-2.5">
                <div
                  className={`${getProgressColor()} h-2.5 rounded-full transition-all duration-300`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span className="ml-2 text-xs text-primary-700 dark:text-primary-300">{progress}%</span>
            </div>
          </div>
        )
      },
    },
    {
      accessorKey: "dueDate",
      header: "Due Date",
      cell: ({ row }) => {
        const dueDate = row.getValue("dueDate") as string
        if (!dueDate) return <span className="text-primary-400 dark:text-primary-500">Not set</span>

        // Check if due date is in the past
        const isPastDue = new Date(dueDate) < new Date()

        return (
          <div className={isPastDue ? "text-error-600 dark:text-error-400" : "text-primary-700 dark:text-primary-300"}>
            {new Date(dueDate).toLocaleDateString()}
          </div>
        )
      },
    },
    {
      accessorKey: "assignedTo",
      header: "Assigned To",
      cell: ({ row }) => <div className="text-primary-800 dark:text-primary-200">{row.getValue("assignedTo")}</div>,
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const project = row.original

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
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(project.id)}>
                Copy project ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View details</DropdownMenuItem>
              <DropdownMenuItem>Edit project</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-error-600 dark:text-error-400">Delete project</DropdownMenuItem>
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
          <h1 className="text-3xl font-bold text-primary-900 dark:text-primary-50">Projects</h1>
          <p className="text-primary-600 dark:text-primary-400">Manage and track all your projects in one place.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Total Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary-900 dark:text-primary-50">{projects.length}</div>
              <p className="text-xs text-primary-500 dark:text-primary-400 mt-1">Across all departments</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Active</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary-900 dark:text-primary-50">
                {projects.filter((p) => p.status === "active").length}
              </div>
              <p className="text-xs text-primary-500 dark:text-primary-400 mt-1">Projects in progress</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success-600 dark:text-success-400">
                {projects.filter((p) => p.status === "completed").length}
              </div>
              <p className="text-xs text-primary-500 dark:text-primary-400 mt-1">Successfully delivered</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-warning-600 dark:text-warning-400">
                {projects.filter((p) => p.status === "paused" || p.status === "draft").length}
              </div>
              <p className="text-xs text-primary-500 dark:text-primary-400 mt-1">Paused or draft projects</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Project
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Check className="mr-2 h-4 w-4" />
              Select All
            </Button>
            <Button variant="outline" size="sm">
              <X className="mr-2 h-4 w-4" />
              Clear Selection
            </Button>
          </div>
        </div>

        <Card>
          <CardContent className="p-0">
            <DataTable columns={columns} data={data} searchKey="name" searchPlaceholder="Search projects..." />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
