import { type Metadata } from 'next';
import { motion } from 'framer-motion';
import { FileText, BookOpen, Library, Calculator, BarChart3, Database, ArrowRight, Clock, User } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Engineering Intelligence — TRIANGLE BLACK | Knowledge Hub',
  description: 'Free resources for hotel engineering professionals: blog articles, technical guides, engineering calculators, and industry data for Egyptian hospitality.',
};

const categories = [
  { icon: FileText, title: 'Engineering Blog', description: 'Insights from project sites & engineering teams', href: '/intelligence/blog' },
  { icon: BookOpen, title: 'Technical Guides', description: 'In-depth resources for hospitality engineering', href: '/intelligence/blog' },
  { icon: Library, title: 'Specification Library', description: 'Curated specs for hotel MEP systems', href: '/intelligence/blog' },
  { icon: Calculator, title: 'Engineering Calculators', description: 'Load, sizing & energy estimation tools', href: '/intelligence/blog' },
  { icon: BarChart3, title: 'Egypt Hotel Report', description: 'Market analysis & sector performance data', href: '/intelligence/blog' },
  { icon: Database, title: 'Industry Data', description: 'Benchmarking metrics & compliance standards', href: '/intelligence/blog' },
];

const articles = [
  { title: 'Why Hotel HVAC Systems Fail in Red Sea Climate — And How to Prevent It', category: 'HVAC', readTime: '8 min', date: 'Jun 2025', excerpt: 'The Red Sea coast presents one of the most demanding HVAC environments in global hospitality. Here is what we have learned from 50+ hotel systems.' },
  { title: 'The Complete Guide to Hotel Electrical System Upgrades in Egypt', category: 'Electrical', readTime: '12 min', date: 'May 2025', excerpt: 'From load audits to commissioning — a comprehensive guide to modernizing hotel electrical infrastructure while maintaining operations.' },
  { title: 'Renovating a 400-Room Resort Without Closing: A Protocol', category: 'Renovation', readTime: '10 min', date: 'May 2025', excerpt: 'Our zero-downtime renovation methodology has been proven across 200+ rooms. Here is the complete protocol.' },
];

const resources = [
  { title: 'Hotel HVAC Selection Guide — Red Sea Climate Edition', description: 'Comprehensive 40-page guide to HVAC system selection for Red Sea coastal hotels.', type: 'PDF Guide' },
  { title: 'Preventive Maintenance Schedule Template', description: 'Ready-to-use Excel template for hotel MEP preventive maintenance scheduling.', type: 'Excel Template' },
  { title: 'Egypt Hotel Engineering Intelligence Report 2025', description: 'Market analysis, benchmarks, and trends for the Egyptian hospitality engineering sector.', type: 'PDF Report' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function IntelligencePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.p className="text-xs uppercase tracking-widest text-gold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            Knowledge Hub
          </motion.p>
          <motion.h1 className="mt-4 text-4xl font-light text-ivory md:text-5xl lg:text-6xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
            Engineering <span className="text-gold">Intelligence</span>
          </motion.h1>
          <motion.p className="mt-6 max-w-xl text-lg text-silver" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
            Free resources for hotel engineering professionals. Insights, tools, and data from the front lines of Egyptian hospitality.
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-obsidian pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <motion.div key={cat.title} variants={fadeUp}>
                  <Link href={cat.href} className="group block rounded-lg border border-tb-border bg-graphite p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-smoke">
                    <Icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
                    <h2 className="mt-4 text-lg font-medium text-ivory">{cat.title}</h2>
                    <p className="mt-1 text-sm text-silver">{cat.description}</p>
                    <div className="mt-4 flex items-center gap-1 text-sm text-gold transition-transform duration-300 group-hover:translate-x-1">
                      <span>Explore</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Featured Articles */}
      <section className="bg-obsidian py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.h2 className="text-2xl font-light text-ivory md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            Featured Articles
          </motion.h2>
          <motion.div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            {articles.map((article) => (
              <motion.div key={article.title} variants={fadeUp}>
                <Link href={`/intelligence/blog/hvac-red-sea-climate`} className="group block rounded-lg border border-tb-border bg-graphite p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30">
                  <span className="text-xs uppercase tracking-wider text-gold">{article.category}</span>
                  <h3 className="mt-3 text-base font-medium text-ivory leading-snug">{article.title}</h3>
                  <p className="mt-2 text-sm text-silver line-clamp-2">{article.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-ghost">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{article.readTime}</span>
                    <span className="flex items-center gap-1"><User className="h-3 w-3" />{article.date}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="mt-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Link href="/intelligence/blog" className="gold-underline text-sm font-medium text-gold">
              View all articles →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-graphite py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.h2 className="text-2xl font-light text-ivory md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            Downloadable Resources
          </motion.h2>
          <motion.div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            {resources.map((res) => (
              <motion.div key={res.title} className="rounded-lg border border-tb-border bg-obsidian p-6" variants={fadeUp}>
                <span className="text-xs uppercase tracking-wider text-tb-blue">{res.type}</span>
                <h3 className="mt-3 text-base font-medium text-ivory">{res.title}</h3>
                <p className="mt-2 text-sm text-silver">{res.description}</p>
                <div className="mt-4">
                  <span className="focus-gold inline-flex h-9 items-center gap-2 border border-tb-border px-4 text-xs font-medium text-ivory transition-colors hover:border-gold/40 hover:bg-smoke cursor-pointer">
                    Download PDF <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-obsidian py-24 md:py-32">
        <div className="mx-auto max-w-xl px-6 text-center">
          <motion.h2 className="text-2xl font-light text-ivory md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            Subscribe to Engineering Intelligence
          </motion.h2>
          <motion.p className="mt-4 text-silver" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            Monthly insights for hotel engineering professionals. No spam, unsubscribe anytime.
          </motion.p>
          <motion.form className="mt-8 flex gap-3" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={fadeUp} onSubmit={(e) => e.preventDefault()}>
            <input type="email" required placeholder="your@email.com" className="focus-gold flex-1 rounded-sm border border-tb-border bg-steel px-4 py-3 text-sm text-ivory placeholder-ghost transition-colors focus:border-gold focus:outline-none" />
            <button type="submit" className="focus-gold inline-flex h-11 items-center gap-2 bg-gold px-6 text-sm font-semibold text-obsidian transition-colors hover:bg-gold-light shrink-0">
              Subscribe
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
}