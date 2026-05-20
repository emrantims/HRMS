import React, { useState } from "react";
import { cn } from "../../lib/utils";

export function Tabs({ tabs, defaultValue, className }: { tabs: { id: string; label: string; content: React.ReactNode }[], defaultValue?: string, className?: string }) {
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0].id);

  return (
    <div className={cn("w-full flex flex-col min-h-0", className)}>
      <div className="flex border-b border-primary/10 overflow-x-auto shrink-0 bg-surface px-2 pt-2 rounded-t-xl z-10 sticky top-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors border-b-2",
              activeTab === tab.id
                ? "border-accent text-accent"
                : "border-transparent text-primary/50 hover:text-primary hover:bg-primary/5"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="py-6 flex-1 overflow-y-auto w-full max-w-full">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
