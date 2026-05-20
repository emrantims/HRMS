import React from "react";
import { ArrowLeft, Printer, Download, Mail } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/ui/Button";

export default function PayslipView() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="flex flex-col h-full gap-6 max-w-4xl mx-auto w-full pb-10">
      {/* Action Bar */}
      <div className="flex items-center justify-between shrink-0 mb-4 printable-hide">
        <Button
          variant="ghost"
          className="gap-2 -ml-3"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 bg-surface text-primary">
            <Mail className="w-4 h-4" /> Email Slip
          </Button>
          <Button variant="outline" className="gap-2 bg-surface text-primary">
            <Download className="w-4 h-4" /> PDF
          </Button>
          <Button
            variant="accent"
            className="gap-2"
            onClick={() => window.print()}
          >
            <Printer className="w-4 h-4" /> Print
          </Button>
        </div>
      </div>

      {/* A4 Document Container */}
      <div className="bg-white text-black p-10 md:p-14 rounded-sm shadow-xl min-h-[900px] border border-gray-200 mx-auto w-full max-w-[800px] font-sans relative print:shadow-none print:border-none print:m-0 print:p-0">
        {/* Background Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <div className="w-96 h-96 bg-[#004643] rounded-full flex items-center justify-center font-bold text-[200px]">
            E
          </div>
        </div>

        {/* Header */}
        <div className="flex items-start justify-between border-b-2 border-gray-800 pb-6 mb-8 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#004643] text-white flex items-center justify-center font-bold text-3xl">
              E
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tighter">
                EMIRATES ERP
              </h1>
              <p className="text-xs text-gray-500 font-bold mt-1 uppercase tracking-widest">
                AL MAHA REAL ESTATE L.L.C.
              </p>
            </div>
          </div>
          <div className="text-right">
            <h2 className="text-xl font-bold uppercase tracking-widest text-[#004643]">
              Payslip
            </h2>
            <p className="text-sm font-semibold mt-1">October 2024</p>
          </div>
        </div>

        {/* Employee Details Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8 bg-gray-50 p-6 rounded border border-gray-200 text-sm relative z-10">
          <div className="flex border-b border-gray-200 pb-2">
            <span className="w-32 font-bold text-gray-500">Employee Name:</span>
            <span className="font-bold">Sarah Connor</span>
          </div>
          <div className="flex border-b border-gray-200 pb-2">
            <span className="w-32 font-bold text-gray-500">Employee Code:</span>
            <span className="font-medium">{id || "EMP-23-0145"}</span>
          </div>
          <div className="flex border-b border-gray-200 pb-2">
            <span className="w-32 font-bold text-gray-500">Designation:</span>
            <span className="font-medium">Sales Executive</span>
          </div>
          <div className="flex border-b border-gray-200 pb-2">
            <span className="w-32 font-bold text-gray-500">Department:</span>
            <span className="font-medium">Sales</span>
          </div>
          <div className="flex border-b border-gray-200 pb-2">
            <span className="w-32 font-bold text-gray-500">Joining Date:</span>
            <span className="font-medium">05 Mar 2023</span>
          </div>
          <div className="flex border-b border-gray-200 pb-2">
            <span className="w-32 font-bold text-gray-500">Bank Name:</span>
            <span className="font-medium">Emirates NBD</span>
          </div>
        </div>

        {/* Salary Breakdown */}
        <div className="grid grid-cols-2 gap-8 mb-8 relative z-10">
          {/* Earnings */}
          <div>
            <h3 className="font-bold bg-green-100 text-green-800 px-3 py-1 mb-2 uppercase text-xs tracking-widest">
              Earnings
            </h3>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-2 text-gray-600">Basic Salary</td>
                  <td className="py-2 text-right font-mono font-medium">
                    12,000.00
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-600">Sales Commission</td>
                  <td className="py-2 text-right font-mono font-medium">
                    8,000.00
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-600">Festival Bonus</td>
                  <td className="py-2 text-right font-mono font-medium">
                    2,000.00
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-600">Transport Allow.</td>
                  <td className="py-2 text-right font-mono font-medium">
                    0.00
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-between items-center mt-4 pt-4 border-t-2 border-gray-800 font-bold">
              <span>Gross Earnings</span>
              <span className="font-mono">22,000.00</span>
            </div>
          </div>

          {/* Deductions */}
          <div>
            <h3 className="font-bold bg-red-100 text-red-800 px-3 py-1 mb-2 uppercase text-xs tracking-widest">
              Deductions
            </h3>
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-2 text-gray-600">Absenteeism (1 Day)</td>
                  <td className="py-2 text-right font-mono font-medium">
                    400.00
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-600">Late Penalty</td>
                  <td className="py-2 text-right font-mono font-medium">
                    200.00
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-600">Loan Installment</td>
                  <td className="py-2 text-right font-mono font-medium">
                    0.00
                  </td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-600">Asset Damage</td>
                  <td className="py-2 text-right font-mono font-medium">
                    0.00
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-between items-center mt-4 pt-4 border-t-2 border-gray-800 font-bold">
              <span>Total Deductions</span>
              <span className="font-mono">600.00</span>
            </div>
          </div>
        </div>

        {/* Net Payable block */}
        <div className="bg-[#004643] text-white p-6 rounded flex items-center justify-between mb-16 relative z-10 print:border print:border-gray-800 print:text-black print:bg-gray-100">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#FFF3E6] print:text-gray-500">
              Net Payable
            </p>
            <p className="text-sm font-medium mt-1">
              Valid for electronic transfer
            </p>
          </div>
          <div className="text-right flex items-baseline gap-2">
            <span className="text-xl font-bold text-[#FFF3E6] print:text-gray-600">
              AED
            </span>
            <span className="text-4xl font-black font-mono">21,400.00</span>
          </div>
        </div>

        {/* Signatures */}
        <div className="grid grid-cols-2 gap-20 relative z-10 mt-auto">
          <div className="border-t border-gray-300 pt-4 text-center">
            <p className="font-bold text-sm text-gray-600">
              Employer Signature
            </p>
            <p className="text-xs text-gray-400 mt-1">Authorized Signatory</p>
          </div>
          <div className="border-t border-gray-300 pt-4 text-center">
            <p className="font-bold text-sm text-gray-600">
              Employee Signature
            </p>
            <p className="text-xs text-gray-400 mt-1">Acknowledgment</p>
          </div>
        </div>

        <div className="text-center text-[10px] text-gray-400 mt-12 pt-8 border-t border-gray-100 relative z-10">
          This is a system generated document and does not require a physical
          signature if distributed electronically.
        </div>
      </div>
    </div>
  );
}
