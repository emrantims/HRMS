# HRMS - Human Resource Management System
## Aliyas Group ERP

<div align="center">
<img width="1200" height="475" alt="HRMS Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

## 📋 تعارف

یہ ایک جدید **Human Resource Management System (HRMS)** ہے جو **Aliyas Group** کے لیے بنایا گیا ہے۔ یہ نظام کمپنی کے HR dashboard، employees، attendance، payroll اور reports کو ایک جگہ manage کرنے میں مدد دیتا ہے۔

## ✨ خصوصیات

### 📊 Dashboard
- Employee statistics: total employees, present today, on leave, absent
- Monthly attendance chart
- Department distribution chart
- Weekly performance trend
- Quick action cards linked to HR modules

### 👥 Employee Management
- Employee profile cards
- Department and status indicators
- Contact details: email, phone, location
- Search/filter-ready layout

### 📅 Attendance Tracking
- Daily attendance summary
- Present, late, leave, absent counters
- Attendance log table
- CSV export-ready action

### 💰 Payroll Management
- Payroll KPI cards
- Salary run history
- Gross pay, deductions, and net pay table
- Payslip/download-ready layout

### 📄 Reports & Analytics
- Attendance report card
- Payroll summary card
- Department headcount report
- Performance overview report

## 🛠️ فنی اسٹیک

- **Frontend**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Routing**: React Router
- **Build Tool**: Vite

> Note: Express dependency is currently available in `package.json`, but the current implemented app is a frontend HRMS dashboard. Backend/API integration can be added in the next phase.

## 📦 Installation

### ضروری چیزیں
- Node.js v18 یا اس سے اوپر
- npm یا yarn

### Setup کریں

```bash
git clone https://github.com/emrantims/HRMS.git
cd HRMS
npm install
```

### Development میں چلائیں

```bash
npm run dev
```

App local development میں **http://localhost:3000** پر available ہوگی۔

### Code check کریں

```bash
npm run lint
```

### Production build

```bash
npm run build
npm run preview
```

## 📝 Project Structure

```text
HRMS/
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── pages/
│       ├── Dashboard.tsx
│       ├── Employees.tsx
│       ├── Attendance.tsx
│       ├── Payroll.tsx
│       └── Reports.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Deployment

### Vercel پر Deploy کریں

```bash
npm i -g vercel
vercel
```

### Docker میں Deploy کریں

```bash
docker build -t hrms .
docker run -p 3000:3000 hrms
```

## 🔮 Next Phase Ideas

- Express/API backend endpoints
- Database integration for live employee records
- Add/edit employee forms
- Attendance import/export
- Payroll calculation engine
- Authentication and role-based access control

## 📄 License

یہ پروجیکٹ MIT License کے تحت ہے۔

## 📞 رابطہ

**Aliyas Group**
- Email: info@aliasgroup.com
- Website: www.aliasgroup.com

---

**Made with ❤️ by Emran Younas**
