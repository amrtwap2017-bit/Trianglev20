'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, ArrowUpRight, Search } from 'lucide-react';
import Link from 'next/link';

const categories = [
  'All', 'MEP', 'HVAC', 'Electrical', 'Plumbing', 'Waterproofing', 'Renovation', 'Procurement', 'Consulting', 'Support',
];

interface Project {
  title: string;
  hotel: string;
  location: string;
  category: string;
  metric: string;
  slug: string;
}

const projects: Project[] = [
  { title: 'Complete Climate System Overhaul', hotel: '5-Star International Resort', location: 'Sharm El-Sheikh', category: 'HVAC', metric: '98% Occupancy Maintained', slug: 'climate-system-overhaul' },
  { title: 'Full MEP New Build', hotel: 'Luxury Beach Resort', location: 'Sharm El-Sheikh', category: 'MEP', metric: '45,000 m² Delivered', slug: 'mep-new-build' },
  { title: 'Emergency Waterproofing Intervention', hotel: 'International Brand Hotel', location: 'Hurghada', category: 'Waterproofing', metric: 'Resolved in 72 Hours', slug: 'emergency-waterproofing' },
  { title: 'Electrical Infrastructure Upgrade', hotel: '5-Star City Hotel', location: 'Cairo', category: 'Electrical', metric: '40% Energy Reduction', slug: 'electrical-upgrade' },
  { title: 'Preventive Maintenance Program', hotel: 'Resort Complex', location: 'Red Sea', category: 'Support', metric: '35% Downtime Reduction', slug: 'maintenance-program' },
  { title: 'Hotel Renovation — 200 Rooms', hotel: 'Beach Resort', location: 'Sharm El-Sheikh', category: 'Renovation', metric: 'Zero Guest Complaints', slug: 'hotel-renovation-200-rooms' },
  { title: 'Technical Procurement — FF&E', hotel: 'International Hotel', location: 'El Gouna', category: 'Procurement', metric: '500+ Items Sourced', slug: 'procurement-ffe' },
  { title: 'Engineering Consultation — New Build', hotel: 'Mixed-Use Resort', location: 'North Coast', category: 'Consulting', metric: 'Complete Feasibility Delivered', slug: 'consultation-new-build' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.p className="text-xs uppercase tracking-widest text-gold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            Portfolio
          </motion.p>
          <motion.h1 className="mt-4 text-4xl font-light text-ivory md:text-5xl lg:text-6xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
            Our Work
          </motion.h1>
          <motion.p className="mt-6 max-w-xl text-lg text-silver" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
            Delivered inside Egypt&rsquo;s most demanding hospitality environments
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-obsidian pb-6 md:pb-10">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`focus-gold rounded-none px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gold text-obsidian'
                    : 'border border-tb-border text-silver hover:border-tb-border-light hover:text-ivory'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Project Grid */}
      <section className="bg-obsidian py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          {filtered.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8"
              variants={stagger}
              initial="hidden"
              animate="visible"
              key={activeCategory}
            >
              {filtered.map((project) => (
                <motion.div key={project.slug} variants={fadeUp}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group block overflow-hidden rounded-lg border border-tb-border bg-graphite transition-all duration-300 hover:-translate-y-1 hover:border-gold/30"
                  >
                    <div className="flex aspect-video items-center justify-center bg-steel">
                      <Building2 className="h-12 w-12 text-ivory/10" strokeWidth={1} />
                    </div>
                    <div className="p-6">
                      <span className="text-xs uppercase tracking-wider text-gold">{project.category}</span>
                      <h3 className="mt-2 text-lg font-medium text-ivory">{project.title}</h3>
                      <p className="mt-1 text-sm text-silver">{project.hotel}, {project.location}</p>
                      <p className="mt-3 font-medium text-gold">{project.metric}</p>
                      <div className="mt-4 flex items-center gap-1 text-sm text-gold transition-transform duration-300 group-hover:translate-x-1">
                        <span>View Case Study</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Search className="h-12 w-12 text-ghost" strokeWidth={1} />
              <p className="mt-4 text-silver">No projects found for this category.</p>
              <button
                onClick={() => setActiveCategory('All')}
                className="mt-4 text-sm font-medium text-gold hover:text-gold-light transition-colors"
              >
                View all projects →
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}