'use client'

import { motion } from 'framer-motion'
import { PhysiologicalState } from '@/types/monitor'
import { cn } from '@/lib/utils'
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react'

interface StateCardProps {
  state: PhysiologicalState
  className?: string
}

export function StateCard({ state, className }: StateCardProps) {
  const getStateColor = () => {
    if (!state.evaluated) return 'bg-gray-50 border-gray-200 text-gray-700'
    
    const lowerState = state.state.toLowerCase()
    if (lowerState.includes('optimal') || lowerState.includes('normal')) {
      return 'bg-green-50 border-green-200 text-green-900'
    }
    if (lowerState.includes('warning') || lowerState.includes('elevated')) {
      return 'bg-yellow-50 border-yellow-200 text-yellow-900'
    }
    if (lowerState.includes('critical') || lowerState.includes('severe')) {
      return 'bg-red-50 border-red-200 text-red-900'
    }
    return 'bg-blue-50 border-blue-200 text-blue-900'
  }

  const getStateIcon = () => {
    if (!state.evaluated) return <AlertCircle className="w-5 h-5" />
    
    const lowerState = state.state.toLowerCase()
    if (lowerState.includes('optimal') || lowerState.includes('normal')) {
      return <CheckCircle className="w-5 h-5 text-green-600" />
    }
    if (lowerState.includes('critical') || lowerState.includes('severe')) {
      return <XCircle className="w-5 h-5 text-red-600" />
    }
    return <AlertCircle className="w-5 h-5 text-yellow-600" />
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        "rounded-2xl p-6 border-2 transition-all",
        getStateColor(),
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          {getStateIcon()}
          <h3 className="text-lg font-semibold">{state.name}</h3>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">{state.score.toFixed(1)}</div>
          <div className="text-xs opacity-75">Score</div>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="font-medium">State:</span>
          <span className="font-semibold">{state.state}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-medium">Confidence:</span>
          <span>{(state.confidence * 100).toFixed(1)}%</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="font-medium">Signal Coverage:</span>
          <span>{state.signal_coverage}</span>
        </div>
      </div>

      {state.factors && state.factors.length > 0 && (
        <div className="mb-4">
          <p className="text-xs font-medium mb-2 opacity-75">Key Factors:</p>
          <div className="flex flex-wrap gap-1">
            {state.factors.map((factor, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 rounded-full bg-white/60 backdrop-blur-sm"
              >
                {factor}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="pt-4 border-t border-current/20">
        <p className="text-xs font-medium mb-1 opacity-75">Recommended Action:</p>
        <p className="text-sm font-medium">{state.recommended_action}</p>
      </div>

      {state.lab_anchors && (
        <div className="mt-3 pt-3 border-t border-current/20">
          <p className="text-xs opacity-75">Lab Anchors: {state.lab_anchors}</p>
        </div>
      )}
    </motion.div>
  )
}
