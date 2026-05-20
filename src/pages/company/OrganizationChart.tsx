import React from "react";
import { Crown, GitBranch, UserRound, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";

const levels = [
  { title: "Group Board", people: ["Chairman", "Managing Director"], color: "bg-gold/20 text-warning" },
  { title: "Executive Leadership", people: ["Group CEO", "Group CFO", "Group HR Director", "Operations Director"], color: "bg-accent/10 text-accent" },
  { title: "Company Heads", people: ["Transport GM", "Security GM", "Real Estate GM", "Travel & Tourism GM", "Domestic Services Manager"], color: "bg-info/10 text-info" },
  { title: "Department Leads", people: ["HR Manager", "Payroll Lead", "PRO Lead", "Assets Lead", "Branch Managers", "Finance Controllers"], color: "bg-success/10 text-success" },
];

export default function OrganizationChart() {
  return (
    <div className="flex flex-col gap-6 pb-10">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Company Management</p>
          <h1 className="text-3xl font-bold tracking-tight text-primary">Organization Chart</h1>
          <p className="mt-1 text-sm text-muted-foreground">Visual reporting hierarchy for ALIYAS Group companies, branches, and departments.</p>
        </div>
        <Button variant="accent">Update Hierarchy</Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card className="p-5"><Crown className="h-5 w-5 text-warning" /><h3 className="mt-3 text-2xl font-bold text-primary">4</h3><p className="text-xs text-muted-foreground">Hierarchy Levels</p></Card>
        <Card className="p-5"><Users className="h-5 w-5 text-accent" /><h3 className="mt-3 text-2xl font-bold text-primary">17</h3><p className="text-xs text-muted-foreground">Leadership Roles</p></Card>
        <Card className="p-5"><GitBranch className="h-5 w-5 text-info" /><h3 className="mt-3 text-2xl font-bold text-primary">25</h3><p className="text-xs text-muted-foreground">Legal Entities</p></Card>
        <Card className="p-5"><UserRound className="h-5 w-5 text-success" /><h3 className="mt-3 text-2xl font-bold text-primary">1,248</h3><p className="text-xs text-muted-foreground">Employees</p></Card>
      </div>

      <Card>
        <CardHeader className="border-b border-border"><CardTitle>ALIYAS Group Reporting Tree</CardTitle></CardHeader>
        <CardContent className="space-y-5 pt-6">
          {levels.map((level, index) => (
            <div key={level.title} className="relative rounded-2xl border border-border bg-muted/30 p-5">
              {index !== levels.length - 1 && <div className="absolute -bottom-5 left-1/2 h-5 w-px bg-border" />}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3"><div className={`flex h-10 w-10 items-center justify-center rounded-xl ${level.color}`}><GitBranch className="h-5 w-5" /></div><h3 className="font-bold text-primary">{level.title}</h3></div>
                <Badge variant="secondary">Level {index + 1}</Badge>
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
                {level.people.map((person) => <div key={person} className="rounded-xl border border-border bg-surface px-4 py-3 text-sm font-semibold text-primary shadow-sm">{person}</div>)}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
