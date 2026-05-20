import React from "react";
import { Link } from "react-router-dom";
import {
  Calculator,
  FileText,
  Gift,
  Percent,
  PlayCircle,
  ShieldCheck,
  Banknote,
  Landmark,
  History,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  MetricCard,
} from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const salaryTrendData = [
  { name: "May", Total: 1250000, Deductions: 45000 },
  { name: "Jun", Total: 1280000, Deductions: 50000 },
  { name: "Jul", Total: 1300000, Deductions: 48000 },
  { name: "Aug", Total: 1350000, Deductions: 62000 },
  { name: "Sep", Total: 1380000, Deductions: 55000 },
  { name: "Oct", Total: 1450000, Deductions: 58000 },
];

export default function PayrollDashboard() {
  return (
    <div className="flex flex-col h-full gap-6 w-full pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">
            Payroll Management
          </h1>
          <p className="text-primary/60 text-sm mt-1">
            Financial processing, commissions, and salary run
          </p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <MetricCard
          title="Employees in Payroll"
          value="1,245"
          subtext="Eligible for current cycle"
        />
        <MetricCard
          title="Est. Total Salary"
          value="AED 1.45M"
          subtext="For October 2024"
          highlight
        />
        <MetricCard
          title="Total Deductions"
          value="AED 58k"
          subtext="Loans & Late marks"
        />
        <MetricCard
          title="Total Commission"
          value="AED 112k"
          subtext="Sales performance"
        />
        <MetricCard
          title="Pending Approvals"
          value="2"
          subtext="Batches waiting"
          highlight
        />
        <Card className="p-4 bg-accent text-white flex flex-col justify-center border-none shadow-lg">
          <p className="text-[10px] uppercase font-bold text-white/70 tracking-wider">
            Payroll Status
          </p>
          <h3 className="text-xl font-bold mt-1">Unlocked</h3>
          <p className="text-[10px] text-white/50 mt-2">Oct 2024 Processing</p>
        </Card>
      </div>

      {/* Quick Navigation Panel */}
      <Card className="bg-surface shadow-sm sticky top-0 z-20">
        <CardContent className="p-4 flex gap-4 overflow-x-auto no-scrollbar">
          <Link to="/payroll/run">
            <Button variant="accent" className="gap-2 whitespace-nowrap">
              <PlayCircle className="w-4 h-4" /> Run Payroll
            </Button>
          </Link>
          <div className="w-px h-8 bg-primary/10 self-center hidden md:block"></div>
          <Link to="/payroll/commission">
            <Button
              variant="outline"
              className="gap-2 bg-background whitespace-nowrap"
            >
              <Percent className="w-4 h-4" /> Commission
            </Button>
          </Link>
          <Link to="/payroll/bonus">
            <Button
              variant="outline"
              className="gap-2 bg-background whitespace-nowrap"
            >
              <Gift className="w-4 h-4" /> Bonuses
            </Button>
          </Link>
          <Link to="/payroll/deductions">
            <Button
              variant="outline"
              className="gap-2 bg-background whitespace-nowrap"
            >
              <TrendingDown className="w-4 h-4" /> Deductions
            </Button>
          </Link>
          <Link to="/payroll/approvals">
            <Button
              variant="outline"
              className="gap-2 bg-background whitespace-nowrap"
            >
              <ShieldCheck className="w-4 h-4" /> Approvals
            </Button>
          </Link>
          <Link to="/payroll/history">
            <Button
              variant="outline"
              className="gap-2 bg-background whitespace-nowrap"
            >
              <History className="w-4 h-4" /> History
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[400px]">
        {/* Trend Chart */}
        <Card className="flex flex-col">
          <CardHeader className="border-b border-primary/5 pb-4 flex flex-row items-center justify-between">
            <CardTitle>Salary Disbursed Trend (6 Months)</CardTitle>
            <div className="flex gap-4 text-[10px] uppercase font-bold text-primary/60">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-accent"></div> Total
                Payout
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-destructive/50"></div>{" "}
                Deductions
              </span>
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-4 pt-6">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={salaryTrendData}
                margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#004643" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#004643" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#38193215"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#38193280" }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#38193280" }}
                  tickFormatter={(val) => `${val / 1000}k`}
                />
                <Tooltip
                  cursor={{ fill: "#38193205" }}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "1px solid #38193210",
                    fontSize: "12px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="Total"
                  stroke="#004643"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorTotal)"
                />
                <Area
                  type="monotone"
                  dataKey="Deductions"
                  stroke="#dc2626"
                  strokeWidth={2}
                  fillOpacity={0}
                  strokeDasharray="4 4"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Deductions Breakdown */}
        <Card className="flex flex-col">
          <CardHeader className="border-b border-primary/5 pb-4">
            <CardTitle>October Deductions Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 p-6 flex items-center justify-center gap-8 flex-wrap">
            <div className="w-full max-w-sm space-y-6">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-destructive"></div>
                    <span className="text-xs font-bold text-primary">
                      Loan Re-payments
                    </span>
                  </div>
                  <span className="text-sm font-mono font-bold">
                    AED 42,000
                  </span>
                </div>
                <div className="h-2 w-full bg-background rounded-full overflow-hidden">
                  <div className="h-full bg-destructive w-[70%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-end mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-warning"></div>
                    <span className="text-xs font-bold text-primary">
                      Late Penalties
                    </span>
                  </div>
                  <span className="text-sm font-mono font-bold">
                    AED 12,000
                  </span>
                </div>
                <div className="h-2 w-full bg-background rounded-full overflow-hidden">
                  <div className="h-full bg-warning w-[20%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-end mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                    <span className="text-xs font-bold text-primary">
                      Asset Deductions
                    </span>
                  </div>
                  <span className="text-sm font-mono font-bold">AED 4,000</span>
                </div>
                <div className="h-2 w-full bg-background rounded-full overflow-hidden">
                  <div className="h-full bg-primary/60 w-[10%]"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
