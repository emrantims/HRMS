import React from "react";
import { AlertTriangle, Download, FileCheck2, FileText, Search, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";

const documents = [
  { company: "ALIYAS GENERAL SECURITY SERVICES L.L.C", type: "Trade License", number: "TL-DXB-44921", expiry: "24 Nov 2026", status: "Valid" },
  { company: "ALIYAS BUS RENTAL LLC", type: "MOHRE Establishment Card", number: "MOHRE-FUJ-8821", expiry: "12 Oct 2025", status: "Valid" },
  { company: "ALIYAS REAL ESTATE L.L.C", type: "RERA Certificate", number: "RERA-55218", expiry: "05 Aug 2025", status: "Renewal Soon" },
  { company: "AMAFH EMPLOYMENT SERVICES L.L.C", type: "Immigration Card", number: "IMM-DXB-2201", expiry: "18 Sep 2025", status: "Valid" },
  { company: "INAYA DOMESTIC WORKERS", type: "Domestic Worker Permit", number: "DWP-AJM-9011", expiry: "02 Jun 2025", status: "Action Needed" },
  { company: "TAREEQ YAS BUSES RENTAL L L C SP", type: "Transport Authority Permit", number: "RTA-SHJ-1389", expiry: "16 Jan 2027", status: "Valid" },
];

function variant(status: string) {
  if (status === "Valid") return "success" as const;
  if (status === "Renewal Soon") return "warning" as const;
  return "destructive" as const;
}

export default function EntityDocuments() {
  return (
    <div className="flex flex-col gap-6 pb-10">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Company Management</p>
          <h1 className="text-3xl font-bold tracking-tight text-primary">Entity Documents</h1>
          <p className="mt-1 text-sm text-muted-foreground">Track trade licenses, establishment cards, permits, contracts, and renewal alerts.</p>
        </div>
        <Button variant="accent">Upload Document</Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card className="p-5"><FileText className="h-5 w-5 text-accent" /><h3 className="mt-3 text-2xl font-bold text-primary">86</h3><p className="text-xs text-muted-foreground">Total Documents</p></Card>
        <Card className="p-5"><ShieldCheck className="h-5 w-5 text-success" /><h3 className="mt-3 text-2xl font-bold text-primary">72</h3><p className="text-xs text-muted-foreground">Valid</p></Card>
        <Card className="p-5"><AlertTriangle className="h-5 w-5 text-warning" /><h3 className="mt-3 text-2xl font-bold text-primary">9</h3><p className="text-xs text-muted-foreground">Renewal Soon</p></Card>
        <Card className="p-5"><AlertTriangle className="h-5 w-5 text-destructive" /><h3 className="mt-3 text-2xl font-bold text-primary">5</h3><p className="text-xs text-muted-foreground">Action Needed</p></Card>
      </div>

      <Card>
        <CardHeader className="border-b border-border">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"><CardTitle>Document Register</CardTitle><div className="relative w-full md:w-80"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input placeholder="Search company, license, permit..." className="pl-9" /></div></div>
        </CardHeader>
        <CardContent className="overflow-x-auto p-0">
          <table className="w-full min-w-[820px] text-left text-sm">
            <thead className="bg-muted/60 text-xs uppercase tracking-wider text-muted-foreground"><tr><th className="px-5 py-4">Company</th><th className="px-5 py-4">Document Type</th><th className="px-5 py-4">Document No.</th><th className="px-5 py-4">Expiry</th><th className="px-5 py-4">Status</th><th className="px-5 py-4 text-right">Action</th></tr></thead>
            <tbody className="divide-y divide-border">
              {documents.map((doc) => (
                <tr key={doc.number} className="hover:bg-muted/30"><td className="px-5 py-4 font-semibold text-primary">{doc.company}</td><td className="px-5 py-4 text-muted-foreground"><FileCheck2 className="mr-2 inline h-4 w-4" />{doc.type}</td><td className="px-5 py-4 font-mono text-xs text-muted-foreground">{doc.number}</td><td className="px-5 py-4 text-primary">{doc.expiry}</td><td className="px-5 py-4"><Badge variant={variant(doc.status)}>{doc.status}</Badge></td><td className="px-5 py-4 text-right"><Button variant="outline" size="sm"><Download className="mr-2 h-3.5 w-3.5" />View</Button></td></tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
