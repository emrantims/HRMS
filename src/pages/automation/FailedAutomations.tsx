import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { AlertTriangle, RefreshCw, XCircle, ArrowRight, ServerCrash } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAILED = [
  { id: 'LOG-8822', rule: 'Attendance Policy - 3 Lates', time: '2024-10-15 08:30:15', target: 'EMP-112', err: 'NullReferenceException: DirectManager ID is null for Employees. Try assigning a manager.', retryCount: 3 },
  { id: 'LOG-8104', rule: 'Asset Return Sync to Setup', time: '2024-10-14 18:00:00', target: 'EXT-145', err: 'API Timeout: Inventory system failed to respond after 30000ms.', retryCount: 1 },
  { id: 'LOG-7955', rule: 'Visa Cancellation PDF parser', time: '2024-10-10 11:22:11', target: 'DOC-455', err: 'InvalidFormat: Uploaded document does not match MOHRE template.', retryCount: 0 },
];

export default function FailedAutomations() {
  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      <div className="flex items-center gap-4">
        <Link to="/automation">
           <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full">
             <ArrowRight className="w-4 h-4 rotate-180" />
           </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-danger flex items-center gap-2">
             <ServerCrash className="w-6 h-6" />
             Failed Automations
          </h1>
          <p className="text-sm text-primary/60 mt-1">Review errors, manually retry, or dismiss failed workflows.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
           <CardHeader>
             <CardTitle className="text-lg">Error Queue</CardTitle>
           </CardHeader>
           <CardContent className="space-y-4">
             {FAILED.map(f => (
                <div key={f.id} className="border border-danger/20 bg-danger/5 rounded-xl p-4">
                   <div className="flex justify-between items-start mb-2">
                      <div>
                         <h3 className="font-bold text-danger-800 flex items-center gap-2">
                           <XCircle className="w-4 h-4 text-danger" />
                           {f.rule}
                         </h3>
                         <p className="text-xs text-primary/60 mt-0.5 font-mono">{f.id} • Target: {f.target} • {f.time}</p>
                      </div>
                      <span className="text-xs font-bold bg-danger/10 text-danger px-2 py-0.5 rounded border border-danger/20">
                        {f.retryCount} Retries Failed
                      </span>
                   </div>
                   <div className="bg-white/50 border border-danger/10 p-3 rounded font-mono text-xs text-primary/80 my-3">
                     {f.err}
                   </div>
                   <div className="flex gap-2 justify-end">
                      <Button variant="outline" size="sm" className="h-8 text-xs text-primary/60 border-primary/20 hover:text-primary">Dismiss Alert</Button>
                      <Button variant="outline" size="sm" className="h-8 text-xs border-primary/20">Edit Target Data</Button>
                      <Button variant="accent" size="sm" className="h-8 text-xs bg-danger hover:bg-danger-800 text-white gap-2">
                         <RefreshCw className="w-3.5 h-3.5" /> Force Retry
                      </Button>
                   </div>
                </div>
             ))}
           </CardContent>
        </Card>

        <div>
           <Card className="sticky top-6">
             <CardHeader className="bg-danger/5 border-b border-danger/10">
                <CardTitle className="text-danger flex items-center gap-2 text-lg">
                  <AlertTriangle className="w-5 h-5" /> Auto-Retry Policy
                </CardTitle>
             </CardHeader>
             <CardContent className="pt-4 space-y-4 text-sm text-primary/80">
                <p>The system is currently configured to automatically retry transient failures (like API timeouts) <strong>3 times</strong> with exponential backoff.</p>
                <div className="border border-primary/10 rounded-lg p-3 bg-primary/5">
                   <p className="font-bold text-primary mb-1">Current Settings</p>
                   <ul className="list-disc pl-4 space-y-1 text-xs text-primary/60 marker:text-primary/40">
                     <li>Retry 1: After 5 mins</li>
                     <li>Retry 2: After 30 mins</li>
                     <li>Retry 3: After 2 hours</li>
                     <li>Failure: Move to this queue</li>
                   </ul>
                </div>
                <Button variant="outline" className="w-full mt-2 border-primary/20 text-xs">Configure Auto-Retry</Button>
             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
