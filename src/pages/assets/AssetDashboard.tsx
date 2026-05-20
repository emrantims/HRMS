import React from "react";
import { Link } from "react-router-dom";
import {
  Laptop,
  Plus,
  Smartphone,
  CreditCard,
  Car,
  Monitor,
  Search,
  ArrowRight,
  ShieldAlert,
  Activity,
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
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const typeData = [
  { name: "Laptops", value: 350 },
  { name: "Mobiles", value: 200 },
  { name: "Vehicles", value: 45 },
  { name: "Access Cards", value: 410 },
  { name: "SIM Cards", value: 380 },
];
const COLORS = ["#004643", "#381932", "#f59e0b", "#10b981", "#3b82f6"];

const distributionData = [
  { name: "Available", value: 240 },
  { name: "Assigned", value: 1100 },
  { name: "Maintenance", value: 25 },
  { name: "Lost/Damaged", value: 20 },
];
const STATUS_COLORS = ["#10b981", "#004643", "#f59e0b", "#ef4444"];

export default function AssetDashboard() {
  return (
    <div className="flex flex-col h-full gap-6 w-full pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">
            Assets Management
          </h1>
          <p className="text-primary/60 text-sm mt-1">
            Track and manage company-issued properties across all branches
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/assets/create">
            <Button variant="outline" className="gap-2 bg-surface">
              <Plus className="w-4 h-4" /> Add Asset
            </Button>
          </Link>
          <Link to="/assets/assign">
            <Button variant="accent" className="gap-2">
              <ArrowRight className="w-4 h-4" /> Issue Asset
            </Button>
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 shrink-0">
        <MetricCard
          title="Total Assets"
          value="1,385"
          subtext="Across all categories"
        />
        <MetricCard
          title="Assigned"
          value="1,100"
          subtext="In active use"
          highlight
        />
        <MetricCard
          title="Available in Stock"
          value="240"
          subtext="Ready for issue"
        />
        <MetricCard
          title="Under Maintenance"
          value="25"
          subtext="Pending repairs"
        />
        <MetricCard
          title="Lost or Damaged"
          value="20"
          subtext="Requires action"
        />
        <Card className="p-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-primary text-white flex flex-col justify-center border-none shadow-lg">
          <p className="text-[10px] uppercase font-bold tracking-wider text-white/70">
            Pending Returns
          </p>
          <h3 className="text-2xl font-black mt-1 text-warning">
            14 <span className="text-sm font-medium text-white/80">assets</span>
          </h3>
          <p className="text-[10px] text-white/50 mt-1">
            From exiting employees
          </p>
        </Card>
      </div>

      {/* Quick Navigation Panel */}
      <Card className="bg-surface shadow-sm sticky top-0 z-20 shrink-0">
        <CardContent className="p-4 flex gap-4 overflow-x-auto no-scrollbar">
          <Link to="/assets/inventory">
            <Button
              variant="outline"
              className="gap-2 bg-background whitespace-nowrap"
            >
              <Laptop className="w-4 h-4" /> Inventory
            </Button>
          </Link>
          <div className="w-px h-8 bg-primary/10 self-center hidden md:block"></div>
          <Link to="/assets/assign">
            <Button
              variant="outline"
              className="gap-2 bg-background whitespace-nowrap"
            >
              <ArrowRight className="w-4 h-4" /> Issue to Employee
            </Button>
          </Link>
          <Link to="/assets/return">
            <Button
              variant="outline"
              className="gap-2 bg-background whitespace-nowrap"
            >
              <Search className="w-4 h-4" /> Return Process
            </Button>
          </Link>
          <div className="w-px h-8 bg-primary/10 self-center hidden md:block"></div>
          <Link to="/assets/damage">
            <Button
              variant="outline"
              className="gap-2 bg-background whitespace-nowrap"
            >
              <ShieldAlert className="w-4 h-4" /> Report Damage
            </Button>
          </Link>
          <Link to="/assets/maintenance">
            <Button
              variant="outline"
              className="gap-2 bg-background whitespace-nowrap"
            >
              <Activity className="w-4 h-4" /> Maintenance log
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[400px]">
        {/* Asset Distribution by Type */}
        <Card className="flex flex-col">
          <CardHeader className="border-b border-primary/5 pb-4">
            <CardTitle>Asset Distribution by Type</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 p-4 pt-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={typeData}
                layout="vertical"
                margin={{ top: 0, right: 0, left: 20, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  stroke="#38193215"
                />
                <YAxis
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#38193280", fontWeight: "bold" }}
                />
                <XAxis
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#38193280" }}
                />
                <RechartsTooltip
                  cursor={{ fill: "#38193205" }}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "1px solid #38193210",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="value" fill="#004643" radius={[0, 4, 4, 0]}>
                  {typeData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Assignment vs Availability Ratio */}
        <Card className="flex flex-col">
          <CardHeader className="border-b border-primary/5 pb-4">
            <CardTitle>Asset Status Overview</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 p-6 flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="h-[250px] w-[250px] shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {distributionData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={STATUS_COLORS[index % STATUS_COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <RechartsTooltip
                    contentStyle={{
                      borderRadius: "8px",
                      border: "none",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 w-full space-y-3">
              {distributionData.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-sm p-2 rounded hover:bg-primary/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-sm shadow-sm"
                      style={{ backgroundColor: STATUS_COLORS[i] }}
                    ></div>
                    <span className="text-primary/70 font-semibold">
                      {item.name}
                    </span>
                  </div>
                  <span className="font-bold font-mono text-primary">
                    {item.value.toLocaleString()}
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
