import React, { useState } from "react";
import {
  ArrowLeft,
  ShieldAlert,
  FileWarning,
  Search,
  Coins,
  Save,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
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

export default function AssetDamageLoss() {
  const navigate = useNavigate();
  const [deductionAction, setDeductionAction] = useState("deduct");

  return (
    <div className="flex flex-col h-full gap-6 w-full max-w-5xl mx-auto pb-10">
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
              Damage & Loss Report
            </h1>
            <p className="text-primary/60 text-sm mt-1">
              Record asset damages, assess costs, and trigger payroll deductions
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card className="shadow-sm border-primary/10 bg-surface border-t-4 border-t-warning">
            <CardHeader className="border-b border-primary/5 pb-4">
              <CardTitle className="text-sm">Incident Details</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-primary/40" />
                <Input
                  placeholder="Search asset ID..."
                  className="pl-9 h-10 bg-background/50"
                  defaultValue="AST-LPT-001"
                />
              </div>

              <div className="space-y-2">
                <Label>Reported By (Employee)</Label>
                <Input
                  defaultValue="Sarah Connor (EMP-23-0145)"
                  disabled
                  className="bg-primary/5 font-bold"
                />
              </div>

              <div className="space-y-2">
                <Label>Incident Type</Label>
                <Select defaultValue="Damaged">
                  <option value="Damaged">Physical Damage</option>
                  <option value="Liquid">Liquid Damage</option>
                  <option value="Lost">Lost / Stolen</option>
                  <option value="Technical">Technical Fault (No Fault)</option>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Date of Incident</Label>
                <Input type="date" />
              </div>

              <div className="space-y-2">
                <Label>Description</Label>
                <Input placeholder="Describe how it happened..." />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="shadow-sm border-primary/10 bg-surface">
            <CardHeader className="border-b border-primary/5 pb-4">
              <CardTitle className="text-sm">
                Cost Assessment & Action
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/10 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] uppercase font-bold text-primary/50">
                    Original Asset Cost
                  </span>
                  <span className="font-mono font-bold text-primary">
                    AED 4,500
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] uppercase font-bold text-primary/50">
                    Estimated Repair / Rep. Cost
                  </span>
                  <Input
                    type="number"
                    defaultValue={1500}
                    className="w-32 text-right font-bold text-destructive font-mono h-8"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Financial Responsibility</Label>
                <Select
                  value={deductionAction}
                  onChange={(e) => setDeductionAction(e.target.value)}
                >
                  <option value="deduct">
                    Charge to Employee (Payroll Deduction)
                  </option>
                  <option value="company">
                    Charge to Company (Wear & Tear / Accidental)
                  </option>
                  <option value="insurance">Covered by Insurance</option>
                </Select>
              </div>

              {deductionAction === "deduct" && (
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 space-y-4 mt-4">
                  <div className="flex items-start gap-2 text-destructive">
                    <Coins className="w-5 h-5 shrink-0" />
                    <p className="text-sm font-bold">
                      Payroll Deduction Configuration
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-destructive">Deduction Method</Label>
                    <Select className="bg-background">
                      <option>Immediate Full Deduction (Next Payroll)</option>
                      <option>Installments (3 Months)</option>
                      <option>Create Formal Loan Profile</option>
                    </Select>
                  </div>
                  <p className="text-[10px] text-destructive/70 italic">
                    This will automatically flag the employee's next payroll
                    cycle in the payroll module.
                  </p>
                </div>
              )}

              <Button
                variant="accent"
                className="w-full gap-2 mt-4"
                onClick={() => navigate("/assets/inventory")}
              >
                <Save className="w-4 h-4" /> Save Incident Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
