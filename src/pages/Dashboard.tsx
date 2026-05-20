import React from "react";
import { MetricCard, Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";

export default function HRDashboard() {
  return (
    <>
      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-surface p-4 rounded-xl border border-primary/5 shadow-sm">
          <p className="text-[10px] uppercase font-bold text-primary/50 tracking-wider">Active Employees</p>
          <div className="flex items-baseline gap-2 mt-1">
            <h3 className="text-2xl font-bold mt-1">1,248</h3>
            <span className="text-[10px] text-accent font-bold">+12.5%</span>
          </div>
          <div className="w-full bg-background h-1 rounded-full mt-3 overflow-hidden">
            <div className="bg-accent h-full w-[80%]"></div>
          </div>
        </div>

        <div className="bg-surface p-4 rounded-xl border border-primary/5 shadow-sm">
          <p className="text-[10px] uppercase font-bold text-primary/50 tracking-wider">Visa Expiries (30d)</p>
          <div className="flex items-baseline gap-2 mt-1">
            <h3 className="text-2xl font-bold mt-1">42</h3>
            <span className="text-[10px] text-destructive font-bold underline">Action Needed</span>
          </div>
          <div className="flex gap-1 mt-3">
            <div className="h-1 flex-1 bg-red-400 rounded-full"></div>
            <div className="h-1 flex-1 bg-red-400 rounded-full"></div>
            <div className="h-1 flex-1 bg-gray-100 rounded-full"></div>
            <div className="h-1 flex-1 bg-gray-100 rounded-full"></div>
          </div>
        </div>

        <div className="bg-surface p-4 rounded-xl border border-primary/5 shadow-sm">
          <p className="text-[10px] uppercase font-bold text-primary/50 tracking-wider">Monthly Payroll</p>
          <div className="flex items-baseline gap-2 mt-1">
            <h3 className="text-2xl font-bold italic mt-1">AED 4.2M</h3>
          </div>
          <p className="text-[10px] text-gray-400 mt-3 font-medium">WPS Compliance: 100%</p>
        </div>

        <div className="bg-surface p-4 rounded-xl border border-primary/5 shadow-sm">
          <p className="text-[10px] uppercase font-bold text-primary/50 tracking-wider">Assets Assigned</p>
          <div className="flex items-baseline gap-2 mt-1">
            <h3 className="text-2xl font-bold mt-1">892</h3>
          </div>
          <p className="text-[10px] text-gray-400 mt-3 font-medium">Inventory Value: AED 1.2M</p>
        </div>
      </div>

      {/* Main Grid Sections */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-hidden min-h-0">
        
        {/* Compliance Alerts (Left) */}
        <section className="lg:col-span-2 bg-surface rounded-2xl border border-primary/10 shadow-lg flex flex-col overflow-hidden max-h-[500px]">
          <div className="px-6 py-4 border-b border-primary/5 flex justify-between items-center bg-surface">
            <h2 className="text-sm font-bold uppercase tracking-tight text-primary">Visa Compliance & Renewal Timeline</h2>
            <button className="text-[10px] text-accent font-bold underline">Download MOHRE Report</button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <table className="w-full text-left">
              <thead className="bg-background sticky top-0 z-10 shadow-sm">
                <tr className="text-[10px] uppercase tracking-widest text-primary/60">
                  <th className="px-6 py-3 font-semibold">Employee Name</th>
                  <th className="px-6 py-3 font-semibold">Type</th>
                  <th className="px-6 py-3 font-semibold">Expiry Date</th>
                  <th className="px-6 py-3 font-semibold">Status</th>
                  <th className="px-6 py-3 font-semibold">Automation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5">
                {[
                  { name: "Zaid Ahmed Al-Hashmi", type: "Partner Visa", date: "24 Nov 2024", status: "Pending Renewal", statusColor: "bg-orange-100 text-orange-700", auto: "Notify Sent", autoColor: "text-green-600" },
                  { name: "Sarah Connor", type: "Employment", date: "12 Dec 2024", status: "On Track", statusColor: "bg-green-100 text-green-700", auto: "In Queue", autoColor: "text-gray-400" },
                  { name: "Mohammed Yousuf", type: "Golden Visa", date: "10 Jan 2030", status: "Permanent", statusColor: "bg-blue-100 text-blue-700", auto: "None", autoColor: "text-gray-400" },
                  { name: "Fatima Al-Balooshi", type: "Employment", date: "05 Nov 2024", status: "Critical", statusColor: "bg-red-100 text-red-700", auto: "PRO Escalation", autoColor: "text-red-600 font-bold" },
                ].map((row, i) => (
                  <tr key={i} className="text-xs hover:bg-background/80 group transition-colors">
                    <td className="px-6 py-3 font-medium text-primary">{row.name}</td>
                    <td className="px-6 py-3 text-primary/80">{row.type}</td>
                    <td className="px-6 py-3 text-primary/80">{row.date}</td>
                    <td className="px-6 py-3">
                      <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${row.statusColor}`}>{row.status}</span>
                    </td>
                    <td className={`px-6 py-3 text-[10px] ${row.autoColor}`}>{row.auto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Right Sidebar Widgets */}
        <div className="space-y-6">
          {/* Automation Engine Status */}
          <section className="bg-accent text-white p-5 rounded-2xl shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-xs font-bold uppercase tracking-widest opacity-60 mb-3">Automation Pulse</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[11px]">
                  <span>WPS File Generation</span>
                  <span className="text-green-300">Active</span>
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span>Loan Deductions</span>
                  <span className="text-green-300">Active</span>
                </div>
                <div className="flex justify-between items-center text-[11px]">
                  <span>Asset Return Alerts</span>
                  <span className="text-yellow-200">Paused</span>
                </div>
              </div>
              <button className="w-full mt-4 py-2 bg-white/10 border border-white/20 rounded text-[10px] font-bold uppercase hover:bg-white/20 transition-colors">Configure Rules</button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          </section>

          {/* Pending Approvals */}
          <section className="bg-surface rounded-2xl border border-primary/10 p-5 shadow-sm">
            <h2 className="text-xs font-bold uppercase tracking-tight mb-4 text-primary">Pending Approvals (8)</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <div className="flex-1">
                  <p className="text-[11px] font-bold text-primary">Loan Request: AED 15,000</p>
                  <p className="text-[10px] text-gray-400">John Doe • Employee ID #902</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <div className="flex-1">
                  <p className="text-[11px] font-bold text-primary">Exit Settlement: AED 45,200</p>
                  <p className="text-[10px] text-gray-400">Mariam S. • Resignation</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                <div className="flex-1">
                  <p className="text-[11px] font-bold text-primary">New Asset Allocation</p>
                  <p className="text-[10px] text-gray-400">MacBook Pro • Logistics Co.</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-50 flex justify-center">
              <button className="text-[10px] font-bold text-accent underline uppercase">View Approval Center</button>
            </div>
          </section>
        </div>
      </div>

      {/* Quick Controls */}
      <div className="flex items-center justify-start gap-2 overflow-x-auto pb-2 -mb-2">
        <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest mr-4 shrink-0">Quick Access:</span>
        <button className="whitespace-nowrap px-4 py-2 bg-surface border border-primary/10 rounded-full text-[10px] font-bold hover:shadow-md transition-shadow text-primary">New Hire Onboarding</button>
        <button className="whitespace-nowrap px-4 py-2 bg-surface border border-primary/10 rounded-full text-[10px] font-bold hover:shadow-md transition-shadow text-primary">Run Bulk Attendance</button>
        <button className="whitespace-nowrap px-4 py-2 bg-surface border border-primary/10 rounded-full text-[10px] font-bold hover:shadow-md transition-shadow text-primary">Create Loan Profile</button>
        <button className="whitespace-nowrap px-4 py-2 bg-surface border border-primary/10 rounded-full text-[10px] font-bold hover:shadow-md transition-shadow text-primary">Generate Group P&L</button>
      </div>
    </>
  );
}
