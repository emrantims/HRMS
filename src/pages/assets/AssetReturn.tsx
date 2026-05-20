import React, { useState } from "react";
import {
  ArrowLeft,
  Search,
  CheckCircle2,
  ShieldAlert,
  Laptop,
  Lock,
  AlertCircle
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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

export default function AssetReturn() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialAsset = searchParams.get("asset") || "";

  const [returnCondition, setReturnCondition] = useState("Good");

  return (
    <div className="flex flex-col h-full gap-6 w-full max-w-5xl mx-auto pb-10">
      {/* Header */}
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
              Return Asset (Handover)
            </h1>
            <p className="text-primary/60 text-sm mt-1">
              Process asset returns for exit clearance or replacements
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-sm border-primary/10 bg-surface">
            <CardHeader className="border-b border-primary/5 pb-4">
              <CardTitle className="text-sm">Scan or Select Asset</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="relative mb-6">
                <Search className="w-4 h-4 absolute left-3 top-3 text-primary/40" />
                <Input
                  placeholder="Scan barcode or search ID..."
                  className="pl-9 h-10 bg-background/50"
                  defaultValue={initialAsset}
                />
              </div>

              <div className="p-4 rounded-lg border border-accent ring-1 ring-accent bg-accent/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-surface rounded-md shadow-sm border border-primary/10">
                    <Laptop className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-primary font-sans text-sm">
                      Dell Latitude 5420
                    </p>
                    <p className="text-[10px] text-primary/60 font-mono">
                      AST-LPT-001 • SN: DL-98213
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase font-bold text-primary/40">
                    Currently Assigned To
                  </p>
                  <p className="font-bold text-sm">Sarah Connor</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-primary/10 bg-surface">
            <CardHeader className="border-b border-primary/5 pb-4">
              <CardTitle className="text-sm">Return Assessment</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-4">
                <Label>
                  Condition upon return{" "}
                  <span className="text-destructive">*</span>
                </Label>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div
                    className={`p-4 border rounded-lg cursor-pointer text-center transition-all ${returnCondition === "Good" ? "border-success bg-success/10 ring-1 ring-success" : "border-primary/10 hover:border-primary/30"}`}
                    onClick={() => setReturnCondition("Good")}
                  >
                    <CheckCircle2
                      className={`w-6 h-6 mx-auto mb-2 ${returnCondition === "Good" ? "text-success" : "text-primary/30"}`}
                    />
                    <h4 className="font-bold text-sm">Good Working</h4>
                    <p className="text-[10px] mt-1 text-primary/60">
                      No visible damage
                    </p>
                  </div>

                  <div
                    className={`p-4 border rounded-lg cursor-pointer text-center transition-all ${returnCondition === "Damaged" ? "border-warning bg-warning/10 ring-1 ring-warning" : "border-primary/10 hover:border-primary/30"}`}
                    onClick={() => setReturnCondition("Damaged")}
                  >
                    <ShieldAlert
                      className={`w-6 h-6 mx-auto mb-2 ${returnCondition === "Damaged" ? "text-warning" : "text-primary/30"}`}
                    />
                    <h4 className="font-bold text-sm">Damaged</h4>
                    <p className="text-[10px] mt-1 text-primary/60">
                      Needs repair/cost
                    </p>
                  </div>

                  <div
                    className={`p-4 border rounded-lg cursor-pointer text-center transition-all ${returnCondition === "Lost" ? "border-destructive bg-destructive/10 ring-1 ring-destructive" : "border-primary/10 hover:border-primary/30"}`}
                    onClick={() => setReturnCondition("Lost")}
                  >
                    <Search
                      className={`w-6 h-6 mx-auto mb-2 ${returnCondition === "Lost" ? "text-destructive" : "text-primary/30"}`}
                    />
                    <h4 className="font-bold text-sm">Lost / Stolen</h4>
                    <p className="text-[10px] mt-1 text-primary/60">
                      Asset missing
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mt-4">
                <Label>Return Date</Label>
                <Input
                  type="date"
                  defaultValue={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div className="space-y-2">
                <Label>Return Notes / Details</Label>
                <Input placeholder="Enter details about condition..." />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summary Pane */}
        <div className="space-y-6">
          <Card className="bg-primary text-white border-none shadow-xl sticky top-6">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
            <CardHeader className="border-b border-white/10 pb-4 relative z-10">
              <CardTitle className="text-sm">Return Action Summary</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 relative z-10 space-y-6">
              {returnCondition === "Good" && (
                <div className="bg-success/20 border border-success/30 rounded p-4 text-sm text-white/90">
                  Asset will be marked as{" "}
                  <span className="font-bold text-success font-mono bg-success/20 px-1 rounded">
                    Available
                  </span>{" "}
                  in inventory. Employee clearance will pass.
                </div>
              )}

              {(returnCondition === "Damaged" ||
                returnCondition === "Lost") && (
                <div className="bg-destructive/20 border border-destructive/30 rounded p-4 text-sm text-white/90 space-y-4">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-destructive shrink-0" />
                    <p>
                      Asset will be marked as{" "}
                      <span className="font-bold text-destructive font-mono bg-destructive/20 px-1 rounded">
                        {returnCondition}
                      </span>
                      .
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">
                      Proceed to Cost Deduction
                    </p>
                    <Button
                      variant="outline"
                      className="w-full text-xs border-destructive text-white hover:bg-destructive"
                      onClick={() => navigate("/assets/damage")}
                    >
                      Continue to Damage Report
                    </Button>
                  </div>
                </div>
              )}

              {returnCondition === "Good" && (
                <Button
                  variant="accent"
                  className="w-full h-12 text-sm mt-4 tracking-wide gap-2"
                  onClick={() => navigate("/assets/inventory")}
                >
                  <Lock className="w-4 h-4" /> Confirm Return
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
