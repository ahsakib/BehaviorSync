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
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts"

// Mock data for charts
const weeklyData = [
  { name: "Mon", positive: 12, needsImprovement: 5 },
  { name: "Tue", positive: 18, needsImprovement: 8 },
  { name: "Wed", positive: 15, needsImprovement: 3 },
  { name: "Thu", positive: 20, needsImprovement: 4 },
  { name: "Fri", positive: 25, needsImprovement: 2 },
]

const categoryData = [
  { name: "Collaboration", value: 30 },
  { name: "Effort", value: 25 },
  { name: "Participation", value: 20 },
  { name: "Leadership", value: 15 },
  { name: "Respect", value: 10 },
]

const COLORS = ["#4f46e5", "#3b82f6", "#0ea5e9", "#06b6d4", "#14b8a6"]

export function AnalyticsSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics Summary</CardTitle>
        <CardDescription>View behavior trends and patterns to inform teaching strategies.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly">
          <TabsList className="mb-4">
            <TabsTrigger value="weekly">Weekly Trends</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>
          <TabsContent value="weekly">
            <div className="h-[300px]">
              <Chart>
                <ChartContainer>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
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
          <TabsContent value="categories">
            <div className="h-[300px]">
              <Chart>
                <ChartContainer>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <ChartTooltip>
                                <ChartTooltipContent>
                                  <div className="flex items-center">
                                    <div
                                      className="w-3 h-3 rounded-full mr-2"
                                      style={{ backgroundColor: payload[0].payload.fill }}
                                    />
                                    <span className="font-medium">{payload[0].name}: </span>
                                    <span className="ml-1">{payload[0].value}</span>
                                  </div>
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
                    </PieChart>
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
