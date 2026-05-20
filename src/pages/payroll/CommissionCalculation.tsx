import React from "react";
import { Calculator, Target, Users, Settings2, Save } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";

const mockComm = [
  {
    id: "EMP-23-0145",
    name: "Sarah Connor",
    rule: "10% > 50k",
    target: 50000,
    achieved: 130000,
    calc: 8000,
    override: "",
  },
  {
    id: "EMP-24-0012",
    name: "Ahmed Ali",
    rule: "5% Flat",
    target: 0,
    achieved: 60000,
    calc: 3000,
    override: "",
  },
  {
    id: "EMP-23-0402",
    name: "Fatima Balooshi",
    rule: "2% > 100k",
    target: 100000,
    achieved: 90000,
    calc: 0,
    override: "500",
  },
];

export default function CommissionCalculation() {
  return (
    <div className="flex flex-col h-full gap-6 w-full pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">
            Commission Engine
          </h1>
          <p className="text-primary/60 text-sm mt-1">
            Calculate and override sales commissions before payroll run
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2 bg-surface text-primary">
            <Settings2 className="w-4 h-4" /> Rule Configurations
          </Button>
          <Button variant="accent" className="gap-2">
            <Save className="w-4 h-4" /> Commit to Payroll
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left rules summary */}
        <div className="hidden lg:flex flex-col gap-6">
          <Card className="bg-surface shadow-sm border-primary/10">
            <CardHeader className="border-b border-primary/5 pb-4">
              <CardTitle className="flex items-center gap-2">
                <Target className="w-4 h-4" /> Dept Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-primary/70">Sales Team</span>
                <span className="font-bold text-primary">AED 11,000</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-primary/70">Partnerships</span>
                <span className="font-bold text-primary">AED 3,000</span>
              </div>
              <div className="pt-4 border-t border-primary/5 flex justify-between items-center font-bold text-accent">
                <span>Total Proposed</span>
                <span className="font-mono">AED 14,000</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-warning/10 border-warning/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-warning text-sm">
                Active Overrides (1)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-warning-foreground font-medium">
                Manager override detected for Fatima Balooshi (+500). Will be
                flagged in approval workflow.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Table */}
        <Card className="lg:col-span-3 flex flex-col shadow-lg border-primary/10 overflow-hidden">
          <div className="p-4 bg-background border-b border-primary/10 flex items-center justify-between">
            <div className="flex gap-4">
              <Select className="w-[160px] bg-surface h-8 text-xs">
                <option>October 2024</option>
              </Select>
              <Select className="w-[160px] bg-surface h-8 text-xs">
                <option>All Departments</option>
                <option>Sales</option>
              </Select>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-2 bg-surface"
            >
              <Calculator className="w-3 h-3" /> Auto-Calculate
            </Button>
          </div>

          <div className="flex-1 overflow-x-auto bg-surface min-h-[400px]">
            <table className="w-full text-left whitespace-nowrap text-xs">
              <thead className="bg-background sticky top-0 z-10 shadow-sm font-bold text-primary/60 uppercase tracking-widest text-[10px]">
                <tr>
                  <th className="px-4 py-4">Employee</th>
                  <th className="px-4 py-4">Applied Rule</th>
                  <th className="px-4 py-4 text-right">Target</th>
                  <th className="px-4 py-4 text-right">Achieved</th>
                  <th className="px-4 py-4 text-right">Calc. Result</th>
                  <th className="px-4 py-4 text-right">Mngr Override</th>
                  <th className="px-4 py-4 text-right font-black text-accent bg-accent/5">
                    Final Pay
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5 font-mono">
                {mockComm.map((row) => {
                  const final = row.override
                    ? parseInt(row.override)
                    : row.calc;
                  return (
                    <tr key={row.id} className="hover:bg-primary/5 group">
                      <td className="px-4 py-3 font-sans">
                        <div className="font-bold text-primary text-sm">
                          {row.name}
                        </div>
                        <div className="text-[10px] text-primary/50">
                          {row.id}
                        </div>
                      </td>
                      <td className="px-4 py-3 font-sans">
                        <Badge
                          variant="outline"
                          className="text-[9px] truncate max-w-[100px]"
                        >
                          {row.rule}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-right text-primary/60">
                        {row.target > 0 ? row.target.toLocaleString() : "-"}
                      </td>
                      <td className="px-4 py-3 text-right font-bold">
                        {row.achieved.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-right text-success">
                        {row.calc.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Input
                          className="h-7 w-24 text-right text-xs ml-auto"
                          defaultValue={row.override}
                          placeholder="-"
                        />
                      </td>
                      <td className="px-4 py-3 text-right text-sm font-black text-accent bg-accent/5">
                        {final.toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
