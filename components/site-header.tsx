"use client"

import type React from "react"

import { UserNav } from "@/components/user-nav"
import { MainNav } from "@/components/main-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { ThemeCustomizer } from "@/components/theme-customizer"
import { Button } from "@/components/ui/button"
import { Bell, Home } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

interface SiteHeaderProps {
  role?: "teacher" | "student" | "parent"
}

export function SiteHeader({ role }: SiteHeaderProps) {
  const { toast } = useToast()

  const handleButtonClick = (e: React.MouseEvent, action: string) => {
    e.preventDefault()
    toast({
      title: "Under Construction",
      description: `The ${action} feature is currently under development.`,
      variant: "destructive",
    })
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav role={role} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            {role && (
              <>
                <Button variant="outline" size="icon" onClick={(e) => handleButtonClick(e, "Notifications")}>
                  <Bell className="h-4 w-4" />
                  <span className="sr-only">Notifications</span>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="/">
                    <Home className="h-4 w-4" />
                    <span className="sr-only">Return to Home</span>
                  </Link>
                </Button>
              </>
            )}
            <ThemeCustomizer />
            <ModeToggle />
            <UserNav role={role} />
          </nav>
        </div>
      </div>
    </header>
  )
}
