import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Calculator, Plus, Minus, FileText, CheckCircle2 } from 'lucide-react';

export default function FinalSettlement() {
  const { id } = useParams();

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-6 w-full pb-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to={`/exit/timeline/${id}`}>
             <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full">
               <ArrowRight className="w-4 h-4 rotate-180" />
             </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-primary">Final Settlement Calculation</h1>
            <p className="text-sm text-primary/60 mt-1">Calculate earnings, end of service, and deductions.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 border-primary/20"><FileText className="w-4 h-4"/> Saved Draft</Button>
          <Link to={`/exit/approval/${id}`}>
            <Button variant="accent" className="gap-2 shadow-lg">Submit for Approval <ArrowRight className="w-4 h-4"/></Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* EARNINGS */}
        <Card className="lg:col-span-2 shadow-sm border-t-4 border-t-success">
          <CardHeader className="border-b border-primary/5 pb-4 bg-success/5">
            <CardTitle className="flex items-center justify-between text-success-800">
              <span className="flex items-center gap-2"><Plus className="w-5 h-5"/> Earnings & Entitlements</span>
              <span className="font-bold text-2xl">AED 24,500.00</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
             {/* Salary */}
             <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase tracking-wider text-primary/50">Pending Salary & Leaves</h4>
                <div className="grid grid-cols-3 gap-4 border-b border-primary/5 pb-4">
                  <div className="col-span-2">
                    <p className="font-medium text-primary">Unpaid Salary (Oct 1 - Oct 14)</p>
                    <p className="text-xs text-primary/60">Based on Basic: 8,000 | Allowances: 4,000</p>
                  </div>
                  <div className="text-right">
                    <input type="text" className="w-full md:w-32 text-right p-2 border rounded bg-primary/5 font-mono text-sm font-semibold" defaultValue="5,419.35" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-primary/5 pb-4">
                  <div className="col-span-2">
                    <p className="font-medium text-primary">Leave Encashment</p>
                    <p className="text-xs text-primary/60">12 accrued days (Basic Salary calculation)</p>
                  </div>
                  <div className="text-right">
                    <input type="text" className="w-full md:w-32 text-right p-2 border rounded bg-primary/5 font-mono text-sm font-semibold" defaultValue="3,200.00" />
                  </div>
                </div>
             </div>

             {/* EOSB */}
             <div className="space-y-4 pt-2">
                <h4 className="font-bold text-sm uppercase tracking-wider text-primary/50 flex justify-between">
                  <span>End of Service Benefits (Gratuity)</span>
                  <span className="text-xs text-accent cursor-pointer hover:underline">View Formula</span>
                </h4>
                <div className="bg-primary/5 p-4 rounded-lg flex items-start gap-4">
                  <Calculator className="w-5 h-5 text-primary/40 mt-1" />
                  <div className="flex-1">
                    <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                      <div><span className="text-primary/60 block text-xs">Tenure</span><span className="font-bold">2.5 Years</span></div>
                      <div><span className="text-primary/60 block text-xs">Exit Type</span><span className="font-bold">Resignation</span></div>
                    </div>
                    <div className="flex justify-between items-center border-t border-primary/10 pt-3">
                       <span className="font-medium">Calculated Gratuity Amount</span>
                       <span className="font-mono font-bold text-lg text-primary">AED 15,880.65</span>
                    </div>
                  </div>
                </div>
             </div>
          </CardContent>
        </Card>

        {/* DEDUCTIONS */}
        <Card className="shadow-sm border-t-4 border-t-danger">
          <CardHeader className="border-b border-primary/5 pb-4 bg-danger/5">
            <CardTitle className="flex items-center justify-between text-danger-800">
              <span className="flex items-center gap-2"><Minus className="w-5 h-5"/> Deductions</span>
              <span className="font-bold text-2xl">AED 3,250.00</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
             <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-danger/10 pb-3">
                  <div>
                    <p className="font-medium text-sm">Notice Period Shortfall</p>
                    <p className="text-[11px] text-primary/60 mt-1">10 days unserved</p>
                  </div>
                  <input type="text" className="w-24 text-right p-1.5 border border-danger/30 rounded text-danger font-mono text-sm" defaultValue="-4,000.00" />
                </div>
                
                <div className="flex justify-between items-start border-b border-danger/10 pb-3">
                  <div>
                    <p className="font-medium text-sm flex items-center gap-1">Loan Recovery <CheckCircle2 className="w-3 h-3 text-success"/></p>
                    <p className="text-[11px] text-primary/60 mt-1">Auto-fetched from Loans block</p>
                  </div>
                  <span className="font-mono text-sm text-primary/50 py-1.5">0.00</span>
                </div>

                <div className="flex justify-between items-start border-b border-danger/10 pb-3 bg-danger/5 p-2 rounded">
                  <div>
                    <p className="font-medium text-sm">Asset Damage/Loss</p>
                    <p className="text-[11px] text-primary/60 mt-1">Missing access card</p>
                  </div>
                  <input type="text" className="w-24 text-right p-1.5 border border-danger/30 bg-white rounded text-danger font-mono text-sm" defaultValue="-250.00" />
                </div>
             </div>
             <Button variant="outline" size="sm" className="w-full text-xs border-dashed">
               + Add Custom Deduction
             </Button>
          </CardContent>
        </Card>
      </div>

      {/* FINAL SUMMARY STICKY FOOTER EFFECT */}
      <Card className="border-2 border-primary bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32 blur-2xl"></div>
        <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between z-10 relative">
          <div>
            <h3 className="text-xl font-medium text-white/80">Net Payable Amount</h3>
            <p className="text-sm text-white/60 mt-1">Total Earnings minus Total Deductions</p>
          </div>
          <div className="text-right mt-4 md:mt-0">
             <div className="text-5xl font-mono font-bold tracking-tight">
               AED 21,250.00
             </div>
             <p className="text-white/60 text-sm mt-2">Ready for Payroll Approval</p>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
