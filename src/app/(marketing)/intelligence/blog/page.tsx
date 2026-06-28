'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, User, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const categories = ['All', 'HVAC', 'Electrical', 'Renovation', 'Plumbing', 'Sustainability', 'Operations', 'Egypt Market', 'Standards'];

const articles = [
  { title: 'Why Hotel HVAC Systems Fail in Red Sea Climate — And How to Prevent It', category: 'HVAC', readTime: '8 min', date: 'Jun 2025', excerpt: 'The Red Sea coast presents one of the most demanding HVAC environments in global hospitality. With summer temperatures exceeding 45°C and humidity levels that challenge even the best-engineered systems, hotel HVAC failures are not just inconvenient — they are reputation-threatening events that directly impact revenue.', slug: 'hvac-red-sea-climate' },
  { title: 'The Complete Guide to Hotel Electrical System Upgrades in Egypt', category: 'Electrical', readTime: '12 min', date: 'May 2025', excerpt: 'Modern hotel electrical systems must support an ever-growing array of technology demands — from smart room controls to high-density charging stations. This guide covers everything from load audits to commissioning.', slug: 'electrical-upgrades-egypt' },
  { title: 'Renovating a 400-Room Resort Without Closing: A Protocol', category: 'Renovation', readTime: '10 min', date: 'May 2025', excerpt: 'Our zero-downtime renovation methodology has been proven across 200+ rooms. This protocol details the phasing, guest protection, and quality management systems that make it possible.', slug: 'renovating-without-closing' },
  { title: 'Waterproofing Challenges in Coastal Hotel Construction', category: 'Plumbing', readTime: '7 min', date: 'Apr 2025', excerpt: 'Coastal hotel construction in Egypt faces unique waterproofing challenges that generic solutions cannot address. Salt spray, high humidity, and thermal cycling require specialized engineering approaches.', slug: 'coastal-waterproofing' },
  { title: 'Energy Efficiency Strategies for Luxury Hotels in Egypt', category: 'Sustainability', readTime: '9 min', date: 'Apr 2025', excerpt: 'Energy costs represent the largest single controllable expense for hotel operations in Egypt. These strategies have delivered 25-40% reductions across our client portfolio.', slug: 'energy-efficiency-luxury' },
  { title: 'Preventive Maintenance Schedules That Actually Reduce Costs', category: 'Operations', readTime: '6 min', date: 'Mar 2025', excerpt: 'Most hotel preventive maintenance programs look good on paper but fail in execution. Here is the framework we use to create programs that deliver measurable cost reductions.', slug: 'preventive-maintenance-costs' },
  { title: 'Understanding Brand Standard Engineering Requirements: Marriott vs Hilton', category: 'Standards', readTime: '11 min', date: 'Mar 2025', excerpt: 'International hotel brands have specific engineering standards that vary significantly. Understanding these differences is critical for any engineering firm working in luxury hospitality.', slug: 'brand-standards-marriott-hilton' },
  { title: 'Egypt Hotel Engineering Market Report: 2025 Outlook', category: 'Egypt Market', readTime: '15 min', date: 'Feb 2025', excerpt: 'A comprehensive analysis of the Egyptian hotel engineering market including project pipeline, investment trends, regulatory changes, and growth opportunities across key markets.', slug: 'egypt-market-report-2025' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? articles : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      <section className="bg-obsidian pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.p className="text-xs uppercase tracking-widest text-gold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>Engineering Intelligence</motion.p>
          <motion.h1 className="mt-4 text-4xl font-light text-ivory md:text-5xl lg:text-6xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
            Engineering Blog
          </motion.h1>
          <motion.p className="mt-6 max-w-xl text-lg text-silver" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
            Insights from our project sites, engineering teams, and industry analysis.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-obsidian pb-6 md:pb-10">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`focus-gold rounded-none px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-200 ${activeCategory === cat ? 'bg-gold text-obsidian' : 'border border-tb-border text-silver hover:border-tb-border-light hover:text-ivory'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Articles */}
      <section className="bg-obsidian py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3" variants={stagger} initial="hidden" animate="visible" key={activeCategory}>
            {filtered.map((article) => (
              <motion.div key={article.slug} variants={fadeUp}>
                <Link href={`/intelligence/blog/${article.slug}`} className="group block">
                  <div className="rounded-lg border border-tb-border bg-graphite p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30">
                    <span className="text-xs uppercase tracking-wider text-gold">{article.category}</span>
                    <h2 className="mt-3 text-base font-medium text-ivory leading-snug group-hover:text-gold transition-colors">{article.title}</h2>
                    <p className="mt-2 text-sm text-silver line-clamp-2">{article.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between text-xs text-ghost">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{article.readTime}</span>
                        <span className="flex items-center gap-1"><User className="h-3 w-3" />{article.date}</span>
                      </div>
                      <ArrowUpRight className="h-3.5 w-3.5 text-silver group-hover:text-gold transition-colors" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}