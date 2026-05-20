import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, MonitorSmartphone, Key, CreditCard as IdCard, Check, X, AlertTriangle } from 'lucide-react';

const ASSIGNED_ASSETS = [
  { id: 'AST-LTP-012', name: 'MacBook Pro 14"', type: 'Laptop', icon: MonitorSmartphone, status: 'pending', value: 8000 },
  { id: 'AST-K-005', name: 'Office Keycard', type: 'Access', icon: Key, status: 'returned', value: 150 },
  { id: 'AST-ID-112', name: 'Company Emirates ID', type: 'ID', icon: IdCard, status: 'lost', value: 250 },
];

export default function AssetClearance() {
  const { id } = useParams();
  const [assets, setAssets] = useState(ASSIGNED_ASSETS);

  const handleStatusChange = (astId: string, status: string) => {
    setAssets(assets.map(a => a.id === astId ? { ...a, status } : a));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'returned': return 'bg-success/20 text-success-foreground border-success/30';
      case 'lost': return 'bg-danger/20 text-danger-foreground border-danger/30';
      default: return 'bg-primary/5 text-primary/60 border-primary/20';
    }
  };

  const pendingCount = assets.filter(a => a.status === 'pending').length;
  const lostDeduction = assets.filter(a => a.status === 'lost').reduce((sum, a) => sum + a.value, 0);

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6 w-full pb-10">
      <div className="flex items-center gap-4">
        <Link to={`/exit/timeline/${id}`}>
           <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full">
             <ArrowRight className="w-4 h-4 rotate-180" />
           </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-primary">Asset Clearance</h1>
          <p className="text-sm text-primary/60 mt-1">Verify and collect company assets from the employee.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
           {assets.map((asset) => (
             <Card key={asset.id} className={`transition-all ${asset.status === 'pending' ? 'ring-2 ring-warning/20' : ''}`}>
               <CardContent className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                 <div className="flex items-center gap-4">
                   <div className={`p-3 rounded-xl border ${getStatusColor(asset.status)}`}>
                     <asset.icon className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="font-bold text-primary">{asset.name}</h3>
                     <div className="flex gap-2 items-center text-xs text-primary/60 mt-1">
                       <span className="font-mono bg-primary/5 px-2 py-0.5 rounded">{asset.id}</span>
                       <span>•</span>
                       <span>Est. Value: AED {asset.value}</span>
                     </div>
                   </div>
                 </div>

                 <div className="flex bg-primary/5 rounded-lg p-1">
                   <button 
                     onClick={() => handleStatusChange(asset.id, 'returned')}
                     className={`px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-2 ${asset.status === 'returned' ? 'bg-success text-white shadow' : 'text-primary/60 hover:text-success'}`}
                   >
                     <Check className="w-4 h-4"/> Returned
                   </button>
                   <button 
                     onClick={() => handleStatusChange(asset.id, 'pending')}
                     className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${asset.status === 'pending' ? 'bg-white text-primary shadow' : 'text-primary/60 hover:text-primary'}`}
                   >
                     Pending
                   </button>
                   <button 
                     onClick={() => handleStatusChange(asset.id, 'lost')}
                     className={`px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-2 ${asset.status === 'lost' ? 'bg-danger text-white shadow' : 'text-primary/60 hover:text-danger'}`}
                   >
                     <X className="w-4 h-4"/> Missing/Lost
                   </button>
                 </div>
               </CardContent>
               
               {asset.status === 'lost' && (
                 <div className="bg-danger/5 border-t border-danger/10 px-6 py-3 flex items-center gap-3 text-sm text-danger-foreground">
                   <AlertTriangle className="w-4 h-4 text-danger" />
                   AED {asset.value} will be added to deductions in Final Settlement.
                 </div>
               )}
             </Card>
           ))}
        </div>

        <div>
          <Card className="sticky top-6">
            <CardHeader className="bg-primary/5 border-b border-primary/10">
               <CardTitle className="text-lg">Clearance Summary</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
               <div className="text-center p-4 border rounded-lg bg-primary/5">
                 <div className="text-4xl font-bold text-primary mb-1">{pendingCount}</div>
                 <div className="text-sm font-medium text-primary/60">Assets Pending Return</div>
               </div>

               {lostDeduction > 0 && (
                 <div className="p-4 border border-danger/20 bg-danger/5 rounded-lg">
                   <div className="text-sm font-bold text-danger mb-1">Total Loss Deduction</div>
                   <div className="text-xl font-mono font-bold text-danger-foreground">AED {lostDeduction}</div>
                 </div>
               )}

               <Button 
                 variant={pendingCount === 0 ? "accent" : "outline"} 
                 className="w-full font-bold"
                 disabled={pendingCount > 0}
               >
                 {pendingCount > 0 ? 'Clearance Locked' : 'Mark IT Clearance Complete'}
               </Button>
               {pendingCount > 0 && (
                 <p className="text-xs text-center text-warning-foreground mt-2 font-medium">
                   All items must be marked returned or lost to complete this step.
                 </p>
               )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
