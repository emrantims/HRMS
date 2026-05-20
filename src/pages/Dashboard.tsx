import React from "react";
import { ArrowRight, BriefcaseBusiness, CalendarClock, CheckCircle2, Clock3, FileCheck2, MoreHorizontal, Plus, Users } from "lucide-react";
import { MetricCard, Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";

const tasks = [
  { title: "Visa renewal approvals", meta: "42 files need PRO action", status: "Overdue", variant: "destructive" as const },
  { title: "Payroll run for May", meta: "WPS file review before 5 PM", status: "Today", variant: "warning" as const },
  { title: "New hire onboarding", meta: "8 employees pending documents", status: "Active", variant: "success" as const },
];

const pipeline = [
  { name: "Recruitment", values: [56, 40, 32, 28, 14] },
  { name: "Onboarding", values: [35, 30, 16, 9, 6] },
  { name: "Visa Process", values: [40, 35, 25, 18, 12] },
];

export default function HRDashboard() {
  return (
    <>
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
            <span>Dashboard</span>
            <ArrowRight className="h-3.5 w-3.5" />
            <span className="font-medium text-primary">HR Manager Dashboard</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-primary">Good morning, ALIYAS Group</h1>
          <p className="mt-1 text-sm text-muted-foreground">Here is what needs attention across employees, visas, payroll, and company entities.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Edit widgets</Button>
          <Button variant="accent" size="sm" className="gap-2"><Plus className="h-4 w-4" /> Add action</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard title="Active Employees" value="1,248" subtext={<span className="font-medium text-success">+12.5% vs last month</span>} progress={82} />
        <MetricCard title="Visa Expiries" value="42" subtext="Expiring within 30 days" progress={36} highlight />
        <MetricCard title="Monthly Payroll" value="AED 4.2M" subtext="WPS compliance 100%" progress={100} />
        <MetricCard title="Assets Assigned" value="892" subtext="Inventory value AED 1.2M" progress={68} />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <Card className="xl:col-span-8">
          <CardHeader className="flex-row items-center justify-between space-y-0 border-b border-border/80">
            <div>
              <CardTitle>Hiring & HR Pipeline</CardTitle>
              <p className="mt-1 text-xs text-muted-foreground">Reference-style segmented workflow for HR operations.</p>
            </div>
            <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
          </CardHeader>
          <CardContent className="space-y-5 pt-5">
            {pipeline.map((row) => (
              <div key={row.name} className="grid gap-3 md:grid-cols-[150px_1fr] md:items-center">
                <div>
                  <p className="text-sm font-semibold text-primary">{row.name}</p>
                  <p className="text-xs text-muted-foreground">Multi company • UAE</p>
                </div>
                <div className="flex h-8 overflow-hidden rounded-xl bg-muted">
                  {row.values.map((value, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center text-xs font-bold text-white ${index === 0 ? "bg-warning" : index === 1 ? "bg-info" : index === 2 ? "bg-gold text-primary" : index === 3 ? "bg-accent" : "bg-success"}`}
                      style={{ width: `${Math.max(value, 12)}%` }}
                    >
                      {value}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="xl:col-span-4">
          <CardHeader className="flex-row items-center justify-between space-y-0 border-b border-border/80">
            <CardTitle>Upcoming Interviews</CardTitle>
            <Button variant="ghost" size="icon"><ArrowRight className="h-4 w-4" /></Button>
          </CardHeader>
          <CardContent className="space-y-4 pt-5">
            {["Culture Fit Interview", "PRO Document Review", "Payroll Approval Meeting"].map((item, index) => (
              <div key={item} className="flex gap-3 rounded-xl border border-border bg-muted/30 p-3">
                <div className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-xl bg-surface shadow-sm">
                  <span className="text-[10px] uppercase text-muted-foreground">May</span>
                  <span className="text-sm font-bold">{index + 3}</span>
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-primary">{item}</p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground"><Clock3 className="h-3.5 w-3.5" /> 10:00 - 11:00 AM</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <Card className="xl:col-span-7">
          <CardHeader className="flex-row items-center justify-between space-y-0 border-b border-border/80">
            <div>
              <CardTitle>Things To-Do</CardTitle>
              <p className="mt-1 text-xs text-muted-foreground">Priority items needing HR/admin attention.</p>
            </div>
            <Badge variant="secondary">3 open</Badge>
          </CardHeader>
          <CardContent className="pt-5">
            <div className="divide-y divide-border">
              {tasks.map((task) => (
                <div key={task.title} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted text-primary"><FileCheck2 className="h-4 w-4" /></div>
                    <div>
                      <p className="text-sm font-semibold text-primary">{task.title}</p>
                      <p className="text-xs text-muted-foreground">{task.meta}</p>
                    </div>
                  </div>
                  <Badge variant={task.variant}>{task.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="xl:col-span-5">
          <CardHeader className="flex-row items-center justify-between space-y-0 border-b border-border/80">
            <CardTitle>Employee Type</CardTitle>
            <Button variant="gold" size="sm">Run payroll</Button>
          </CardHeader>
          <CardContent className="grid gap-5 pt-5 md:grid-cols-[170px_1fr] md:items-center">
            <div className="relative mx-auto flex h-36 w-36 items-center justify-center rounded-full border-[14px] border-success/80 border-r-gold border-b-gold/40">
              <div className="text-center">
                <p className="text-xs text-muted-foreground">Total</p>
                <p className="text-3xl font-bold text-primary">34</p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded bg-success" /> Fulltime</span><b>26</b></div>
              <div className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded bg-gold" /> Freelance</span><b>8</b></div>
              <div className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded bg-accent" /> Onboarding</span><b>12</b></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
