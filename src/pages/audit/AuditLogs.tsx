import React from "react";
import { ShieldCheck, Search, Filter, AlertCircle } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Card } from "../../components/ui/Card";

const mockLogs = [
  { id: "LOG-9281", action: "Visa Cancellation Triggered", user: "Sarah Connor", module: "Visa & Compliance", time: "14:32:01 - Today", risk: "Medium" },
  { id: "LOG-9280", action: "Payroll Execution (Oct 2024)", user: "Tariq Mahmood", module: "Payroll", time: "11:15:30 - Today", risk: "High" },
  { id: "LOG-9279", action: "Asset Assigned: AST-LPT-042", user: "IT Admin", module: "Assets", time: "09:01:12 - Today", risk: "Low" },
];

export default function AuditLogs() {
  return (
    <div className="flex flex-col h-full gap-6 w-full pb-10">
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">System Audit & Compliance</h1>
          <p className="text-primary/60 text-sm mt-1">Immutable tracking of all critical system actions for regulatory compliance</p>
        </div>
        <Button variant="outline" className="gap-2 bg-surface text-primary">
          Export Logs
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 shrink-0">
        <Card className="p-4 bg-surface flex flex-col justify-center border-l-4 border-l-accent border-primary/10">
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">Total Logs (Today)</p>
          <p className="text-2xl font-bold text-primary mt-1">1,204</p>
        </Card>
        <Card className="p-4 bg-surface flex flex-col justify-center border-l-4 border-l-warning border-primary/10">
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">Medium Risk Events</p>
          <p className="text-2xl font-bold text-primary mt-1">18</p>
        </Card>
        <Card className="p-4 bg-surface flex flex-col justify-center border-l-4 border-l-destructive border-primary/10">
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">Critical Alerts</p>
          <p className="text-2xl font-bold text-primary mt-1">2</p>
        </Card>
      </div>

      <Card className="flex-1 overflow-hidden flex flex-col bg-surface shadow-sm border-primary/10">
        <div className="p-4 flex gap-4 border-b border-primary/10">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-primary/40" />
            <Input placeholder="Search logs by action, user, or module..." className="pl-9 bg-background/50" />
          </div>
          <Button variant="outline" size="icon"><Filter className="w-4 h-4" /></Button>
        </div>
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-background sticky top-0 shadow-sm border-b border-primary/10 font-bold text-primary/50 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="px-6 py-4">Event ID</th>
                <th className="px-6 py-4">Action Details</th>
                <th className="px-6 py-4">Module</th>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Timestamp</th>
                <th className="px-6 py-4 text-right">Risk Level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5 text-sm font-mono">
              {mockLogs.map(log => (
                <tr key={log.id} className="hover:bg-primary/5 transition-colors">
                  <td className="px-6 py-4 text-primary/40">{log.id}</td>
                  <td className="px-6 py-4 font-sans font-bold text-primary">{log.action}</td>
                  <td className="px-6 py-4 font-sans text-xs text-primary/60">{log.module}</td>
                  <td className="px-6 py-4 font-sans text-xs text-primary/60">{log.user}</td>
                  <td className="px-6 py-4 text-xs text-primary/50">{log.time}</td>
                  <td className="px-6 py-4 text-right font-sans">
                    <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded ${
                      log.risk === 'High' ? 'bg-destructive/10 text-destructive' :
                      log.risk === 'Medium' ? 'bg-warning/10 text-warning' : 'bg-success/10 text-success'
                    }`}>
                      {log.risk}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
