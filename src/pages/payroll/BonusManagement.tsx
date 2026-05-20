import React from "react";
import { Gift, Plus, CheckCircle, Clock } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Select } from "../../components/ui/Select";
import { Label } from "../../components/ui/Label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/Card";
import { Badge } from "../../components/ui/Badge";

export default function BonusManagement() {
  return (
    <div className="flex flex-col h-full gap-6 max-w-5xl mx-auto w-full pb-10">
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">
            Bonus Allocation
          </h1>
          <p className="text-primary/60 text-sm mt-1">
            Assign periodic or performance bonuses
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Add Bonus Form */}
        <Card className="lg:col-span-1 shadow-sm border-primary/10">
          <CardHeader className="border-b border-primary/5 pb-4 bg-surface">
            <CardTitle className="flex items-center gap-2">
              <Gift className="w-4 h-4" /> Grant New Bonus
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <Label>Bonus Type</Label>
              <Select>
                <option>Performance Bonus</option>
                <option>Festival Allowance</option>
                <option>Manager Discretionary</option>
                <option>Joining Bonus</option>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Select Employee</Label>
              <Select>
                <option>Ahmed Ali (EMP-24-0012)</option>
                <option>Sarah Connor (EMP-23-0145)</option>
                <option>Elena Rostova (EMP-21-0089)</option>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Amount (AED)</Label>
              <Input type="number" placeholder="0.00" />
            </div>
            <div className="space-y-2">
              <Label>Remarks / Justification</Label>
              <Input placeholder="E.g., Outperformed Q3 targets" />
            </div>

            <Button variant="accent" className="w-full mt-4 gap-2">
              <Plus className="w-4 h-4" /> Add to Payroll
            </Button>
          </CardContent>
        </Card>

        {/* Pending / Active list */}
        <Card className="lg:col-span-2 shadow-sm border-primary/10 overflow-hidden flex flex-col">
          <CardHeader className="border-b border-primary/5 pb-4 bg-surface">
            <CardTitle>Bonus Allocations (October 2024)</CardTitle>
          </CardHeader>
          <div className="flex-1 overflow-x-auto bg-surface">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-background sticky top-0 shadow-sm text-[10px] uppercase font-bold text-primary/50 tracking-widest">
                <tr>
                  <th className="px-4 py-3">Employee</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5 font-mono text-xs">
                <tr className="hover:bg-primary/5">
                  <td className="px-4 py-3 font-sans">
                    <div className="font-bold text-primary text-sm">
                      Sarah Connor
                    </div>
                    <div className="text-[10px] text-primary/50">
                      EMP-23-0145
                    </div>
                  </td>
                  <td className="px-4 py-3 font-sans">
                    <Badge variant="outline" className="text-[9px]">
                      Festival Allowance
                    </Badge>
                  </td>
                  <td className="px-4 py-3 font-bold text-success">
                    AED 2,000
                  </td>
                  <td className="px-4 py-3 font-sans">
                    <div className="flex items-center gap-1 text-success font-bold text-[10px] uppercase">
                      <CheckCircle className="w-3 h-3" /> Approved
                    </div>
                  </td>
                </tr>

                <tr className="hover:bg-primary/5">
                  <td className="px-4 py-3 font-sans">
                    <div className="font-bold text-primary text-sm">
                      Zaid Al-Hashmi
                    </div>
                    <div className="text-[10px] text-primary/50">
                      EMP-22-0311
                    </div>
                  </td>
                  <td className="px-4 py-3 font-sans">
                    <Badge variant="outline" className="text-[9px]">
                      Performance
                    </Badge>
                  </td>
                  <td className="px-4 py-3 font-bold text-success">
                    AED 5,000
                  </td>
                  <td className="px-4 py-3 font-sans">
                    <div className="flex items-center gap-1 text-warning font-bold text-[10px] uppercase">
                      <Clock className="w-3 h-3" /> Pending HR
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
