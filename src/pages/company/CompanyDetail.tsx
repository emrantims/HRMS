import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Banknote, Building2, CalendarClock, Download, FileCheck2, MapPin, Phone, ShieldCheck, Users, WalletCards } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Button } from "../../components/ui/Button";
import { getCompanyById, getCompanyMeta } from "../../data/companies";

function money(value: number) {
  return value.toLocaleString("en-AE", { maximumFractionDigits: 0 });
}

function documentVariant(status: string) {
  if (status === "Valid") return "success" as const;
  if (status === "Renewal Soon") return "warning" as const;
  return "destructive" as const;
}

export default function CompanyDetail() {
  const { id } = useParams();
  const company = getCompanyById(id);

  if (!company) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-surface p-10 text-center">
        <Building2 className="h-10 w-10 text-muted-foreground" />
        <h1 className="text-xl font-bold text-primary">Company not found</h1>
        <p className="text-sm text-muted-foreground">The selected company record does not exist in the current directory.</p>
        <Link to="/company/list"><Button variant="accent">Back to Company List</Button></Link>
      </div>
    );
  }

  const meta = getCompanyMeta(company);

  return (
    <div className="flex flex-col gap-6 pb-10">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div>
          <Link to="/company/list" className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Company List
          </Link>
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-gold shadow-sm">
              <Building2 className="h-7 w-7" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-3xl font-bold tracking-tight text-primary">{company.name}</h1>
                <Badge variant={company.status === "Renewal Due" ? "warning" : company.status === "Setup" ? "secondary" : "success"}>{company.status || "Active"}</Badge>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{company.type} • Category {company.category} • {company.emirate}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Export Profile</Button>
          <Button variant="accent">Edit Company</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card className="p-5"><Users className="h-5 w-5 text-accent" /><p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Employees</p><h3 className="mt-1 text-3xl font-bold text-primary">{company.empCount}</h3></Card>
        <Card className="p-5"><Banknote className="h-5 w-5 text-success" /><p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Monthly Payroll</p><h3 className="mt-1 text-3xl font-bold text-primary">AED {money(meta.payroll)}</h3></Card>
        <Card className="p-5"><ShieldCheck className="h-5 w-5 text-info" /><p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Active Visas</p><h3 className="mt-1 text-3xl font-bold text-primary">{meta.visaActive}</h3></Card>
        <Card className="p-5"><WalletCards className="h-5 w-5 text-warning" /><p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Assigned Assets</p><h3 className="mt-1 text-3xl font-bold text-primary">{meta.assets}</h3></Card>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <Card className="xl:col-span-7">
          <CardHeader className="border-b border-border"><CardTitle>Company Profile</CardTitle></CardHeader>
          <CardContent className="grid grid-cols-1 gap-4 pt-5 md:grid-cols-2">
            <InfoRow label="Company ID" value={company.id} />
            <InfoRow label="Legal Category" value={`Category ${company.category}`} />
            <InfoRow label="Business Type" value={company.type} />
            <InfoRow label="Emirate" value={company.emirate} />
            <InfoRow label="Trade License" value={meta.licenseNo} />
            <InfoRow label="MOHRE Establishment" value={meta.establishmentNo} />
            <InfoRow label="Immigration File" value={meta.immigrationNo} />
            <InfoRow label="Branch Code" value={meta.branchCode} />
          </CardContent>
        </Card>

        <Card className="xl:col-span-5">
          <CardHeader className="border-b border-border"><CardTitle>Branch & Contact</CardTitle></CardHeader>
          <CardContent className="space-y-4 pt-5">
            <div className="rounded-2xl border border-border bg-muted/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Branch Manager</p>
              <p className="mt-1 text-lg font-bold text-primary">{meta.manager}</p>
            </div>
            <p className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4 text-accent" /> {meta.address}</p>
            <p className="flex items-center gap-2 text-sm text-muted-foreground"><Phone className="h-4 w-4 text-accent" /> {meta.phone}</p>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="rounded-xl bg-muted/50 p-3"><p className="text-xs text-muted-foreground">Visa Expiring</p><p className="font-bold text-destructive">{meta.visaExpiring}</p></div>
              <div className="rounded-xl bg-muted/50 p-3"><p className="text-xs text-muted-foreground">Compliance</p><p className="font-bold text-success">92%</p></div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <Card className="xl:col-span-5">
          <CardHeader className="border-b border-border"><CardTitle>Departments</CardTitle></CardHeader>
          <CardContent className="space-y-3 pt-5">
            {meta.departments.map((dept, index) => (
              <div key={dept} className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3">
                <span className="text-sm font-semibold text-primary">{dept}</span>
                <Badge variant="secondary">{Math.max(3, Math.round(company.empCount / (index + 4)))} staff</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="xl:col-span-7">
          <CardHeader className="border-b border-border"><CardTitle>Entity Documents</CardTitle></CardHeader>
          <CardContent className="overflow-x-auto p-0">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-muted/60 text-xs uppercase tracking-wider text-muted-foreground">
                <tr><th className="px-5 py-4">Document</th><th className="px-5 py-4">Number</th><th className="px-5 py-4">Expiry</th><th className="px-5 py-4">Status</th></tr>
              </thead>
              <tbody className="divide-y divide-border">
                {meta.documents.map((doc) => (
                  <tr key={doc.no} className="hover:bg-muted/30">
                    <td className="px-5 py-4 font-semibold text-primary"><FileCheck2 className="mr-2 inline h-4 w-4 text-accent" />{doc.name}</td>
                    <td className="px-5 py-4 font-mono text-xs text-muted-foreground">{doc.no}</td>
                    <td className="px-5 py-4 text-primary"><CalendarClock className="mr-2 inline h-4 w-4 text-muted-foreground" />{doc.expiry}</td>
                    <td className="px-5 py-4"><Badge variant={documentVariant(doc.status)}>{doc.status}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-muted/40 p-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
      <p className="mt-1 break-words text-sm font-semibold text-primary">{value}</p>
    </div>
  );
}
