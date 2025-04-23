"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, AlertCircle, MessageSquare } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

// Mock data for children
const childrenData = [
  {
    id: 1,
    name: "Alex Johnson",
    grade: "5th Grade",
    teacher: "Ms. Smith",
    avatar: "/placeholder-user.jpg",
    initials: "AJ",
    stats: {
      positive: 75,
      needsImprovement: 25,
      responseRate: 80,
    },
    recentFeedback: [
      {
        id: 1,
        teacher: "Ms. Smith",
        teacherInitials: "MS",
        avatar: "/placeholder-user.jpg",
        type: "positive",
        category: "Collaboration",
        comment: "Great teamwork during the group project today. Alex helped everyone stay focused.",
        time: "Today, 10:30 AM",
      },
      {
        id: 2,
        teacher: "Mr. Johnson",
        teacherInitials: "MJ",
        avatar: "/placeholder-user.jpg",
        type: "improvement",
        category: "Focus",
        comment: "Alex seemed distracted during the lesson. Let's work on staying focused.",
        time: "Yesterday, 2:15 PM",
      },
    ],
  },
  {
    id: 2,
    name: "Jamie Johnson",
    grade: "3rd Grade",
    teacher: "Mr. Davis",
    avatar: "/placeholder-user.jpg",
    initials: "JJ",
    stats: {
      positive: 85,
      needsImprovement: 15,
      responseRate: 90,
    },
    recentFeedback: [
      {
        id: 1,
        teacher: "Mr. Davis",
        teacherInitials: "MD",
        avatar: "/placeholder-user.jpg",
        type: "positive",
        category: "Effort",
        comment: "Jamie put in extra effort on the science project. Well done!",
        time: "Today, 1:45 PM",
      },
    ],
  },
]

export function ChildrenOverview() {
  const { toast } = useToast()
  const [activeChild, setActiveChild] = useState(childrenData[0].id.toString())
  const [messageDialogOpen, setMessageDialogOpen] = useState(false)
  const [messageText, setMessageText] = useState("")
  const [selectedTeacher, setSelectedTeacher] = useState<string>("")

  const handleSendMessage = () => {
    if (!messageText.trim() || !selectedTeacher) {
      toast({
        title: "Missing Information",
        description: "Please enter a message and select a teacher.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Message Sent",
      description: `Your message has been sent to ${selectedTeacher}.`,
    })

    setMessageText("")
    setSelectedTeacher("")
    setMessageDialogOpen(false)
  }

  const currentChild = childrenData.find((child) => child.id.toString() === activeChild)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Children Overview</CardTitle>
        <CardDescription>Monitor your children's behavior and progress.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeChild} onValueChange={setActiveChild}>
          <TabsList className="mb-4">
            {childrenData.map((child) => (
              <TabsTrigger key={child.id} value={child.id.toString()}>
                {child.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {childrenData.map((child) => (
            <TabsContent key={child.id} value={child.id.toString()}>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={child.avatar || "/placeholder.svg"} alt={child.name} />
                    <AvatarFallback>{child.initials}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">{child.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {child.grade} • {child.teacher}
                    </p>
                  </div>
                  <div className="sm:ml-auto">
                    <Dialog open={messageDialogOpen} onOpenChange={setMessageDialogOpen}>
                      <DialogTrigger asChild>
                        <Button>
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Message Teacher
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Message Teacher</DialogTitle>
                          <DialogDescription>Send a message to your child's teacher.</DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <label className="text-sm font-medium">To</label>
                            <select
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              value={selectedTeacher}
                              onChange={(e) => setSelectedTeacher(e.target.value)}
                            >
                              <option value="">Select a teacher</option>
                              <option value={child.teacher}>{child.teacher}</option>
                              {child.recentFeedback.map(
                                (feedback) =>
                                  feedback.teacher !== child.teacher && (
                                    <option key={feedback.id} value={feedback.teacher}>
                                      {feedback.teacher}
                                    </option>
                                  ),
                              )}
                            </select>
                          </div>
                          <div className="grid gap-2">
                            <label className="text-sm font-medium">Message</label>
                            <Textarea
                              placeholder="Type your message here..."
                              value={messageText}
                              onChange={(e) => setMessageText(e.target.value)}
                              rows={4}
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setMessageDialogOpen(false)}>
                            Cancel
                          </Button>
                          <Button onClick={handleSendMessage}>Send Message</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Positive Feedback</h4>
                    <Progress value={child.stats.positive} className="h-2" />
                    <p className="text-sm text-muted-foreground">{child.stats.positive}% of total feedback</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Needs Improvement</h4>
                    <Progress value={child.stats.needsImprovement} className="h-2" />
                    <p className="text-sm text-muted-foreground">{child.stats.needsImprovement}% of total feedback</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Response Rate</h4>
                    <Progress value={child.stats.responseRate} className="h-2" />
                    <p className="text-sm text-muted-foreground">
                      {child.stats.responseRate}% of feedback responded to
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Recent Feedback</h3>
                  <div className="space-y-4">
                    {child.recentFeedback.map((feedback) => (
                      <div key={feedback.id} className="border rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={feedback.avatar || "/placeholder.svg"} alt={feedback.teacher} />
                            <AvatarFallback>{feedback.teacherInitials}</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1 flex-1">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{feedback.teacher}</span>
                                {feedback.type === "positive" ? (
                                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                    <CheckCircle className="h-3 w-3 mr-1" /> Positive
                                  </Badge>
                                ) : (
                                  <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                                    <AlertCircle className="h-3 w-3 mr-1" /> Needs Improvement
                                  </Badge>
                                )}
                              </div>
                              <span className="text-xs text-muted-foreground">{feedback.time}</span>
                            </div>
                            <p className="text-sm font-medium">{feedback.category}</p>
                            <p className="text-sm">{feedback.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
