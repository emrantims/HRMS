import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import {
  Settings, Bot, Activity, AlertTriangle, Zap, CheckCircle2, PlayCircle, Plus, BookOpen, Clock
} from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area
} from 'recharts';
import { Link } from 'react-router-dom';

const TRIGGER_DATA = [
  { time: '08:00', triggers: 45 },
  { time: '10:00', triggers: 120 },
  { time: '12:00', triggers: 85 },
  { time: '14:00', triggers: 210 },
  { time: '16:00', triggers: 150 },
  { time: '18:00', triggers: 60 },
];

const SUCCESS_DATA = [
  { day: 'Mon', success: 98, failed: 2 },
  { day: 'Tue', success: 95, failed: 5 },
  { day: 'Wed', success: 100, failed: 0 },
  { day: 'Thu', success: 85, failed: 15 },
  { day: 'Fri', success: 99, failed: 1 },
];

const ACTIVE_WORKFLOWS = [
  { id: 'WF-101', name: 'Visa Expiry Warning (30 Days)', module: 'Visa', status: 'active', runs: 124 },
  { id: 'WF-102', name: 'Attendance Policy - 3 Lates', module: 'Attendance', status: 'active', runs: 45 },
  { id: 'WF-103', name: 'Asset Return Deduction', module: 'Exit', status: 'active', runs: 12 },
  { id: 'WF-104', name: 'Loan Approval Escalation', module: 'Loans', status: 'paused', runs: 0 },
];

export default function AutomationDashboard() {
  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2 text-primary">
            <Bot className="w-6 h-6 text-accent" />
            Automation Rules Engine
          </h1>
          <p className="text-sm text-primary/60 mt-1">Configure, monitor, and troubleshoot intelligent system workflows.</p>
        </div>
        <div className="flex gap-2">
           <Link to="/automation/simulate">
             <Button variant="outline" className="gap-2">
               <PlayCircle className="w-4 h-4" /> Simulate Rule
             </Button>
           </Link>
           <Link to="/automation/rules/new">
             <Button variant="accent" className="gap-2 bg-accent shadow-md">
               <Plus className="w-4 h-4" /> Create Rule
             </Button>
           </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {[
          { title: "Active Rules", value: "48", icon: Activity, alert: false },
          { title: "Triggers Today", value: "721", icon: Zap, alert: false },
          { title: "Approvals Running", value: "14", icon: Clock, alert: false },
          { title: "Pending Actions", value: "6", icon: CheckCircle2, alert: false },
          { title: "Notifications Sent", value: "3.2K", icon: BookOpen, alert: false },
          { title: "Failed Automations", value: "3", icon: AlertTriangle, alert: true, link: "/automation/failed" },
        ].map((stat, i) => (
          <Card key={i} className={`border-primary/10 ${stat.alert ? 'bg-danger/5 border-danger/20' : 'bg-white'}`}>
            <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full relative">
              {stat.link && <Link to={stat.link} className="absolute inset-0 z-10" />}
              <stat.icon className={`w-6 h-6 mb-2 ${stat.alert ? 'text-danger' : 'text-accent'}`} />
              <p className="text-xs text-primary/60 font-medium whitespace-nowrap">{stat.title}</p>
              <h3 className={`text-2xl font-bold mt-1 ${stat.alert ? 'text-danger flex items-center gap-2' : 'text-primary'}`}>
                {stat.value}
                {stat.alert && <span className="flex h-2 w-2 relative"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-danger opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-danger"></span></span>}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">System Trigger Frequency (Today)</CardTitle>
            <CardDescription>Volume of events evaluated by the rules engine.</CardDescription>
          </CardHeader>
          <CardContent className="h-[250px] pb-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={TRIGGER_DATA}>
                <defs>
                  <linearGradient id="colorTriggers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#004643" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#004643" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="triggers" stroke="#004643" fillOpacity={1} fill="url(#colorTriggers)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Automation Success Ratio</CardTitle>
            <CardDescription>Completed vs Failed automated actions (Last 5 Days).</CardDescription>
          </CardHeader>
          <CardContent className="h-[250px]">
             <ResponsiveContainer width="100%" height="100%">
              <LineChart data={SUCCESS_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip
                   cursor={{fill: '#f1f5f9'}}
                   contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                 />
                <Line type="monotone" dataKey="success" stroke="#004643" strokeWidth={3} dot={{r: 4}} />
                <Line type="monotone" dataKey="failed" stroke="#E11D48" strokeWidth={3} dot={{r: 4}} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between border-b border-primary/5 pb-4">
              <CardTitle className="text-lg">Most Active Workflows</CardTitle>
              <Link to="/automation/rules">
                <Button variant="outline" size="sm">View All</Button>
              </Link>
            </CardHeader>
            <CardContent className="p-0">
               <table className="w-full text-sm text-left">
                 <thead className="bg-primary/5 text-primary/60 text-xs uppercase">
                   <tr>
                     <th className="px-4 py-3 font-medium">WF ID</th>
                     <th className="px-4 py-3 font-medium">Rule Name</th>
                     <th className="px-4 py-3 font-medium">Module</th>
                     <th className="px-4 py-3 font-medium text-center">Status</th>
                     <th className="px-4 py-3 font-medium text-right">Runs</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-primary/5">
                   {ACTIVE_WORKFLOWS.map((wf) => (
                     <tr key={wf.id} className="hover:bg-primary/5 transition-colors">
                       <td className="px-4 py-3 font-mono text-xs">{wf.id}</td>
                       <td className="px-4 py-3 font-bold text-primary">{wf.name}</td>
                       <td className="px-4 py-3">
                         <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">{wf.module}</span>
                       </td>
                       <td className="px-4 py-3 text-center">
                         {wf.status === 'active' ? (
                           <span className="text-success text-xs font-bold inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-success"></span> Active</span>
                         ) : (
                           <span className="text-primary/40 text-xs font-bold inline-flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-primary/20"></span> Paused</span>
                         )}
                       </td>
                       <td className="px-4 py-3 text-right font-mono">{wf.runs}</td>
                     </tr>
                   ))}
                 </tbody>
               </table>
            </CardContent>
         </Card>

         <Card className="bg-primary text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-20 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
            <CardHeader className="relative z-10 border-b border-white/10 pb-4">
              <CardTitle className="text-lg text-white">System Health</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 relative z-10 space-y-6">
               <div>
                  <div className="flex justify-between text-sm mb-1">
                     <span className="text-white/60">Engine Status</span>
                     <span className="text-success font-bold flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> Online</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                     <div className="h-full bg-success w-full"></div>
                  </div>
               </div>
               <div>
                  <div className="flex justify-between text-sm mb-1">
                     <span className="text-white/60">Queue Processing Delay</span>
                     <span className="text-white font-mono">1.2ms</span>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                     <div className="h-full bg-accent w-[15%]"></div>
                  </div>
               </div>
               <div className="pt-4 border-t border-white/10">
                 <Link to="/automation/settings">
                   <Button variant="outline" className="w-full text-white border-white/20 hover:bg-white hover:text-primary transition-colors">Engine Settings</Button>
                 </Link>
               </div>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
