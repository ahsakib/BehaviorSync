import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { BehaviorTracker } from "@/components/behavior-tracker"
import { AnalyticsSummary } from "@/components/analytics-summary"
import { RecentActivity } from "@/components/recent-activity"
import { QuickActions } from "@/components/quick-actions"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Teacher Dashboard"
        text="Track student behavior, provide feedback, and monitor progress."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2">
          <BehaviorTracker />
        </div>
        <div className="space-y-4">
          <QuickActions />
          <RecentActivity />
        </div>
      </div>
      <div className="mt-6">
        <AnalyticsSummary />
      </div>
    </DashboardShell>
  )
}
