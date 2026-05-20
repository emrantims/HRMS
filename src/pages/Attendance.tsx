import { useMemo, useState } from 'react'
import { CalendarDays, CheckCircle2, Clock, Download, XCircle } from 'lucide-react'

type Status = 'Present' | 'Late' | 'Leave' | 'Absent'

type AttendanceRow = {
  name: string
  department: string
  checkIn: string
  checkOut: string
  status: Status
}

const initialAttendance: AttendanceRow[] = [
  { name: 'Ayesha Khan', department: 'HR', checkIn: '08:56 AM', checkOut: '05:14 PM', status: 'Present' },
  { name: 'Bilal Ahmed', department: 'IT', checkIn: '09:08 AM', checkOut: '05:30 PM', status: 'Late' },
  { name: 'Sara Malik', department: 'Finance', checkIn: '-', checkOut: '-', status: 'Leave' },
  { name: 'Omar Farooq', department: 'Sales', checkIn: '-', checkOut: '-', status: 'Absent' },
]

const statusStyles: Record<Status, string> = {
  Present: 'bg-emerald-50 text-emerald-700',
  Late: 'bg-amber-50 text-amber-700',
  Leave: 'bg-blue-50 text-blue-700',
  Absent: 'bg-rose-50 text-rose-700',
}

const Attendance = () => {
  const [attendance, setAttendance] = useState(initialAttendance)
  const [selectedStatus, setSelectedStatus] = useState<Status | 'All'>('All')

  const summary = useMemo(() => {
    return [
      { label: 'Present', value: attendance.filter((row) => row.status === 'Present').length, icon: CheckCircle2, className: 'bg-emerald-50 text-emerald-700' },
      { label: 'Late', value: attendance.filter((row) => row.status === 'Late').length, icon: Clock, className: 'bg-amber-50 text-amber-700' },
      { label: 'On Leave', value: attendance.filter((row) => row.status === 'Leave').length, icon: CalendarDays, className: 'bg-blue-50 text-blue-700' },
      { label: 'Absent', value: attendance.filter((row) => row.status === 'Absent').length, icon: XCircle, className: 'bg-rose-50 text-rose-700' },
    ]
  }, [attendance])

  const filteredAttendance = selectedStatus === 'All' ? attendance : attendance.filter((row) => row.status === selectedStatus)

  const updateStatus = (name: string, status: Status) => {
    setAttendance((current) => current.map((row) => row.name === name ? {
      ...row,
      status,
      checkIn: status === 'Present' || status === 'Late' ? row.checkIn === '-' ? '09:00 AM' : row.checkIn : '-',
      checkOut: status === 'Present' || status === 'Late' ? row.checkOut === '-' ? '05:00 PM' : row.checkOut : '-',
    } : row))
  }

  const exportCsv = () => {
    const header = 'Employee,Department,Check In,Check Out,Status'
    const rows = attendance.map((row) => `${row.name},${row.department},${row.checkIn},${row.checkOut},${row.status}`)
    const blob = new Blob([[header, ...rows].join('\n')], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'attendance-report.csv'
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 rounded-3xl bg-white p-6 shadow-sm sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">Attendance</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-950">Daily Attendance</h1>
          <p className="mt-1 text-slate-500">Mark employees present, late, on leave, or absent and export CSV.</p>
        </div>
        <button onClick={exportCsv} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50">
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

      <div className="flex flex-wrap gap-2 rounded-3xl bg-white p-4 shadow-sm">
        {(['All', 'Present', 'Late', 'Leave', 'Absent'] as const).map((status) => (
          <button key={status} onClick={() => setSelectedStatus(status)} className={`rounded-full px-4 py-2 text-sm font-semibold ${selectedStatus === status ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-700'}`}>{status}</button>
        ))}
      </div>

      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-6"><h2 className="text-xl font-bold text-slate-950">Today&apos;s Attendance Log</h2></div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[860px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr><th className="px-6 py-4">Employee</th><th className="px-6 py-4">Department</th><th className="px-6 py-4">Check In</th><th className="px-6 py-4">Check Out</th><th className="px-6 py-4">Status</th><th className="px-6 py-4">Action</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredAttendance.map((row) => (
                <tr key={row.name} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-950">{row.name}</td><td className="px-6 py-4 text-slate-600">{row.department}</td><td className="px-6 py-4 text-slate-600">{row.checkIn}</td><td className="px-6 py-4 text-slate-600">{row.checkOut}</td>
                  <td className="px-6 py-4"><span className={`rounded-full px-3 py-1 text-xs font-bold ${statusStyles[row.status]}`}>{row.status}</span></td>
                  <td className="px-6 py-4"><select value={row.status} onChange={(e) => updateStatus(row.name, e.target.value as Status)} className="rounded-xl border border-slate-200 px-3 py-2 outline-none focus:border-indigo-400">{(['Present', 'Late', 'Leave', 'Absent'] as const).map((status) => <option key={status}>{status}</option>)}</select></td>
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
