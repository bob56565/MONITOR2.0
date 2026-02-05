import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -2, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-glass",
        className
      )}
    >
      {children}
    </motion.div>
  )
}