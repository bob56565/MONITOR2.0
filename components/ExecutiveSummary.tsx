'use client'

import { motion } from 'framer-motion'
import { MonitorResponse } from '@/types/monitor'
import { cn } from '@/lib/utils'
import { AlertTriangle, CheckCircle2, TrendingUp, Clock } from 'lucide-react'

interface ExecutiveSummaryProps {
  response: MonitorResponse
  className?: string
}

export function ExecutiveSummary({ response, className }: ExecutiveSummaryProps) {
  const getHealthStatusColor = (status: string) => {
    const lowerStatus = status.toLowerCase()
    if (lowerStatus.includes('optimal') || lowerStatus.includes('good')) {
      return 'bg-green-50 border-green-200 text-green-900'
    }
    if (lowerStatus.includes('moderate') || lowerStatus.includes('fair')) {
      return 'bg-yellow-50 border-yellow-200 text-yellow-900'
    }
    if (lowerStatus.includes('poor') || lowerStatus.includes('critical')) {
      return 'bg-red-50 border-red-200 text-red-900'
    }
    return 'bg-blue-50 border-blue-200 text-blue-900'
  }

  return (
    <div className={cn("space-y-4", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/60 shadow-2xl"
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-3xl font-serif font-bold text-medical-900 mb-2">
              Executive Summary
            </h2>
            <p className="text-warm-600">
              MONITOR v{response.version} Analysis
            </p>
          </div>
          <div className={cn(
            "px-4 py-2 rounded-xl border-2 font-semibold text-lg",
            getHealthStatusColor(response.executive_summary.overall_health)
          )}>
            {response.executive_summary.overall_health}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-medical-50 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-medical-600" />
              <span className="text-sm font-medium text-warm-700">Compute Time</span>
            </div>
            <p className="text-2xl font-bold text-medical-900">
              {response.computation_metadata.compute_time_ms}ms
            </p>
          </div>
          
          <div className="p-4 bg-medical-50 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-medical-600" />
              <span className="text-sm font-medium text-warm-700">Cascade Iterations</span>
            </div>
            <p className="text-2xl font-bold text-medical-900">
              {response.cascade_iterations}
            </p>
          </div>
          
          <div className="p-4 bg-medical-50 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-medical-600" />
              <span className="text-sm font-medium text-warm-700">Nodes Evaluated</span>
            </div>
            <p className="text-2xl font-bold text-medical-900">
              {response.computation_metadata.nodes_evaluated}
            </p>
          </div>
        </div>

        {response.executive_summary.priority_concerns.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <h3 className="text-lg font-semibold text-medical-900">
                Priority Concerns
              </h3>
            </div>
            <div className="space-y-2">
              {response.executive_summary.priority_concerns.map((concern, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 bg-red-50 border border-red-200 rounded-lg"
                >
                  <p className="text-sm font-medium text-red-900">{concern}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {response.executive_summary.recommendations.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-semibold text-medical-900">
                Recommendations
              </h3>
            </div>
            <div className="space-y-2">
              {response.executive_summary.recommendations.map((recommendation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-3 bg-green-50 border border-green-200 rounded-lg"
                >
                  <p className="text-sm font-medium text-green-900">{recommendation}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-medical-200">
          <div className="flex items-center justify-between text-xs text-warm-600">
            <span>Analysis timestamp: {new Date(response.timestamp).toLocaleString()}</span>
            {response.patient_id && (
              <span>Patient ID: {response.patient_id}</span>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
