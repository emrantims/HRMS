import React from "react";
import { Settings2, Save, Globe, Mail, Building } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Label } from "../../components/ui/Label";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/Card";
import { Select } from "../../components/ui/Select";

export default function GeneralSettings() {
  return (
    <div className="flex flex-col h-full gap-6 w-full max-w-5xl mx-auto pb-10">
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-primary tracking-tight">General System Config</h1>
          <p className="text-primary/60 text-sm mt-1">Manage global enterprise settings, localization, and preferences</p>
        </div>
        <Button variant="accent" className="gap-2">
          <Save className="w-4 h-4" /> Save Configuration
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <Card className="bg-surface border-primary/10">
            <CardHeader className="border-b border-primary/5">
              <CardTitle className="flex items-center gap-2 text-primary">
                <Globe className="w-5 h-5 text-accent" /> Localization & Region
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>System Timezone</Label>
                <Select defaultValue="ast">
                  <option value="ast">Asia/Dubai (GST)</option>
                  <option value="utc">UTC</option>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Default Currency</Label>
                <Select defaultValue="aed">
                  <option value="aed">AED - UAE Dirham</option>
                  <option value="usd">USD - US Dollar</option>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Date Format</Label>
                <Select defaultValue="uk">
                  <option value="uk">DD/MM/YYYY</option>
                  <option value="us">MM/DD/YYYY</option>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Working Days</Label>
                <Select defaultValue="mon-fri">
                  <option value="mon-fri">Monday - Friday</option>
                  <option value="mon-sat">Monday - Saturday (Half)</option>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-surface border-primary/10">
            <CardHeader className="border-b border-primary/5">
              <CardTitle className="flex items-center gap-2 text-primary">
                <Building className="w-5 h-5 text-accent" /> Group Branding
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <Label>Master Group Name</Label>
                <Input defaultValue="Emirates Group Enterprise" />
              </div>
              <div className="space-y-2">
                <Label>Group Logo (URL)</Label>
                <Input defaultValue="https://assets.emiratesgroup.ae/logo.png" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-surface border-primary/10">
            <CardHeader className="border-b border-primary/5">
              <CardTitle className="flex items-center gap-2 text-primary text-sm">
                <Mail className="w-4 h-4 text-primary/50" /> Email Deliverability
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary/70">SMTP Status</span>
                <span className="text-[10px] bg-success/10 text-success font-bold px-2 py-0.5 rounded">Connected</span>
              </div>
              <div className="space-y-2 pt-2 border-t border-primary/5">
                <Label>Default Sender Email</Label>
                <Input defaultValue="no-reply@emiratesgroup.ae" />
              </div>
              <Button variant="outline" className="w-full text-xs" size="sm">Test SMTP Connection</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
