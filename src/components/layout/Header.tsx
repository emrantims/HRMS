import React from "react";
import { Bell, Search, Menu, ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";

export function Header() {
  return (
    <header className="h-16 w-full bg-surface border-b border-primary/10 flex items-center justify-between px-8 shrink-0">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="lg:hidden text-primary">
          <Menu className="h-5 w-5" />
        </Button>
        <div className="hidden md:flex items-center gap-2 bg-background px-3 py-1.5 rounded border border-primary/10">
          <div className="w-4 h-4 bg-accent rounded-full"></div>
          <span className="text-xs font-semibold text-primary">Al-Thani Group Holding</span>
          <ChevronDown className="w-3 h-3 ml-2 text-primary" />
        </div>
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search employees, visas, assets..."
            className="bg-background/50 border border-primary/10 rounded-md py-1.5 px-4 text-xs w-64 focus:outline-none focus:ring-1 focus:ring-accent text-primary placeholder:text-primary/50"
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
            <p className="text-xs font-bold text-primary">Ahmed Bin Rashid</p>
            <p className="text-[10px] text-primary/60 uppercase tracking-tighter">Group Admin</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs shrink-0">
            AR
          </div>
        </div>
      </div>
    </header>
  );
}
