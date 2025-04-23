"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
} from "@/components/ui/chart"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Mock data for charts
const weeklyData = [
  { name: "Week 1", positive: 65, needsImprovement: 35 },
  { name: "Week 2", positive: 70, needsImprovement: 30 },
  { name: "Week 3", positive: 60, needsImprovement: 40 },
  { name: "Week 4", positive: 75, needsImprovement: 25 },
  { name: "Week 5", positive: 80, needsImprovement: 20 },
  { name: "Week 6", positive: 85, needsImprovement: 15 },
]

const categoryData = [
  { name: "Collaboration", positive: 30, needsImprovement: 5 },
  { name: "Effort", positive: 25, needsImprovement: 10 },
  { name: "Participation", positive: 20, needsImprovement: 15 },
  { name: "Leadership", positive: 15, needsImprovement: 5 },
  { name: "Respect", positive: 10, needsImprovement: 5 },
]

export function ProgressReport() {
  const { toast } = useToast()

  const handleDownload = () => {
    toast({
      title: "Under Construction",
      description: "The download report feature is currently under development.",
      variant: "destructive",
    })
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Progress Report</CardTitle>
            <CardDescription>Track your child's behavior progress over time</CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="trends">
          <TabsList className="mb-4">
            <TabsTrigger value="trends">Trends Over Time</TabsTrigger>
            <TabsTrigger value="categories">Behavior Categories</TabsTrigger>
          </TabsList>
          <TabsContent value="trends">
            <div className="h-[300px]">
              <Chart>
                <ChartContainer>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={weeklyData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <ChartTooltip>
                                <ChartTooltipContent>
                                  {payload.map((entry, index) => (
                                    <div key={`tooltip-${index}`} className="flex items-center">
                                      <div
                                        className="w-3 h-3 rounded-full mr-2"
                                        style={{ backgroundColor: entry.color }}
                                      />
                                      <span className="font-medium">{entry.name}: </span>
                                      <span className="ml-1">{entry.value}%</span>
                                    </div>
                                  ))}
                                </ChartTooltipContent>
                              </ChartTooltip>
                            )
                          }
                          return null
                        }}
                      />
                      <Legend
                        content={(props) => {
                          const { payload } = props
                          return (
                            <ChartLegend>
                              {payload?.map((entry, index) => (
                                <ChartLegendItem key={`legend-${index}`} color={entry.color}>
                                  {entry.value}
                                </ChartLegendItem>
                              ))}
                            </ChartLegend>
                          )
                        }}
                      />
                      <Line type="monotone" dataKey="positive" stroke="#4f46e5" name="Positive" />
                      <Line type="monotone" dataKey="needsImprovement" stroke="#f59e0b" name="Needs Improvement" />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </Chart>
            </div>
          </TabsContent>
          <TabsContent value="categories">
            <div className="h-[300px]">
              <Chart>
                <ChartContainer>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={categoryData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <ChartTooltip>
                                <ChartTooltipContent>
                                  {payload.map((entry, index) => (
                                    <div key={`tooltip-${index}`} className="flex items-center">
                                      <div
                                        className="w-3 h-3 rounded-full mr-2"
                                        style={{ backgroundColor: entry.color }}
                                      />
                                      <span className="font-medium">{entry.name}: </span>
                                      <span className="ml-1">{entry.value}</span>
                                    </div>
                                  ))}
                                </ChartTooltipContent>
                              </ChartTooltip>
                            )
                          }
                          return null
                        }}
                      />
                      <Legend
                        content={(props) => {
                          const { payload } = props
                          return (
                            <ChartLegend>
                              {payload?.map((entry, index) => (
                                <ChartLegendItem key={`legend-${index}`} color={entry.color}>
                                  {entry.value}
                                </ChartLegendItem>
                              ))}
                            </ChartLegend>
                          )
                        }}
                      />
                      <Bar dataKey="positive" fill="#4f46e5" name="Positive" />
                      <Bar dataKey="needsImprovement" fill="#f59e0b" name="Needs Improvement" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </Chart>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
