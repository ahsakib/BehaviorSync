"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, MessageSquare, FileText, BarChart3 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function QuickActions() {
  const { toast } = useToast()

  const handleAction = (action: string) => {
    toast({
      title: "Under Construction",
      description: `The ${action} action is currently under development.`,
      variant: "destructive",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common tasks and shortcuts.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            className="h-20 flex flex-col items-center justify-center"
            onClick={() => handleAction("Batch Log")}
          >
            <Users className="h-5 w-5 mb-1" />
            <span className="text-xs">Batch Log</span>
          </Button>
          <Button
            variant="outline"
            className="h-20 flex flex-col items-center justify-center"
            onClick={() => handleAction("Parent Message")}
          >
            <MessageSquare className="h-5 w-5 mb-1" />
            <span className="text-xs">Parent Message</span>
          </Button>
          <Button
            variant="outline"
            className="h-20 flex flex-col items-center justify-center"
            onClick={() => handleAction("Export Report")}
          >
            <FileText className="h-5 w-5 mb-1" />
            <span className="text-xs">Export Report</span>
          </Button>
          <Button
            variant="outline"
            className="h-20 flex flex-col items-center justify-center"
            onClick={() => handleAction("Full Analytics")}
          >
            <BarChart3 className="h-5 w-5 mb-1" />
            <span className="text-xs">Full Analytics</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
