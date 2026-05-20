import React, { useMemo, useState } from "react";
import { Building2, MapPin, Search, Users, Filter } from "lucide-react";
import { Input } from "../../components/ui/Input";
import { Card } from "../../components/ui/Card";

const companies = [
  { id: "CO-001", name: "ALIYAS BUILDING CLEANING CO - L.L.C", category: "2", emirate: "Fujairah", type: "Cleaning Services", empCount: 48 },
  { id: "CO-002", name: "ALIYAS BUS RENTAL LLC", category: "2", emirate: "Fujairah", type: "Bus Rental", empCount: 72 },
  { id: "CO-003", name: "ALIYAS LINE BUS RENTAL L.L.C", category: "2", emirate: "Dubai", type: "Bus Rental", empCount: 84 },
  { id: "CO-004", name: "ALIYAS GENERAL SECURITY SERVICES L.L.C", category: "2", emirate: "Dubai", type: "Security Services", empCount: 130 },
  { id: "CO-005", name: "ALIYAS ISOLATION PLATES MANUFACTURING LLC", category: "3", emirate: "Fujairah", type: "Manufacturing", empCount: 58 },
  { id: "CO-006", name: "ALIYAS LAND TRANSPORT L L C", category: "2", emirate: "Fujairah", type: "Transport", empCount: 95 },
  { id: "CO-007", name: "ALIYAS LINE TRANSPORT L.L.C", category: "2", emirate: "Dubai", type: "Transport", empCount: 112 },
  { id: "CO-008", name: "ALIYAS REAL ESTATE DEVELOPMENT L.L.C", category: "3", emirate: "Dubai", type: "Real Estate", empCount: 35 },
  { id: "CO-009", name: "ALIYAS REAL ESTATE L.L.C", category: "3", emirate: "Dubai", type: "Real Estate", empCount: 42 },
  { id: "CO-010", name: "ALIYAS REAL ESTATE L.L.C-BRANCH", category: "3", emirate: "Ajman", type: "Real Estate Branch", empCount: 18 },
  { id: "CO-011", name: "AMAFH COMMERCIAL BROKERS L.L.C", category: "2", emirate: "Dubai", type: "Commercial Brokerage", empCount: 28 },
  { id: "CO-012", name: "AMAFH EMPLOYMENT SERVICES L.L.C", category: "3", emirate: "Dubai", type: "Employment Services", empCount: 46 },
  { id: "CO-013", name: "AMAFH TRAVEL AND TOURISM L.L.C", category: "3", emirate: "Dubai", type: "Travel and Tourism", empCount: 24 },
  { id: "CO-014", name: "AROMA GENERAL TRADING L.L.C", category: "2", emirate: "Ajman", type: "General Trading", empCount: 32 },
  { id: "CO-015", name: "INAYA DOMESTIC WORKERS", category: "2", emirate: "Ajman", type: "Domestic Workers", empCount: 66 },
  { id: "CO-016", name: "TAREEQ YAS BUSES RENTAL L L C SP", category: "3", emirate: "Sharjah", type: "Bus Rental", empCount: 40 },
  { id: "CO-017", name: "U R S CAR RENTAL L.L.C", category: "3", emirate: "Dubai", type: "Car Rental", empCount: 22 },
  { id: "CO-018", name: "YALA TRAVEL AND TOURISM L.L.C", category: "3", emirate: "Dubai", type: "Travel and Tourism", empCount: 20 },
  { id: "CO-019", name: "EDRIVE WATERSPORTS EQUIPMENT RENTAL L.L.C", category: "3", emirate: "Dubai", type: "Equipment Rental", empCount: 16 },
  { id: "CO-020", name: "SPEED DROP DELIVERY SERVICES L.L.C", category: "3", emirate: "Dubai", type: "Delivery Services", empCount: 78 },
  { id: "CO-021", name: "UMED INVESTMENTS L.L.C", category: "3", emirate: "Dubai", type: "Investments", empCount: 12 },
  { id: "CO-022", name: "Aliyas Investment FZCO", category: "0", emirate: "Dubai", type: "Investment Free Zone", empCount: 10 },
  { id: "CO-023", name: "ALYAS PROJECT DEVELOPMENT LLC", category: "0", emirate: "Fujairah", type: "Project Development", empCount: 25 },
  { id: "CO-024", name: "Amafh Commercial Brokers Branch -01", category: "0", emirate: "Abu Dhabi", type: "Commercial Brokerage Branch", empCount: 14 },
  { id: "CO-025", name: "Biossion Ltd", category: "0", emirate: "Dubai", type: "Company Entity", empCount: 8 },
];

const emirates = ["All", "Dubai", "Fujairah", "Ajman", "Sharjah", "Abu Dhabi"];

export default function CompanyList() {
  const [query, setQuery] = useState("");
  const [selectedEmirate, setSelectedEmirate] = useState("All");

  const filteredCompanies = useMemo(() => companies.filter((company) => {
    const matchesQuery = `${company.name} ${company.type} ${company.emirate}`.toLowerCase().includes(query.toLowerCase());
    const matchesEmirate = selectedEmirate === "All" || company.emirate === selectedEmirate;
    return matchesQuery && matchesEmirate;
  }), [query, selectedEmirate]);

  const totalEmployees = companies.reduce((sum, company) => sum + company.empCount, 0);
  const totalEmirates = new Set(companies.map((company) => company.emirate)).size;

  return (
    <div className="flex flex-col h-full gap-6 w-full pb-10">
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">ALIYAS Group Companies</h1>
          <p className="text-primary/60 text-sm mt-1">Manage group companies, branches, categories, and emirate-wise entities.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-5 bg-surface border border-primary/10"><p className="text-[10px] uppercase font-bold text-primary/50 tracking-wider">Total Companies</p><h3 className="text-2xl font-bold text-primary mt-1">{companies.length}</h3></Card>
        <Card className="p-5 bg-surface border border-primary/10"><p className="text-[10px] uppercase font-bold text-primary/50 tracking-wider">Estimated Employees</p><h3 className="text-2xl font-bold text-primary mt-1">{totalEmployees.toLocaleString()}</h3></Card>
        <Card className="p-5 bg-surface border border-primary/10"><p className="text-[10px] uppercase font-bold text-primary/50 tracking-wider">Covered Emirates</p><h3 className="text-2xl font-bold text-primary mt-1">{totalEmirates}</h3></Card>
      </div>

      <Card className="p-4 bg-surface border border-primary/10">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40" /><Input value={query} onChange={(e) => setQuery(e.target.value)} className="pl-9" placeholder="Search company, type, or emirate..." /></div>
          <div className="flex items-center gap-2 overflow-x-auto"><Filter className="w-4 h-4 text-primary/40 shrink-0" />{emirates.map((emirate) => <button key={emirate} onClick={() => setSelectedEmirate(emirate)} className={`rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${selectedEmirate === emirate ? "bg-accent text-white" : "bg-background text-primary/60 hover:text-primary"}`}>{emirate}</button>)}</div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCompanies.map(company => (
          <Card key={company.id} className="p-6 bg-surface hover:shadow-md transition-shadow group border border-primary/10">
            <div className="flex justify-between items-start mb-4"><div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors"><Building2 className="w-6 h-6" /></div><span className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-success/10 text-success rounded">Active</span></div>
            <h3 className="font-bold text-base text-primary leading-snug">{company.name}</h3>
            <p className="text-xs font-mono text-primary/50 mt-1">{company.id} • Category {company.category}</p>
            <p className="text-xs text-primary/70 mt-3">{company.type}</p>
            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-primary/10"><div className="flex items-center gap-2 text-xs text-primary/70"><Users className="w-4 h-4 text-primary/40" /><span className="font-bold text-primary">{company.empCount}</span> Employees</div><div className="flex items-center gap-2 text-xs text-primary/70"><MapPin className="w-4 h-4 text-primary/40" /><span>{company.emirate}</span></div></div>
          </Card>
        ))}
      </div>
    </div>
  );
}
