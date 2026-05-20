import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Search, Filter, Download, Terminal, CheckCircle2, XCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const LOGS = [
  { id: 'LOG-8823', rule: 'Visa Expiry Warning', time: '2024-10-15 09:00:01', target: 'EMP-045, EMP-092', status: 'Success', duration: '120ms' },
  { id: 'LOG-8822', rule: 'Attendance Policy', time: '2024-10-15 08:30:15', target: 'EMP-112', status: 'Failed', duration: '45ms', err: 'Manager ID null' },
  { id: 'LOG-8821', rule: 'Asset Return Sync', time: '2024-10-14 18:00:00', target: 'EXT-123', status: 'Success', duration: '98ms' },
  { id: 'LOG-8820', rule: 'Loan Approval Escalation', time: '2024-10-14 14:22:11', target: 'LN-034', status: 'Skipped', duration: '12ms', err: 'Condition not met' },
  { id: 'LOG-8819', rule: 'Visa Expiry Warning', time: '2024-10-14 09:00:02', target: 'EMP-018', status: 'Success', duration: '115ms' },
];

export default function ExecutionLogs() {
  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Terminal className="w-6 h-6 text-primary/60" />
            Execution Logs
          </h1>
          <p className="text-sm text-primary/60 mt-1">Audit trail of all automated actions triggered by the engine.</p>
        </div>
        <Button variant="outline" className="gap-2 border-primary/20">
          <Download className="w-4 h-4" /> Export Logs
        </Button>
      </div>

      <Card>
        <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-primary/5 pb-4">
           <CardTitle className="text-lg">System Output Logs</CardTitle>
           <div className="flex gap-2 w-full md:w-auto">
             <div className="relative flex-1 md:w-64">
               <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-primary/40" />
               <input 
                 type="text" 
                 placeholder="Search logs, targets, rules..." 
                 className="w-full pl-9 pr-3 py-2 text-sm border border-primary/20 rounded-md focus:ring-2 focus:ring-accent/50 outline-none font-mono"
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
               />
             </div>
             <Button variant="outline" size="sm" className="h-9 px-3 gap-2">
               <Filter className="w-4 h-4" />
               <span className="hidden sm:inline">Module Filter</span>
             </Button>
           </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#1e1e1e] text-white/50 text-xs uppercase tracking-wider font-mono">
                <tr>
                  <th className="px-6 py-4 font-medium">Log ID</th>
                  <th className="px-6 py-4 font-medium">Timestamp</th>
                  <th className="px-6 py-4 font-medium">Rule Executed</th>
                  <th className="px-6 py-4 font-medium">Target Entity</th>
                  <th className="px-6 py-4 font-medium">Status / Output</th>
                  <th className="px-6 py-4 font-medium text-right">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5 bg-[#0d0d0d] text-white/80 font-mono text-[13px]">
                {LOGS.filter(r => r.rule.toLowerCase().includes(search.toLowerCase()) || r.target.toLowerCase().includes(search.toLowerCase())).map(row => (
                  <tr key={row.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-white/40">{row.id}</td>
                    <td className="px-6 py-4 text-accent/80">{row.time}</td>
                    <td className="px-6 py-4 text-white font-bold">{row.rule}</td>
                    <td className="px-6 py-4">{row.target}</td>
                    <td className="px-6 py-4">
                       {row.status === 'Success' ? (
                         <span className="text-success flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> OK</span>
                       ) : row.status === 'Failed' ? (
                         <span className="text-danger flex items-center gap-1.5" title={row.err}><XCircle className="w-3.5 h-3.5" /> ERR: {row.err}</span>
                       ) : (
                         <span className="text-white/40 flex items-center gap-1.5" title={row.err}><Clock className="w-3.5 h-3.5" /> SKIP: {row.err}</span>
                       )}
                    </td>
                    <td className="px-6 py-4 text-right text-white/40">{row.duration}</td>
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
