import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import { BrandLogo } from "../BrandLogo";
import { 
  BarChart3, Users, CalendarCheck, Banknote, Landmark, FileCheck, 
  Laptop, DoorOpen, PieChart, Bot, Building2, ShieldCheck, 
  Settings, ChevronDown, ChevronRight, PanelLeftClose, PanelLeftOpen
} from "lucide-react";
import { Button } from "../ui/Button";

const NAV_MODULES = [
  {
    name: "Dashboard",
    icon: BarChart3,
    href: "/",
    submenus: [
      { name: "Executive Dashboard", href: "/" },
      { name: "HR Dashboard", href: "/analytics/workforce" },
      { name: "Payroll Dashboard", href: "/payroll" },
      { name: "Notifications Center", href: "/automation/notifications" },
    ]
  },
  {
    name: "Employee System",
    icon: Users,
    href: "/employees",
    submenus: [
      { name: "Employee List", href: "/employees" },
      { name: "Add Employee", href: "/employees/new" },
      { name: "Employee Profile", href: "/employees/EMP-2024-0012" },
      { name: "Bulk Import", href: "/employees/import" }
    ]
  },
  {
    name: "Attendance Tracking",
    icon: CalendarCheck,
    href: "/attendance",
    submenus: [
      { name: "Attendance Dashboard", href: "/attendance" },
      { name: "Upload Attendance", href: "/attendance/upload" },
      { name: "Validation & Corrections", href: "/attendance/corrections" },
      { name: "Employee Views", href: "/attendance/employee/EMP-2024-0012" },
      { name: "Attendance Settings", href: "/attendance/settings" },
      { name: "Attendance Reports", href: "/attendance/report" }
    ]
  },
  {
    name: "Payroll Management",
    icon: Banknote,
    href: "/payroll",
    submenus: [
      { name: "Payroll Dashboard", href: "/payroll" },
      { name: "Run Payroll", href: "/payroll/run" },
      { name: "Salary Breakdown", href: "/payroll/details/EMP-2024-0012" },
      { name: "Commission & Bonus", href: "/payroll/bonus" },
      { name: "Deductions", href: "/payroll/deductions" },
      { name: "Approvals & Processing", href: "/payroll/approvals" },
      { name: "Payslips & History", href: "/payroll/history" }
    ]
  },
  {
    name: "Loans & Advances",
    icon: Landmark,
    href: "/loans",
    submenus: [
      { name: "Loans Dashboard", href: "/loans" },
      { name: "Create Loan", href: "/loans/request" },
      { name: "Repayment Schedule", href: "/loans/preview" },
      { name: "Loan Approvals", href: "/loans/approvals" },
      { name: "Early Settlement", href: "/loans/settlement/LN-2024" },
      { name: "Loan History", href: "/loans/history" }
    ]
  },
  {
    name: "Visa & Compliance",
    icon: FileCheck,
    href: "/visa",
    submenus: [
      { name: "Visa Dashboard", href: "/visa" },
      { name: "Visa Tracking", href: "/visa/list" },
      { name: "New Visa Process", href: "/visa/new" },
      { name: "Renewals & Cancellations", href: "/visa/renew/EMP-123" },
      { name: "Abscond Cases", href: "/visa/abscond/EMP-123" },
      { name: "Visa Documents", href: "/visa/documents" },
      { name: "Compliance Alerts", href: "/visa/alerts" }
    ]
  },
  {
    name: "Assets Management",
    icon: Laptop,
    href: "/assets",
    submenus: [
      { name: "Assets Dashboard", href: "/assets" },
      { name: "Asset Inventory", href: "/assets/inventory" },
      { name: "Add / Assign Asset", href: "/assets/assign" },
      { name: "Asset Returns", href: "/assets/return" },
      { name: "Damage / Loss", href: "/assets/damage" },
      { name: "Maintenance Tracking", href: "/assets/maintenance" },
      { name: "Asset History", href: "/assets/history/AST-001" }
    ]
  },
  {
    name: "Exit & Settlement",
    icon: DoorOpen,
    href: "/exit",
    submenus: [
      { name: "Exit Dashboard", href: "/exit" },
      { name: "Initiate Exit", href: "/exit/new" },
      { name: "Exit Workflow", href: "/exit/timeline/EMP-123" },
      { name: "Final Settlement", href: "/exit/settlement/EMP-123" },
      { name: "Clearance (Asset/Loan/Visa)", href: "/exit/assets/EMP-123" },
      { name: "Exit Approvals", href: "/exit/approval/EMP-123" },
      { name: "Experience Letters", href: "/exit/certificate/EMP-123" }
    ]
  },
  {
    name: "Reports & Analytics",
    icon: PieChart,
    href: "/analytics",
    submenus: [
      { name: "Executive Report", href: "/analytics" },
      { name: "HR Analytics", href: "/analytics/workforce" },
      { name: "Payroll Analytics", href: "/analytics/payroll" },
      { name: "Multi-Company Analysis", href: "/analytics/multi-company" },
      { name: "Attendance & Leaves", href: "/analytics/attendance" },
      { name: "Loans & Exits", href: "/analytics/loans" },
      { name: "Report Center (Exports)", href: "/analytics/reports" }
    ]
  },
  {
    name: "Rules Engine",
    icon: Bot,
    href: "/automation",
    submenus: [
      { name: "Automation Dashboard", href: "/automation" },
      { name: "Workflow Builder", href: "/automation/rules" },
      { name: "Create Rule", href: "/automation/rules/new" },
      { name: "Approval Workflows", href: "/automation/approvals" },
      { name: "Notification Rules", href: "/automation/notifications" },
      { name: "Execution Logs", href: "/automation/logs" }
    ]
  },
  {
    name: "Company Management",
    icon: Building2,
    href: "/company",
    submenus: [
      { name: "Company Entities", href: "/company/list" },
      { name: "Branch Locations", href: "/company/branches" },
      { name: "Department Structure", href: "/company/departments" },
      { name: "Organization Chart", href: "/company/org-chart" },
      { name: "Entity Documents", href: "/company/documents" }
    ]
  },
  {
    name: "Users & Access Control",
    icon: Users,
    href: "/users",
    submenus: [
      { name: "User Accounts", href: "/users/list" },
      { name: "Role Management", href: "/users/roles" },
      { name: "Permission Matrices", href: "/users/permissions" },
      { name: "Active Sessions", href: "/users/sessions" }
    ]
  },
  {
    name: "Audit & Compliance",
    icon: ShieldCheck,
    href: "/audit",
    submenus: [
      { name: "Activity Logs", href: "/audit/logs" },
      { name: "Security Alerts", href: "/audit/alerts" },
      { name: "Compliance Reports", href: "/audit/compliance" },
      { name: "Data Exports", href: "/audit/exports" }
    ]
  },
  {
    name: "System Settings",
    icon: Settings,
    href: "/settings",
    submenus: [
      { name: "General Config", href: "/settings/general" },
      { name: "Email Templates", href: "/settings/email" },
      { name: "Custom Fields", href: "/settings/custom-fields" },
      { name: "Integrations (API)", href: "/settings/api" },
      { name: "Backup & Restore", href: "/settings/backup" }
    ]
  }
];

function NavItem({ module, isActive, isExpanded, toggleExpand, location, collapsed }) {
  const Icon = module.icon;

  if (collapsed) {
    return (
      <Link
        to={module.href}
        title={module.name}
        className={cn(
          "mx-auto flex h-11 w-11 items-center justify-center rounded-2xl transition-colors",
          isActive ? "bg-gold text-primary shadow-sm" : "text-white/65 hover:bg-white/10 hover:text-white"
        )}
      >
        <Icon className="h-5 w-5" />
      </Link>
    );
  }

  return (
    <div className="space-y-1">
      <button
        onClick={() => toggleExpand(module.name)}
        className={cn(
          "w-full flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-colors",
          isActive || isExpanded ? "bg-white/10 text-white font-medium shadow-sm" : "text-white/70 hover:bg-white/5 hover:text-white"
        )}
      >
        <div className="flex items-center gap-3">
          <Icon className="w-4 h-4" />
          {module.name}
        </div>
        {isExpanded ? <ChevronDown className="w-4 h-4 opacity-50" /> : <ChevronRight className="w-4 h-4 opacity-50" />}
      </button>
      
      {isExpanded && (
        <div className="pl-9 pr-2 space-y-1 pb-1">
          {module.submenus.map((sub) => {
            const isSubActive = location.pathname === sub.href;
            return (
              <Link
                key={sub.name}
                to={sub.href}
                className={cn(
                  "block rounded-lg px-3 py-1.5 text-xs transition-colors my-0.5",
                  isSubActive 
                    ? "bg-gold/20 text-gold font-bold border-l-2 border-gold pl-2.5" 
                    : "text-white/50 hover:bg-white/5 hover:text-white/90"
                )}
              >
                {sub.name}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  );
}

type SidebarProps = {
  collapsed?: boolean;
  onToggle?: () => void;
};

export function Sidebar({ collapsed = false, onToggle }: SidebarProps) {
  const location = useLocation();
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (name: string) => {
    setExpanded(prev => prev === name ? null : name);
  };

  return (
    <aside className={cn(
      "fixed left-0 top-0 z-40 hidden h-screen flex-col bg-sidebar text-white font-sans shadow-xl transition-[width] duration-300 ease-in-out lg:flex",
      collapsed ? "w-[88px]" : "w-[280px]"
    )}>
      <div className={cn("shrink-0 border-b border-white/10 p-4 shadow-sm", collapsed ? "px-3" : "p-5")}>
        <div className="flex items-center justify-between gap-2">
          <div className={collapsed ? "mx-auto scale-90" : "min-w-0"}>
            <BrandLogo compact={collapsed} />
          </div>
          {!collapsed && (
            <Button variant="ghost" size="icon" onClick={onToggle} className="h-8 w-8 text-white/70 hover:bg-white/10 hover:text-white" aria-label="Collapse sidebar">
              <PanelLeftClose className="h-4 w-4" />
            </Button>
          )}
        </div>
        {collapsed ? (
          <Button variant="ghost" size="icon" onClick={onToggle} className="mx-auto mt-3 h-8 w-8 text-white/70 hover:bg-white/10 hover:text-white" aria-label="Expand sidebar">
            <PanelLeftOpen className="h-4 w-4" />
          </Button>
        ) : (
          <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.28em] text-white/40">Enterprise HRMS ERP</p>
        )}
      </div>
      
      <nav className="custom-scrollbar flex-1 overflow-y-auto py-4">
        <div className={cn("space-y-1.5", collapsed ? "px-2" : "px-4")}>
          {NAV_MODULES.map((module) => {
            const isActive = location.pathname.startsWith(module.href) && module.href !== "/";
            const isHomeActive = module.href === "/" && location.pathname === "/";
            const isExpanded = !collapsed && (expanded === module.name || (expanded === null && (isActive || isHomeActive)));

            return (
              <NavItem 
                key={module.name} 
                module={module} 
                isActive={isActive || isHomeActive} 
                isExpanded={isExpanded} 
                toggleExpand={toggleExpand}
                location={location}
                collapsed={collapsed}
              />
            );
          })}
        </div>
      </nav>

      <div className={cn("shrink-0 bg-black/30", collapsed ? "p-3" : "p-4")}>
        {collapsed ? (
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gold">
            <Users className="w-4 h-4" />
          </div>
        ) : (
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
            <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center text-gold ring-1 ring-gold/20">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">HR Admin</div>
              <div className="text-[10px] text-white/40">admin@aliyasgroup.ae</div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
