import { type Metadata } from 'next';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Clock, TrendingUp, Heart, Shield, ArrowRight, Check, Send } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers — TRIANGLE BLACK | Join Egypt\'s Top Hospitality Engineering Team',
  description: 'Join Egypt\'s premier hospitality engineering partnership. Open positions for engineers, project managers, and technical specialists.',
};

const positions = [
  { title: 'Senior MEP Engineer', department: 'Engineering', location: 'Sharm El-Sheikh', type: 'Full-time', description: 'Lead MEP design coordination and execution for luxury hotel projects. Minimum 8 years hospitality MEP experience required.' },
  { title: 'HVAC Project Manager', department: 'Project Management', location: 'Sharm El-Sheikh', type: 'Full-time', description: 'Manage HVAC replacement and installation projects in operating hotel environments. PMP certification preferred.' },
  { title: 'Electrical Engineer', department: 'Engineering', location: 'Sharm El-Sheikh', type: 'Full-time', description: 'Design and install electrical distribution, emergency power, and lighting systems for 5-star hotel properties.' },
  { title: 'Preventive Maintenance Technician', department: 'Operations', location: 'Red Sea Region', type: 'Full-time', description: 'Execute preventive maintenance programs across hotel properties. Experience with chiller plants, BMS, and building systems.' },
  { title: 'Engineering Coordinator', department: 'Project Management', location: 'Sharm El-Sheikh', type: 'Full-time', description: 'Coordinate project schedules, documentation, and communications between engineering teams and hotel stakeholders.' },
];

const benefits = [
  { icon: TrendingUp, title: 'Career Growth', description: 'Clear progression paths from engineer to project lead to director. We invest in your professional development.' },
  { icon: Heart, title: 'Engineering Culture', description: 'Work alongside the best hospitality engineers in Egypt. Technical excellence is our standard, not our exception.' },
  { icon: Shield, title: 'Premium Projects', description: 'Every project is a 5-star international hotel. No residential, no commercial — pure hospitality engineering.' },
  { icon: MapPin, title: 'Red Sea Location', description: 'Based in Sharm El-Sheikh with project travel across Egypt\'s most beautiful destinations.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.p className="text-xs uppercase tracking-widest text-gold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>Careers</motion.p>
          <motion.h1 className="mt-4 max-w-3xl text-4xl font-light text-ivory md:text-5xl lg:text-6xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
            Build Your Career at
            <br /><span className="text-gold">Egypt&rsquo;s Finest Engineering Firm</span>
          </motion.h1>
          <motion.p className="mt-6 max-w-xl text-lg text-silver" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
            TRIANGLE BLACK is where elite engineers come to do the best work of their careers — in the most demanding hospitality environments on earth.
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-graphite py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.h2 className="text-2xl font-light text-ivory md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>Why TRIANGLE BLACK</motion.h2>
          <motion.div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <motion.div key={b.title} className="flex gap-5 rounded-lg border border-tb-border bg-obsidian p-6" variants={fadeUp}>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold-muted text-gold">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-ivory">{b.title}</h3>
                    <p className="mt-2 text-sm text-silver">{b.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-obsidian py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.h2 className="text-2xl font-light text-ivory md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>Open Positions</motion.h2>
          <motion.div className="mt-10 space-y-4" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
            {positions.map((pos) => (
              <motion.div key={pos.title} className="group rounded-lg border border-tb-border bg-graphite p-6 transition-all duration-300 hover:border-gold/30" variants={fadeUp}>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-ivory">{pos.title}</h3>
                    <p className="mt-1 text-sm text-silver">{pos.description}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-ghost">
                      <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" />{pos.department}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{pos.location}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{pos.type}</span>
                    </div>
                  </div>
                  <a href="#apply" className="focus-gold shrink-0 inline-flex h-10 items-center gap-2 bg-gold px-5 text-xs font-semibold text-obsidian transition-colors hover:bg-gold-light">
                    Apply <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="bg-graphite py-24 md:py-32">
        <div className="mx-auto max-w-2xl px-6 md:px-16 lg:px-20">
          <motion.h2 className="text-2xl font-light text-ivory md:text-3xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>Apply Now</motion.h2>
          <motion.p className="mt-3 text-silver" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}>
            Tell us about yourself. We review every application personally.
          </motion.p>
          <motion.form className="mt-10 space-y-6" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={fadeUp} onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-silver mb-2">Full Name *</label>
                <input type="text" required className="w-full rounded-sm border border-tb-border bg-steel px-4 py-3.5 text-sm text-ivory placeholder-ghost transition-colors focus:border-gold focus:outline-none" placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-silver mb-2">Email *</label>
                <input type="email" required className="w-full rounded-sm border border-tb-border bg-steel px-4 py-3.5 text-sm text-ivory placeholder-ghost transition-colors focus:border-gold focus:outline-none" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-silver mb-2">Phone *</label>
                <input type="tel" required className="w-full rounded-sm border border-tb-border bg-steel px-4 py-3.5 text-sm text-ivory placeholder-ghost transition-colors focus:border-gold focus:outline-none" placeholder="+20 100 000 0000" />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-silver mb-2">Position *</label>
                <select required className="w-full rounded-sm border border-tb-border bg-steel px-4 py-3.5 text-sm text-ivory transition-colors focus:border-gold focus:outline-none">
                  <option value="">Select a position</option>
                  {positions.map((p) => <option key={p.title} value={p.title}>{p.title}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-silver mb-2">Years of Experience</label>
              <input type="number" className="w-full rounded-sm border border-tb-border bg-steel px-4 py-3.5 text-sm text-ivory placeholder-ghost transition-colors focus:border-gold focus:outline-none" placeholder="e.g. 8" />
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-silver mb-2">LinkedIn URL</label>
              <input type="url" className="w-full rounded-sm border border-tb-border bg-steel px-4 py-3.5 text-sm text-ivory placeholder-ghost transition-colors focus:border-gold focus:outline-none" placeholder="https://linkedin.com/in/your-profile" />
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-silver mb-2">Cover Message</label>
              <textarea className="w-full rounded-sm border border-tb-border bg-steel px-4 py-3.5 text-sm text-ivory placeholder-ghost transition-colors focus:border-gold focus:outline-none min-h-[120px] resize-y" placeholder="Why TRIANGLE BLACK? What makes you the right fit?" />
            </div>
            <button type="submit" className="focus-gold inline-flex h-12 items-center gap-2 bg-gold px-8 font-semibold text-obsidian transition-colors hover:bg-gold-light md:h-[52px]">
              Submit Application <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
}