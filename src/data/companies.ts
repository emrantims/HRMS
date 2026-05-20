export type Company = {
  id: string;
  name: string;
  category: string;
  emirate: string;
  type: string;
  empCount: number;
  status?: "Active" | "Renewal Due" | "Setup";
};

export const companies: Company[] = [
  { id: "CO-001", name: "ALIYAS BUILDING CLEANING CO - L.L.C", category: "2", emirate: "Fujairah", type: "Cleaning Services", empCount: 48, status: "Active" },
  { id: "CO-002", name: "ALIYAS BUS RENTAL LLC", category: "2", emirate: "Fujairah", type: "Bus Rental", empCount: 72, status: "Active" },
  { id: "CO-003", name: "ALIYAS LINE BUS RENTAL L.L.C", category: "2", emirate: "Dubai", type: "Bus Rental", empCount: 84, status: "Active" },
  { id: "CO-004", name: "ALIYAS GENERAL SECURITY SERVICES L.L.C", category: "2", emirate: "Dubai", type: "Security Services", empCount: 130, status: "Active" },
  { id: "CO-005", name: "ALIYAS ISOLATION PLATES MANUFACTURING LLC", category: "3", emirate: "Fujairah", type: "Manufacturing", empCount: 58, status: "Active" },
  { id: "CO-006", name: "ALIYAS LAND TRANSPORT L L C", category: "2", emirate: "Fujairah", type: "Transport", empCount: 95, status: "Active" },
  { id: "CO-007", name: "ALIYAS LINE TRANSPORT L.L.C", category: "2", emirate: "Dubai", type: "Transport", empCount: 112, status: "Active" },
  { id: "CO-008", name: "ALIYAS REAL ESTATE DEVELOPMENT L.L.C", category: "3", emirate: "Dubai", type: "Real Estate", empCount: 35, status: "Active" },
  { id: "CO-009", name: "ALIYAS REAL ESTATE L.L.C", category: "3", emirate: "Dubai", type: "Real Estate", empCount: 42, status: "Active" },
  { id: "CO-010", name: "ALIYAS REAL ESTATE L.L.C-BRANCH", category: "3", emirate: "Ajman", type: "Real Estate Branch", empCount: 18, status: "Active" },
  { id: "CO-011", name: "AMAFH COMMERCIAL BROKERS L.L.C", category: "2", emirate: "Dubai", type: "Commercial Brokerage", empCount: 28, status: "Active" },
  { id: "CO-012", name: "AMAFH EMPLOYMENT SERVICES L.L.C", category: "3", emirate: "Dubai", type: "Employment Services", empCount: 46, status: "Active" },
  { id: "CO-013", name: "AMAFH TRAVEL AND TOURISM L.L.C", category: "3", emirate: "Dubai", type: "Travel and Tourism", empCount: 24, status: "Active" },
  { id: "CO-014", name: "AROMA GENERAL TRADING L.L.C", category: "2", emirate: "Ajman", type: "General Trading", empCount: 32, status: "Active" },
  { id: "CO-015", name: "INAYA DOMESTIC WORKERS", category: "2", emirate: "Ajman", type: "Domestic Workers", empCount: 66, status: "Renewal Due" },
  { id: "CO-016", name: "TAREEQ YAS BUSES RENTAL L L C SP", category: "3", emirate: "Sharjah", type: "Bus Rental", empCount: 40, status: "Active" },
  { id: "CO-017", name: "U R S CAR RENTAL L.L.C", category: "3", emirate: "Dubai", type: "Car Rental", empCount: 22, status: "Active" },
  { id: "CO-018", name: "YALA TRAVEL AND TOURISM L.L.C", category: "3", emirate: "Dubai", type: "Travel and Tourism", empCount: 20, status: "Active" },
  { id: "CO-019", name: "EDRIVE WATERSPORTS EQUIPMENT RENTAL L.L.C", category: "3", emirate: "Dubai", type: "Equipment Rental", empCount: 16, status: "Active" },
  { id: "CO-020", name: "SPEED DROP DELIVERY SERVICES L.L.C", category: "3", emirate: "Dubai", type: "Delivery Services", empCount: 78, status: "Active" },
  { id: "CO-021", name: "UMED INVESTMENTS L.L.C", category: "3", emirate: "Dubai", type: "Investments", empCount: 12, status: "Active" },
  { id: "CO-022", name: "Aliyas Investment FZCO", category: "0", emirate: "Dubai", type: "Investment Free Zone", empCount: 10, status: "Setup" },
  { id: "CO-023", name: "ALYAS PROJECT DEVELOPMENT LLC", category: "0", emirate: "Fujairah", type: "Project Development", empCount: 25, status: "Setup" },
  { id: "CO-024", name: "Amafh Commercial Brokers Branch -01", category: "0", emirate: "Abu Dhabi", type: "Commercial Brokerage Branch", empCount: 14, status: "Setup" },
  { id: "CO-025", name: "Biossion Ltd", category: "0", emirate: "Dubai", type: "Company Entity", empCount: 8, status: "Setup" },
];

export function getCompanyById(id?: string) {
  return companies.find((company) => company.id.toLowerCase() === String(id || "").toLowerCase());
}

export function getCompanyMeta(company: Company) {
  const legalPrefixes: Record<string, string> = {
    Dubai: "DXB",
    Fujairah: "FUJ",
    Ajman: "AJM",
    Sharjah: "SHJ",
    "Abu Dhabi": "AUH",
  };

  const prefix = legalPrefixes[company.emirate] || "UAE";
  const number = company.id.replace("CO-", "");
  const departments = company.type.includes("Transport") || company.type.includes("Rental") ? ["Operations", "Fleet", "Maintenance", "Drivers", "Admin"] : company.type.includes("Real Estate") ? ["Sales", "Leasing", "Property", "Accounts", "Admin"] : company.type.includes("Domestic") ? ["Recruitment", "Placement", "Accommodation", "PRO", "Admin"] : ["Operations", "Finance", "HR", "PRO", "Admin"];

  return {
    licenseNo: `TL-${prefix}-${number}92`,
    establishmentNo: `MOHRE-${prefix}-${number}41`,
    immigrationNo: `IMM-${prefix}-${number}77`,
    branchCode: `${prefix}-${number}`,
    manager: company.emirate === "Dubai" ? "Ahmed Bin Rashid" : company.emirate === "Fujairah" ? "Mohammed Yousuf" : company.emirate === "Ajman" ? "Fatima Al-Balooshi" : company.emirate === "Sharjah" ? "Tariq Hassan" : "Khalid Omar",
    address: company.emirate === "Dubai" ? "Business Bay, Dubai, UAE" : company.emirate === "Fujairah" ? "Industrial Area, Fujairah, UAE" : company.emirate === "Ajman" ? "Al Jurf, Ajman, UAE" : company.emirate === "Sharjah" ? "Sajaa Industrial, Sharjah, UAE" : "Mussafah, Abu Dhabi, UAE",
    phone: company.emirate === "Dubai" ? "+971 4 555 2100" : company.emirate === "Fujairah" ? "+971 9 555 4400" : company.emirate === "Ajman" ? "+971 6 555 0911" : company.emirate === "Sharjah" ? "+971 6 555 7800" : "+971 2 555 3100",
    departments,
    payroll: company.empCount * 4200,
    assets: Math.round(company.empCount * 0.72),
    visaActive: Math.round(company.empCount * 0.82),
    visaExpiring: Math.max(1, Math.round(company.empCount * 0.05)),
    documents: [
      { name: "Trade License", no: `TL-${prefix}-${number}92`, status: company.status === "Renewal Due" ? "Renewal Soon" : "Valid", expiry: company.status === "Renewal Due" ? "02 Jun 2025" : "24 Nov 2026" },
      { name: "MOHRE Establishment Card", no: `MOHRE-${prefix}-${number}41`, status: "Valid", expiry: "12 Oct 2025" },
      { name: "Immigration Card", no: `IMM-${prefix}-${number}77`, status: "Valid", expiry: "18 Sep 2025" },
    ],
  };
}
