"use client"

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children?: React.ReactNode
  title?: string
  description?: string
  className?: string
  hover?: boolean
}

export function GlassCard({ children, title, description, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -2, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-glass p-6",
        className
      )}
    >
      {title && <h3 className="text-xl font-semibold text-medical-900 mb-2">{title}</h3>}
      {description && <p className="text-warm-600">{description}</p>}
      {children}
    </motion.div>
  )
}