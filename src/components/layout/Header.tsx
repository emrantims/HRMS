import React from "react";
import { Bell, Search, Menu } from "lucide-react";
import { Button } from "../ui/Button";

const groupCompanies = [
  "ALIYAS Group",
  "ALIYAS BUILDING CLEANING CO - L.L.C",
  "ALIYAS BUS RENTAL LLC",
  "ALIYAS LINE BUS RENTAL L.L.C",
  "ALIYAS GENERAL SECURITY SERVICES L.L.C",
  "ALIYAS REAL ESTATE L.L.C",
  "AMAFH EMPLOYMENT SERVICES L.L.C",
];

export function Header() {
  return (
    <header className="h-16 w-full bg-surface border-b border-primary/10 flex items-center justify-between px-8 shrink-0">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="lg:hidden text-primary">
          <Menu className="h-5 w-5" />
        </Button>
        <div className="hidden md:flex items-center gap-2 bg-background px-3 py-1.5 rounded border border-primary/10">
          <div className="w-4 h-4 bg-accent rounded-full"></div>
          <select className="bg-transparent text-xs font-semibold text-primary focus:outline-none max-w-[260px]">
            {groupCompanies.map((company) => (
              <option key={company} value={company}>{company}</option>
            ))}
          </select>
        </div>
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-primary/40" />
          <input
            type="text"
            placeholder="Search employees, companies, visas, assets..."
            className="bg-background/50 border border-primary/10 rounded-md py-1.5 pl-9 pr-4 text-xs w-72 focus:outline-none focus:ring-1 focus:ring-accent text-primary placeholder:text-primary/50"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative cursor-pointer">
          <Bell className="w-5 h-5 text-primary/60" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-accent border-2 border-white rounded-full"></span>
        </div>
        <div className="flex items-center gap-3 pl-6 border-l border-primary/10">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-primary">ALIYAS Group Admin</p>
            <p className="text-[10px] text-primary/60 uppercase tracking-tighter">Group Admin</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs shrink-0">
            AG
          </div>
        </div>
      </div>
    </header>
  );
}
