import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from './components/layout/DashboardLayout';
import HRDashboard from './pages/Dashboard';
import EmployeeList from './pages/employees/EmployeeList';
import EmployeeCreate from './pages/employees/EmployeeCreate';
import EmployeeProfile from './pages/employees/EmployeeProfile';
import EmployeeImport from './pages/employees/EmployeeImport';
import AttendanceDashboard from './pages/attendance/AttendanceDashboard';
import AttendanceUpload from './pages/attendance/AttendanceUpload';
import AttendanceReport from './pages/attendance/AttendanceReport';
import AttendanceCorrection from './pages/attendance/AttendanceCorrection';
import AttendanceSettings from './pages/attendance/AttendanceSettings';
import EmployeeAttendance from './pages/attendance/EmployeeAttendance';
import PayrollDashboard from './pages/payroll/PayrollDashboard';
import PayrollRun from './pages/payroll/PayrollRun';
import PayrollCalculationDetail from './pages/payroll/PayrollCalculationDetail';
import PayslipView from './pages/payroll/PayslipView';
import CommissionCalculation from './pages/payroll/CommissionCalculation';
import BonusManagement from './pages/payroll/BonusManagement';
import PayrollApprovals from './pages/payroll/PayrollApprovals';
import PayrollHistory from './pages/payroll/PayrollHistory';
import DeductionManagement from './pages/payroll/DeductionManagement';
import LoanDashboard from './pages/loans/LoanDashboard';
import LoanRequest from './pages/loans/LoanRequest';
import LoanApprovals from './pages/loans/LoanApprovals';
import EmployeeLoanProfile from './pages/loans/EmployeeLoanProfile';
import LoanHistory from './pages/loans/LoanHistory';
import EarlySettlement from './pages/loans/EarlySettlement';
import LoanDeductionPreview from './pages/loans/LoanDeductionPreview';
import AssetDashboard from './pages/assets/AssetDashboard';
import AssetInventory from './pages/assets/AssetInventory';
import AssetCreate from './pages/assets/AssetCreate';
import AssetAssignment from './pages/assets/AssetAssignment';
import EmployeeAssetProfile from './pages/assets/EmployeeAssetProfile';
import AssetReturn from './pages/assets/AssetReturn';
import AssetDamageLoss from './pages/assets/AssetDamageLoss';
import AssetMaintenance from './pages/assets/AssetMaintenance';
import AssetHistory from './pages/assets/AssetHistory';

import VisaDashboard from './pages/visa/VisaDashboard';
import VisaList from './pages/visa/VisaList';
import VisaNewProcess from './pages/visa/VisaNewProcess';
import EmployeeVisaProfile from './pages/visa/EmployeeVisaProfile';
import VisaRenewal from './pages/visa/VisaRenewal';
import VisaCancellation from './pages/visa/VisaCancellation';
import VisaAbscond from './pages/visa/VisaAbscond';
import VisaAlerts from './pages/visa/VisaAlerts';
import VisaDocuments from './pages/visa/VisaDocuments';
import VisaTimeline from './pages/visa/VisaTimeline';

import ExitDashboard from './pages/exit/ExitDashboard';
import ExitInitiation from './pages/exit/ExitInitiation';
import ExitTimeline from './pages/exit/ExitTimeline';
import FinalSettlement from './pages/exit/FinalSettlement';
import AssetClearance from './pages/exit/AssetClearance';
import LoanClearance from './pages/exit/LoanClearance';
import VisaClearance from './pages/exit/VisaClearance';
import ExitApproval from './pages/exit/ExitApproval';
import SettlementSummary from './pages/exit/SettlementSummary';
import ExitHistory from './pages/exit/ExitHistory';
import ClearanceCertificate from './pages/exit/ClearanceCertificate';

import AutomationDashboard from './pages/automation/AutomationDashboard';
import RulesList from './pages/automation/RulesList';
import CreateRule from './pages/automation/CreateRule';
import WorkflowBuilder from './pages/automation/WorkflowBuilder';
import ExecutionLogs from './pages/automation/ExecutionLogs';
import FailedAutomations from './pages/automation/FailedAutomations';
import NotificationRules from './pages/automation/NotificationRules';
import ApprovalWorkflows from './pages/automation/ApprovalWorkflows';
import RuleSimulation from './pages/automation/RuleSimulation';
import Settings from './pages/automation/Settings';
import CrossModuleVisualization from './pages/automation/CrossModuleVisualization';

import ExecutiveOverview from './pages/analytics/ExecutiveOverview';
import MultiCompanyAnalytics from './pages/analytics/MultiCompanyAnalytics';
import WorkforceAnalytics from './pages/analytics/WorkforceAnalytics';
import PayrollAnalytics from './pages/analytics/PayrollAnalytics';
import AttendanceAnalytics from './pages/analytics/AttendanceAnalytics';
import LoanAnalytics from './pages/analytics/LoanAnalytics';
import AssetAnalytics from './pages/analytics/AssetAnalytics';
import VisaAnalytics from './pages/analytics/VisaAnalytics';
import ExitAnalytics from './pages/analytics/ExitAnalytics';
import ReportsCenter from './pages/analytics/ReportsCenter';
import DrillDownAnalytics from './pages/analytics/DrillDownAnalytics';
import RiskMonitoring from './pages/analytics/RiskMonitoring';
import DashboardBuilder from './pages/analytics/DashboardBuilder';

import CompanyList from './pages/company/CompanyList';
import CompanyDetail from './pages/company/CompanyDetail';
import BranchLocations from './pages/company/BranchLocations';
import DepartmentStructure from './pages/company/DepartmentStructure';
import OrganizationChart from './pages/company/OrganizationChart';
import EntityDocuments from './pages/company/EntityDocuments';
import UserList from './pages/users/UserList';
import AuditLogs from './pages/audit/AuditLogs';
import GeneralSettings from './pages/settings/GeneralSettings';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<HRDashboard />} />
          <Route path="employees" element={<EmployeeList />} />
          <Route path="employees/new" element={<EmployeeCreate />} />
          <Route path="employees/import" element={<EmployeeImport />} />
          <Route path="employees/:id" element={<EmployeeProfile />} />
          <Route path="employees/:id/edit" element={<EmployeeCreate />} />
          <Route path="attendance" element={<AttendanceDashboard />} />
          <Route path="attendance/upload" element={<AttendanceUpload />} />
          <Route path="attendance/report" element={<AttendanceReport />} />
          <Route path="attendance/corrections" element={<AttendanceCorrection />} />
          <Route path="attendance/settings" element={<AttendanceSettings />} />
          <Route path="attendance/employee/:id" element={<EmployeeAttendance />} />
          <Route path="payroll" element={<PayrollDashboard />} />
          <Route path="payroll/run" element={<PayrollRun />} />
          <Route path="payroll/details/:id" element={<PayrollCalculationDetail />} />
          <Route path="payroll/payslip/:id" element={<PayslipView />} />
          <Route path="payroll/commission" element={<CommissionCalculation />} />
          <Route path="payroll/bonus" element={<BonusManagement />} />
          <Route path="payroll/approvals" element={<PayrollApprovals />} />
          <Route path="payroll/history" element={<PayrollHistory />} />
          <Route path="payroll/deductions" element={<DeductionManagement />} />
          <Route path="loans" element={<LoanDashboard />} />
          <Route path="loans/request" element={<LoanRequest />} />
          <Route path="loans/approvals" element={<LoanApprovals />} />
          <Route path="loans/employee/:id" element={<EmployeeLoanProfile />} />
          <Route path="loans/history" element={<LoanHistory />} />
          <Route path="loans/settlement/:id" element={<EarlySettlement />} />
          <Route path="loans/preview" element={<LoanDeductionPreview />} />
          <Route path="assets" element={<AssetDashboard />} />
          <Route path="assets/inventory" element={<AssetInventory />} />
          <Route path="assets/create" element={<AssetCreate />} />
          <Route path="assets/assign" element={<AssetAssignment />} />
          <Route path="assets/employee/:id" element={<EmployeeAssetProfile />} />
          <Route path="assets/return" element={<AssetReturn />} />
          <Route path="assets/damage" element={<AssetDamageLoss />} />
          <Route path="assets/maintenance" element={<AssetMaintenance />} />
          <Route path="assets/history/:id" element={<AssetHistory />} />
          <Route path="visa" element={<VisaDashboard />} />
          <Route path="visa/list" element={<VisaList />} />
          <Route path="visa/new" element={<VisaNewProcess />} />
          <Route path="visa/profile/:id" element={<EmployeeVisaProfile />} />
          <Route path="visa/renew/:id" element={<VisaRenewal />} />
          <Route path="visa/cancel/:id" element={<VisaCancellation />} />
          <Route path="visa/abscond/:id" element={<VisaAbscond />} />
          <Route path="visa/alerts" element={<VisaAlerts />} />
          <Route path="visa/documents" element={<VisaDocuments />} />
          <Route path="visa/timeline/:id" element={<VisaTimeline />} />
          <Route path="exit" element={<ExitDashboard />} />
          <Route path="exit/new" element={<ExitInitiation />} />
          <Route path="exit/timeline/:id" element={<ExitTimeline />} />
          <Route path="exit/settlement/:id" element={<FinalSettlement />} />
          <Route path="exit/assets/:id" element={<AssetClearance />} />
          <Route path="exit/loans/:id" element={<LoanClearance />} />
          <Route path="exit/visa/:id" element={<VisaClearance />} />
          <Route path="exit/approval/:id" element={<ExitApproval />} />
          <Route path="exit/summary/:id" element={<SettlementSummary />} />
          <Route path="exit/history" element={<ExitHistory />} />
          <Route path="exit/certificate/:id" element={<ClearanceCertificate />} />
          <Route path="automation" element={<AutomationDashboard />} />
          <Route path="automation/rules" element={<RulesList />} />
          <Route path="automation/rules/new" element={<CreateRule />} />
          <Route path="automation/workflow/:id" element={<WorkflowBuilder />} />
          <Route path="automation/logs" element={<ExecutionLogs />} />
          <Route path="automation/failed" element={<FailedAutomations />} />
          <Route path="automation/notifications" element={<NotificationRules />} />
          <Route path="automation/approvals" element={<ApprovalWorkflows />} />
          <Route path="automation/simulate" element={<RuleSimulation />} />
          <Route path="automation/settings" element={<Settings />} />
          <Route path="automation/visualization" element={<CrossModuleVisualization />} />
          <Route path="analytics" element={<ExecutiveOverview />} />
          <Route path="analytics/multi-company" element={<MultiCompanyAnalytics />} />
          <Route path="analytics/workforce" element={<WorkforceAnalytics />} />
          <Route path="analytics/payroll" element={<PayrollAnalytics />} />
          <Route path="analytics/attendance" element={<AttendanceAnalytics />} />
          <Route path="analytics/loans" element={<LoanAnalytics />} />
          <Route path="analytics/assets" element={<AssetAnalytics />} />
          <Route path="analytics/visa" element={<VisaAnalytics />} />
          <Route path="analytics/exit" element={<ExitAnalytics />} />
          <Route path="analytics/reports" element={<ReportsCenter />} />
          <Route path="analytics/drill-down" element={<DrillDownAnalytics />} />
          <Route path="analytics/risks" element={<RiskMonitoring />} />
          <Route path="analytics/builder" element={<DashboardBuilder />} />
          <Route path="company/list" element={<CompanyList />} />
          <Route path="company/:id" element={<CompanyDetail />} />
          <Route path="company/branches" element={<BranchLocations />} />
          <Route path="company/departments" element={<DepartmentStructure />} />
          <Route path="company/org-chart" element={<OrganizationChart />} />
          <Route path="company/documents" element={<EntityDocuments />} />
          <Route path="users/list" element={<UserList />} />
          <Route path="audit/logs" element={<AuditLogs />} />
          <Route path="settings/general" element={<GeneralSettings />} />
          <Route path="*" element={<div className="p-8 text-center text-primary/60 font-medium tracking-wide">Module under construction in this prototype.</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
