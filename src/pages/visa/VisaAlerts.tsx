import React from "react";
import {
  AlertTriangle,
  Clock,
  FileX,
  CheckCircle2,
  ChevronRight,
  X,
} from "lucide-react";
import { Button } from "../../components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/Card";

const smartAlerts = [
  {
    id: 1,
    type: "expiry",
    title: "Visa Expiring Soon",
    desc: "Elena Rostova (EMP-21-0089) visa expires in 15 days.",
    date: "Today",
    severity: "high",
    icon: <Clock className="w-4 h-4 text-warning" />,
    bg: "bg-warning/10",
    border: "border-warning",
  },
  {
    id: 2,
    type: "document",
    title: "Missing Document",
    desc: "Fatima Balooshi (EMP-24-0402) requires Medical Fitness Report upload.",
    date: "Yesterday",
    severity: "medium",
    icon: <FileX className="w-4 h-4 text-accent" />,
    bg: "bg-accent/10",
    border: "border-accent/40",
  },
  {
    id: 3,
    type: "abscond",
    title: "Abscond Review Required",
    desc: "Zaid Al-Hashmi requires final PRO document submission for legal file.",
    date: "2 Days ago",
    severity: "critical",
    icon: <AlertTriangle className="w-4 h-4 text-destructive" />,
    bg: "bg-destructive/10",
    border: "border-destructive",
  },
];

export default function VisaAlerts() {
  return (
    <div className="flex flex-col h-full gap-6 max-w-4xl mx-auto w-full pb-10">
      <div className="flex items-center justify-between shrink-0 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">
            Smart Alerts & Tasks
          </h1>
          <p className="text-primary/60 text-sm mt-1">
            Action items requiring HR or PRO attention
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {smartAlerts.map((alert) => (
          <Card
            key={alert.id}
            className={`border-l-4 shadow-sm hover:shadow-md transition-shadow ${alert.border}`}
          >
            <CardContent className="p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${alert.bg}`}
                >
                  {alert.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-primary text-sm sm:text-base">
                      {alert.title}
                    </h3>
                    {alert.severity === "critical" && (
                      <span className="bg-destructive text-white text-[9px] uppercase font-bold px-1.5 py-0.5 rounded tracking-widest">
                        Urgent
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-primary/70">{alert.desc}</p>
                  <p className="text-[10px] text-primary/40 font-mono mt-2">
                    {alert.date}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-none border-primary/5">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 text-xs flex-1 md:flex-none"
                  title="Mark as resolved"
                >
                  <CheckCircle2 className="w-3 h-3 mr-1" /> Resolve
                </Button>
                <Button
                  variant="accent"
                  size="sm"
                  className="h-8 text-xs flex-1 md:flex-none"
                >
                  Take Action
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {smartAlerts.length === 0 && (
          <div className="text-center py-20 border-2 border-dashed border-primary/10 rounded-xl">
            <CheckCircle2 className="w-12 h-12 text-primary/20 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-primary/60">
              All Caught Up!
            </h3>
            <p className="text-sm text-primary/40 mt-1">
              No pending alerts or compliance tasks.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
