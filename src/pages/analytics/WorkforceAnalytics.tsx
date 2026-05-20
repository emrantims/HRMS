import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { AnalyticsNav } from './AnalyticsNav';
import { Users, UserPlus, UserMinus, Globe } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const DEPT_DATA = [
  { name: 'Engineering', count: 450 },
  { name: 'Sales', count: 320 },
  { name: 'Operations', count: 280 },
  { name: 'HR & Admin', count: 150 },
  { name: 'Finance', count: 100 },
];
const COLORS = ['#004643', '#381932', '#667eea', '#f59e0b', '#10b981'];

const NAT_DATA = [
  { nat: 'India', count: 550 },
  { nat: 'Philippines', count: 300 },
  { nat: 'Pakistan', count: 250 },
  { nat: 'Egypt', count: 120 },
  { nat: 'UAE', count: 80 },
];

export default function WorkforceAnalytics() {
  return (
    <div className="flex flex-col h-full w-full pb-10 max-w-[1400px] mx-auto">
      <AnalyticsNav />

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Users className="w-6 h-6 text-accent" />
            Workforce Analytics
          </h1>
          <p className="text-sm text-primary/60 mt-1">Demographics, distribution, and movement of human capital.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
         {[
           { label: 'Net Growth (YTD)', value: '+12%', icon: Users },
           { label: 'New Joins (Month)', value: '45', icon: UserPlus },
           { label: 'Resignations (Month)', value: '12', icon: UserMinus },
           { label: 'Abscond Rate', value: '1.2%', icon: UserMinus, alert: true },
         ].map((stat, i) => (
           <Card key={i} className={stat.alert ? 'border-warning' : ''}>
             <CardContent className="p-5 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                   <div className="text-sm font-bold text-primary/60">{stat.label}</div>
                   <div className="p-2 bg-primary/5 rounded-md"><stat.icon className={`w-4 h-4 ${stat.alert ? 'text-warning-800' : 'text-primary'}`} /></div>
                </div>
                <div className={`text-2xl font-bold ${stat.alert ? 'text-warning-800' : 'text-primary'}`}>
                  {stat.value}
                </div>
             </CardContent>
           </Card>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         <Card>
           <CardHeader>
             <CardTitle className="text-lg">Department Distribution</CardTitle>
             <CardDescription>Headcount by functional area</CardDescription>
           </CardHeader>
           <CardContent className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={DEPT_DATA} innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="count">
                    {DEPT_DATA.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                </PieChart>
             </ResponsiveContainer>
             <div className="flex flex-wrap justify-center gap-4 mt-2">
               {DEPT_DATA.map((entry, index) => (
                 <div key={entry.name} className="flex items-center gap-1.5 text-xs text-primary/70">
                   <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                   {entry.name} ({entry.count})
                 </div>
               ))}
             </div>
           </CardContent>
         </Card>

         <Card>
           <CardHeader>
             <CardTitle className="text-lg flex items-center gap-2"><Globe className="w-5 h-5 text-primary/60"/> Nationality Demographics</CardTitle>
             <CardDescription>Top 5 nationalities across the group</CardDescription>
           </CardHeader>
           <CardContent className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={NAT_DATA} layout="vertical" margin={{ left: 30 }}>
                 <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e5e7eb" />
                 <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                 <YAxis dataKey="nat" type="category" axisLine={false} tickLine={false} tick={{fill: '#381932', fontSize: 12, fontWeight: 'bold'}} />
                 <Tooltip cursor={{fill: '#f1f5f9'}} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                 <Bar dataKey="count" fill="#381932" radius={[0, 4, 4, 0]} barSize={24} />
               </BarChart>
             </ResponsiveContainer>
           </CardContent>
         </Card>
      </div>

    </div>
  );
}
