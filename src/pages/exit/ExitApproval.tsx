import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, User, Wallet, XCircle, AlertTriangle, FileText } from 'lucide-react';

export default function ExitApproval() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notes, setNotes] = useState('');

  const APPROVERS = [
    { role: 'Line Manager', user: 'David Kim', status: 'approved', date: 'Oct 10, 2024', comment: 'All duties handed over successfully.' },
    { role: 'HR Manager', user: 'Fatima Al Mansouri', status: 'approved', date: 'Oct 11, 2024', comment: 'Clearances completed and docs verified.' },
    { role: 'Payroll Controller', user: 'Pending', status: 'pending', date: '-', comment: '-' },
    { role: 'Group CFO (For > AED 20K)', user: 'Pending', status: 'pending', date: '-', comment: '-' },
  ];

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6 w-full pb-10">
      <div className="flex items-center gap-4">
        <Link to={`/exit/timeline/${id}`}>
           <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full">
             <ArrowRight className="w-4 h-4 rotate-180" />
           </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-primary">Settlement Approvals</h1>
          <p className="text-sm text-primary/60 mt-1">Review finalized calculations and authorize payment.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
           <Card>
             <CardHeader className="bg-primary/5 border-b border-primary/10">
                <CardTitle className="text-lg">Settlement Snapshot</CardTitle>
             </CardHeader>
             <CardContent className="p-0">
               <div className="p-4 border-b border-primary/10">
                  <p className="text-xs text-primary/60 uppercase tracking-widest font-bold mb-1">Total Entitlements</p>
                  <p className="font-mono text-xl text-success font-bold">AED 24,500.00</p>
               </div>
               <div className="p-4 border-b border-primary/10">
                  <p className="text-xs text-primary/60 uppercase tracking-widest font-bold mb-1">Total Deductions</p>
                  <p className="font-mono text-xl text-danger font-bold">AED 3,250.00</p>
               </div>
               <div className="p-6 bg-primary text-white">
                  <p className="text-sm text-white/60 mb-1">Net Disbursement</p>
                  <p className="font-mono text-4xl font-bold">AED 21,250.00</p>
               </div>
             </CardContent>
           </Card>
           
           <Button variant="outline" className="w-full gap-2">
              <FileText className="w-4 h-4" /> View Detailed Summary PDF
           </Button>
        </div>

        <div className="space-y-6">
           <Card>
             <CardHeader>
                <CardTitle className="text-lg">Approval Audit Trail</CardTitle>
             </CardHeader>
             <CardContent className="space-y-4">
               {APPROVERS.map((app, idx) => (
                 <div key={idx} className="flex gap-4">
                    <div className="relative">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 relative
                        ${app.status === 'approved' ? 'bg-success/20 text-success' : 'bg-primary/10 text-primary/30'}
                      `}>
                        {app.status === 'approved' ? <CheckCircle2 className="w-5 h-5"/> : <div className="w-2 h-2 rounded-full bg-primary/30"/>}
                      </div>
                      {idx !== APPROVERS.length - 1 && <div className="absolute top-8 bottom-[-16px] left-[15px] w-0.5 bg-primary/10 z-0"/>}
                    </div>
                    <div className="pb-4 flex-1">
                       <p className="font-bold text-sm text-primary">{app.role}</p>
                       <p className="text-xs text-primary/60 mt-0.5">{app.user} • {app.date}</p>
                       {app.comment !== '-' && (
                         <div className="text-xs text-primary/80 bg-primary/5 p-2 rounded mt-2 border border-primary/10">
                           "{app.comment}"
                         </div>
                       )}
                    </div>
                 </div>
               ))}
             </CardContent>
           </Card>

           <Card className="border-accent ring-1 ring-accent/20 shadow-md">
             <CardHeader className="bg-accent/5">
                <CardTitle className="text-lg text-accent-foreground">Your Action Require</CardTitle>
             </CardHeader>
             <CardContent className="pt-4 space-y-4">
                <div>
                  <label className="text-sm font-medium text-primary block mb-2">Approval Notes</label>
                  <textarea 
                    className="w-full border border-primary/20 rounded-lg p-3 text-sm focus:ring-2 focus:ring-accent/50 outline-none" 
                    rows={3} 
                    placeholder="Add final clearance remarks..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
                <div className="flex gap-3">
                   <Button variant="outline" className="flex-1 text-danger border-danger/30 hover:bg-danger hover:text-white" onClick={() => navigate(`/exit/timeline/${id}`)}>
                     <XCircle className="w-4 h-4 mr-2"/> Reject
                   </Button>
                   <Button variant="accent" className="flex-1" onClick={() => navigate(`/exit/summary/${id}`)}>
                     <CheckCircle2 className="w-4 h-4 mr-2"/> Approve Final
                   </Button>
                </div>
             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
