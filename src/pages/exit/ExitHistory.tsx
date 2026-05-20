import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Search, Filter, Download, ArrowRight, UserX, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const EXITS = [
  { id: 'EXT-2024-089', emp: 'Ahmad Raza', type: 'Resignation', ldw: '2024-10-01', net: 15400, status: 'Completed' },
  { id: 'EXT-2024-090', emp: 'Sarah Jenkins', type: 'Termination', ldw: '2024-10-14', net: 20250, status: 'In Progress' },
  { id: 'EXT-2023-112', emp: 'Mohammed Ali', type: 'Absconded', ldw: '2023-11-20', net: 0, status: 'Completed' },
  { id: 'EXT-2023-145', emp: 'Lisa Wang', type: 'End of Contract', ldw: '2023-12-31', net: 45000, status: 'Completed' },
  { id: 'EXT-2024-012', emp: 'Tariq Al Fasi', type: 'Resignation', ldw: '2024-02-15', net: 8500, status: 'Completed' },
];

export default function ExitHistory() {
  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-col gap-6 w-full pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary">Exit History & Archives</h1>
          <p className="text-sm text-primary/60 mt-1">Search past offboardings and download historical settlements.</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="w-4 h-4" /> Export CSV
        </Button>
      </div>

      <Card>
        <CardHeader className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-primary/5 pb-4">
           <CardTitle className="text-lg">All Records</CardTitle>
           <div className="flex gap-2 w-full md:w-auto">
             <div className="relative flex-1 md:w-64">
               <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-primary/40" />
               <input 
                 type="text" 
                 placeholder="Search by name, ID..." 
                 className="w-full pl-9 pr-3 py-2 text-sm border rounded-md"
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
               />
             </div>
             <Button variant="outline" size="sm" className="h-9 px-3 gap-2">
               <Filter className="w-4 h-4" />
               <span className="hidden sm:inline">Filters</span>
             </Button>
           </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-primary/5 text-primary/60 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-medium">Ref ID</th>
                  <th className="px-6 py-4 font-medium">Employee</th>
                  <th className="px-6 py-4 font-medium">Exit Type</th>
                  <th className="px-6 py-4 font-medium">LWD</th>
                  <th className="px-6 py-4 font-medium text-right">Net Settlement</th>
                  <th className="px-6 py-4 font-medium text-center">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5">
                {EXITS.filter(e => e.emp.toLowerCase().includes(search.toLowerCase()) || e.id.toLowerCase().includes(search.toLowerCase())).map(row => (
                  <tr key={row.id} className="hover:bg-primary/5 transition-colors">
                    <td className="px-6 py-4 font-mono text-xs">{row.id}</td>
                    <td className="px-6 py-4 font-bold text-primary">{row.emp}</td>
                    <td className="px-6 py-4">
                       <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold">
                         {row.type}
                       </span>
                    </td>
                    <td className="px-6 py-4 text-primary/70">{row.ldw}</td>
                    <td className="px-6 py-4 text-right font-mono font-medium">
                       AED {row.net.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-center">
                       {row.status === 'Completed' ? (
                         <span className="inline-flex items-center gap-1 text-success text-xs font-bold">
                           <UserCheck className="w-3.5 h-3.5" /> Completed
                         </span>
                       ) : (
                         <span className="inline-flex items-center gap-1 text-warning-foreground text-xs font-bold">
                           <UserX className="w-3.5 h-3.5" /> In Progress
                         </span>
                       )}
                    </td>
                    <td className="px-6 py-4 text-right">
                       <Link to={row.status === 'Completed' ? `/exit/summary/${row.id}` : `/exit/timeline/${row.id}`}>
                         <Button variant="outline" size="sm" className="h-8 text-xs font-medium">
                           {row.status === 'Completed' ? 'View Final' : 'Manage'}
                         </Button>
                       </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
