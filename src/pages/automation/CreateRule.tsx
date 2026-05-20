import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { ArrowRight, Bot, Box, Zap, Settings2, PlayCircle, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function CreateRule() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [module, setModule] = useState('');
  const [trigger, setTrigger] = useState('');

  const MODULES = ['Attendance', 'Payroll', 'Visa', 'Loans', 'Assets', 'Exit', 'Employee'];
  const TRIGGERS = ['Date Threshold Reached', 'Status Change', 'Data Value > Threshold', 'Action Completed'];

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
    else navigate('/automation/workflow/NEW-RULE');
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6 w-full pb-10">
      <div className="flex items-center gap-4">
        <Link to="/automation/rules">
           <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full">
             <ArrowRight className="w-4 h-4 rotate-180" />
           </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-primary">Create New Automation</h1>
          <p className="text-sm text-primary/60 mt-1">Wizard setup for the Rules Engine.</p>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-2">
        {['Module', 'Trigger', 'Conditions', 'Actions', 'Review'].map((s, i) => (
           <div key={i} className={`flex items-center gap-2 ${i + 1 === step ? 'text-accent font-bold' : i + 1 < step ? 'text-success font-medium' : 'text-primary/40 font-medium'}`}>
             <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs text-white ${i + 1 === step ? 'bg-accent' : i + 1 < step ? 'bg-success' : 'bg-primary/20'}`}>
               {i + 1 < step ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
             </div>
             <span className="text-sm whitespace-nowrap">{s}</span>
             {i < 4 && <div className={`w-8 h-[2px] ${i + 1 < step ? 'bg-success/50' : 'bg-primary/10'}`}></div>}
           </div>
        ))}
      </div>

      <Card className="animate-in fade-in zoom-in-95 duration-200">
        {step === 1 && (
          <>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2"><Box className="w-5 h-5 text-accent"/> Step 1: Select Module</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {MODULES.map(m => (
                  <button 
                    key={m} 
                    onClick={() => setModule(m)}
                    className={`p-4 border rounded-xl font-bold transition-all text-sm ${module === m ? 'border-accent bg-accent/5 text-accent ring-2 ring-accent/20' : 'border-primary/20 text-primary hover:border-primary/50'}`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </CardContent>
          </>
        )}

        {step === 2 && (
          <>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2"><Zap className="w-5 h-5 text-accent"/> Step 2: Define Trigger Event</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {TRIGGERS.map(t => (
                   <button 
                     key={t} 
                     onClick={() => setTrigger(t)}
                     className={`w-full p-4 border rounded-xl font-bold transition-all text-left text-sm ${trigger === t ? 'border-accent bg-accent/5 text-accent ring-2 ring-accent/20' : 'border-primary/20 text-primary hover:border-primary/50'}`}
                   >
                     {t}
                   </button>
                ))}
              </div>
            </CardContent>
          </>
        )}

        {step === 3 && (
          <>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2"><Settings2 className="w-5 h-5 text-accent"/> Step 3: Define Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-primary/5 border border-primary/20 border-dashed rounded-xl p-8 text-center text-primary/60">
                <p>Advanced conditions can be configured in the Visual Builder later.</p>
                <p className="mt-2 text-xs">For now, no conditions are set. The rule will trigger globally.</p>
              </div>
            </CardContent>
          </>
        )}

        {step === 4 && (
          <>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2"><PlayCircle className="w-5 h-5 text-accent"/> Step 4: Define Actions</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="grid grid-cols-2 gap-4">
                 {['Send System Notification', 'Email User/Admin', 'Create Approval Task', 'Update Record Status', 'Halt Dependent Process'].map(a => (
                    <button key={a} className="p-4 border border-primary/20 rounded-xl font-medium text-primary hover:bg-primary/5 text-sm text-left">
                      + Add Action: {a}
                    </button>
                 ))}
               </div>
            </CardContent>
          </>
        )}

        {step === 5 && (
          <>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-success"/> Step 5: Review & Initialize</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-primary/5 p-6 rounded-lg text-sm space-y-4">
                <div className="grid grid-cols-3 gap-4 border-b border-primary/10 pb-4">
                  <div className="text-primary/60 font-bold uppercase text-xs">Module</div>
                  <div className="col-span-2 font-bold text-primary">{module || 'Not selected'}</div>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-primary/10 pb-4">
                  <div className="text-primary/60 font-bold uppercase text-xs">Trigger Event</div>
                  <div className="col-span-2 font-bold text-primary">{trigger || 'Not selected'}</div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-primary/60 font-bold uppercase text-xs">Visual Builder</div>
                  <div className="col-span-2 font-medium text-primary/80">You are about to launch the visual editor to finalize connections.</div>
                </div>
              </div>
            </CardContent>
          </>
        )}

        <CardFooter className="flex justify-between border-t border-primary/5 pt-6 mt-4">
           <Button variant="outline" onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1}>Back</Button>
           <Button variant="accent" onClick={handleNext} disabled={(step === 1 && !module) || (step === 2 && !trigger)}>
             {step === 5 ? 'Launch Workflow Builder' : 'Next Step'}
             <ArrowRight className="w-4 h-4 ml-2" />
           </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
