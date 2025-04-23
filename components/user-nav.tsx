"use client"

import type React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut, User, Settings } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

interface UserNavProps {
  role?: "teacher" | "student" | "parent"
}

export function UserNav({ role }: UserNavProps) {
  const { toast } = useToast()

  const getUserInfo = () => {
    switch (role) {
      case "teacher":
        return { name: "Ms. Smith", email: "m.smith@school.edu", initials: "MS" }
      case "student":
        return { name: "Alex Johnson", email: "alex.j@school.edu", initials: "AJ" }
      case "parent":
        return { name: "Jamie Smith", email: "jamie.smith@example.com", initials: "JS" }
      default:
        return { name: "Guest User", email: "guest@example.com", initials: "GU" }
    }
  }

  const handleMenuItemClick = (e: React.MouseEvent, action: string) => {
    if (action !== "logout") {
      e.preventDefault()
      toast({
        title: "Under Construction",
        description: `The ${action} feature is currently under development.`,
        variant: "destructive",
      })
    }
  }

  const userInfo = getUserInfo()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-user.jpg" alt={userInfo.name} />
            <AvatarFallback>{userInfo.initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{userInfo.name}</p>
            <p className="text-xs leading-none text-muted-foreground">{userInfo.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={(e) => handleMenuItemClick(e, "Profile")}>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={(e) => handleMenuItemClick(e, "Settings")}>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
