"use client"

import type React from "react"

import { SidebarProvider } from "@/components/ui/sidebar"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()

  // Redirect to appropriate dashboard if just /dashboard is accessed
  useEffect(() => {
    if (pathname === "/dashboard") {
      router.push("/dashboard/teacher")
    }
  }, [pathname, router])

  return <SidebarProvider>{children}</SidebarProvider>
}
