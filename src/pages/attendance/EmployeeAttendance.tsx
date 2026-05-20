import React from "react";
import { ArrowLeft, Calendar, FileSpreadsheet, MapPin, Building, Briefcase } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent, MetricCard } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";

// Mock Grid Data for generic employee single view
const daysInOct = Array.from({ length: 31 }, (_, i) => i + 1);
const generateStatus = () => {
   const r = Math.random();
   if(r > 0.95) return 'A'; // Absent
   if(r > 0.85) return 'L'; // Late
   return 'P'; // Present
}
const statuses = daysInOct.map(() => generateStatus());

export default function EmployeeAttendance() {
  const navigate = useNavigate();
  const { id } = useParams();

  const present = statuses.filter(s => s === 'P').length;
  const late = statuses.filter(s => s === 'L').length;
  const absent = statuses.filter(s => s === 'A').length;

  return (
    <div className="flex flex-col h-full gap-6 max-w-6xl mx-auto w-full pb-10">
      
      {/* Action Bar */}
      <div className="flex items-center justify-between shrink-0 mb-2">
         <Button variant="ghost" className="gap-2 -ml-3" onClick={() => navigate('/attendance/report')}>
            <ArrowLeft className="w-4 h-4"/> Back to Report Grid
         </Button>
      </div>

       {/* Brief Profile Header */}
       <div className="bg-surface rounded-2xl p-6 border border-primary/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 shrink-0 relative overflow-hidden">
         <div className="flex items-center gap-6 relative z-10">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold shrink-0">
               AA
            </div>
            <div>
               <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-bold tracking-tight">Ahmed Ali</h1>
                  <span className="text-xs font-mono bg-primary/5 px-2 py-1 rounded text-primary/70 font-semibold border border-primary/10">{id || "EMP-2024-0012"}</span>
               </div>
               
               <div className="flex flex-wrap items-center gap-4 mt-2 text-sm font-medium text-primary/70">
                  <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> Senior Developer</span>
                  <span className="text-primary/30">•</span>
                  <span className="flex items-center gap-1"><Building className="w-4 h-4" /> Al Maha Tech</span>
               </div>
            </div>
         </div>
      </div>

      <h2 className="text-lg font-bold text-primary mt-2">October 2024 Summary</h2>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard 
          title="Days Tracked" 
          value="31" 
        />
        <MetricCard 
          title="Present" 
          value={present.toString()} 
          progress={100}
        />
        <MetricCard 
          title="Late" 
          value={late.toString()} 
          highlight={late > 3}
        />
        <MetricCard 
          title="Absent" 
          value={absent.toString()} 
          highlight={absent > 0}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         
         {/* Calendar View representation via cards for UI simplicity instead of a full grid library */}
         <Card className="lg:col-span-2">
            <CardHeader className="border-b border-primary/5 pb-4">
               <CardTitle>Daily Attendance Map</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
               <div className="grid grid-cols-7 gap-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                     <div key={d} className="text-[10px] font-bold text-center text-primary/40 uppercase mb-2">{d}</div>
                  ))}
                  
                  {/* Empty slots for month start layout simulation */}
                  <div></div><div></div>

                  {daysInOct.map((day, idx) => {
                     const status = statuses[idx];
                     let bg = "bg-surface border-primary/10";
                     let label = "";
                     if(status === 'P') { bg = "bg-success/5 border-success/20"; label="9:00 AM"; }
                     if(status === 'L') { bg = "bg-warning/10 border-warning"; label="9:45 AM"; }
                     if(status === 'A') { bg = "bg-destructive/10 border-destructive shadow-sm"; label="No Log"; }

                     return (
                        <div key={day} className={`aspect-square rounded-lg border p-2 flex flex-col justify-between transition-transform hover:scale-105 cursor-pointer ${bg}`}>
                           <span className="text-xs font-bold font-mono opacity-60 text-primary">{day}</span>
                           <span className="text-[9px] font-bold tracking-tight text-center mt-auto opacity-80" style={{
                              color: status === 'A' ? '#dc2626' : status === 'L' ? '#d97706' : '#059669'
                           }}>{label}</span>
                        </div>
                     )
                  })}
               </div>
            </CardContent>
         </Card>

         <div className="space-y-6">
            <Card>
               <CardHeader className="border-b border-primary/5 pb-4 flex flex-row items-center justify-between">
                  <CardTitle>History Logs</CardTitle>
               </CardHeader>
               <CardContent className="p-0">
                  <div className="divide-y divide-primary/5 font-mono text-xs max-h-[400px] overflow-y-auto">
                     {daysInOct.filter((_,i) => statuses[i] !== 'P').slice(0, 8).map((day, i) => {
                        const status = statuses[day-1];
                        return (
                           <div key={i} className="p-4 hover:bg-surface flex items-center justify-between">
                              <div>
                                 <p className="font-bold text-primary">2024-10-{day.toString().padStart(2, '0')}</p>
                                 <p className="text-[10px] text-primary/50 font-sans mt-0.5">Uploaded via Bulk Import</p>
                              </div>
                              <Badge variant={status === 'L' ? 'warning' : 'destructive'} className="text-[10px] uppercase font-sans">
                                 {status === 'L' ? 'Late Mark' : 'Absent'}
                              </Badge>
                           </div>
                        )
                     })}
                     <div className="p-4 text-center">
                        <Button variant="ghost" size="sm" className="text-xs text-primary/50 underline h-auto p-0">View complete logs</Button>
                     </div>
                  </div>
               </CardContent>
            </Card>
         </div>

      </div>

    </div>
  );
}
