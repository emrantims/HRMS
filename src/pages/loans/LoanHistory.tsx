import React from "react";
import { Landmark, Search, Filter, Download } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";

const mockHistory = [
  {
    id: "L-2023-112",
    emp: "Sarah Connor",
    code: "EMP-23-0145",
    type: "Salary Advance",
    amount: 5000,
    start: "Jan 2023",
    end: "May 2023",
    status: "Closed",
  },
  {
    id: "L-2023-085",
    emp: "Ahmed Ali",
    code: "EMP-24-0012",
    type: "Personal Loan",
    amount: 20000,
    start: "Mar 2023",
    end: "Feb 2024",
    status: "Closed",
  },
  {
    id: "L-2022-044",
    emp: "Fatima Balooshi",
    code: "EMP-23-0402",
    type: "Emergency Funds",
    amount: 3000,
    start: "Sep 2022",
    end: "Nov 2022",
    status: "Closed",
  },
];

export default function LoanHistory() {
  return (
    <div className="flex flex-col h-full gap-6 w-full pb-10">
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">
            Loan History & Archives
          </h1>
          <p className="text-primary/60 text-sm mt-1">
            Review fully paid and closed loans
          </p>
        </div>
      </div>

      <Card className="shrink-0 bg-surface">
        <div className="p-4 flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-primary/40" />
            <Input
              placeholder="Search employee..."
              className="pl-9 bg-background/50"
            />
          </div>
          <Select className="w-[180px] bg-background/50">
            <option value="">All Companies</option>
            <option value="tech">Al Maha Tech</option>
          </Select>
          <Select className="w-[180px] bg-background/50">
            <option value="2024">Year: 2024</option>
            <option value="2023">Year: 2023</option>
          </Select>
          <Button variant="outline" className="gap-2 ml-auto text-primary">
            <Download className="w-4 h-4" /> Export Register
          </Button>
        </div>
      </Card>

      <Card className="flex-1 overflow-hidden flex flex-col shadow-lg border-primary/10">
        <div className="flex-1 overflow-auto bg-surface">
          <table className="w-full text-left whitespace-nowrap text-sm">
            <thead className="bg-background sticky top-0 shadow-sm text-[10px] uppercase font-bold text-primary/50 tracking-widest">
              <tr>
                <th className="px-6 py-4">Loan ID</th>
                <th className="px-6 py-4">Employee</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4 text-right">Total Amount</th>
                <th className="px-6 py-4 text-center">Duration</th>
                <th className="px-6 py-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5 font-mono text-sm opacity-80">
              {mockHistory.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-primary/5 group cursor-pointer grayscale group-hover:grayscale-0 transition-all"
                >
                  <td className="px-6 py-3 font-bold text-primary/60 group-hover:text-primary transition-colors">
                    {row.id}
                  </td>
                  <td className="px-6 py-3 font-sans">
                    <div className="font-bold text-primary text-sm">
                      {row.emp}
                    </div>
                    <div className="text-[10px] text-primary/50">
                      {row.code}
                    </div>
                  </td>
                  <td className="px-6 py-3 font-sans">
                    <Badge variant="outline" className="text-[9px]">
                      {row.type}
                    </Badge>
                  </td>
                  <td className="px-6 py-3 text-right font-bold text-primary">
                    AED {row.amount.toLocaleString()}
                  </td>
                  <td className="px-6 py-3 text-center text-xs text-primary/60 font-sans">
                    <span className="font-bold">{row.start}</span> -{" "}
                    <span className="font-bold">{row.end}</span>
                  </td>
                  <td className="px-6 py-3 text-center font-sans">
                    <Badge
                      variant="success"
                      className="bg-success/10 text-success border-success/20 hover:bg-success/20"
                    >
                      {row.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
