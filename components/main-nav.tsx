"use client"

import type React from "react"

import Link from "next/link"
import { Activity } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface MainNavProps {
  role?: "teacher" | "student" | "parent"
}

export function MainNav({ role }: MainNavProps) {
  const { toast } = useToast()

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    // Only show alert for non-home links
    if (href !== "/") {
      e.preventDefault()
      toast({
        title: "Under Construction",
        description: "This section is currently under development.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Activity className="h-6 w-6" />
        <span className="inline-block font-bold">BehaviorSync</span>
      </Link>
      {role && (
        <nav className="hidden md:flex gap-6">
          <Link href={`/dashboard/${role}`} className="text-sm font-medium transition-colors hover:text-primary">
            Dashboard
          </Link>
          {role === "teacher" && (
            <>
              <Link
                href={`/dashboard/${role}/students`}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={(e) => handleNavClick(e, `/dashboard/${role}/students`)}
              >
                Students
              </Link>
              <Link
                href={`/dashboard/${role}/analytics`}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={(e) => handleNavClick(e, `/dashboard/${role}/analytics`)}
              >
                Analytics
              </Link>
            </>
          )}
          {role === "student" && (
            <>
              <Link
                href={`/dashboard/${role}/feedback`}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={(e) => handleNavClick(e, `/dashboard/${role}/feedback`)}
              >
                My Feedback
              </Link>
              <Link
                href={`/dashboard/${role}/goals`}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={(e) => handleNavClick(e, `/dashboard/${role}/goals`)}
              >
                My Goals
              </Link>
            </>
          )}
          {role === "parent" && (
            <>
              <Link
                href={`/dashboard/${role}/children`}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={(e) => handleNavClick(e, `/dashboard/${role}/children`)}
              >
                My Children
              </Link>
              <Link
                href={`/dashboard/${role}/messages`}
                className="text-sm font-medium transition-colors hover:text-primary"
                onClick={(e) => handleNavClick(e, `/dashboard/${role}/messages`)}
              >
                Messages
              </Link>
            </>
          )}
        </nav>
      )}
    </div>
  )
}
