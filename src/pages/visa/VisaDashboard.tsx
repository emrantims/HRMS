import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FileCheck,
  AlertTriangle,
  Clock,
  Users,
  RefreshCcw,
  FileX,
  ArrowRight,
  Bell,
  CalendarClock,
  ShieldAlert,
  FileText,
  Mail,
  CheckCircle2,
  X
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
  AreaChart,
  Area,
} from "recharts";

const statusData = [
  { name: "Active (Valid)", value: 450 },
  { name: "Expiring Soon", value: 45 },
  { name: "Under Process", value: 35 },
  { name: "Cancelled", value: 120 },
];
const STATUS_COLORS = ["#10b981", "#f59e0b", "#3b82f6", "#ef4444"];

const expiryTimeline = [
  { month: "Nov", expiries: 12 },
  { month: "Dec", expiries: 28 },
  { month: "Jan", expiries: 45 },
  { month: "Feb", expiries: 15 },
  { month: "Mar", expiries: 30 },
  { month: "Apr", expiries: 22 },
];

const expiringVisas = [
  { id: "EMP-21-0089", name: "Elena Rostova", type: "Investor", expiry: "Dec 05, 2024", daysLeft: 16 },
  { id: "EMP-23-0104", name: "Mohammed Tariq", type: "Employment", expiry: "Dec 12, 2024", daysLeft: 23 },
  { id: "EMP-24-0044", name: "Sara Malik", type: "Dependent", expiry: "Dec 18, 2024", daysLeft: 29 },
];

export default function VisaDashboard() {
  const [showEmailToast, setShowEmailToast] = useState(false);
  const [emailedIds, setEmailedIds] = useState<string[]>([]);
  const [showAlerts, setShowAlerts] = useState(true);

  const handleSendEmail = (id: string | "all") => {
    if (id === "all") {
      setEmailedIds(expiringVisas.map(v => v.id));
    } else {
      setEmailedIds(prev => [...prev, id]);
    }
    setShowEmailToast(true);
    setTimeout(() => {
      setShowEmailToast(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col h-full gap-6 w-full pb-10">
      {/* Toast Notification */}
      {showEmailToast && (
        <div className="fixed bottom-4 right-4 bg-success text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 z-50 animate-in fade-in slide-in-from-bottom-4">
          <CheckCircle2 className="w-5 h-5" />
          <div>
            <p className="font-bold text-sm">Alert Sent</p>
            <p className="text-xs text-white/80">Notification email triggered successfully to HR & PRO.</p>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">
            Visa & Immigration
          </h1>
          <p className="text-primary/60 text-sm mt-1">
            Manage employee visas, residencies, and corporate PRO compliance
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/visa/new">
            <Button variant="accent" className="gap-2">
              <FileCheck className="w-4 h-4" /> Start New Visa
            </Button>
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 shrink-0">
        <MetricCard
          title="Active Visas"
          value="450"
          subtext="Current valid residencies"
        />
        <MetricCard
          title="Expiring Soon"
          value="45"
          subtext="Within next 60 days"
          highlight
        />
        <MetricCard
          title="Renewals Process"
          value="18"
          subtext="Pending approval"
        />
        <MetricCard
          title="New Visas"
          value="35"
          subtext="Currently under process"
        />
        <MetricCard
          title="Cancelled"
          value="120"
          subtext="Historical tracking"
        />
        <Card className="p-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-primary text-white flex flex-col justify-center border-none shadow-lg">
          <p className="text-[10px] uppercase font-bold tracking-wider text-white/70">
            Critical Abscond
          </p>
          <h3 className="text-2xl font-black mt-1 text-destructive">
            2 <span className="text-sm font-medium text-white/80">cases</span>
          </h3>
          <p className="text-[10px] text-white/50 mt-1">
            Require immediate legal action
          </p>
        </Card>
      </div>

      {/* Quick Navigation Panel */}
      <Card className="bg-surface shadow-sm sticky top-0 z-20 shrink-0">
        <CardContent className="p-4 flex gap-4 overflow-x-auto no-scrollbar">
          <Link to="/visa/list">
            <Button
              variant="outline"
              className="gap-2 bg-background whitespace-nowrap"
            >
              <Users className="w-4 h-4" /> Visa Directory
            </Button>
          </Link>
          <div className="w-px h-8 bg-primary/10 self-center hidden md:block"></div>
          <Link to="/visa/alerts">
            <Button
              variant="outline"
              className="gap-2 bg-background whitespace-nowrap items-center relative"
            >
              <Bell className="w-4 h-4" /> Smart Alerts
              <span className="absolute -top-2 -right-2 bg-warning text-primary text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold shadow">
                12
              </span>
            </Button>
          </Link>
          <Link to="/visa/documents">
            <Button
              variant="outline"
              className="gap-2 bg-background whitespace-nowrap"
            >
              <FileText className="w-4 h-4" /> PRO Documents
            </Button>
          </Link>
          <div className="w-px h-8 bg-primary/10 self-center hidden md:block"></div>
          <Link to="/visa/abscond/active">
            <Button
              variant="outline"
              className="gap-2 bg-background whitespace-nowrap text-destructive hover:bg-destructive/10 border-destructive/20"
            >
              <ShieldAlert className="w-4 h-4" /> Abscond Tracker
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* 30-Day Warning Alerts */}
      {showAlerts && expiringVisas.length > 0 && (
        <Card className="border-warning/30 shadow-md bg-warning/5 shrink-0 animate-in fade-in">
          <CardHeader className="border-b border-warning/10 pb-3 flex flex-row items-center justify-between">
            <CardTitle className="text-sm flex items-center gap-2 text-warning-foreground">
              <AlertTriangle className="w-5 h-5 text-warning" />
              Critical Alerts: Visas Expiring Within 30 Days ({expiringVisas.length})
            </CardTitle>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="h-8 text-xs bg-white text-primary hover:bg-primary/5 gap-2"
                onClick={() => handleSendEmail("all")}
                disabled={emailedIds.length === expiringVisas.length}
              >
                <Mail className="w-3.5 h-3.5" /> 
                {emailedIds.length === expiringVisas.length ? "All Alerts Sent" : "Email All PROs"}
              </Button>
              <button onClick={() => setShowAlerts(false)} className="text-warning-foreground/60 hover:text-warning-foreground"><X className="w-4 h-4"/></button>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {expiringVisas.map((visa) => (
                <div key={visa.id} className="bg-white border border-warning/20 rounded-lg p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                       <h4 className="font-bold text-primary">{visa.name}</h4>
                       <span className="text-[10px] font-bold bg-warning/10 text-warning px-2 py-0.5 rounded uppercase tracking-wider">{visa.daysLeft} Days Left</span>
                    </div>
                    <p className="text-xs text-primary/60 font-mono mb-1">{visa.id} • {visa.type}</p>
                    <p className="text-xs text-primary/60 font-medium">Expires: {visa.expiry}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 pt-3 border-t border-primary/5">
                     <Link to={`/visa/renew/${visa.id}`} className="flex-1">
                        <Button variant="accent" size="sm" className="w-full text-xs h-8">Renew Now</Button>
                     </Link>
                     <Button 
                        variant="outline" 
                        size="icon" 
                        className={`h-8 w-8 ${emailedIds.includes(visa.id) ? 'bg-success/10 text-success border-success/30' : 'text-primary/60 hover:text-primary'}`}
                        onClick={() => handleSendEmail(visa.id)}
                        disabled={emailedIds.includes(visa.id)}
                        title="Send email alert to HR/Manager"
                     >
                        {emailedIds.includes(visa.id) ? <CheckCircle2 className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
                     </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 min-h-[400px]">
        {/* Visa Status Distribution */}
        <Card className="flex flex-col">
          <CardHeader className="border-b border-primary/5 pb-4">
            <CardTitle>Visa Status Distribution</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 p-6 flex flex-col items-center justify-center">
            <div className="h-[220px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={85}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {statusData.map((entry, index) => (
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
            <div className="w-full mt-6 space-y-2">
              {statusData.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2.5 h-2.5 rounded-sm"
                      style={{ backgroundColor: STATUS_COLORS[i] }}
                    ></div>
                    <span className="text-primary/70">{item.name}</span>
                  </div>
                  <span className="font-bold font-mono">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Expiry Timeline Dashboard */}
        <Card className="flex flex-col xl:col-span-2">
          <CardHeader className="border-b border-primary/5 pb-4">
            <CardTitle>Upcoming Expiries (Next 6 Months)</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 p-4 pt-6">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={expiryTimeline}
                margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="colorExpiries"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
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
                />
                <RechartsTooltip
                  cursor={{ fill: "#38193205" }}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    fontSize: "12px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="expiries"
                  stroke="#f59e0b"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorExpiries)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
