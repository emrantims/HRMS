import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Wallet, CheckCircle2, History } from 'lucide-react';

const ACTIVE_LOANS = [
  { id: 'LN-2024-001', type: 'Personal Loan', originalAmount: 20000, remainingAmount: 5000, installment: 2000 },
  { id: 'LN-2024-034', type: 'Advance Salary', originalAmount: 3000, remainingAmount: 1500, installment: 1500 },
];

export default function LoanClearance() {
  const { id } = useParams();

  const totalRemaining = ACTIVE_LOANS.reduce((sum, loan) => sum + loan.remainingAmount, 0);

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6 w-full pb-10">
      <div className="flex items-center gap-4">
        <Link to={`/exit/timeline/${id}`}>
           <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full">
             <ArrowRight className="w-4 h-4 rotate-180" />
           </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-primary">Loan & Advance Clearance</h1>
          <p className="text-sm text-primary/60 mt-1">Verify outstandings to be deducted in Final Settlement.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader className="border-b border-primary/5 pb-4">
              <CardTitle className="text-lg">Active Loans & Advances</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
               <table className="w-full text-sm text-left">
                 <thead className="bg-primary/5 text-primary/60 text-xs uppercase">
                   <tr>
                     <th className="px-4 py-3 font-medium">Loan Reference</th>
                     <th className="px-4 py-3 font-medium text-right">Remaining Balance</th>
                     <th className="px-4 py-3 font-medium text-center">Status</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-primary/5">
                   {ACTIVE_LOANS.map(loan => (
                     <tr key={loan.id}>
                       <td className="px-4 py-3">
                         <div className="font-bold text-primary">{loan.type}</div>
                         <div className="text-xs text-primary/60 font-mono mt-0.5">{loan.id}</div>
                       </td>
                       <td className="px-4 py-3 text-right font-mono font-bold text-danger">
                         AED {loan.remainingAmount.toLocaleString()}
                       </td>
                       <td className="px-4 py-3 text-center">
                         <span className="text-[10px] font-bold uppercase tracking-wider text-danger bg-danger/10 px-2 py-1 rounded">
                           Pending Deduction
                         </span>
                       </td>
                     </tr>
                   ))}
                   {ACTIVE_LOANS.length === 0 && (
                     <tr><td colSpan={3} className="px-4 py-8 text-center text-primary/40">No active loans found.</td></tr>
                   )}
                 </tbody>
               </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="border-b border-primary/5 pb-4">
               <CardTitle className="text-lg">Previous Recoveries</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
               <div className="flex items-center gap-3 text-sm text-primary/60">
                 <History className="w-4 h-4"/>
                 No out-of-cycle recoveries recorded for this employee recently.
               </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="sticky top-6">
            <CardHeader className="bg-primary/5 border-b border-primary/10">
               <CardTitle className="text-lg">Recovery Summary</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
               <div className="text-center p-4 border border-danger/20 rounded-lg bg-danger/5">
                 <div className="text-sm font-medium text-danger/80 mb-1">Total Outstanding</div>
                 <div className="text-3xl font-mono font-bold text-danger">AED {totalRemaining.toLocaleString()}</div>
               </div>

               <div className="bg-primary/5 p-4 rounded-lg text-sm text-primary/80 leading-relaxed border border-primary/10">
                 By marking this as verified, AED {totalRemaining.toLocaleString()} will be automatically injected into the Final Settlement calculations as an un-editable deduction.
               </div>

               <Button variant="accent" className="w-full font-bold gap-2">
                 <CheckCircle2 className="w-4 h-4"/> Verify & Send to Settlement
               </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
