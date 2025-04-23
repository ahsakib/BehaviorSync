import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function StudentStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Stats</CardTitle>
        <CardDescription>Your behavior feedback summary</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Positive Feedback</span>
            <span className="text-sm font-medium">75%</span>
          </div>
          <Progress value={75} className="h-2 bg-muted" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Needs Improvement</span>
            <span className="text-sm font-medium">25%</span>
          </div>
          <Progress value={25} className="h-2 bg-muted" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Response Rate</span>
            <span className="text-sm font-medium">80%</span>
          </div>
          <Progress value={80} className="h-2 bg-muted" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Goal Completion</span>
            <span className="text-sm font-medium">60%</span>
          </div>
          <Progress value={60} className="h-2 bg-muted" />
        </div>

        <div className="pt-2 border-t">
          <p className="text-xs text-muted-foreground">Last updated: Today, 11:30 AM</p>
        </div>
      </CardContent>
    </Card>
  )
}
