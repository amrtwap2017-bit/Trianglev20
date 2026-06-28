'use client';

import { motion } from 'framer-motion';
import {
  Zap,
  Thermometer,
  CircuitBoard,
  Droplets,
  Shield,
  Hammer,
  Package,
  FileSearch,
  Headphones,
  Check,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────────────────── */

interface Service {
  icon: LucideIcon;
  name: string;
  description: string;
  capabilities: string[];
}

const services: Service[] = [
  {
    icon: Zap,
    name: 'MEP Works',
    description: 'Full mechanical, electrical & plumbing integration',
    capabilities: ['Design coordination', 'System integration', 'Brand compliance'],
  },
  {
    icon: Thermometer,
    name: 'HVAC Systems',
    description: 'Climate control for guest comfort excellence',
    capabilities: ['Chiller systems', 'VRV/VRF design', 'Energy optimization'],
  },
  {
    icon: CircuitBoard,
    name: 'Electrical Systems',
    description: 'Power distribution & emergency systems',
    capabilities: ['Main distribution', 'Emergency power', 'Lighting systems'],
  },
  {
    icon: Droplets,
    name: 'Plumbing Systems',
    description: 'Water supply, drainage & fire protection',
    capabilities: ['Hot water systems', 'Water treatment', 'Fire suppression'],
  },
  {
    icon: Shield,
    name: 'Waterproofing',
    description: 'Structural protection in coastal environments',
    capabilities: ['Bathroom waterproofing', 'Roof systems', 'Foundation protection'],
  },
  {
    icon: Hammer,
    name: 'Hotel Renovation',
    description: 'Live operations renovation expertise',
    capabilities: ['Guest room refresh', 'FF&E installation', 'Zero downtime protocol'],
  },
  {
    icon: Package,
    name: 'Technical Procurement',
    description: 'Equipment sourcing & specification management',
    capabilities: ['Brand-approved vendors', 'Specification matching', 'Logistics coordination'],
  },
  {
    icon: FileSearch,
    name: 'Engineering Consulting',
    description: 'Strategic engineering advisory services',
    capabilities: ['Feasibility studies', 'System audits', 'CAPEX planning'],
  },
  {
    icon: Headphones,
    name: 'Operational Support',
    description: '24/7 emergency response & AMC programs',
    capabilities: ['Preventive maintenance', 'Emergency response', 'Performance monitoring'],
  },
];

/* ─── Animation variants ──────────────────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─── Component ────────────────────────────────────────────────────── */

export default function ServicesOverview() {
  return (
    <section id="services" className="bg-obsidian py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
        {/* ── Header ─────────────────────────────────────────────── */}
        <motion.div
          className="mb-14 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-2xl font-light text-ivory md:text-3xl lg:text-4xl"
            variants={headerVariants}
          >
            Complete Engineering Partnership
          </motion.h2>
          <motion.p
            className="mt-3 text-sm uppercase tracking-wider text-gold"
            variants={headerVariants}
          >
            9 integrated disciplines
          </motion.p>
        </motion.div>

        {/* ── 3×3 Grid ───────────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.name}
                className="group cursor-default rounded-lg border border-tb-border bg-graphite p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-smoke md:p-8"
                variants={cardVariants}
              >
                {/* Icon */}
                <Icon
                  className="h-8 w-8 text-gold"
                  strokeWidth={1.5}
                />

                {/* Name */}
                <h3 className="mt-4 text-lg font-medium text-ivory">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="mt-1 text-sm text-silver">
                  {service.description}
                </p>

                {/* Capabilities list */}
                <ul className="mt-4 space-y-1.5">
                  {service.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-2 text-xs text-silver"
                    >
                      <Check
                        className="mt-0.5 h-3 w-3 shrink-0 text-gold"
                        strokeWidth={2.5}
                      />
                      {cap}
                    </li>
                  ))}
                </ul>

                {/* Arrow CTA */}
                <div className="mt-5 flex items-center gap-1 text-gold transition-transform duration-300 group-hover:translate-x-1">
                  <span className="text-sm">→</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Bottom CTA ──────────────────────────────────────────── */}
        <motion.div
          className="mt-14 text-center md:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="/services"
            className="gold-underline text-sm font-medium text-gold transition-colors hover:text-gold-light"
          >
            Explore all services&nbsp;→
          </a>
        </motion.div>
      </div>
    </section>
  );
}