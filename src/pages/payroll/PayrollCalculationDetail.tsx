import React from "react";
import {
  ArrowLeft,
  Calculator,
  FileText,
  Printer,
  Building2,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";

export default function PayrollCalculationDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="flex flex-col h-full gap-6 max-w-5xl mx-auto w-full pb-10">
      {/* Action Bar */}
      <div className="flex items-center justify-between shrink-0 mb-2">
        <Button
          variant="ghost"
          className="gap-2 -ml-3"
          onClick={() => navigate("/payroll/run")}
        >
          <ArrowLeft className="w-4 h-4" /> Back to Payroll Run
        </Button>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="gap-2 bg-surface text-primary"
            onClick={() => navigate(`/payroll/payslip/${id || "EMP-24-0012"}`)}
          >
            <FileText className="w-4 h-4" /> View Payslip Preview
          </Button>
          <Button variant="accent" className="gap-2">
            <Calculator className="w-4 h-4" /> Manual Override
          </Button>
        </div>
      </div>

      {/* Brief Profile Header */}
      <div className="bg-surface rounded-2xl p-6 border border-primary/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 shrink-0 relative overflow-hidden">
        <div className="flex items-center gap-6 relative z-10">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold shrink-0">
            SC
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold tracking-tight">
                Sarah Connor
              </h1>
              <span className="text-xs font-mono bg-primary/5 px-2 py-1 rounded text-primary/70 font-semibold border border-primary/10">
                {id || "EMP-23-0145"}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm font-medium text-primary/70">
              <span className="flex items-center gap-1 font-bold">
                <Building2 className="w-4 h-4" /> Sales Executive
              </span>
              <span className="text-primary/30">•</span>
              <span>Mixed Salary Type (Fixed + Comm)</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">
            Processing Month
          </p>
          <p className="font-bold text-lg">October 2024</p>
          <Badge variant="warning" className="mt-1">
            Uncalculated Override
          </Badge>
        </div>
      </div>

      {/* Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-t-4 border-t-success">
          <CardHeader className="border-b border-primary/5 pb-4">
            <CardTitle className="text-success">Total Earnings</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="flex justify-between text-sm">
              <div className="flex flex-col">
                <span className="font-bold text-primary">Basic Salary</span>
                <span className="text-[10px] text-primary/50 mt-1">
                  Contract value
                </span>
              </div>
              <span className="font-mono font-bold">12,000.00</span>
            </div>

            <div className="flex justify-between text-sm pt-4 border-t border-primary/5">
              <div className="flex flex-col">
                <span className="font-bold text-primary">Sales Commission</span>
                <span className="text-[10px] inline-flex items-center mt-1 text-accent font-bold">
                  Target 120% Achieved
                </span>
              </div>
              <span className="font-mono font-bold text-success">
                + 8,000.00
              </span>
            </div>

            <div className="flex justify-between text-sm pt-4 border-t border-primary/5">
              <div className="flex flex-col">
                <span className="font-bold text-primary">Festival Bonus</span>
                <span className="text-[10px] text-primary/50 mt-1">
                  Diwali/Festive allowance
                </span>
              </div>
              <span className="font-mono font-bold text-success">
                + 2,000.00
              </span>
            </div>

            <div className="flex justify-between items-center text-lg font-bold pt-6 border-t-2 border-primary/10">
              <span>Gross Earnings</span>
              <span className="font-mono text-success">AED 22,000.00</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-destructive">
          <CardHeader className="border-b border-primary/5 pb-4">
            <CardTitle className="text-destructive">Total Deductions</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="flex justify-between text-sm">
              <div className="flex flex-col">
                <span className="font-bold text-primary">Unpaid Absence</span>
                <span className="text-[10px] text-primary/50 mt-1">
                  1 Day (Oct 12)
                </span>
              </div>
              <span className="font-mono font-bold text-destructive">
                - 400.00
              </span>
            </div>

            <div className="flex justify-between text-sm pt-4 border-t border-primary/5">
              <div className="flex flex-col">
                <span className="font-bold text-primary">Late Penalties</span>
                <span className="text-[10px] text-primary/50 mt-1">
                  4 instances &gt; 15 mins late
                </span>
              </div>
              <span className="font-mono font-bold text-warning">- 200.00</span>
            </div>

            <div className="flex justify-between text-sm pt-4 border-t border-primary/5">
              <div className="flex flex-col">
                <span className="font-bold text-primary">Company Loan EMI</span>
                <span className="text-[10px] text-primary/50 mt-1">
                  Installment 2/12
                </span>
              </div>
              <span className="font-mono font-bold text-primary/30">0.00</span>
            </div>

            <div className="flex justify-between items-center text-lg font-bold pt-6 border-t-2 border-primary/10">
              <span>Total Deductions</span>
              <span className="font-mono text-destructive">AED - 600.00</span>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 bg-accent text-white border-none shadow-xl">
          <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-[10px] uppercase font-bold tracking-widest text-white/50 mb-2">
                Final Net Payable
              </h3>
              <div className="flex items-baseline gap-4">
                <span className="text-5xl font-black font-mono">21,400.00</span>
                <span className="text-xl font-bold text-white/50">AED</span>
              </div>
            </div>

            <div className="flex-1 bg-black/20 rounded-xl p-4 border border-white/10 font-mono text-sm overflow-x-auto whitespace-nowrap">
              <span className="text-white/50">Formula:</span>
              <br />
              <span className="text-success">
                (Base: 12k + Comm: 8k + Bonus: 2k)
              </span>{" "}
              <br />
              <span className="text-destructive">
                - (Absence: 400 + Late: 200)
              </span>{" "}
              <br />
              <span className="text-white">= 21,400</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
