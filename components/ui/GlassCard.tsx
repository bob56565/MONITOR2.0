'use client'

import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div
      className={`backdrop-blur-lg bg-white/70 border border-warm-100 rounded-2xl shadow-soft ${className}`}
    >
      {children}
    </div>
  )
}
