import React, { useState } from "react";
import {
  ArrowLeft,
  Search,
  ShieldAlert,
  FileWarning,
  HelpCircle,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Label } from "../../components/ui/Label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/Card";

export default function VisaAbscond() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState("");

  return (
    <div className="flex flex-col h-full gap-6 max-w-4xl mx-auto w-full pb-10">
      <div className="flex items-center justify-between shrink-0 mb-2">
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
            <h1 className="text-2xl font-bold text-destructive tracking-tight">
              Register Abscond Case
            </h1>
            <p className="text-primary/60 text-sm mt-1">
              Critical legal workflow for missing employees
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Employee Selection */}
        <Card className="shadow-lg border-destructive/20 bg-surface">
          <CardHeader className="border-b border-primary/5 pb-4">
            <CardTitle className="text-sm">Identify Employee</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="relative mb-6 max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-3 text-primary/40" />
              <Input
                placeholder="Search employee code or name..."
                className="pl-9 h-10 bg-background/50"
                value={employee}
                onChange={(e) => setEmployee(e.target.value)}
              />
            </div>

            {employee.length > 2 && (
              <div className="bg-destructive/5 rounded p-4 border border-destructive/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-primary text-white flex justify-center items-center font-bold text-sm">
                    ZA
                  </div>
                  <div>
                    <p className="font-bold text-primary">Zaid Al-Hashmi</p>
                    <p className="text-[10px] text-primary/60 font-mono">
                      EMP-22-0311 • Logistics
                    </p>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="border-destructive text-destructive bg-white"
                >
                  Ready for Abscond File
                </Badge>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Abscond Details Form */}
        <Card
          className={`shadow-lg border-destructive/30 bg-surface transition-all ${employee.length <= 2 && "opacity-50 grayscale pointer-events-none"}`}
        >
          <CardHeader className="border-b border-destructive/10 pb-4 flex flex-row items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-destructive" />
            <CardTitle className="text-sm text-destructive">
              Incident Details & Legal Triggers
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-destructive font-bold">
                  Last Known Working Date{" "}
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  type="date"
                  className="border-destructive/30 focus-visible:ring-destructive"
                />
              </div>
              <div className="space-y-2">
                <Label>Police / Labour Report Number (If available)</Label>
                <Input placeholder="Enter reference number..." />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Incident Notes / Immediate Manager Report</Label>
              <textarea
                className="w-full min-h-[100px] flex rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Document communication attempts, 7-day absence criteria, etc..."
              ></textarea>
            </div>

            <div className="bg-destructive/10 border-l-4 border-l-destructive p-4 mt-6">
              <h4 className="font-bold text-destructive text-sm flex items-center gap-2 mb-2">
                <FileWarning className="w-4 h-4" /> System Actions Triggered
                Automatically
              </h4>
              <ul className="text-xs text-destructive/80 space-y-2 list-disc list-inside mt-2 font-medium">
                <li>
                  <strong>Immediate Freeze</strong> on upcoming payroll and EOSB
                  operations.
                </li>
                <li>
                  Notification sent to Legal / PRO team for Ministry of Human
                  Resources escalation.
                </li>
                <li>Access control and IT active directory suspension.</li>
              </ul>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-primary/10">
              <Button
                variant="outline"
                className="bg-surface hover:bg-primary/5"
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                className="gap-2 font-bold tracking-wide"
                onClick={() => navigate("/visa/list")}
              >
                Declare Abscond Status
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Inline badge for simplicity if not imported globally in this component
function Badge({ children, variant, className }: any) {
  return (
    <span className={`text-xs px-2 py-0.5 rounded ${className}`}>
      {children}
    </span>
  );
}
