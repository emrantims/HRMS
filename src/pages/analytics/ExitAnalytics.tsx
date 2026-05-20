import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { AnalyticsNav } from './AnalyticsNav';
import { DoorOpen } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function ExitAnalytics() {
  return (
    <div className="flex flex-col h-full w-full pb-10 max-w-[1400px] mx-auto">
      <AnalyticsNav />
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <DoorOpen className="w-6 h-6 text-accent" />
            Exit & Attrition Analytics
          </h1>
          <p className="text-sm text-primary/60 mt-1">Employee turnover trends, retention analysis, and exit reasons.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
         {[
           { label: 'Monthly Exits', value: '18' },
           { label: 'Avg Tenure (Yrs)', value: '3.2' },
           { label: 'Resignations', value: '12', alert: true },
           { label: 'Terminations', value: '6' },
         ].map((stat, i) => (
           <Card key={i} className={stat.alert ? 'border-warning/50 bg-warning/5' : ''}>
             <CardContent className="p-5 flex flex-col gap-4 text-center">
                <div className={`text-sm font-bold ${stat.alert ? 'text-warning-800' : 'text-primary/60'}`}>{stat.label}</div>
                <div className={`text-3xl font-bold ${stat.alert ? 'text-warning-800' : 'text-primary'}`}>{stat.value}</div>
             </CardContent>
           </Card>
         ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         <Card>
           <CardHeader><CardTitle>Attrition Trend (YTD)</CardTitle></CardHeader>
           <CardContent className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={[
                 { month: 'Jan', rate: 1.2 }, { month: 'Feb', rate: 1.4 }, { month: 'Mar', rate: 1.1 }, { month: 'Apr', rate: 2.1 }
               ]}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} />
                 <XAxis dataKey="month" />
                 <YAxis />
                 <Tooltip />
                 <Area type="monotone" dataKey="rate" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.2} strokeWidth={2} />
               </AreaChart>
             </ResponsiveContainer>
           </CardContent>
         </Card>
      </div>
    </div>
  );
}
