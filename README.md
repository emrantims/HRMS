# HRMS - Human Resource Management System
## Aliyas Group ERP

<div align="center">
<img width="1200" height="475" alt="HRMS Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

## 📋 تعارف

یہ ایک جدید **Human Resource Management System (HRMS)** ہے جو **Aliyas Group** کے لیے بنایا گیا ہے۔ یہ نظام کمپنی کے تمام HR کی سرگرمیوں کو آسانی سے منظم کرنے میں مدد دیتا ہے۔

## ✨ خصوصیات

### 📊 Dashboard
- **Employee Statistics**: کل ملازمین، موجود، چھٹی پر، غیر حاضر
- **Monthly Attendance Chart**: ماہانہ حاضری کے رجحانات
- **Department Distribution**: ڈیپارٹمنٹ کی تقسیم
- **Quick Actions**: تیز رفتار کارکردگی

### 👥 Employee Management
- ملازم کی معلومات کا ریکارڈ
- تربیت اور ترقی کی تفصیلات
- تنخواہ کا نظام

### 📅 Attendance Tracking
- روزانہ حاضری کا ریکارڈ
- چھٹیوں کا نظام
- ماہانہ رپورٹس

### 💰 Payroll Management
- تنخواہ کا حساب کتاب
- Deductions اور Allowances
- رپورٹ جنریشن

## 🛠️ فنی اسٹیک

- **Frontend**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Backend**: Express.js

## 📦 Installation

### ضروری چیزیں
- Node.js (v18 یا اس سے بالا)
- npm یا yarn

### Setup کریں

```bash
# Repository کو clone کریں
git clone https://github.com/emrantims/HRMS.git
cd HRMS

# Dependencies install کریں
npm install

# Environment variables سیٹ کریں
cp .env.example .env.local
# اپنی Gemini API key شامل کریں
```

### Development میں چلائیں

```bash
npm run dev
```

آپ کا HRMS اب **http://localhost:3000** پر دستیاب ہے۔

### Production کے لیے Build کریں

```bash
npm run build
```

## 📊 Dashboard Features

### Statistics Cards
- **Total Employees**: تمام ملازمین کی تعداد
- **Present Today**: آج موجود ملازمین
- **On Leave**: چھٹی پر ملازمین
- **Absent**: غیر حاضر ملازمین

### Charts & Analytics
- Monthly Attendance Trends
- Department-wise Distribution
- Performance Metrics

### Quick Actions
- ➕ Add Employee
- 📋 Check Attendance
- 💰 Manage Payroll
- 📊 View Reports
- ⚙️ Settings
- 🚪 Logout

## 🔧 API Integration

یہ نظام Google Gemini AI API کو استعمال کرتا ہے خودکار رپورٹس اور تجزیات کے لیے:

```bash
GEMINI_API_KEY=your_api_key_here
APP_URL=http://localhost:3000
```

## 📝 Project Structure

```
HRMS/
├── src/
│   ├── main.tsx           # React entry point
│   ├── App.tsx            # Main app component
│   ├── App.css            # App styles
│   ├── index.css          # Global styles
│   └── pages/
│       └── Dashboard.tsx   # Main dashboard
├── index.html             # HTML template
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── vite.config.ts         # Vite config
├── tailwind.config.js     # Tailwind config
└── README.md              # یہ فائل
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

## 🤝 Contributing

اگر آپ اس پروجیکٹ میں حصہ دینا چاہتے ہیں:

1. Fork کریں
2. اپنی branch بنائیں (`git checkout -b feature/amazing-feature`)
3. اپنی changes کو commit کریں (`git commit -m 'Add amazing feature'`)
4. اپنی branch کو push کریں (`git push origin feature/amazing-feature`)
5. Pull Request بھیجیں

## 📄 License

یہ پروجیکٹ MIT License کے تحت ہے۔

## 📞 رابطہ

**Aliyas Group**
- Email: info@aliasgroup.com
- Website: www.aliasgroup.com

## 🙏 شکریہ

اس HRMS نظام کو بہتر بنانے میں تمام contributors کا شکریہ۔

---

**Made with ❤️ by Emran Younas**
