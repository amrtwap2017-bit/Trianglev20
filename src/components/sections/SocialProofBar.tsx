'use client';

import { motion } from 'framer-motion';

const brands = [
  'Marriott',
  'Hilton',
  'IHG',
  'Accor',
  'Four Seasons',
  'Kempinski',
  'Radisson',
  'Wyndham',
  'Steigenberger',
  'Jaz Hotel Group',
];

export default function SocialProofBar() {
  return (
    <section id="social-proof" className="bg-obsidian">
      {/* Top divider */}
      <div className="section-divider" />

      {/* Label */}
      <motion.p
        className="px-6 pb-4 pt-6 text-center text-xs uppercase tracking-widest text-silver md:pb-5 md:pt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
      >
        Trusted by Egypt&rsquo;s leading international hotels
      </motion.p>

      {/* Marquee strip */}
      <motion.div
        className="overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="animate-marquee flex w-max items-center gap-8 px-4">
          {/* First set */}
          {brands.map((brand) => (
            <span key={`a-${brand}`} className="flex shrink-0 items-center gap-8">
              <span className="whitespace-nowrap text-sm font-medium uppercase tracking-wider text-ivory/20">
                {brand}
              </span>
              <span className="text-ghost">·</span>
            </span>
          ))}
          {/* Duplicate set for seamless loop */}
          {brands.map((brand) => (
            <span key={`b-${brand}`} className="flex shrink-0 items-center gap-8">
              <span className="whitespace-nowrap text-sm font-medium uppercase tracking-wider text-ivory/20">
                {brand}
              </span>
              <span className="text-ghost">·</span>
            </span>
          ))}
        </div>
      </motion.div>

      {/* Bottom divider */}
      <div className="section-divider mt-6 md:mt-8" />
    </section>
  );
}