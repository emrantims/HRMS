import React, { useState } from 'react';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Printer, Download, Mail, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ClearanceCertificate() {
  const { id } = useParams();
  const [type, setType] = useState<'experience' | 'clearance'>('experience');

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6 w-full pb-10">
      <div className="flex items-center justify-between">
         <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <Link to={`/exit/summary/${id}`}>
             <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full shrink-0">
               <ArrowRight className="w-4 h-4 rotate-180" />
             </Button>
          </Link>
          <div className="bg-primary/5 p-1 rounded-lg inline-flex">
            <button 
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${type === 'experience' ? 'bg-white shadow text-primary' : 'text-primary/60 hover:text-primary'}`}
              onClick={() => setType('experience')}
            >Experience Letter</button>
            <button 
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${type === 'clearance' ? 'bg-white shadow text-primary' : 'text-primary/60 hover:text-primary'}`}
              onClick={() => setType('clearance')}
            >Clearance Certificate</button>
          </div>
        </div>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" size="sm" className="gap-2 border-primary/20 hover:bg-primary/5"><Printer className="w-4 h-4"/> Print</Button>
          <Button variant="accent" size="sm" className="gap-2 shadow-sm"><Download className="w-4 h-4"/> PDF</Button>
        </div>
      </div>

      <Card className="bg-white" id="printable-doc">
        <CardContent className="p-8 sm:p-16 relative overflow-hidden">
           {/* Watermark */}
           <ShieldCheck className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-primary/[0.03] -z-0 pointer-events-none" />
           
           <div className="relative z-10">
             {/* Header */}
             <div className="text-center mb-16">
                <h1 className="text-3xl font-bold tracking-tighter text-primary">EMIRATES MULTI-CORP</h1>
                <p className="text-sm font-medium text-primary/60 tracking-widest mt-1 uppercase">Human Resources Department</p>
                <div className="w-16 h-1 bg-accent mx-auto mt-4"></div>
             </div>

             <div className="flex justify-between items-end mb-12 text-sm text-primary">
                <div>
                  <p><span className="font-bold">Ref No:</span> EXP/2024/045</p>
                  <p><span className="font-bold">Emp ID:</span> EMP-045</p>
                </div>
                <div className="text-right">
                  <p><span className="font-bold">Date:</span> Oct 15, 2024</p>
                </div>
             </div>

             <h2 className="text-xl font-bold text-center underline underline-offset-8 mb-12 uppercase tracking-wider text-primary">
               {type === 'experience' ? 'TO WHOMSOEVER IT MAY CONCERN' : 'NON-LIABILITY CERTIFICATE'}
             </h2>

             {type === 'experience' ? (
               <div className="space-y-6 text-primary leading-loose text-justify text-[15px]">
                  <p>
                    This is to certify that <strong>Ms. Sarah Jenkins</strong> was employed with <strong>Emirates Multi-Corp LLC</strong> in the capacity of <strong>Account Executive</strong> within the <strong>Sales Department</strong>.
                  </p>
                  <p>
                    Her employment tenure with our organization was from <strong>August 01, 2022</strong> to <strong>October 14, 2024</strong>. During her employment, we found her to be a dedicated, hardworking, and reliable employee. She carried out her duties and responsibilities diligently.
                  </p>
                  <p>
                    She left the organization of her own accord, and her final settlement has been processed successfully.
                  </p>
                  <p>
                    We wish her all the best in her future endeavors.
                  </p>
               </div>
             ) : (
               <div className="space-y-6 text-primary leading-loose text-justify text-[15px]">
                  <p>
                    This is to certify that <strong>Ms. Sarah Jenkins</strong>, holding Employee Number <strong>EMP-045</strong>, has successfully completed all exit formalities and clearance procedures with <strong>Emirates Multi-Corp LLC</strong> as of <strong>October 14, 2024</strong>.
                  </p>
                  <p>
                    We confirm that the employee has returned all company assets, cleared all financial obligations, and her visa has been legally cancelled. The organization holds no liabilities, financial or otherwise, against her name, nor does she owe any dues to the company.
                  </p>
                  <p>
                    This Non-Liability / Clearance Certificate is issued at the request of the employee without any liability to the company.
                  </p>
               </div>
             )}

             {/* Signatures */}
             <div className="mt-32">
                <p className="font-bold text-primary mb-12">For Emirates Multi-Corp LLC:</p>
                
                <div className="w-48 border-b-2 border-primary pb-2 mb-2 font-signature text-2xl text-primary flex items-end">
                   Digital Sign
                </div>
                <p className="font-bold text-primary text-sm">Fatima Al Mansouri</p>
                <p className="text-xs text-primary/60 font-medium">Head of Human Resources</p>
             </div>
           </div>
        </CardContent>
      </Card>
    </div>
  );
}
