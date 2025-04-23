"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Paintbrush } from "lucide-react"
import { useThemeContext } from "./theme-provider"

export function ThemeCustomizer() {
  const { themeColor, setThemeColor } = useThemeContext()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Paintbrush className="h-4 w-4" />
          <span className="sr-only">Customize theme</span>
          <div className={`absolute bottom-1 right-1 h-2 w-2 rounded-full bg-${themeColor}-500`} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setThemeColor("blue")}>
          <div className="mr-2 h-4 w-4 rounded-full bg-blue-500" />
          <span>Blue</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeColor("green")}>
          <div className="mr-2 h-4 w-4 rounded-full bg-emerald-500" />
          <span>Green</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeColor("purple")}>
          <div className="mr-2 h-4 w-4 rounded-full bg-purple-500" />
          <span>Purple</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeColor("orange")}>
          <div className="mr-2 h-4 w-4 rounded-full bg-orange-500" />
          <span>Orange</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeColor("pink")}>
          <div className="mr-2 h-4 w-4 rounded-full bg-pink-500" />
          <span>Pink</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
