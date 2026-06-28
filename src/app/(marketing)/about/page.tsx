import { type Metadata } from 'next';
import { motion } from 'framer-motion';
import { Crosshair, Users, Cpu, Eye, Trophy, ChevronRight, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — TRIANGLE BLACK | Egypt\'s Premier Hospitality Engineering Partner',
  description: 'TRIANGLE BLACK is Egypt\'s first premium hospitality engineering partnership firm, delivering world-class MEP, HVAC, and renovation services to 5-star hotels.',
};

const pillars = [
  { icon: Crosshair, title: 'Precision', description: 'We engineer to Marriott, Hilton, and IHG brand specifications — not just Egyptian market minimums. Every installation, every material, every process meets the standards your brand demands and your guests expect.' },
  { icon: Users, title: 'Partnership', description: 'AMC programs, preventive maintenance intelligence, and emergency response built into every relationship. We do not disappear after commissioning — that is when the partnership begins and the real value is delivered.' },
  { icon: Cpu, title: 'Intelligence', description: 'We know what a 400-room beach resort looks like at 98% occupancy in August. We engineer for peak demand, guest comfort, and operational efficiency simultaneously. Our intelligence comes from decades of on-site experience.' },
  { icon: Eye, title: 'Transparency', description: 'Real-time project dashboards, honest timelines, and budgets that do not change without your knowledge and approval. You will never be surprised by a TRIANGLE BLACK project — only impressed.' },
  { icon: Trophy, title: 'Legacy', description: 'We build engineering systems that last decades, not years. Our work is designed for the next renovation cycle, not the next quarter. Every decision we make considers the 10-year, 20-year, and 30-year impact on your asset.' },
];

const processSteps = [
  { step: '01', title: 'Site Assessment', description: 'Comprehensive engineering survey and brief development' },
  { step: '02', title: 'Scope Definition', description: 'Detailed specification and scope of work documentation' },
  { step: '03', title: 'Team Allocation', description: 'Dedicated engineering team assignment and planning' },
  { step: '04', title: 'Procurement', description: 'Material specification, vendor selection, and logistics' },
  { step: '05', title: 'Phased Execution', description: 'Live-hotel protocol implementation with quality gates' },
  { step: '06', title: 'Commissioning', description: 'Full system testing, balancing, and performance verification' },
  { step: '07', title: 'Handover', description: 'Documentation, training, and operational transition' },
  { step: '08', title: 'Ongoing Partnership', description: 'AMC programs, preventive maintenance, and 24/7 support' },
];

const team = [
  { initials: 'MA', name: 'Managing Partner', title: 'Founder & Chief Engineer', credential: 'BSc MEng CEng' },
  { initials: 'AE', name: 'Operations Director', title: 'Head of Project Delivery', credential: 'BSc MEP PMP' },
  { initials: 'SK', name: 'Technical Director', title: 'Head of Engineering Design', credential: 'MSc HVAC CEng' },
  { initials: 'RH', name: 'Commercial Director', title: 'Head of Business Development', credential: 'MBA' },
  { initials: 'MO', name: 'Senior Project Manager', title: 'MEP Projects Lead', credential: 'BSc PMP' },
  { initials: 'AN', name: 'QA Director', title: 'Head of Quality & Compliance', credential: 'ISO Lead Auditor' },
];

const certifications = ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018', 'OSHA Compliance', 'ASHRAE Member', 'Egyptian Engineering Syndicate'];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero / Story */}
      <section className="bg-obsidian pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.p className="text-xs uppercase tracking-widest text-gold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            About TRIANGLE BLACK
          </motion.p>
          <motion.h1 className="mt-4 max-w-4xl text-4xl font-light text-ivory md:text-5xl lg:text-6xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
            We don&rsquo;t manage contracts.
            <br />
            <span className="text-gold">We protect your hotel.</span>
          </motion.h1>
          <motion.div className="mt-10 max-w-2xl space-y-6 text-silver" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
            <p className="text-lg leading-relaxed">
              TRIANGLE BLACK was founded in Sharm El-Sheikh with a singular conviction: Egypt&rsquo;s luxury hotels deserve engineering partners who think in guest experience outcomes — not just scopes of work.
            </p>
            <p className="text-base leading-relaxed">
              Most engineering firms in Egypt treat hospitality projects the same way they treat residential buildings. We recognized that a 400-room resort at 98% occupancy in August requires an entirely different engineering mindset — one that understands brand standards, guest comfort tolerances, operational constraints, and the financial consequences of engineering failure in a live hotel environment. That understanding became our competitive advantage, and it remains the foundation of everything we build.
            </p>
            <p className="text-base leading-relaxed">
              Today, we serve international brand hotels across Egypt&rsquo;s most demanding hospitality corridors — from the Red Sea coast to Cairo. Our work spans the full engineering lifecycle: from new build MEP installation to emergency response, from preventive maintenance to strategic consulting. Every engagement reflects the same principle: engineering is invisible when it works perfectly. We make sure it always works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-graphite py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-16 lg:px-20 text-center">
          <motion.p className="text-2xl font-light text-ivory leading-relaxed md:text-3xl lg:text-4xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            To be the engineering partner that every luxury hotel in Egypt trusts to protect its most important asset — the guest experience.
          </motion.p>
        </div>
      </section>

      {/* 5 Pillars */}
      <section className="bg-obsidian py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.h2 className="text-2xl font-light text-ivory md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            Our Positioning Pillars
          </motion.h2>
          <motion.div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.div key={pillar.title} className="rounded-lg border border-tb-border bg-graphite p-8 hover:border-gold/30 transition-colors duration-300" variants={fadeUp}>
                  <Icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
                  <h3 className="mt-5 text-lg font-medium text-ivory">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-silver">{pillar.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-graphite py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.h2 className="text-2xl font-light text-ivory md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            How We Work
          </motion.h2>
          <motion.p className="mt-3 text-silver" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            Our 8-phase methodology ensures precision at every stage
          </motion.p>
          <motion.div className="mt-12 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            {processSteps.map((step, i) => (
              <motion.div key={step.step} className="border-t border-l-0 border-tb-border py-6 first:border-t-0 sm:border-l sm:border-t-0 sm:pl-6 sm:py-0 sm:first:pl-0" variants={fadeUp}>
                <span className="text-xs font-medium text-gold">{step.step}</span>
                <h3 className="mt-2 text-base font-medium text-ivory">{step.title}</h3>
                <p className="mt-1 text-sm text-silver">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-obsidian py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.h2 className="text-2xl font-light text-ivory md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            Leadership Team
          </motion.h2>
          <motion.div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            {team.map((member) => (
              <motion.div key={member.initials} className="text-center" variants={fadeUp}>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-steel">
                  <span className="text-sm font-medium text-gold">{member.initials}</span>
                </div>
                <h3 className="mt-3 text-sm font-medium text-ivory">{member.name}</h3>
                <p className="mt-0.5 text-xs text-silver">{member.title}</p>
                <p className="mt-1 text-xs text-ghost">{member.credential}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-graphite py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.h2 className="text-2xl font-light text-ivory md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            Certifications & Accreditations
          </motion.h2>
          <motion.div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            {certifications.map((cert) => (
              <motion.div key={cert} className="flex items-center justify-center rounded-lg border border-tb-border bg-obsidian p-4" variants={fadeUp}>
                <span className="text-center text-xs font-medium text-silver">{cert}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-obsidian py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.h2 className="text-2xl font-light text-ivory md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            Sharm El-Sheikh, South Sinai, Egypt
          </motion.h2>
          <motion.p className="mt-4 text-silver" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            Headquartered in Egypt&rsquo;s premier hospitality destination, with project capabilities across the Red Sea, Hurghada, Cairo, and the North Coast.
          </motion.p>
          <motion.div className="mt-8" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            <Link href="/contact" className="focus-gold inline-flex h-12 items-center gap-2 bg-gold px-8 font-semibold text-obsidian transition-colors hover:bg-gold-light md:h-[52px]">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}