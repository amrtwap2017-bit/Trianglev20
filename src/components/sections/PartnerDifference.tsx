'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Crosshair, Users, Cpu } from 'lucide-react'

const pillars = [
  {
    icon: Crosshair,
    headline: 'International Standard Execution',
    body: 'We engineer to Marriott, Hilton, and IHG brand specifications — not just Egyptian market minimums. Every installation, every material, every process meets the standards your brand demands.',
  },
  {
    icon: Users,
    headline: 'Still Here the Day After Handover',
    body: 'AMC programs, preventive maintenance intelligence, and emergency response built into every relationship. We don\'t disappear after commissioning — that\'s when the partnership begins.',
  },
  {
    icon: Cpu,
    headline: 'We Understand Hotels',
    body: 'We know what a 400-room beach resort looks like at 98% occupancy in August. We engineer for peak demand, guest comfort, and operational efficiency simultaneously.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function PartnerDifference() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="difference" className="bg-obsidian py-24 md:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.headline}
                variants={cardVariants}
                className="bg-graphite border border-tb-border rounded-lg p-8 hover:border-gold/30 transition-colors duration-300"
              >
                <Icon
                  className="text-gold mb-6"
                  size={40}
                  strokeWidth={1.5}
                />
                <h3 className="text-lg font-medium text-ivory mb-4">
                  {pillar.headline}
                </h3>
                <p className="text-sm text-silver leading-relaxed">
                  {pillar.body}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}