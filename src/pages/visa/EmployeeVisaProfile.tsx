import React from "react";
import {
  ArrowLeft,
  Activity,
  FileText,
  CheckCircle2,
  History,
  AlertCircle,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";

export default function EmployeeVisaProfile() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="flex flex-col h-full gap-6 max-w-6xl mx-auto w-full pb-10">
      {/* Action Bar */}
      <div className="flex items-center justify-between shrink-0 mb-2">
        <Button
          variant="ghost"
          className="gap-2 -ml-3"
          onClick={() => navigate("/visa/list")}
        >
          <ArrowLeft className="w-4 h-4" /> Back to Visas
        </Button>
        <div className="flex gap-2">
          <Link to={`/visa/cancel/${id || "EMP-23-0145"}`}>
            <Button
              variant="outline"
              className="gap-2 bg-surface text-destructive border-transparent hover:border-destructive/20 hover:bg-destructive/10"
            >
              Cancel Visa
            </Button>
          </Link>
          <Link to={`/visa/renew/${id || "EMP-23-0145"}`}>
            <Button
              variant="outline"
              className="gap-2 bg-surface border-accent text-accent hover:bg-accent/10"
            >
              Renew Visa
            </Button>
          </Link>
        </div>
      </div>

      {/* Brief Profile Header */}
      <div className="bg-surface rounded-2xl p-6 border border-primary/10 shadow-sm flex flex-col md:flex-row md:items-start justify-between gap-6 shrink-0 relative overflow-hidden">
        {/* Stamp Watermark simulation */}
        <div className="absolute -right-10 -bottom-10 opacity-5 rotate-12 pointer-events-none text-9xl font-black uppercase text-success tracking-widest font-mono">
          ACTIVE
        </div>

        <div className="flex items-center gap-6 relative z-10">
          <div className="w-20 h-20 rounded border-2 border-primary/10 overflow-hidden shrink-0 flex items-center justify-center bg-background">
            {/* Mock photo placeholder */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-10 h-10 text-primary/20"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold tracking-tight">
                Sarah Connor
              </h1>
              <span className="text-xs font-mono bg-primary/5 px-2 py-1 rounded text-primary/70 font-semibold border border-primary/10">
                {id || "EMP-23-0145"}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-sm font-medium text-primary/70">
              <span>Al Maha Tech</span>
              <span className="text-primary/30">•</span>
              <span>Sales Executive</span>
            </div>
          </div>
        </div>
        <div className="flex gap-8 relative z-10">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">
              Visa Expiry
            </p>
            <p className="font-bold text-lg font-mono">Oct 15, 2025</p>
            <Badge
              variant="success"
              className="bg-success/10 text-success mt-1 border-none text-[9px]"
            >
              Valid
            </Badge>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">
              EID Expiry
            </p>
            <p className="font-bold text-lg font-mono">Oct 10, 2025</p>
            <Badge
              variant="success"
              className="bg-success/10 text-success mt-1 border-none text-[9px]"
            >
              Valid
            </Badge>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Details Panel */}
        <Card className="shadow-sm border-primary/10 bg-surface">
          <CardHeader className="border-b border-primary/5 pb-4">
            <CardTitle className="text-sm">Immigration Details</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-[10px] uppercase font-bold text-primary/50 mb-1">
                  Visa Type
                </p>
                <p className="font-bold">Employment</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-primary/50 mb-1">
                  UID Number
                </p>
                <p className="font-mono">8192348123</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-primary/50 mb-1">
                  Sponsor / Company
                </p>
                <p className="font-bold">Al Maha Tech LLC</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-primary/50 mb-1">
                  Place of Issue
                </p>
                <p className="font-bold">Dubai, UAE</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-primary/50 mb-1">
                  Passport Number
                </p>
                <p className="font-mono">N9821384</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-primary/50 mb-1">
                  EID Number
                </p>
                <p className="font-mono">784-1990-1234567-1</p>
              </div>
            </div>

            <div className="bg-background rounded flex items-center justify-between p-4 border border-primary/5">
              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-success" />
                <div>
                  <p className="text-xs font-bold text-primary">
                    Medical Status
                  </p>
                  <p className="text-[10px] text-primary/50">
                    Last tested: Oct 01, 2023
                  </p>
                </div>
              </div>
              <Badge variant="success" className="text-[10px]">
                Fit to Work
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Documents Grid */}
        <Card className="lg:col-span-2 shadow-sm border-primary/10 bg-surface flex flex-col">
          <CardHeader className="border-b border-primary/5 pb-4 flex flex-row items-center justify-between">
            <CardTitle className="text-sm">Compliance Documents</CardTitle>
            <Link to="/visa/documents">
              <Button variant="ghost" size="sm" className="h-6 text-xs gap-1">
                Manage All
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Passport Copy",
                status: "Valid until 2028",
                color: "text-success",
                icon: <CheckCircle2 className="w-4 h-4 text-success" />,
              },
              {
                title: "E-Visa / Residence",
                status: "Valid until Oct 2025",
                color: "text-success",
                icon: <CheckCircle2 className="w-4 h-4 text-success" />,
              },
              {
                title: "Emirates ID (Front/Back)",
                status: "Valid until Oct 2025",
                color: "text-success",
                icon: <CheckCircle2 className="w-4 h-4 text-success" />,
              },
              {
                title: "Labour Contract",
                status: "Active",
                color: "text-success",
                icon: <CheckCircle2 className="w-4 h-4 text-success" />,
              },
              {
                title: "Medical Report",
                status: "Valid",
                color: "text-success",
                icon: <CheckCircle2 className="w-4 h-4 text-success" />,
              },
              {
                title: "Health Insurance",
                status: "Expiring in 45 days",
                color: "text-warning",
                icon: <AlertCircle className="w-4 h-4 text-warning" />,
              },
            ].map((doc, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-3 border border-primary/10 rounded-lg bg-background hover:border-primary/30 transition-colors cursor-pointer group"
              >
                <div className="p-2 bg-primary/5 rounded">
                  <FileText className="w-5 h-5 text-primary/60" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-sm text-primary group-hover:text-accent transition-colors">
                    {doc.title}
                  </h4>
                  <p className={`text-[10px] mt-0.5 ${doc.color}`}>
                    {doc.status}
                  </p>
                </div>
                {doc.icon}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
