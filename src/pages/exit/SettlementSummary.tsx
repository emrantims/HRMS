import React from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Printer, Download, Mail, Building, FileCheck } from 'lucide-react';

export default function SettlementSummary() {
  const { id } = useParams();

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6 w-full pb-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to={`/exit/timeline/${id}`}>
             <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full">
               <ArrowRight className="w-4 h-4 rotate-180" />
             </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-primary">Final Settlement Statement</h1>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2"><Printer className="w-4 h-4"/> Print</Button>
          <Button variant="outline" size="sm" className="gap-2"><Download className="w-4 h-4"/> PDF</Button>
          <Button variant="accent" size="sm" className="gap-2"><Mail className="w-4 h-4"/> Email Employee</Button>
        </div>
      </div>

      <Card className="bg-white" id="printable-statement">
        <CardContent className="p-8 sm:p-12">
           {/* Document Header */}
           <div className="flex justify-between items-start border-b-2 border-primary pb-8 mb-8">
             <div className="flex items-center gap-3 text-primary">
               <Building className="w-10 h-10" />
               <div>
                 <h2 className="text-xl font-bold tracking-tight">EMIRATES MULTI-CORP</h2>
                 <p className="text-xs font-mono text-primary/60 tracking-widest mt-1">HUMAN RESOURCES DEPT</p>
               </div>
             </div>
             <div className="text-right text-sm">
               <p className="font-bold text-primary mb-1">FINAL SETTLEMENT / EOSB</p>
               <p className="text-primary/60 font-mono">Doc Ref: FS-{id}-2024</p>
               <p className="text-primary/60 font-mono">Date: Oct 14, 2024</p>
             </div>
           </div>

           {/* Employee Info */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-primary/5 p-4 rounded-lg text-sm mb-8 border border-primary/10">
             <div><span className="block text-primary/50 text-xs">Employee Name</span><span className="font-bold">Sarah Jenkins</span></div>
             <div><span className="block text-primary/50 text-xs">Employee ID</span><span className="font-bold">EMP-045</span></div>
             <div><span className="block text-primary/50 text-xs">Designation</span><span className="font-bold">Account Executive</span></div>
             <div><span className="block text-primary/50 text-xs">Department</span><span className="font-bold">Sales</span></div>
             <div><span className="block text-primary/50 text-xs">Joining Date</span><span className="font-bold">Aug 01, 2022</span></div>
             <div><span className="block text-primary/50 text-xs">Last Working Day</span><span className="font-bold">Oct 14, 2024</span></div>
             <div><span className="block text-primary/50 text-xs">Exit Type</span><span className="font-bold text-warning-foreground">Resignation</span></div>
             <div><span className="block text-primary/50 text-xs">Status</span><span className="font-bold text-success flex items-center gap-1"><FileCheck className="w-3.5 h-3.5"/> Approved</span></div>
           </div>

           {/* Financials Table */}
           <div className="mb-8">
             <table className="w-full text-sm text-left">
               <thead className="border-b-2 border-primary/20 text-primary">
                 <tr>
                   <th className="py-2 font-bold uppercase tracking-wider text-xs">Description</th>
                   <th className="py-2 font-bold uppercase tracking-wider text-xs text-right">Amount (AED)</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-primary/10 text-primary/80">
                 <tr>
                   <td className="py-2 px-2 text-xs font-bold uppercase tracking-widest mt-4 bg-primary/5" colSpan={2}>Earnings</td>
                 </tr>
                 <tr>
                   <td className="py-3 px-2">Pending Salary (Oct 1 - Oct 14)</td>
                   <td className="py-3 text-right font-mono">5,419.35</td>
                 </tr>
                 <tr>
                   <td className="py-3 px-2">Leave Encashment (12 days)</td>
                   <td className="py-3 text-right font-mono">3,200.00</td>
                 </tr>
                 <tr>
                   <td className="py-3 px-2">End of Service Gratuity (2.5 Years)</td>
                   <td className="py-3 text-right font-mono font-bold">15,880.65</td>
                 </tr>
                 <tr className="bg-success/5 font-bold text-success-700">
                   <td className="py-3 px-2 text-right text-xs">TOTAL EARNINGS</td>
                   <td className="py-3 text-right font-mono">24,500.00</td>
                 </tr>
                 
                 <tr>
                   <td className="py-2 px-2 text-xs font-bold uppercase tracking-widest mt-4 bg-primary/5" colSpan={2}>Deductions</td>
                 </tr>
                 <tr>
                   <td className="py-3 px-2">Notice Period Shortfall (10 days)</td>
                   <td className="py-3 text-right font-mono text-danger">-4,000.00</td>
                 </tr>
                 <tr>
                   <td className="py-3 px-2">Asset Loss / Damages</td>
                   <td className="py-3 text-right font-mono text-danger">-250.00</td>
                 </tr>
                 <tr className="bg-danger/5 font-bold text-danger-700">
                   <td className="py-3 px-2 text-right text-xs">TOTAL DEDUCTIONS</td>
                   <td className="py-3 text-right font-mono">-4,250.00</td>
                 </tr>
               </tbody>
               <tfoot className="border-t-2 border-primary">
                 <tr className="text-xl">
                   <td className="py-6 px-2 font-bold text-primary">NET PAYABLE AMOUNT:</td>
                   <td className="py-6 text-right font-mono font-bold text-primary underline underline-offset-4 decoration-4">AED 20,250.00</td>
                 </tr>
               </tfoot>
             </table>
           </div>

           {/* Signatures */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-primary/20 mt-16">
             <div className="text-center">
                <div className="border-b border-primary/30 h-10 mb-2"></div>
                <p className="text-xs font-bold text-primary">Line Manager</p>
             </div>
             <div className="text-center">
                <div className="border-b border-primary/30 h-10 mb-2 font-signature text-xl text-primary/80">Approved via System</div>
                <p className="text-xs font-bold text-primary">HR Dept</p>
             </div>
             <div className="text-center">
                <div className="border-b border-primary/30 h-10 mb-2 font-signature text-xl text-primary/80">Approved via System</div>
                <p className="text-xs font-bold text-primary">Finance Dept</p>
             </div>
             <div className="text-center">
                <div className="border-b border-primary/30 h-10 mb-2"></div>
                <p className="text-xs font-bold text-primary">Employee Signature</p>
             </div>
           </div>
           <p className="text-center text-[10px] text-primary/40 mt-8 italic">
             Declaration: I hereby confirm that I have received all my dues and have no further claims against the company.
           </p>

        </CardContent>
      </Card>

      <div className="flex justify-end gap-4">
         <Link to={`/exit/certificate/${id}`}>
           <Button variant="outline">Generate Experience Letter</Button>
         </Link>
         <Button variant="accent">Close Workflow</Button>
      </div>
    </div>
  );
}
