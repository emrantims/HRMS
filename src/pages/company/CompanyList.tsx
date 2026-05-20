import React from "react";
import { Link } from "react-router-dom";
import { Building2, Plus, Search, MapPin, Users } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Card } from "../../components/ui/Card";

const mockCompanies = [
  { id: "CO-01", name: "Al Maha Tech Solutions", type: "Technology", empCount: 142, status: "Active", location: "Dubai, UAE" },
  { id: "CO-02", name: "Al Maha Real Estate", type: "Real Estate", empCount: 89, status: "Active", location: "Dubai, UAE" },
  { id: "CO-03", name: "Al Maha Trading", type: "Trading", empCount: 305, status: "Active", location: "Abu Dhabi, UAE" },
];

export default function CompanyList() {
  return (
    <div className="flex flex-col h-full gap-6 w-full pb-10">
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">Company Management</h1>
          <p className="text-primary/60 text-sm mt-1">Manage group companies, branches, and entity structures</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="accent" className="gap-2">
            <Plus className="w-4 h-4" /> Add Company
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockCompanies.map(company => (
          <Card key={company.id} className="p-6 bg-surface hover:shadow-md transition-shadow group cursor-pointer border border-primary/10">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-success/10 text-success rounded">
                {company.status}
              </span>
            </div>
            
            <h3 className="font-bold text-lg text-primary">{company.name}</h3>
            <p className="text-xs font-mono text-primary/50 mt-1">{company.id} • {company.type}</p>
            
            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-primary/10">
              <div className="flex items-center gap-2 text-xs text-primary/70">
                <Users className="w-4 h-4 text-primary/40" />
                <span className="font-bold text-primary">{company.empCount}</span> Employees
              </div>
              <div className="flex items-center gap-2 text-xs text-primary/70">
                <MapPin className="w-4 h-4 text-primary/40" />
                <span>{company.location}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
