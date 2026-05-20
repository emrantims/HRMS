import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { AnalyticsNav } from './AnalyticsNav';
import { DollarSign, ArrowUpRight, ArrowDownRight, CreditCard, Receipt } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Legend } from 'recharts';

const PAYROLL_BREAKDOWN = [
  { month: 'Jan', basic: 2.1, allowances: 0.8, bonuses: 0.3 },
  { month: 'Feb', basic: 2.15, allowances: 0.85, bonuses: 0.4 },
  { month: 'Mar', basic: 2.2, allowances: 0.9, bonuses: 0.4 },
  { month: 'Apr', basic: 2.25, allowances: 0.95, bonuses: 0.4 },
  { month: 'May', basic: 2.3, allowances: 1.0, bonuses: 0.5 },
  { month: 'Jun', basic: 2.4, allowances: 1.2, bonuses: 0.5 },
];

export default function PayrollAnalytics() {
  return (
    <div className="flex flex-col h-full w-full pb-10 max-w-[1400px] mx-auto">
      <AnalyticsNav />

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-accent" />
            Payroll & Compensation
          </h1>
          <p className="text-sm text-primary/60 mt-1">Salary trends, cost breakdown, and financial exposure.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
         <Card>
           <CardContent className="p-5 flex flex-col gap-4">
              <div className="text-sm font-bold text-primary/60">Total Payroll (MTD)</div>
              <div className="text-2xl font-bold text-primary flex items-center gap-2">
                <span className="text-sm text-primary/40 font-normal">AED</span> 4.1M
              </div>
              <div className="text-xs font-bold text-success flex items-center gap-1"><ArrowUpRight className="w-3 h-3"/> 2.4% vs last month</div>
           </CardContent>
         </Card>
         <Card>
           <CardContent className="p-5 flex flex-col gap-4">
              <div className="text-sm font-bold text-primary/60">Avg Salary / Emp</div>
              <div className="text-2xl font-bold text-primary flex items-center gap-2">
                <span className="text-sm text-primary/40 font-normal">AED</span> 8,240
              </div>
              <div className="text-xs font-bold text-success flex items-center gap-1"><ArrowUpRight className="w-3 h-3"/> 1.1% vs last month</div>
           </CardContent>
         </Card>
         <Card>
           <CardContent className="p-5 flex flex-col gap-4">
              <div className="text-sm font-bold text-primary/60">Total Bonuses</div>
              <div className="text-2xl font-bold text-primary flex items-center gap-2">
                <span className="text-sm text-primary/40 font-normal">AED</span> 500K
              </div>
              <div className="text-xs font-bold text-primary/40 flex items-center gap-1">Variable pay component</div>
           </CardContent>
         </Card>
         <Card>
           <CardContent className="p-5 flex flex-col gap-4">
              <div className="text-sm font-bold text-danger-800">Total Deductions</div>
              <div className="text-2xl font-bold text-danger flex items-center gap-2">
                <span className="text-sm text-danger/40 font-normal">AED</span> 120K
              </div>
              <div className="text-xs font-bold text-danger flex items-center gap-1"><ArrowDownRight className="w-3 h-3"/> From attendance & loans</div>
           </CardContent>
         </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
             <CardTitle className="text-lg">Payroll Component Trend</CardTitle>
             <CardDescription>Breakdown of Basic, Allowances, and Bonuses (Millions AED)</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={PAYROLL_BREAKDOWN}>
                  <defs>
                    <linearGradient id="colorBasic" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#381932" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#381932" stopOpacity={0.2}/>
                    </linearGradient>
                     <linearGradient id="colorAllow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#004643" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#004643" stopOpacity={0.2}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                  <Legend />
                  <Area type="monotone" dataKey="basic" stackId="1" stroke="#381932" fill="url(#colorBasic)" name="Basic Salary" />
                  <Area type="monotone" dataKey="allowances" stackId="1" stroke="#004643" fill="url(#colorAllow)" name="Allowances" />
                  <Area type="monotone" dataKey="bonuses" stackId="1" stroke="#f59e0b" fill="#f59e0b" name="Bonuses / Comm" />
               </AreaChart>
             </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
           <CardHeader>
             <CardTitle className="text-lg">Cost by Department</CardTitle>
             <CardDescription>Top spending departments</CardDescription>
           </CardHeader>
           <CardContent className="h-[350px]">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={[
                 { dept: 'Sales', cost: 1.2 },
                 { dept: 'Eng', cost: 1.0 },
                 { dept: 'Ops', cost: 0.8 },
                 { dept: 'Admin', cost: 0.4 },
               ]} layout="vertical" margin={{ left: 10 }}>
                 <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e5e7eb" />
                 <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                 <YAxis dataKey="dept" type="category" axisLine={false} tickLine={false} tick={{fill: '#381932', fontSize: 12, fontWeight: 'bold'}} />
                 <Tooltip cursor={{fill: '#f1f5f9'}} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} formatter={(val) => [`AED ${val}M`, 'Cost']} />
                 <Bar dataKey="cost" fill="#381932" radius={[0, 4, 4, 0]} barSize={32} />
               </BarChart>
             </ResponsiveContainer>
           </CardContent>
        </Card>
      </div>
    </div>
  );
}
