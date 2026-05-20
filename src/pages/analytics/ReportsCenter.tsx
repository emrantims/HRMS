import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { AnalyticsNav } from './AnalyticsNav';
import { FileText, Download, Calendar, Mail } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export default function ReportsCenter() {
  const REPORTS = [
    { title: 'Executive HR Pack', desc: 'Complete monthly HR overview.', freq: 'Monthly', format: 'PDF' },
    { title: 'Group Payroll Summary', desc: 'Aggregated payroll across all companies.', freq: 'Monthly', format: 'Excel' },
    { title: 'Visa Expiry Risk Report', desc: 'Upcoming expiries list and costs.', freq: 'Weekly', format: 'Excel' },
    { title: 'Attrition & Exit Data', desc: 'Resignations & clearance metrics.', freq: 'Quarterly', format: 'PDF & Excel' },
    { title: 'Current Assets Valuation', desc: 'Hardware assignments and value.', freq: 'Bi-Annual', format: 'Excel' },
  ];

  return (
    <div className="flex flex-col h-full w-full pb-10 max-w-[1400px] mx-auto">
      <AnalyticsNav />
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <FileText className="w-6 h-6 text-accent" />
            Executive Reports Center
          </h1>
          <p className="text-sm text-primary/60 mt-1">Generate, schedule, or export BI reports.</p>
        </div>
        <Button variant="accent" className="gap-2 bg-accent shadow-md"><FileText className="w-4 h-4"/> Custom Report Builder</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REPORTS.map((r, i) => (
          <Card key={i} className="hover:border-primary/20 transition-all hover:shadow-md">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-primary/5 rounded-xl"><FileText className="w-6 h-6 text-primary"/></div>
                <div className="flex gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-accent/10 text-accent px-2 py-1 rounded">{r.freq}</span>
                </div>
              </div>
              <h3 className="font-bold text-primary text-lg mb-1">{r.title}</h3>
              <p className="text-sm text-primary/60 mb-6 min-h-[40px]">{r.desc}</p>
              
              <div className="flex items-center justify-between border-t border-primary/10 pt-4">
                <span className="text-xs font-mono text-primary/40 font-bold">{r.format}</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0" title="Schedule"><Calendar className="w-4 h-4"/></Button>
                  <Button variant="outline" size="sm" className="h-8 w-8 p-0" title="Email Request"><Mail className="w-4 h-4"/></Button>
                  <Button variant="accent" size="sm" className="h-8 px-3 gap-2"><Download className="w-3.5 h-3.5"/> Generate</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
