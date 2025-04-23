"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { PlusCircle, Home } from "lucide-react"
import { RoleSwitcher } from "@/components/role-switcher"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

interface DashboardHeaderProps {
  heading: string
  text?: string
  children?: React.ReactNode
  role: "teacher" | "student" | "parent"
}

export function DashboardHeader({ heading, text, children, role }: DashboardHeaderProps) {
  const { toast } = useToast()

  const handleBatchLog = () => {
    toast({
      title: "Under Construction",
      description: "The Batch Log feature is currently under development.",
      variant: "destructive",
    })
  }

  const handleRoleAction = (action: string) => {
    toast({
      title: "Under Construction",
      description: `The ${action} view is currently under development.`,
      variant: "destructive",
    })
  }

  return (
    <div className="flex items-center justify-between px-2 mb-6">
      <div className="grid gap-1">
        <h1 className="text-2xl font-bold tracking-tight">{heading}</h1>
        {text && <p className="text-muted-foreground">{text}</p>}
      </div>
      <div className="flex items-center gap-2">
        {role === "teacher" && (
          <Button onClick={handleBatchLog}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Batch Log
          </Button>
        )}
        <Button variant="outline" asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </Link>
        </Button>
        {role === "student" && (
          <Button variant="outline" onClick={() => handleRoleAction("Student View")}>
            Student View
          </Button>
        )}
        <RoleSwitcher currentRole={role} />
        {children}
      </div>
    </div>
  )
}
