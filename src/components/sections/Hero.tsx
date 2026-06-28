'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

/* ─── Animation variants ─────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const headlineLine = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 + i * 0.1 },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { duration: 1, delay },
  }),
};

/* ─── Gold particle data (deterministic positions & timing) ──────── */

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${((i * 17 + 7) % 100)}%`,
  top: `${((i * 23 + 11) % 100)}%`,
  size: 2 + (i % 3),
  duration: 12 + (i % 8) * 2,
  delay: (i * 1.3) % 6,
  opacity: 0.12 + (i % 4) * 0.06,
}));

/* ─── Component ──────────────────────────────────────────────────── */

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian"
    >
      {/* ── Background: radial gradient + animated particles ───────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Radial depth gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 45%, #141414 0%, #0A0A0A 100%)',
          }}
        />

        {/* Animated gold particle dots */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-gold"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: 0,
            }}
            animate={{
              opacity: [0, p.opacity, p.opacity * 0.4, p.opacity, 0],
              y: [0, -30, -50, -25, 0],
              x: [0, 10, -5, 8, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* ── Content ──────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Trust tag */}
        <motion.p
          className="text-xs uppercase tracking-widest text-silver"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={1.5}
        >
          <span className="mr-1.5 text-gold">●</span>
          Trusted by Marriott&nbsp;·&nbsp;Hilton&nbsp;·&nbsp;Accor properties
          across Egypt
        </motion.p>

        {/* Headline */}
        <h1 className="mt-8 leading-tight">
          <motion.span
            className="block text-4xl font-light text-ivory sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]"
            variants={headlineLine}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Egypt&rsquo;s Premier
          </motion.span>

          <motion.span
            className="mt-1 block text-4xl font-light text-ivory sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]"
            variants={headlineLine}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Hospitality Engineering
          </motion.span>

          <motion.span
            className="mt-1 block text-4xl font-light text-gold sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]"
            variants={headlineLine}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Partner.
          </motion.span>
        </h1>

        {/* Subline */}
        <motion.p
          className="mx-auto mt-7 max-w-[560px] text-lg text-silver md:text-xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.9}
        >
          We design, build, and maintain the invisible systems that define
          guest experience in Egypt&rsquo;s finest hotels.
        </motion.p>

        {/* CTA group */}
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.1}
        >
          {/* Primary button */}
          <a
            href="#contact"
            className="focus-gold inline-flex h-12 items-center gap-2 rounded-none bg-gold px-6 font-semibold text-obsidian transition-colors hover:bg-gold-light md:h-[52px] md:px-8"
          >
            Discuss Your Project
            <ArrowRight className="h-4 w-4" />
          </a>

          {/* Ghost button */}
          <a
            href="#work"
            className="focus-gold inline-flex h-12 items-center gap-2 rounded-none border border-tb-border px-6 font-medium text-ivory transition-colors hover:border-tb-border-light hover:bg-smoke md:h-[52px] md:px-8"
          >
            View Our Work
          </a>
        </motion.div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={1.5}
      >
        <span className="text-xs tracking-wide text-ghost">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-4 w-4 text-ghost" />
        </motion.div>
      </motion.div>
    </section>
  );
}