import React from "react";
import {
  Calculator,
  ArrowLeft,
  PlayCircle,
  FileText,
  ChevronRight,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/Card";
import { Select } from "../../components/ui/Select";

const integrationMock = [
  {
    id: "EMP-23-0145",
    name: "Sarah Connor",
    activeLoan: "L-2024-089",
    base: 12000,
    loanDed: 1500,
    otherDed: 200,
    net: 10300,
    valid: true,
  },
  {
    id: "EMP-24-0012",
    name: "Ahmed Ali",
    activeLoan: "L-2024-092",
    base: 8500,
    loanDed: 4500,
    otherDed: 0,
    net: 4000,
    valid: false,
  }, // Exceeds 50%
  {
    id: "EMP-21-0089",
    name: "Elena Rostova",
    activeLoan: "L-2023-114",
    base: 18000,
    loanDed: 2000,
    otherDed: 500,
    net: 15500,
    valid: true,
  },
];

export default function LoanDeductionPreview() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full gap-6 w-full pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">
            Payroll Integration Preview
          </h1>
          <p className="text-primary/60 text-sm mt-1">
            Simulate loan deductions before locking the current payroll cycle
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2 bg-surface">
            <Calculator className="w-4 h-4" /> Recalculate Simulation
          </Button>
          <Button
            variant="accent"
            className="gap-2"
            onClick={() => navigate("/payroll/run")}
          >
            <Lock className="w-4 h-4" /> Go to Payroll Run
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Summary sidebar */}
        <div className="hidden lg:flex flex-col gap-6">
          <Card className="bg-surface shadow-sm border-primary/10">
            <CardHeader className="border-b border-primary/5 pb-4">
              <CardTitle className="text-sm uppercase tracking-widest text-primary/50">
                Oct 2024 Simulation
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <p className="text-[10px] uppercase font-bold text-primary/40">
                  Total Active Profiles
                </p>
                <p className="font-mono font-bold text-lg text-primary">142</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-primary/40">
                  Total Deductions Planned
                </p>
                <p className="font-mono font-bold text-lg text-destructive">
                  AED 95,000
                </p>
              </div>
              <div className="pt-4 border-t border-primary/5">
                <p className="text-[10px] uppercase font-bold text-primary/40">
                  Labor Law Violations
                </p>
                <p className="font-mono font-bold text-lg text-warning">
                  1 Flagged
                </p>
                <p className="text-[9px] text-primary/40 mt-1">
                  Deduction &gt; 50% of Basic
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Table */}
        <Card className="lg:col-span-3 flex flex-col shadow-lg border-primary/10 overflow-hidden">
          <div className="p-4 bg-background border-b border-primary/10 flex items-center justify-between">
            <div className="flex gap-4">
              <Select className="w-[200px] bg-surface text-xs h-8">
                <option>October 2024 (Active)</option>
                <option disabled>September 2024 (Committed)</option>
              </Select>
            </div>
            <span className="text-xs font-bold text-primary/40 uppercase">
              Before Payroll Lock
            </span>
          </div>

          <div className="flex-1 overflow-x-auto bg-surface min-h-[400px]">
            <table className="w-full text-left whitespace-nowrap text-sm">
              <thead className="bg-background sticky top-0 shadow-sm font-bold text-primary/60 uppercase tracking-widest text-[10px]">
                <tr>
                  <th className="px-4 py-4">Employee</th>
                  <th className="px-4 py-4">Loan Target</th>
                  <th className="px-4 py-4 text-right">Base Salary</th>
                  <th className="px-4 py-4 text-right">Loan Ded.</th>
                  <th className="px-4 py-4 text-right">Other Ded.</th>
                  <th className="px-4 py-4 text-right font-black text-accent bg-accent/5">
                    Net Simulation
                  </th>
                  <th className="px-4 py-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5 font-mono text-xs">
                {integrationMock.map((row) => (
                  <tr key={row.id} className="hover:bg-primary/5 group">
                    <td className="px-4 py-3 font-sans">
                      <div className="font-bold text-primary text-sm">
                        {row.name}
                      </div>
                      <div className="text-[10px] text-primary/50">
                        {row.id}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-primary/60">
                      {row.activeLoan}
                    </td>
                    <td className="px-4 py-3 text-right text-primary/60">
                      {row.base.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-right font-bold text-destructive">
                      -{row.loanDed.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-right text-warning">
                      -{row.otherDed.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-right text-sm font-black text-accent bg-accent/5">
                      {row.net.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-center font-sans">
                      {row.valid ? (
                        <span className="text-[10px] bg-success/10 text-success p-1 px-2 rounded font-bold uppercase">
                          Valid
                        </span>
                      ) : (
                        <span className="text-[10px] bg-warning/10 text-warning border border-warning/20 p-1 px-2 rounded font-bold uppercase">
                          Target &gt; 50% Limit
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
