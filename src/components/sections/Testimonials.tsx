'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'TRIANGLE BLACK didn\'t just fix our HVAC system — they re-engineered our entire approach to climate management. The difference in guest comfort scores was immediate.',
    name: 'Ahmed Hassan',
    title: 'Chief Engineer',
    hotel: '5-Star Beach Resort, Sharm El-Sheikh',
    initials: 'AH',
  },
  {
    quote: 'Working with TRIANGLE BLACK on our full renovation was the smoothest engineering experience in my 20 years of hotel operations. Zero guest impact.',
    name: 'Sarah Mitchell',
    title: 'General Manager',
    hotel: 'International Brand Hotel',
    initials: 'SM',
  },
  {
    quote: 'Their preventive maintenance program reduced our emergency repair costs by 45% in the first year. That\'s not a vendor — that\'s a partner.',
    name: 'Michael Torres',
    title: 'Director of Engineering',
    hotel: 'Luxury Resort Collection',
    initials: 'MT',
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="testimonials" className="bg-graphite py-24 md:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-light text-ivory">
            What Our Partners Say
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Desktop: all 3 cards visible */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-obsidian border border-tb-border rounded-lg p-8 flex flex-col"
              >
                <Quote className="text-gold/30 mb-4 shrink-0" size={32} strokeWidth={1} />
                <blockquote className="text-base text-ivory/90 italic leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-tb-border">
                  <div className="bg-steel w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-xs font-medium text-gold">
                      {testimonial.initials}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-ivory truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-silver truncate">
                      {testimonial.title}, {testimonial.hotel}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: single card carousel */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="bg-obsidian border border-tb-border rounded-lg p-8"
              >
                <Quote className="text-gold/30 mb-4" size={32} strokeWidth={1} />
                <blockquote className="text-base text-ivory/90 italic leading-relaxed mb-6">
                  &ldquo;{testimonials[activeIndex].quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-tb-border">
                  <div className="bg-steel w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-xs font-medium text-gold">
                      {testimonials[activeIndex].initials}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-ivory truncate">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-xs text-silver truncate">
                      {testimonials[activeIndex].title}, {testimonials[activeIndex].hotel}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation dots — always visible on mobile, hidden on desktop since all cards show */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-gold w-6'
                  : 'bg-tb-border-light hover:bg-ghost'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}