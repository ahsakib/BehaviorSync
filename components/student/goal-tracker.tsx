"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { PlusCircle, CheckCircle, Goal } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

// Mock data for goals
const initialGoals = [
  {
    id: 1,
    title: "Raise hand before speaking",
    target: "5 times this week",
    progress: 60,
  },
  {
    id: 2,
    title: "Complete all homework on time",
    target: "Every day",
    progress: 80,
  },
]

export function GoalTracker() {
  const { toast } = useToast()
  const [goals, setGoals] = useState(initialGoals)
  const [newGoal, setNewGoal] = useState({ title: "", target: "" })
  const [open, setOpen] = useState(false)

  const handleAddGoal = () => {
    if (!newGoal.title || !newGoal.target) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields for your goal.",
        variant: "destructive",
      })
      return
    }

    const goal = {
      id: goals.length + 1,
      title: newGoal.title,
      target: newGoal.target,
      progress: 0,
    }

    setGoals([...goals, goal])
    setNewGoal({ title: "", target: "" })
    setOpen(false)

    toast({
      title: "Goal Added",
      description: "Your new goal has been added successfully.",
    })
  }

  const updateProgress = (id: number, increment: boolean) => {
    setGoals(
      goals.map((goal) => {
        if (goal.id === id) {
          const newProgress = increment ? Math.min(100, goal.progress + 10) : Math.max(0, goal.progress - 10)

          return { ...goal, progress: newProgress }
        }
        return goal
      }),
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>My Goals</CardTitle>
            <CardDescription>Track your personal behavior goals</CardDescription>
          </div>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="sm">
                <PlusCircle className="h-4 w-4 mr-2" />
                New Goal
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create a New Goal</DialogTitle>
                <DialogDescription>Set a specific, achievable behavior goal to work towards.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="goal-title">Goal</Label>
                  <Input
                    id="goal-title"
                    placeholder="e.g., Raise hand before speaking"
                    value={newGoal.title}
                    onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="goal-target">Target</Label>
                  <Input
                    id="goal-target"
                    placeholder="e.g., 5 times this week"
                    value={newGoal.target}
                    onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddGoal}>Create Goal</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {goals.map((goal) => (
            <div key={goal.id} className="space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Goal className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{goal.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Target: {goal.target}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => updateProgress(goal.id, false)}
                    disabled={goal.progress <= 0}
                  >
                    <span className="text-lg font-bold">-</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => updateProgress(goal.id, true)}
                    disabled={goal.progress >= 100}
                  >
                    <span className="text-lg font-bold">+</span>
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Progress value={goal.progress} className="h-2 flex-1" />
                <span className="text-xs font-medium">{goal.progress}%</span>
              </div>
              {goal.progress === 100 && (
                <div className="flex items-center text-green-600 text-xs">
                  <CheckCircle className="h-3 w-3 mr-1" /> Goal achieved!
                </div>
              )}
            </div>
          ))}

          {goals.length === 0 && (
            <div className="text-center py-4 text-muted-foreground">
              <p>No goals set yet. Create your first goal!</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
