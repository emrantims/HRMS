import React from "react";
import { Users, Shield, Search, Filter } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Card } from "../../components/ui/Card";

const mockUsers = [
  { id: "USR-001", name: "Ahmed Bin Rashid", role: "Group Admin", email: "admin@emiratesgroup.ae", status: "Active", lastLogin: "Just now" },
  { id: "USR-042", name: "Sarah Connor", role: "HR Manager", email: "sarah.c@emiratesgroup.ae", status: "Active", lastLogin: "2 hrs ago" },
  { id: "USR-089", name: "Tariq Mahmood", role: "Payroll Admin", email: "tariq.m@emiratesgroup.ae", status: "Active", lastLogin: "Yesterday" },
];

export default function UserList() {
  return (
    <div className="flex flex-col h-full gap-6 w-full pb-10">
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">System Users & Roles</h1>
          <p className="text-primary/60 text-sm mt-1">Manage system access, user roles, and security permissions</p>
        </div>
        <Button variant="accent" className="gap-2">
          Invite User
        </Button>
      </div>

      <Card className="shrink-0 bg-surface">
        <div className="p-4 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-primary/40" />
            <Input placeholder="Search users by name, email, or role..." className="pl-9" />
          </div>
          <Button variant="outline" size="icon"><Filter className="w-4 h-4" /></Button>
        </div>
      </Card>

      <Card className="flex-1 overflow-hidden flex flex-col bg-surface shadow-sm border-primary/10">
        <div className="flex-1 overflow-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-background sticky top-0 shadow-sm border-b border-primary/10 font-bold text-primary/50 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="px-6 py-4">User Details</th>
                <th className="px-6 py-4">Role & Access</th>
                <th className="px-6 py-4">Last Login</th>
                <th className="px-6 py-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/5 text-sm">
              {mockUsers.map(user => (
                <tr key={user.id} className="hover:bg-primary/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-primary text-sm">{user.name}</div>
                        <div className="text-[10px] text-primary/50">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-accent" />
                      <span className="font-bold text-primary/80">{user.role}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-primary/60">{user.lastLogin}</td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-[10px] uppercase font-bold text-success bg-success/10 px-2 py-1 rounded">
                      {user.status}
                    </span>
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
