import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { AnalyticsNav } from './AnalyticsNav';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Download, Building2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const COMPANY_DATA = [
  { name: 'Tech Solutions', employees: 450, payroll: 1.4, loans: 320, assets: 850, visaRisk: 12, exitRate: 2.1 },
  { name: 'Trading Group', employees: 300, payroll: 1.1, loans: 210, assets: 400, visaRisk: 5, exitRate: 4.5 },
  { name: 'Logistics Pro', employees: 250, payroll: 0.9, loans: 180, assets: 600, visaRisk: 18, exitRate: 5.2 },
  { name: 'Retail Corp', employees: 200, payroll: 0.7, loans: 140, assets: 150, visaRisk: 2, exitRate: 7.1 },
];

export default function MultiCompanyAnalytics() {
  return (
    <div className="flex flex-col h-full w-full pb-10 max-w-[1400px] mx-auto">
      <AnalyticsNav />

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Building2 className="w-6 h-6 text-accent" />
            Multi-Company Comparison
          </h1>
          <p className="text-sm text-primary/60 mt-1">Compare performance metrics across Group entities.</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="w-4 h-4"/> Export Report
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
         <Card>
           <CardHeader>
             <CardTitle className="text-lg">Payroll & Employee Scale</CardTitle>
             <CardDescription>Payroll cost (Millions AED) vs Headcount</CardDescription>
           </CardHeader>
           <CardContent className="h-[350px]">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={COMPANY_DATA} layout="vertical" margin={{ left: 20 }}>
                 <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#e5e7eb" />
                 <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                 <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#381932', fontSize: 12, fontWeight: 'bold'}} />
                 <Tooltip cursor={{fill: '#f1f5f9'}} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                 <Legend />
                 <Bar dataKey="employees" name="Total Employees" fill="#004643" radius={[0, 4, 4, 0]} />
                 <Bar dataKey="payroll" name="Payroll (Mn AED)" fill="#381932" radius={[0, 4, 4, 0]} />
               </BarChart>
             </ResponsiveContainer>
           </CardContent>
         </Card>
      </div>

      <Card>
        <CardHeader className="border-b border-primary/10 pb-4">
           <CardTitle className="text-lg">Entity Performance Matrix</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
           <div className="overflow-x-auto">
             <table className="w-full text-sm text-left">
               <thead className="bg-primary/5 text-primary/60 text-xs uppercase tracking-wider">
                 <tr>
                   <th className="px-6 py-4 font-bold">Company Name</th>
                   <th className="px-6 py-4 font-bold text-right">Headcount</th>
                   <th className="px-6 py-4 font-bold text-right">Monthly Payroll (AED)</th>
                   <th className="px-6 py-4 font-bold text-right">Active Loans (AED)</th>
                   <th className="px-6 py-4 font-bold text-right">Assets Assigned</th>
                   <th className="px-6 py-4 font-bold text-center">Visa Risks</th>
                   <th className="px-6 py-4 font-bold text-center">Attr. Rate</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-primary/5">
                 {COMPANY_DATA.map((co, i) => (
                   <tr key={i} className="hover:bg-primary/5 transition-colors">
                     <td className="px-6 py-4 font-bold text-primary flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full" style={{ backgroundColor: i % 2 === 0 ? '#004643' : '#381932' }}></div>
                       {co.name}
                     </td>
                     <td className="px-6 py-4 text-right font-mono text-primary/80">{co.employees}</td>
                     <td className="px-6 py-4 text-right font-mono text-primary/80">{co.payroll}M</td>
                     <td className="px-6 py-4 text-right font-mono text-primary/80">{co.loans}K</td>
                     <td className="px-6 py-4 text-right font-mono text-primary/80">{co.assets}</td>
                     <td className="px-6 py-4 text-center">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${co.visaRisk > 10 ? 'bg-danger/10 text-danger' : 'bg-warning/10 text-warning-800'}`}>
                          {co.visaRisk} Critical
                        </span>
                     </td>
                     <td className="px-6 py-4 text-center">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${co.exitRate > 5 ? 'bg-danger/10 text-danger' : 'bg-success/10 text-success'}`}>
                          {co.exitRate}%
                        </span>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </CardContent>
      </Card>
      
    </div>
  );
}
