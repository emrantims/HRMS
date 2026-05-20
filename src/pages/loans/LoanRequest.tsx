import React, { useState } from "react";
import {
  Calculator,
  Calendar,
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

export default function LoanRequest() {
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [duration, setDuration] = useState<number>(1);
  const employeeBaseSalary = 12000;

  const monthlyDeduction = loanAmount > 0 ? loanAmount / duration : 0;
  const isOverLimit = monthlyDeduction > employeeBaseSalary * 0.5;

  return (
    <div className="flex flex-col h-full gap-6 max-w-6xl mx-auto w-full pb-10">
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">
            Create Loan Request
          </h1>
          <p className="text-primary/60 text-sm mt-1">
            Initiate a new salary advance or personal loan
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="bg-surface">
            Cancel
          </Button>
          <Button variant="accent" className="gap-2">
            <Send className="w-4 h-4" /> Submit for Approval
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Form */}
        <div className="space-y-6">
          {/* Employee Selection */}
          <Card className="shadow-sm border-primary/10">
            <CardHeader className="border-b border-primary/5 pb-4 bg-surface">
              <CardTitle className="text-sm">1. Select Employee</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4 text-sm">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-primary/40" />
                <Input
                  placeholder="Search employee name or code..."
                  className="pl-9"
                  defaultValue="Sarah Connor (EMP-23-0145)"
                />
              </div>

              {/* Selected Profile Brief */}
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex justify-center items-center font-bold">
                  SC
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-bold text-primary">Sarah Connor</p>
                      <p className="text-[10px] text-primary/60 font-mono">
                        EMP-23-0145 • Sales Dept
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase font-bold text-primary/40 text-right">
                        Base Salary
                      </p>
                      <p className="font-mono font-bold text-accent">
                        AED 12,000
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 text-[10px] font-bold text-warning flex items-center gap-1 bg-warning/10 p-1.5 rounded pr-3 w-fit">
                    <Info className="w-3 h-3" /> 1 Active Loan (AED 1,500/mo
                    deduction)
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Loan Details */}
          <Card className="shadow-sm border-primary/10">
            <CardHeader className="border-b border-primary/5 pb-4 bg-surface">
              <CardTitle className="text-sm">2. Loan Application</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4 text-sm">
              <div className="grid grid-cols-2 gap-4">
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
                  <Input type="date" defaultValue="2024-10-15" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Loan Amount (AED)</Label>
                <div className="relative">
                  <HandCoins className="w-4 h-4 absolute left-3 top-2.5 text-primary/40" />
                  <Input
                    type="number"
                    placeholder="0.00"
                    className="pl-9 font-mono font-bold text-lg h-12"
                    value={loanAmount || ""}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
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

        {/* Right Side: Smart Calculator */}
        <div className="space-y-6">
          <Card className="bg-primary text-white border-none shadow-xl relative overflow-hidden">
            {/* Pattern Background */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

            <CardHeader className="border-b border-white/10 pb-4 relative z-10 flex flex-row items-center justify-between">
              <CardTitle className="text-sm flex items-center gap-2">
                <Calculator className="w-4 h-4 text-accent" /> Smart Repayment
                Calculator
              </CardTitle>
              <Badge variant="outline" className="border-accent text-accent">
                Auto-Syncs with Payroll
              </Badge>
            </CardHeader>
            <CardContent className="pt-6 relative z-10 space-y-8">
              {/* Slider / Input for duration */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <Label className="text-white/70">
                    Repayment Duration (Months)
                  </Label>
                  <span className="font-mono font-bold text-xl text-accent">
                    {duration}{" "}
                    <span className="text-sm text-white/50">mos</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="24"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full h-2 bg-black/20 rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-[10px] font-bold text-white/40 font-mono">
                  <span>1M</span>
                  <span>12M</span>
                  <span>24M</span>
                </div>
              </div>

              {/* Results Panel */}
              <div className="bg-black/20 rounded-xl p-6 border border-white/10 space-y-6">
                <div className="text-center">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-white/50 mb-1">
                    Monthly Payroll Deduction
                  </p>
                  <p
                    className={`font-mono text-4xl font-black ${isOverLimit ? "text-destructive" : "text-accent"}`}
                  >
                    {monthlyDeduction > 0
                      ? monthlyDeduction.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      : "0.00"}
                  </p>

                  {isOverLimit && (
                    <div className="text-[10px] text-destructive/90 bg-destructive/20 border border-destructive/30 rounded p-1.5 mt-2 inline-block">
                      Warning: Exceeds 50% of base salary (Limit: AED 6k)
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-white/40">
                      Starts On
                    </p>
                    <p className="font-bold flex items-center gap-1.5 mt-1">
                      <Calendar className="w-3 h-3 text-accent" /> Oct 2024
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-white/40">
                      Ends On
                    </p>
                    <p className="font-bold flex items-center gap-1.5 mt-1">
                      <Calendar className="w-3 h-3 text-white/50" />
                      {loanAmount > 0
                        ? `${new Date(2024, 9 + duration - 1).toLocaleString("default", { month: "short", year: "numeric" })}`
                        : "-"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-[10px] text-white/40 text-center uppercase tracking-widest">
                Interest-Free • Fixed Monthly EMI
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
