import React from "react";
import { Bell, Search, Menu, ChevronDown, Plus, Sparkles } from "lucide-react";
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
    <header className="sticky top-0 z-30 flex h-16 w-full shrink-0 items-center justify-between border-b border-border/80 bg-surface/80 px-5 shadow-sm backdrop-blur-xl md:px-7">
      <div className="flex min-w-0 items-center gap-3">
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <div className="hidden items-center gap-2 rounded-xl border border-border bg-muted/70 px-3 py-2 md:flex">
          <span className="h-2.5 w-2.5 rounded-full bg-success" />
          <select className="max-w-[255px] bg-transparent text-xs font-semibold text-primary outline-none">
            {groupCompanies.map((company) => (
              <option key={company} value={company}>{company}</option>
            ))}
          </select>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </div>
        <div className="relative hidden md:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search employees, companies, visas, assets..."
            className="h-10 w-[320px] rounded-xl border border-input bg-surface pl-10 pr-4 text-sm text-primary shadow-sm outline-none transition focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        <Button variant="gold" size="sm" className="hidden gap-2 md:inline-flex">
          <Sparkles className="h-3.5 w-3.5" />
          Upgrade
        </Button>
        <Button variant="accent" size="sm" className="hidden gap-2 md:inline-flex">
          <Plus className="h-3.5 w-3.5" />
          Create
        </Button>
        <Button variant="outline" size="icon" className="relative rounded-full">
          <Bell className="h-4 w-4" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-destructive ring-2 ring-surface" />
        </Button>
        <div className="flex items-center gap-3 rounded-full border border-border bg-surface py-1 pl-2 pr-3 shadow-sm">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">AG</div>
          <div className="hidden leading-tight sm:block">
            <p className="text-xs font-semibold text-primary">ALIYAS Admin</p>
            <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Group Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
