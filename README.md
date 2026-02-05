# MONITOR 2.0

Clinical Intelligence Platform - Cascade inference engine for physiological state analysis

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14.1-black.svg)](https://nextjs.org/)

## 🌐 Live Site

**GitHub Pages:** https://bob56565.github.io/MONITOR2.0/

> **First time setup?** See [SETUP-GITHUB-PAGES.md](./SETUP-GITHUB-PAGES.md) for instructions.

## 🚀 Quick Start

### View the Live Site
Once GitHub Pages is enabled (3-step process), your site will be at:
```
https://bob56565.github.io/MONITOR2.0/
```

**Setup Instructions:** [SETUP-GITHUB-PAGES.md](./SETUP-GITHUB-PAGES.md)

## 📋 Status
✅ **Production Ready** - v3.8.0 Enterprise Platform

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
    └── mockData.ts           # Sample data
```

## 🔗 Key Routes

- `/` - Landing page with product overview
- `/analyze` - Main biomarker analysis interface
- `/dashboard` - Clinical monitoring dashboard

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:3000`

## 📝 Documentation

- **[SETUP-GITHUB-PAGES.md](./SETUP-GITHUB-PAGES.md)** - Simple 3-step setup guide
- **[REPOSITORY-STATUS.md](./REPOSITORY-STATUS.md)** - Complete file inventory

## 📝 License

Private/Enterprise - All rights reserved
