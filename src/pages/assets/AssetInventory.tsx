import React, { useState } from "react";
import {
  Laptop,
  Search,
  Filter,
  Smartphone,
  CreditCard,
  Car,
  Download,
  ArrowRight,
  Eye,
  Edit2,
} from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { Link } from "react-router-dom";

const mockInventory = [
  {
    id: "AST-LPT-001",
    type: "Laptop",
    brand: "Dell Latitude 5420",
    serial: "DL-98213",
    date: "Jan 12, 2023",
    status: "Assigned",
    assignee: "Sarah Connor (EMP-23-0145)",
    location: "Dubai HQ",
  },
  {
    id: "AST-MOB-042",
    type: "Mobile",
    brand: "Samsung Galaxy S22",
    serial: "SM-G9021",
    date: "Mar 05, 2023",
    status: "Available",
    assignee: "-",
    location: "Abu Dhabi Office",
  },
  {
    id: "AST-VEH-012",
    type: "Vehicle",
    brand: "Toyota Hilux",
    serial: "DXB-98124",
    date: "Sep 22, 2022",
    status: "Maintenance",
    assignee: "-",
    location: "Al Quoz Garage",
  },
  {
    id: "AST-SIM-105",
    type: "SIM Card",
    brand: "Etisalat 5G",
    serial: "050-1234567",
    date: "Feb 10, 2024",
    status: "Assigned",
    assignee: "Zaid Al-Hashmi (EMP-22-0311)",
    location: "Dubai HQ",
  },
  {
    id: "AST-LPT-089",
    type: "Laptop",
    brand: "MacBook Pro 14",
    serial: "C02F2312",
    date: "Oct 15, 2023",
    status: "Lost",
    assignee: "Elena Rostova (EMP-21-0089)",
    location: "Unknown",
  },
  {
    id: "AST-MOB-112",
    type: "Mobile",
    brand: "iPhone 14",
    serial: "IP-140021",
    date: "Jan 20, 2024",
    status: "Assigned",
    assignee: "Fatima Balooshi (EMP-23-0402)",
    location: "Sharjah Branch",
  },
];

export default function AssetInventory() {
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Available":
        return (
          <Badge
            variant="success"
            className="bg-success/10 text-success border-success/20"
          >
            Available
          </Badge>
        );
      case "Assigned":
        return (
          <Badge
            variant="outline"
            className="text-accent border-accent/30 bg-accent/5"
          >
            Assigned
          </Badge>
        );
      case "Maintenance":
        return (
          <Badge
            variant="warning"
            className="bg-warning/10 text-warning border-warning/20"
          >
            Maintenance
          </Badge>
        );
      case "Lost":
        return (
          <Badge
            variant="destructive"
            className="bg-destructive/10 text-destructive border-destructive/20"
          >
            Lost
          </Badge>
        );
      case "Damaged":
        return (
          <Badge
            variant="destructive"
            className="bg-destructive/10 text-destructive border-destructive/20"
          >
            Damaged
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getAssetIcon = (type: string) => {
    switch (type) {
      case "Laptop":
        return <Laptop className="w-4 h-4 text-primary/50" />;
      case "Mobile":
        return <Smartphone className="w-4 h-4 text-primary/50" />;
      case "Vehicle":
        return <Car className="w-4 h-4 text-primary/50" />;
      case "SIM Card":
        return <CreditCard className="w-4 h-4 text-primary/50" />;
      default:
        return <Laptop className="w-4 h-4 text-primary/50" />;
    }
  };

  return (
    <div className="flex flex-col h-full gap-6 w-full pb-10">
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">
            Asset Inventory
          </h1>
          <p className="text-primary/60 text-sm mt-1">
            Full registry of all company equipment and properties
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2 bg-surface text-primary">
            <Download className="w-4 h-4" /> Export CSV
          </Button>
          <Link to="/assets/create">
            <Button variant="accent" className="gap-2">
              Add New Asset
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
              placeholder="Search by ID, Serial, Brand or Assignee..."
              className="pl-9 bg-background/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select className="w-[160px] bg-background/50">
            <option value="">All Types</option>
            <option value="Laptop">Laptops</option>
            <option value="Mobile">Mobiles</option>
            <option value="Vehicle">Vehicles</option>
            <option value="SIM Card">SIM Cards</option>
          </Select>
          <Select className="w-[160px] bg-background/50">
            <option value="">All Statuses</option>
            <option value="Available">Available</option>
            <option value="Assigned">Assigned</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Lost">Lost / Damaged</option>
          </Select>
          <Select className="w-[160px] bg-background/50">
            <option value="">All Locations</option>
            <option value="Dubai HQ">Dubai HQ</option>
            <option value="Abu Dhabi Office">Abu Dhabi Office</option>
          </Select>
          <Button variant="outline" size="icon" className="shrink-0">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </Card>

      {/* Data Table */}
      <Card className="flex-1 overflow-hidden flex flex-col shadow-lg border-primary/10 bg-surface">
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left whitespace-nowrap text-sm">
            <thead className="bg-background sticky top-0 shadow-sm z-10 text-[10px] uppercase font-bold text-primary/50 tracking-widest border-b border-primary/10">
              <tr>
                <th className="px-6 py-4">Asset ID</th>
                <th className="px-6 py-4">Type & Details</th>
                <th className="px-6 py-4">Serial / Plate</th>
                <th className="px-6 py-4">Purchase Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Assigned To</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5 text-sm">
              {mockInventory.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-primary/5 group transition-colors"
                >
                  <td className="px-6 py-4 font-bold font-mono text-primary/80 group-hover:text-primary">
                    {row.id}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {getAssetIcon(row.type)}
                      <div>
                        <div className="font-bold text-primary">
                          {row.brand}
                        </div>
                        <div className="text-[10px] text-primary/50 font-medium">
                          {row.type}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-primary/60">
                    {row.serial}
                  </td>
                  <td className="px-6 py-4 text-primary/60">{row.date}</td>
                  <td className="px-6 py-4">{getStatusBadge(row.status)}</td>
                  <td className="px-6 py-4">
                    {row.assignee === "-" ? (
                      <span className="text-primary/30">-</span>
                    ) : (
                      <div className="font-medium text-primary line-clamp-1">
                        {row.assignee}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-primary/60">{row.location}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link to={`/assets/history/${row.id}`}>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-primary/40 hover:text-accent"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-primary/40 hover:text-primary"
                      >
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      {row.status === "Available" && (
                        <Link to={`/assets/assign?asset=${row.id}`}>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 text-xs border-accent text-accent hover:bg-accent hover:text-white"
                          >
                            Assign
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
