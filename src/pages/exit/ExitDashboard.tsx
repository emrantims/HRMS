import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import {
  Users,
  CheckCircle2,
  AlertTriangle,
  Clock,
  LogOut,
  FileText,
  UserX,
  Briefcase
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { Link } from 'react-router-dom';

const REASON_DATA = [
  { name: 'Resignation', value: 45 },
  { name: 'Termination', value: 15 },
  { name: 'Absconded', value: 5 },
  { name: 'End of Contract', value: 35 },
];

const COLORS = ['#004643', '#E11D48', '#D97706', '#2563EB'];

const MONTHLY_DATA = [
  { month: 'Jan', exits: 12 },
  { month: 'Feb', exits: 8 },
  { month: 'Mar', exits: 15 },
  { month: 'Apr', exits: 10 },
  { month: 'May', exits: 6 },
  { month: 'Jun', exits: 18 },
];

const RECENT_CASES = [
  { id: 'EXT-2024-089', employee: 'Ahmad Raza', type: 'Resignation', status: 'Pending Clearance', days: 12, dept: 'Engineering' },
  { id: 'EXT-2024-090', employee: 'Sarah Jenkins', type: 'Termination', status: 'Asset Return', days: 2, dept: 'Sales' },
  { id: 'EXT-2024-091', employee: 'Mohammed Ali', type: 'Absconded', status: 'Legal Action', days: 15, dept: 'Operations' },
  { id: 'EXT-2024-092', employee: 'Lisa Wang', type: 'End of Contract', status: 'Final Settlement', days: 5, dept: 'Marketing' },
];

export default function ExitDashboard() {
  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary">Exit & Final Settlement</h1>
          <p className="text-sm text-primary/60 mt-1">Manage employee offboarding, clearances, and settlements.</p>
        </div>
        <Link to="/exit/new">
          <Button variant="accent" className="gap-2">
            <LogOut className="w-4 h-4" />
            Initiate Exit
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {[
          { title: "Active Cases", value: "34", icon: Users, alert: false },
          { title: "Pending Clearances", value: "18", icon: Clock, alert: true },
          { title: "Settlements Pending", value: "12", icon: UserX, alert: true },
          { title: "Visas Pending Cancel", value: "8", icon: FileText, alert: true },
          { title: "Abscond Cases", value: "3", icon: AlertTriangle, alert: true },
          { title: "Completed (YTD)", value: "142", icon: CheckCircle2, alert: false },
        ].map((stat, i) => (
          <Card key={i} className={`border-primary/10 ${stat.alert ? 'bg-warning/5 border-warning/20' : 'bg-white'}`}>
            <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
              <stat.icon className={`w-6 h-6 mb-2 ${stat.alert ? 'text-warning' : 'text-accent'}`} />
              <p className="text-xs text-primary/60 font-medium whitespace-nowrap">{stat.title}</p>
              <h3 className={`text-2xl font-bold mt-1 ${stat.alert ? 'text-warning-foreground' : 'text-primary'}`}>{stat.value}</h3>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Exit Reasons Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] pb-4">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsPieChart>
                <Pie
                  data={REASON_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {REASON_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                  itemStyle={{ color: '#381932' }}
                />
                <Legend verticalAlign="bottom" height={36} />
              </RechartsPieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Monthly Exits Trend</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MONTHLY_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip
                   cursor={{fill: '#f1f5f9'}}
                   contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                 />
                <Bar dataKey="exits" fill="#004643" radius={[4, 4, 0, 0]} maxBarSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
             <Briefcase className="w-5 h-5" />
             Pending Active Cases
          </CardTitle>
          <Button variant="outline" size="sm">View All Cases</Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-primary/60 uppercase bg-primary/5">
                <tr>
                  <th className="px-4 py-3 font-medium rounded-tl-lg">Case ID</th>
                  <th className="px-4 py-3 font-medium">Employee</th>
                  <th className="px-4 py-3 font-medium">Department</th>
                  <th className="px-4 py-3 font-medium">Exit Type</th>
                  <th className="px-4 py-3 font-medium">Current Status</th>
                  <th className="px-4 py-3 font-medium text-right rounded-tr-lg">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5">
                {RECENT_CASES.map((row) => (
                  <tr key={row.id} className="hover:bg-primary/5 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs">{row.id}</td>
                    <td className="px-4 py-3 font-medium text-primary">{row.employee}</td>
                    <td className="px-4 py-3 text-primary/70">{row.dept}</td>
                    <td className="px-4 py-3">
                       <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider
                         ${row.type === 'Resignation' ? 'bg-primary/10 text-primary' : ''}
                         ${row.type === 'Termination' ? 'bg-warning/10 text-warning-foreground' : ''}
                         ${row.type === 'Absconded' ? 'bg-danger/10 text-danger' : ''}
                         ${row.type === 'End of Contract' ? 'bg-accent/10 text-accent' : ''}
                       `}>
                          {row.type}
                       </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-warning animate-pulse"></div>
                        <span className="text-xs font-medium">{row.status} ({row.days} days)</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">
                       <Link to={`/exit/timeline/${row.id}`}>
                         <Button variant="outline" size="sm" className="h-8 text-xs">Process</Button>
                       </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
