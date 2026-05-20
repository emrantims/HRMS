import React from "react";
import {
  ArrowLeft,
  Clock,
  History,
  CheckCircle2,
  UserCheck,
  Wrench,
  Download,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/Card";

const historyLogs = [
  {
    id: 1,
    date: "Oct 15, 2024",
    action: "Assigned",
    actor: "Admin (System)",
    details: "Assigned to Sarah Connor (EMP-23-0145)",
    icon: <UserCheck className="w-4 h-4 text-accent" />,
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    id: 2,
    date: "Sep 20, 2024",
    action: "Returned",
    actor: "HR Dept",
    details: "Returned by John Doe. Condition: Good Working.",
    icon: <CheckCircle2 className="w-4 h-4 text-success" />,
    bg: "bg-success/10",
    border: "border-success/20",
  },
  {
    id: 3,
    date: "Jun 10, 2024",
    action: "Maintenance",
    actor: "IT Dept",
    details: "Battery replacement. Cost: AED 250",
    icon: <Wrench className="w-4 h-4 text-warning" />,
    bg: "bg-warning/10",
    border: "border-warning/20",
  },
  {
    id: 4,
    date: "Jan 12, 2023",
    action: "Created",
    actor: "Procurement",
    details: "Asset registered to Inventory. Cost: AED 5,500",
    icon: <History className="w-4 h-4 text-primary/60" />,
    bg: "bg-primary/5",
    border: "border-primary/10",
  },
];

export default function AssetHistory() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="flex flex-col h-full gap-6 max-w-4xl mx-auto w-full pb-10">
      <div className="flex items-center justify-between shrink-0 mb-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="-ml-2"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-primary tracking-tight">
              Asset Audit Trail
            </h1>
            <p className="text-primary/60 text-sm mt-1">
              Full lifecycle history for compliance and tracking
            </p>
          </div>
        </div>
        <Button variant="outline" className="gap-2 bg-surface text-primary">
          <Download className="w-4 h-4" /> Export Log
        </Button>
      </div>

      <Card className="bg-surface border-primary/10 mb-2">
        <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50 mb-1">
              Asset Reference
            </p>
            <h2 className="text-xl font-bold flex items-center gap-3">
              <span className="font-mono text-accent">
                {id || "AST-LPT-001"}
              </span>
              <span className="text-primary/30 font-normal">|</span>
              <span>Dell Latitude 5420</span>
            </h2>
            <p className="text-sm font-mono text-primary/60 mt-1">
              SN: DL-98213
            </p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50 mb-1">
              Current Status
            </p>
            <span className="bg-accent/10 border border-accent/20 text-accent font-bold px-3 py-1 rounded text-sm uppercase tracking-widest">
              Assigned
            </span>
          </div>
        </CardContent>
      </Card>

      <div className="relative pl-6 md:pl-8 py-6">
        {/* Vertical strict line */}
        <div className="absolute left-[39px] md:left-[47px] top-6 bottom-6 w-px bg-primary/10"></div>

        <div className="space-y-8">
          {historyLogs.map((log) => (
            <div key={log.id} className="relative flex items-start gap-6">
              {/* Timeline dot */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border z-10 ${log.bg} ${log.border} shadow-sm bg-surface`}
              >
                {log.icon}
              </div>

              {/* Content Box */}
              <Card className="flex-1 shadow-sm border-primary/10 hover:border-primary/20 transition-colors">
                <CardContent className="p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="font-bold text-primary flex items-center gap-2">
                      {log.action}
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest font-mono text-primary/40">
                      <Clock className="w-3 h-3" />
                      {log.date}
                    </div>
                  </div>
                  <p className="text-sm text-primary/80 leading-relaxed font-medium">
                    {log.details}
                  </p>
                  <div className="mt-3 pt-3 border-t border-primary/5 flex items-center justify-between">
                    <p className="text-xs text-primary/50">
                      Recorded by:{" "}
                      <span className="font-bold">{log.actor}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
