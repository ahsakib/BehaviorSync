import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle } from "lucide-react"

// Mock data for recent activity
const recentActivity = [
  {
    id: 1,
    student: "Alex Johnson",
    initials: "AJ",
    avatar: "/placeholder-user.jpg",
    type: "positive",
    category: "Collaboration",
    time: "10 min ago",
  },
  {
    id: 2,
    student: "Jamie Smith",
    initials: "JS",
    avatar: "/placeholder-user.jpg",
    type: "improvement",
    category: "Focus",
    time: "25 min ago",
  },
  {
    id: 3,
    student: "Taylor Brown",
    initials: "TB",
    avatar: "/placeholder-user.jpg",
    type: "positive",
    category: "Effort",
    time: "45 min ago",
  },
  {
    id: 4,
    student: "Morgan Lee",
    initials: "ML",
    avatar: "/placeholder-user.jpg",
    type: "improvement",
    category: "Respect",
    time: "1 hour ago",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest feedback provided to students.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.student} />
                <AvatarFallback>{activity.initials}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{activity.student}</span>
                  {activity.type === "positive" ? (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      <CheckCircle className="h-3 w-3 mr-1" /> Positive
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                      <AlertCircle className="h-3 w-3 mr-1" /> Needs Improvement
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {activity.category} • {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
