import React from "react";
import { History, Download, Calendar, Search } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";

const mockHistory = [
  {
    month: "September 2024",
    count: 1220,
    net: 1380500,
    date: "28 Sep 2024",
    status: "Paid",
  },
  {
    month: "August 2024",
    count: 1215,
    net: 1354000,
    date: "28 Aug 2024",
    status: "Paid",
  },
  {
    month: "July 2024",
    count: 1200,
    net: 1310000,
    date: "29 Jul 2024",
    status: "Paid",
  },
  {
    month: "June 2024",
    count: 1180,
    net: 1285000,
    date: "28 Jun 2024",
    status: "Paid",
  },
];

export default function PayrollHistory() {
  return (
    <div className="flex flex-col h-full gap-6 max-w-5xl mx-auto w-full pb-10">
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">
            Payroll History
          </h1>
          <p className="text-primary/60 text-sm mt-1">
            Access previous payroll runs and exported data
          </p>
        </div>
      </div>

      <Card className="shrink-0 bg-surface">
        <div className="p-4 flex flex-wrap items-center gap-4">
          <Select className="w-[180px] bg-background/50">
            <option value="2024">Year: 2024</option>
            <option value="2023">Year: 2023</option>
          </Select>
          <Select className="w-[180px] bg-background/50">
            <option value="">All Companies</option>
            <option value="tech">Al Maha Tech</option>
          </Select>
          <Select className="w-[180px] bg-background/50">
            <option value="all">All Statuses</option>
            <option value="paid">Paid</option>
          </Select>
          <Button variant="outline" className="gap-2 ml-auto text-primary">
            <Download className="w-4 h-4" /> Export Annual Report
          </Button>
        </div>
      </Card>

      <Card className="flex-1 overflow-hidden flex flex-col shadow-lg border-primary/10">
        <div className="flex-1 overflow-auto bg-surface">
          <table className="w-full text-left whitespace-nowrap text-sm">
            <thead className="bg-background sticky top-0 shadow-sm text-[10px] uppercase font-bold text-primary/50 tracking-widest">
              <tr>
                <th className="px-6 py-4">Payroll Month</th>
                <th className="px-6 py-4 text-center">Employees</th>
                <th className="px-6 py-4 text-right">Net Disbursed</th>
                <th className="px-6 py-4 text-center">Disbursement Date</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-right">Documents</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5 font-mono text-xs">
              {mockHistory.map((row, i) => (
                <tr key={i} className="hover:bg-primary/5 group">
                  <td className="px-6 py-4 font-sans font-bold text-primary text-sm flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary/40" /> {row.month}
                  </td>
                  <td className="px-6 py-4 text-center">{row.count}</td>
                  <td className="px-6 py-4 text-right font-bold">
                    AED {row.net.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-center text-primary/60">
                    {row.date}
                  </td>
                  <td className="px-6 py-4 text-center font-sans">
                    <Badge variant="success">{row.status}</Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-3 font-sans">
                      <span className="text-[10px] font-bold text-accent underline cursor-pointer hover:text-primary">
                        WPS File
                      </span>
                      <span className="text-[10px] font-bold text-accent underline cursor-pointer hover:text-primary">
                        Summary PDF
                      </span>
                    </div>
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
