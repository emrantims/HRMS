import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { AnalyticsNav } from './AnalyticsNav';
import { Laptop } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

export default function AssetAnalytics() {
  return (
    <div className="flex flex-col h-full w-full pb-10 max-w-[1400px] mx-auto">
      <AnalyticsNav />
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Laptop className="w-6 h-6 text-accent" />
            Asset & Inventory Analytics
          </h1>
          <p className="text-sm text-primary/60 mt-1">Capital expenditure, assignments, and recovery tracking.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
         {[
           { label: 'Total Assets', value: '450' },
           { label: 'Assigned Assets', value: '380' },
           { label: 'Lost / Damaged', value: '12', alert: true },
           { label: 'Asset Value (AED)', value: '2.4M' },
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
           <CardHeader><CardTitle>Asset Type Distribution</CardTitle></CardHeader>
           <CardContent className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                  <Pie data={[
                    { name: 'Laptops', value: 250 }, { name: 'Phones', value: 120 }, { name: 'Vehicles', value: 80 }
                  ]} innerRadius={60} outerRadius={100} dataKey="value">
                    <Cell fill="#004643" />
                    <Cell fill="#381932" />
                    <Cell fill="#f59e0b" />
                  </Pie>
                  <Tooltip />
               </PieChart>
             </ResponsiveContainer>
           </CardContent>
         </Card>
      </div>
    </div>
  );
}
