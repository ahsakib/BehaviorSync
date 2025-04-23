"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle } from "lucide-react"

// Mock data for students
const students = [
  { id: 1, name: "Alex Johnson", avatar: "/placeholder-user.jpg", initials: "AJ" },
  { id: 2, name: "Jamie Smith", avatar: "/placeholder-user.jpg", initials: "JS" },
  { id: 3, name: "Taylor Brown", avatar: "/placeholder-user.jpg", initials: "TB" },
  { id: 4, name: "Morgan Lee", avatar: "/placeholder-user.jpg", initials: "ML" },
  { id: 5, name: "Casey Wilson", avatar: "/placeholder-user.jpg", initials: "CW" },
]

export function BehaviorTracker() {
  const [selectedClass, setSelectedClass] = useState("math-101")
  const [selectedStudent, setSelectedStudent] = useState<number | null>(null)
  const [feedbackType, setFeedbackType] = useState("")
  const [feedbackCategory, setFeedbackCategory] = useState("")
  const [comment, setComment] = useState("")

  const handleSubmit = () => {
    // In a real app, this would submit the feedback to the backend
    console.log({
      student: selectedStudent,
      type: feedbackType,
      category: feedbackCategory,
      comment,
    })

    // Reset form
    setSelectedStudent(null)
    setFeedbackType("")
    setFeedbackCategory("")
    setComment("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Behavior Tracker</CardTitle>
        <CardDescription>Log student behavior and provide feedback in real-time.</CardDescription>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Select value={selectedClass} onValueChange={setSelectedClass}>
            <SelectTrigger className="w-full sm:w-[200px]">
              <SelectValue placeholder="Select class" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Classes</SelectLabel>
                <SelectItem value="math-101">Math 101</SelectItem>
                <SelectItem value="science-101">Science 101</SelectItem>
                <SelectItem value="english-101">English 101</SelectItem>
                <SelectItem value="history-101">History 101</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Student</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-right">Recent Feedback</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <Avatar>
                      <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                      <AvatarFallback>{student.initials}</AvatarFallback>
                    </Avatar>
                  </TableCell>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell className="text-right">
                    {student.id % 2 === 0 ? (
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        <CheckCircle className="h-3 w-3 mr-1" /> Positive
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                        <AlertCircle className="h-3 w-3 mr-1" /> Needs Improvement
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" onClick={() => setSelectedStudent(student.id)}>
                      Log Feedback
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {selectedStudent && (
            <div className="border rounded-lg p-4 mt-4">
              <h3 className="text-lg font-medium mb-4">
                Log Feedback for {students.find((s) => s.id === selectedStudent)?.name}
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Feedback Type</label>
                  <Select value={feedbackType} onValueChange={setFeedbackType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="positive">Positive Behavior</SelectItem>
                      <SelectItem value="improvement">Needs Improvement</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <Select value={feedbackCategory} onValueChange={setFeedbackCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {feedbackType === "positive" ? (
                        <>
                          <SelectItem value="collaboration">Collaboration</SelectItem>
                          <SelectItem value="effort">Effort</SelectItem>
                          <SelectItem value="participation">Participation</SelectItem>
                          <SelectItem value="leadership">Leadership</SelectItem>
                          <SelectItem value="respect">Respect</SelectItem>
                        </>
                      ) : (
                        <>
                          <SelectItem value="focus">Focus</SelectItem>
                          <SelectItem value="respect">Respect</SelectItem>
                          <SelectItem value="preparation">Preparation</SelectItem>
                          <SelectItem value="participation">Participation</SelectItem>
                          <SelectItem value="following-directions">Following Directions</SelectItem>
                        </>
                      )}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <label className="text-sm font-medium">Comment (Optional)</label>
                <Textarea
                  placeholder="Add specific details or context..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>

              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={() => setSelectedStudent(null)}>
                  Cancel
                </Button>
                <Button onClick={handleSubmit}>Submit Feedback</Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
