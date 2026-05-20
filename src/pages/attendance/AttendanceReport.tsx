import React from "react";
import { Filter, Download, ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import { Card } from "../../components/ui/Card";

// Mock Grid Data - Rows are employees, columns are days in Oct
const days = Array.from({ length: 31 }, (_, i) => i + 1);

const generateStatus = () => {
   const r = Math.random();
   if(r > 0.95) return 'A'; // Absent
   if(r > 0.85) return 'L'; // Late
   if(r > 0.80) return 'V'; // Leave
   return 'P'; // Present
}

const mockEmployees = [
  { id: 'EMP-2024-0012', name: 'Ahmed Ali' },
  { id: 'EMP-2023-0145', name: 'Sarah Connor' },
  { id: 'EMP-2021-0089', name: 'Elena Rostova' },
  { id: 'EMP-2022-0311', name: 'Zaid Al-Hashmi' },
  { id: 'EMP-2023-0402', name: 'Fatima Balooshi' },
  { id: 'EMP-2024-0199', name: 'Tariq Mahmood' },
  { id: 'EMP-2024-0255', name: 'Vikram Singh' },
  { id: 'EMP-2022-0088', name: 'Lisa Ray' },
];

const attData = mockEmployees.map(emp => {
   const statuses = days.map(() => generateStatus());
   const present = statuses.filter(s => s === 'P').length;
   const late = statuses.filter(s => s === 'L').length;
   const absent = statuses.filter(s => s === 'A').length;
   return { ...emp, statuses, present, late, absent };
});

export default function AttendanceReport() {
  return (
    <div className="flex flex-col h-full gap-6 w-full pb-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0 px-2">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">Monthly Attendance Report</h1>
          <p className="text-primary/60 text-sm mt-1">Grid view of daily attendance status for October 2024</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2 bg-surface">
            <Download className="w-4 h-4" /> Export Report
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="shrink-0 bg-surface">
        <div className="p-4 flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-primary/40" />
            <Input placeholder="Search employee..." className="pl-9 bg-background/50" />
          </div>
          <Select className="w-[180px] bg-background/50">
            <option>October 2024</option>
            <option>September 2024</option>
            <option>August 2024</option>
          </Select>
          <Select className="w-[160px] bg-background/50">
            <option value="">All Companies</option>
            <option value="tech">Al Maha Tech</option>
          </Select>
          <Select className="w-[140px] bg-background/50">
            <option value="">All Depts</option>
            <option value="eng">Engineering</option>
          </Select>
        </div>
        
        {/* Legend */}
        <div className="px-6 py-3 border-t border-primary/5 bg-background/30 flex items-center gap-6 justify-start text-[10px] font-bold uppercase tracking-wider">
           <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-success/20 border border-success flex items-center justify-center text-[8px] text-success">P</span> Present</span>
           <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-destructive/20 border border-destructive flex items-center justify-center text-[8px] text-destructive">A</span> Absent</span>
           <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-warning/20 border border-warning flex items-center justify-center text-[8px] text-warning">L</span> Late</span>
           <span className="flex items-center gap-2"><span className="w-3 h-3 rounded bg-[#0284C7]/20 border border-[#0284C7] flex items-center justify-center text-[8px] text-[#0284C7]">V</span> Leave</span>
        </div>
      </Card>

      {/* Grid */}
      <Card className="flex-1 overflow-hidden flex flex-col shadow-lg border-primary/10">
        <div className="flex-1 overflow-auto relative">
          <table className="w-max min-w-full text-left border-collapse bg-surface text-xs font-mono">
            <thead className="bg-background sticky top-0 z-20 shadow-sm border-b border-primary/10">
              <tr>
                <th className="px-4 py-3 font-semibold text-primary/60 tracking-wider sticky left-0 z-30 bg-background border-r border-primary/10 min-w-[200px]">Employee details</th>
                {days.map(d => (
                  <th key={d} className="px-2 py-3 text-center min-w-[32px] text-primary/50">{d}</th>
                ))}
                <th className="px-4 py-3 text-center font-bold text-success/80 bg-success/5 border-l border-success/10">P</th>
                <th className="px-4 py-3 text-center font-bold text-warning/80 bg-warning/5">L</th>
                <th className="px-4 py-3 text-center font-bold text-destructive/80 bg-destructive/5">A</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5">
              {attData.map((row, i) => (
                <tr key={i} className="hover:bg-primary/5 group">
                  <td className="px-4 py-2 sticky left-0 z-10 bg-surface group-hover:bg-background border-r border-primary/5">
                     <Link to={`/attendance/employee/${row.id}`} className="block hover:underline hover:text-accent">
                        <div className="font-bold text-primary font-sans text-sm">{row.name}</div>
                        <div className="text-[10px] text-primary/50">{row.id}</div>
                     </Link>
                  </td>
                  {row.statuses.map((s, idx) => {
                     let cellClass = "text-center p-1 ";
                     let innerClass = "w-6 h-6 mx-auto flex items-center justify-center rounded text-[10px] font-bold ";
                     if (s === 'P') innerClass += "bg-success/10 text-success";
                     else if (s === 'A') innerClass += "bg-destructive/10 text-destructive border border-destructive/20";
                     else if (s === 'L') innerClass += "bg-warning/10 text-warning font-black border border-warning/20";
                     else if (s === 'V') innerClass += "bg-[#0284C7]/10 text-[#0284C7] border border-[#0284C7]/20";

                     return (
                        <td key={idx} className={cellClass}>
                           <div className={innerClass}>{s}</div>
                        </td>
                     )
                  })}
                  <td className="px-4 py-2 text-center font-bold text-success bg-success/5 border-l border-success/10">{row.present}</td>
                  <td className="px-4 py-2 text-center font-bold text-warning bg-warning/5">{row.late}</td>
                  <td className="px-4 py-2 text-center font-bold text-destructive bg-destructive/5">{row.absent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      
    </div>
  );
}
