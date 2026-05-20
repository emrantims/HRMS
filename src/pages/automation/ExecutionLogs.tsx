import React, { useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Badge } from '../../components/ui/Badge';
import { Search, Filter, Download, Terminal, CheckCircle2, XCircle, Clock } from 'lucide-react';

const LOGS = [
  { id: 'LOG-8823', rule: 'Visa Expiry Warning', time: '2024-10-15 09:00:01', target: 'EMP-045, EMP-092', status: 'Success', duration: '120ms' },
  { id: 'LOG-8822', rule: 'Attendance Policy', time: '2024-10-15 08:30:15', target: 'EMP-112', status: 'Failed', duration: '45ms', err: 'Manager ID null' },
  { id: 'LOG-8821', rule: 'Asset Return Sync', time: '2024-10-14 18:00:00', target: 'EXT-123', status: 'Success', duration: '98ms' },
  { id: 'LOG-8820', rule: 'Loan Approval Escalation', time: '2024-10-14 14:22:11', target: 'LN-034', status: 'Skipped', duration: '12ms', err: 'Condition not met' },
  { id: 'LOG-8819', rule: 'Visa Expiry Warning', time: '2024-10-14 09:00:02', target: 'EMP-018', status: 'Success', duration: '115ms' },
];

function statusBadge(status: string, err?: string) {
  if (status === 'Success') {
    return <Badge variant="success" className="gap-1.5"><CheckCircle2 className="h-3.5 w-3.5" /> OK</Badge>;
  }
  if (status === 'Failed') {
    return <Badge variant="destructive" className="gap-1.5" title={err}><XCircle className="h-3.5 w-3.5" /> ERR: {err}</Badge>;
  }
  return <Badge variant="warning" className="gap-1.5" title={err}><Clock className="h-3.5 w-3.5" /> SKIP: {err}</Badge>;
}

export default function ExecutionLogs() {
  const [search, setSearch] = useState('');

  const filteredLogs = useMemo(() => LOGS.filter((row) => {
    const q = search.toLowerCase();
    return `${row.id} ${row.rule} ${row.target} ${row.status} ${row.err || ''}`.toLowerCase().includes(q);
  }), [search]);

  return (
    <div className="flex w-full flex-col gap-6 pb-10">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-primary">
            <Terminal className="h-6 w-6 text-accent" />
            Execution Logs
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">Audit trail of all automated actions triggered by the engine.</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" /> Export Logs
        </Button>
      </div>

      <Card className="overflow-hidden">
        <CardHeader className="flex-col gap-4 border-b border-border bg-surface md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle>System Output Logs</CardTitle>
            <p className="mt-1 text-xs text-muted-foreground">Track automation success, failed executions, skipped rules, and duration.</p>
          </div>
          <div className="flex w-full gap-2 md:w-auto">
            <div className="relative flex-1 md:w-72">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search logs, targets, rules..."
                className="pl-9 font-mono"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Button variant="outline" size="sm" className="h-10 gap-2">
              <Filter className="h-4 w-4" />
              <span className="hidden sm:inline">Module Filter</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[920px] text-left text-sm">
              <thead className="border-b border-border bg-muted/70 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-6 py-4">Log ID</th>
                  <th className="px-6 py-4">Timestamp</th>
                  <th className="px-6 py-4">Rule Executed</th>
                  <th className="px-6 py-4">Target Entity</th>
                  <th className="px-6 py-4">Status / Output</th>
                  <th className="px-6 py-4 text-right">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-surface font-mono text-[13px]">
                {filteredLogs.map((row) => (
                  <tr key={row.id} className="transition-colors hover:bg-muted/40">
                    <td className="px-6 py-4 font-semibold text-primary">{row.id}</td>
                    <td className="px-6 py-4 text-accent">{row.time}</td>
                    <td className="px-6 py-4 font-bold text-primary">{row.rule}</td>
                    <td className="px-6 py-4 text-muted-foreground">{row.target}</td>
                    <td className="px-6 py-4">{statusBadge(row.status, row.err)}</td>
                    <td className="px-6 py-4 text-right text-muted-foreground">{row.duration}</td>
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
