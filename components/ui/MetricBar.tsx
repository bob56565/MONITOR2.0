'use client'

import { Progress } from '@radix-ui/react-progress'
import { cn } from '@/lib/utils'

interface MetricBarProps {
  label: string
  value: number
  max: number
  unit?: string
  color?: string
  className?: string
}

export function MetricBar({ 
  label, 
  value, 
  max, 
  unit = '', 
  color = 'bg-medical-500',
  className 
}: MetricBarProps) {
  const percentage = (value / max) * 100

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between items-baseline">
        <span className="text-sm font-medium text-warm-800">{label}</span>
        <span className="text-sm text-warm-600">
          {value}{unit} / {max}{unit}
        </span>
      </div>
      <Progress 
        value={percentage} 
        className="h-2 bg-medical-100 rounded-full overflow-hidden"
      >
        <div 
          className={cn("h-full transition-all duration-300 rounded-full", color)}
          style={{ width: `${percentage}%` }}
        />
      </Progress>
    </div>
  )
}
