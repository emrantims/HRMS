import React, { useMemo, useState } from "react";
import {
  AlertTriangle,
  Calculator,
  Calendar,
  CheckCircle2,
  HandCoins,
  Info,
  Search,
  Send,
  User,
} from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import { Label } from "../../components/ui/Label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";

function formatCurrency(value: number) {
  return value.toLocaleString("en-AE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatMonth(date: Date) {
  return date.toLocaleString("en-US", { month: "short", year: "numeric" });
}

function addMonths(date: Date, months: number) {
  const nextDate = new Date(date);
  nextDate.setMonth(nextDate.getMonth() + months);
  return nextDate;
}

export default function LoanRequest() {
  const [loanAmount, setLoanAmount] = useState<number>(15000);
  const [duration, setDuration] = useState<number>(6);
  const [issueDate, setIssueDate] = useState<string>("2024-10-15");
  const employeeBaseSalary = 12000;

  const repayment = useMemo(() => {
    const amount = Number.isFinite(loanAmount) && loanAmount > 0 ? loanAmount : 0;
    const months = Math.max(1, duration || 1);
    const monthlyDeduction = amount / months;
    const payrollLimit = employeeBaseSalary * 0.5;
    const startDate = issueDate ? new Date(issueDate) : new Date();
    const endDate = amount > 0 ? addMonths(startDate, months - 1) : null;

    return {
      amount,
      months,
      monthlyDeduction,
      payrollLimit,
      startDate,
      endDate,
      isOverLimit: monthlyDeduction > payrollLimit,
      percentageOfSalary: employeeBaseSalary ? Math.round((monthlyDeduction / employeeBaseSalary) * 100) : 0,
    };
  }, [employeeBaseSalary, duration, issueDate, loanAmount]);

  return (
    <div className="flex h-full w-full max-w-6xl flex-col gap-6 pb-10">
      <div className="flex shrink-0 flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-primary">
            Create Loan Request
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Initiate a new salary advance or personal loan with live repayment preview.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">Cancel</Button>
          <Button variant="accent" className="gap-2">
            <Send className="h-4 w-4" /> Submit for Approval
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardHeader className="border-b border-border bg-surface">
              <CardTitle>1. Select Employee</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-6 text-sm">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search employee name or code..."
                  className="pl-9"
                  defaultValue="Sarah Connor (EMP-23-0145)"
                />
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-border bg-muted/40 p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-bold text-white">
                  SC
                </div>
                <div className="flex-1">
                  <div className="flex justify-between gap-3">
                    <div>
                      <p className="font-bold text-primary">Sarah Connor</p>
                      <p className="text-[11px] font-mono text-muted-foreground">
                        EMP-23-0145 • Sales Dept
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        Base Salary
                      </p>
                      <p className="font-mono font-bold text-accent">
                        AED 12,000
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex w-fit items-center gap-1 rounded-lg border border-warning/20 bg-warning/10 px-2 py-1.5 text-[11px] font-bold text-warning">
                    <Info className="h-3.5 w-3.5" /> 1 Active Loan (AED 1,500/mo deduction)
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="border-b border-border bg-surface">
              <CardTitle>2. Loan Application</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-6 text-sm">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Loan Type</Label>
                  <Select>
                    <option>Personal Loan</option>
                    <option>Salary Advance</option>
                    <option>Emergency Funds</option>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Issue Date</Label>
                  <Input type="date" value={issueDate} onChange={(e) => setIssueDate(e.target.value)} />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Loan Amount (AED)</Label>
                <div className="relative">
                  <HandCoins className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="number"
                    min="0"
                    step="500"
                    placeholder="0.00"
                    className="h-12 pl-9 font-mono text-lg font-bold"
                    value={loanAmount || ""}
                    onChange={(e) => setLoanAmount(Math.max(0, Number(e.target.value || 0)))}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Reason / Justification</Label>
                <Input placeholder="Enter reason for HR review..." />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="overflow-hidden border-border bg-surface shadow-md">
            <CardHeader className="flex-row items-center justify-between space-y-0 border-b border-border bg-surface">
              <CardTitle className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Calculator className="h-4 w-4" />
                </span>
                Smart Repayment Calculator
              </CardTitle>
              <Badge variant="accent">Auto-Syncs with Payroll</Badge>
            </CardHeader>

            <CardContent className="space-y-6 pt-6">
              <div className="space-y-4 rounded-2xl border border-border bg-muted/40 p-5">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <Label className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      Repayment Duration
                    </Label>
                    <p className="mt-1 text-xs text-muted-foreground">Choose 1 to 24 months</p>
                  </div>
                  <div className="rounded-xl bg-accent/10 px-3 py-1.5 font-mono text-lg font-black text-accent">
                    {duration} <span className="text-xs font-semibold text-muted-foreground">mos</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="24"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-border accent-accent"
                />
                <div className="flex justify-between font-mono text-[10px] font-bold text-muted-foreground">
                  <span>1M</span>
                  <span>12M</span>
                  <span>24M</span>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
                <div className="text-center">
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    Monthly Payroll Deduction
                  </p>
                  <p className={`font-mono text-4xl font-black ${repayment.isOverLimit ? "text-destructive" : "text-accent"}`}>
                    AED {formatCurrency(repayment.monthlyDeduction)}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {repayment.percentageOfSalary}% of base salary • Limit AED {formatCurrency(repayment.payrollLimit)}
                  </p>

                  {repayment.isOverLimit ? (
                    <div className="mt-3 inline-flex items-center gap-2 rounded-xl border border-destructive/20 bg-destructive/10 px-3 py-2 text-xs font-semibold text-destructive">
                      <AlertTriangle className="h-4 w-4" /> Exceeds 50% salary deduction limit
                    </div>
                  ) : (
                    <div className="mt-3 inline-flex items-center gap-2 rounded-xl border border-success/20 bg-success/10 px-3 py-2 text-xs font-semibold text-success">
                      <CheckCircle2 className="h-4 w-4" /> Within payroll deduction limit
                    </div>
                  )}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5">
                  <div className="rounded-xl bg-muted/50 p-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Starts On</p>
                    <p className="mt-1 flex items-center gap-1.5 font-bold text-primary">
                      <Calendar className="h-3.5 w-3.5 text-accent" /> {formatMonth(repayment.startDate)}
                    </p>
                  </div>
                  <div className="rounded-xl bg-muted/50 p-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Ends On</p>
                    <p className="mt-1 flex items-center gap-1.5 font-bold text-primary">
                      <Calendar className="h-3.5 w-3.5 text-accent" /> {repayment.endDate ? formatMonth(repayment.endDate) : "-"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border border-border bg-muted/40 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Loan Amount</p>
                  <p className="mt-1 font-mono text-lg font-bold text-primary">AED {formatCurrency(repayment.amount)}</p>
                </div>
                <div className="rounded-2xl border border-border bg-muted/40 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Plan Type</p>
                  <p className="mt-1 font-bold text-primary">Interest-Free EMI</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
