import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Plane, UploadCloud, CheckCircle2, FileText, AlertCircle } from 'lucide-react';

export default function VisaClearance() {
  const { id } = useParams();
  const [fileUploaded, setFileUploaded] = useState(false);
  const [complete, setComplete] = useState(false);

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6 w-full pb-10">
      <div className="flex items-center gap-4">
        <Link to={`/exit/timeline/${id}`}>
           <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full">
             <ArrowRight className="w-4 h-4 rotate-180" />
           </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-primary">Visa Cancellation</h1>
          <p className="text-sm text-primary/60 mt-1">Manage the legal visa cancellation process for this exit.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className={complete ? "border-success bg-success/5" : ""}>
          <CardHeader>
             <CardTitle className="text-lg flex items-center gap-2">
               Cancellation Status
               {complete && <CheckCircle2 className="w-5 h-5 text-success" />}
             </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
             <div className="flex items-center justify-between border-b border-primary/10 pb-4">
                <div>
                   <p className="text-sm font-medium text-primary">Emirates ID Return</p>
                   <p className="text-xs text-primary/60 mt-1">Verified via IT Asset Clearance</p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-success bg-success/10 px-2 py-1 rounded border border-success/20">Returned</span>
             </div>

             <div className="space-y-3">
               <label className="text-sm font-medium text-primary block">MOHRE / ICP Cancellation Document</label>
               
               {!fileUploaded ? (
                 <div className="border-2 border-dashed border-primary/20 rounded-xl p-8 text-center bg-white hover:bg-primary/5 transition-colors cursor-pointer"
                   onClick={() => setFileUploaded(true)}
                 >
                   <UploadCloud className="w-8 h-8 text-primary/40 mx-auto mb-3" />
                   <p className="font-medium text-primary text-sm">Upload Cancellation PDF</p>
                   <p className="text-xs text-primary/50 mt-1">Click or drag & drop</p>
                 </div>
               ) : (
                 <div className="p-4 border border-success/30 bg-success/10 rounded-xl flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <FileText className="w-8 h-8 text-success" />
                     <div>
                       <p className="font-bold text-sm text-success-800">VISA_CANCEL_EMP045.pdf</p>
                       <p className="text-xs text-success/70">Uploaded just now</p>
                     </div>
                   </div>
                   <Button variant="outline" size="sm" onClick={() => setFileUploaded(false)} className="text-xs h-7 border-success/30 text-success-800 hover:bg-success hover:text-white">Remove</Button>
                 </div>
               )}
             </div>

             <div className="bg-warning/10 p-4 rounded-xl border border-warning/20">
               <div className="flex gap-2">
                 <AlertCircle className="w-5 h-5 text-warning shrink-0" />
                 <p className="text-sm text-warning-foreground">Final settlement transfer will remain blocked in Payroll until Visa Cancellation document is uploaded and marked complete.</p>
               </div>
             </div>

             <Button 
               variant={complete ? "outline" : "accent"} 
               className="w-full" 
               disabled={!fileUploaded || complete}
               onClick={() => setComplete(true)}
             >
               {complete ? "Cancellation Marked Complete" : "Confirm Legal Cancellation"}
             </Button>

          </CardContent>
        </Card>

        <Card>
          <CardHeader>
             <CardTitle className="text-lg">Repatriation / Flight</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div>
                <label className="text-sm font-medium text-primary block mb-2">Company Flight Required?</label>
                <select className="w-full p-2.5 border rounded-lg bg-white text-sm">
                  <option>Yes - Provide company ticket</option>
                  <option>No - Taking cash allowance equivalent</option>
                  <option>No - Changing visa locally</option>
                </select>
             </div>
             
             <div className="border border-primary/10 rounded-lg p-4 bg-primary/5">
                <Plane className="w-6 h-6 text-primary/40 mb-2" />
                <h4 className="font-medium text-sm">Cash Equivalent Allowance</h4>
                <p className="text-xs text-primary/60 mt-1 mb-3">If selected, AED 1,500 will be added to Final Settlement</p>
                <Button variant="outline" size="sm" className="w-full text-xs">Push to Settlement</Button>
             </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
