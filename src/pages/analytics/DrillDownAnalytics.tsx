import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { AnalyticsNav } from './AnalyticsNav';
import { ChevronRight, ArrowLeft, Filter, Layers } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export default function DrillDownAnalytics() {
  const [level, setLevel] = useState(0); // 0: Group, 1: Company, 2: Branch, 3: Dept
  
  const PATHS = ['Group Total', 'Tech Solutions', 'DXB Head Office', 'Engineering Team'];

  return (
    <div className="flex flex-col h-full w-full pb-10 max-w-[1400px] mx-auto">
      <AnalyticsNav />
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Layers className="w-6 h-6 text-accent" />
            Drill-Down Explorer
          </h1>
          <p className="text-sm text-primary/60 mt-1">Isolate data by entity, branch, department, or individual level.</p>
        </div>
      </div>

      <Card className="mb-6 bg-primary/5 border-primary/10">
        <CardContent className="p-4 flex items-center gap-2 overflow-x-auto">
           {level > 0 && <Button variant="outline" size="sm" onClick={() => setLevel(level - 1)} className="mr-2"><ArrowLeft className="w-4 h-4 mr-2"/> Up</Button>}
           
           {PATHS.slice(0, level + 1).map((p, i) => (
             <React.Fragment key={i}>
                <div className={`px-4 py-2 rounded-md font-bold text-sm ${i === level ? 'bg-primary text-white' : 'bg-white border border-primary/20 text-primary cursor-pointer hover:bg-primary/5'}`} onClick={() => setLevel(i)}>
                  {p}
                </div>
                {i < level && <ChevronRight className="w-4 h-4 text-primary/40"/>}
             </React.Fragment>
           ))}
        </CardContent>
      </Card>

      <Card>
         <CardHeader className="flex flex-row items-center justify-between">
           <div>
             <CardTitle>Level Analytics: {PATHS[level]}</CardTitle>
             <CardDescription>Click a row below to drill deeper.</CardDescription>
           </div>
           <Button variant="outline" size="sm" className="gap-2"><Filter className="w-4 h-4"/> Filters</Button>
         </CardHeader>
         <CardContent className="p-0">
           <div className="overflow-x-auto">
             <table className="w-full text-sm text-left">
               <thead className="bg-[#1e1e1e] text-white/50 text-xs uppercase font-mono tracking-wider">
                 <tr>
                   <th className="px-6 py-4 font-bold">Sub-Entity Name</th>
                   <th className="px-6 py-4 font-bold text-right">Headcount</th>
                   <th className="px-6 py-4 font-bold text-right">Payroll Volume</th>
                   <th className="px-6 py-4 font-bold text-right">Compliance Risk</th>
                   <th className="px-6 py-4"></th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-primary/5">
                 {[1, 2, 3].map(i => (
                    <tr key={i} className="hover:bg-primary/5 cursor-pointer transition-colors" onClick={() => level < 3 && setLevel(level + 1)}>
                      <td className="px-6 py-4 font-bold text-primary">Sub-Level Item {i}</td>
                      <td className="px-6 py-4 text-right font-mono text-primary/80">1,200</td>
                      <td className="px-6 py-4 text-right font-mono text-primary/80">AED 450K</td>
                      <td className="px-6 py-4 text-right">
                         <span className="px-2 py-1 rounded text-xs font-bold bg-success/10 text-success">Low</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                         {level < 3 && <ChevronRight className="w-5 h-5 inline-block text-primary/40"/>}
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
