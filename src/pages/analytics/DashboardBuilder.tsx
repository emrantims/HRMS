import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { AnalyticsNav } from './AnalyticsNav';
import { LayoutDashboard, Save, Plus, Move } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export default function DashboardBuilder() {
  return (
    <div className="flex flex-col h-full w-full pb-10 max-w-[1400px] mx-auto">
      <AnalyticsNav />
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <LayoutDashboard className="w-6 h-6 text-accent" />
            Custom Dashboard Builder
          </h1>
          <p className="text-sm text-primary/60 mt-1">Design tailored views for different executive roles.</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="gap-2 border-dashed text-primary/70"><Plus className="w-4 h-4"/> Add Widget</Button>
           <Button variant="accent" className="gap-2 bg-accent shadow-md"><Save className="w-4 h-4"/> Save Layout</Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
         
         <div className="col-span-12 md:col-span-8 grid grid-cols-2 gap-4 border-2 border-dashed border-primary/20 rounded-xl p-4 bg-primary/5 min-h-[500px]">
             {/* Mock Draggable Widgets */}
             <Card className="col-span-2 relative group cursor-move hover:ring-2 ring-accent">
               <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"><Move className="w-4 h-4 text-primary/40"/></div>
               <CardHeader><CardTitle className="text-sm">Workforce Growth Widget</CardTitle></CardHeader>
               <CardContent className="h-40 bg-primary/5 m-4 rounded flex items-center justify-center text-primary/40 text-xs font-mono border border-primary/10">Chart Visualization Area</CardContent>
             </Card>

             <Card className="col-span-1 relative group cursor-move hover:ring-2 ring-accent">
               <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"><Move className="w-4 h-4 text-primary/40"/></div>
               <CardHeader><CardTitle className="text-sm">Total Payroll KPI</CardTitle></CardHeader>
               <CardContent className="h-20 bg-primary/5 m-4 rounded border border-primary/10"></CardContent>
             </Card>

             <Card className="col-span-1 relative group cursor-move hover:ring-2 ring-accent">
               <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"><Move className="w-4 h-4 text-primary/40"/></div>
               <CardHeader><CardTitle className="text-sm">Visa Risk KPI</CardTitle></CardHeader>
               <CardContent className="h-20 bg-danger/10 m-4 rounded border border-danger/20"></CardContent>
             </Card>
         </div>

         <div className="col-span-12 md:col-span-4">
             <Card className="sticky top-6">
                <CardHeader>
                  <CardTitle>Widget Library</CardTitle>
                  <CardDescription>Drag and drop onto canvas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                   <div className="p-3 border border-primary/10 bg-white rounded cursor-grab shadow-sm text-sm font-bold text-primary flex items-center justify-between">
                     Company Distribution Pie <Move className="w-4 h-4 text-primary/20"/>
                   </div>
                   <div className="p-3 border border-primary/10 bg-white rounded cursor-grab shadow-sm text-sm font-bold text-primary flex items-center justify-between">
                     Attendance Heatmap <Move className="w-4 h-4 text-primary/20"/>
                   </div>
                   <div className="p-3 border border-primary/10 bg-white rounded cursor-grab shadow-sm text-sm font-bold text-primary flex items-center justify-between opacity-50">
                     Asset Overview <span className="text-[10px] bg-primary/10 px-1 rounded">Added</span>
                   </div>
                   <div className="p-3 border border-primary/10 bg-white rounded cursor-grab shadow-sm text-sm font-bold text-primary flex items-center justify-between">
                     Exit & Attrition Trend <Move className="w-4 h-4 text-primary/20"/>
                   </div>
                </CardContent>
             </Card>
         </div>

      </div>
    </div>
  );
}
