import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Search, Filter, Plus, FileEdit, Eye, Power, PowerOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const RULES = [
  { id: 'WF-101', name: 'Visa Expiry Warning (30 Days)', module: 'Visa', trigger: 'Date Threshold', action: 'Send Email & Alert', status: 'active', creator: 'System Admin', lastRun: '10 mins ago' },
  { id: 'WF-102', name: 'Attendance Policy - 3 Lates', module: 'Attendance', trigger: 'Count > 2', action: 'Deduction & Warning', status: 'active', creator: 'HR Manager', lastRun: '2 hours ago' },
  { id: 'WF-103', name: 'Asset Return Sync', module: 'Exit', trigger: 'Status = Missing', action: 'Add to Settlement', status: 'active', creator: 'System Admin', lastRun: '1 day ago' },
  { id: 'WF-104', name: 'Loan Approval Escalation', module: 'Loans', trigger: 'Pending > 3 days', action: 'Escalate to CFO', status: 'paused', creator: 'Finance Head', lastRun: '-' },
  { id: 'WF-105', name: 'Probation End Notification', module: 'Employee', trigger: 'Date Threshold', action: 'Create Task', status: 'active', creator: 'HR Manager', lastRun: '4 hours ago' },
];

export default function RulesList() {
  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary">Automation Rules</h1>
          <p className="text-sm text-primary/60 mt-1">Manage all system triggers and automated workflows.</p>
        </div>
        <Link to="/automation/rules/new">
          <Button variant="accent" className="gap-2 bg-accent shadow-md">
            <Plus className="w-4 h-4" /> Create New Rule
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-primary/5 pb-4">
           <CardTitle className="text-lg">All Workflows</CardTitle>
           <div className="flex gap-2 w-full md:w-auto">
             <div className="relative flex-1 md:w-64">
               <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-primary/40" />
               <input 
                 type="text" 
                 placeholder="Search by rule name, module..." 
                 className="w-full pl-9 pr-3 py-2 text-sm border border-primary/20 rounded-md focus:ring-2 focus:ring-accent/50 outline-none"
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
               />
             </div>
             <Button variant="outline" size="sm" className="h-9 px-3 gap-2">
               <Filter className="w-4 h-4" />
               <span className="hidden sm:inline">Filters</span>
             </Button>
           </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-primary/5 text-primary/60 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-medium">Rule Name</th>
                  <th className="px-6 py-4 font-medium">Module</th>
                  <th className="px-6 py-4 font-medium">Trigger Event</th>
                  <th className="px-6 py-4 font-medium">Action Type</th>
                  <th className="px-6 py-4 font-medium text-center">Status</th>
                  <th className="px-6 py-4 font-medium">Last Triggered</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5">
                {RULES.filter(r => r.name.toLowerCase().includes(search.toLowerCase()) || r.module.toLowerCase().includes(search.toLowerCase())).map(row => (
                  <tr key={row.id} className="hover:bg-primary/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-bold text-primary">{row.name}</div>
                      <div className="text-[10px] font-mono text-primary/50 mt-0.5">{row.id} • By {row.creator}</div>
                    </td>
                    <td className="px-6 py-4">
                       <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
                         {row.module}
                       </span>
                    </td>
                    <td className="px-6 py-4 text-primary/70">{row.trigger}</td>
                    <td className="px-6 py-4 text-primary/70">{row.action}</td>
                    <td className="px-6 py-4 text-center">
                       {row.status === 'active' ? (
                         <span className="inline-flex items-center gap-1 text-success text-xs font-bold bg-success/10 px-2 py-1 rounded">
                           <Power className="w-3 h-3" /> Active
                         </span>
                       ) : (
                         <span className="inline-flex items-center gap-1 text-primary/50 text-xs font-bold bg-primary/10 px-2 py-1 rounded">
                           <PowerOff className="w-3 h-3" /> Paused
                         </span>
                       )}
                    </td>
                    <td className="px-6 py-4 text-primary/60 font-medium text-xs">{row.lastRun}</td>
                    <td className="px-6 py-4 text-right">
                       <div className="flex items-center justify-end gap-2">
                          <Link to={`/automation/workflow/${row.id}`}>
                            <Button variant="outline" size="sm" className="h-8 w-8 p-0" title="View Builder">
                               <Eye className="w-4 h-4 text-primary/60" />
                            </Button>
                          </Link>
                          <Button variant="outline" size="sm" className="h-8 w-8 p-0" title="Edit Properties">
                             <FileEdit className="w-4 h-4 text-primary/60" />
                          </Button>
                       </div>
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
