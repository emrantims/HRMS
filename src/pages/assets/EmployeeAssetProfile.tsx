import React from "react";
import {
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Laptop,
  Smartphone,
  Search,
  RefreshCcw,
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

const employeeAssets = [
  {
    id: "AST-LPT-001",
    type: "Laptop",
    brand: "Dell Latitude 5420",
    serial: "DL-98213",
    issueDate: "Jan 12, 2023",
    status: "Active",
    returnStatus: "-",
  },
  {
    id: "AST-MOB-012",
    type: "Mobile",
    brand: "iPhone 13",
    serial: "IP-130005",
    issueDate: "Feb 01, 2023",
    status: "Returned",
    returnStatus: "Good Condition",
  },
  {
    id: "AST-SIM-101",
    type: "SIM Card",
    brand: "Du Postpaid",
    serial: "055-1234567",
    issueDate: "Mar 15, 2023",
    status: "Active",
    returnStatus: "-",
  },
];

export default function EmployeeAssetProfile() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="flex flex-col h-full gap-6 max-w-5xl mx-auto w-full pb-10">
      {/* Action Bar */}
      <div className="flex items-center justify-between shrink-0 mb-2">
        <Button
          variant="ghost"
          className="gap-2 -ml-3"
          onClick={() => navigate("/assets/inventory")}
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 bg-surface text-primary">
            Download Handover Form
          </Button>
          <Link to="/assets/assign">
            <Button variant="accent" className="gap-2">
              Issue New Asset
            </Button>
          </Link>
        </div>
      </div>

      {/* Brief Profile Header */}
      <div className="bg-surface rounded-2xl p-6 border border-primary/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 shrink-0">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold shrink-0">
            SC
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
              <span>Sales Executive</span>
              <span className="text-primary/30">•</span>
              <span>Dubai HQ</span>
            </div>
          </div>
        </div>
        <div className="flex gap-6 border-l border-primary/10 pl-6 text-right">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">
              Active Assets
            </p>
            <p className="font-bold text-lg text-accent">2</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">
              Returned
            </p>
            <p className="font-bold text-lg text-primary">1</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/50">
              Lost/Damaged
            </p>
            <p className="font-bold text-lg text-primary/30">0</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Asset Timeline */}
        <Card className="lg:col-span-4 shadow-sm border-primary/10 flex flex-col bg-surface">
          <CardHeader className="border-b border-primary/5 pb-4 items-start">
            <CardTitle className="text-sm">Assigned Assets Log</CardTitle>
          </CardHeader>
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-background shadow-sm text-[10px] uppercase font-bold text-primary/50 tracking-widest">
                <tr>
                  <th className="px-6 py-4">Asset ID</th>
                  <th className="px-6 py-4">Details</th>
                  <th className="px-6 py-4">Issue Date</th>
                  <th className="px-6 py-4 text-center">Status</th>
                  <th className="px-6 py-4">Return Condition</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5 text-sm">
                {employeeAssets.map((asset, i) => (
                  <tr
                    key={asset.id}
                    className={`hover:bg-primary/5 ${asset.status === "Returned" ? "opacity-60 bg-primary/5 grayscale hover:grayscale-0" : ""}`}
                  >
                    <td className="px-6 py-4 font-mono font-bold text-primary/70">
                      {asset.id}
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-primary">
                        {asset.brand}
                      </div>
                      <div className="text-[10px] text-primary/50">
                        SN: {asset.serial} • {asset.type}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-primary/60">
                      {asset.issueDate}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {asset.status === "Active" ? (
                        <Badge
                          variant="outline"
                          className="border-accent text-accent bg-accent/5"
                        >
                          Active
                        </Badge>
                      ) : (
                        <Badge
                          variant="success"
                          className="bg-success/10 text-success border-success/20"
                        >
                          Returned
                        </Badge>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {asset.status === "Returned" ? (
                        <div className="flex items-center gap-2 text-xs font-medium text-success">
                          <CheckCircle2 className="w-4 h-4" /> Good
                        </div>
                      ) : (
                        <span className="text-primary/30">-</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      {asset.status === "Active" ? (
                        <Link
                          to={`/assets/return?asset=${asset.id}&emp=${id || "EMP-23-0145"}`}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 text-xs bg-surface gap-2"
                          >
                            <RefreshCcw className="w-3 h-3" /> Return
                          </Button>
                        </Link>
                      ) : (
                        <Link to={`/assets/history/${asset.id}`}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 text-xs text-primary/50"
                          >
                            History
                          </Button>
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
