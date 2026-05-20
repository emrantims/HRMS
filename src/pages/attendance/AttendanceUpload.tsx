import React, { useState } from "react";
import { UploadCloud, FileSpreadsheet, Download, AlertCircle, CheckCircle, Upload, ArrowRight, XCircle, ChevronRight } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Card, CardContent } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";

export default function AttendanceUpload() {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  return (
    <div className="flex flex-col h-full gap-6 max-w-5xl mx-auto w-full pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">Bulk Attendance Upload</h1>
          <p className="text-primary/60 text-sm mt-1">Upload daily or weekly attendance logs</p>
        </div>
        {step === 1 && (
          <Button variant="outline" className="gap-2 bg-surface">
            <Download className="w-4 h-4" /> Download Template
          </Button>
        )}
      </div>

      {/* Stepper */}
      <div className="flex items-center justify-between mb-2">
         {[
           { num: 1, title: "Upload File" },
           { num: 2, title: "Validation" },
           { num: 3, title: "Processing Result" }
         ].map((s, i) => (
           <React.Fragment key={s.num}>
             <div className="flex items-center gap-3">
               <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                 step >= s.num ? "bg-accent text-white shadow-md shadow-accent/20" : "bg-primary/10 text-primary/40"
               }`}>
                 {step > s.num ? <CheckCircle className="w-4 h-4" /> : s.num}
               </div>
               <span className={`text-xs font-bold uppercase tracking-wider hidden sm:block ${
                 step >= s.num ? "text-primary" : "text-primary/40"
               }`}>{s.title}</span>
             </div>
             {i < 2 && <div className={`flex-1 h-px mx-4 ${step > s.num ? "bg-accent" : "bg-primary/10"}`}></div>}
           </React.Fragment>
         ))}
      </div>

      {/* Main Content Area based on Step */}
      <div className="flex-1 flex flex-col min-h-0 relative">
        
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="border-dashed border-2 border-primary/20 bg-surface/50 hover:bg-surface transition-colors cursor-pointer group mb-6">
              <CardContent className="flex flex-col items-center justify-center py-24">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <UploadCloud className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Drag & Drop Attendance File</h3>
                <p className="text-sm text-primary/50 text-center max-w-sm mb-6">
                  Ensure columns match: <code className="bg-primary/5 px-1 py-0.5 rounded text-primary">EmployeeCode, Date, CheckIn, CheckOut, Status</code>
                </p>
                <Button onClick={() => setStep(2)}>Browse File</Button>
              </CardContent>
            </Card>
            
            <div className="bg-warning/10 p-4 rounded-xl border border-warning/20 flex gap-4 items-start">
               <AlertCircle className="w-5 h-5 text-warning shrink-0" />
               <div>
                 <h4 className="text-sm font-bold text-warning-foreground">Important Instructions</h4>
                 <p className="text-xs text-primary/70 mt-1 max-w-2xl leading-relaxed">
                   Duplicate attendance entries for the same employee and date will cause a validation error. If you are uploading corrections, please use the <b>Attendance Correction Screen</b> instead of bulk upload overriding.
                 </p>
               </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <Card className="flex flex-col h-full overflow-hidden animate-in fade-in slide-in-from-right-8 duration-500 shadow-lg border-primary/10">
            <div className="p-4 bg-background border-b border-primary/10 flex justify-between items-center sm:hidden md:flex">
               <div className="flex gap-6">
                 <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-primary/50">Total Records</span>
                    <span className="text-xl font-bold">142</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-success/70">Valid</span>
                    <span className="text-xl font-bold text-success">138</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-destructive/70">Errors</span>
                    <span className="text-xl font-bold text-destructive">4</span>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <Button variant="outline" className="text-xs h-8" onClick={() => setStep(1)}>Cancel</Button>
                 <Button variant="outline" className="text-xs h-8 text-destructive border-destructive/20 hover:bg-destructive/10">Extract Errors</Button>
                 <Button variant="accent" className="text-xs h-8" onClick={() => setStep(3)}>Confirm & Import Valid (138)</Button>
               </div>
            </div>

            <div className="flex-1 overflow-x-auto min-h-[300px]">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-surface sticky top-0 shadow-sm z-10">
                  <tr className="text-[10px] uppercase tracking-widest text-primary/60">
                    <th className="px-4 py-3 font-semibold">Validation</th>
                    <th className="px-4 py-3 font-semibold">Row</th>
                    <th className="px-4 py-3 font-semibold">Emp Code</th>
                    <th className="px-4 py-3 font-semibold">Date</th>
                    <th className="px-4 py-3 font-semibold">Check In</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                    <th className="px-4 py-3 font-semibold w-full">Error Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/5 bg-background font-mono text-xs">
                  <tr className="hover:bg-surface text-primary/80">
                    <td className="px-4 py-2"><CheckCircle className="w-4 h-4 text-success" /></td>
                    <td className="px-4 py-2 text-primary/40">2</td>
                    <td className="px-4 py-2">EMP-24-001</td>
                    <td className="px-4 py-2">2024-10-18</td>
                    <td className="px-4 py-2">08:50 AM</td>
                    <td className="px-4 py-2">Present</td>
                    <td className="px-4 py-2 text-primary/40">-</td>
                  </tr>
                  <tr className="bg-destructive/5 hover:bg-destructive/10">
                    <td className="px-4 py-2"><XCircle className="w-4 h-4 text-destructive" /></td>
                    <td className="px-4 py-2 text-primary/50">84</td>
                    <td className="px-4 py-2 text-destructive font-bold">EMP-99-999</td>
                    <td className="px-4 py-2">2024-10-18</td>
                    <td className="px-4 py-2">09:05 AM</td>
                    <td className="px-4 py-2">Late</td>
                    <td className="px-4 py-2 text-destructive font-semibold">Employee code not found in system</td>
                  </tr>
                  <tr className="hover:bg-surface text-primary/80">
                    <td className="px-4 py-2"><CheckCircle className="w-4 h-4 text-success" /></td>
                    <td className="px-4 py-2 text-primary/40">85</td>
                    <td className="px-4 py-2">EMP-24-082</td>
                    <td className="px-4 py-2">2024-10-18</td>
                    <td className="px-4 py-2">-</td>
                    <td className="px-4 py-2 text-destructive">Absent</td>
                    <td className="px-4 py-2 text-primary/40">-</td>
                  </tr>
                  <tr className="bg-destructive/5 hover:bg-destructive/10">
                    <td className="px-4 py-2"><AlertCircle className="w-4 h-4 text-destructive" /></td>
                    <td className="px-4 py-2 text-primary/50">112</td>
                    <td className="px-4 py-2">EMP-23-044</td>
                    <td className="px-4 py-2">2024-10-18</td>
                    <td className="px-4 py-2">08:00 AM</td>
                    <td className="px-4 py-2">Present</td>
                    <td className="px-4 py-2 text-destructive font-semibold">Duplicate entry. Date already processed.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Mobile Actions */}
            <div className="p-4 border-t border-primary/10 bg-surface md:hidden flex flex-col gap-2">
              <Button variant="accent" className="w-full" onClick={() => setStep(3)}>Confirm Valid (138)</Button>
              <Button variant="outline" className="w-full text-destructive" onClick={() => setStep(1)}>Cancel</Button>
            </div>
          </Card>
        )}

        {step === 3 && (
          <div className="flex flex-col items-center justify-center py-20 animate-in zoom-in-95 duration-500">
            <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center relative mb-6 border-8 border-success/20">
               <CheckCircle className="w-10 h-10 text-success absolute" />
            </div>
            <h2 className="text-3xl font-bold text-primary tracking-tight mb-2">Import Successful</h2>
            <p className="text-primary/60 text-center max-w-md mb-8">
              Attendance records have been processed and applied. Payroll indicators updated successfully.
            </p>
            
            <div className="grid grid-cols-3 gap-4 w-full max-w-md mb-8">
               <div className="bg-surface p-4 rounded-xl border border-primary/10 text-center shadow-sm">
                  <p className="text-2xl font-bold text-primary">138</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-primary/50 mt-1">Imported</p>
               </div>
               <div className="bg-surface p-4 rounded-xl border border-primary/10 text-center shadow-sm">
                  <p className="text-2xl font-bold text-destructive">4</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-primary/50 mt-1">Failed</p>
               </div>
               <div className="bg-surface p-4 rounded-xl border border-primary/10 text-center shadow-sm">
                  <p className="text-2xl font-bold text-warning">23</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-primary/50 mt-1">Late Flags</p>
               </div>
            </div>

            <div className="flex gap-3">
               <Button variant="outline" onClick={() => setStep(1)}>Upload Another</Button>
               <Button variant="accent" onClick={() => window.location.href = '/attendance/report'}>View Monthly Report</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
