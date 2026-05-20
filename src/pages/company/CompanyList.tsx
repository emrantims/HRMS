import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Filter, MapPin, Search, Users } from "lucide-react";
import { Input } from "../../components/ui/Input";
import { Card } from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";
import { companies } from "../../data/companies";

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
          <p className="text-muted-foreground text-sm mt-1">Manage group companies, branches, categories, and emirate-wise entities.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-5"><p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Total Companies</p><h3 className="text-2xl font-bold text-primary mt-1">{companies.length}</h3></Card>
        <Card className="p-5"><p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Estimated Employees</p><h3 className="text-2xl font-bold text-primary mt-1">{totalEmployees.toLocaleString()}</h3></Card>
        <Card className="p-5"><p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Covered Emirates</p><h3 className="text-2xl font-bold text-primary mt-1">{totalEmirates}</h3></Card>
      </div>

      <Card className="overflow-visible">
        <div className="flex min-h-[72px] flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md shrink-0">
            <Search className="pointer-events-none absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input value={query} onChange={(e) => setQuery(e.target.value)} className="h-10 pl-9" placeholder="Search company, type, or emirate..." />
          </div>
          <div className="flex min-h-10 flex-wrap items-center justify-start gap-2 overflow-visible lg:justify-end">
            <Filter className="h-4 w-4 shrink-0 text-muted-foreground" />
            {emirates.map((emirate) => (
              <button
                key={emirate}
                type="button"
                onClick={() => setSelectedEmirate(emirate)}
                className={`inline-flex h-9 shrink-0 items-center rounded-full px-4 text-xs font-bold leading-none transition-colors ${selectedEmirate === emirate ? "bg-accent text-white shadow-sm" : "bg-muted text-muted-foreground hover:text-primary"}`}
              >
                {emirate}
              </button>
            ))}
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCompanies.map(company => (
          <Link key={company.id} to={`/company/${company.id}`} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-2xl">
            <Card className="h-full p-6 hover:-translate-y-0.5 hover:shadow-md transition-all border border-border">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/5 border border-border flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors"><Building2 className="w-6 h-6" /></div>
                <Badge variant={company.status === "Renewal Due" ? "warning" : company.status === "Setup" ? "secondary" : "success"}>{company.status || "Active"}</Badge>
              </div>
              <h3 className="font-bold text-base text-primary leading-snug group-hover:text-accent transition-colors">{company.name}</h3>
              <p className="text-xs font-mono text-muted-foreground mt-1">{company.id} • Category {company.category}</p>
              <p className="text-xs text-muted-foreground mt-3">{company.type}</p>
              <div className="flex items-center justify-between gap-4 mt-6 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-xs text-muted-foreground"><Users className="w-4 h-4" /><span className="font-bold text-primary">{company.empCount}</span> Employees</div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground"><MapPin className="w-4 h-4" /><span>{company.emirate}</span></div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs font-bold text-accent opacity-0 transition-opacity group-hover:opacity-100">Open company profile <ArrowRight className="h-3.5 w-3.5" /></div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
