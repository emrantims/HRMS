import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Save, CheckCircle2 } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import { Label } from "../../components/ui/Label";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/Card";

export default function EmployeeCreate() {
  const navigate = useNavigate();
  const location = useLocation();
  const isEdit = location.pathname.includes('/edit');
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigate("/employees");
      }, 2000);
    }, 800);
  };

  return (
    <div className="flex flex-col h-full gap-6 max-w-5xl mx-auto w-full pb-10 relative">
      {showSuccess && (
        <div className="absolute top-0 inset-x-0 mx-auto w-fit bg-success text-white px-6 py-3 rounded-full flex items-center justify-center font-bold shadow-lg animate-in fade-in slide-in-from-top-4 z-50">
          <CheckCircle2 className="w-5 h-5 mr-2" /> 
          {isEdit ? "Employee updated successfully!" : "Employee saved successfully!"}
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="rounded-full bg-surface border border-primary/10">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-primary tracking-tight">
              {isEdit ? 'Edit Employee Profile' : 'Add New Employee'}
            </h1>
            <p className="text-primary/60 text-sm mt-1">
              {isEdit ? 'Update employee information and core details' : 'Draft a new employee profile to begin onboarding'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2 bg-surface">
            <Save className="w-4 h-4" /> Save Draft
          </Button>
          <Button variant="accent" className="gap-2" onClick={handleSave} disabled={isSaving}>
            <CheckCircle2 className="w-4 h-4" /> 
            {isSaving ? "Saving..." : (isEdit ? 'Update Profile' : 'Submit Employee')}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        
        {isEdit && (
          <Card className="border-warning/30 bg-warning/5">
             <CardContent className="p-4">
                <Label>Audit Note (Reason for Edit) *</Label>
                <Input placeholder="E.g., Visa renewed, salary increment..." className="mt-2 bg-surface" />
             </CardContent>
          </Card>
        )}

        {/* System Info (Read Only) */}
        <Card>
          <CardHeader>
            <CardTitle>System Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Employee Code</Label>
              <Input value={isEdit ? "EMP-2024-0012" : "TMP-AUTO-901"} disabled className="bg-background/50 font-mono text-primary/60" />
            </div>
            <div className="space-y-2">
              <Label>System Status</Label>
              <Input value={isEdit ? "Active" : "Pending Activation"} disabled className="bg-background/50 font-bold" />
            </div>
          </CardContent>
        </Card>

        {/* Personal Info */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 md:col-span-2">
              <Label>Full Name *</Label>
              <Input placeholder="As per passport" defaultValue={isEdit ? "Ahmed Ali" : ""} />
            </div>
            <div className="space-y-2">
              <Label>Father's Name</Label>
              <Input defaultValue={isEdit ? "Ali Hassan" : ""} />
            </div>
            <div className="space-y-2">
              <Label>Nationality *</Label>
              <Select defaultValue={isEdit ? "AE" : ""}>
                <option value="" disabled>Select Nationality</option>
                <option value="AE">United Arab Emirates</option>
                <option value="IN">India</option>
                <option value="PK">Pakistan</option>
                <option value="PH">Philippines</option>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Date of Birth *</Label>
              <Input type="date" defaultValue={isEdit ? "1988-05-14" : ""} />
            </div>
            <div className="space-y-2">
              <Label>Phone Number *</Label>
              <Input placeholder="+971 50 000 0000" defaultValue={isEdit ? "+971501234567" : ""} />
            </div>
            <div className="space-y-2">
              <Label>Personal Email *</Label>
              <Input type="email" placeholder="email@example.com" defaultValue={isEdit ? "ahmed.a@example.com" : ""} />
            </div>
            <div className="space-y-2">
              <Label>Local Address</Label>
              <Input placeholder="Street, Area, Emirate" defaultValue={isEdit ? "Dubai Marina, Dubai" : ""} />
            </div>
          </CardContent>
        </Card>

        {/* Job Info */}
        <Card>
          <CardHeader>
            <CardTitle>Job Details</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label>Company *</Label>
              <Select defaultValue={isEdit ? "tech" : ""}>
                <option value="" disabled>Select Company</option>
                <option value="tech">Al Maha Tech</option>
                <option value="realestate">Al Maha Real Estate</option>
                <option value="trading">Al Maha Trading</option>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Branch *</Label>
              <Select defaultValue={isEdit ? "hq" : ""}>
                <option value="" disabled>Select Branch</option>
                <option value="hq">Dubai HQ</option>
                <option value="auh">Abu Dhabi</option>
                <option value="shj">Sharjah</option>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Department *</Label>
              <Select defaultValue={isEdit ? "eng" : ""}>
                <option value="" disabled>Select Department</option>
                <option value="eng">Engineering</option>
                <option value="sales">Sales</option>
                <option value="hr">Human Resources</option>
                <option value="ops">Operations</option>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Job Title / Role *</Label>
              <Input placeholder="e.g. Senior Developer" defaultValue={isEdit ? "Senior Developer" : ""} />
            </div>
            <div className="space-y-2">
              <Label>Direct Manager</Label>
              <Select defaultValue={isEdit ? "mngr" : ""}>
                <option value="" disabled>Assign Manager</option>
                <option value="mngr">Tariq Mahmood (CTO)</option>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Date of Joining</Label>
              <Input type="date" defaultValue={isEdit ? "2024-01-12" : ""} />
            </div>
            
            <div className="col-span-1 md:col-span-2 lg:col-span-3 border-t border-primary/10 pt-6 mt-2">
              <h4 className="text-sm font-bold text-primary mb-4">Payroll & Compensation</h4>
            </div>
            
            <div className="space-y-2">
              <Label>Employee Type *</Label>
              <Select defaultValue={isEdit ? "fixed" : ""}>
                <option value="" disabled>Select Type</option>
                <option value="fixed">Fixed Salary</option>
                <option value="commission">Commission Only</option>
                <option value="mixed">Mixed (Salary + Comm)</option>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Base Salary (AED) *</Label>
              <Input type="number" placeholder="0.00" defaultValue={isEdit ? "22000" : ""} />
            </div>
          </CardContent>
        </Card>

        {/* Identity Info */}
        <Card>
          <CardHeader>
            <CardTitle>Identity & Legal</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Passport Number *</Label>
              <Input placeholder="Enter Passport No." defaultValue={isEdit ? "KA882910" : ""} />
            </div>
            <div className="space-y-2">
              <Label>Passport Expiry</Label>
              <Input type="date" defaultValue={isEdit ? "2029-08-20" : ""} />
            </div>
            <div className="space-y-2">
              <Label>Emirates ID (Optional at start)</Label>
              <Input placeholder="784-XXXX-XXXXXXX-X" defaultValue={isEdit ? "784-1988-1234567-1" : ""} />
            </div>
            <div className="space-y-2">
              <Label>Visa Status</Label>
              <Select defaultValue={isEdit ? "employment" : "visit"}>
                <option value="visit">Visit Visa (Processing needed)</option>
                <option value="employment">Employment Visa</option>
                <option value="partner">Partner Visa</option>
                <option value="golden">Golden Visa</option>
              </Select>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
