import React from "react";
import { ArrowLeft, MapPin, Building, Briefcase, Mail, Phone, Calendar, Download, Edit3, ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Badge } from "../../components/ui/Badge";
import { Tabs } from "../../components/ui/Tabs";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/Card";

export default function EmployeeProfile() {
  const navigate = useNavigate();

  // Tab 1: Overview Component
  const OverviewTab = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2 shadow-sm border-primary/10">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-x-6 gap-y-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">Full Name</p>
            <p className="font-semibold text-sm mt-1">Ahmed Ali</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">Father's Name</p>
            <p className="font-semibold text-sm mt-1">Ali Hassan</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">Date of Birth</p>
            <p className="font-semibold text-sm mt-1">14 May 1988 <span className="text-primary/40 font-normal ml-2">(36 yrs)</span></p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">Nationality</p>
            <p className="font-semibold text-sm mt-1 flex items-center gap-2">🇦🇪 United Arab Emirates</p>
          </div>
          <div className="col-span-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">Local Address</p>
            <p className="font-semibold text-sm mt-1">Apt 402, Marina Heights, Dubai Marina, Dubai, UAE</p>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-sm border-primary/10">
        <CardHeader>
          <CardTitle>Quick Contacts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded bg-surface border border-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-accent" />
             </div>
             <div className="overflow-hidden">
               <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">Mobile</p>
               <p className="text-sm font-semibold truncate">+971 50 123 4567</p>
             </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded bg-surface border border-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-accent" />
             </div>
             <div className="overflow-hidden">
               <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">Email</p>
               <p className="text-sm font-semibold truncate">ahmed.a@example.com</p>
             </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="lg:col-span-3">
         <CardHeader>
            <CardTitle>Current Status Timeline (Brief)</CardTitle>
         </CardHeader>
         <CardContent>
            <div className="flex gap-4">
               <div className="flex-1 p-4 rounded-xl border border-success/20 bg-success/5 border-l-4 border-l-success">
                  <p className="text-xs font-bold text-success/80 uppercase">Started</p>
                  <p className="text-lg font-bold mt-1">12 Jan 2024</p>
                  <p className="text-[10px] text-primary/50 mt-1">Joined Al Maha Tech</p>
               </div>
               <div className="flex-1 p-4 rounded-xl border border-primary/10 bg-surface">
                  <p className="text-xs font-bold text-primary/50 uppercase">Probation End</p>
                  <p className="text-lg font-bold mt-1 text-primary">12 Jul 2024</p>
                  <p className="text-[10px] text-primary/50 mt-1">Completed successfully</p>
               </div>
               <div className="flex-1 p-4 rounded-xl border border-warning/20 bg-warning/5 border-l-4 border-l-warning">
                  <p className="text-xs font-bold text-warning/80 uppercase">Next Action</p>
                  <p className="text-lg font-bold mt-1">20 Aug 2029</p>
                  <p className="text-[10px] text-primary/50 mt-1">Passport Renewal</p>
               </div>
            </div>
         </CardContent>
      </Card>
    </div>
  );

  const TimelineTab = () => (
    <Card>
      <CardHeader>
        <CardTitle>Employment Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative border-l-2 border-primary/10 ml-4 py-2 space-y-8">
           
           <div className="relative pl-8">
             <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-background"></div>
             <div className="text-[10px] font-bold text-primary/50 uppercase">Today</div>
             <div className="bg-surface p-4 rounded-lg border border-primary/10 mt-2 shadow-sm">
                <p className="text-sm font-bold">Salary Revision Applied</p>
                <p className="text-xs text-primary/60 mt-1">Base salary increased to AED 25,000.</p>
                <p className="text-[10px] text-primary/40 mt-2">Source: System Admin • 12 Oct 2024</p>
             </div>
           </div>

           <div className="relative pl-8">
             <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-primary/30 ring-4 ring-background"></div>
             <div className="text-[10px] font-bold text-primary/50 uppercase">12 Jul 2024</div>
             <p className="text-sm font-medium mt-1">Completed Probation Period</p>
             <p className="text-[10px] text-primary/40 mt-1">Source: Auto Rule Engine</p>
           </div>

           <div className="relative pl-8">
             <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-primary/30 ring-4 ring-background"></div>
             <div className="text-[10px] font-bold text-primary/50 uppercase">15 Jan 2024</div>
             <p className="text-sm font-medium mt-1">Assigned Asset: MacBook Pro (AST-0092)</p>
             <p className="text-[10px] text-primary/40 mt-1">Source: IT Department</p>
           </div>
           
           <div className="relative pl-8">
             <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-warning ring-4 ring-background"></div>
             <div className="text-[10px] font-bold text-primary/50 uppercase">12 Jan 2024</div>
             <p className="text-sm font-medium mt-1">Onboarding Process Started & Visa Issued</p>
             <p className="text-[10px] text-primary/40 mt-1">Source: HR Ops</p>
           </div>

        </div>
      </CardContent>
    </Card>
  );

  const SalaryTab = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
       <Card>
          <CardHeader className="border-b border-primary/10 pb-4">
             <CardTitle className="text-lg">Salary Structure</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
             <div className="flex justify-between items-center py-2 border-b border-primary/5">
                <span className="text-sm font-medium text-primary/70">Basic Salary</span>
                <span className="font-bold font-mono">AED 12,000.00</span>
             </div>
             <div className="flex justify-between items-center py-2 border-b border-primary/5">
                <span className="text-sm font-medium text-primary/70">Housing Allowance</span>
                <span className="font-bold font-mono">AED 6,000.00</span>
             </div>
             <div className="flex justify-between items-center py-2 border-b border-primary/5">
                <span className="text-sm font-medium text-primary/70">Transport Allowance</span>
                <span className="font-bold font-mono">AED 2,000.00</span>
             </div>
             <div className="flex justify-between items-center py-2 border-b border-primary/5">
                <span className="text-sm font-medium text-primary/70">Other Allowance</span>
                <span className="font-bold font-mono">AED 2,000.00</span>
             </div>
             <div className="flex justify-between items-center pt-2 mt-4 bg-accent/5 p-4 rounded-lg border border-accent/20">
                <span className="font-bold text-accent">Total Fixed Gross</span>
                <span className="text-xl font-bold font-mono text-accent">AED 22,000.00</span>
             </div>
          </CardContent>
       </Card>

       <Card>
          <CardHeader>
             <CardTitle>Recent Payroll History</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
             <table className="w-full text-sm text-left">
                <thead className="bg-surface text-[10px] uppercase font-bold text-primary/50">
                   <tr>
                      <th className="px-6 py-3">Month</th>
                      <th className="px-6 py-3">Gross</th>
                      <th className="px-6 py-3">Deductions</th>
                      <th className="px-6 py-3">Net Pay</th>
                      <th className="px-6 py-3">Status</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-primary/5 font-mono text-xs">
                   <tr className="hover:bg-surface/50">
                      <td className="px-6 py-3 font-sans font-semibold">Sep 2024</td>
                      <td className="px-6 py-3">22,000</td>
                      <td className="px-6 py-3 text-destructive">-500</td>
                      <td className="px-6 py-3 font-bold text-success">21,500</td>
                      <td className="px-6 py-3 font-sans"><Badge variant="success">Paid</Badge></td>
                   </tr>
                   <tr className="hover:bg-surface/50">
                      <td className="px-6 py-3 font-sans font-semibold">Aug 2024</td>
                      <td className="px-6 py-3">22,000</td>
                      <td className="px-6 py-3 text-destructive">0</td>
                      <td className="px-6 py-3 font-bold text-success">22,000</td>
                      <td className="px-6 py-3 font-sans"><Badge variant="success">Paid</Badge></td>
                   </tr>
                   <tr className="hover:bg-surface/50">
                      <td className="px-6 py-3 font-sans font-semibold">Jul 2024</td>
                      <td className="px-6 py-3">22,000</td>
                      <td className="px-6 py-3 text-destructive">-1500 (Loan)</td>
                      <td className="px-6 py-3 font-bold text-success">20,500</td>
                      <td className="px-6 py-3 font-sans"><Badge variant="success">Paid</Badge></td>
                   </tr>
                </tbody>
             </table>
          </CardContent>
       </Card>
    </div>
  );

  const tabs = [
    { id: "overview", label: "Overview", content: <OverviewTab /> },
    { id: "timeline", label: "Timeline", content: <TimelineTab /> },
    { id: "salary", label: "Salary & Payroll", content: <SalaryTab /> },
    { id: "attendance", label: "Attendance", content: <div className="p-8 text-center text-primary/50">WIP Component</div> },
    { id: "loans", label: "Loans & Advances", content: <div className="p-8 text-center text-primary/50">WIP Component</div> },
    { id: "assets", label: "Assets", content: <div className="p-8 text-center text-primary/50">WIP Component</div> },
    { id: "visa", label: "Visa & Docs", content: <div className="p-8 text-center text-primary/50">WIP Component</div> },
  ];

  return (
    <div className="flex flex-col h-full gap-6 max-w-7xl mx-auto w-full pb-10">
      
      {/* Action Bar */}
      <div className="flex items-center justify-between shrink-0 mb-2">
         <Button variant="ghost" className="gap-2 -ml-3" onClick={() => navigate('/employees')}>
            <ArrowLeft className="w-4 h-4"/> Back to Directory
         </Button>
         <div className="flex gap-2">
            <Button variant="outline" className="gap-2 bg-surface text-destructive border-destructive/20 hover:bg-destructive/10" onClick={() => alert("Open Status Management Modal")}>
               <ShieldAlert className="w-4 h-4" /> Manage Status
            </Button>
            <Button variant="accent" className="gap-2" onClick={() => navigate('/employees/EMP-2024-0012/edit')}>
               <Edit3 className="w-4 h-4" /> Edit Profile
            </Button>
         </div>
      </div>

      {/* Header Profile Section */}
      <div className="bg-surface rounded-2xl p-6 border border-primary/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 shrink-0 relative overflow-hidden">
         <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-accent/10 to-transparent pointer-events-none"></div>
         
         <div className="flex items-center gap-6 relative z-10">
            <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white text-3xl font-bold border-4 border-background shadow-md shrink-0">
               AA
            </div>
            <div>
               <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-bold tracking-tight">Ahmed Ali</h1>
                  <Badge variant="success">Active</Badge>
                  <span className="text-xs font-mono bg-primary/5 px-2 py-1 rounded text-primary/70 font-semibold border border-primary/10">EMP-2024-0012</span>
               </div>
               
               <div className="flex flex-wrap items-center gap-4 mt-3 text-sm font-medium text-primary/70">
                  <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> Senior Developer</span>
                  <span className="text-primary/30">•</span>
                  <span className="flex items-center gap-1"><Building className="w-4 h-4" /> Al Maha Tech (Engineering)</span>
                  <span className="text-primary/30">•</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Dubai HQ</span>
               </div>
            </div>
         </div>

         <div className="flex flex-col gap-3 relative z-10 text-right shrink-0 bg-background/50 p-4 rounded-xl border border-primary/5">
            <div>
               <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">Employee Type</p>
               <p className="font-bold text-sm">Fixed Salary</p>
            </div>
            <div>
               <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">Joining Date</p>
               <p className="font-bold text-sm flex items-center justify-end gap-1"><Calendar className="w-3 h-3"/> 12 Jan 2024</p>
            </div>
         </div>
      </div>

      {/* Main Tabs System */}
      <Tabs tabs={tabs} className="flex-1 bg-surface rounded-t-2xl border-x border-t border-primary/10 shadow-sm px-4 pt-2" />

    </div>
  );
}
