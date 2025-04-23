import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { TeacherDashboardShell } from "@/components/dashboard/teacher-dashboard-shell"
import { BehaviorTracker } from "@/components/teacher/behavior-tracker"
import { AnalyticsSummary } from "@/components/teacher/analytics-summary"
import { RecentActivity } from "@/components/teacher/recent-activity"
import { QuickActions } from "@/components/teacher/quick-actions"

export default function TeacherDashboardPage() {
  return (
    <TeacherDashboardShell>
      <DashboardHeader
        heading="Teacher Dashboard"
        text="Track student behavior, provide feedback, and monitor progress."
        role="teacher"
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
    </TeacherDashboardShell>
  )
}
