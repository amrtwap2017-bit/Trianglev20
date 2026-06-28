import { type Metadata } from 'next';
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
  ArrowRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services — TRIANGLE BLACK | Hospitality Engineering Egypt',
  description:
    '9 integrated engineering disciplines for luxury hotels: MEP, HVAC, Electrical, Plumbing, Waterproofing, Renovation, Procurement, Consulting & Operational Support.',
  openGraph: {
    title: 'Services — TRIANGLE BLACK',
    description:
      'Complete engineering partnership for Egypt\'s finest hotels.',
  },
};

interface Service {
  icon: LucideIcon;
  name: string;
  slug: string;
  description: string;
  capabilities: string[];
}

const services: Service[] = [
  {
    icon: Zap,
    name: 'MEP Works',
    slug: 'mep-works',
    description: 'Full mechanical, electrical & plumbing integration for hotel environments',
    capabilities: ['Design coordination', 'System integration', 'Brand compliance'],
  },
  {
    icon: Thermometer,
    name: 'HVAC Systems',
    slug: 'hvac',
    description: 'Climate control engineered for guest comfort excellence',
    capabilities: ['Chiller systems', 'VRV/VRF design', 'Energy optimization'],
  },
  {
    icon: CircuitBoard,
    name: 'Electrical Systems',
    slug: 'electrical',
    description: 'Power distribution & emergency infrastructure',
    capabilities: ['Main distribution', 'Emergency power', 'Lighting systems'],
  },
  {
    icon: Droplets,
    name: 'Plumbing Systems',
    slug: 'plumbing',
    description: 'Water supply, drainage & fire protection engineering',
    capabilities: ['Hot water systems', 'Water treatment', 'Fire suppression'],
  },
  {
    icon: Shield,
    name: 'Waterproofing',
    slug: 'waterproofing',
    description: 'Structural protection in harsh coastal environments',
    capabilities: ['Bathroom systems', 'Roof protection', 'Foundation defense'],
  },
  {
    icon: Hammer,
    name: 'Hotel Renovation',
    slug: 'hotel-renovation',
    description: 'Turnkey renovation while maintaining full operations',
    capabilities: ['Guest room refresh', 'FF&E installation', 'Zero downtime protocol'],
  },
  {
    icon: Package,
    name: 'Technical Procurement',
    slug: 'procurement',
    description: 'Equipment sourcing & specification management',
    capabilities: ['Brand-approved vendors', 'Specification matching', 'Logistics coordination'],
  },
  {
    icon: FileSearch,
    name: 'Engineering Consulting',
    slug: 'consulting',
    description: 'Strategic engineering advisory & feasibility studies',
    capabilities: ['Feasibility studies', 'System audits', 'CAPEX planning'],
  },
  {
    icon: Headphones,
    name: 'Operational Support',
    slug: 'operational-support',
    description: '24/7 emergency response & annual maintenance programs',
    capabilities: ['Preventive maintenance', 'Emergency response', 'Performance monitoring'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.p
            className="text-xs uppercase tracking-widest text-gold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            What We Do
          </motion.p>
          <motion.h1
            className="mt-4 text-4xl font-light text-ivory md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Complete Engineering
            <br />
            <span className="text-gold">Partnership</span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-lg text-silver"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Nine integrated disciplines. One partner. Every engineering system
            your hotel needs — designed, built, and maintained to international
            brand standards.
          </motion.p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Services Grid */}
      <section className="bg-obsidian py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.div
            className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.slug} variants={fadeUp}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block rounded-lg border border-tb-border bg-graphite p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-smoke md:p-8"
                  >
                    <Icon className="h-8 w-8 text-gold" strokeWidth={1.5} />
                    <h2 className="mt-4 text-lg font-medium text-ivory">
                      {service.name}
                    </h2>
                    <p className="mt-1 text-sm text-silver">{service.description}</p>
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
                    <div className="mt-5 flex items-center gap-1 text-sm text-gold transition-transform duration-300 group-hover:translate-x-1">
                      <span>Learn more</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-graphite py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.h2
            className="text-3xl font-light text-ivory md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Not sure which service you need?
          </motion.h2>
          <motion.p
            className="mt-4 text-silver"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Tell us about your engineering challenge. We&rsquo;ll identify the right
            solution and respond within 2 hours.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="focus-gold inline-flex h-12 items-center gap-2 bg-gold px-8 font-semibold text-obsidian transition-colors hover:bg-gold-light md:h-[52px]"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
