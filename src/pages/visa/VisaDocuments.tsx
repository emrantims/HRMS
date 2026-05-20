import React, { useState } from "react";
import {
  FileText,
  Search,
  Download,
  Eye,
  UploadCloud,
  Filter,
} from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Card, CardContent } from "../../components/ui/Card";
import { Select } from "../../components/ui/Select";

const mockDocs = [
  {
    id: "DOC-001",
    type: "Passport",
    emp: "Sarah Connor",
    code: "EMP-23-0145",
    expiry: "2028-05-10",
    status: "Valid",
  },
  {
    id: "DOC-002",
    type: "Emirates ID",
    emp: "Ahmed Ali",
    code: "EMP-24-0012",
    expiry: "2025-10-15",
    status: "Valid",
  },
  {
    id: "DOC-003",
    type: "Health Insurance",
    emp: "Elena Rostova",
    code: "EMP-21-0089",
    expiry: "2024-11-01",
    status: "Expiring Soon",
  },
  {
    id: "DOC-004",
    type: "Labour Contract",
    emp: "Zaid Al-Hashmi",
    code: "EMP-22-0311",
    expiry: "N/A",
    status: "Archived",
  },
];

export default function VisaDocuments() {
  return (
    <div className="flex flex-col h-full gap-6 w-full pb-10">
      <div className="flex items-center justify-between shrink-0 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">
            PRO Document Vault
          </h1>
          <p className="text-primary/60 text-sm mt-1">
            Centralized storage for passports, IDs, and compliance papers
          </p>
        </div>
        <Button variant="accent" className="gap-2">
          <UploadCloud className="w-4 h-4" /> Upload Document
        </Button>
      </div>

      <Card className="shrink-0 bg-surface">
        <div className="p-4 flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-[250px]">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-primary/40" />
            <Input
              placeholder="Search employee name or doc ID..."
              className="pl-9 bg-background/50"
            />
          </div>
          <Select className="w-[180px] bg-background/50">
            <option value="">Document Category</option>
            <option value="passport">Passport</option>
            <option value="visa">Visa / Residence</option>
            <option value="eid">Emirates ID</option>
            <option value="medical">Medical / Insurance</option>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {mockDocs.map((doc) => (
          <Card
            key={doc.id}
            className="shadow-sm hover:shadow-md transition-shadow group cursor-pointer border-primary/10"
          >
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-primary/5 rounded border border-primary/10">
                  <FileText className="w-6 h-6 text-primary/60" />
                </div>
                <span
                  className={`text-[9px] uppercase font-bold px-2 py-1 rounded tracking-widest ${doc.status === "Valid" ? "bg-success/10 text-success" : doc.status === "Expiring Soon" ? "bg-warning/10 text-warning" : "bg-primary/5 text-primary/40"}`}
                >
                  {doc.status}
                </span>
              </div>
              <h3 className="font-bold text-primary text-sm truncate">
                {doc.type}
              </h3>
              <p className="text-xs text-primary/60 mt-0.5 truncate">
                {doc.emp} ({doc.code})
              </p>

              <div className="mt-4 pt-4 border-t border-primary/5 flex items-center justify-between text-xs">
                <span className="text-primary/40 font-mono">
                  Exp: {doc.expiry}
                </span>
                <div className="flex gap-2">
                  <button className="text-primary/40 hover:text-accent transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="text-primary/40 hover:text-primary transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
