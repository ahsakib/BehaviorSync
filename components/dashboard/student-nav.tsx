"use client"

import type React from "react"

import Link from "next/link"
import { Calendar, Settings, Home, MessageSquare, Goal, BookOpen, Award } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

export function StudentNav() {
  const { toast } = useToast()

  const handleNavClick = (e: React.MouseEvent, isActive: boolean, href: string) => {
    // Only show alert for non-active items and prevent navigation
    if (!isActive) {
      e.preventDefault()
      toast({
        title: "Under Construction",
        description: "This section is currently under development.",
        variant: "destructive",
      })
    }
  }

  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive>
                <Link href="/dashboard/student">
                  <Home className="h-4 w-4" />
                  <span>Overview</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  href="/dashboard/student/feedback"
                  onClick={(e) => handleNavClick(e, false, "/dashboard/student/feedback")}
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>My Feedback</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  href="/dashboard/student/goals"
                  onClick={(e) => handleNavClick(e, false, "/dashboard/student/goals")}
                >
                  <Goal className="h-4 w-4" />
                  <span>My Goals</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  href="/dashboard/student/portfolio"
                  onClick={(e) => handleNavClick(e, false, "/dashboard/student/portfolio")}
                >
                  <Award className="h-4 w-4" />
                  <span>Portfolio</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>School</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  href="/dashboard/student/classes"
                  onClick={(e) => handleNavClick(e, false, "/dashboard/student/classes")}
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Classes</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  href="/dashboard/student/calendar"
                  onClick={(e) => handleNavClick(e, false, "/dashboard/student/calendar")}
                >
                  <Calendar className="h-4 w-4" />
                  <span>Calendar</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>Settings</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  href="/dashboard/student/settings"
                  onClick={(e) => handleNavClick(e, false, "/dashboard/student/settings")}
                >
                  <Settings className="h-4 w-4" />
                  <span>Preferences</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  )
}
