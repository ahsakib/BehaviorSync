import type React from "react"
import { DashboardNav } from "@/components/dashboard/dashboard-nav"
import { SiteHeader } from "@/components/site-header"
import { SidebarProvider, Sidebar, SidebarContent } from "@/components/ui/sidebar"

interface DashboardShellProps {
  children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]">
          <Sidebar>
            <SidebarContent>
              <DashboardNav />
            </SidebarContent>
          </Sidebar>
          <main className="flex w-full flex-col overflow-hidden p-4 md:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
