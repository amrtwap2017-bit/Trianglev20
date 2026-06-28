'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatItemProps {
  value: number
  suffix: string
  label: string
  isInView: boolean
  delay: number
}

function AnimatedCounter({ value, suffix, label, isInView, delay }: StatItemProps) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  const animate = useCallback(() => {
    if (hasAnimated.current) return
    hasAnimated.current = true

    const duration = 1500
    const startTime = performance.now()
    const timeoutDelay = delay

    setTimeout(() => {
      const step = (now: number) => {
        const elapsed = now - (startTime + timeoutDelay)
        const progress = Math.min(elapsed / duration, 1)
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.floor(eased * value))

        if (progress < 1) {
          requestAnimationFrame(step)
        } else {
          setCount(value)
        }
      }
      requestAnimationFrame(step)
    }, timeoutDelay)
  }, [value, delay])

  useEffect(() => {
    if (isInView) {
      animate()
    }
  }, [isInView, animate])

  const formatNumber = (n: number) => {
    return n.toLocaleString('en-US')
  }

  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-4xl md:text-5xl lg:text-6xl font-light text-gold tabular-nums">
        {formatNumber(count)}{suffix}
      </span>
      <span className="text-xs md:text-sm text-silver tracking-wider uppercase mt-3">
        {label}
      </span>
    </div>
  )
}

const stats = [
  { value: 50, suffix: '+', label: 'Hotels Served', delay: 0 },
  { value: 9, suffix: '', label: 'Engineering Disciplines', delay: 150 },
  { value: 120000, suffix: '+', label: 'm² Renovated', delay: 300 },
  { value: 15, suffix: '+', label: 'Years in Hospitality Engineering', delay: 450 },
]

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="stats" className="bg-graphite" ref={ref}>
      <div className="max-w-5xl mx-auto py-16 md:py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="relative flex items-center justify-center">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                isInView={isInView}
                delay={stat.delay}
              />
              {/* Vertical dividers on desktop */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-tb-border-light" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}