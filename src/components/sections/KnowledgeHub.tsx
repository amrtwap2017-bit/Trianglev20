'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BookOpen, FileText, BarChart3 } from 'lucide-react'

const articles = [
  {
    icon: BookOpen,
    category: 'HVAC',
    categoryStyle: 'bg-gold-muted text-gold',
    title: 'The Complete Guide to HVAC Sizing for Red Sea Climate Hotels',
    excerpt: 'Understanding chiller capacity calculations for hotels operating in extreme heat with high humidity environments...',
    meta: '8 min read · Jan 2025',
  },
  {
    icon: FileText,
    category: 'Operations',
    categoryStyle: '',
    categoryInlineStyle: { color: '#4A90A4', backgroundColor: 'rgba(74,144,164,0.1)' },
    title: 'Preventive Maintenance: The Hotel Engineering Cost Killer Nobody Talks About',
    excerpt: 'How a structured PM program reduces emergency repairs by 60% and extends equipment lifecycle by 8 years...',
    meta: '12 min read · Dec 2024',
  },
  {
    icon: BarChart3,
    category: 'Procurement',
    categoryStyle: 'bg-gold-muted text-gold',
    categoryInlineStyle: undefined,
    title: 'MEP Procurement in Egypt: A Chief Engineer\'s Specification Guide',
    excerpt: 'Navigating equipment sourcing, brand compliance, and vendor management for international hotel properties...',
    meta: '10 min read · Nov 2024',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function KnowledgeHub() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="intelligence" className="bg-obsidian py-24 md:py-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-light text-ivory mb-3">
            Engineering Intelligence
          </h2>
          <p className="text-sm text-silver">
            Free resources for hotel engineering professionals
          </p>
        </motion.div>

        {/* Article Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {articles.map((article) => {
            const Icon = article.icon
            return (
              <motion.article
                key={article.title}
                variants={cardVariants}
                className="bg-graphite border border-tb-border rounded-lg overflow-hidden hover:-translate-y-1 hover:border-tb-border-light transition-all duration-300 cursor-pointer group"
              >
                {/* Icon area */}
                <div className="bg-steel aspect-[16/9] flex items-center justify-center">
                  <Icon className="text-ghost/30 group-hover:text-ghost/50 transition-colors duration-300" size={48} strokeWidth={1} />
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Category tag */}
                  <span
                    className={`inline-block text-xs font-medium px-2.5 py-1 rounded mb-3 ${article.categoryStyle}`}
                    style={article.categoryInlineStyle}
                  >
                    {article.category}
                  </span>

                  <h3 className="text-base font-medium text-ivory line-clamp-2 mb-2 group-hover:text-gold transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-sm text-silver line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>
                  <span className="text-xs text-ghost">
                    {article.meta}
                  </span>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        {/* Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10"
        >
          <a
            href="/intelligence"
            className="gold-underline text-gold text-sm inline-block"
          >
            Access the Knowledge Hub →
          </a>
        </motion.div>
      </div>
    </section>
  )
}