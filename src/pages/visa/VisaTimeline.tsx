import React from "react";
import {
  ArrowLeft,
  Clock,
  History,
  CheckCircle2,
  FileCheck,
  Stethoscope,
  FileText,
  Download,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/Card";

const timelineEvents = [
  {
    id: 1,
    date: "Oct 15, 2023",
    action: "Final Activation & Emirates ID Received",
    actor: "PRO Team",
    icon: <CheckCircle2 className="w-4 h-4 text-success" />,
    bg: "bg-success/10",
    border: "border-success/20",
  },
  {
    id: 2,
    date: "Oct 10, 2023",
    action: "Visa Stamped on Passport",
    actor: "PRO Team",
    icon: <FileCheck className="w-4 h-4 text-accent" />,
    bg: "bg-accent/10",
    border: "border-accent/20",
  },
  {
    id: 3,
    date: "Oct 05, 2023",
    action: "Labour Contract Signed",
    actor: "Sarah Connor",
    icon: <FileText className="w-4 h-4 text-primary/60" />,
    bg: "bg-primary/5",
    border: "border-primary/10",
  },
  {
    id: 4,
    date: "Oct 01, 2023",
    action: "Medical Fitness Test Passed",
    actor: "System Default",
    icon: <Stethoscope className="w-4 h-4 text-primary/60" />,
    bg: "bg-primary/5",
    border: "border-primary/10",
  },
  {
    id: 5,
    date: "Sep 25, 2023",
    action: "Entry Permit Issued",
    actor: "PRO Team",
    icon: <History className="w-4 h-4 text-primary/60" />,
    bg: "bg-primary/5",
    border: "border-primary/10",
  },
];

export default function VisaTimeline() {
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
              Visa Lifecycle Timeline
            </h1>
            <p className="text-primary/60 text-sm mt-1">
              Audit log of all immigration and PRO steps
            </p>
          </div>
        </div>
        <Button variant="outline" className="gap-2 bg-surface text-primary">
          <Download className="w-4 h-4" /> Export Log
        </Button>
      </div>

      <Card className="bg-surface border-primary/10 mb-2">
        <CardContent className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded bg-primary text-white flex justify-center items-center font-bold text-lg">
              SC
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary">Sarah Connor</h2>
              <p className="text-xs font-mono text-primary/60 mt-1">
                {id || "EMP-23-0145"}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase font-bold text-primary/50 mb-1">
              Visa Status
            </p>
            <span className="font-bold text-success text-sm bg-success/10 px-2 py-1 rounded">
              Active Residency
            </span>
          </div>
        </CardContent>
      </Card>

      <div className="relative pl-6 md:pl-8 py-6">
        {/* Vertical line */}
        <div className="absolute left-[39px] md:left-[47px] top-6 bottom-6 w-px bg-primary/10"></div>

        <div className="space-y-8">
          {timelineEvents.map((event) => (
            <div key={event.id} className="relative flex items-start gap-6">
              {/* Timeline dot */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border z-10 ${event.bg} ${event.border} shadow-sm bg-surface`}
              >
                {event.icon}
              </div>

              {/* Content Box */}
              <Card className="flex-1 shadow-sm border-primary/10">
                <CardContent className="p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="font-bold text-primary text-sm sm:text-base">
                      {event.action}
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest font-mono text-primary/40">
                      <Clock className="w-3 h-3" />
                      {event.date}
                    </div>
                  </div>
                  <div className="pt-3 border-t border-primary/5 mt-2">
                    <p className="text-xs text-primary/50">
                      Completed by:{" "}
                      <span className="font-bold">{event.actor}</span>
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
