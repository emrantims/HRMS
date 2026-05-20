import React, { useMemo, useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Bell,
  Building2,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Download,
  FileCheck2,
  FileSpreadsheet,
  GitBranch,
  IdCard,
  MoreHorizontal,
  Plus,
  ShieldCheck,
  UploadCloud,
  UserCheck,
  Users,
  WalletCards,
  XCircle,
} from "lucide-react";
import { MetricCard, Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";

const roles = [
  { id: "group", label: "Group Admin", subtitle: "ALIYAS Group · All Companies" },
  { id: "company", label: "Company Admin", subtitle: "Company scope controls" },
  { id: "hr", label: "HR Manager", subtitle: "Employee lifecycle" },
  { id: "payroll", label: "Payroll", subtitle: "WPS & deductions" },
  { id: "manager", label: "Manager", subtitle: "Team approvals" },
  { id: "employee", label: "Employee", subtitle: "Self service portal" },
] as const;

type RoleId = (typeof roles)[number]["id"];

const roleKpis: Record<RoleId, Array<{ title: string; value: string; trend: string; tone: "up" | "down" | "warn" }>> = {
  group: [
    { title: "Total Employees", value: "1,248", trend: "+23 this month", tone: "up" },
    { title: "Active Companies", value: "25", trend: "5 emirates covered", tone: "up" },
    { title: "Payroll Exposure", value: "AED 4.2M", trend: "100% WPS compliant", tone: "up" },
    { title: "Compliance Alerts", value: "42", trend: "Visa / documents due", tone: "warn" },
  ],
  company: [
    { title: "Company Employees", value: "542", trend: "+8 active hires", tone: "up" },
    { title: "Open Approvals", value: "18", trend: "Manager action needed", tone: "warn" },
    { title: "Assets Assigned", value: "319", trend: "96% acknowledged", tone: "up" },
    { title: "Renewal Risk", value: "9", trend: "Next 30 days", tone: "warn" },
  ],
  hr: [
    { title: "Onboarding", value: "12", trend: "8 documents pending", tone: "warn" },
    { title: "Attendance", value: "96.4%", trend: "+2.1% vs last week", tone: "up" },
    { title: "Exit Cases", value: "7", trend: "3 clearance pending", tone: "warn" },
    { title: "Employees Active", value: "1,248", trend: "+12.5% vs last month", tone: "up" },
  ],
  payroll: [
    { title: "Payroll Run", value: "May 2025", trend: "Ready for review", tone: "up" },
    { title: "Loan Deductions", value: "AED 86K", trend: "Synced with payroll", tone: "up" },
    { title: "Exceptions", value: "11", trend: "Needs validation", tone: "warn" },
    { title: "WPS File", value: "Draft", trend: "Pending CFO approval", tone: "warn" },
  ],
  manager: [
    { title: "Team Members", value: "42", trend: "Operations department", tone: "up" },
    { title: "Pending Leaves", value: "6", trend: "Manager approval", tone: "warn" },
    { title: "Attendance Issues", value: "3", trend: "Needs correction", tone: "down" },
    { title: "Assets Pending", value: "5", trend: "Return confirmation", tone: "warn" },
  ],
  employee: [
    { title: "Attendance", value: "22 / 22", trend: "100% this month", tone: "up" },
    { title: "Loan Balance", value: "AED 4,000", trend: "8 months remaining", tone: "warn" },
    { title: "Visa Expiry", value: "94 days", trend: "Aug 21, 2025", tone: "up" },
    { title: "Open Requests", value: "2", trend: "HR review", tone: "warn" },
  ],
};

const tasks = [
  { title: "Visa renewal approvals", meta: "42 files need PRO action", status: "Overdue", variant: "destructive" as const },
  { title: "Payroll run for May", meta: "WPS file review before 5 PM", status: "Today", variant: "warning" as const },
  { title: "New hire onboarding", meta: "8 employees pending documents", status: "Active", variant: "success" as const },
  { title: "Entity document renewal", meta: "INAYA Domestic Workers trade license", status: "Due soon", variant: "warning" as const },
];

const pipeline = [
  { name: "Recruitment", values: [56, 40, 32, 28, 14] },
  { name: "Onboarding", values: [35, 30, 16, 9, 6] },
  { name: "Visa Process", values: [40, 35, 25, 18, 12] },
  { name: "Exit Clearance", values: [18, 14, 12, 8, 5] },
];

const alerts = [
  { title: "Visa expiry warning", detail: "Fatima Al-Balooshi expires in 12 days", tone: "destructive" as const, icon: AlertTriangle },
  { title: "Payroll exception", detail: "11 employees missing attendance sync", tone: "warning" as const, icon: WalletCards },
  { title: "MOHRE document ready", detail: "3 establishment cards renewed", tone: "success" as const, icon: CheckCircle2 },
  { title: "Asset return required", detail: "5 laptops pending exit clearance", tone: "warning" as const, icon: ShieldCheck },
];

const employees = [
  { name: "Sarah Connor", id: "EMP-0145", company: "ALIYAS LINE TRANSPORT", dept: "Operations", status: "Active", visa: "Valid", payroll: "Synced" },
  { name: "Zaid Ahmed Al-Hashmi", id: "EMP-0092", company: "ALIYAS SECURITY", dept: "Security", status: "Active", visa: "Renewal Due", payroll: "Synced" },
  { name: "Fatima Al-Balooshi", id: "EMP-0188", company: "INAYA DOMESTIC WORKERS", dept: "PRO", status: "Active", visa: "Critical", payroll: "Hold" },
  { name: "Mohammed Yousuf", id: "EMP-0210", company: "ALIYAS BUS RENTAL", dept: "Fleet", status: "On Leave", visa: "Valid", payroll: "Synced" },
];

const wizardSteps = ["Created", "Documents", "Visa", "Contract", "Payroll", "Active"];

function trendClass(tone: "up" | "down" | "warn") {
  if (tone === "up") return "text-success";
  if (tone === "down") return "text-destructive";
  return "text-warning";
}

function statusVariant(status: string) {
  if (["Active", "Valid", "Synced"].includes(status)) return "success" as const;
  if (["Renewal Due", "On Leave", "Hold"].includes(status)) return "warning" as const;
  if (["Critical"].includes(status)) return "destructive" as const;
  return "secondary" as const;
}

export default function HRDashboard() {
  const [activeRole, setActiveRole] = useState<RoleId>("group");
  const activeRoleMeta = useMemo(() => roles.find((role) => role.id === activeRole)!, [activeRole]);

  return (
    <div className="space-y-6 pb-10">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
            <span>Dashboard</span>
            <ArrowRight className="h-3.5 w-3.5" />
            <span className="font-medium text-primary">Role Based ERP Cockpit</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-primary">Good morning, ALIYAS Group</h1>
          <p className="mt-1 text-sm text-muted-foreground">HTML template ke dynamic ERP ideas ab React dashboard mein role-wise live sections ke saath add hain.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Edit widgets</Button>
          <Button variant="accent" size="sm" className="gap-2"><Plus className="h-4 w-4" /> Add action</Button>
        </div>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-3">
          <div className="flex gap-2 overflow-x-auto custom-scrollbar">
            {roles.map((role) => (
              <button
                key={role.id}
                type="button"
                onClick={() => setActiveRole(role.id)}
                className={`min-w-[178px] rounded-2xl border px-4 py-3 text-left transition-all ${activeRole === role.id ? "border-accent bg-accent text-white shadow-sm" : "border-border bg-surface text-primary hover:bg-muted/60"}`}
              >
                <p className="text-sm font-bold">{role.label}</p>
                <p className={`mt-1 text-[11px] ${activeRole === role.id ? "text-white/80" : "text-muted-foreground"}`}>{role.subtitle}</p>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {roleKpis[activeRole].map((kpi) => (
          <MetricCard
            key={kpi.title}
            title={kpi.title}
            value={kpi.value}
            subtext={<span className={`font-medium ${trendClass(kpi.tone)}`}>{kpi.trend}</span>}
            progress={kpi.tone === "up" ? 82 : kpi.tone === "warn" ? 48 : 32}
            highlight={kpi.tone === "warn" || kpi.tone === "down"}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <Card className="xl:col-span-8">
          <CardHeader className="flex-row items-center justify-between space-y-0 border-b border-border/80">
            <div>
              <CardTitle>{activeRoleMeta.label} Workflow Pipeline</CardTitle>
              <p className="mt-1 text-xs text-muted-foreground">Segmented process bar from the HTML ERP template, converted into React cards.</p>
            </div>
            <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
          </CardHeader>
          <CardContent className="space-y-5 pt-5">
            {pipeline.map((row) => (
              <div key={row.name} className="grid gap-3 md:grid-cols-[150px_1fr] md:items-center">
                <div>
                  <p className="text-sm font-semibold text-primary">{row.name}</p>
                  <p className="text-xs text-muted-foreground">Multi-company • UAE</p>
                </div>
                <div className="flex h-9 overflow-hidden rounded-xl bg-muted">
                  {row.values.map((value, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center text-xs font-bold ${index === 2 ? "text-primary" : "text-white"} ${index === 0 ? "bg-warning" : index === 1 ? "bg-info" : index === 2 ? "bg-gold" : index === 3 ? "bg-accent" : "bg-success"}`}
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
            <CardTitle className="flex items-center gap-2"><Bell className="h-4 w-4 text-accent" /> Alert Center</CardTitle>
            <Badge variant="warning">4 live</Badge>
          </CardHeader>
          <CardContent className="space-y-3 pt-5">
            {alerts.map((alert) => {
              const Icon = alert.icon;
              return (
                <div key={alert.title} className="flex gap-3 rounded-xl border border-border bg-muted/30 p-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-surface text-accent shadow-sm"><Icon className="h-4 w-4" /></div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-semibold text-primary">{alert.title}</p>
                      <Badge variant={alert.tone}>{alert.tone === "destructive" ? "urgent" : alert.tone}</Badge>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{alert.detail}</p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <Card className="xl:col-span-7">
          <CardHeader className="flex-row items-center justify-between space-y-0 border-b border-border/80">
            <div>
              <CardTitle>Employee Lifecycle Wizard</CardTitle>
              <p className="mt-1 text-xs text-muted-foreground">Onboarding / exit workflow steps with completed, active, and pending states.</p>
            </div>
            <Badge variant="accent">Step based</Badge>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex min-w-full items-center overflow-x-auto pb-2 custom-scrollbar">
              {wizardSteps.map((step, index) => {
                const done = index < 3;
                const active = index === 3;
                return (
                  <div key={step} className="flex min-w-[120px] flex-1 items-center">
                    <div className="flex flex-col items-center gap-2">
                      <div className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-bold ${done ? "border-success bg-success text-white" : active ? "border-accent bg-accent text-white" : "border-border bg-muted text-muted-foreground"}`}>{done ? <CheckCircle2 className="h-4 w-4" /> : index + 1}</div>
                      <span className={`text-xs font-semibold ${done || active ? "text-primary" : "text-muted-foreground"}`}>{step}</span>
                    </div>
                    {index < wizardSteps.length - 1 && <div className={`mx-3 h-0.5 flex-1 ${done ? "bg-success" : "bg-border"}`} />}
                  </div>
                );
              })}
            </div>
            <div className="mt-5 rounded-2xl border border-border bg-muted/40 p-4 text-sm">
              <p className="font-bold text-primary">Current active case: New hire onboarding</p>
              <p className="mt-1 text-muted-foreground">Contract verification is active. Payroll activation and employee profile finalization are pending.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="xl:col-span-5">
          <CardHeader className="flex-row items-center justify-between space-y-0 border-b border-border/80">
            <CardTitle>Drag & Drop Upload Zone</CardTitle>
            <Button variant="outline" size="sm" className="gap-2"><Download className="h-4 w-4" /> Template</Button>
          </CardHeader>
          <CardContent className="pt-5">
            <div className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-accent/50 bg-accent/5 p-8 text-center transition-colors hover:bg-accent/10">
              <UploadCloud className="h-10 w-10 text-accent" />
              <p className="mt-3 text-sm font-bold text-primary">Drag & drop Excel or CSV file</p>
              <p className="mt-1 text-xs text-muted-foreground">Attendance, employee import, assets, or payroll template upload.</p>
              <Button variant="accent" size="sm" className="mt-4 gap-2"><FileSpreadsheet className="h-4 w-4" /> Browse file</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <Card className="xl:col-span-7">
          <CardHeader className="flex-row items-center justify-between space-y-0 border-b border-border/80">
            <div>
              <CardTitle>Rich Employee & Compliance Table</CardTitle>
              <p className="mt-1 text-xs text-muted-foreground">Avatar initials, company scope, department, visa and payroll status badges.</p>
            </div>
            <Button variant="ghost" size="icon"><ChevronRight className="h-4 w-4" /></Button>
          </CardHeader>
          <CardContent className="overflow-x-auto p-0">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="border-b border-border bg-muted/70 text-xs uppercase tracking-wider text-muted-foreground">
                <tr><th className="px-5 py-4">Employee</th><th className="px-5 py-4">Company</th><th className="px-5 py-4">Department</th><th className="px-5 py-4">Visa</th><th className="px-5 py-4">Payroll</th></tr>
              </thead>
              <tbody className="divide-y divide-border bg-surface">
                {employees.map((employee) => (
                  <tr key={employee.id} className="hover:bg-muted/40">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">{employee.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}</div>
                        <div><p className="font-semibold text-primary">{employee.name}</p><p className="font-mono text-xs text-muted-foreground">{employee.id}</p></div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-muted-foreground">{employee.company}</td>
                    <td className="px-5 py-4 text-primary">{employee.dept}</td>
                    <td className="px-5 py-4"><Badge variant={statusVariant(employee.visa)}>{employee.visa}</Badge></td>
                    <td className="px-5 py-4"><Badge variant={statusVariant(employee.payroll)}>{employee.payroll}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <Card className="xl:col-span-5">
          <CardHeader className="flex-row items-center justify-between space-y-0 border-b border-border/80">
            <CardTitle>Charts & Visual Summary</CardTitle>
            <Badge variant="secondary">No library needed</Badge>
          </CardHeader>
          <CardContent className="grid gap-5 pt-5 md:grid-cols-[170px_1fr] md:items-center">
            <div className="relative mx-auto flex h-36 w-36 items-center justify-center rounded-full border-[14px] border-success/80 border-r-gold border-b-accent/50">
              <div className="text-center">
                <p className="text-xs text-muted-foreground">Total</p>
                <p className="text-3xl font-bold text-primary">1,248</p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded bg-success" /> Fulltime</span><b>926</b></div>
              <div className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded bg-gold" /> Contract</span><b>186</b></div>
              <div className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded bg-accent" /> Onboarding</span><b>72</b></div>
              <div className="flex items-center justify-between"><span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded bg-destructive" /> Critical</span><b>14</b></div>
            </div>
            <div className="md:col-span-2 grid grid-cols-3 gap-3 pt-2">
              <MiniStat icon={Building2} title="Companies" value="25" />
              <MiniStat icon={IdCard} title="Visa Due" value="42" />
              <MiniStat icon={BarChart3} title="Attendance" value="96%" />
            </div>
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
            <Badge variant="secondary">4 open</Badge>
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
            <CardTitle>Upcoming Meetings</CardTitle>
            <Button variant="gold" size="sm">Run payroll</Button>
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
    </div>
  );
}

function MiniStat({ icon: Icon, title, value }: { icon: React.ElementType; title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-muted/40 p-4">
      <Icon className="h-4 w-4 text-accent" />
      <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{title}</p>
      <p className="mt-1 text-xl font-bold text-primary">{value}</p>
    </div>
  );
}
