'use client'

import { motion } from 'framer-motion'
import { Lightbulb, TrendingUp, Plus, ChevronRight } from 'lucide-react'
import { GlassCard } from './ui/GlassCard'

interface UnlockOpportunity {
  input: string
  unlocks_count: number
  impact_score: number
  outputs: Array<{
    output: string
    confidence: number
    is_proxy: boolean
  }>
}

interface NextBestTestProps {
  data: UnlockOpportunity[]
}

export function NextBestTest({ data }: NextBestTestProps) {
  if (!data || data.length === 0) return null

  const topRecommendations = data.slice(0, 5)

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-xl bg-rose-100 text-rose-700">
          <Lightbulb className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-serif text-xl text-warm-900">Next Best Test</h3>
          <p className="text-sm text-warm-500">Maximize insight with minimal additions</p>
        </div>
      </div>

      <div className="space-y-3">
        {topRecommendations.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group cursor-pointer"
          >
            <GlassCard className="p-4 hover:shadow-soft transition-all border-l-4 border-l-rose-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-semibold text-warm-900 capitalize">
                      {item.input.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                      <Plus className="w-3 h-3" />
                      {item.unlocks_count} outputs
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-warm-600 mb-3">
                    <TrendingUp className="w-4 h-4 text-rose-500" />
                    <span>Impact score: {item.impact_score.toFixed(1)}</span>
                  </div>

                  {/* Preview of unlocked outputs */}
                  <div className="flex flex-wrap gap-2">
                    {item.outputs.slice(0, 3).map((output, i) => (
                      <span
                        key={i}
                        className={`text-xs px-2 py-1 rounded-full border ${
                          output.is_proxy
                            ? 'bg-rose-50 text-rose-700 border-rose-200'
                            : 'bg-medical-50 text-medical-700 border-medical-200'
                        }`}
                      >
                        {output.output.replace(/_/g, ' ')}
                      </span>
                    ))}
                    {item.outputs.length > 3 && (
                      <span className="text-xs text-warm-500 px-2 py-1">
                        +{item.outputs.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <ChevronRight className="w-5 h-5 text-warm-300 group-hover:text-rose-500 transition-colors" />
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-2xl bg-warm-50 border border-warm-200">
        <p className="text-sm text-warm-600 text-center">
          Adding these tests could unlock up to{' '}
          <span className="font-bold text-medical-700">
            {topRecommendations.reduce((acc, item) => acc + item.unlocks_count, 0)}
          </span>{' '}
          additional insights
        </p>
      </div>
    </div>
  )
}
