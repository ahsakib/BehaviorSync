"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ReflectionSpace() {
  const { toast } = useToast()
  const [dailyReflection, setDailyReflection] = useState("")
  const [weeklyReflection, setWeeklyReflection] = useState("")
  const [reflections, setReflections] = useState<{
    daily: { text: string; date: string }[]
    weekly: { text: string; date: string }[]
  }>({
    daily: [
      {
        text: "Today I helped my classmate with their math problem. I felt good about being able to explain the concept clearly.",
        date: "Yesterday",
      },
    ],
    weekly: [
      {
        text: "This week I improved my focus during reading time. I found that sitting away from the window helped me concentrate better.",
        date: "Last week",
      },
    ],
  })

  const handleSubmitReflection = (type: "daily" | "weekly") => {
    const text = type === "daily" ? dailyReflection : weeklyReflection

    if (!text.trim()) {
      toast({
        title: "Empty Reflection",
        description: "Please enter your reflection before submitting.",
        variant: "destructive",
      })
      return
    }

    const newReflection = {
      text,
      date: "Today",
    }

    if (type === "daily") {
      setReflections({
        ...reflections,
        daily: [newReflection, ...reflections.daily],
      })
      setDailyReflection("")
    } else {
      setReflections({
        ...reflections,
        weekly: [newReflection, ...reflections.weekly],
      })
      setWeeklyReflection("")
    }

    toast({
      title: "Reflection Submitted",
      description: "Your reflection has been saved successfully.",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reflection Space</CardTitle>
        <CardDescription>Reflect on your behavior and set goals for improvement.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="daily">
          <TabsList className="mb-4">
            <TabsTrigger value="daily">Daily Reflection</TabsTrigger>
            <TabsTrigger value="weekly">Weekly Reflection</TabsTrigger>
          </TabsList>

          <TabsContent value="daily">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Today's Reflection</label>
                <Textarea
                  placeholder="Reflect on your behavior today. What went well? What could you improve?"
                  value={dailyReflection}
                  onChange={(e) => setDailyReflection(e.target.value)}
                  rows={4}
                />
                <div className="flex justify-end">
                  <Button onClick={() => handleSubmitReflection("daily")}>Submit Reflection</Button>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                <h3 className="text-sm font-medium">Previous Reflections</h3>
                {reflections.daily.map((reflection, index) => (
                  <div key={index} className="border rounded-lg p-3 space-y-1">
                    <p className="text-sm">{reflection.text}</p>
                    <p className="text-xs text-muted-foreground">{reflection.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="weekly">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">This Week's Reflection</label>
                <Textarea
                  placeholder="Reflect on your behavior this week. What patterns did you notice? What goals will you set for next week?"
                  value={weeklyReflection}
                  onChange={(e) => setWeeklyReflection(e.target.value)}
                  rows={4}
                />
                <div className="flex justify-end">
                  <Button onClick={() => handleSubmitReflection("weekly")}>Submit Reflection</Button>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                <h3 className="text-sm font-medium">Previous Reflections</h3>
                {reflections.weekly.map((reflection, index) => (
                  <div key={index} className="border rounded-lg p-3 space-y-1">
                    <p className="text-sm">{reflection.text}</p>
                    <p className="text-xs text-muted-foreground">{reflection.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
