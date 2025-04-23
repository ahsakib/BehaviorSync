import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { StudentDashboardShell } from "@/components/dashboard/student-dashboard-shell"
import { FeedbackTimeline } from "@/components/student/feedback-timeline"
import { GoalTracker } from "@/components/student/goal-tracker"
import { ReflectionSpace } from "@/components/student/reflection-space"
import { StudentStats } from "@/components/student/student-stats"

export default function StudentDashboardPage() {
  return (
    <StudentDashboardShell>
      <DashboardHeader
        heading="Student Dashboard"
        text="View feedback, reflect on your behavior, and set personal goals."
        role="student"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2">
          <FeedbackTimeline />
        </div>
        <div className="space-y-4">
          <StudentStats />
          <GoalTracker />
        </div>
      </div>
      <div className="mt-6">
        <ReflectionSpace />
      </div>
    </StudentDashboardShell>
  )
}
