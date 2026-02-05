'use client'

import { motion } from 'framer-motion'
import { TrendingUp, AlertCircle, CheckCircle2, Sparkles } from 'lucide-react'
import { GlassCard } from './ui/GlassCard'

interface ExecutiveSummaryProps {
  data: {
    headline: string
    key_findings: Array<{
      finding: string
      severity: string
      confidence?: number
    }>
    action_items: Array<{
      action: string
      priority: string
    }>
    trend_watchlist?: Array<{
      marker: string
      current: number
    }>
  }
}

export function ExecutiveSummary({ data }: ExecutiveSummaryProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
      case 'elevated':
        return 'bg-rose-100 text-rose-800 border-rose-200'
      case 'moderate':
        return 'bg-amber-100 text-amber-800 border-amber-200'
      case 'review':
        return 'bg-orange-100 text-orange-800 border-orange-200'
      default:
        return 'bg-emerald-100 text-emerald-800 border-emerald-200'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-rose-500 text-white'
      case 'moderate':
        return 'bg-amber-500 text-white'
      default:
        return 'bg-medical-500 text-white'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <GlassCard className="overflow-hidden">
        <div className="p-8 bg-gradient-to-br from-medical-50/50 to-rose-50/30">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-medical-500 text-white shadow-glow">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-serif text-2xl text-warm-900">Executive Summary</h2>
                <p className="text-warm-500 text-sm mt-1">Cascade Inference Results</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-medical-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-medical-700">Analysis Complete</span>
            </div>
          </div>

          <h3 className="text-3xl font-serif text-warm-900 mb-4 leading-tight">
            {data?.headline || "Analysis Complete"}
          </h3>

          {/* Key Findings */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {data?.key_findings?.map((finding, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={`p-4 rounded-2xl border ${getSeverityColor(finding.severity)}`}
              >
                <div className="flex items-start gap-3">
                  {finding.severity === 'normal' ? (
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="font-medium leading-relaxed">{finding.finding}</p>
                    {finding.confidence && (
                      <span className="text-xs opacity-70 mt-1 inline-block">
                        {(finding.confidence * 100).toFixed(0)}% confidence
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Items */}
          {data?.action_items && data.action_items.length > 0 && (
            <div className="border-t border-warm-200 pt-6">
              <h4 className="font-medium text-warm-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-medical-600" />
                Recommended Actions
              </h4>
              <div className="space-y-3">
                {data.action_items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/60 border border-warm-200"
                  >
                    <p className="text-warm-800">{item.action}</p>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityColor(item.priority)}`}>
                      {item.priority}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </GlassCard>
    </motion.div>
  )
}
