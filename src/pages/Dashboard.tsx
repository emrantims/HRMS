import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Users, CheckCircle, AlertCircle, UserX } from 'lucide-react'

const Dashboard = () => {
  const stats = [
    { label: 'Total Employees', value: '450', icon: Users, color: 'bg-blue-500', bgLight: 'bg-blue-50' },
    { label: 'Present Today', value: '420', icon: CheckCircle, color: 'bg-green-500', bgLight: 'bg-green-50' },
    { label: 'On Leave', value: '15', icon: AlertCircle, color: 'bg-yellow-500', bgLight: 'bg-yellow-50' },
    { label: 'Absent', value: '15', icon: UserX, color: 'bg-red-500', bgLight: 'bg-red-50' },
  ]

  const attendanceData = [
    { month: 'Jan', attendance: 420, absences: 30 },
    { month: 'Feb', attendance: 430, absences: 20 },
    { month: 'Mar', attendance: 440, absences: 10 },
    { month: 'Apr', attendance: 435, absences: 15 },
    { month: 'May', attendance: 445, absences: 5 },
    { month: 'Jun', attendance: 450, absences: 0 },
  ]

  const departmentData = [
    { name: 'HR', value: 45 },
    { name: 'IT', value: 120 },
    { name: 'Sales', value: 95 },
    { name: 'Marketing', value: 65 },
    { name: 'Finance', value: 55 },
    { name: 'Operations', value: 70 },
  ]

  const COLORS = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe', '#43e97b']

  const quickActions = [
    { title: 'Add Employee', icon: '👤', color: 'bg-blue-500' },
    { title: 'Attendance', icon: '📋', color: 'bg-green-500' },
    { title: 'Payroll', icon: '💰', color: 'bg-yellow-500' },
    { title: 'Reports', icon: '📊', color: 'bg-purple-500' },
    { title: 'Settings', icon: '⚙️', color: 'bg-gray-500' },
    { title: 'Logout', icon: '🚪', color: 'bg-red-500' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">HRMS Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's your workforce overview.</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</p>
                </div>
                <div className={`${stat.bgLight} p-3 rounded-lg`}>
                  <Icon className={`w-8 h-8 text-${stat.color.split('-')[1]}-500`} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Attendance Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Monthly Attendance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="attendance" fill="#667eea" name="Present" />
              <Bar dataKey="absences" fill="#f093fb" name="Absences" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Department Distribution */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Department Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={departmentData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {departmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className={`${action.color} text-white rounded-lg py-4 px-3 hover:opacity-90 transition-opacity flex flex-col items-center justify-center gap-2`}
            >
              <span className="text-2xl">{action.icon}</span>
              <span className="text-xs font-semibold text-center">{action.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-600 text-sm">
        <p>© 2026 Aliyas Group HRMS. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Dashboard
