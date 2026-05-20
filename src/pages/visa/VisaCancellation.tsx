import React, { useState } from "react";
import {
  ArrowLeft,
  UserX,
  AlertCircle,
  FileX,
  CreditCard,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Label } from "../../components/ui/Label";
import { Select } from "../../components/ui/Select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/Card";

export default function VisaCancellation() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [step, setStep] = useState(1);
  const [reason, setReason] = useState("");

  return (
    <div className="flex flex-col h-full gap-6 max-w-5xl mx-auto w-full pb-10">
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
              Visa Cancellation
            </h1>
            <p className="text-primary/60 text-sm mt-1">
              Initiate final settlement and residency cancellation
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card
            className={`shadow-sm border-primary/10 bg-surface transition-all ${step !== 1 && "opacity-60 grayscale"}`}
          >
            <CardHeader className="border-b border-primary/5 pb-4 flex flex-row items-center justify-between">
              <CardTitle className="text-sm">
                1. Cancellation Request Details
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              {step === 1 ? (
                <>
                  <div className="space-y-2">
                    <Label>Reason for Cancellation</Label>
                    <Select
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                    >
                      <option value="">Select reason...</option>
                      <option value="resignation">
                        Resignation / End of Contract
                      </option>
                      <option value="termination">Termination</option>
                      <option value="abscond">
                        Absconding (Will trigger legal workflow)
                      </option>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Employee Exit Status</Label>
                    <Select>
                      <option>Leaving UAE (Exit Ticket Required)</option>
                      <option>Change of Status (Inside Country)</option>
                    </Select>
                  </div>
                  <div className="flex justify-end pt-2">
                    <Button
                      variant="accent"
                      disabled={!reason}
                      onClick={() => setStep(2)}
                    >
                      Continue to Validations
                    </Button>
                  </div>
                </>
              ) : (
                <div className="text-sm font-bold text-primary capitalize flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success" /> Reason:{" "}
                  {reason}
                </div>
              )}
            </CardContent>
          </Card>

          <Card
            className={`shadow-sm border-primary/10 bg-surface transition-all ${step !== 2 && "opacity-60 grayscale pointer-events-none"}`}
          >
            <CardHeader className="border-b border-primary/5 pb-4">
              <CardTitle className="text-sm">
                2. Clearance & Dependencies
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="bg-primary/5 p-4 rounded border border-primary/10 space-y-3 pointer-events-auto">
                <p className="text-xs font-bold text-primary/50 uppercase tracking-widest mb-1">
                  System Audit Checks
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <FileX className="w-4 h-4 text-success" />
                    <span className="font-medium">Company Assets Handover</span>
                  </div>
                  <span className="text-xs bg-success/10 text-success px-2 py-0.5 rounded font-bold">
                    Cleared
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm pt-2 border-t border-primary/10">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-warning" />
                    <span className="font-medium">
                      Payroll Full & Final (EOSB)
                    </span>
                  </div>
                  <span className="text-xs bg-warning/10 text-warning px-2 py-0.5 rounded font-bold">
                    Pending Clearance
                  </span>
                </div>
              </div>

              {step === 2 && (
                <div className="flex justify-end pt-4">
                  <Button variant="accent" onClick={() => setStep(3)}>
                    Acknowledge & Proceed
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          <Card
            className={`shadow-sm border-destructive/20 bg-destructive/5 transition-all ${step !== 3 && "opacity-50 grayscale pointer-events-none"}`}
          >
            <CardHeader className="border-b border-destructive/10 pb-4">
              <CardTitle className="text-sm text-destructive flex items-center gap-2">
                <AlertCircle className="w-4 h-4" /> 3. Final Cancellation
                Documents
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Labour Cancellation Paper</Label>
                  <Input type="file" className="cursor-pointer" />
                </div>
                <div className="space-y-2">
                  <Label>Sponsor / Visa Cancellation Paper</Label>
                  <Input type="file" className="cursor-pointer" />
                </div>
              </div>

              <div className="bg-white/50 border border-destructive/20 p-4 rounded mt-4 text-xs font-medium text-destructive leading-relaxed">
                By confirming, this visa profile will be deactivated. The
                Emirates ID will be marked as invalid in the system, and access
                to company IT services will be revoked.
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-surface shadow-sm sticky top-6 border-primary/10">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/5 border-2 border-primary/10 flex items-center justify-center mx-auto mb-3">
                  <UserX className="w-8 h-8 text-primary/40" />
                </div>
                <p className="font-bold text-lg">Zaid Al-Hashmi</p>
                <p className="text-xs font-mono text-primary/50 mt-1">
                  EMP-22-0311
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-primary/10">
                <div className="flex justify-between text-xs">
                  <span className="text-primary/60">Visa Status</span>
                  <span className="font-bold text-primary">Active</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-primary/60">Expiry</span>
                  <span className="font-mono">Mar 10, 2024</span>
                </div>
              </div>

              <Button
                variant="destructive"
                className="w-full mt-6 h-10 font-bold tracking-wide"
                disabled={step !== 3}
                onClick={() => navigate("/visa/list")}
              >
                Confirm Final Cancellation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
