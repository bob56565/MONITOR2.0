import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string | number
  change?: string
  icon?: LucideIcon
  trend?: 'up' | 'down' | 'neutral'
  className?: string
}

export function StatCard({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  trend = 'neutral',
  className 
}: StatCardProps) {
  const trendColor = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-warm-500'
  }[trend]

  return (
    <div className={cn(
      "bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-white/60 shadow-lg",
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-warm-600 mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-medical-900">{value}</h3>
          {change && (
            <p className={cn("text-sm mt-2", trendColor)}>{change}</p>
          )}
        </div>
        {Icon && (
          <div className="ml-4">
            <Icon className="w-8 h-8 text-medical-500" />
          </div>
        )}
      </div>
    </div>
  )
}
