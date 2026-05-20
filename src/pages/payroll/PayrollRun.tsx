import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  Filter,
  PlayCircle,
  Lock,
  Send,
  Calculator,
  AlertCircle,
  Eye,
} from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import { Badge } from "../../components/ui/Badge";
import { Card } from "../../components/ui/Card";

const mockPayroll = [
  {
    id: "EMP-24-0012",
    name: "Ahmed Ali",
    base: 22000,
    attImpact: 0,
    comm: 3000,
    bonus: 0,
    loan: -1500,
    asset: 0,
    late: 0,
    net: 23500,
  },
  {
    id: "EMP-23-0145",
    name: "Sarah Connor",
    base: 12000,
    attImpact: -400,
    comm: 8000,
    bonus: 2000,
    loan: 0,
    asset: 0,
    late: -200,
    net: 21400,
  },
  {
    id: "EMP-21-0089",
    name: "Elena Rostova",
    base: 18000,
    attImpact: 0,
    comm: 0,
    bonus: 0,
    loan: -2000,
    asset: -500,
    late: 0,
    net: 15500,
  },
  {
    id: "EMP-23-0402",
    name: "Fatima Balooshi",
    base: 8500,
    attImpact: -850,
    comm: 0,
    bonus: 0,
    loan: 0,
    asset: 0,
    late: -150,
    net: 7500,
  },
];

export default function PayrollRun() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full gap-6 w-full pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">
            Active Payroll Run
          </h1>
          <p className="text-primary/60 text-sm mt-1">
            October 2024 Calculation Matrix
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2 bg-surface text-primary">
            <Calculator className="w-4 h-4" /> Recalculate Grid
          </Button>
          <Button
            variant="outline"
            className="gap-2 bg-surface text-warning border-warning/20"
          >
            <Lock className="w-4 h-4" /> Lock Payroll
          </Button>
          <Button variant="accent" className="gap-2">
            <Send className="w-4 h-4" /> Submit for Approval
          </Button>
        </div>
      </div>

      {/* Warnings / System Checks */}
      <div className="bg-warning/10 p-4 rounded-xl border border-warning/20 flex gap-4 items-start shrink-0">
        <AlertCircle className="w-5 h-5 text-warning shrink-0" />
        <div className="flex-1">
          <h4 className="text-sm font-bold text-warning-foreground">
            System Warnings (2)
          </h4>
          <ul className="list-disc list-inside text-xs text-primary/70 mt-1">
            <li>
              Attendance logs missing for 12 employees (Assuming Present for
              processing).
            </li>
            <li>Commission rules for Sales Department not finally approved.</li>
          </ul>
        </div>
      </div>

      {/* Filters */}
      <Card className="shrink-0 bg-surface">
        <div className="p-4 flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-primary/40" />
            <Input
              placeholder="Filter by Employee..."
              className="pl-9 bg-background/50"
            />
          </div>
          <Select className="w-[180px] bg-background/50">
            <option>October 2024</option>
            <option disabled>September 2024 (Locked)</option>
          </Select>
          <Select className="w-[160px] bg-background/50">
            <option value="">All Companies</option>
            <option value="tech">Al Maha Tech</option>
          </Select>
          <Select className="w-[140px] bg-background/50">
            <option value="">All Branches</option>
            <option value="hq">Dubai HQ</option>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </Card>

      {/* Data Table */}
      <Card className="flex-1 overflow-hidden flex flex-col shadow-lg border-primary/10">
        <div className="flex-1 overflow-auto bg-surface">
          <table className="w-full text-left whitespace-nowrap text-xs">
            <thead className="bg-background sticky top-0 z-10 shadow-sm border-b border-primary/10 font-bold text-primary/60 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="px-4 py-4 border-r border-primary/5">
                  Employee
                </th>
                <th className="px-4 py-4 text-right">Base Salary</th>
                <th className="px-4 py-4 text-right">Att. Impact</th>
                <th className="px-4 py-4 text-right">Comm.</th>
                <th className="px-4 py-4 text-right">Bonus</th>
                <th className="px-4 py-4 text-right">Loan Ded.</th>
                <th className="px-4 py-4 text-right">Asset/Other</th>
                <th className="px-4 py-4 text-right">Late Pen.</th>
                <th className="px-4 py-4 text-right font-black text-accent bg-accent/5">
                  Net Payable
                </th>
                <th className="px-4 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5 font-mono">
              {mockPayroll.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-primary/5 group cursor-pointer"
                  onClick={() => navigate(`/payroll/details/${row.id}`)}
                >
                  <td className="px-4 py-3 border-r border-primary/5 font-sans">
                    <div className="font-bold text-primary text-sm">
                      {row.name}
                    </div>
                    <div className="text-[10px] text-primary/50">{row.id}</div>
                  </td>
                  <td className="px-4 py-3 text-right">
                    {row.base.toLocaleString()}
                  </td>
                  <td
                    className={`px-4 py-3 text-right ${row.attImpact < 0 ? "text-destructive font-bold" : ""}`}
                  >
                    {row.attImpact < 0 ? row.attImpact : "-"}
                  </td>
                  <td className="px-4 py-3 text-right text-success font-bold">
                    {row.comm > 0 ? `+${row.comm.toLocaleString()}` : "-"}
                  </td>
                  <td className="px-4 py-3 text-right text-success">
                    {row.bonus > 0 ? `+${row.bonus.toLocaleString()}` : "-"}
                  </td>
                  <td className="px-4 py-3 text-right text-destructive">
                    {row.loan < 0 ? row.loan.toLocaleString() : "-"}
                  </td>
                  <td className="px-4 py-3 text-right text-destructive">
                    {row.asset < 0 ? row.asset.toLocaleString() : "-"}
                  </td>
                  <td className="px-4 py-3 text-right text-warning font-bold">
                    {row.late < 0 ? row.late.toLocaleString() : "-"}
                  </td>
                  <td className="px-4 py-3 text-right text-sm font-black text-accent bg-accent/5">
                    {row.net.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/payroll/details/${row.id}`);
                      }}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* Totals Footer */}
            <tfoot className="sticky bottom-0 bg-background border-t-2 border-primary/20 font-bold shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
              <tr className="font-mono text-[11px]">
                <td className="px-4 py-4 border-r border-primary/5 font-sans text-right">
                  TOTAL (PAGE)
                </td>
                <td className="px-4 py-4 text-right">60,500</td>
                <td className="px-4 py-4 text-right text-destructive">
                  -1,250
                </td>
                <td className="px-4 py-4 text-right text-success">+11,000</td>
                <td className="px-4 py-4 text-right text-success">+2,000</td>
                <td className="px-4 py-4 text-right text-destructive">
                  -3,500
                </td>
                <td className="px-4 py-4 text-right text-destructive">-500</td>
                <td className="px-4 py-4 text-right text-warning">-350</td>
                <td className="px-4 py-4 text-right text-[13px] font-black text-accent bg-accent/5">
                  67,900
                </td>
                <td className="px-4 py-4"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </Card>
    </div>
  );
}
