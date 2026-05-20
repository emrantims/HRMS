import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Building2, Users, CreditCard, Clock, Wallet, 
  Laptop, FileCheck, DoorOpen, LayoutDashboard, 
  AlertTriangle, Settings
} from 'lucide-react';
import { cn } from '../../lib/utils';

export function AnalyticsNav() {
  const { pathname } = useLocation();

  const NAV_LINKS = [
    { to: "/analytics", label: "Executive Overview" },
    { to: "/analytics/multi-company", label: "Multi-Company" },
    { to: "/analytics/workforce", label: "Workforce" },
    { to: "/analytics/payroll", label: "Payroll" },
    { to: "/analytics/attendance", label: "Attendance" },
    { to: "/analytics/loans", label: "Loans" },
    { to: "/analytics/assets", label: "Assets" },
    { to: "/analytics/visa", label: "Visa & Compliance" },
    { to: "/analytics/exit", label: "Exit & Attrition" },
    { to: "/analytics/reports", label: "Reports Center", align: "right" },
    { to: "/analytics/risks", label: "Risk Monitoring", align: "right", icon: AlertTriangle },
  ];

  return (
    <div className="flex items-center justify-between border-b border-primary/10 mb-6 bg-white shrink-0 px-2 rounded-lg shadow-sm">
      <div className="flex items-center overflow-x-auto no-scrollbar gap-1 flex-1 py-1">
        {NAV_LINKS.filter(l => !l.align).map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/analytics'}
            className={({ isActive }) => cn(
              "px-3 py-2 text-sm font-medium rounded-md transition-all whitespace-nowrap",
              isActive 
                ? "bg-accent/10 text-accent font-bold" 
                : "text-primary/60 hover:text-primary hover:bg-primary/5"
            )}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center gap-1 pl-4 border-l border-primary/10 ml-2 py-1 shrink-0">
        {NAV_LINKS.filter(l => l.align === 'right').map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => cn(
              "px-3 py-2 text-sm font-medium rounded-md transition-all whitespace-nowrap flex items-center gap-2",
              isActive 
                ? link.icon ? "bg-danger/10 text-danger font-bold" : "bg-primary/10 text-primary font-bold" 
                : link.icon ? "text-danger hover:bg-danger/5" : "text-primary/70 hover:bg-primary/5"
            )}
          >
            {link.icon && <link.icon className="w-4 h-4" />}
            {link.label}
          </NavLink>
        ))}
        <NavLink
            to="/analytics/builder"
            className={({ isActive }) => cn(
              "px-3 py-2 rounded-md transition-all",
              isActive ? "bg-primary text-white" : "text-primary/60 hover:text-primary hover:bg-primary/5"
            )}
          >
            <Settings className="w-4 h-4" />
        </NavLink>
      </div>
    </div>
  );
}
