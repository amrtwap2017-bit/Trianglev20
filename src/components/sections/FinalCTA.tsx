'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="bg-obsidian relative overflow-hidden">
      {/* Section divider at top */}
      <div className="section-divider" />

      {/* Subtle radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(201,169,110,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 py-24 md:py-32 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-ivory mb-6 leading-tight">
            Ready to protect your{' '}
            <span className="text-gold">most important asset</span>
            ?
          </h2>
          <p className="text-lg text-silver mb-10 max-w-xl mx-auto">
            Tell us about your engineering challenge. We&apos;ll respond within 2 hours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-obsidian font-semibold h-14 px-10 rounded-lg hover:bg-gold-light transition-colors duration-300 text-sm focus-gold">
              Start a Conversation →
            </button>
            <button className="border border-gold text-gold hover:bg-gold-muted h-14 px-10 rounded-lg transition-colors duration-300 text-sm focus-gold">
              Download Capability Statement
            </button>
          </div>

          {/* Trust note */}
          <p className="text-xs text-gold mt-6">
            ★ 24/7 emergency engineering support available
          </p>
        </motion.div>
      </div>
    </section>
  )
}