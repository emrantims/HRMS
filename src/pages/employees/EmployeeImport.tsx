import React from "react";
import { UploadCloud, FileSpreadsheet, Download, AlertCircle, CheckCircle, Upload } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";

export default function EmployeeImport() {
  return (
    <div className="flex flex-col h-full gap-6 max-w-5xl mx-auto w-full pb-10">
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">Bulk Import Employees</h1>
          <p className="text-primary/60 text-sm mt-1">Upload multiple employees via Excel or CSV</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2 bg-surface">
            <Download className="w-4 h-4" /> Download Template
          </Button>
          <Button variant="accent" className="gap-2">
            <Upload className="w-4 h-4" /> Start Import Process
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Upload Zone */}
        <Card className="border-dashed border-2 border-primary/20 bg-surface/50 hover:bg-surface transition-colors cursor-pointer group">
          <CardContent className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <UploadCloud className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">Drag & Drop Excel File</h3>
            <p className="text-sm text-primary/50 text-center max-w-sm mb-6">
              Supported formats: .xlsx, .csv. Maximum file size 10MB.
              Ensure you are using the correct column mapping from the template.
            </p>
            <Button variant="outline" className="bg-surface relative z-10 pointer-events-none">
              Browse Files
            </Button>
          </CardContent>
        </Card>

        {/* Preview / Validation (Mock state showing a "loaded" file) */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-primary">
              <FileSpreadsheet className="w-4 h-4" /> Data Preview & Validation
            </CardTitle>
            <Badge variant="warning">File: new_joiners_oct.xlsx</Badge>
          </CardHeader>
          <CardContent className="p-0">
            <div className="p-4 bg-background border-b border-primary/10 flex gap-6">
               <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-primary/50">Total Rows</span>
                  <span className="text-xl font-bold">14</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-success/70">Valid</span>
                  <span className="text-xl font-bold text-success">12</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-destructive/70">Errors</span>
                  <span className="text-xl font-bold text-destructive">2</span>
               </div>
            </div>
            <div className="overflow-x-auto max-h-[300px]">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-surface sticky top-0 shadow-sm z-10">
                  <tr className="text-[10px] uppercase tracking-widest text-primary/60">
                    <th className="px-4 py-3 font-semibold">Status</th>
                    <th className="px-4 py-3 font-semibold">Row</th>
                    <th className="px-4 py-3 font-semibold">Full Name</th>
                    <th className="px-4 py-3 font-semibold">Company ID</th>
                    <th className="px-4 py-3 font-semibold">Base Salary</th>
                    <th className="px-4 py-3 font-semibold">Passport No.</th>
                    <th className="px-4 py-3 font-semibold w-full">Validation Message</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/5 bg-background">
                  <tr className="hover:bg-surface">
                    <td className="px-4 py-2"><CheckCircle className="w-4 h-4 text-success" /></td>
                    <td className="px-4 py-2 text-primary/50 font-mono text-xs">2</td>
                    <td className="px-4 py-2 font-medium">Ali Usman</td>
                    <td className="px-4 py-2">CMP-01</td>
                    <td className="px-4 py-2">8500</td>
                    <td className="px-4 py-2 font-mono text-xs">AB123456</td>
                    <td className="px-4 py-2 text-xs text-primary/60">Ready to import</td>
                  </tr>
                  <tr className="bg-destructive/5 hover:bg-destructive/10">
                    <td className="px-4 py-2"><AlertCircle className="w-4 h-4 text-destructive" /></td>
                    <td className="px-4 py-2 text-primary/50 font-mono text-xs">3</td>
                    <td className="px-4 py-2 font-medium">Sara Ahmed</td>
                    <td className="px-4 py-2 text-destructive font-bold">WRONG-ID</td>
                    <td className="px-4 py-2">12000</td>
                    <td className="px-4 py-2 font-mono text-xs">CA987654</td>
                    <td className="px-4 py-2 text-xs text-destructive font-semibold">Invalid Company ID mapping</td>
                  </tr>
                  <tr className="hover:bg-surface">
                    <td className="px-4 py-2"><CheckCircle className="w-4 h-4 text-success" /></td>
                    <td className="px-4 py-2 text-primary/50 font-mono text-xs">4</td>
                    <td className="px-4 py-2 font-medium">David Miller</td>
                    <td className="px-4 py-2">CMP-02</td>
                    <td className="px-4 py-2">15000</td>
                    <td className="px-4 py-2 font-mono text-xs">US554433</td>
                    <td className="px-4 py-2 text-xs text-primary/60">Ready to import</td>
                  </tr>
                  <tr className="bg-destructive/5 hover:bg-destructive/10">
                    <td className="px-4 py-2"><AlertCircle className="w-4 h-4 text-destructive" /></td>
                    <td className="px-4 py-2 text-primary/50 font-mono text-xs">5</td>
                    <td className="px-4 py-2 font-medium">Nour Youssef</td>
                    <td className="px-4 py-2">CMP-01</td>
                    <td className="px-4 py-2 bg-destructive/10 border border-destructive text-destructive">-500</td>
                    <td className="px-4 py-2 font-mono text-xs">EG112233</td>
                    <td className="px-4 py-2 text-xs text-destructive font-semibold">Base salary cannot be negative</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
