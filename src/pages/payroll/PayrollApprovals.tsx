import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  XCircle,
  ChevronRight,
  FileText,
} from "lucide-react";
import { Button } from "../../components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";

export default function PayrollApprovals() {
  return (
    <div className="flex flex-col h-full gap-6 max-w-5xl mx-auto w-full pb-10">
      {/* Header */}
      <div className="flex items-center justify-between shrink-0 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">
            Payroll Approval Workflow
          </h1>
          <p className="text-primary/60 text-sm mt-1">
            Review and authorize locked payroll batches
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Active Batch Card */}
        <Card className="border-2 border-accent border-l-8 overflow-hidden shadow-lg">
          <div className="bg-accent/5 p-6 flex flex-col md:flex-row justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="default" className="bg-accent">
                  Batch P-2410-01
                </Badge>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/50">
                  Oct 2024
                </span>
              </div>
              <h2 className="text-xl font-bold text-primary">
                Al Maha Tech (All Branches)
              </h2>
              <p className="text-sm text-primary/60 mt-1">
                1,245 Employees • Prepared by Payroll Officer
              </p>

              <div className="flex items-center gap-6 mt-6 bg-surface p-3 rounded-lg border border-primary/10 w-fit">
                <div className="text-center px-4 border-r border-primary/10">
                  <p className="text-[10px] uppercase font-bold text-primary/40">
                    Gross
                  </p>
                  <p className="font-mono font-bold text-sm">1.52M</p>
                </div>
                <div className="text-center px-4 border-r border-primary/10">
                  <p className="text-[10px] uppercase font-bold text-primary/40">
                    Deductions
                  </p>
                  <p className="font-mono font-bold text-sm text-destructive">
                    58k
                  </p>
                </div>
                <div className="text-center px-4">
                  <p className="text-[10px] uppercase font-bold text-primary/40">
                    Net Payable
                  </p>
                  <p className="font-mono font-black text-lg text-accent">
                    1.46M
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 min-w-[250px]">
              <p className="text-[10px] uppercase font-bold text-primary/50 tracking-widest mb-1">
                Approval Chain
              </p>

              <div className="flex items-center justify-between p-2 rounded bg-success/10 border border-success/20">
                <span className="text-xs font-bold text-success flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Payroll Officer
                </span>
                <span className="text-[10px] text-success/70">
                  24 Oct 10:00
                </span>
              </div>

              <div className="flex items-center justify-between p-2 rounded bg-warning/10 border border-warning/20">
                <span className="text-xs font-bold text-warning flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Group HR Mgr
                </span>
                <span className="text-[10px] text-warning/70">
                  Pending Review
                </span>
              </div>

              <div className="flex items-center justify-between p-2 rounded bg-surface border border-primary/10 opacity-50">
                <span className="text-xs font-bold text-primary flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Finance Director
                </span>
                <span className="text-[10px] text-primary/50">Locked</span>
              </div>

              <div className="mt-auto flex gap-2 pt-4 border-t border-primary/10">
                <Button
                  variant="outline"
                  className="flex-1 bg-surface text-destructive border-destructive/20 hover:bg-destructive/10 text-xs"
                >
                  Reject
                </Button>
                <Button variant="accent" className="flex-1 text-xs">
                  Approve Batch
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-surface border-t border-primary/10 p-3 flex justify-center">
            <Button
              variant="ghost"
              size="sm"
              className="text-xs gap-2 text-primary hover:text-accent"
            >
              <FileText className="w-4 h-4" /> View Detailed Payroll Sheet{" "}
              <ChevronRight className="w-3 h-3" />
            </Button>
          </div>
        </Card>

        <h3 className="text-sm font-bold uppercase tracking-widest text-primary/40 mt-8 pl-1">
          Recently Approved
        </h3>
        <div className="space-y-4">
          <Card className="opacity-80">
            <div className="p-4 flex items-center justify-between">
              <div>
                <Badge variant="outline" className="text-[9px] mb-1">
                  Batch P-2409-01
                </Badge>
                <h3 className="text-sm font-bold text-primary">
                  September 2024 Final
                </h3>
                <p className="text-[10px] text-primary/50 mt-0.5">
                  Approved by Finance Dir. on 28 Sep
                </p>
              </div>
              <div className="text-right flex items-center gap-6">
                <div>
                  <p className="text-[10px] uppercase font-bold text-primary/40">
                    Net Payout
                  </p>
                  <p className="font-mono font-bold text-sm">AED 1.38M</p>
                </div>
                <Badge variant="success" className="h-6">
                  <CheckCircle2 className="w-3 h-3 mr-1" /> Disbursed
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
