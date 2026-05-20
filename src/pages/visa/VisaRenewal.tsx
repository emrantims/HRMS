import React, { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  History,
  RefreshCcw,
  CalendarClock,
  ShieldCheck,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Label } from "../../components/ui/Label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/Card";

export default function VisaRenewal() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="flex flex-col h-full gap-6 max-w-5xl mx-auto w-full pb-10">
      {/* Action Bar */}
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
              Process Visa Renewal
            </h1>
            <p className="text-primary/60 text-sm mt-1">
              Initiate residency renewal workflow for employee
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-sm border-primary/10 bg-surface">
            <CardHeader className="border-b border-primary/5 pb-4">
              <CardTitle className="text-sm">Current Active Profile</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="bg-background rounded-lg p-4 border border-primary/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-primary text-white flex justify-center items-center font-bold text-sm">
                    EL
                  </div>
                  <div>
                    <p className="font-bold text-primary">Elena Rostova</p>
                    <p className="text-[10px] text-primary/60 font-mono">
                      EMP-21-0089
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase font-bold text-warning tracking-widest">
                    Current Expiry
                  </p>
                  <p className="font-bold text-sm font-mono text-warning">
                    Dec 05, 2024
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-primary/10 bg-surface border-t-4 border-t-accent">
            <CardHeader className="border-b border-primary/5 pb-4">
              <CardTitle className="text-sm flex items-center gap-2">
                <RefreshCcw className="w-4 h-4 text-accent" /> Renewal Details
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Expected New Expiry Date</Label>
                  <Input type="date" defaultValue="2026-12-05" />
                </div>
                <div className="space-y-2">
                  <Label>Contract Duration</Label>
                  <div className="h-10 border border-primary/20 rounded px-3 py-2 bg-background text-sm flex items-center font-mono">
                    2 Years
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-primary/10 space-y-3">
                <p className="text-xs font-bold text-primary/60 uppercase tracking-wider mb-2">
                  Checklist for initialization
                </p>
                {[
                  "Passport valid for at least 6 months",
                  "Active Medical Insurance Policy available",
                  "Employee signature on Labour extension",
                ].map((item, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-primary/30 text-accent focus:ring-accent"
                    />
                    <span className="text-sm text-primary/80 group-hover:text-primary transition-colors">
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summary Pane */}
        <div className="space-y-6">
          <Card className="bg-primary text-white border-none shadow-xl sticky top-6">
            <CardHeader className="border-b border-white/10 pb-4">
              <CardTitle className="text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent" /> System
                Protections
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6 text-sm text-white/80 leading-relaxed">
              <p>
                Starting the renewal process will transition this visa into{" "}
                <span className="font-bold text-white bg-white/10 px-1 rounded">
                  Renewal Flow - Medical Stage
                </span>
                .
              </p>

              <div className="bg-black/20 rounded p-4 border border-white/10 space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                  <span className="text-xs">
                    HR Line Manager will be notified automatically.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CalendarClock className="w-4 h-4 text-warning shrink-0 mt-0.5" />
                  <span className="text-xs text-warning">
                    Avoid overstay fines: Do not delay medicals beyond expiry.
                  </span>
                </div>
              </div>

              <Button
                variant="accent"
                className="w-full h-12 text-sm mt-4 tracking-wide gap-2"
                onClick={() => navigate("/visa/list")}
              >
                Initiate Renewal Workflow
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
