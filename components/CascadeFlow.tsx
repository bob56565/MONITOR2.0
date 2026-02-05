'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Database, Calculator } from 'lucide-react'
import { GlassCard } from './ui/GlassCard'

interface CascadeNode {
  name: string
  value: number | string | object
  method: string
  confidence: {
    score: number
    evidence_grade: string
  }
  iteration: number
  citation?: {
    pmid: string
    source: string
  }
  tier?: string
}

interface CascadeFlowProps {
  derived: CascadeNode[]
}

export function CascadeFlow({ derived }: CascadeFlowProps) {
  if (!derived || derived.length === 0) return null

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'tier1_direct':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200'
      case 'tier2_derived':
        return 'bg-medical-100 text-medical-800 border-medical-200'
      case 'tier3_proxy':
        return 'bg-rose-100 text-rose-800 border-rose-200'
      default:
        return 'bg-warm-100 text-warm-800 border-warm-200'
    }
  }

  const getIcon = (tier: string) => {
    switch (tier) {
      case 'tier1_direct':
        return <Database className="w-4 h-4" />
      case 'tier2_derived':
        return <Calculator className="w-4 h-4" />
      default:
        return <Sparkles className="w-4 h-4" />
    }
  }

  const sortedNodes = [...derived].sort((a, b) => (a.iteration || 0) - (b.iteration || 0))

  return (
    <GlassCard className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="font-serif text-2xl text-warm-900 mb-1">Inference Cascade</h3>
          <p className="text-warm-500 text-sm">Step-by-step calculation flow</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-medical-50 border border-medical-200">
          <span className="font-mono text-lg font-bold text-medical-700">{sortedNodes.length}</span>
          <span className="text-sm text-medical-600">calculations</span>
        </div>
      </div>

      <div className="relative space-y-4">
        {/* Connecting Line */}
        <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-warm-200" />

        {sortedNodes.map((node, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="relative flex items-start gap-4 ml-4"
          >
            {/* Node Number */}
            <div
              className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-2 ${getTierColor(
                node.tier || 'other'
              )} ${node.confidence?.score > 0.9 ? 'ring-2 ring-medical-200 ring-offset-2' : ''}`}
            >
              <span className="font-mono font-bold text-sm">{idx + 1}</span>
            </div>

            {/* Content Card */}
            <div className="flex-1 bg-white rounded-2xl p-5 border border-warm-200 shadow-sm hover:shadow-soft transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${getTierColor(node.tier || 'other')}`}>
                    {getIcon(node.tier || '')}
                  </div>
                  <div>
                    <h4 className="font-medium text-warm-900 capitalize">
                      {node.name.replace(/_/g, ' ')}
                    </h4>
                    <p className="text-xs text-warm-500">via {node.method}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-xl font-bold text-medical-900">
                    {typeof node.value === 'number'
                      ? node.value.toFixed(2)
                      : typeof node.value === 'object'
                      ? node.value.state || 'calc'
                      : node.value}
                  </div>
                  {node.confidence?.score && (
                    <div className="text-xs text-warm-500 mt-1">
                      {(node.confidence.score * 100).toFixed(0)}% conf
                    </div>
                  )}
                </div>
              </div>

              {/* Footer with citation */}
              <div className="flex items-center justify-between pt-3 border-t border-warm-100">
                <div className="flex items-center gap-2">
                  {node.citation ? (
                    <span className="text-xs bg-medical-50 text-medical-700 px-2 py-1 rounded-full font-mono border border-medical-200">
                      PMID: {node.citation.pmid}
                    </span>
                  ) : (
                    <span className="text-xs bg-warm-100 text-warm-600 px-2 py-1 rounded-full">
                      Derived
                    </span>
                  )}
                </div>
                {node.iteration > 1 && (
                  <div className="flex items-center gap-1 text-xs text-warm-400">
                    <ArrowRight className="w-3 h-3" />
                    Tier {node.iteration}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  )
}
