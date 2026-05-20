import React from "react";
import { BriefcaseBusiness, ChevronRight, ShieldCheck, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";

const departments = [
  { name: "Group HR & Administration", head: "Ahmed Bin Rashid", employees: 42, teams: ["Recruitment", "Employee Records", "PRO & Visa", "Payroll Coordination"] },
  { name: "Finance & Payroll", head: "Sarah Connor", employees: 28, teams: ["WPS Payroll", "Accounts Payable", "Loan Deductions", "Final Settlement"] },
  { name: "Transport Operations", head: "Mohammed Yousuf", employees: 410, teams: ["Bus Rental", "Fleet Dispatch", "Driver Allocation", "Maintenance"] },
  { name: "Security Services", head: "Zaid Al-Hashmi", employees: 260, teams: ["Guards Deployment", "Site Supervisors", "Compliance", "Patrol Logs"] },
  { name: "Real Estate & Investments", head: "Fatima Al-Balooshi", employees: 75, teams: ["Property Management", "Leasing", "Brokerage", "Project Development"] },
  { name: "Domestic Workers Services", head: "Inaya Operations", employees: 95, teams: ["Recruitment", "Accommodation", "Client Placement", "Contract Renewal"] },
];

export default function DepartmentStructure() {
  return (
    <div className="flex flex-col gap-6 pb-10">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Company Management</p>
          <h1 className="text-3xl font-bold tracking-tight text-primary">Department Structure</h1>
          <p className="mt-1 text-sm text-muted-foreground">Define group departments, reporting teams, department heads, and employee allocations.</p>
        </div>
        <Button variant="accent">Create Department</Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="p-5"><p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Departments</p><h3 className="mt-2 text-3xl font-bold text-primary">6</h3></Card>
        <Card className="p-5"><p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Sub Teams</p><h3 className="mt-2 text-3xl font-bold text-primary">24</h3></Card>
        <Card className="p-5"><p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Mapped Employees</p><h3 className="mt-2 text-3xl font-bold text-primary">910</h3></Card>
      </div>

      <Card>
        <CardHeader className="border-b border-border"><CardTitle>Group Department Matrix</CardTitle></CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 pt-5 lg:grid-cols-2">
          {departments.map((dept) => (
            <div key={dept.name} className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/20 text-warning"><BriefcaseBusiness className="h-5 w-5" /></div>
                  <div><h3 className="font-bold text-primary">{dept.name}</h3><p className="mt-1 text-xs text-muted-foreground">Head: {dept.head}</p></div>
                </div>
                <Badge variant="outline"><Users className="mr-1 h-3 w-3" />{dept.employees}</Badge>
              </div>
              <div className="mt-5 space-y-2">
                {dept.teams.map((team) => (
                  <div key={team} className="flex items-center justify-between rounded-xl bg-muted/60 px-3 py-2 text-sm">
                    <span className="flex items-center gap-2 text-primary"><ShieldCheck className="h-4 w-4 text-success" />{team}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
