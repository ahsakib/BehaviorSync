import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { ParentDashboardShell } from "@/components/dashboard/parent-dashboard-shell"
import { ChildrenOverview } from "@/components/parent/children-overview"
import { NotificationCenter } from "@/components/parent/notification-center"
import { ProgressReport } from "@/components/parent/progress-report"
import { TeacherMessages } from "@/components/parent/teacher-messages"

export default function ParentDashboardPage() {
  return (
    <ParentDashboardShell>
      <DashboardHeader
        heading="Parent Dashboard"
        text="Stay informed about your child's behavior and progress at school."
        role="parent"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2">
          <ChildrenOverview />
        </div>
        <div className="space-y-4">
          <NotificationCenter />
          <TeacherMessages />
        </div>
      </div>
      <div className="mt-6">
        <ProgressReport />
      </div>
    </ParentDashboardShell>
  )
}
