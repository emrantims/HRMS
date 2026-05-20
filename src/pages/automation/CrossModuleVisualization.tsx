import React from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Network, ArrowRight, BookOpen, Clock, AlertTriangle, ShieldCheck, UserCircle, RefreshCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CrossModuleVisualization() {
  return (
    <div className="flex flex-col h-full w-full pb-10">
      <div className="flex items-center justify-between mb-6 shrink-0">
        <div className="flex items-center gap-4">
          <Link to="/automation">
             <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full">
               <ArrowRight className="w-4 h-4 rotate-180" />
             </Button>
          </Link>
          <div>
            <h1 className="text-xl font-bold text-primary flex items-center gap-3">
               <Network className="w-6 h-6 text-accent" /> Cross-Module Flow Map
            </h1>
            <p className="text-sm text-primary/60 mt-1">Visualize how rules cascade across different ERP domains.</p>
          </div>
        </div>
        <Button variant="outline" size="sm" className="gap-2"><RefreshCcw className="w-4 h-4" /> Reset View</Button>
      </div>

      <Card className="flex-1 bg-[#1e1e1e] border-none overflow-hidden relative min-h-[600px] shadow-2xl">
         {/* Dot grid background dark */}
         <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
         
         <CardContent className="h-full p-8 relative flex flex-col justify-center items-center">
            
            <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-16 relative w-max mx-auto">
               
               {/* Background connection lines */}
               <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 hidden md:block z-0"></div>

               {/* Origin Module */}
               <div className="z-10 bg-[#2d2d2d] rounded-2xl p-6 border-2 border-accent w-64 shadow-2xl relative">
                 <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white shadow"><BookOpen className="w-4 h-4" /></div>
                 <h3 className="text-white font-bold mb-1">Attendance Module</h3>
                 <p className="text-white/50 text-xs mb-4">Origin Trigger Event</p>
                 <div className="bg-white/5 rounded border border-white/10 p-3 text-sm">
                    <p className="text-accent-300 font-bold">Unexcused Absence (3x)</p>
                    <p className="text-white/60 font-mono text-[10px] mt-1">IF count(unexcused) &gt;= 3</p>
                 </div>
               </div>

               {/* Arrow */}
               <div className="z-10 flex flex-col items-center gap-1 hidden md:flex">
                 <div className="text-[10px] font-bold text-accent uppercase tracking-widest bg-[#1e1e1e] px-2">Cascades To</div>
                 <ArrowRight className="w-6 h-6 text-accent" />
               </div>

               {/* Middle Module / Payroll */}
               <div className="z-10 bg-[#2d2d2d] rounded-2xl p-6 border-2 border-warning w-64 shadow-2xl relative">
                 <div className="absolute -top-3 -right-3 w-8 h-8 bg-warning rounded-full flex items-center justify-center text-white shadow"><AlertTriangle className="w-4 h-4" /></div>
                 <h3 className="text-white font-bold mb-1">Payroll Module</h3>
                 <p className="text-white/50 text-xs mb-4">Automated Deduction</p>
                 <div className="bg-white/5 rounded border border-white/10 p-3 text-sm">
                    <p className="text-warning-300 font-bold">Apply Day Deduction</p>
                    <p className="text-white/60 font-mono text-[10px] mt-1">Rule: DED_UNEXC_ABS</p>
                 </div>
               </div>

               {/* Arrow */}
               <div className="z-10 flex flex-col items-center gap-1 hidden md:flex">
                 <div className="text-[10px] font-bold text-warning uppercase tracking-widest bg-[#1e1e1e] px-2">Triggers</div>
                 <ArrowRight className="w-6 h-6 text-warning" />
               </div>

               {/* Final Modules (Stacked) */}
               <div className="z-10 flex flex-col gap-6">
                  {/* Branch 1 */}
                  <div className="bg-[#2d2d2d] rounded-2xl p-4 border border-white/20 w-64 shadow-xl relative pl-12 hover:border-accent transition-colors cursor-pointer">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2"><UserCircle className="w-5 h-5 text-accent"/></div>
                    <h3 className="text-white font-bold text-sm">Manager Portal</h3>
                    <p className="text-white/50 text-xs">Sends Notification Alert</p>
                  </div>
                  {/* Branch 2 */}
                  <div className="bg-[#2d2d2d] rounded-2xl p-4 border border-white/20 w-64 shadow-xl relative pl-12 hover:border-success transition-colors cursor-pointer">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2"><ShieldCheck className="w-5 h-5 text-success"/></div>
                    <h3 className="text-white font-bold text-sm">Audit Log / Compliance</h3>
                    <p className="text-white/50 text-xs">Records Disciplinary Action</p>
                  </div>
               </div>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-full px-6 py-2 text-xs font-bold text-white/70 uppercase tracking-widest border border-white/10">
               Interactive Explorer Mode: Active
            </div>

         </CardContent>
      </Card>
    </div>
  );
}
