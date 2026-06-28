'use client';

import { motion } from 'framer-motion';
import { Building2, ChevronRight, ArrowRight, Quote } from 'lucide-react';
import Link from 'next/link';

interface ProjectInfo {
  title: string;
  hotel: string;
  location: string;
  category: string;
  metric: string;
  duration: string;
  scope: string;
  rooms: string;
  context: string;
  challenge: string;
  approach: string;
  outcome: string;
  quote: { text: string; name: string; title: string };
}

interface RelatedProject {
  title: string;
  hotel: string;
  category: string;
  metric: string;
  slug: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function ProjectDetailClient({ project, related }: { project: ProjectInfo; related: RelatedProject[] }) {
  const galleryItems = ['Structural Assessment', 'Installation Progress', 'System Detail', 'Finished Installation', 'Quality Verification', 'Completed Space'];

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-obsidian pt-24">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-ghost uppercase tracking-wider">
            <Link href="/" className="hover:text-silver transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/projects" className="hover:text-silver transition-colors">Projects</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-silver">{project.title.split('—')[0].trim()}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-obsidian pb-12 pt-8 md:pb-16 md:pt-12">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <span className="text-xs uppercase tracking-wider text-gold">{project.category}</span>
          <h1 className="mt-4 max-w-4xl text-3xl font-light text-ivory md:text-5xl lg:text-6xl">{project.title}</h1>
          <div className="mt-8 flex flex-wrap gap-8 border-t border-tb-border pt-8">
            <div><span className="block text-xs text-ghost uppercase tracking-wider">Duration</span><span className="mt-1 block text-sm font-medium text-ivory">{project.duration}</span></div>
            <div><span className="block text-xs text-ghost uppercase tracking-wider">Scope</span><span className="mt-1 block text-sm font-medium text-ivory">{project.scope}</span></div>
            <div><span className="block text-xs text-ghost uppercase tracking-wider">Scale</span><span className="mt-1 block text-sm font-medium text-ivory">{project.rooms}</span></div>
            <div><span className="block text-xs text-ghost uppercase tracking-wider">Key Outcome</span><span className="mt-1 block text-sm font-medium text-gold">{project.metric}</span></div>
          </div>
        </div>
      </section>

      {/* Hero Image Placeholder */}
      <section className="bg-obsidian pb-12">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <div className="flex aspect-[21/9] items-center justify-center rounded-lg bg-steel">
            <Building2 className="h-16 w-16 text-ivory/10" strokeWidth={1} />
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Context */}
      <section className="bg-obsidian py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-16 lg:px-20">
          <motion.h2 className="text-2xl font-light text-ivory md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>The Context</motion.h2>
          <motion.p className="mt-6 text-base leading-relaxed text-silver" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>{project.context}</motion.p>
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-graphite py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-16 lg:px-20">
          <motion.h2 className="text-2xl font-light text-ivory md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>The Engineering Challenge</motion.h2>
          <motion.p className="mt-6 text-base leading-relaxed text-silver" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>{project.challenge}</motion.p>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-obsidian py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-16 lg:px-20">
          <motion.h2 className="text-2xl font-light text-ivory md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>Our Approach</motion.h2>
          <motion.p className="mt-6 text-base leading-relaxed text-silver" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>{project.approach}</motion.p>
        </div>
      </section>

      {/* Outcome */}
      <section className="bg-graphite py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-16 lg:px-20">
          <motion.h2 className="text-2xl font-light text-ivory md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>The Outcome</motion.h2>
          <motion.p className="mt-6 text-base leading-relaxed text-silver" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>{project.outcome}</motion.p>

          {/* Quote */}
          <motion.blockquote className="mt-12 border-l-2 border-gold/40 pl-6" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            <Quote className="h-6 w-6 text-gold/30 mb-3" strokeWidth={1} />
            <p className="text-lg italic text-ivory/90 leading-relaxed">&ldquo;{project.quote.text}&rdquo;</p>
            <footer className="mt-4">
              <p className="text-sm font-medium text-ivory">{project.quote.name}</p>
              <p className="text-xs text-silver">{project.quote.title}</p>
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-obsidian py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.h2 className="text-2xl font-light text-ivory md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>Project Gallery</motion.h2>
          <motion.div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            {galleryItems.map((item, i) => (
              <motion.div key={i} className="flex aspect-[4/3] flex-col items-center justify-center rounded-lg bg-steel" variants={fadeUp}>
                <Building2 className="h-8 w-8 text-ivory/10" strokeWidth={1} />
                <span className="mt-2 text-xs text-ghost">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="bg-graphite py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.h2 className="text-2xl font-light text-ivory md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>More Work Like This</motion.h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((rp) => (
              <motion.div key={rp.slug} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={fadeUp}>
                <Link href={`/projects/${rp.slug}`} className="group block rounded-lg border border-tb-border bg-obsidian p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30">
                  <span className="text-xs uppercase tracking-wider text-gold">{rp.category}</span>
                  <h3 className="mt-2 text-base font-medium text-ivory">{rp.title}</h3>
                  <p className="mt-1 text-sm text-silver">{rp.hotel}</p>
                  <p className="mt-3 text-sm font-medium text-gold">{rp.metric}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm text-gold transition-transform group-hover:translate-x-1">
                    <span>View Project</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-obsidian py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.h2 className="text-3xl font-light text-ivory md:text-4xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            Have a similar project?
          </motion.h2>
          <motion.p className="mt-4 text-silver" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            Tell us about your engineering challenge. We&rsquo;ll provide a preliminary assessment and respond within 2 hours.
          </motion.p>
          <motion.div className="mt-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Link href="/contact" className="focus-gold inline-flex h-12 items-center gap-2 bg-gold px-8 font-semibold text-obsidian transition-colors hover:bg-gold-light md:h-[52px]">
              Discuss Your Project <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}