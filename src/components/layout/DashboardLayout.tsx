import React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <div className="flex h-screen bg-background font-sans text-primary overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-[248px]">
        <Header />
        <main className="custom-scrollbar flex-1 overflow-y-auto p-5 md:p-7">
          <div className="mx-auto flex w-full max-w-[1480px] flex-col gap-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
