import { GlassCard } from '@/components/ui/GlassCard'
import Link from 'next/link'
import { Activity, BarChart3, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-medical-50 to-medical-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-serif text-medical-900 mb-4">
            MONITOR 2.0
          </h1>
          <p className="text-xl text-warm-600">
            Clinical Intelligence Platform
          </p>
          <p className="text-lg text-warm-500 mt-2">
            Cascade inference engine for physiological state analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Link href="/analyze">
            <GlassCard 
              className="hover:scale-105 transition-transform duration-300 cursor-pointer h-full"
            >
              <div className="flex items-center gap-3 mb-3">
                <Activity className="w-8 h-8 text-medical-600" />
                <h3 className="text-xl font-semibold text-medical-900">Biomarker Analysis</h3>
              </div>
              <p className="text-warm-600">Upload biomarkers and get instant cascade inference results with lab-anchored citations</p>
            </GlassCard>
          </Link>
          
          <Link href="/dashboard">
            <GlassCard 
              className="hover:scale-105 transition-transform duration-300 cursor-pointer h-full"
            >
              <div className="flex items-center gap-3 mb-3">
                <BarChart3 className="w-8 h-8 text-medical-600" />
                <h3 className="text-xl font-semibold text-medical-900">Clinical Dashboard</h3>
              </div>
              <p className="text-warm-600">Real-time monitoring dashboard with vital signs visualization and trend analysis</p>
            </GlassCard>
          </Link>

          <GlassCard 
            className="hover:scale-105 transition-transform duration-300 h-full"
          >
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="w-8 h-8 text-medical-600" />
              <h3 className="text-xl font-semibold text-medical-900">AI-Powered Insights</h3>
            </div>
            <p className="text-warm-600">Predictive analytics for early warning and critical patient deterioration detection</p>
          </GlassCard>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <Link href="/analyze">
            <button className="px-8 py-4 bg-medical-600 text-white rounded-xl font-semibold text-lg hover:bg-medical-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
              Try Biomarker Analysis →
            </button>
          </Link>
          <Link href="/dashboard">
            <button className="px-8 py-4 bg-white text-medical-900 border-2 border-medical-600 rounded-xl font-semibold text-lg hover:bg-medical-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
              View Dashboard
            </button>
          </Link>
        </div>

        <div className="mt-16">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-white/60 shadow-glass p-8">
            <h2 className="text-2xl font-serif font-bold text-medical-900 mb-6 text-center">
              ✨ Platform Features
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-medical-900 mb-2">🔬 Cascade Inference Engine</h3>
                <p className="text-warm-600 text-sm">Multi-level physiological state analysis with evidence-based grading</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-medical-900 mb-2">📚 Lab Anchoring</h3>
                <p className="text-warm-600 text-sm">PubMed citation-backed validation for clinical confidence</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-medical-900 mb-2">📊 Executive Summary</h3>
                <p className="text-warm-600 text-sm">High-level health metrics and actionable recommendations</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-medical-900 mb-2">🎨 Premium UI/UX</h3>
                <p className="text-warm-600 text-sm">Glassmorphic design with smooth animations and responsive layouts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
