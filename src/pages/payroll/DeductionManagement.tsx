import React from "react";
import {
  TrendingDown,
  Plus,
  MonitorSmartphone,
  Banknote,
  AlertCircle,
} from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Select } from "../../components/ui/Select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";

export default function DeductionManagement() {
  return (
    <div className="flex flex-col h-full gap-6 max-w-6xl mx-auto w-full pb-10">
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">
            Deductions & Advances
          </h1>
          <p className="text-primary/60 text-sm mt-1">
            Manage active loans, asset damages, and manual deductions
          </p>
        </div>
        <Button variant="accent" className="gap-2">
          <Plus className="w-4 h-4" /> Add New Deduction
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Summary sidebar */}
        <div className="flex flex-col gap-6">
          <Card className="bg-surface shadow-sm border-primary/10">
            <CardHeader className="border-b border-primary/5 pb-4">
              <CardTitle>Active Recoveries</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="p-3 bg-background rounded-lg border border-primary/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Banknote className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary">
                      Company Loans
                    </p>
                    <p className="text-[10px] text-primary/50 mt-0.5">
                      24 Active Profiles
                    </p>
                  </div>
                </div>
                <span className="font-mono text-sm font-bold">142k</span>
              </div>

              <div className="p-3 bg-background rounded-lg border border-primary/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                    <MonitorSmartphone className="w-4 h-4 text-destructive" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary">
                      Asset Damages
                    </p>
                    <p className="text-[10px] text-primary/50 mt-0.5">
                      3 Pending Recoveries
                    </p>
                  </div>
                </div>
                <span className="font-mono text-sm font-bold">4.5k</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-warning/10 border-warning/20">
            <CardContent className="p-4 flex gap-3 items-start">
              <AlertCircle className="w-4 h-4 text-warning shrink-0 mt-0.5" />
              <p className="text-xs text-warning-foreground font-medium">
                Deductions exceeding 50% of an employee's base salary will be
                flagged during the payroll run to ensure labor law compliance.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main List */}
        <Card className="md:col-span-2 flex flex-col shadow-lg border-primary/10 overflow-hidden">
          <div className="p-4 bg-background border-b border-primary/10 flex gap-4">
            <Select className="w-[180px] bg-surface h-8 text-xs">
              <option>All Types</option>
              <option>Company Loan</option>
              <option>Advance Salary</option>
              <option>Asset Recovery</option>
            </Select>
            <Select className="w-[180px] bg-surface h-8 text-xs">
              <option>Status: Active</option>
              <option>Status: Completed</option>
            </Select>
          </div>

          <div className="flex-1 overflow-x-auto bg-surface min-h-[400px]">
            <table className="w-full text-left whitespace-nowrap text-sm">
              <thead className="bg-background sticky top-0 shadow-sm text-[10px] uppercase font-bold text-primary/50 tracking-widest">
                <tr>
                  <th className="px-6 py-4">Employee</th>
                  <th className="px-6 py-4">Type</th>
                  <th className="px-6 py-4 text-right">Total Amt</th>
                  <th className="px-6 py-4 text-right">Monthly EMI</th>
                  <th className="px-6 py-4 text-center">Remaining</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5 font-mono text-xs">
                <tr className="hover:bg-primary/5 group">
                  <td className="px-4 py-3 font-sans">
                    <div className="font-bold text-primary text-sm">
                      Elena Rostova
                    </div>
                    <div className="text-[10px] text-primary/50">
                      EMP-21-0089
                    </div>
                  </td>
                  <td className="px-4 py-3 font-sans">
                    <Badge variant="outline" className="text-[9px]">
                      Company Loan
                    </Badge>
                  </td>
                  <td className="px-4 py-3 text-right">24,000</td>
                  <td className="px-4 py-3 text-right font-bold text-destructive">
                    -2,000
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex flex-col items-center">
                      <span className="mb-1 text-[10px] text-primary/60">
                        6 / 12 Months
                      </span>
                      <div className="w-20 h-1.5 bg-background rounded-full overflow-hidden">
                        <div className="h-full bg-accent w-[50%]"></div>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-primary/5 group">
                  <td className="px-4 py-3 font-sans">
                    <div className="font-bold text-primary text-sm">
                      Ahmed Ali
                    </div>
                    <div className="text-[10px] text-primary/50">
                      EMP-24-0012
                    </div>
                  </td>
                  <td className="px-4 py-3 font-sans">
                    <Badge
                      variant="outline"
                      className="text-[9px] border-destructive text-destructive bg-destructive/5"
                    >
                      Asset Damage
                    </Badge>
                    <p className="text-[9px] text-primary/40 mt-1 max-w-[120px] truncate">
                      Laptop Screen Repl.
                    </p>
                  </td>
                  <td className="px-4 py-3 text-right">1,500</td>
                  <td className="px-4 py-3 text-right font-bold text-destructive">
                    -1,500
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex flex-col items-center">
                      <span className="mb-1 text-[10px] text-primary/60">
                        0 / 1 Months
                      </span>
                      <div className="w-20 h-1.5 bg-background rounded-full overflow-hidden">
                        <div className="h-full bg-accent w-0"></div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
