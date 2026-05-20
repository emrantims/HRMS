import { Link } from 'react-router-dom'
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'
import { AlertCircle, CalendarCheck, CheckCircle, FileText, UserPlus, Users, UserX, WalletCards } from 'lucide-react'

const stats = [
  { label: 'Total Employees', value: '450', change: '+12 this month', icon: Users, iconClass: 'text-blue-600', bgLight: 'bg-blue-50' },
  { label: 'Present Today', value: '420', change: '93.3% attendance', icon: CheckCircle, iconClass: 'text-emerald-600', bgLight: 'bg-emerald-50' },
  { label: 'On Leave', value: '15', change: '5 approved today', icon: AlertCircle, iconClass: 'text-amber-600', bgLight: 'bg-amber-50' },
  { label: 'Absent', value: '15', change: 'Needs follow-up', icon: UserX, iconClass: 'text-rose-600', bgLight: 'bg-rose-50' },
]

const attendanceData = [
  { month: 'Jan', present: 420, absences: 30 },
  { month: 'Feb', present: 430, absences: 20 },
  { month: 'Mar', present: 440, absences: 10 },
  { month: 'Apr', present: 435, absences: 15 },
  { month: 'May', present: 445, absences: 5 },
  { month: 'Jun', present: 450, absences: 0 },
]

const departmentData = [
  { name: 'HR', value: 45 },
  { name: 'IT', value: 120 },
  { name: 'Sales', value: 95 },
  { name: 'Marketing', value: 65 },
  { name: 'Finance', value: 55 },
  { name: 'Operations', value: 70 },
]

const performanceData = [
  { week: 'W1', score: 78 },
  { week: 'W2', score: 82 },
  { week: 'W3', score: 86 },
  { week: 'W4', score: 91 },
]

const colors = ['#4f46e5', '#7c3aed', '#db2777', '#0891b2', '#059669', '#f59e0b']

const quickActions = [
  { title: 'Add Employee', description: 'Create a new profile', icon: UserPlus, path: '/employees' },
  { title: 'Attendance', description: 'Review daily status', icon: CalendarCheck, path: '/attendance' },
  { title: 'Payroll', description: 'Manage salary runs', icon: WalletCards, path: '/payroll' },
  { title: 'Reports', description: 'Export HR insights', icon: FileText, path: '/reports' },
]

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 p-8 text-white shadow-xl shadow-indigo-100">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-100">HRMS Overview</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Welcome back, HR Team</h1>
          <p className="mt-4 text-indigo-100">Track workforce health, attendance, payroll status, and department performance from one clean dashboard.</p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <article key={stat.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                  <p className="mt-2 text-3xl font-bold text-slate-950">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-500">{stat.change}</p>
                </div>
                <div className={`${stat.bgLight} rounded-2xl p-3`}>
                  <Icon className={`h-7 w-7 ${stat.iconClass}`} />
                </div>
              </div>
            </article>
          )
        })}
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">Monthly Attendance</h2>
          <p className="mt-1 text-sm text-slate-500">Present vs absent trend for the current half-year.</p>
          <div className="mt-6 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="present" fill="#4f46e5" name="Present" radius={[8, 8, 0, 0]} />
                <Bar dataKey="absences" fill="#f43f5e" name="Absences" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">Department Distribution</h2>
          <p className="mt-1 text-sm text-slate-500">Employee count by department.</p>
          <div className="mt-6 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={departmentData} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name}: ${value}`} outerRadius={100} dataKey="value">
                  {departmentData.map((entry, index) => (
                    <Cell key={entry.name} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
          <h2 className="text-xl font-bold text-slate-950">Weekly Performance</h2>
          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#4f46e5" strokeWidth={3} name="Performance Score" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">Quick Actions</h2>
          <div className="mt-5 space-y-3">
            {quickActions.map((action) => {
              const Icon = action.icon
              return (
                <Link key={action.title} to={action.path} className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 transition hover:border-indigo-200 hover:bg-indigo-50">
                  <div className="rounded-xl bg-indigo-600 p-3 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-950">{action.title}</p>
                    <p className="text-sm text-slate-500">{action.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
