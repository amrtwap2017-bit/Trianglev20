'use client';

import { motion } from 'framer-motion';
import { Building2, ArrowUpRight } from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────────────────── */

interface Project {
  title: string;
  hotel: string;
  location: string;
  category: string;
  metric: string;
  description?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'Complete Climate System Overhaul — Red Sea Resort',
    hotel: '5-Star International Resort',
    location: 'Sharm El-Sheikh',
    category: 'HVAC · RENOVATION',
    metric: '98% Occupancy Maintained',
    description:
      'Full HVAC replacement across 400 rooms while maintaining 98% occupancy. Zero guest complaints. Delivered 2 weeks ahead of schedule.',
    featured: true,
  },
  {
    title: 'Full MEP New Build',
    hotel: 'Luxury Beach Resort',
    location: 'Sharm El-Sheikh',
    category: 'MEP · ELECTRICAL',
    metric: '45,000 m² Delivered',
  },
  {
    title: 'Emergency Waterproofing',
    hotel: 'International Brand Hotel',
    location: 'Hurghada',
    category: 'WATERPROOFING',
    metric: 'Resolved in 72 Hours',
  },
  {
    title: 'Electrical Infrastructure Upgrade',
    hotel: '5-Star City Hotel',
    location: 'Cairo',
    category: 'ELECTRICAL',
    metric: '40% Energy Reduction',
  },
  {
    title: 'Preventive Maintenance Program',
    hotel: 'Resort Complex',
    location: 'Red Sea',
    category: 'OPERATIONAL SUPPORT',
    metric: '35% Downtime Reduction',
  },
];

/* ─── Animation variants ──────────────────────────────────────────── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
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

export default function FeaturedProjects() {
  const featured = projects.find((p) => p.featured)!;
  const standard = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-obsidian py-24 md:py-32">
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
            Selected Projects
          </motion.h2>
          <motion.p
            className="mt-3 text-sm text-silver"
            variants={headerVariants}
          >
            Delivered inside Egypt&rsquo;s most demanding hospitality
            environments
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-6"
        >
          {/* ── Featured project (full-width card) ────────────────── */}
          <motion.div
            className="overflow-hidden rounded-lg border border-tb-border bg-graphite transition-colors duration-300 hover:border-gold/30"
            variants={fadeUp}
          >
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Left — Image placeholder */}
              <div className="relative flex items-center justify-center bg-steel md:col-span-3 md:min-h-[360px]">
                <Building2 className="h-16 w-16 text-ivory/15" strokeWidth={1} />
                <span className="absolute bottom-6 left-6 text-base font-medium text-ivory/60 md:text-lg">
                  {featured.hotel}
                </span>
              </div>

              {/* Right — Content */}
              <div className="flex flex-col justify-center p-8 md:col-span-2 md:p-12">
                <span className="text-xs uppercase tracking-wider text-gold">
                  {featured.category}
                </span>
                <h3 className="mt-3 text-xl font-medium leading-snug text-ivory md:text-2xl">
                  {featured.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-silver">
                  {featured.description}
                </p>
                <p className="mt-6 font-medium text-gold">
                  {featured.metric}
                </p>
                <a
                  href="#"
                  className="gold-underline mt-6 inline-block w-fit text-sm font-medium text-gold transition-colors hover:text-gold-light"
                >
                  View Case Study&nbsp;→
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Standard project cards (2×2) ─────────────────────── */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            {standard.map((project) => (
              <motion.div
                key={project.title}
                className="group cursor-default rounded-lg border border-tb-border bg-graphite p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30"
                variants={fadeUp}
              >
                {/* Image placeholder */}
                <div className="flex aspect-video items-center justify-center rounded bg-steel">
                  <Building2
                    className="h-10 w-10 text-ivory/10"
                    strokeWidth={1}
                  />
                </div>

                {/* Category tag */}
                <span className="mt-4 block text-xs uppercase tracking-wider text-gold">
                  {project.category}
                </span>

                {/* Title */}
                <h4 className="mt-1.5 text-base font-medium text-ivory">
                  {project.title}
                </h4>

                {/* Hotel name + location */}
                <p className="mt-1 text-sm text-silver">
                  {project.hotel}, {project.location}
                </p>

                {/* Metric */}
                <p className="mt-3 font-medium text-gold">
                  {project.metric}
                </p>

                {/* Arrow CTA */}
                <div className="mt-4 flex items-center gap-1 text-sm text-gold transition-transform duration-300 group-hover:translate-x-1">
                  <span>View Project</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </motion.div>
            ))}
          </div>
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
            href="#"
            className="focus-gold inline-flex h-11 items-center gap-2 rounded-none border border-tb-border px-6 text-sm font-medium text-ivory transition-colors hover:border-tb-border-light hover:bg-smoke"
          >
            View all projects
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}