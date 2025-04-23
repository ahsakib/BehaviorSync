"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Activity, BookOpen, Users } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  const [loading, setLoading] = useState<string | null>(null)

  const handleRoleSelect = (role: string) => {
    setLoading(role)
    setTimeout(() => {
      router.push(`/dashboard/${role}`)
    }, 500)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30 p-4">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-primary p-3 rounded-full">
              <Activity className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome to BehaviorSync</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            A cloud-based platform designed to streamline behavior tracking in schools, enhancing efficiency,
            transparency, and student agency.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="overflow-hidden">
            <CardHeader className="bg-blue-500/10 dark:bg-blue-500/20">
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Teacher
              </CardTitle>
              <CardDescription>Track behavior and provide feedback</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="bg-blue-500/20 p-1 rounded-full mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3 h-3 text-blue-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Quick behavior logging with drop-downs
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500/20 p-1 rounded-full mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3 h-3 text-blue-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  View analytics and behavior trends
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500/20 p-1 rounded-full mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3 h-3 text-blue-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Batch logging for multiple students
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700"
                onClick={() => handleRoleSelect("teacher")}
                disabled={loading !== null}
              >
                {loading === "teacher" ? "Loading..." : "Enter as Teacher"}
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader className="bg-emerald-500/10 dark:bg-emerald-500/20">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Student
              </CardTitle>
              <CardDescription>Reflect and set personal goals</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="bg-emerald-500/20 p-1 rounded-full mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3 h-3 text-emerald-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  View and respond to teacher feedback
                </li>
                <li className="flex items-start">
                  <span className="bg-emerald-500/20 p-1 rounded-full mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3 h-3 text-emerald-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Set and track personal behavior goals
                </li>
                <li className="flex items-start">
                  <span className="bg-emerald-500/20 p-1 rounded-full mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3 h-3 text-emerald-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Build a portfolio of growth and achievements
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-emerald-600 hover:bg-emerald-700"
                onClick={() => handleRoleSelect("student")}
                disabled={loading !== null}
              >
                {loading === "student" ? "Loading..." : "Enter as Student"}
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader className="bg-purple-500/10 dark:bg-purple-500/20">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Parent
              </CardTitle>
              <CardDescription>Stay informed and engaged</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="bg-purple-500/20 p-1 rounded-full mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3 h-3 text-purple-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Receive real-time behavior notifications
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-500/20 p-1 rounded-full mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3 h-3 text-purple-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  View progress reports and summaries
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-500/20 p-1 rounded-full mr-2 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3 h-3 text-purple-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Communicate with teachers directly
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-purple-600 hover:bg-purple-700"
                onClick={() => handleRoleSelect("parent")}
                disabled={loading !== null}
              >
                {loading === "parent" ? "Loading..." : "Enter as Parent"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
