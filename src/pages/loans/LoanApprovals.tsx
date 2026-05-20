import React from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  XCircle,
  Search,
  Filter,
} from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";

const mockApprovals = [
  {
    id: "REQ-2024-041",
    emp: "Zaid Al-Hashmi",
    code: "EMP-22-0311",
    type: "Personal Loan",
    amount: 15000,
    reqDate: "12 Oct 2024",
    duration: 10,
    status: "Pending HR",
  },
  {
    id: "REQ-2024-042",
    emp: "Elena Rostova",
    code: "EMP-21-0089",
    type: "Salary Advance",
    amount: 4000,
    reqDate: "14 Oct 2024",
    duration: 2,
    status: "Pending Admin",
  },
];

export default function LoanApprovals() {
  return (
    <div className="flex flex-col h-full gap-6 w-full pb-10">
      {/* Header */}
      <div className="flex items-center justify-between shrink-0 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">
            Loan Approvals
          </h1>
          <p className="text-primary/60 text-sm mt-1">
            Review, approve, or reject employee loan requests
          </p>
        </div>
      </div>

      {/* Filters */}
      <Card className="shrink-0 bg-surface">
        <div className="p-4 flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-primary/40" />
            <Input
              placeholder="Search request ID or employee..."
              className="pl-9 bg-background/50"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-6">
        {mockApprovals.map((req) => (
          <Card
            key={req.id}
            className="border-l-4 border-l-warning overflow-hidden shadow-sm"
          >
            <div className="bg-surface p-6 flex flex-col md:flex-row justify-between gap-6">
              {/* Requester Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Badge
                    variant="outline"
                    className="text-[10px] font-mono border-primary/20"
                  >
                    {req.id}
                  </Badge>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">
                    Requested: {req.reqDate}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-primary">{req.emp}</h2>
                <p className="text-sm text-primary/60 mt-1">
                  {req.code} • Sales Department
                </p>

                <div className="flex items-center gap-6 mt-6 bg-background p-4 rounded border border-primary/10 w-fit">
                  <div>
                    <p className="text-[10px] uppercase font-bold text-primary/40">
                      Loan Type
                    </p>
                    <p className="font-bold text-sm">{req.type}</p>
                  </div>
                  <div className="w-px h-8 bg-primary/10"></div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-primary/40">
                      Requested Amount
                    </p>
                    <p className="font-mono font-black text-lg text-accent">
                      AED {req.amount.toLocaleString()}
                    </p>
                  </div>
                  <div className="w-px h-8 bg-primary/10"></div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-primary/40">
                      Duration
                    </p>
                    <p className="font-mono font-bold text-sm">
                      {req.duration} Months
                    </p>
                  </div>
                </div>
              </div>

              {/* Workflow Actions */}
              <div className="flex flex-col gap-3 min-w-[250px] bg-background p-4 rounded border border-primary/10">
                <p className="text-[10px] uppercase font-bold text-primary/50 tracking-widest cursor-default">
                  Approval Workflow
                </p>

                {req.status === "Pending HR" ? (
                  <>
                    <div className="flex items-center justify-between p-2 rounded bg-warning/10 border border-warning/20">
                      <span className="text-xs font-bold text-warning flex items-center gap-2">
                        <Clock className="w-4 h-4" /> Line Manager
                      </span>
                      <span className="text-[10px] text-warning/70">
                        Pending Review
                      </span>
                    </div>
                    <div className="mt-auto flex gap-2 pt-2">
                      <Button
                        variant="outline"
                        className="flex-1 bg-surface text-destructive border-destructive/20 hover:bg-destructive/10 text-xs"
                      >
                        Reject
                      </Button>
                      <Button variant="accent" className="flex-1 text-xs">
                        Approve (Mgr)
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-between p-2 rounded bg-success/10 border border-success/20">
                      <span className="text-xs font-bold text-success flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" /> Line Manager
                      </span>
                      <span className="text-[10px] text-success/70">
                        Approved
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-warning/10 border border-warning/20">
                      <span className="text-xs font-bold text-warning flex items-center gap-2">
                        <Clock className="w-4 h-4" /> Group HR Mgr
                      </span>
                      <span className="text-[10px] text-warning/70">
                        Pending Review
                      </span>
                    </div>
                    <div className="mt-auto flex flex-col gap-2 pt-2">
                      <Input
                        placeholder="Rejection reason (optional)"
                        className="h-8 text-xs bg-surface"
                      />
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          className="flex-1 bg-surface text-destructive border-destructive/20 hover:bg-destructive/10 text-xs h-8"
                        >
                          Reject
                        </Button>
                        <Button variant="accent" className="flex-1 text-xs h-8">
                          Approve (HR)
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
