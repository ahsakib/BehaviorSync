"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, AlertCircle, MessageSquare } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Mock data for feedback
const feedbackData = [
  {
    id: 1,
    teacher: "Ms. Smith",
    teacherInitials: "MS",
    avatar: "/placeholder-user.jpg",
    type: "positive",
    category: "Collaboration",
    comment: "Great teamwork during the group project today. You helped everyone stay focused.",
    time: "Today, 10:30 AM",
    responded: false,
  },
  {
    id: 2,
    teacher: "Mr. Johnson",
    teacherInitials: "MJ",
    avatar: "/placeholder-user.jpg",
    type: "improvement",
    category: "Focus",
    comment: "You seemed distracted during the lesson. Let's work on staying focused.",
    time: "Yesterday, 2:15 PM",
    responded: true,
    response: "I was having trouble understanding the concept. I'll ask for help next time.",
  },
  {
    id: 3,
    teacher: "Ms. Smith",
    teacherInitials: "MS",
    avatar: "/placeholder-user.jpg",
    type: "positive",
    category: "Effort",
    comment: "You put in extra effort on your assignment. Well done!",
    time: "Monday, 11:45 AM",
    responded: true,
    response: "Thank you! I worked hard on it.",
  },
]

export function FeedbackTimeline() {
  const { toast } = useToast()
  const [feedback, setFeedback] = useState(feedbackData)
  const [responses, setResponses] = useState<Record<number, string>>({})
  const [respondingTo, setRespondingTo] = useState<number | null>(null)

  const handleRespond = (id: number) => {
    if (!responses[id]?.trim()) {
      toast({
        title: "Empty Response",
        description: "Please enter a response before submitting.",
        variant: "destructive",
      })
      return
    }

    // Update the feedback with the response
    const updatedFeedback = feedback.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          responded: true,
          response: responses[id],
        }
      }
      return item
    })

    setFeedback(updatedFeedback)
    setResponses({ ...responses, [id]: "" })
    setRespondingTo(null)

    toast({
      title: "Response Submitted",
      description: "Your response has been submitted successfully.",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback Timeline</CardTitle>
        <CardDescription>View and respond to feedback from your teachers.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {feedback.map((item) => (
            <div key={item.id} className="border rounded-lg p-4">
              <div className="flex items-start gap-3 mb-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={item.avatar || "/placeholder.svg"} alt={item.teacher} />
                  <AvatarFallback>{item.teacherInitials}</AvatarFallback>
                </Avatar>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{item.teacher}</span>
                      {item.type === "positive" ? (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          <CheckCircle className="h-3 w-3 mr-1" /> Positive
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                          <AlertCircle className="h-3 w-3 mr-1" /> Needs Improvement
                        </Badge>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">{item.time}</span>
                  </div>
                  <p className="text-sm font-medium">{item.category}</p>
                  <p className="text-sm">{item.comment}</p>
                </div>
              </div>

              {item.responded && item.response && (
                <div className="ml-12 mt-3 border-l-2 pl-4 py-2">
                  <div className="flex items-start gap-2">
                    <MessageSquare className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Your Response</p>
                      <p className="text-sm">{item.response}</p>
                    </div>
                  </div>
                </div>
              )}

              {!item.responded && (
                <div className="ml-12 mt-3">
                  {respondingTo === item.id ? (
                    <div className="space-y-2">
                      <Textarea
                        placeholder="Write your response..."
                        value={responses[item.id] || ""}
                        onChange={(e) => setResponses({ ...responses, [item.id]: e.target.value })}
                      />
                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm" onClick={() => setRespondingTo(null)}>
                          Cancel
                        </Button>
                        <Button size="sm" onClick={() => handleRespond(item.id)}>
                          Submit
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Button variant="outline" size="sm" onClick={() => setRespondingTo(item.id)}>
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Respond
                    </Button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
