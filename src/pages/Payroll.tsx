import { Banknote, CalendarClock, CheckCircle2, Download, ReceiptText } from 'lucide-react'

const payrollRuns = [
  { period: 'May 2026', employees: 450, gross: 'AED 1,240,000', deductions: 'AED 86,500', net: 'AED 1,153,500', status: 'Ready' },
  { period: 'April 2026', employees: 438, gross: 'AED 1,198,000', deductions: 'AED 82,100', net: 'AED 1,115,900', status: 'Paid' },
  { period: 'March 2026', employees: 431, gross: 'AED 1,174,000', deductions: 'AED 79,300', net: 'AED 1,094,700', status: 'Paid' },
]

const cards = [
  { label: 'Monthly Gross Pay', value: 'AED 1.24M', icon: Banknote, className: 'bg-indigo-50 text-indigo-700' },
  { label: 'Pending Approvals', value: '12', icon: CalendarClock, className: 'bg-amber-50 text-amber-700' },
  { label: 'Payslips Generated', value: '438', icon: ReceiptText, className: 'bg-blue-50 text-blue-700' },
  { label: 'Paid Employees', value: '438', icon: CheckCircle2, className: 'bg-emerald-50 text-emerald-700' },
]

const Payroll = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 rounded-3xl bg-white p-6 shadow-sm sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">Payroll</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-950">Payroll Management</h1>
          <p className="mt-1 text-slate-500">Review salary runs, deductions, payslips, and payment status.</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-lg shadow-indigo-100 transition hover:bg-indigo-700">
          <Download className="h-5 w-5" /> Download Payroll
        </button>
      </div>

      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <article key={card.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className={`mb-5 inline-flex rounded-2xl p-3 ${card.className}`}><Icon className="h-6 w-6" /></div>
              <p className="text-sm font-medium text-slate-500">{card.label}</p>
              <p className="mt-2 text-3xl font-bold text-slate-950">{card.value}</p>
            </article>
          )
        })}
      </section>

      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-6">
          <h2 className="text-xl font-bold text-slate-950">Payroll Runs</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[860px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-6 py-4">Period</th>
                <th className="px-6 py-4">Employees</th>
                <th className="px-6 py-4">Gross Pay</th>
                <th className="px-6 py-4">Deductions</th>
                <th className="px-6 py-4">Net Pay</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {payrollRuns.map((run) => (
                <tr key={run.period} className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-950">{run.period}</td>
                  <td className="px-6 py-4 text-slate-600">{run.employees}</td>
                  <td className="px-6 py-4 text-slate-600">{run.gross}</td>
                  <td className="px-6 py-4 text-slate-600">{run.deductions}</td>
                  <td className="px-6 py-4 font-semibold text-slate-950">{run.net}</td>
                  <td className="px-6 py-4"><span className={`rounded-full px-3 py-1 text-xs font-bold ${run.status === 'Paid' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>{run.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default Payroll
