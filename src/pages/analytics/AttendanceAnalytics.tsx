import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../components/ui/Card';
import { AnalyticsNav } from './AnalyticsNav';
import { Clock, CalendarX, Fingerprint } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function AttendanceAnalytics() {
  return (
    <div className="flex flex-col h-full w-full pb-10 max-w-[1400px] mx-auto">
      <AnalyticsNav />
      {/* Basic header and 4 KPI cards ... */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Clock className="w-6 h-6 text-accent" />
            Attendance & Tracking
          </h1>
          <p className="text-sm text-primary/60 mt-1">Global compliance and operational punctuality.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
         <Card><CardContent className="p-5 flex flex-col gap-4 text-center">
            <div className="text-sm font-bold text-primary/60">Compliance %</div>
            <div className="text-3xl font-bold text-success">96%</div>
         </CardContent></Card>
         <Card><CardContent className="p-5 flex flex-col gap-4 text-center">
            <div className="text-sm font-bold text-danger/80">Late Ratio</div>
            <div className="text-3xl font-bold text-danger">4.2%</div>
         </CardContent></Card>
         <Card><CardContent className="p-5 flex flex-col gap-4 text-center">
            <div className="text-sm font-bold text-warning-800">Absence Ratio</div>
            <div className="text-3xl font-bold text-warning-800">1.8%</div>
         </CardContent></Card>
         <Card><CardContent className="p-5 flex flex-col gap-4 text-center">
            <div className="text-sm font-bold text-primary/60">Missing Uploads</div>
            <div className="text-3xl font-bold text-primary">2 Branches</div>
         </CardContent></Card>
      </div>
      
      {/* Charts */}
      <Card>
        <CardHeader>
           <CardTitle className="text-lg">Branch Comparison</CardTitle>
        </CardHeader>
        <CardContent className="h-[400px]">
           <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { branch: 'DXB Main', onTime: 80, late: 15, absent: 5 },
                { branch: 'JAFZA', onTime: 90, late: 8, absent: 2 },
                { branch: 'AUH Branch', onTime: 85, late: 10, absent: 5 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="branch" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="onTime" stackId="a" fill="#004643" name="On Time" />
                <Bar dataKey="late" stackId="a" fill="#f59e0b" name="Late" />
                <Bar dataKey="absent" stackId="a" fill="#e11d48" name="Absent" />
              </BarChart>
           </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
