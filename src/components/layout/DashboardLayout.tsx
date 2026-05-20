import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/Button";

const rootPages = new Set([
  "/",
  "/employees",
  "/attendance",
  "/payroll",
  "/loans",
  "/assets",
  "/visa",
  "/exit",
  "/automation",
  "/analytics",
  "/company/list",
  "/users/list",
  "/audit/logs",
  "/settings/general",
]);

function shouldShowBack(pathname: string) {
  if (rootPages.has(pathname)) return false;
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length < 2) return false;
  return true;
}

function routeLabel(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  const lastReadable = parts[parts.length - 1]
    ?.replace(/-/g, " ")
    ?.replace(/\b\w/g, (letter) => letter.toUpperCase());

  if (/^EMP-|^CO-|^LN-|^EXT-|^\d+$/i.test(parts[parts.length - 1] || "")) {
    return parts[parts.length - 2]?.replace(/-/g, " ")?.replace(/\b\w/g, (letter) => letter.toUpperCase()) || "Detail Page";
  }

  return lastReadable || "Detail Page";
}

export function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const showBack = shouldShowBack(location.pathname);

  return (
    <div className="h-screen overflow-hidden bg-background font-sans text-primary">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed((value) => !value)} />
      <div className={`flex h-screen min-w-0 flex-col overflow-hidden transition-[margin] duration-300 ease-in-out ${sidebarCollapsed ? "lg:ml-[88px]" : "lg:ml-[280px]"}`}>
        <Header onToggleSidebar={() => setSidebarCollapsed((value) => !value)} />
        <main className="custom-scrollbar flex-1 overflow-y-auto p-5 md:p-7">
          <div className="app-content flex w-full min-w-0 flex-col gap-5">
            {showBack && (
              <div className="flex items-center justify-between gap-3">
                <Button variant="ghost" size="sm" className="gap-2 -ml-2" onClick={() => navigate(-1)}>
                  <ArrowLeft className="h-4 w-4" /> Back
                </Button>
                <span className="hidden rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold text-muted-foreground sm:inline-flex">
                  {routeLabel(location.pathname)}
                </span>
              </div>
            )}
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
