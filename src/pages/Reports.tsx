import { BarChart3, Download, FileText, PieChart, TrendingUp } from 'lucide-react'

const reports = [
  { title: 'Monthly Attendance Report', type: 'Attendance', updated: '20 May 2026', icon: BarChart3 },
  { title: 'Payroll Summary', type: 'Payroll', updated: '18 May 2026', icon: FileText },
  { title: 'Department Headcount', type: 'Employees', updated: '17 May 2026', icon: PieChart },
  { title: 'Performance Overview', type: 'Performance', updated: '15 May 2026', icon: TrendingUp },
]

const Reports = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">Reports</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">HR Reports & Analytics</h1>
        <p className="mt-1 text-slate-500">Generate and download attendance, payroll, employee, and performance reports.</p>
      </div>

      <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {reports.map((report) => {
          const Icon = report.icon
          return (
            <article key={report.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4">
                  <div className="rounded-2xl bg-indigo-50 p-4 text-indigo-700">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{report.type}</span>
                    <h2 className="mt-3 text-xl font-bold text-slate-950">{report.title}</h2>
                    <p className="mt-1 text-sm text-slate-500">Last updated: {report.updated}</p>
                  </div>
                </div>
                <button className="rounded-2xl border border-slate-200 p-3 text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700" aria-label={`Download ${report.title}`}>
                  <Download className="h-5 w-5" />
                </button>
              </div>
            </article>
          )
        })}
      </section>

      <section className="rounded-3xl border border-indigo-100 bg-indigo-50 p-6">
        <h2 className="text-xl font-bold text-indigo-950">Next improvement</h2>
        <p className="mt-2 max-w-3xl text-indigo-800">Connect these report cards to backend APIs so each report can be generated from live employee, attendance, and payroll data.</p>
      </section>
    </div>
  )
}

export default Reports
