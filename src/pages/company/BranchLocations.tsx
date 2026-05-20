import React, { useMemo, useState } from "react";
import { Building2, MapPin, Phone, Search, Users, Wifi, Warehouse } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

const branches = [
  { code: "DXB-HQ", name: "Dubai Head Office", emirate: "Dubai", address: "Business Bay, Dubai", companies: 14, employees: 620, manager: "Ahmed Bin Rashid", phone: "+971 4 555 2100", status: "Operational", facilities: ["HR Desk", "Payroll", "Meeting Rooms"] },
  { code: "FUJ-OPS", name: "Fujairah Operations Hub", emirate: "Fujairah", address: "Industrial Area, Fujairah", companies: 5, employees: 298, manager: "Mohammed Yousuf", phone: "+971 9 555 4400", status: "Operational", facilities: ["Transport Yard", "Accommodation", "Workshop"] },
  { code: "AJM-BR", name: "Ajman Branch Office", emirate: "Ajman", address: "Al Jurf, Ajman", companies: 3, employees: 116, manager: "Fatima Al-Balooshi", phone: "+971 6 555 0911", status: "Operational", facilities: ["Admin Desk", "Domestic Workers", "Recruitment"] },
  { code: "SHJ-YARD", name: "Sharjah Bus Rental Yard", emirate: "Sharjah", address: "Sajaa Industrial, Sharjah", companies: 1, employees: 40, manager: "Tariq Hassan", phone: "+971 6 555 7800", status: "Maintenance", facilities: ["Fleet Parking", "Inspection Bay"] },
  { code: "AUH-SALES", name: "Abu Dhabi Brokerage Desk", emirate: "Abu Dhabi", address: "Mussafah, Abu Dhabi", companies: 1, employees: 14, manager: "Khalid Omar", phone: "+971 2 555 3100", status: "Operational", facilities: ["Sales Desk", "Document Counter"] },
];

export default function BranchLocations() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => branches.filter((branch) => `${branch.name} ${branch.emirate} ${branch.manager}`.toLowerCase().includes(query.toLowerCase())), [query]);
  const totalEmployees = branches.reduce((sum, item) => sum + item.employees, 0);

  return (
    <div className="flex flex-col gap-6 pb-10">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Company Management</p>
          <h1 className="text-3xl font-bold tracking-tight text-primary">Branch Locations</h1>
          <p className="mt-1 text-sm text-muted-foreground">Manage ALIYAS Group physical offices, yards, counters, facilities, and branch managers.</p>
        </div>
        <Button variant="accent">Add Branch</Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card className="p-5"><p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Total Branches</p><h3 className="mt-2 text-3xl font-bold text-primary">{branches.length}</h3></Card>
        <Card className="p-5"><p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Covered Emirates</p><h3 className="mt-2 text-3xl font-bold text-primary">5</h3></Card>
        <Card className="p-5"><p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Employees Mapped</p><h3 className="mt-2 text-3xl font-bold text-primary">{totalEmployees}</h3></Card>
        <Card className="p-5"><p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Facilities</p><h3 className="mt-2 text-3xl font-bold text-primary">14</h3></Card>
      </div>

      <Card>
        <CardHeader className="border-b border-border">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <CardTitle>Location Directory</CardTitle>
            <div className="relative w-full md:w-80"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search branch, emirate, manager..." className="pl-9" /></div>
          </div>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 pt-5 xl:grid-cols-2">
          {filtered.map((branch) => (
            <div key={branch.code} className="rounded-2xl border border-border bg-muted/30 p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent"><Building2 className="h-5 w-5" /></div>
                  <div>
                    <h3 className="font-bold text-primary">{branch.name}</h3>
                    <p className="mt-1 text-xs font-mono text-muted-foreground">{branch.code}</p>
                  </div>
                </div>
                <Badge variant={branch.status === "Operational" ? "success" : "warning"}>{branch.status}</Badge>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-3 text-sm md:grid-cols-2">
                <p className="flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4" /> {branch.address}</p>
                <p className="flex items-center gap-2 text-muted-foreground"><Phone className="h-4 w-4" /> {branch.phone}</p>
                <p className="flex items-center gap-2 text-muted-foreground"><Users className="h-4 w-4" /> {branch.employees} employees</p>
                <p className="flex items-center gap-2 text-muted-foreground"><Warehouse className="h-4 w-4" /> {branch.companies} companies</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">{branch.facilities.map((item) => <Badge key={item} variant="secondary"><Wifi className="mr-1 h-3 w-3" />{item}</Badge>)}</div>
              <div className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">Branch Manager: <span className="font-semibold text-primary">{branch.manager}</span></div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
