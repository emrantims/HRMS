import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { BarChart3, CalendarCheck, FileText, LayoutDashboard, Users, WalletCards } from 'lucide-react'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import Attendance from './pages/Attendance'
import Payroll from './pages/Payroll'
import Reports from './pages/Reports'
import './App.css'

const navigation = [
  { name: 'Dashboard', path: '/', icon: LayoutDashboard },
  { name: 'Employees', path: '/employees', icon: Users },
  { name: 'Attendance', path: '/attendance', icon: CalendarCheck },
  { name: 'Payroll', path: '/payroll', icon: WalletCards },
  { name: 'Reports', path: '/reports', icon: FileText },
]

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-100 text-slate-900">
        <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-slate-200 bg-white/95 p-6 shadow-sm lg:block">
          <div className="mb-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
              <BarChart3 className="h-6 w-6" />
            </div>
            <h1 className="mt-4 text-2xl font-bold">Aliyas HRMS</h1>
            <p className="text-sm text-slate-500">Human Resource Management</p>
          </div>

          <nav className="space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                      isActive
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                    }`
                  }
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </NavLink>
              )
            })}
          </nav>
        </aside>

        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 p-4 backdrop-blur lg:hidden">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <BarChart3 className="h-5 w-5" />
            </div>
            <div>
              <h1 className="font-bold">Aliyas HRMS</h1>
              <p className="text-xs text-slate-500">Human Resource Management</p>
            </div>
          </div>
          <nav className="flex gap-2 overflow-x-auto pb-1">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold ${
                    isActive ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </header>

        <main className="lg:pl-72">
          <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/payroll" element={<Payroll />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App
