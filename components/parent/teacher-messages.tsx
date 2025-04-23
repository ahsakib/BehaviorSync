"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

// Mock data for messages
const initialMessages = [
  {
    id: 1,
    teacher: "Ms. Smith",
    teacherInitials: "MS",
    avatar: "/placeholder-user.jpg",
    message: "Alex has been doing great in math class this week. He's been very engaged and helping other students.",
    time: "Today, 10:30 AM",
    childName: "Alex",
  },
  {
    id: 2,
    teacher: "Mr. Davis",
    teacherInitials: "MD",
    avatar: "/placeholder-user.jpg",
    message: "I wanted to let you know that Jamie has been making excellent progress with reading comprehension.",
    time: "Yesterday, 2:15 PM",
    childName: "Jamie",
  },
]

export function TeacherMessages() {
  const { toast } = useToast()
  const [messages, setMessages] = useState(initialMessages)
  const [replyDialogOpen, setReplyDialogOpen] = useState(false)
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null)
  const [replyText, setReplyText] = useState("")

  const handleReply = () => {
    if (!replyText.trim()) {
      toast({
        title: "Empty Message",
        description: "Please enter a message before sending.",
        variant: "destructive",
      })
      return
    }

    const messageToReply = messages.find((m) => m.id === selectedMessage)

    if (messageToReply) {
      toast({
        title: "Reply Sent",
        description: `Your reply to ${messageToReply.teacher} has been sent.`,
      })
    }

    setReplyText("")
    setSelectedMessage(null)
    setReplyDialogOpen(false)
  }

  const openReplyDialog = (id: number) => {
    setSelectedMessage(id)
    setReplyDialogOpen(true)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Teacher Messages</CardTitle>
        <CardDescription>Communication from your children's teachers</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {messages.length > 0 ? (
            messages.map((message) => (
              <div key={message.id} className="border rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={message.avatar || "/placeholder.svg"} alt={message.teacher} />
                    <AvatarFallback>{message.teacherInitials}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium">{message.teacher}</span>
                        <span className="text-xs text-muted-foreground ml-2">Re: {message.childName}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{message.time}</span>
                    </div>
                    <p className="text-sm">{message.message}</p>
                    <div className="pt-2">
                      <Button variant="outline" size="sm" onClick={() => openReplyDialog(message.id)}>
                        <MessageSquare className="h-3 w-3 mr-2" />
                        Reply
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <MessageSquare className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>No messages from teachers</p>
            </div>
          )}
        </div>

        <Dialog open={replyDialogOpen} onOpenChange={setReplyDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Reply to Teacher</DialogTitle>
              <DialogDescription>
                {selectedMessage &&
                  `Replying to ${messages.find((m) => m.id === selectedMessage)?.teacher} about ${messages.find((m) => m.id === selectedMessage)?.childName}`}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Textarea
                placeholder="Type your reply here..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                rows={4}
              />
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setReplyDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleReply}>Send Reply</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}
