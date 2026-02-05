'use client'

import { GlassCard } from '@/components/ui/GlassCard'
import Link from 'next/link'
import { Activity, BarChart3, Sparkles, ArrowRight, CheckCircle2, Shield, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-white to-medical-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-medical-50/50 via-transparent to-rose-50/30" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-medical-100 text-medical-900 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Clinical-Grade Intelligence Platform</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-medical-900 mb-6 leading-tight">
              Your Health,
              <br />
              <span className="text-medical-600">Decoded</span>
            </h1>
            <p className="text-xl md:text-2xl text-warm-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Advanced biomarker analysis powered by cascade inference. 
              Get lab-anchored insights backed by peer-reviewed research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/analyze">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-medical-600 text-white rounded-full font-semibold text-lg hover:bg-medical-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  Start Analysis
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/dashboard">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-medical-900 border-2 border-medical-200 rounded-full font-semibold text-lg hover:border-medical-300 hover:bg-medical-50 transition-all shadow-md hover:shadow-lg w-full sm:w-auto"
                >
                  View Dashboard
                </motion.button>
              </Link>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-warm-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>PubMed Citations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Real-time Analysis</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-medical-900 mb-4">
              Clinical Intelligence at Your Fingertips
            </h2>
            <p className="text-lg text-warm-600 max-w-2xl mx-auto">
              Comprehensive health analysis powered by advanced cascade inference and evidence-based medicine
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link href="/analyze" className="group block">
                <div className="bg-gradient-to-br from-white to-medical-50/30 rounded-3xl p-8 border-2 border-medical-100 hover:border-medical-300 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-medical-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-medical-600 transition-colors">
                    <Activity className="w-7 h-7 text-medical-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-semibold text-medical-900 mb-3">
                    Biomarker Analysis
                  </h3>
                  <p className="text-warm-600 mb-4 leading-relaxed">
                    Upload your lab results and receive instant cascade inference with confidence scores and PubMed-backed citations
                  </p>
                  <div className="flex items-center text-medical-600 font-medium group-hover:gap-3 gap-2 transition-all">
                    <span>Analyze Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link href="/dashboard" className="group block">
                <div className="bg-gradient-to-br from-white to-rose-50/30 rounded-3xl p-8 border-2 border-rose-100 hover:border-rose-300 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-rose-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-500 transition-colors">
                    <BarChart3 className="w-7 h-7 text-rose-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-semibold text-medical-900 mb-3">
                    Clinical Dashboard
                  </h3>
                  <p className="text-warm-600 mb-4 leading-relaxed">
                    Real-time vital signs monitoring with trend analysis, alerts, and comprehensive health tracking
                  </p>
                  <div className="flex items-center text-rose-500 font-medium group-hover:gap-3 gap-2 transition-all">
                    <span>View Dashboard</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-white to-emerald-50/30 rounded-3xl p-8 border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-2xl transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                  <Sparkles className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-semibold text-medical-900 mb-3">
                  AI-Powered Insights
                </h3>
                <p className="text-warm-600 mb-4 leading-relaxed">
                  Predictive analytics and early warning systems for critical health indicators and risk stratification
                </p>
                <div className="flex items-center text-emerald-600 font-medium gap-2">
                  <span>Coming Soon</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-br from-medical-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-medical-900 mb-4">
                Why MONITOR 2.0?
              </h2>
              <p className="text-lg text-warm-600 max-w-2xl mx-auto">
                Enterprise-grade clinical intelligence designed for the modern healthcare landscape
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-medical-100"
              >
                <div className="w-12 h-12 bg-medical-100 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-medical-600" />
                </div>
                <h3 className="text-xl font-semibold text-medical-900 mb-3">
                  Evidence-Based Analysis
                </h3>
                <p className="text-warm-600 leading-relaxed">
                  Every insight is backed by peer-reviewed research with direct PubMed citations. Our cascade inference engine cross-references multiple biomarkers for comprehensive physiological state assessment.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-medical-100"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-medical-900 mb-3">
                  Real-Time Intelligence
                </h3>
                <p className="text-warm-600 leading-relaxed">
                  Instant analysis with confidence scoring, sensitivity grading, and cascade depth tracking. Get actionable recommendations in milliseconds, not days.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-medical-100"
              >
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-semibold text-medical-900 mb-3">
                  Comprehensive Monitoring
                </h3>
                <p className="text-warm-600 leading-relaxed">
                  Track vital signs, biomarkers, and health trends over time. Our dashboard provides a complete view of physiological states with color-coded risk stratification.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-medical-100"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-medical-900 mb-3">
                  Executive Summaries
                </h3>
                <p className="text-warm-600 leading-relaxed">
                  High-level health overviews with priority concerns, recommendations, and compute metadata. Perfect for clinical decision-making and patient communication.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-medical-900 to-medical-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Ready to Transform Your Health Data?
              </h2>
              <p className="text-xl text-medical-100 mb-8 leading-relaxed">
                Join the future of clinical intelligence. Start analyzing your biomarkers today.
              </p>
              <Link href="/analyze">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white text-medical-900 rounded-full font-semibold text-lg hover:bg-medical-50 transition-all shadow-xl flex items-center gap-3 mx-auto"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
