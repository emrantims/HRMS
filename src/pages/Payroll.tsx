import { useMemo, useState } from 'react'
import { Banknote, Calculator, CalendarClock, CheckCircle2, Download, ReceiptText } from 'lucide-react'

const employees = [
  { name: 'Ayesha Khan', salary: 18000, allowance: 1500, deduction: 450 },
  { name: 'Bilal Ahmed', salary: 15000, allowance: 900, deduction: 300 },
  { name: 'Sara Malik', salary: 14000, allowance: 700, deduction: 250 },
  { name: 'Omar Farooq', salary: 12000, allowance: 1200, deduction: 200 },
]

const Payroll = () => {
  const [bonus, setBonus] = useState(0)
  const [approved, setApproved] = useState(false)

  const rows = useMemo(() => employees.map((employee) => {
    const gross = employee.salary + employee.allowance + bonus
    const net = gross - employee.deduction
    return { ...employee, gross, net }
  }), [bonus])

  const totals = useMemo(() => rows.reduce((acc, row) => ({ gross: acc.gross + row.gross, deduction: acc.deduction + row.deduction, net: acc.net + row.net }), { gross: 0, deduction: 0, net: 0 }), [rows])

  const cards = [
    { label: 'Gross Pay', value: `AED ${totals.gross.toLocaleString()}`, icon: Banknote, className: 'bg-indigo-50 text-indigo-700' },
    { label: 'Deductions', value: `AED ${totals.deduction.toLocaleString()}`, icon: CalendarClock, className: 'bg-amber-50 text-amber-700' },
    { label: 'Payslips', value: String(rows.length), icon: ReceiptText, className: 'bg-blue-50 text-blue-700' },
    { label: 'Net Pay', value: `AED ${totals.net.toLocaleString()}`, icon: CheckCircle2, className: 'bg-emerald-50 text-emerald-700' },
  ]

  const downloadPayroll = () => {
    const header = 'Employee,Basic Salary,Allowance,Bonus,Deduction,Gross,Net'
    const csvRows = rows.map((row) => `${row.name},${row.salary},${row.allowance},${bonus},${row.deduction},${row.gross},${row.net}`)
    const blob = new Blob([[header, ...csvRows].join('\n')], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'payroll-summary.csv'
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 rounded-3xl bg-white p-6 shadow-sm sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">Payroll</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-950">Payroll Management</h1>
          <p className="mt-1 text-slate-500">Calculate payroll, add monthly bonus, approve run, and export CSV.</p>
        </div>
        <button onClick={downloadPayroll} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-lg shadow-indigo-100 transition hover:bg-indigo-700"><Download className="h-5 w-5" /> Download Payroll</button>
      </div>

      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => { const Icon = card.icon; return <article key={card.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className={`mb-5 inline-flex rounded-2xl p-3 ${card.className}`}><Icon className="h-6 w-6" /></div><p className="text-sm font-medium text-slate-500">{card.label}</p><p className="mt-2 text-2xl font-bold text-slate-950">{card.value}</p></article> })}
      </section>

      <section className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-3 md:items-end">
        <div className="md:col-span-2">
          <label className="text-sm font-semibold text-slate-700">Monthly bonus per employee</label>
          <input type="number" min="0" value={bonus} onChange={(e) => setBonus(Number(e.target.value))} className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-indigo-400" />
        </div>
        <button onClick={() => setApproved(true)} className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 font-semibold text-white hover:bg-emerald-700"><Calculator className="h-5 w-5" /> {approved ? 'Payroll Approved' : 'Approve Payroll'}</button>
      </section>

      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 p-6"><h2 className="text-xl font-bold text-slate-950">Payroll Calculation</h2></div>
        <div className="overflow-x-auto"><table className="w-full min-w-[900px] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-6 py-4">Employee</th><th className="px-6 py-4">Basic</th><th className="px-6 py-4">Allowance</th><th className="px-6 py-4">Bonus</th><th className="px-6 py-4">Deduction</th><th className="px-6 py-4">Net Pay</th><th className="px-6 py-4">Status</th></tr></thead><tbody className="divide-y divide-slate-100">{rows.map((row) => <tr key={row.name} className="hover:bg-slate-50"><td className="px-6 py-4 font-semibold text-slate-950">{row.name}</td><td className="px-6 py-4">AED {row.salary.toLocaleString()}</td><td className="px-6 py-4">AED {row.allowance.toLocaleString()}</td><td className="px-6 py-4">AED {bonus.toLocaleString()}</td><td className="px-6 py-4">AED {row.deduction.toLocaleString()}</td><td className="px-6 py-4 font-bold text-slate-950">AED {row.net.toLocaleString()}</td><td className="px-6 py-4"><span className={`rounded-full px-3 py-1 text-xs font-bold ${approved ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>{approved ? 'Approved' : 'Pending'}</span></td></tr>)}</tbody></table></div>
      </section>
    </div>
  )
}

export default Payroll
