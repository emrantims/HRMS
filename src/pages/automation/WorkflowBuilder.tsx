import React from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { ArrowLeft, Play, Save, Settings, Settings2, GitBranch, Bell, AlertTriangle, ChevronRight, Key } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

export default function WorkflowBuilder() {
  const { id } = useParams();

  return (
    <div className="flex flex-col h-full w-full pb-10">
      <div className="flex items-center justify-between mb-6 shrink-0">
        <div className="flex items-center gap-4">
          <Link to="/automation/rules">
             <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full">
               <ArrowLeft className="w-4 h-4" />
             </Button>
          </Link>
          <div>
            <h1 className="text-xl font-bold text-primary flex items-center gap-3">
               WF-{id || 'NEW'} Builder 
               <span className="text-xs font-bold bg-success/10 text-success px-2 py-0.5 rounded border border-success/20">Draft Mode</span>
            </h1>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2"><Play className="w-4 h-4"/> Test Flow</Button>
          <Button variant="accent" size="sm" className="gap-2"><Save className="w-4 h-4"/> Save & Activate</Button>
        </div>
      </div>

      <Card className="flex-1 bg-[#f8fafc] border-2 border-primary/10 overflow-hidden relative min-h-[600px]">
         {/* Dot grid background */}
         <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #381932 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
         
         <CardContent className="h-full p-0 relative">
            
            {/* Visual Nodes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center shrink-0 w-max pr-32">
               
               {/* 1. Trigger Node */}
               <div className="w-64 bg-white border-2 border-accent shadow-lg rounded-xl overflow-hidden z-10">
                  <div className="bg-accent text-white px-4 py-2 text-sm font-bold flex justify-between items-center">
                    <span>1. TRIGGER</span>
                    <Key className="w-4 h-4 opacity-50" />
                  </div>
                  <div className="p-4">
                     <p className="font-bold text-primary mb-1">Visa Expiry Date</p>
                     <p className="text-xs text-primary/60">Checks daily at 00:00 GST for visas expiring in 30 days.</p>
                  </div>
               </div>

               {/* Connector */}
               <div className="w-16 h-1 bg-primary/20 relative z-0">
                  <ChevronRight className="w-4 h-4 text-primary/40 absolute right-[-8px] top-[-6px] bg-white rounded-full" />
               </div>

               {/* 2. Condition Node */}
               <div className="w-64 bg-white border-2 border-primary/20 shadow-lg rounded-xl overflow-hidden z-10">
                  <div className="bg-primary/5 text-primary px-4 py-2 text-sm font-bold flex justify-between items-center border-b border-primary/10">
                    <span>2. CONDITION</span>
                    <GitBranch className="w-4 h-4 opacity-50" />
                  </div>
                  <div className="p-4 space-y-2 text-sm">
                     <div className="flex justify-between items-center bg-primary/5 p-2 rounded">
                        <span className="text-primary/60 text-xs font-bold">Emp Status</span>
                        <span className="font-mono text-primary font-bold">Active</span>
                     </div>
                     <div className="flex justify-between items-center bg-primary/5 p-2 rounded">
                        <span className="text-primary/60 text-xs font-bold">Resignation</span>
                        <span className="font-mono text-primary font-bold">Null</span>
                     </div>
                  </div>
               </div>

               {/* Connector branching */}
               <div className="relative w-16 h-32 flex flex-col justify-between py-10 z-0">
                  <div className="absolute left-0 top-1/2 h-0.5 w-8 bg-primary/20 -translate-y-1/2"></div>
                  <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-primary/20"></div>
                  
                  {/* Top Branch */}
                  <div className="absolute left-8 top-10 w-8 h-0.5 bg-primary/20">
                    <ChevronRight className="w-4 h-4 text-primary/40 absolute right-[-8px] top-[-6px] bg-white rounded-full" />
                    <span className="absolute -top-5 left-1 text-[10px] font-bold text-success bg-white px-1">TRUE</span>
                  </div>

                  {/* Bottom Branch */}
                  <div className="absolute left-8 bottom-10 w-8 h-0.5 bg-primary/20">
                     <ChevronRight className="w-4 h-4 text-primary/40 absolute right-[-8px] top-[-6px] bg-white rounded-full" />
                     <span className="absolute -top-5 left-1 text-[10px] font-bold text-danger bg-white px-1">FALSE</span>
                  </div>
               </div>

               {/* 3. Action Nodes */}
               <div className="flex flex-col gap-8 z-10 w-64">
                 {/* True Action */}
                  <div className="bg-white border-2 border-success/30 shadow-lg rounded-xl overflow-hidden ring-4 ring-success/5">
                    <div className="bg-success/10 text-success-800 px-4 py-2 text-sm font-bold flex justify-between items-center border-b border-success/20">
                      <span>3. ACTION (True)</span>
                      <Bell className="w-4 h-4" />
                    </div>
                    <div className="p-4">
                       <p className="font-bold text-primary mb-1">Send Email Alert</p>
                       <p className="text-xs text-primary/60 mb-2">To: Group PRO & Direct Manager</p>
                       <Button variant="outline" size="sm" className="w-full text-xs h-7">Edit Template</Button>
                    </div>
                 </div>

                 {/* False Action */}
                  <div className="bg-white border-2 border-danger/30 shadow-lg rounded-xl overflow-hidden ring-4 ring-danger/5 opacity-80">
                    <div className="bg-danger/10 text-danger-800 px-4 py-2 text-sm font-bold flex justify-between items-center border-b border-danger/20">
                      <span>3. ACTION (False)</span>
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div className="p-4">
                       <p className="font-bold text-primary mb-1">Halt Execution</p>
                       <p className="text-xs text-primary/60">Log skip event in audit trailing.</p>
                    </div>
                 </div>
               </div>

            </div>

            {/* Floating Palette */}
            <div className="absolute top-4 left-4 bg-white shadow-xl rounded-xl border border-primary/10 overflow-hidden flex flex-col w-12 items-center py-2 gap-2">
               <button className="w-8 h-8 rounded hover:bg-primary/5 flex items-center justify-center text-primary/60 hover:text-accent" title="Add Trigger"><Key className="w-4 h-4" /></button>
               <button className="w-8 h-8 rounded hover:bg-primary/5 flex items-center justify-center text-primary/60 hover:text-accent" title="Add Condition"><GitBranch className="w-4 h-4" /></button>
               <button className="w-8 h-8 rounded hover:bg-primary/5 flex items-center justify-center text-primary/60 hover:text-accent" title="Add Action"><Bell className="w-4 h-4" /></button>
               <div className="w-6 h-px bg-primary/10 my-1"></div>
               <button className="w-8 h-8 rounded hover:bg-primary/5 flex items-center justify-center text-primary/60 hover:text-primary" title="Settings"><Settings className="w-4 h-4" /></button>
            </div>

         </CardContent>
      </Card>
    </div>
  );
}
