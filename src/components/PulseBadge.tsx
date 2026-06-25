import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'

interface PulseBadgeProps {
  icon: LucideIcon
  size?: number
}

/**
 * Consistent minimal animation used across the site:
 * a soft pulsing ring around a centered icon, in the navy/grey palette.
 */
export default function PulseBadge({ icon: Icon, size = 26 }: PulseBadgeProps) {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      <motion.span
        className="absolute inset-0 rounded-full bg-navy opacity-[0.12]"
        animate={{ scale: [1, 1.4, 1], opacity: [0.14, 0, 0.14] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className="absolute inset-0 rounded-full bg-navy opacity-[0.06]"
        animate={{ scale: [1, 1.7, 1], opacity: [0.08, 0, 0.08] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
      />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-navy/10 bg-offwhite">
        <Icon className="text-navy" style={{ width: size, height: size }} strokeWidth={1.5} />
      </div>
    </div>
  )
}
