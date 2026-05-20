import React, { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  UploadCloud,
  RefreshCw,
  Check,
  MessageSquare,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/Card";
import { Search } from "lucide-react";
import { Input } from "../../components/ui/Input";

const PROCESS_STEPS = [
  {
    id: 1,
    title: "Offer Letter",
    required: ["Offer Letter Signed", "Passport Copy"],
  },
  { id: 2, title: "Work Permit Approval", required: ["MOHRE Approval"] },
  {
    id: 3,
    title: "Entry Permit / Change Status",
    required: ["Entry Permit Copy"],
  },
  {
    id: 4,
    title: "Medical Fitness Test",
    required: ["Medical Fit Certificate"],
  },
  { id: 5, title: "Emirates ID Biometrics", required: ["EID App Form"] },
  { id: 6, title: "Health Insurance", required: ["Insurance Policy"] },
  {
    id: 7,
    title: "Labour Contract Signing",
    required: ["Signed Labour Contract"],
  },
  { id: 8, title: "Visa Stamping", required: ["Stamped Visa Copy"] },
  {
    id: 9,
    title: "Final Activation",
    required: ["Physical Emirates ID", "Final Checklist"],
  },
];

export default function VisaNewProcess() {
  const navigate = useNavigate();
  const [currentStepId, setCurrentStepId] = useState(4); // Simulating medical step
  const [selectedEmp, setSelectedEmp] = useState("EMP-24-0012");

  return (
    <div className="flex flex-col h-full gap-6 w-full max-w-6xl mx-auto pb-10">
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
            <h1 className="text-2xl font-bold text-primary tracking-tight">
              New Visa Process Flow
            </h1>
            <p className="text-primary/60 text-sm mt-1">
              Guided workflow for obtaining a new employment residency
            </p>
          </div>
        </div>
        <Button variant="outline" className="bg-surface">
          Save state explicitly (Auto-saving)
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar selection & info */}
        <div className="space-y-6">
          <Card className="shadow-sm border-primary/10 bg-surface">
            <CardHeader className="border-b border-primary/5 pb-4">
              <CardTitle className="text-sm">Candidate Selection</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="relative mb-4">
                <Search className="w-4 h-4 absolute left-3 top-3 text-primary/40" />
                <Input
                  placeholder="Search employee..."
                  className="pl-9 h-10 bg-background/50"
                  defaultValue="Ahmed Ali"
                />
              </div>

              {selectedEmp && (
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex justify-center items-center font-bold text-sm">
                      AA
                    </div>
                    <div>
                      <p className="font-bold text-primary">Ahmed Ali</p>
                      <p className="text-[10px] text-primary/60 font-mono">
                        EMP-24-0012
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-primary/10 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-primary/50">Company</span>
                      <span className="font-bold text-primary">
                        Al Maha Tech
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-primary/50">Visa Type</span>
                      <span className="font-bold text-primary">Employment</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-primary/50">Job Title</span>
                      <span className="font-bold text-primary">
                        Software Engineer
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="bg-warning/10 border border-warning/20 rounded-lg p-4 text-xs text-warning-foreground font-medium">
            An employee can begin work after Step 3 (Entry Permit / Change of
            Status) but must complete all steps within 60 days to avoid overstay
            fines.
          </div>
        </div>

        {/* Vertical Stepper */}
        <div className="lg:col-span-2">
          <Card className="shadow-sm border-primary/10">
            <div className="p-6">
              <div className="relative">
                {/* Strict vertical line for timeline */}
                <div className="absolute left-[19px] top-4 bottom-8 w-px bg-primary/10"></div>

                <div className="space-y-8">
                  {PROCESS_STEPS.map((step, index) => {
                    const isCompleted = step.id < currentStepId;
                    const isCurrent = step.id === currentStepId;
                    const isPending = step.id > currentStepId;

                    return (
                      <div
                        key={step.id}
                        className="relative flex items-start gap-4"
                      >
                        {/* Dot */}
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 z-10 bg-surface ${isCompleted ? "border-success text-success" : isCurrent ? "border-accent text-accent ring-4 ring-accent/10" : "border-primary/20 text-primary/30"}`}
                        >
                          {isCompleted ? (
                            <Check className="w-5 h-5" />
                          ) : (
                            <span className="font-bold text-sm">{step.id}</span>
                          )}
                        </div>

                        {/* Step Content */}
                        <div
                          className={`flex-1 rounded-xl border p-5 transition-all ${isCurrent ? "border-accent bg-accent/5 shadow-sm" : isCompleted ? "border-success/20 bg-success/5 opacity-80" : "border-primary/10 bg-background/50 grayscale opacity-60"}`}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                            <h3
                              className={`font-bold text-base ${isCurrent ? "text-accent" : "text-primary"}`}
                            >
                              {step.title}
                            </h3>
                            {isCompleted && (
                              <span className="text-[10px] font-bold text-success uppercase tracking-widest flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3" /> Completed
                              </span>
                            )}
                            {isCurrent && (
                              <span className="text-[10px] font-bold text-accent uppercase tracking-widest flex items-center gap-1">
                                <RefreshCw className="w-3 h-3 animate-spin duration-3000" />{" "}
                                In Progress
                              </span>
                            )}
                            {isPending && (
                              <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest flex items-center gap-1">
                                <Clock className="w-3 h-3" /> Pending
                              </span>
                            )}
                          </div>

                          {/* Action Area (Only visible for current or completed if viewing details) */}
                          {(isCurrent || isCompleted) && (
                            <div className="mt-4 space-y-4">
                              <div className="space-y-2">
                                <p className="text-xs font-bold text-primary/60 uppercase tracking-wider">
                                  Required Documents
                                </p>
                                {step.required.map((req, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center justify-between bg-surface p-3 rounded border border-primary/5"
                                  >
                                    <span className="text-sm font-medium">
                                      {req}
                                    </span>
                                    {isCompleted ? (
                                      <span className="text-xs text-primary/40 font-mono">
                                        Uploaded
                                      </span>
                                    ) : (
                                      <label className="cursor-pointer text-xs flex items-center gap-2 text-accent border border-accent/20 px-3 py-1.5 rounded hover:bg-accent/10 transition-colors">
                                        <UploadCloud className="w-3 h-3" />{" "}
                                        Upload PDF
                                        <input type="file" className="hidden" />
                                      </label>
                                    )}
                                  </div>
                                ))}
                              </div>

                              {isCurrent && (
                                <div className="pt-4 flex items-center justify-between border-t border-primary/10">
                                  <div className="relative flex-1 mr-4">
                                    <MessageSquare className="w-4 h-4 absolute left-3 top-2.5 text-primary/30" />
                                    <Input
                                      placeholder="PRO notes tracking..."
                                      className="pl-9 h-9 text-xs"
                                    />
                                  </div>
                                  <Button
                                    variant="accent"
                                    className="h-9 gap-2 shadow-sm text-xs"
                                    onClick={() =>
                                      setCurrentStepId((prev) => prev + 1)
                                    }
                                  >
                                    Mark Step Completed
                                  </Button>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
