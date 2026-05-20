import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { AnalyticsNav } from './AnalyticsNav';
import { 
  Users, DollarSign, Briefcase, FileCheck, AlertTriangle, 
  TrendingUp, TrendingDown, Clock, Laptop
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from 'recharts';
import { Link } from 'react-router-dom';

const EMP_TREND = [
  { month: 'Jan', total: 1100, active: 1050 },
  { month: 'Feb', total: 1150, active: 1100 },
  { month: 'Mar', total: 1180, active: 1120 },
  { month: 'Apr', total: 1210, active: 1150 },
  { month: 'May', total: 1250, active: 1180 },
  { month: 'Jun', total: 1300, active: 1220 },
];

const PAYROLL_TREND = [
  { month: 'Jan', amount: 3.2 },
  { month: 'Feb', amount: 3.4 },
  { month: 'Mar', amount: 3.5 },
  { month: 'Apr', amount: 3.6 },
  { month: 'May', amount: 3.8 },
  { month: 'Jun', amount: 4.1 },
];

const CO_DISTRIBUTION = [
  { name: 'Tech Solutions', value: 450 },
  { name: 'Trading Group', value: 300 },
  { name: 'Logistics Pro', value: 250 },
  { name: 'Retail Corp', value: 200 },
];
const COLORS = ['#004643', '#381932', '#764ba2', '#667eea'];

export default function ExecutiveOverview() {
  return (
    <div className="flex flex-col h-full w-full pb-10 max-w-[1400px] mx-auto">
      <AnalyticsNav />

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-primary">Executive Overview</h1>
          <p className="text-sm text-primary/60 mt-1">High-level group performance and critical risk alerts.</p>
        </div>
        <div className="flex gap-2">
          <select className="border border-primary/20 rounded-md text-sm px-3 py-2 bg-white">
            <option>All Companies</option>
            <option>Tech Solutions</option>
            <option>Trading Group</option>
          </select>
          <select className="border border-primary/20 rounded-md text-sm px-3 py-2 bg-white">
            <option>Last 6 Months</option>
            <option>Year to Date</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-6">
         {[
           { label: 'Total Employees', value: '1,300', icon: Users, trend: '+4%', isUp: true },
           { label: 'Monthly Payroll', value: '4.1M', icon: DollarSign, trend: '+8%', isUp: true, prefix: 'AED' },
           { label: 'O/S Loans', value: '850K', icon: Briefcase, trend: '-2%', isUp: false, prefix: 'AED' },
           { label: 'Asset Value', value: '2.4M', icon: Laptop, trend: '+1%', isUp: true, prefix: 'AED' },
         ].map((stat, i) => (
           <Card key={i} className="col-span-2">
             <CardContent className="p-5 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                   <div className="text-sm font-bold text-primary/60">{stat.label}</div>
                   <div className="p-2 bg-primary/5 rounded-md"><stat.icon className="w-4 h-4 text-primary" /></div>
                </div>
                <div className="flex items-end justify-between">
                   <div className="text-2xl font-bold text-primary">
                     {stat.prefix && <span className="text-sm font-normal text-primary/60 mr-1">{stat.prefix}</span>}
                     {stat.value}
                   </div>
                   <div className={`text-xs font-bold flex items-center gap-1 ${stat.isUp ? 'text-success' : 'text-danger'}`}>
                     {stat.trend} {stat.isUp ? <TrendingUp className="w-3 h-3"/> : <TrendingDown className="w-3 h-3"/>}
                   </div>
                </div>
             </CardContent>
           </Card>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        
        {/* Alerts Section - Crucial for Executives */}
        <Card className="lg:col-span-3 border-danger/20 bg-danger/5">
          <CardContent className="p-0 flex flex-col md:flex-row division-x divide-danger/10">
             <div className="p-6 md:w-64 flex-shrink-0 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-danger font-bold mb-2">
                  <AlertTriangle className="w-5 h-5"/> Action Required
                </div>
                <p className="text-xs text-danger-800 opacity-80">System detected anomalies requiring executive attention or escalation.</p>
             </div>
             <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-0 divide-x divide-danger/10">
                <Link to="/analytics/visa" className="p-4 hover:bg-white/50 transition-colors flex flex-col justify-center group relative overflow-hidden">
                   <div className="text-danger-800 text-xs font-bold uppercase tracking-wider mb-1">Visa Renewals Pending</div>
                   <div className="text-3xl font-bold text-danger">24</div>
                   <div className="absolute right-[-10px] bottom-[-10px] opacity-10 group-hover:opacity-20 transition-opacity"><FileCheck className="w-16 h-16"/></div>
                </Link>
                <Link to="/analytics/attendance" className="p-4 hover:bg-white/50 transition-colors flex flex-col justify-center group relative overflow-hidden">
                   <div className="text-danger-800 text-xs font-bold uppercase tracking-wider mb-1">Severe Lates</div>
                   <div className="text-3xl font-bold text-danger">18</div>
                   <div className="absolute right-[-10px] bottom-[-10px] opacity-10 group-hover:opacity-20 transition-opacity"><Clock className="w-16 h-16"/></div>
                </Link>
                <Link to="/analytics/exit" className="p-4 hover:bg-white/50 transition-colors flex flex-col justify-center group relative overflow-hidden">
                   <div className="text-danger-800 text-xs font-bold uppercase tracking-wider mb-1">Abscond Cases</div>
                   <div className="text-3xl font-bold text-danger">3</div>
                   <div className="absolute right-[-10px] bottom-[-10px] opacity-10 group-hover:opacity-20 transition-opacity"><AlertTriangle className="w-16 h-16"/></div>
                </Link>
                <Link to="/automation/approvals" className="p-4 hover:bg-white/50 transition-colors flex flex-col justify-center group relative overflow-hidden">
                   <div className="text-warning-800 text-xs font-bold uppercase tracking-wider mb-1">Pending Exec Approvals</div>
                   <div className="text-3xl font-bold text-warning-800">5</div>
                   <div className="absolute right-[-10px] bottom-[-10px] opacity-10 group-hover:opacity-20 transition-opacity"><FileCheck className="w-16 h-16"/></div>
                </Link>
             </div>
          </CardContent>
        </Card>

        {/* Charts */}
        <Card className="lg:col-span-2">
          <CardHeader>
             <CardTitle className="text-lg">Workforce Growth Trend</CardTitle>
             <CardDescription>Total headcount vs active headcount</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={EMP_TREND}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#381932" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#381932" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#004643" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#004643" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Legend verticalAlign="top" height={36} iconType="circle" />
                <Area type="monotone" dataKey="total" name="Total Headcount" stroke="#381932" fillOpacity={1} fill="url(#colorTotal)" strokeWidth={2} />
                <Area type="monotone" dataKey="active" name="Active Headcount" stroke="#004643" fillOpacity={1} fill="url(#colorActive)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-1">
          <CardHeader>
             <CardTitle className="text-lg">Company Distribution</CardTitle>
             <CardDescription>Employee headcount by entity</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px] flex flex-col pb-6">
             <ResponsiveContainer width="100%" height="80%">
                <PieChart>
                  <Pie
                    data={CO_DISTRIBUTION}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {CO_DISTRIBUTION.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                </PieChart>
             </ResponsiveContainer>
             <div className="flex flex-wrap justify-center gap-3 mt-auto">
               {CO_DISTRIBUTION.map((entry, index) => (
                 <div key={entry.name} className="flex items-center gap-1.5 text-xs">
                   <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                   <span className="text-primary/70">{entry.name}</span>
                 </div>
               ))}
             </div>
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between">
             <div>
               <CardTitle className="text-lg">Group Payroll Cost Trend</CardTitle>
               <CardDescription>Monthly payroll expenditure across all entities (in Millions AED)</CardDescription>
             </div>
             <Link to="/analytics/drill-down" className="text-xs font-bold text-accent hover:underline">Drill-Down Analysis &rarr;</Link>
          </CardHeader>
          <CardContent className="h-[250px]">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PAYROLL_TREND} barSize={40}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} tickFormatter={(v) => `AED ${v}M`} />
                <Tooltip cursor={{fill: '#f1f5f9'}} contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} formatter={(value) => [`AED ${value}M`, 'Payroll']} />
                <Bar dataKey="amount" fill="#381932" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
