import React, { useState } from "react";
import {
  Activity,
  Wrench,
  ArrowRight,
  Clock,
  Plus,
  Search,
  Filter,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";

const mockMaint = [
  {
    id: "MNT-2024-081",
    assetID: "AST-VEH-012",
    type: "Vehicle",
    description: "Routine Servicing (10k km)",
    provider: "Toyota Service Center",
    date: "Oct 15, 2024",
    cost: 1200,
    status: "In Progress",
  },
  {
    id: "MNT-2024-080",
    assetID: "AST-LPT-045",
    type: "Laptop",
    description: "Screen Replacement",
    provider: "Dell Support",
    date: "Oct 10, 2024",
    cost: 450,
    status: "Completed",
  },
  {
    id: "MNT-2024-077",
    assetID: "AST-MOB-010",
    type: "Mobile",
    description: "Battery Replacement",
    provider: "IT Dept",
    date: "Oct 05, 2024",
    cost: 150,
    status: "Completed",
  },
];

export default function AssetMaintenance() {
  return (
    <div className="flex flex-col h-full gap-6 w-full pb-10">
      <div className="flex items-center justify-between shrink-0 mb-4">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">
            Maintenance & Repairs
          </h1>
          <p className="text-primary/60 text-sm mt-1">
            Track asset servicing, IT repairs, and associated costs
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="accent" className="gap-2">
            <Plus className="w-4 h-4" /> Log Maintenance
          </Button>
        </div>
      </div>

      <Card className="shrink-0 bg-surface">
        <div className="p-4 flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-primary/40" />
            <Input
              placeholder="Search ticket or asset ID..."
              className="pl-9 bg-background/50"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-4">
        {mockMaint.map((mnt) => (
          <Card
            key={mnt.id}
            className="border-l-4 border-l-primary/30 shadow-sm hover:border-l-accent transition-colors"
          >
            <CardContent className="p-5 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="p-3 bg-primary/5 rounded-full">
                  <Wrench className="w-5 h-5 text-primary/60" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-primary">{mnt.assetID}</h3>
                    <Badge
                      variant="outline"
                      className="text-[9px] border-primary/20"
                    >
                      {mnt.type}
                    </Badge>
                  </div>
                  <p className="text-sm font-medium mt-1">{mnt.description}</p>
                  <p className="text-xs text-primary/50 mt-1">
                    Provider: {mnt.provider}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between w-full md:w-auto gap-8">
                <div className="text-right">
                  <p className="text-[10px] uppercase font-bold text-primary/40 tracking-widest">
                    Logged Date
                  </p>
                  <p className="font-mono text-sm font-bold">{mnt.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase font-bold text-primary/40 tracking-widest">
                    Cost
                  </p>
                  <p className="font-mono font-black text-primary">
                    AED {mnt.cost}
                  </p>
                </div>
                <div className="w-[100px] text-right">
                  {mnt.status === "In Progress" ? (
                    <Badge
                      variant="warning"
                      className="bg-warning/10 text-warning border-warning/20"
                    >
                      In Progress
                    </Badge>
                  ) : (
                    <Badge
                      variant="success"
                      className="bg-success/10 text-success border-success/20"
                    >
                      Completed
                    </Badge>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary/40 hover:text-primary"
                >
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
