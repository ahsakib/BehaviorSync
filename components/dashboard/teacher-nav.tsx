"use client"

import type React from "react"

import Link from "next/link"
import { BarChart3, Users, Calendar, Settings, Home, MessageSquare, Goal, BookOpen } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

export function TeacherNav() {
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
                <Link href="/dashboard/teacher">
                  <Home className="h-4 w-4" />
                  <span>Overview</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  href="/dashboard/teacher/students"
                  onClick={(e) => handleNavClick(e, false, "/dashboard/teacher/students")}
                >
                  <Users className="h-4 w-4" />
                  <span>Students</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  href="/dashboard/teacher/analytics"
                  onClick={(e) => handleNavClick(e, false, "/dashboard/teacher/analytics")}
                >
                  <BarChart3 className="h-4 w-4" />
                  <span>Analytics</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  href="/dashboard/teacher/calendar"
                  onClick={(e) => handleNavClick(e, false, "/dashboard/teacher/calendar")}
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
        <SidebarGroupLabel>Student Support</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  href="/dashboard/teacher/feedback"
                  onClick={(e) => handleNavClick(e, false, "/dashboard/teacher/feedback")}
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Feedback</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  href="/dashboard/teacher/goals"
                  onClick={(e) => handleNavClick(e, false, "/dashboard/teacher/goals")}
                >
                  <Goal className="h-4 w-4" />
                  <span>Goals</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  href="/dashboard/teacher/lessons"
                  onClick={(e) => handleNavClick(e, false, "/dashboard/teacher/lessons")}
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Lessons</span>
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
                  href="/dashboard/teacher/settings"
                  onClick={(e) => handleNavClick(e, false, "/dashboard/teacher/settings")}
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
