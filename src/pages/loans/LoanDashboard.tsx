import React from "react";
import { Link } from "react-router-dom";
import {
  Banknote,
  FileCheck,
  Landmark,
  PiggyBank,
  Receipt,
  TrendingDown,
  HandCoins,
  AlertCircle,
  PlayCircle,
  Plus,
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
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const companyData = [
  { name: "Al Maha Tech", value: 450000 },
  { name: "Emirates Real Estate", value: 280000 },
  { name: "Desert Logistics", value: 120000 },
  { name: "Gulf Trading", value: 300000 },
];
const COLORS = ["#004643", "#381932", "#f59e0b", "#10b981"];

const repaymentData = [
  { month: "May", Collected: 65000 },
  { month: "Jun", Collected: 72000 },
  { month: "Jul", Collected: 68000 },
  { month: "Aug", Collected: 85000 },
  { month: "Sep", Collected: 92000 },
  { month: "Oct", Collected: 95000 },
];

export default function LoanDashboard() {
  return (
    <div className="flex flex-col h-full gap-6 w-full pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">
            Loans & Advances
          </h1>
          <p className="text-primary/60 text-sm mt-1">
            Manage employee personal loans, salary advances, and recovery
            schedules
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/loans/request">
            <Button variant="accent" className="gap-2">
              <Plus className="w-4 h-4" /> New Loan Request
            </Button>
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 shrink-0">
        <MetricCard
          title="Active Loans"
          value="142"
          subtext="Across all branches"
        />
        <MetricCard
          title="Total Disbursed"
          value="AED 1.15M"
          subtext="Active loan total"
          highlight
        />
        <MetricCard
          title="Total Outstanding"
          value="AED 480k"
          subtext="Remaining recovery"
        />
        <MetricCard
          title="Monthly Deduction"
          value="AED 95k"
          subtext="Oct 2024 projection"
        />
        <MetricCard
          title="Pending Approvals"
          value="8"
          subtext="Requires HR review"
          highlight
        />
        <Card className="p-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-primary text-white flex flex-col justify-center border-none shadow-lg">
          <p className="text-[10px] uppercase font-bold tracking-wider text-white/70">
            Fully Paid This Month
          </p>
          <h3 className="text-2xl font-black mt-1 text-accent">
            12 <span className="text-sm font-medium text-white/80">loans</span>
          </h3>
          <p className="text-[10px] text-white/50 mt-1">Recovered in full</p>
        </Card>
      </div>

      {/* Quick Navigation Panel */}
      <Card className="bg-surface shadow-sm sticky top-0 z-20 shrink-0">
        <CardContent className="p-4 flex gap-4 overflow-x-auto no-scrollbar">
          <Link to="/loans/request">
            <Button
              variant="outline"
              className="gap-2 bg-background whitespace-nowrap"
            >
              <HandCoins className="w-4 h-4" /> Request Loan
            </Button>
          </Link>
          <div className="w-px h-8 bg-primary/10 self-center hidden md:block"></div>
          <Link to="/loans/approvals">
            <Button
              variant="outline"
              className="gap-2 bg-background whitespace-nowrap relative"
            >
              <FileCheck className="w-4 h-4" /> Approvals
              <span className="absolute -top-2 -right-2 bg-destructive text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                8
              </span>
            </Button>
          </Link>
          <div className="w-px h-8 bg-primary/10 self-center hidden md:block"></div>
          <Link to="/loans/preview">
            <Button
              variant="outline"
              className="gap-2 bg-background whitespace-nowrap"
            >
              <PlayCircle className="w-4 h-4" /> Payroll Sync Preview
            </Button>
          </Link>
          <Link to="/loans/employee/EMP-23-0145">
            <Button
              variant="outline"
              className="gap-2 bg-background whitespace-nowrap"
            >
              <Receipt className="w-4 h-4" /> Employee Profiles
            </Button>
          </Link>
          <Link to="/loans/history">
            <Button
              variant="outline"
              className="gap-2 bg-background whitespace-nowrap"
            >
              <Landmark className="w-4 h-4" /> Loan History
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-[400px]">
        {/* Recovery Progress Chart */}
        <Card className="flex flex-col lg:col-span-2">
          <CardHeader className="border-b border-primary/5 pb-4">
            <CardTitle>Monthly Recovery Progress</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 p-4 pt-6">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={repaymentData}
                margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="colorCollected"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
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
                  dataKey="month"
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
                  dataKey="Collected"
                  stroke="#004643"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorCollected)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Company Distribution */}
        <Card className="flex flex-col">
          <CardHeader className="border-b border-primary/5 pb-4">
            <CardTitle>Outstanding by Company</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 p-6 flex flex-col items-center justify-center">
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={companyData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {companyData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      borderRadius: "8px",
                      border: "none",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full mt-4 space-y-2">
              {companyData.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2.5 h-2.5 rounded-sm"
                      style={{ backgroundColor: COLORS[i] }}
                    ></div>
                    <span className="text-primary/70">{item.name}</span>
                  </div>
                  <span className="font-bold font-mono">
                    AED {(item.value / 1000).toLocaleString()}k
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
