import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { AnalyticsNav } from './AnalyticsNav';
import { AlertTriangle, Clock, ShieldAlert, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export default function RiskMonitoring() {
  const RISKS = [
    { severity: 'Critical', module: 'Visa & Compliance', issue: '9 Visas expiring in < 7 days in "Logistics Pro".', action: 'Escalate to Group PRO', time: '10m ago' },
    { severity: 'High', module: 'Payroll', issue: 'Overtime claim anomaly (+45% vs avg) in "Tech Solutions".', action: 'Review Batch Data', time: '1h ago' },
    { severity: 'Medium', module: 'Assets', issue: '3 high-value assets not recovered for exit case.', action: 'Hold Final Settlement', time: '3h ago' },
    { severity: 'Low', module: 'Attendance', issue: 'Missing attendance logs for AUH branch, day 3.', action: 'Notify Branch Mgr', time: '1d ago' },
  ];

  return (
    <div className="flex flex-col h-full w-full pb-10 max-w-[1400px] mx-auto">
      <AnalyticsNav />
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-danger flex items-center gap-2">
            <ShieldAlert className="w-6 h-6" />
            Real-Time Risk Monitoring
          </h1>
          <p className="text-sm text-primary/60 mt-1">AI-driven anomaly detection and compliance warnings.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2 space-y-4">
            {RISKS.map((r, i) => (
              <Card key={i} className={`border-l-4 ${r.severity === 'Critical' ? 'border-l-danger bg-danger/5' : r.severity === 'High' ? 'border-l-warning-800' : r.severity === 'Medium' ? 'border-l-accent' : 'border-l-primary/30'} `}>
                 <CardContent className="p-4 flex items-start gap-4">
                    <div className="mt-1">
                      {r.severity === 'Critical' && <AlertTriangle className="w-5 h-5 text-danger" />}
                      {r.severity === 'High' && <Zap className="w-5 h-5 text-warning-800" />}
                      {r.severity === 'Medium' && <Clock className="w-5 h-5 text-accent" />}
                      {r.severity === 'Low' && <ShieldCheck className="w-5 h-5 text-primary/40" />}
                    </div>
                    <div className="flex-1">
                       <div className="flex justify-between items-center mb-1">
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${r.severity === 'Critical' ? 'bg-danger text-white' : r.severity === 'High' ? 'bg-warning-800 text-white' : 'bg-primary/10 text-primary'}`}>{r.severity} Priority • {r.module}</span>
                          <span className="text-xs font-mono text-primary/40">{r.time}</span>
                       </div>
                       <h3 className="font-bold text-primary text-sm my-2">{r.issue}</h3>
                       <div className="flex items-center gap-2 mt-4 pt-4 border-t border-primary/10">
                         <Button variant={r.severity === 'Critical' ? 'accent' : 'outline'} size="sm" className={r.severity === 'Critical' ? 'bg-danger hover:bg-danger-800 text-white' : ''}>
                           {r.action}
                         </Button>
                         <Button variant="outline" size="sm" className="border-dashed text-primary/50">Dismiss</Button>
                       </div>
                    </div>
                 </CardContent>
              </Card>
            ))}
         </div>

         <div className="space-y-6">
            <Card className="bg-[#1e1e1e] text-white">
              <CardHeader className="border-b border-white/10">
                 <CardTitle className="text-lg">System Health Scope</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                 <div>
                   <div className="flex justify-between text-sm mb-1"><span className="text-white/60">Compliance Radar</span><span className="text-warning font-bold">85%</span></div>
                   <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-warning w-[85%]"></div></div>
                 </div>
                 <div>
                   <div className="flex justify-between text-sm mb-1"><span className="text-white/60">Financial Integrity</span><span className="text-success font-bold">98%</span></div>
                   <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-success w-[98%]"></div></div>
                 </div>
                 <div>
                   <div className="flex justify-between text-sm mb-1"><span className="text-white/60">Data Sync Delays</span><span className="text-danger font-bold">High</span></div>
                   <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-danger w-[35%]"></div></div>
                 </div>
              </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}
