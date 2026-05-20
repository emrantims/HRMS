import React from "react";
import { Link } from "react-router-dom";
import { UploadCloud, FileSpreadsheet, Settings, AlertCircle, CalendarCheck, Clock, UserX, BarChart3, Edit3 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, MetricCard } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";

const monthlyData = [
  { name: '1 Oct', present: 1200, absent: 30, late: 18 },
  { name: '2 Oct', present: 1195, absent: 35, late: 18 },
  { name: '3 Oct', present: 1210, absent: 20, late: 18 },
  { name: '4 Oct', present: 1225, absent: 5, late: 18 },
  { name: '5 Oct', present: 1230, absent: 0, late: 18 },
  { name: '6 Oct', present: 1215, absent: 15, late: 18 },
  { name: '7 Oct', present: 1205, absent: 25, late: 18 },
];

export default function AttendanceDashboard() {
  return (
    <div className="flex flex-col h-full gap-6 max-w-7xl mx-auto w-full pb-10">
      
      {/* Header & Quick Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">Attendance Dashboard</h1>
          <p className="text-primary/60 text-sm mt-1">Daily overview and bulk import management</p>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          <Link to="/attendance/corrections">
            <Button variant="outline" className="gap-2 bg-surface whitespace-nowrap">
              <Edit3 className="w-4 h-4" /> Correction Log
            </Button>
          </Link>
          <Link to="/attendance/settings">
            <Button variant="outline" className="gap-2 bg-surface whitespace-nowrap">
              <Settings className="w-4 h-4" /> Late Rules
            </Button>
          </Link>
          <Link to="/attendance/report">
            <Button variant="outline" className="gap-2 bg-surface whitespace-nowrap">
              <FileSpreadsheet className="w-4 h-4" /> Monthly Report
            </Button>
          </Link>
          <Link to="/attendance/upload">
            <Button variant="accent" className="gap-2 whitespace-nowrap shadow-md">
              <UploadCloud className="w-4 h-4" /> Bulk Upload
            </Button>
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <MetricCard 
          title="Total Employees" 
          value="1,248" 
          subtext="Processed in system"
        />
        <MetricCard 
          title="Present Today" 
          value="1,142" 
          subtext="On-site / Logged in"
          progress={91}
        />
        <MetricCard 
          title="Absent" 
          value="64" 
          subtext="Without leave request"
          highlight={true}
        />
        <MetricCard 
          title="Late" 
          value="42" 
          subtext="Crossed grace period"
          highlight={true}
        />
        <Card className="p-4 bg-accent text-white flex flex-col justify-center border-none shadow-lg">
           <p className="text-[10px] uppercase font-bold text-white/70 tracking-wider">Completion</p>
           <h3 className="text-3xl font-bold mt-1">98.5%</h3>
           <p className="text-[10px] text-white/50 mt-2">Data mapped for today</p>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-0">
        
        {/* Main Chart */}
        <Card className="lg:col-span-2 flex flex-col min-h-[350px]">
          <CardHeader className="flex flex-row items-center justify-between border-b border-primary/5 pb-4">
            <CardTitle>Attendance Trends (Last 7 Days)</CardTitle>
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-wider">
               <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-accent"></div> Present</span>
               <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-destructive"></div> Absent</span>
               <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-warning"></div> Late</span>
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-4 pb-0 pt-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#38193215" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#38193280' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#38193280' }} />
                <Tooltip cursor={{ fill: '#38193205' }} contentStyle={{ borderRadius: '8px', border: '1px solid #38193210', fontSize: '12px' }} />
                <Bar dataKey="present" fill="#004643" radius={[4, 4, 0, 0]} maxBarSize={40} stackId="a" />
                <Bar dataKey="late" fill="#D97706" radius={[0, 0, 0, 0]} maxBarSize={40} stackId="a" />
                <Bar dataKey="absent" fill="#DC2626" radius={[4, 4, 0, 0]} maxBarSize={40} stackId="b" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Action Panel */}
        <div className="flex flex-col gap-6">
            <Card className="flex-1">
               <CardHeader className="border-b border-primary/5 pb-4">
                  <CardTitle>Exceptions requiring review</CardTitle>
               </CardHeader>
               <CardContent className="p-4 space-y-4">
                  <div className="flex gap-3 items-start border-l-2 border-warning pl-3">
                     <AlertCircle className="w-4 h-4 text-warning shrink-0 mt-0.5" />
                     <div>
                        <p className="text-xs font-bold text-primary">Unmapped Employee Codes</p>
                        <p className="text-[10px] text-primary/60 mt-0.5">3 records in yesterday's upload failed matching.</p>
                        <button className="text-[10px] font-bold text-accent mt-2 underline">Fix Mapping</button>
                     </div>
                  </div>
                  <div className="flex gap-3 items-start border-l-2 border-destructive pl-3">
                     <UserX className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                     <div>
                        <p className="text-xs font-bold text-primary">High Absenteeism Rate</p>
                        <p className="text-[10px] text-primary/60 mt-0.5">Engineering dept absent rate &gt; 12% today.</p>
                        <button className="text-[10px] font-bold text-accent mt-2 underline">View Details</button>
                     </div>
                  </div>
               </CardContent>
            </Card>

            <Card className="bg-primary text-white border-none shadow-lg relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <Clock className="w-32 h-32" />
               </div>
               <CardContent className="p-6 relative z-10 flex flex-col items-center justify-center text-center h-full gap-3">
                  <p className="text-[10px] uppercase font-bold text-white/50 tracking-widest">Next Auto Deduction</p>
                  <p className="text-2xl font-bold font-mono">25 Oct, 23:59</p>
                  <p className="text-xs text-white/70">Payroll locking based on late/absent data.</p>
                  <Button variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20 mt-2 text-xs">Review Projections</Button>
               </CardContent>
            </Card>
        </div>
      </div>

    </div>
  );
}
