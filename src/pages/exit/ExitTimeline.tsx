import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Link, useParams } from 'react-router-dom';
import {
  FileText,
  CheckCircle2,
  Clock,
  User,
  MonitorSmartphone,
  Wallet,
  ShieldCheck,
  Calculator,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

const WORKFLOW_STEPS = [
  { id: 1, title: 'Exit Request Created', desc: 'Initiated by HR on Sep 14, 2024', status: 'completed', icon: FileText, role: 'HR Admin' },
  { id: 2, title: 'Manager Review', desc: 'Approved by Reporting Manager', status: 'completed', icon: User, role: 'Line Manager' },
  { id: 3, title: 'Asset Clearance', desc: 'Laptop & ID pending return', status: 'in-progress', icon: MonitorSmartphone, role: 'IT Dept', link: '/exit/assets/EXT-123' },
  { id: 4, title: 'Loan & Advance Verification', desc: 'No active loans found', status: 'completed', icon: Wallet, role: 'Finance', link: '/exit/loans/EXT-123' },
  { id: 5, title: 'Visa Cancellation', desc: 'Pending typing phase', status: 'pending', icon: ShieldCheck, role: 'PRO', link: '/exit/visa/EXT-123' },
  { id: 6, title: 'Final Settlement Calculation', desc: 'Waiting for clearances', status: 'locked', icon: Calculator, role: 'Payroll Admin', link: '/exit/settlement/EXT-123' },
  { id: 7, title: 'Final Approvals', desc: 'Requires HR & Finance approval', status: 'locked', icon: CheckCircle2, role: 'Management', link: '/exit/approval/EXT-123' },
];

export default function ExitTimeline() {
  const { id } = useParams();

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full pb-10 h-full">
      {/* Sidebar Info */}
      <div className="w-full md:w-80 flex-shrink-0 flex flex-col gap-6">
        <Link to="/exit">
           <Button variant="outline" size="sm" className="w-full justify-start gap-2 h-10">
             <ArrowRight className="w-4 h-4 rotate-180" />
             Back to Dashboard
           </Button>
        </Link>
        <Card>
          <CardHeader className="bg-primary/5 pb-4">
            <CardTitle className="text-lg">Employee Details</CardTitle>
            <CardDescription>Case ID: {id}</CardDescription>
          </CardHeader>
          <CardContent className="pt-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                SR
              </div>
              <div>
                <h3 className="font-bold text-primary">Sarah Jenkins</h3>
                <p className="text-xs text-primary/60 font-mono">EMP-045</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-1 border-b border-primary/5">
                <span className="text-primary/60">Department</span>
                <span className="font-medium">Sales</span>
              </div>
              <div className="flex justify-between py-1 border-b border-primary/5">
                <span className="text-primary/60">Designation</span>
                <span className="font-medium">Account Executive</span>
              </div>
              <div className="flex justify-between py-1 border-b border-primary/5">
                <span className="text-primary/60">Type</span>
                <span className="font-medium text-warning-foreground">Resignation</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-primary/60">LWD</span>
                <span className="font-medium text-primary">Oct 14, 2024</span>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-primary/10">
               <Link to={`/exit/summary/${id}`}>
                 <Button variant="outline" className="w-full border-primary/20 hover:bg-primary hover:text-white transition-colors">
                   View Summary / PDF
                 </Button>
               </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Timeline */}
      <div className="flex-1">
        <Card className="h-full border-t-4 border-t-accent">
          <CardHeader>
            <CardTitle className="text-xl">Exit Workflow Progress</CardTitle>
            <CardDescription>Complete all steps to finalize exit and release payment.</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="relative border-l-2 border-primary/10 ml-6 space-y-10 pb-8">
              {WORKFLOW_STEPS.map((step, idx) => (
                <div key={step.id} className="relative pl-10 pr-4">
                  {/* Timeline Node */}
                  <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center shadow-sm
                    ${step.status === 'completed' ? 'bg-success' : ''}
                    ${step.status === 'in-progress' ? 'bg-warning animate-pulse' : ''}
                    ${step.status === 'pending' ? 'bg-primary/20' : ''}
                    ${step.status === 'locked' ? 'bg-primary/10' : ''}
                  `}>
                    {step.status === 'completed' ? (
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    ) : step.status === 'in-progress' ? (
                      <Clock className="w-4 h-4 text-white" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-white opacity-50" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={`p-4 rounded-xl border transition-all ${
                    step.status === 'in-progress' ? 'bg-white border-warning/30 shadow-md ring-1 ring-warning/20' : 
                    step.status === 'completed' ? 'bg-success/5 border-success/20 opacity-80' : 
                    step.status === 'locked' ? 'bg-primary/5 border-dashed border-primary/20 opacity-60' :
                    'bg-white border-primary/10'
                  }`}>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                         <div className={`p-2 rounded-lg ${step.status === 'completed' ? 'bg-success/10 text-success' : 'bg-primary/5 text-primary/60'}`}>
                           <step.icon className="w-5 h-5" />
                         </div>
                         <div>
                           <h4 className="font-bold text-primary flex items-center gap-2">
                             {step.title}
                             {step.status === 'locked' && <AlertCircle className="w-3.5 h-3.5 text-primary/40" />}
                           </h4>
                           <p className="text-sm text-primary/60 mt-0.5 max-w-md">{step.desc}</p>
                         </div>
                      </div>
                      
                      <div className="flex flex-col items-end justify-between self-stretch">
                         <span className="text-[10px] font-bold uppercase tracking-wider text-primary/40 bg-white px-2 py-1 rounded border">
                           {step.role}
                         </span>
                         
                         {step.link && step.status !== 'locked' && (
                           <Link to={step.link}>
                             <Button size="sm" variant={step.status === 'in-progress' ? 'accent' : 'outline'} className="h-8 mt-4 text-xs font-semibold">
                               {step.status === 'in-progress' ? 'Action Required' : 'View'}
                             </Button>
                           </Link>
                         )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
