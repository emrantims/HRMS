import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { PlayCircle, TestTube, ArrowRight, Settings2, Code, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RuleSimulation() {
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<any>(null);

  const runSim = () => {
    setRunning(true);
    setResult(null);
    setTimeout(() => {
      setRunning(false);
      setResult({
        triggered: true,
        ruleCount: 2,
        rules: ['Visa Expiry Warning', 'Notify Manager'],
        actions: [
          { type: 'Email', target: 'hr@emirates.com' },
          { type: 'System Alert', target: 'Direct Manager' }
        ]
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-6 w-full pb-10 max-w-5xl mx-auto">
      <div className="flex items-center gap-4">
        <Link to="/automation">
           <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full">
             <ArrowRight className="w-4 h-4 rotate-180" />
           </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
             <TestTube className="w-6 h-6 text-accent" />
             Rules Simulator
          </h1>
          <p className="text-sm text-primary/60 mt-1">Test how the system reacts to specific events without modifying real data.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <Card>
           <CardHeader className="bg-primary/5 border-b border-primary/10">
              <CardTitle className="text-lg flex items-center gap-2"><Settings2 className="w-5 h-5"/> Mock Event Data</CardTitle>
           </CardHeader>
           <CardContent className="pt-6 space-y-4">
              <div>
                 <label className="text-sm font-bold text-primary block mb-2">Select Module</label>
                 <select className="w-full p-2.5 border border-primary/20 rounded-lg text-sm bg-white">
                   <option>Visa</option>
                   <option>Attendance</option>
                   <option>Payroll</option>
                 </select>
              </div>
              <div>
                 <label className="text-sm font-bold text-primary block mb-2">Trigger Event</label>
                 <select className="w-full p-2.5 border border-primary/20 rounded-lg text-sm bg-white">
                   <option>Expiry Threshold Reached</option>
                   <option>Status Changed</option>
                 </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div>
                   <label className="text-sm font-bold text-primary block mb-2">Target Entity ID</label>
                   <input type="text" className="w-full p-2.5 border border-primary/20 rounded-lg text-sm" placeholder="e.g. EMP-045" defaultValue="EMP-045" />
                 </div>
                 <div>
                   <label className="text-sm font-bold text-primary block mb-2">Test Date Context</label>
                   <input type="date" className="w-full p-2.5 border border-primary/20 rounded-lg text-sm" defaultValue="2024-11-15" />
                 </div>
              </div>

              <div className="pt-4 border-t border-primary/10">
                 <label className="text-sm font-bold text-primary flex items-center gap-2 mb-2">
                   <Code className="w-4 h-4"/> Inject Custom JSON Payload (Optional)
                 </label>
                 <textarea className="w-full p-3 font-mono text-xs border border-primary/20 rounded-lg bg-primary/5 h-24" defaultValue={`{\n  "remainingDays": 30,\n  "employeeType": "FullTime"\n}`}></textarea>
              </div>

              <Button variant="accent" className="w-full gap-2 mt-4" onClick={runSim} disabled={running}>
                 {running ? <Zap className="w-4 h-4 animate-pulse" /> : <PlayCircle className="w-4 h-4" />}
                 {running ? 'Simulating Engine Behavior...' : 'Run Simulation'}
              </Button>
           </CardContent>
         </Card>

         <Card className="bg-[#1e1e1e] text-white">
           <CardHeader className="border-b border-white/10 bg-[#2d2d2d]">
              <CardTitle className="text-lg flex items-center gap-2">Simulation Output</CardTitle>
              <CardDescription className="text-white/40">Read-only logging of what WOULD happen.</CardDescription>
           </CardHeader>
           <CardContent className="p-0 font-mono text-[13px] h-full min-h-[400px] relative">
              {running ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="border-4 border-white/10 border-t-accent rounded-full w-8 h-8 animate-spin"></div>
                </div>
              ) : !result ? (
                <div className="absolute inset-0 flex items-center justify-center text-white/30">
                  Click 'Run Simulation' to see results here.
                </div>
              ) : (
                <div className="p-4 space-y-3">
                  <p className="text-success">&gt; Initialize simulation run...</p>
                  <p className="text-white/60">&gt; Event Emitted: VSA_EXPIRY_THRESHOLD (EMP-045)</p>
                  <p className="text-white/60">&gt; Evaluating {result.ruleCount} potential rules...</p>
                  <p className="text-accent">&gt; MATCH FOUND: Rule "Visa Expiry Warning" conditions met.</p>
                  <p className="text-white/60">&gt; Evaluating action tree...</p>
                  <div className="pl-4 py-2 border-l-2 border-accent/50 space-y-1">
                     <p className="text-warning">&gt; [MOCK] Triggering Event: Email hr@emirates.com</p>
                     <p className="text-warning">&gt; [MOCK] Triggering Event: System Alert to Manager</p>
                  </div>
                  <p className="text-success font-bold mt-4">&gt; Simulation complete in 120ms.</p>
                </div>
              )}
           </CardContent>
         </Card>
      </div>
    </div>
  );
}
