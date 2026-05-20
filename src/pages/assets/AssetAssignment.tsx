import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  UserCheck,
  CheckCircle2,
  ArrowRightCircle,
  ArrowRight,
  Laptop,
  Search,
  AlertCircle,
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
import { Badge } from "../../components/ui/Badge";

// Mock data
const availableAssets = [
  {
    id: "AST-LPT-044",
    type: "Laptop",
    brand: "Dell Latitude 5420",
    serial: "DL-98234",
  },
  {
    id: "AST-MOB-042",
    type: "Mobile",
    brand: "Samsung Galaxy S22",
    serial: "SM-G9021",
  },
  {
    id: "AST-SIM-099",
    type: "SIM Card",
    brand: "Du 5G",
    serial: "055-9876543",
  },
];

export default function AssetAssignment() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialAsset = searchParams.get("asset");

  const [step, setStep] = useState(1);
  const [selectedAsset, setSelectedAsset] = useState(initialAsset || "");
  const [selectedEmployee, setSelectedEmployee] = useState("");

  const selectedAssetDetails = availableAssets.find(
    (a) => a.id === selectedAsset,
  );

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
              Issue Asset to Employee
            </h1>
            <p className="text-primary/60 text-sm mt-1">
              Assign company equipment out of inventory
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Step 1: Select Asset */}
          <Card
            className={`shadow-sm border-primary/10 transition-all ${step !== 1 && "opacity-60 grayscale"}`}
          >
            <CardHeader className="border-b border-primary/5 pb-4 bg-surface flex flex-row items-center justify-between">
              <CardTitle className="text-sm flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
                  1
                </span>
                Select Asset
              </CardTitle>
              {step > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setStep(1)}
                  className="h-6 text-xs text-accent"
                >
                  Edit
                </Button>
              )}
            </CardHeader>
            <CardContent className="pt-6">
              {step === 1 ? (
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-primary/40" />
                    <Input
                      placeholder="Scan barcode or search asset ID..."
                      className="pl-9 h-10 bg-background/50"
                    />
                  </div>
                  <div className="space-y-2 mt-4 max-h-[300px] overflow-y-auto pr-2">
                    <p className="text-[10px] uppercase font-bold text-primary/40 tracking-widest px-1 mb-2">
                      Available in Stock
                    </p>
                    {availableAssets.map((asset) => (
                      <div
                        key={asset.id}
                        className={`p-3 border rounded-lg cursor-pointer flex items-center justify-between hover:border-accent/40 hover:bg-accent/5 transition-all ${selectedAsset === asset.id ? "border-accent bg-accent/5 ring-1 ring-accent" : "border-primary/10 bg-surface"}`}
                        onClick={() => {
                          setSelectedAsset(asset.id);
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-background rounded-md border border-primary/5">
                            <Laptop className="w-4 h-4 text-primary/60" />
                          </div>
                          <div>
                            <p className="font-bold text-primary text-sm">
                              {asset.brand}
                            </p>
                            <p className="text-[10px] text-primary/50 font-mono">
                              {asset.id} • SN: {asset.serial}
                            </p>
                          </div>
                        </div>
                        {selectedAsset === asset.id && (
                          <CheckCircle2 className="w-5 h-5 text-accent" />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end pt-4">
                    <Button
                      variant="accent"
                      disabled={!selectedAsset}
                      onClick={() => setStep(2)}
                    >
                      Continue to Assignment{" "}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <div>
                    <p className="font-bold text-sm text-primary">
                      {selectedAssetDetails?.brand}
                    </p>
                    <p className="text-[10px] text-primary/60 font-mono">
                      {selectedAsset}
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Step 2: Select Employee */}
          <Card
            className={`shadow-sm border-primary/10 transition-all ${step !== 2 && "opacity-60 grayscale"}`}
          >
            <CardHeader className="border-b border-primary/5 pb-4 bg-surface flex flex-row items-center justify-between">
              <CardTitle className="text-sm flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
                  2
                </span>
                Assign Employee
              </CardTitle>
              {step > 2 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setStep(2)}
                  className="h-6 text-xs text-accent"
                >
                  Edit
                </Button>
              )}
            </CardHeader>
            <CardContent className="pt-6">
              {step === 2 ? (
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-primary/40" />
                    <Input
                      placeholder="Search employee name or code..."
                      className="pl-9 h-10 bg-background/50"
                      defaultValue="Sarah Connor"
                    />
                  </div>

                  <div
                    className={`mt-4 p-4 rounded-lg border cursor-pointer flex items-center justify-between transition-all ${selectedEmployee === "EMP-23-0145" ? "border-accent bg-accent/5 ring-1 ring-accent" : "border-primary/20 bg-surface"}`}
                    onClick={() => setSelectedEmployee("EMP-23-0145")}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex justify-center items-center font-bold text-sm">
                        SC
                      </div>
                      <div>
                        <p className="font-bold text-primary font-sans text-sm">
                          Sarah Connor
                        </p>
                        <p className="text-[10px] text-primary/60 font-mono">
                          EMP-23-0145 • Sales Dept
                        </p>
                      </div>
                    </div>
                    {selectedEmployee === "EMP-23-0145" && (
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    )}
                  </div>

                  <div className="flex justify-end pt-4">
                    <Button
                      variant="accent"
                      disabled={!selectedEmployee}
                      onClick={() => setStep(3)}
                    >
                      Continue to Details{" "}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              ) : step > 2 ? (
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <div>
                    <p className="font-bold text-sm text-primary">
                      Sarah Connor
                    </p>
                    <p className="text-[10px] text-primary/60 font-mono">
                      EMP-23-0145
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-sm text-primary/40 hidden">
                  Select an asset first
                </div>
              )}
            </CardContent>
          </Card>

          {/* Step 3: Issue Details */}
          <Card
            className={`shadow-sm border-primary/10 transition-all ${step !== 3 && "opacity-60 grayscale"}`}
          >
            <CardHeader className="border-b border-primary/5 pb-4 bg-surface">
              <CardTitle className="text-sm flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
                  3
                </span>
                Issue Details & Sign-off
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              {step === 3 ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Date of Issue</Label>
                      <Input
                        type="date"
                        defaultValue={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Expected Return (Optional)</Label>
                      <Input type="date" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Condition at time of issue</Label>
                    <Select>
                      <option>Excellent / New</option>
                      <option>Good (Minor wear)</option>
                      <option>Fair (Visible wear)</option>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Special Notes / Accessories Included</Label>
                    <Input placeholder="e.g., Includes charger and bag..." />
                  </div>
                </div>
              ) : null}
            </CardContent>
          </Card>
        </div>

        {/* Summary Pane */}
        <div className="space-y-6">
          <Card className="bg-primary text-white border-none shadow-xl sticky top-6">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
            <CardHeader className="border-b border-white/10 pb-4 relative z-10">
              <CardTitle className="text-sm">Assignment Receipt</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 relative z-10 space-y-6">
              <div>
                <p className="text-[10px] uppercase font-bold text-white/50 tracking-widest mb-2">
                  Asset Details
                </p>
                {selectedAsset ? (
                  <div>
                    <p className="font-bold">{selectedAssetDetails?.brand}</p>
                    <p className="text-xs text-white/70 font-mono mt-1">
                      {selectedAsset} • {selectedAssetDetails?.type}
                    </p>
                  </div>
                ) : (
                  <p className="text-xs text-white/30 italic">
                    Pending selection...
                  </p>
                )}
              </div>

              <div className="flex items-center justify-center py-2">
                <div className="w-px h-8 bg-white/20"></div>
              </div>

              <div>
                <p className="text-[10px] uppercase font-bold text-white/50 tracking-widest mb-2">
                  Assignee
                </p>
                {selectedEmployee ? (
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent text-white flex justify-center items-center font-bold text-xs">
                      SC
                    </div>
                    <div>
                      <p className="font-bold text-sm">Sarah Connor</p>
                      <p className="text-[10px] text-white/70 font-mono">
                        EMP-23-0145
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-white/30 italic">
                    Pending selection...
                  </p>
                )}
              </div>

              {step === 3 && (
                <>
                  <div className="bg-white/10 rounded p-3 text-xs text-white/80 border border-white/20 mt-4 leading-relaxed">
                    By completing this assignment, the employee agrees to the
                    company's asset usage policy and is responsible for its
                    condition.
                  </div>
                  <Button
                    variant="accent"
                    className="w-full h-12 text-sm mt-4 tracking-wide"
                    onClick={() => navigate("/assets/inventory")}
                  >
                    Complete Assignment & Issue
                  </Button>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
