import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Mail, MessageSquare, BellRing, ArrowRight, Smartphone, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotificationRules() {
  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      <div className="flex items-center gap-4">
        <Link to="/automation">
           <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full">
             <ArrowRight className="w-4 h-4 rotate-180" />
           </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
             <BellRing className="w-6 h-6 text-accent" />
             Notification Routing
          </h1>
          <p className="text-sm text-primary/60 mt-1">Manage outbound communication channels and templates.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="md:col-span-1 bg-primary text-white border-none relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-20 blur-2xl rounded-full"></div>
           <CardHeader>
             <CardTitle className="text-lg">Delivery Channels</CardTitle>
           </CardHeader>
           <CardContent className="space-y-4 relative z-10">
               <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="flex items-center gap-2 text-sm"><Mail className="w-4 h-4 text-accent"/> Email (SendGrid)</span>
                  <div className="w-8 h-4 bg-accent rounded-full relative"><div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div></div>
               </div>
               <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="flex items-center gap-2 text-sm"><Activity className="w-4 h-4 text-accent"/> System Alerts</span>
                  <div className="w-8 h-4 bg-accent rounded-full relative"><div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div></div>
               </div>
               <div className="flex justify-between items-center py-2 border-b border-white/10 opacity-50">
                  <span className="flex items-center gap-2 text-sm"><Smartphone className="w-4 h-4"/> SMS (Twilio)</span>
                  <div className="w-8 h-4 bg-white/20 rounded-full relative"><div className="w-3 h-3 bg-white rounded-full absolute left-0.5 top-0.5"></div></div>
               </div>
               <div className="pt-2 text-xs text-white/50 italic">
                 Configure API keys in Settings.
               </div>
           </CardContent>
        </Card>

        <Card className="md:col-span-3">
           <CardHeader className="flex flex-row items-center justify-between border-b border-primary/5 pb-4">
              <CardTitle className="text-lg">Alert Templates</CardTitle>
              <Button variant="outline" size="sm">+ New Template</Button>
           </CardHeader>
           <CardContent className="p-0">
             <table className="w-full text-sm text-left">
               <thead className="bg-primary/5 text-primary/60 text-xs uppercase tracking-wider">
                 <tr>
                   <th className="px-6 py-4 font-medium">Template Name</th>
                   <th className="px-6 py-4 font-medium">Subject / Title</th>
                   <th className="px-6 py-4 font-medium text-center">Channels</th>
                   <th className="px-6 py-4 font-medium text-right">Actions</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-primary/5">
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="px-6 py-4 font-bold text-primary">TPL_VISA_EXPIRY</td>
                    <td className="px-6 py-4 text-primary/80">Action Required: Visa Expiry for {"{{Employee.Name}}"}</td>
                    <td className="px-6 py-4 text-center">
                       <div className="flex items-center justify-center gap-1 text-primary/60">
                         <Mail className="w-4 h-4" /> <MessageSquare className="w-4 h-4" />
                       </div>
                    </td>
                    <td className="px-6 py-4 text-right"><Button variant="outline" size="sm">Edit</Button></td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="px-6 py-4 font-bold text-primary">TPL_LOAN_APPROVED</td>
                    <td className="px-6 py-4 text-primary/80">Your Loan Request {"{{Loan.ID}}"} is Approved</td>
                    <td className="px-6 py-4 text-center">
                       <div className="flex items-center justify-center gap-1 text-primary/60">
                         <Mail className="w-4 h-4" />
                       </div>
                    </td>
                    <td className="px-6 py-4 text-right"><Button variant="outline" size="sm">Edit</Button></td>
                  </tr>
               </tbody>
             </table>
           </CardContent>
        </Card>
      </div>

    </div>
  );
}
