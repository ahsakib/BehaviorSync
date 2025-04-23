"use client"

import type React from "react"

import Link from "next/link"
import { Users, Calendar, Settings, Home, MessageSquare, Bell, FileText } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

export function ParentNav() {
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
                <Link href="/dashboard/parent">
                  <Home className="h-4 w-4" />
                  <span>Overview</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  href="/dashboard/parent/children"
                  onClick={(e) => handleNavClick(e, false, "/dashboard/parent/children")}
                >
                  <Users className="h-4 w-4" />
                  <span>My Children</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  href="/dashboard/parent/notifications"
                  onClick={(e) => handleNavClick(e, false, "/dashboard/parent/notifications")}
                >
                  <Bell className="h-4 w-4" />
                  <span>Notifications</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  href="/dashboard/parent/reports"
                  onClick={(e) => handleNavClick(e, false, "/dashboard/parent/reports")}
                >
                  <FileText className="h-4 w-4" />
                  <span>Reports</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>Communication</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  href="/dashboard/parent/messages"
                  onClick={(e) => handleNavClick(e, false, "/dashboard/parent/messages")}
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Messages</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  href="/dashboard/parent/calendar"
                  onClick={(e) => handleNavClick(e, false, "/dashboard/parent/calendar")}
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
                  href="/dashboard/parent/settings"
                  onClick={(e) => handleNavClick(e, false, "/dashboard/parent/settings")}
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
