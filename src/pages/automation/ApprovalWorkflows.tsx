import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Settings, ShieldCheck, Mail, ArrowRight, UserPlus, FileEdit, UserCircle, GripVertical } from 'lucide-react';
import { Link } from 'react-router-dom';

const APPROVALS = [
  { id: 'APP-1', name: 'Exit Settlement Approval (> 10k)', module: 'Exit', steps: 3, status: 'Active' },
  { id: 'APP-2', name: 'Loan Request Approval', module: 'Loans', steps: 2, status: 'Active' },
  { id: 'APP-3', name: 'Leave Request (Unpaid)', module: 'Attendance', steps: 2, status: 'Paused' },
];

export default function ApprovalWorkflows() {
  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      <div className="flex items-center gap-4">
        <Link to="/automation">
           <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full">
             <ArrowRight className="w-4 h-4 rotate-180" />
           </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
             <ShieldCheck className="w-6 h-6 text-accent" />
             Approval Chains
          </h1>
          <p className="text-sm text-primary/60 mt-1">Configure multi-level approval hierarchies for critical actions.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-4">
           {APPROVALS.map(app => (
              <Card key={app.id} className="cursor-pointer hover:border-accent hover:shadow-md transition-all">
                <CardContent className="p-4 flex items-center justify-between">
                   <div>
                      <h3 className="font-bold text-primary text-sm">{app.name}</h3>
                      <p className="text-xs text-primary/60 mt-1">{app.module} • {app.steps} Levels</p>
                   </div>
                   <div className="text-[10px] font-bold uppercase py-1 px-2 rounded bg-success/10 text-success">{app.status}</div>
                </CardContent>
              </Card>
           ))}
           <Button variant="outline" className="w-full border-dashed">
              + Create New Chain
           </Button>
        </div>

        <div className="lg:col-span-2">
           <Card className="h-full">
             <CardHeader className="bg-primary/5 border-b border-primary/10 flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Exit Settlement Approval (&gt; 10k)</CardTitle>
                  <CardDescription>Triggers when final settlement exceeds AED 10,000</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="gap-2"><Settings className="w-4 h-4"/> Settings</Button>
             </CardHeader>
             <CardContent className="pt-8">
                
                <div className="max-w-md mx-auto space-y-6">
                   {/* Level 1 */}
                   <div className="border border-primary/20 rounded-xl p-4 bg-white flex items-center gap-4 shadow-sm relative group">
                      <div className="absolute -left-3 top-1/2 -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100"><GripVertical className="w-4 h-4 text-primary/40" /></div>
                      <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold">1</div>
                      <div className="flex-1">
                         <p className="text-xs font-bold uppercase text-primary/50 tracking-wider">Level 1 Approver</p>
                         <p className="font-bold text-sm text-primary flex items-center gap-2"><UserCircle className="w-4 h-4 text-primary/40"/> Direct Manager</p>
                      </div>
                      <Button variant="outline" size="sm" className="h-8"><FileEdit className="w-3.5 h-3.5"/></Button>
                   </div>
                   
                   <div className="h-6 w-0.5 bg-primary/20 mx-auto"></div>

                   {/* Level 2 */}
                   <div className="border border-primary/20 rounded-xl p-4 bg-white flex items-center gap-4 shadow-sm relative group">
                      <div className="absolute -left-3 top-1/2 -translate-y-1/2 cursor-grab opacity-0 group-hover:opacity-100"><GripVertical className="w-4 h-4 text-primary/40" /></div>
                      <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold">2</div>
                      <div className="flex-1">
                         <p className="text-xs font-bold uppercase text-primary/50 tracking-wider">Level 2 Approver</p>
                         <p className="font-bold text-sm text-primary flex items-center gap-2"><UserCircle className="w-4 h-4 text-primary/40"/> HR Director</p>
                      </div>
                      <Button variant="outline" size="sm" className="h-8"><FileEdit className="w-3.5 h-3.5"/></Button>
                   </div>

                   <div className="h-6 w-0.5 bg-primary/20 mx-auto flex items-center justify-center">
                     <span className="text-[9px] bg-white text-primary/50 font-bold px-1 py-0.5 border rounded">THEN</span>
                   </div>

                   {/* Level 3 */}
                   <div className="border border-accent rounded-xl p-4 bg-accent/5 flex items-center gap-4 shadow-md relative group ring-2 ring-accent/10">
                      <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold shadow-inner">3</div>
                      <div className="flex-1">
                         <p className="text-xs font-bold uppercase text-accent/80 tracking-wider">Final Approver</p>
                         <p className="font-bold text-sm text-primary flex items-center gap-2"><UserCircle className="w-4 h-4 text-primary/40"/> Finance Controller</p>
                      </div>
                      <Button variant="outline" size="sm" className="h-8"><FileEdit className="w-3.5 h-3.5"/></Button>
                   </div>

                   <div className="text-center pt-8 border-t border-primary/10">
                      <Button variant="outline" className="gap-2 border-dashed">
                        <UserPlus className="w-4 h-4" /> Add Next Level
                      </Button>
                   </div>
                </div>

             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
