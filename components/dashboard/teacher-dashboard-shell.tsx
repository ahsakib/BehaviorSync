import type React from "react"
import { TeacherNav } from "@/components/dashboard/teacher-nav"
import { SiteHeader } from "@/components/site-header"
import { Sidebar, SidebarContent } from "@/components/ui/sidebar"

interface TeacherDashboardShellProps {
  children: React.ReactNode
}

export function TeacherDashboardShell({ children }: TeacherDashboardShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader role="teacher" />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]">
        <Sidebar>
          <SidebarContent>
            <TeacherNav />
          </SidebarContent>
        </Sidebar>
        <main className="flex w-full flex-col overflow-hidden p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
