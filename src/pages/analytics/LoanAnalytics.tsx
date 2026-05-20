import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { AnalyticsNav } from './AnalyticsNav';
import { Briefcase, AlertCircle, TrendingDown } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Legend } from 'recharts';

export default function LoanAnalytics() {
  return (
    <div className="flex flex-col h-full w-full pb-10 max-w-[1400px] mx-auto">
      <AnalyticsNav />
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-accent" />
            Financial Exposure & Loans
          </h1>
          <p className="text-sm text-primary/60 mt-1">Monitor company cash advances, loans, and structural financial risk.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
         {[
           { label: 'Outstanding Loans', value: 'AED 850K' },
           { label: 'Average Loan / Emp', value: 'AED 6,500' },
           { label: 'High-Risk Accounts', value: '12', alert: true },
           { label: 'Monthly Deductions', value: 'AED 45K', icon: TrendingDown },
         ].map((stat, i) => (
           <Card key={i} className={stat.alert ? 'border-danger/20' : ''}>
             <CardContent className="p-5 flex flex-col gap-4 text-center">
                <div className={`text-sm font-bold ${stat.alert ? 'text-danger/80' : 'text-primary/60'}`}>{stat.label}</div>
                <div className={`text-3xl font-bold ${stat.alert ? 'text-danger' : 'text-primary'}`}>{stat.value}</div>
             </CardContent>
           </Card>
         ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         <Card>
           <CardHeader><CardTitle>Outstanding Balance Trend</CardTitle></CardHeader>
           <CardContent className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
               <LineChart data={[
                 { month: 'Jan', balance: 900 }, { month: 'Feb', balance: 880 }, { month: 'Mar', balance: 850 }
               ]}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} />
                 <XAxis dataKey="month" />
                 <YAxis />
                 <Tooltip />
                 <Line type="monotone" dataKey="balance" stroke="#004643" strokeWidth={3} />
               </LineChart>
             </ResponsiveContainer>
           </CardContent>
         </Card>
         <Card>
           <CardHeader><CardTitle>Distribution by Department</CardTitle></CardHeader>
           <CardContent className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={[
                 { dept: 'Sales', amount: 350 }, { dept: 'Operations', amount: 200 }, { dept: 'Admin', amount: 80 }
               ]}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} />
                 <XAxis dataKey="dept" />
                 <YAxis />
                 <Tooltip />
                 <Bar dataKey="amount" fill="#381932" radius={[4,4,0,0]} />
               </BarChart>
             </ResponsiveContainer>
           </CardContent>
         </Card>
      </div>
    </div>
  );
}
