import React, { useState } from "react";
import {
  Search,
  Filter,
  Download,
  FileCheck,
  Eye,
  RefreshCw,
  XCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";

const mockVisas = [
  {
    id: "EMP-23-0145",
    name: "Sarah Connor",
    type: "Employment",
    step: "Final Activation",
    expiry: "Oct 15, 2025",
    status: "Active",
    renewal: "Valid",
  },
  {
    id: "EMP-24-0012",
    name: "Ahmed Ali",
    type: "Employment",
    step: "Work Permit",
    expiry: "N/A",
    status: "In Process",
    renewal: "N/A",
  },
  {
    id: "EMP-21-0089",
    name: "Elena Rostova",
    type: "Investor",
    step: "Final Activation",
    expiry: "Dec 05, 2024",
    status: "Active",
    renewal: "Expiring Soon",
  },
  {
    id: "EMP-22-0311",
    name: "Zaid Al-Hashmi",
    type: "Employment",
    step: "Cancelled",
    expiry: "Mar 10, 2024",
    status: "Cancelled",
    renewal: "N/A",
  },
  {
    id: "EMP-24-0402",
    name: "Fatima Balooshi",
    type: "Dependent",
    step: "Medical Test",
    expiry: "N/A",
    status: "In Process",
    renewal: "N/A",
  },
];

export default function VisaList() {
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return (
          <Badge
            variant="success"
            className="bg-success/10 text-success border-success/20"
          >
            Active
          </Badge>
        );
      case "In Process":
        return (
          <Badge
            variant="outline"
            className="text-accent border-accent bg-accent/5"
          >
            In Process
          </Badge>
        );
      case "Cancelled":
        return (
          <Badge
            variant="outline"
            className="text-primary/40 border-primary/20 bg-primary/5"
          >
            Cancelled
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getRenewalBadge = (renewal: string) => {
    if (renewal === "Valid")
      return <span className="text-xs text-success font-medium">Valid</span>;
    if (renewal === "Expiring Soon")
      return (
        <span className="text-xs text-warning border-warning/30 bg-warning/10 px-2 py-0.5 rounded font-bold">
          Expiring Soon
        </span>
      );
    return <span className="text-primary/30">-</span>;
  };

  return (
    <div className="flex flex-col h-full gap-6 w-full pb-10">
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">
            Visa Directory
          </h1>
          <p className="text-primary/60 text-sm mt-1">
            Track and manage all employee visas and residencies
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2 bg-surface text-primary">
            <Download className="w-4 h-4" /> Export Register
          </Button>
          <Link to="/visa/new">
            <Button variant="accent" className="gap-2">
              <FileCheck className="w-4 h-4" /> Start New Visa
            </Button>
          </Link>
        </div>
      </div>

      {/* Filters */}
      <Card className="shrink-0 bg-surface">
        <div className="p-4 flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-[250px]">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-primary/40" />
            <Input
              placeholder="Search by Employee Name or Code..."
              className="pl-9 bg-background/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select className="w-[160px] bg-background/50">
            <option value="">All Companies</option>
            <option value="tech">Al Maha Tech</option>
            <option value="logistics">Desert Logistics</option>
          </Select>
          <Select className="w-[160px] bg-background/50">
            <option value="">Status</option>
            <option value="Active">Active</option>
            <option value="In Process">In Process</option>
            <option value="Cancelled">Cancelled</option>
          </Select>
          <Button variant="outline" size="icon" className="shrink-0">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </Card>

      <Card className="flex-1 overflow-hidden flex flex-col shadow-lg border-primary/10 bg-surface">
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left whitespace-nowrap text-sm">
            <thead className="bg-background sticky top-0 shadow-sm z-10 text-[10px] uppercase font-bold text-primary/50 tracking-widest border-b border-primary/10">
              <tr>
                <th className="px-6 py-4">Employee</th>
                <th className="px-6 py-4">Visa Type</th>
                <th className="px-6 py-4">Current Step</th>
                <th className="px-6 py-4">Expiry Date</th>
                <th className="px-6 py-4">Renewal Status</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5 text-sm">
              {mockVisas.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-primary/5 group transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="font-bold text-primary">{row.name}</div>
                    <div className="text-[10px] text-primary/50 font-mono mt-0.5">
                      {row.id}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-primary/70">
                    {row.type}
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-primary/5 px-2 py-1 rounded text-xs border border-primary/10 text-primary/70">
                      {row.step}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs">{row.expiry}</td>
                  <td className="px-6 py-4">{getRenewalBadge(row.renewal)}</td>
                  <td className="px-6 py-4 text-center">
                    {getStatusBadge(row.status)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link to={`/visa/profile/${row.id}`}>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-primary/40 hover:text-accent"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </Link>

                      {row.status === "Active" &&
                        row.renewal === "Expiring Soon" && (
                          <Link to={`/visa/renew/${row.id}`}>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 text-warning border-warning hover:bg-warning hover:text-white"
                              title="Renew"
                            >
                              <RefreshCw className="w-4 h-4" />
                            </Button>
                          </Link>
                        )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
