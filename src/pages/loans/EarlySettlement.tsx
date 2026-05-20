import React, { useState } from "react";
import {
  ArrowLeft,
  HandCoins,
  AlertCircle,
  Calendar,
  RefreshCcw,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Label } from "../../components/ui/Label";
import { Select } from "../../components/ui/Select";

export default function EarlySettlement() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [settleAmount, setSettleAmount] = useState<number>(4500);
  const [settleType, setSettleType] = useState<"full" | "partial">("full");

  const activeBalance = 4500;
  const emi = 1500;
  const remainingRemaining = Math.max(0, activeBalance - settleAmount);

  return (
    <div className="flex flex-col h-full gap-6 max-w-4xl mx-auto w-full pb-10">
      <div className="flex items-center justify-between shrink-0 mb-2">
        <Button
          variant="ghost"
          className="gap-2 -ml-3"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Button>
      </div>

      <div className="bg-surface rounded-2xl p-6 border border-primary/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 shrink-0">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">
            Loan Settlement
          </p>
          <h1 className="text-2xl font-bold tracking-tight text-primary mt-1">
            L-2024-089
          </h1>
          <p className="text-sm font-medium text-primary/70 mt-1">
            Sarah Connor (EMP-23-0145)
          </p>
        </div>
        <div className="flex gap-6 text-right">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">
              Current Balance
            </p>
            <p className="font-bold text-2xl font-mono text-destructive">
              AED {activeBalance.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Card className="shadow-sm border-primary/10 flex flex-col h-full">
            <CardHeader className="border-b border-primary/5 pb-4 bg-surface">
              <CardTitle className="text-sm">Settlement Details</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <Label>Settlement Type</Label>
                <Select
                  value={settleType}
                  onChange={(e) => {
                    const val = e.target.value as "full" | "partial";
                    setSettleType(val);
                    if (val === "full") setSettleAmount(activeBalance);
                  }}
                >
                  <option value="full">Full Closure (Remaining Balance)</option>
                  <option value="partial">Partial Payment (Extra)</option>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Payment Amount (AED)</Label>
                <Input
                  type="number"
                  value={settleAmount}
                  onChange={(e) => setSettleAmount(Number(e.target.value))}
                  disabled={settleType === "full"}
                  className="font-mono font-bold text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label>Payment Source / Method</Label>
                <Select>
                  <option>Deduct from Next Payroll</option>
                  <option>Direct Bank Transfer (HR Manual)</option>
                  <option>Cash Payment (Cashier)</option>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Reason / Note</Label>
                <Input placeholder="Enter reason..." />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="shadow-sm border-primary/10 bg-surface">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <RefreshCcw className="w-5 h-5 text-accent" />
                <h3 className="font-bold text-primary">Simulation Result</h3>
              </div>

              <div className="bg-background rounded-lg border border-primary/5 p-4 space-y-4 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-primary/70">Current Balance</span>
                  <span className="font-bold">4,500.00</span>
                </div>
                <div className="flex justify-between text-success">
                  <span>- Payment</span>
                  <span className="font-bold">
                    {settleAmount.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
                <div className="border-t border-primary/10 pt-4 flex justify-between font-bold text-lg">
                  <span>New Balance</span>
                  <span
                    className={
                      remainingRemaining === 0
                        ? "text-primary/40"
                        : "text-destructive"
                    }
                  >
                    {remainingRemaining.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </div>

              {remainingRemaining > 0 && (
                <div className="mt-4 bg-warning/10 border border-warning/20 rounded p-3 text-xs text-warning-foreground font-medium flex gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  Repayment schedule will be updated. Your monthly EMI remains
                  AED 1,500, but duration is reduced to{" "}
                  {Math.ceil(remainingRemaining / emi)} months.
                </div>
              )}

              {remainingRemaining <= 0 && (
                <div className="mt-4 bg-success/10 border border-success/20 rounded p-3 text-xs text-success font-medium flex gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  Loan will be fully closed. Monthly payroll deduction of AED
                  1,500 will be stopped.
                </div>
              )}
            </CardContent>
          </Card>

          <Button
            variant="accent"
            className="w-full gap-2 h-12"
            onClick={() => navigate(-1)}
          >
            {remainingRemaining <= 0 ? (
              <>Final Closure & Settle</>
            ) : (
              <>Apply Partial Payment</>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
