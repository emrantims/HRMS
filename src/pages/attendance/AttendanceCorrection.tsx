import React, { useState } from "react";
import { ArrowLeft, CheckCircle, ShieldAlert, History } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import { Label } from "../../components/ui/Label";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";

export default function AttendanceCorrection() {
  const navigate = useNavigate();
  const [empId, setEmpId] = useState("");
  const [date, setDate] = useState("");

  const hasSearch = empId === "EMP-2024-0012"; // Mock query condition

  return (
    <div className="flex flex-col h-full gap-6 max-w-4xl mx-auto w-full pb-10">
      
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">Attendance Correction</h1>
          <p className="text-primary/60 text-sm mt-1">Manually correct uploaded attendance discrepancies</p>
        </div>
        <div className="flex items-center gap-3 text-xs font-semibold uppercase text-primary/40 bg-primary/5 px-3 py-1.5 rounded-full">
           <ShieldAlert className="w-4 h-4 text-warning" /> HR Access Only
        </div>
      </div>

      <Card>
         <CardContent className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div className="space-y-2">
               <Label>Employee ID *</Label>
               <Input 
                  placeholder="e.g. EMP-2024-0012" 
                  value={empId} 
                  onChange={(e) => setEmpId(e.target.value)} 
               />
            </div>
            <div className="space-y-2">
               <Label>Date *</Label>
               <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <Button variant="accent" className="w-full" onClick={() => setEmpId("EMP-2024-0012")}>Retrieve Record</Button>
         </CardContent>
      </Card>

      {hasSearch && (
         <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
            
            <Card className="border-warning/30">
               <CardHeader className="bg-warning/5 border-b border-warning/10 pb-4">
                  <div className="flex items-center justify-between">
                     <CardTitle className="text-primary text-sm flex items-center gap-2">
                        <History className="w-4 h-4" /> Record Found
                     </CardTitle>
                     <Badge variant="outline" className="bg-surface font-mono">18 Oct 2024</Badge>
                  </div>
               </CardHeader>
               <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Current State */}
                  <div className="space-y-4">
                     <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">Current Log Data</p>
                     <div className="bg-surface p-4 rounded-xl border border-primary/10 shadow-sm space-y-3">
                        <div className="flex justify-between items-center text-sm">
                           <span className="font-medium text-primary/60">Status</span>
                           <span className="font-bold text-destructive">Absent</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                           <span className="font-medium text-primary/60">Check In</span>
                           <span className="font-mono text-primary">--:--</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                           <span className="font-medium text-primary/60">Source</span>
                           <span className="text-xs">Bulk Upload</span>
                        </div>
                     </div>
                  </div>

                  {/* Correction Form */}
                  <div className="space-y-4">
                     <p className="text-[10px] font-bold uppercase tracking-widest text-accent">Correction Application</p>
                     <div className="space-y-4">
                        <div className="space-y-2">
                           <Label>Corrected Status</Label>
                           <Select defaultValue="present">
                              <option value="present">Present</option>
                              <option value="late">Late</option>
                              <option value="leave">Leave (Paid)</option>
                           </Select>
                        </div>
                        <div className="space-y-2">
                           <Label>Check In Time (Optional)</Label>
                           <Input type="time" defaultValue="08:45" />
                        </div>
                        <div className="space-y-2">
                           <Label>Reason for Override *</Label>
                           <Input placeholder="E.g., System failure, approved outdoor duty" />
                        </div>
                        
                        <div className="pt-4 flex items-center gap-3">
                           <input type="checkbox" className="w-4 h-4 rounded text-accent focus:ring-accent accent-accent" checked readOnly/>
                           <label className="text-xs font-semibold text-primary/70">Acknowledge that this action is permanently logged in the audit trail.</label>
                        </div>

                        <Button className="w-full mt-2" variant="accent">Commit Changes</Button>
                     </div>
                  </div>
               </CardContent>
            </Card>

            <h3 className="text-sm font-bold uppercase tracking-tight text-primary/50 mt-8 mb-4">Correction Audit Log (Ahmed Ali)</h3>
            <div className="bg-surface rounded-xl border border-primary/10 shadow-sm overflow-hidden">
               <table className="w-full text-left text-xs">
                  <thead className="bg-background">
                     <tr className="text-[10px] uppercase tracking-widest text-primary/50">
                        <th className="px-4 py-3 font-semibold">Audit Timestamp</th>
                        <th className="px-4 py-3 font-semibold">Affected Date</th>
                        <th className="px-4 py-3 font-semibold">Change</th>
                        <th className="px-4 py-3 font-semibold">Authorized By</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-primary/5 font-mono">
                     <tr className="hover:bg-background">
                        <td className="px-4 py-3">2024-09-15 14:22:01</td>
                        <td className="px-4 py-3">2024-09-14</td>
                        <td className="px-4 py-3 font-sans">
                           <span className="text-destructive font-bold">Late</span> &rarr; <span className="text-success font-bold">Present</span>
                        </td>
                        <td className="px-4 py-3 text-primary/60">Tariq Mahmood</td>
                     </tr>
                  </tbody>
               </table>
            </div>

         </div>
      )}
    </div>
  );
}
