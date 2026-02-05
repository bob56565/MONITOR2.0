'use client'

import { motion } from 'framer-motion'
import { VitalSign } from '@/lib/mockData'
import { cn } from '@/lib/utils'

interface VitalCardProps {
  vital: VitalSign
  className?: string
}

export function VitalCard({ vital, className }: VitalCardProps) {
  const Icon = vital.icon
  
  const statusColors = {
    normal: 'text-green-600 bg-green-50 border-green-200',
    warning: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    critical: 'text-red-600 bg-red-50 border-red-200'
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        "bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 transition-all",
        statusColors[vital.status],
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <Icon className={cn("w-8 h-8", statusColors[vital.status].split(' ')[0])} />
        <span className={cn(
          "text-xs font-medium px-2 py-1 rounded-full",
          statusColors[vital.status]
        )}>
          {vital.status.toUpperCase()}
        </span>
      </div>
      
      <h3 className="text-sm font-medium text-warm-700 mb-1">{vital.name}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-medical-900">
          {vital.value}
        </span>
        <span className="text-sm text-warm-600">{vital.unit}</span>
      </div>
      
      <p className="text-xs text-warm-500 mt-2">
        Normal: {vital.range}
      </p>
    </motion.div>
  )
}
