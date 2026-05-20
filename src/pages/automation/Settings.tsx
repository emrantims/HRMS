import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Settings2, ArrowRight, ShieldAlert, Cpu, HardDrive, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Settings() {
  return (
    <div className="flex flex-col gap-6 w-full pb-10 max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <Link to="/automation">
           <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full">
             <ArrowRight className="w-4 h-4 rotate-180" />
           </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
             <Settings2 className="w-6 h-6 text-accent" />
             Engine Configurations
          </h1>
          <p className="text-sm text-primary/60 mt-1">Global settings and limits for the Automation Engine.</p>
        </div>
      </div>

      <div className="grid gap-6">
         <Card>
           <CardHeader className="bg-primary/5 border-b border-primary/10">
              <CardTitle className="text-lg flex items-center gap-2"><Cpu className="w-5 h-5"/> Execution Limits</CardTitle>
           </CardHeader>
           <CardContent className="pt-6 grid grid-cols-2 gap-8">
              <div>
                 <label className="text-sm font-bold text-primary block mb-2">Max Retries for Transient Errors</label>
                 <select className="w-full p-2.5 border border-primary/20 rounded-lg text-sm bg-white">
                   <option>3 Retries (Default)</option>
                   <option>5 Retries</option>
                   <option>No Retry (Fail instantly)</option>
                 </select>
                 <p className="text-xs text-primary/40 mt-1">For API timeouts, database locks, etc.</p>
              </div>
              <div>
                 <label className="text-sm font-bold text-primary block mb-2">Infinite Loop Protection Depth</label>
                 <select className="w-full p-2.5 border border-primary/20 rounded-lg text-sm bg-white">
                   <option>Depth 5 (Default)</option>
                   <option>Depth 10</option>
                 </select>
                 <p className="text-xs text-primary/40 mt-1">Stops rule execution if A triggers B, which triggers A.</p>
              </div>
           </CardContent>
         </Card>

         <Card>
           <CardHeader className="bg-primary/5 border-b border-primary/10 pl-6">
              <CardTitle className="text-lg flex items-center gap-2"><HardDrive className="w-5 h-5"/> Audit Logging</CardTitle>
           </CardHeader>
           <CardContent className="pt-6 grid grid-cols-2 gap-8">
              <div>
                 <label className="text-sm font-bold text-primary block mb-2">Log Retention Period</label>
                 <select className="w-full p-2.5 border border-primary/20 rounded-lg text-sm bg-white">
                   <option>30 Days</option>
                   <option>90 Days (Default)</option>
                   <option>1 Year</option>
                 </select>
              </div>
              <div>
                 <label className="text-sm font-bold text-primary block mb-2">Verbosity Level</label>
                 <select className="w-full p-2.5 border border-primary/20 rounded-lg text-sm bg-white">
                   <option>Errors Only</option>
                   <option>Standard (Triggers & Outcomes)</option>
                   <option>Debug (Full Call Stack)</option>
                 </select>
              </div>
           </CardContent>
         </Card>

         <Card className="border-danger/20 border-2">
           <CardHeader className="bg-danger/5 border-b border-danger/10">
              <CardTitle className="text-danger flex items-center gap-2"><ShieldAlert className="w-5 h-5"/> Danger Zone</CardTitle>
           </CardHeader>
           <CardContent className="pt-6 flex justify-between items-center">
              <div>
                <p className="font-bold text-primary text-sm">Emergency Kill Switch</p>
                <p className="text-xs text-primary/60 mt-1">Instantly suspends all automation processing. Used only during critical mass failures.</p>
              </div>
              <Button variant="accent" className="bg-danger hover:bg-danger-800 text-white">Suspend Engine Processing</Button>
           </CardContent>
         </Card>
      </div>
    </div>
  );
}
