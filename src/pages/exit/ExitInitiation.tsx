import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import {
  User,
  Building2,
  Calendar,
  AlertTriangle,
  LogOut,
  Search,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const EMPLOYEES = [
  { id: '1', empId: 'EMP-001', name: 'John Doe', department: 'Engineering', branch: 'Dubai HQ', joiningDate: '2021-03-15' },
  { id: '2', empId: 'EMP-045', name: 'Sarah Jenkins', department: 'Sales', branch: 'Abu Dhabi', joiningDate: '2022-08-01' },
];

export default function ExitInitiation() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [search, setSearch] = useState('');
  
  const [exitType, setExitType] = useState('Resignation');
  
  const filteredUsers = search ? EMPLOYEES.filter(e => e.name.toLowerCase().includes(search.toLowerCase()) || e.empId.toLowerCase().includes(search.toLowerCase())) : [];

  const handleInitiate = () => {
    navigate('/exit/timeline/EXT-NEW-123');
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-6 w-full pb-10">
      <div className="flex items-center gap-4">
        <Link to="/exit">
           <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full">
             <ArrowRight className="w-4 h-4 rotate-180" />
           </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-primary">Initiate Exit Process</h1>
          <p className="text-sm text-primary/60 mt-1">Start a new offboarding workflow for an employee.</p>
        </div>
      </div>

      {step === 1 && (
        <Card className="animate-in fade-in zoom-in-95 duration-200">
          <CardHeader>
            <CardTitle className="text-lg">Step 1: Select Employee</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary/40" />
              <input 
                type="text" 
                placeholder="Search by name or Employee ID..." 
                className="w-full pl-10 pr-4 py-3 bg-white border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all font-medium"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {search && filteredUsers.length > 0 && (
              <div className="space-y-3">
                {filteredUsers.map(user => (
                  <div 
                    key={user.id}
                    onClick={() => setSelectedUser(user)}
                    className={`p-4 border rounded-xl flex items-center justify-between cursor-pointer transition-all ${
                      selectedUser?.id === user.id ? 'border-accent bg-accent/5 ring-2 ring-accent/20' : 'border-primary/10 hover:border-primary/30'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-primary">{user.name}</h4>
                        <div className="flex items-center gap-3 text-xs text-primary/60 mt-1">
                          <span className="font-mono">{user.empId}</span>
                          <span>•</span>
                          <span>{user.department}</span>
                          <span>•</span>
                          <span>{user.branch}</span>
                        </div>
                      </div>
                    </div>
                    {selectedUser?.id === user.id && (
                      <CheckCircle2 className="w-6 h-6 text-accent" />
                    )}
                  </div>
                ))}
              </div>
            )}
            
            {search && filteredUsers.length === 0 && (
              <div className="text-center py-8 text-primary/50">
                No active employees found matching "{search}"
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-end border-t border-primary/5 pt-4">
            <Button 
               variant="accent" 
               disabled={!selectedUser}
               onClick={() => setStep(2)}
               className="gap-2"
            >
              Next Step
              <ArrowRight className="w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 2 && (
         <Card className="animate-in slide-in-from-right-8 duration-300">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-3">
               Step 2: Exit Details 
               <span className="text-xs font-normal text-primary/60 bg-primary/5 px-2 py-1 rounded">
                 for {selectedUser?.name} ({selectedUser?.empId})
               </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
               <label className="block text-sm font-medium text-primary mb-3">Exit Type</label>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                 {['Resignation', 'Termination', 'Absconded', 'End of Contract'].map(type => (
                   <button
                     key={type}
                     onClick={() => setExitType(type)}
                     className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                       exitType === type 
                         ? 'border-accent bg-accent text-white shadow-md' 
                         : 'border-primary/20 hover:border-primary/40 text-primary'
                     }`}
                   >
                     {type}
                   </button>
                 ))}
               </div>
            </div>

            {exitType === 'Absconded' && (
              <div className="bg-danger/10 border border-danger/20 p-4 rounded-lg flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-danger shrink-0 mt-0.5" />
                <div className="text-sm text-danger-foreground">
                  <strong>Warning:</strong> Initiating an absconding workflow will immediately trigger a block on all company systems, notify the PRO for legal action, and freeze salary processing.
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                  <label className="block text-sm font-medium text-primary mb-2">Notification Date</label>
                  <input type="date" className="w-full p-2.5 bg-white border border-primary/20 rounded-lg text-sm" />
               </div>
               <div>
                  <label className="block text-sm font-medium text-primary mb-2">Last Working Day</label>
                  <input type="date" className="w-full p-2.5 bg-white border border-primary/20 rounded-lg text-sm" />
               </div>
            </div>

            <div>
               <label className="block text-sm font-medium text-primary mb-2">Notice Period Details</label>
               <div className="flex items-center gap-4">
                 <label className="flex items-center gap-2 text-sm text-primary/80">
                   <input type="radio" name="notice" defaultChecked className="text-accent" />
                   Serving Full Notice
                 </label>
                 <label className="flex items-center gap-2 text-sm text-primary/80">
                   <input type="radio" name="notice" className="text-accent" />
                   Partial / Shortfall Deduction
                 </label>
                 <label className="flex items-center gap-2 text-sm text-primary/80">
                   <input type="radio" name="notice" className="text-accent" />
                   Waived by Management
                 </label>
               </div>
            </div>

            <div>
               <label className="block text-sm font-medium text-primary mb-2">Reason / Manager Comments</label>
               <textarea 
                 className="w-full p-3 bg-white border border-primary/20 rounded-lg text-sm min-h-[100px]" 
                 placeholder="Provide detailed reasons for this exit..."
               />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t border-primary/5 pt-4">
            <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
            <Button variant="accent" onClick={handleInitiate} className="gap-2">
              <LogOut className="w-4 h-4" />
              Trigger Exit Workflow
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
