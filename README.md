# MONITOR 2.0

Clinical Intelligence Platform - Cascade inference engine for physiological state analysis

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bob56565/MONITOR2.0)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/bob56565/MONITOR2.0)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14.1-black.svg)](https://nextjs.org/)

## 🚀 Quick Start

### Try It Now (One-Click Demo)
**[→ Launch Live Demo](https://vercel.com/new/clone?repository-url=https://github.com/bob56565/MONITOR2.0)**

### View Repository
**[→ GitHub Repository](https://github.com/bob56565/MONITOR2.0)**  
**[→ Latest Changes](https://github.com/bob56565/MONITOR2.0/commits/copilot/push-remaining-files-to-repo)**

## 📋 Status
✅ **Production Ready** - v3.8.0 Enterprise Platform Complete

## ✨ Features

- 🔬 **Biomarker Analysis** - Dynamic input with cascade inference engine
- 📊 **Results Dashboard** - Tabbed visualization (Overview, Cascade, Citations)
- 🏥 **Physiological States** - Color-coded health status cards
- 📚 **Lab Anchoring** - PubMed citation-backed evidence grading
- 📈 **Executive Summary** - High-level health metrics and recommendations
- 🎨 **Premium UI** - Glassmorphic design with Framer Motion animations

## 🛠️ Tech Stack

- **Framework:** Next.js 14.1 (React 18.2)
- **Language:** TypeScript 5.0
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 11.0
- **Charts:** Recharts 2.10
- **UI Components:** Radix UI (Progress, Tabs)
- **Icons:** Lucide React

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions and one-click deployment links.

### Quick Deploy
```bash
# Clone and install
git clone https://github.com/bob56565/MONITOR2.0.git
cd MONITOR2.0
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the platform in action.

## 📦 Project Structure

```
MONITOR2.0/
├── app/
│   ├── analyze/page.tsx      # Biomarker analysis interface
│   ├── dashboard/page.tsx    # Clinical monitoring dashboard
│   ├── page.tsx              # Landing page
│   └── api/monitor/route.ts  # API endpoint
├── components/
│   ├── BiomarkerInput.tsx    # Dynamic biomarker input
│   ├── ResultsDashboard.tsx  # Results visualization
│   ├── StateCard.tsx         # Health state cards
│   ├── LabAnchoring.tsx      # Citation display
│   ├── ExecutiveSummary.tsx  # Summary dashboard
│   └── ui/                   # Reusable UI components
├── types/
│   └── monitor.ts            # Worker API type definitions
└── lib/
    ├── utils.ts              # Utility functions
    └── mockData.ts           # Sample data for development
```

## 🔗 Key Routes

- `/` - Landing page with product overview
- `/analyze` - Main biomarker analysis interface
- `/dashboard` - Clinical monitoring dashboard
- `/api/monitor` - Backend API endpoint

## 📝 License

Private/Enterprise - All rights reserved
