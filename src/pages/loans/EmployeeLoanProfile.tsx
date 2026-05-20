import React from "react";
import {
  ArrowLeft,
  Clock,
  CalendarCheck,
  FileText,
  Banknote,
  ShieldCheck,
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

const scheduleData = [
  { month: "Oct 2024", amount: 1500, status: "Paid", balance: 6000 },
  { month: "Nov 2024", amount: 1500, status: "Paid", balance: 4500 },
  { month: "Dec 2024", amount: 1500, status: "Pending", balance: 3000 },
  { month: "Jan 2025", amount: 1500, status: "Pending", balance: 1500 },
  { month: "Feb 2025", amount: 1500, status: "Pending", balance: 0 },
];

export default function EmployeeLoanProfile() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="flex flex-col h-full gap-6 max-w-5xl mx-auto w-full pb-10">
      {/* Action Bar */}
      <div className="flex items-center justify-between shrink-0 mb-2">
        <Button
          variant="ghost"
          className="gap-2 -ml-3"
          onClick={() => navigate("/loans")}
        >
          <ArrowLeft className="w-4 h-4" /> Back to Loans
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 bg-surface text-primary">
            <FileText className="w-4 h-4" /> Download Statement
          </Button>
          <Button
            variant="accent"
            className="gap-2"
            onClick={() => navigate(`/loans/settlement/${id || "EMP-23-0145"}`)}
          >
            <Banknote className="w-4 h-4" /> Early Settlement
          </Button>
        </div>
      </div>

      {/* Brief Profile Header */}
      <div className="bg-surface rounded-2xl p-6 border border-primary/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 shrink-0">
        <div className="flex items-center gap-6">
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
              <span>Sales Executive</span>
              <span className="text-primary/30">•</span>
              <span className="font-mono text-accent font-bold">
                Base: AED 12,000
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-6 border-l border-primary/10 pl-6 text-right">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">
              Total Loans
            </p>
            <p className="font-bold text-lg">2</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">
              Active Balance
            </p>
            <p className="font-bold text-lg text-destructive font-mono">
              AED 4,500
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Loan List / History */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-primary/40 pl-1">
            Loan History
          </h3>

          <Card className="border-l-4 border-l-accent shadow-sm">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <Badge
                  variant="outline"
                  className="text-[9px] bg-accent/5 text-accent border-accent/20"
                >
                  Active
                </Badge>
                <span className="text-[10px] text-primary/50 font-mono">
                  L-2024-089
                </span>
              </div>
              <h4 className="font-bold text-primary">Personal Loan</h4>
              <div className="flex justify-between items-end mt-4">
                <div className="text-xs">
                  <p className="text-primary/60">
                    Total:{" "}
                    <span className="font-bold text-primary font-mono">
                      7,500
                    </span>
                  </p>
                  <p className="text-primary/60 mt-0.5">
                    Paid:{" "}
                    <span className="font-bold text-success font-mono">
                      3,000
                    </span>
                  </p>
                </div>
                <span className="text-xs font-bold text-primary/40">
                  Oct '24 - Feb '25
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="opacity-60 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="success" className="text-[9px]">
                  Closed
                </Badge>
                <span className="text-[10px] text-primary/50 font-mono">
                  L-2023-112
                </span>
              </div>
              <h4 className="font-bold text-primary">Salary Advance</h4>
              <div className="flex justify-between items-end mt-4">
                <div className="text-xs">
                  <p className="text-primary/60">
                    Total:{" "}
                    <span className="font-bold text-primary font-mono">
                      5,000
                    </span>
                  </p>
                </div>
                <span className="text-xs font-bold text-primary/40">
                  Jan '23 - May '23
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Repayment Schedule & Active Details */}
        <Card className="lg:col-span-2 shadow-sm border-primary/10 flex flex-col">
          <CardHeader className="border-b border-primary/5 pb-4 bg-surface flex flex-row items-center justify-between">
            <div>
              <CardTitle>Repayment Schedule</CardTitle>
              <p className="text-[10px] text-primary/50 mt-1 uppercase tracking-widest font-bold">
                Loan L-2024-089
              </p>
            </div>
            <Badge variant="outline" className="bg-background">
              <ShieldCheck className="w-3 h-3 mr-1" /> Syncs with Payroll
            </Badge>
          </CardHeader>
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-background sticky top-0 shadow-sm text-[10px] uppercase font-bold text-primary/50 tracking-widest">
                <tr>
                  <th className="px-6 py-4">Month</th>
                  <th className="px-6 py-4 text-right">Deduction (AED)</th>
                  <th className="px-6 py-4 text-center">Status</th>
                  <th className="px-6 py-4 text-right">Balance After (AED)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5 font-mono text-sm">
                {scheduleData.map((row, i) => (
                  <tr
                    key={i}
                    className={`hover:bg-primary/5 ${row.status === "Paid" ? "opacity-70 bg-primary/5" : ""}`}
                  >
                    <td className="px-6 py-4 font-sans font-bold text-primary">
                      {row.month}
                    </td>
                    <td className="px-6 py-4 text-right text-destructive font-bold">
                      {row.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-center font-sans">
                      {row.status === "Paid" ? (
                        <Badge variant="success" className="text-[10px]">
                          <CalendarCheck className="w-3 h-3 mr-1" /> Paid in
                          Payroll
                        </Badge>
                      ) : (
                        <Badge
                          variant="outline"
                          className="text-[10px] text-warning border-warning"
                        >
                          <Clock className="w-3 h-3 mr-1" /> Scheduled
                        </Badge>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-primary/60">
                      {row.balance.toLocaleString()}
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
