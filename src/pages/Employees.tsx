import { Mail, MapPin, Phone, Plus, Search, UserCheck } from 'lucide-react'

const employees = [
  { id: 'EMP-001', name: 'Ayesha Khan', role: 'HR Manager', department: 'HR', status: 'Active', location: 'Dubai', phone: '+971 50 000 1001', email: 'ayesha@aliyasgroup.com' },
  { id: 'EMP-002', name: 'Bilal Ahmed', role: 'Frontend Developer', department: 'IT', status: 'Active', location: 'Sharjah', phone: '+971 50 000 1002', email: 'bilal@aliyasgroup.com' },
  { id: 'EMP-003', name: 'Sara Malik', role: 'Payroll Officer', department: 'Finance', status: 'On Leave', location: 'Dubai', phone: '+971 50 000 1003', email: 'sara@aliyasgroup.com' },
  { id: 'EMP-004', name: 'Omar Farooq', role: 'Sales Executive', department: 'Sales', status: 'Active', location: 'Abu Dhabi', phone: '+971 50 000 1004', email: 'omar@aliyasgroup.com' },
]

const Employees = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 rounded-3xl bg-white p-6 shadow-sm sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">People</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-950">Employee Management</h1>
          <p className="mt-1 text-slate-500">Manage employee profiles, departments, contact details, and status.</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-lg shadow-indigo-100 transition hover:bg-indigo-700">
          <Plus className="h-5 w-5" /> Add Employee
        </button>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input className="w-full rounded-2xl border border-slate-200 py-3 pl-12 pr-4 outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50" placeholder="Search employees..." />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {['All', 'HR', 'IT', 'Finance', 'Sales'].map((filter) => (
              <button key={filter} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700">
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        {employees.map((employee) => (
          <article key={employee.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-lg font-bold text-indigo-700">
                  {employee.name.split(' ').map((part) => part[0]).join('')}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{employee.id}</p>
                  <h2 className="text-xl font-bold text-slate-950">{employee.name}</h2>
                  <p className="text-sm text-slate-500">{employee.role} · {employee.department}</p>
                </div>
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-bold ${employee.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                {employee.status}
              </span>
            </div>
            <div className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              <span className="flex items-center gap-2"><Mail className="h-4 w-4 text-slate-400" />{employee.email}</span>
              <span className="flex items-center gap-2"><Phone className="h-4 w-4 text-slate-400" />{employee.phone}</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-slate-400" />{employee.location}</span>
              <span className="flex items-center gap-2"><UserCheck className="h-4 w-4 text-slate-400" />Profile complete</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Employees
