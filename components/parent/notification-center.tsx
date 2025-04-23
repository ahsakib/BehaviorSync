"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bell, CheckCircle, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Mock data for notifications
const initialNotifications = [
  {
    id: 1,
    title: "New Feedback",
    description: "Ms. Smith provided new feedback for Alex",
    time: "10 min ago",
    read: false,
    type: "feedback",
    childName: "Alex",
  },
  {
    id: 2,
    title: "Goal Achieved",
    description: "Jamie completed the 'Raise hand before speaking' goal",
    time: "1 hour ago",
    read: false,
    type: "goal",
    childName: "Jamie",
  },
  {
    id: 3,
    title: "Teacher Message",
    description: "Mr. Davis sent you a message about Jamie's progress",
    time: "Yesterday",
    read: true,
    type: "message",
    childName: "Jamie",
  },
  {
    id: 4,
    title: "Weekly Report",
    description: "Alex's weekly behavior report is now available",
    time: "2 days ago",
    read: true,
    type: "report",
    childName: "Alex",
  },
]

export function NotificationCenter() {
  const { toast } = useToast()
  const [notifications, setNotifications] = useState(initialNotifications)

  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
    toast({
      title: "Notifications Cleared",
      description: "All notifications have been marked as read.",
    })
  }

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              Notifications
              {unreadCount > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {unreadCount} new
                </Badge>
              )}
            </CardTitle>
            <CardDescription>Stay updated on your children's activities</CardDescription>
          </div>
          {unreadCount > 0 && (
            <Button variant="outline" size="sm" onClick={markAllAsRead}>
              Mark all read
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 max-h-[300px] overflow-auto pr-1">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
                  notification.read ? "bg-background" : "bg-muted/50"
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className={`rounded-full p-2 ${getNotificationColor(notification.type)}`}>
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-sm">{notification.title}</p>
                      <p className="text-sm text-muted-foreground">{notification.description}</p>
                    </div>
                    {!notification.read && <Badge variant="secondary" className="ml-2 h-2 w-2 rounded-full p-0" />}
                  </div>
                  <p className="text-xs text-muted-foreground">{notification.time}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>No notifications</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

function getNotificationColor(type: string) {
  switch (type) {
    case "feedback":
      return "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
    case "goal":
      return "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
    case "message":
      return "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
    case "report":
      return "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
    default:
      return "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
  }
}

function getNotificationIcon(type: string) {
  switch (type) {
    case "feedback":
      return <AlertCircle className="h-4 w-4" />
    case "goal":
      return <CheckCircle className="h-4 w-4" />
    case "message":
      return <Bell className="h-4 w-4" />
    case "report":
      return <Bell className="h-4 w-4" />
    default:
      return <Bell className="h-4 w-4" />
  }
}
