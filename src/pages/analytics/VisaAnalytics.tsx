import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { AnalyticsNav } from './AnalyticsNav';
import { FileCheck, AlertTriangle } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function VisaAnalytics() {
  return (
    <div className="flex flex-col h-full w-full pb-10 max-w-[1400px] mx-auto">
      <AnalyticsNav />
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <FileCheck className="w-6 h-6 text-accent" />
            Visa & Compliance Analytics
          </h1>
          <p className="text-sm text-primary/60 mt-1">Legal compliance, renewal timelines, and MOHRE risks.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
         {[
           { label: 'Expiring < 30 Days', value: '24', alert: true },
           { label: 'Renewals Pending', value: '45' },
           { label: 'Medical Pending', value: '12' },
           { label: 'Abscond Cases', value: '3', alert: true },
         ].map((stat, i) => (
           <Card key={i} className={stat.alert ? 'border-danger/20 bg-danger/5' : ''}>
             <CardContent className="p-5 flex flex-col gap-4 text-center">
                <div className={`text-sm font-bold ${stat.alert ? 'text-danger-800' : 'text-primary/60'}`}>{stat.label}</div>
                <div className={`text-3xl font-bold ${stat.alert ? 'text-danger' : 'text-primary'}`}>{stat.value}</div>
             </CardContent>
           </Card>
         ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         <Card>
           <CardHeader><CardTitle>Visa Expiry Timeline</CardTitle></CardHeader>
           <CardContent className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={[
                 { month: 'Oct', expiring: 12 }, { month: 'Nov', expiring: 25 }, { month: 'Dec', expiring: 40 }, { month: 'Jan', expiring: 15 }
               ]}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} />
                 <XAxis dataKey="month" />
                 <YAxis />
                 <Tooltip />
                 <Bar dataKey="expiring" fill="#e11d48" radius={[4,4,0,0]} />
               </BarChart>
             </ResponsiveContainer>
           </CardContent>
         </Card>
      </div>
    </div>
  );
}
