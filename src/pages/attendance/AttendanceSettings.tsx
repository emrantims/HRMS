import React from "react";
import { Settings, Save, AlertCircle } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import { Label } from "../../components/ui/Label";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/Card";

export default function AttendanceSettings() {
  return (
    <div className="flex flex-col h-full gap-6 max-w-4xl mx-auto w-full pb-10">
      
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">Attendance Configuration</h1>
          <p className="text-primary/60 text-sm mt-1">Configure global rules for late marks and payroll linking</p>
        </div>
        <Button variant="accent" className="gap-2">
           <Save className="w-4 h-4" /> Save Configuration
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6">

         <Card>
            <CardHeader className="border-b border-primary/5 pb-4">
               <CardTitle>Time & Grace Rules</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-2">
                  <Label>Standard Office Start Time</Label>
                  <Input type="time" defaultValue="08:00" />
               </div>
               <div className="space-y-2">
                  <Label>Grace Period (Minutes)</Label>
                  <Input type="number" defaultValue="15" />
                  <p className="text-[10px] text-primary/50 mt-1 pl-1">Employees checking in after 08:15 will be marked Late.</p>
               </div>
               <div className="space-y-2 md:col-span-2">
                  <Label>Half-Day Absence Trigger</Label>
                  <Select defaultValue="4">
                     <option value="none">Disabled</option>
                     <option value="4">Check in &gt; 4 hours late</option>
                     <option value="no-checkout">Missing checkout time</option>
                  </Select>
               </div>
            </CardContent>
         </Card>

         <Card>
            <CardHeader className="border-b border-primary/5 pb-4">
               <CardTitle className="text-destructive flex items-center gap-2">
                 <AlertCircle className="w-4 h-4" /> Auto-Deduction Rules (Payroll Link)
               </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
               
               <div className="bg-surface p-4 rounded-xl border border-primary/10 space-y-4">
                  <div className="flex items-center justify-between">
                     <div>
                        <h4 className="text-sm font-bold text-primary">Late Mark Penalty</h4>
                        <p className="text-xs text-primary/60 mt-1 mt-0.5">Consecutive late marks convert to unpaid deduction.</p>
                     </div>
                     <label className="relative inline-flex items-center cursor-pointer">
                       <input type="checkbox" className="sr-only peer" defaultChecked />
                       <div className="w-11 h-6 bg-primary/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                     </label>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary/5 pl-4 ml-4 border-l">
                     <div className="space-y-2">
                        <Label>Late marks required to trigger:</Label>
                        <Select defaultValue="3">
                           <option value="2">2 Days</option>
                           <option value="3">3 Days</option>
                           <option value="5">5 Days</option>
                        </Select>
                     </div>
                     <div className="space-y-2">
                        <Label>Deduction Amount:</Label>
                        <Select defaultValue="half">
                           <option value="half">Half Day Basic Salary</option>
                           <option value="full">Full Day Basic Salary</option>
                        </Select>
                     </div>
                  </div>
               </div>

               <div className="bg-surface p-4 rounded-xl border border-primary/10">
                  <div className="flex items-center justify-between">
                     <div>
                        <h4 className="text-sm font-bold text-primary">Absenteeism Auto-Deduct</h4>
                        <p className="text-xs text-primary/60 mt-1 mt-0.5">Directly deduct salary for unapproved absences.</p>
                     </div>
                     <label className="relative inline-flex items-center cursor-pointer">
                       <input type="checkbox" className="sr-only peer" defaultChecked />
                       <div className="w-11 h-6 bg-primary/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
                     </label>
                  </div>
               </div>

            </CardContent>
         </Card>

      </div>
    </div>
  );
}
