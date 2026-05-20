import React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <div className="flex h-screen bg-background font-sans text-primary overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-[280px]">
        <Header />
        <main className="flex-1 p-8 overflow-y-auto flex flex-col gap-6 relative">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
