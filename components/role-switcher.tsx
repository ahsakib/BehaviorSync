"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { BookOpen, Users } from "lucide-react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

interface RoleSwitcherProps {
  currentRole: "teacher" | "student" | "parent"
}

export function RoleSwitcher({ currentRole }: RoleSwitcherProps) {
  const router = useRouter()
  const { toast } = useToast()

  const handleRoleSwitch = (role: string) => {
    if (role === currentRole) {
      toast({
        title: "Already in this view",
        description: `You are already in the ${role} view.`,
      })
      return
    }

    router.push(`/dashboard/${role}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {currentRole === "teacher" && <BookOpen className="mr-2 h-4 w-4" />}
          {currentRole === "student" && <Users className="mr-2 h-4 w-4" />}
          {currentRole === "parent" && <Users className="mr-2 h-4 w-4" />}
          {currentRole ? currentRole.charAt(0).toUpperCase() + currentRole.slice(1) : "User"} View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {currentRole !== "teacher" && (
          <DropdownMenuItem onClick={() => handleRoleSwitch("teacher")}>
            <BookOpen className="mr-2 h-4 w-4" />
            <span>Switch to Teacher</span>
          </DropdownMenuItem>
        )}
        {currentRole !== "student" && (
          <DropdownMenuItem onClick={() => handleRoleSwitch("student")}>
            <Users className="mr-2 h-4 w-4" />
            <span>Switch to Student</span>
          </DropdownMenuItem>
        )}
        {currentRole !== "parent" && (
          <DropdownMenuItem onClick={() => handleRoleSwitch("parent")}>
            <Users className="mr-2 h-4 w-4" />
            <span>Switch to Parent</span>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
