import { CalendarDays, CheckCircle2, Clock, Download, XCircle } from 'lucide-react'

const attendance = [
  { name: 'Ayesha Khan', department: 'HR', checkIn: '08:56 AM', checkOut: '05:14 PM', status: 'Present' },
  { name: 'Bilal Ahmed', department: 'IT', checkIn: '09:08 AM', checkOut: '05:30 PM', status: 'Present' },
  { name: 'Sara Malik', department: 'Finance', checkIn: '-', checkOut: '-', status: 'Leave' },
  { name: 'Omar Farooq', department: 'Sales', checkIn: '-', checkOut: '-', status: 'Absent' },
]

const summary = [
  { label: 'Present', value: 420, icon: CheckCircle2, className: 'bg-emerald-50 text-emerald-700' },
  { label: 'Late', value: 18, icon: Clock, className: 'bg-amber-50 text-amber-700' },
  { label: 'On Leave', value: 15, icon: CalendarDays, className: 'bg-blue-50 text-blue-700' },
  { label: 'Absent', value: 15, icon: XCircle, className: 'bg-rose-50 text-rose-700' },
]

const Attendance = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 rounded-3xl bg-white p-6 shadow-sm sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">Attendance</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-950">Daily Attendance</h1>
          <p className="mt-1 text-slate-500">Monitor check-ins, absences, late arrivals, and leave status.</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50">
          <Download className="h-5 w-5" /> Export CSV
        </button>
      </div>

      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {summary.map((item) => {
          const Icon = item.icon
          return (
            <article key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className={`mb-5 inline-flex rounded-2xl p-3 ${item.className}`}><Icon className="h-6 w-6" /></div>
              <p className="text-sm font-medium text-slate-500">{item.label}</p>
              <p className="mt-2 text-3xl font-bold text-slate-950">{item.value}</p>
            </article>
          )
        })}
      </section>

      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-6">
          <h2 className="text-xl font-bold text-slate-950">Today&apos;s Attendance Log</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-6 py-4">Employee</th>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4">Check In</th>
                <th className="px-6 py-4">Check Out</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {attendance.map((row) => (
                <tr key={row.name} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-950">{row.name}</td>
                  <td className="px-6 py-4 text-slate-600">{row.department}</td>
                  <td className="px-6 py-4 text-slate-600">{row.checkIn}</td>
                  <td className="px-6 py-4 text-slate-600">{row.checkOut}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${row.status === 'Present' ? 'bg-emerald-50 text-emerald-700' : row.status === 'Leave' ? 'bg-blue-50 text-blue-700' : 'bg-rose-50 text-rose-700'}`}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default Attendance
