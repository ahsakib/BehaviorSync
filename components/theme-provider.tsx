"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { createContext, useContext, useState } from "react"

type ThemeColor = "blue" | "green" | "purple" | "orange" | "pink"

interface ThemeContextType {
  themeColor: ThemeColor
  setThemeColor: (color: ThemeColor) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [themeColor, setThemeColor] = useState<ThemeColor>("blue")

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      <NextThemesProvider {...props}>
        <div className={`theme-${themeColor}`}>{children}</div>
      </NextThemesProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider")
  }
  return context
}
