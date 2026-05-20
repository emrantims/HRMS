import React, { useState } from "react";
import { ArrowLeft, Save, UploadCloud } from "lucide-react";
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

export default function AssetCreate() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full gap-6 w-full max-w-4xl mx-auto pb-10">
      {/* Header */}
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
              Add New Asset
            </h1>
            <p className="text-primary/60 text-sm mt-1">
              Register a newly purchased or acquired equipment
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="bg-surface"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
          <Button
            variant="accent"
            className="gap-2"
            onClick={() => navigate("/assets/inventory")}
          >
            <Save className="w-4 h-4" /> Save Asset
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Classification */}
        <Card className="shadow-sm border-primary/10">
          <CardHeader className="border-b border-primary/5 pb-4 bg-surface">
            <CardTitle className="text-sm">Classification & Type</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>
                  Asset Category <span className="text-destructive">*</span>
                </Label>
                <Select>
                  <option value="">Select Category...</option>
                  <option value="Laptop">Laptop / Computer</option>
                  <option value="Mobile">Mobile Phone</option>
                  <option value="Vehicle">Vehicle</option>
                  <option value="SIM">SIM Card</option>
                  <option value="AccessCard">Access Card</option>
                  <option value="Misc">Other Equipment</option>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Condition at Registration</Label>
                <Select>
                  <option value="New">Brand New</option>
                  <option value="Used-Good">Used - Good</option>
                  <option value="Used-Fair">Used - Fair</option>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Identification */}
        <Card className="shadow-sm border-primary/10">
          <CardHeader className="border-b border-primary/5 pb-4 bg-surface">
            <CardTitle className="text-sm">Identification & Details</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>
                  Brand / Make <span className="text-destructive">*</span>
                </Label>
                <Input placeholder="e.g., Apple, Dell, Toyota..." />
              </div>
              <div className="space-y-2">
                <Label>
                  Model <span className="text-destructive">*</span>
                </Label>
                <Input placeholder="e.g., MacBook Pro 14, Corolla 2023..." />
              </div>
              <div className="space-y-2">
                <Label>
                  Serial Number / IMEI / Plate No{" "}
                  <span className="text-destructive">*</span>
                </Label>
                <Input
                  placeholder="Enter unique identifier..."
                  className="font-mono text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label>Custom Asset Tag (Optional)</Label>
                <Input
                  placeholder="e.g., AST-2024-001"
                  className="font-mono text-sm"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Purchase & Warranty */}
        <Card className="shadow-sm border-primary/10">
          <CardHeader className="border-b border-primary/5 pb-4 bg-surface">
            <CardTitle className="text-sm">Purchase & Warranty</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>
                  Purchase Date <span className="text-destructive">*</span>
                </Label>
                <Input type="date" />
              </div>
              <div className="space-y-2">
                <Label>Cost Value (AED)</Label>
                <Input type="number" placeholder="0.00" className="font-mono" />
              </div>
              <div className="space-y-2">
                <Label>Warranty Expiry</Label>
                <Input type="date" />
              </div>
              <div className="space-y-2 md:col-span-3 mt-4">
                <Label>Upload Invoices / Documents</Label>
                <div className="border-2 border-dashed border-primary/20 rounded-lg p-6 flex flex-col items-center justify-center bg-primary/5 cursor-pointer hover:bg-primary/10 transition-colors">
                  <UploadCloud className="w-8 h-8 text-primary/40 mb-2" />
                  <span className="text-sm font-medium text-primary/70">
                    Click to upload or drag and drop
                  </span>
                  <span className="text-xs text-primary/40 mt-1">
                    PDF, JPG, PNG up to 10MB
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-3 mt-4 hidden">
          <Button
            variant="outline"
            className="bg-surface"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
          <Button variant="accent" className="gap-2">
            <Save className="w-4 h-4" /> Save Asset
          </Button>
        </div>
      </div>
    </div>
  );
}
