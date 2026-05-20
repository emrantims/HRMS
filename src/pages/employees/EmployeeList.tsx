import React from "react";
import { Link } from "react-router-dom";
import { Plus, Upload, Search, Filter, MoreVertical, Eye, Edit, UserX } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import { Badge } from "../../components/ui/Badge";
import { Card, CardContent } from "../../components/ui/Card";

const mockEmployees = [
  { id: "EMP-2024-0012", name: "Ahmed Ali", company: "Al Maha Tech", branch: "Dubai HQ", dept: "Engineering", role: "Senior Developer", status: "Active", type: "Fixed", joinDate: "12 Jan 2024" },
  { id: "EMP-2023-0145", name: "Sarah Connor", company: "Al Maha Real Estate", branch: "Abu Dhabi", dept: "Sales", role: "Sales Executive", status: "Active", type: "Commission", joinDate: "05 Mar 2023" },
  { id: "TMP-8991", name: "Mohammed Jass", company: "Al Maha Trading", branch: "Sharjah", dept: "Operations", role: "Logistics Coordinator", status: "Pending", type: "Mixed", joinDate: "18 May 2024" },
  { id: "EMP-2021-0089", name: "Elena Rostova", company: "Al Maha Tech", branch: "Dubai HQ", dept: "Marketing", role: "Marketing Manager", status: "Active", type: "Fixed", joinDate: "22 Aug 2021" },
  { id: "EMP-2022-0311", name: "Zaid Al-Hashmi", company: "Al Maha Real Estate", branch: "Dubai Marina", dept: "Management", role: "Branch Manager", status: "On Hold", type: "Fixed", joinDate: "10 Nov 2022" },
  { id: "EMP-2023-0402", name: "Fatima Balooshi", company: "Al Maha Trading", branch: "Ajman", dept: "Warehouse", role: "Supervisor", status: "Terminated", type: "Fixed", joinDate: "14 Feb 2023" },
];

export default function EmployeeList() {
  return (
    <div className="flex flex-col h-full gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">Employee Directory</h1>
          <p className="text-primary/60 text-sm mt-1">Manage and track all company employees</p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/employees/import">
            <Button variant="outline" className="gap-2">
              <Upload className="w-4 h-4" /> Import Excel
            </Button>
          </Link>
          <Link to="/employees/new">
            <Button variant="accent" className="gap-2">
              <Plus className="w-4 h-4" /> Add Employee
            </Button>
          </Link>
        </div>
      </div>

      {/* Filters */}
      <Card className="shrink-0 bg-surface">
        <CardContent className="p-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative flex-1 min-w-[250px]">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-primary/40" />
              <Input placeholder="Search name, ID, phone..." className="pl-9 bg-background/50" />
            </div>
            <Select className="w-[160px] bg-background/50">
              <option value="">All Companies</option>
              <option value="tech">Al Maha Tech</option>
              <option value="realestate">Al Maha Real Estate</option>
            </Select>
            <Select className="w-[140px] bg-background/50">
              <option value="">All Branches</option>
              <option value="dxb">Dubai HQ</option>
              <option value="auh">Abu Dhabi</option>
            </Select>
            <Select className="w-[140px] bg-background/50">
              <option value="">All Depts</option>
              <option value="eng">Engineering</option>
              <option value="sales">Sales</option>
            </Select>
            <Select className="w-[130px] bg-background/50">
              <option value="">Status</option>
              <option value="active">Active</option>
              <option value="hold">On Hold</option>
              <option value="terminated">Terminated</option>
              <option value="absconded">Absconded</option>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Data Table */}
      <Card className="flex-1 overflow-hidden flex flex-col rounded-2xl shadow-lg border-primary/10">
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-background sticky top-0 z-10 shadow-sm">
              <tr className="text-[10px] uppercase tracking-widest text-primary/60">
                <th className="px-6 py-4 font-semibold whitespace-nowrap">Employee Code</th>
                <th className="px-6 py-4 font-semibold whitespace-nowrap">Full Name</th>
                <th className="px-6 py-4 font-semibold whitespace-nowrap">Company & Branch</th>
                <th className="px-6 py-4 font-semibold whitespace-nowrap">Role & Dept</th>
                <th className="px-6 py-4 font-semibold whitespace-nowrap">Type</th>
                <th className="px-6 py-4 font-semibold whitespace-nowrap">Status</th>
                <th className="px-6 py-4 font-semibold whitespace-nowrap">Join Date</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5">
              {mockEmployees.map((emp) => (
                <tr key={emp.id} className="hover:bg-background/80 transition-colors group">
                  <td className="px-6 py-4 text-xs font-mono text-primary/70">{emp.id}</td>
                  <td className="px-6 py-4 font-bold text-sm text-primary">{emp.name}</td>
                  <td className="px-6 py-4">
                    <div className="text-xs font-semibold text-primary">{emp.company}</div>
                    <div className="text-[10px] text-primary/50">{emp.branch}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-xs font-medium text-primary">{emp.role}</div>
                    <div className="text-[10px] text-primary/50">{emp.dept}</div>
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-primary/70">{emp.type}</td>
                  <td className="px-6 py-4">
                    <Badge variant={
                      emp.status === 'Active' ? 'success' :
                      emp.status === 'Pending' ? 'warning' :
                      emp.status === 'On Hold' ? 'outline' : 'destructive'
                    }>
                      {emp.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-xs text-primary/80">{emp.joinDate}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link to={`/employees/${emp.id}`}>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-primary hover:text-accent">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Link to={`/employees/${emp.id}/edit`}>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-primary hover:text-accent">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-destructive/10">
                        <UserX className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="bg-surface border-t border-primary/5 px-6 py-3 flex items-center justify-between shrink-0">
          <p className="text-xs text-primary/50 font-medium">Showing <span className="text-primary font-bold">1</span> to <span className="text-primary font-bold">6</span> of <span className="text-primary font-bold">1,248</span> employees</p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm" className="bg-accent text-white border-accent">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
