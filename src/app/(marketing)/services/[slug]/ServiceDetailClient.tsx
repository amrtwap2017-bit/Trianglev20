'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  ChevronRight,
  ShieldCheck,
  Clock,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface ServiceData {
  name: string;
  slug: string;
  headline: string;
  description: string;
  icon: string;
  painPoints: string[];
  approach: { title: string; description: string }[];
  scope: string[];
  standards: string[];
  featuredProject: { title: string; hotel: string; metric: string };
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
}

const allServiceNames: Record<string, { name: string; slug: string }> = {
  'mep-works': { name: 'MEP Works', slug: 'mep-works' },
  'hvac': { name: 'HVAC Systems', slug: 'hvac' },
  'electrical': { name: 'Electrical Systems', slug: 'electrical' },
  'plumbing': { name: 'Plumbing Systems', slug: 'plumbing' },
  'waterproofing': { name: 'Waterproofing', slug: 'waterproofing' },
  'hotel-renovation': { name: 'Hotel Renovation', slug: 'hotel-renovation' },
  'procurement': { name: 'Technical Procurement', slug: 'procurement' },
  'consulting': { name: 'Engineering Consulting', slug: 'consulting' },
  'operational-support': { name: 'Operational Support', slug: 'operational-support' },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const approachIcons = [Target, ShieldCheck, Zap, Clock, TrendingUp, Check];

export default function ServiceDetailClient({
  service,
}: {
  service: ServiceData;
  allServices: Record<string, ServiceData>;
}) {
  const related = service.relatedServices.map((s) => allServiceNames[s]).filter(Boolean);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-obsidian pt-24">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-ghost uppercase tracking-wider">
            <Link href="/" className="hover:text-silver transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/services" className="hover:text-silver transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-silver">{service.name}</span>
          </nav>
        </div>
      </div>

      {/* Service Hero */}
      <section className="bg-obsidian pb-20 pt-8 md:pb-28 md:pt-12">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.span
            className="inline-block text-xs uppercase tracking-widest text-gold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {service.name}
          </motion.span>
          <motion.h1
            className="mt-4 max-w-3xl text-3xl font-light text-ivory md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {service.headline}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl text-lg text-silver leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {service.description}
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/contact"
              className="focus-gold inline-flex h-12 items-center gap-2 bg-gold px-8 font-semibold text-obsidian transition-colors hover:bg-gold-light md:h-[52px]"
            >
              Discuss Your {service.name} Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          {/* Capabilities list */}
          <motion.div
            className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {service.scope.slice(0, 4).map((cap) => (
              <div key={cap} className="flex items-center gap-2 text-sm text-silver">
                <Check className="h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
                {cap}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <div className="section-divider" />

      {/* The Challenge */}
      <section className="bg-obsidian py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.h2
            className="text-2xl font-light text-ivory md:text-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            If you&rsquo;re managing <span className="text-gold">{service.name.toLowerCase()}</span> challenges...
          </motion.h2>
          <motion.div
            className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {service.painPoints.map((point, i) => (
              <motion.div
                key={i}
                className="rounded-lg border border-tb-border bg-graphite p-6"
                variants={fadeUp}
              >
                <p className="text-sm leading-relaxed text-silver">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The TB Approach */}
      <section className="bg-graphite py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.h2
            className="text-2xl font-light text-ivory md:text-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            The TRIANGLE BLACK Approach
          </motion.h2>
          <motion.p
            className="mt-3 text-silver"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            How we approach {service.name.toLowerCase()} in operating hotels
          </motion.p>

          <motion.div
            className="mt-12 space-y-0"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {service.approach.map((step, i) => {
              const Icon = approachIcons[i % approachIcons.length];
              return (
                <motion.div
                  key={step.title}
                  className="flex gap-6 border-t border-tb-border py-8 first:border-t-0"
                  variants={fadeUp}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold-muted text-gold md:h-14 md:w-14">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium text-gold">0{i + 1}</span>
                      <h3 className="text-lg font-medium text-ivory">{step.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-silver">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Scope of Services */}
      <section className="bg-obsidian py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.h2
            className="text-2xl font-light text-ivory md:text-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            Scope of Services
          </motion.h2>
          <motion.div
            className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {service.scope.map((item) => (
              <motion.div
                key={item}
                className="flex items-start gap-3 rounded-lg border border-tb-border bg-graphite p-4"
                variants={fadeUp}
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
                <span className="text-sm text-ivory">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Authority */}
      <section className="bg-steel py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.h2
            className="text-2xl font-light text-ivory md:text-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            Technical Authority
          </motion.h2>
          <motion.p
            className="mt-3 text-silver"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            We engineer to international brand specifications
          </motion.p>
          <motion.div
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {service.standards.map((std) => (
              <motion.div
                key={std}
                className="flex items-center gap-3 rounded-lg border border-gold/20 bg-obsidian p-4"
                variants={fadeUp}
              >
                <ShieldCheck className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
                <span className="text-sm font-medium text-ivory">{std}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="bg-obsidian py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.h2
            className="text-2xl font-light text-ivory md:text-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            Related Project
          </motion.h2>
          <motion.div
            className="mt-10 overflow-hidden rounded-lg border border-tb-border bg-graphite transition-colors duration-300 hover:border-gold/30"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="flex items-center justify-center bg-steel md:col-span-3 md:min-h-[300px]">
                <span className="text-sm text-ivory/20">{service.featuredProject.hotel}</span>
              </div>
              <div className="flex flex-col justify-center p-8 md:col-span-2 md:p-10">
                <span className="text-xs uppercase tracking-wider text-gold">{service.name}</span>
                <h3 className="mt-3 text-xl font-medium text-ivory">{service.featuredProject.title}</h3>
                <p className="mt-2 text-sm text-silver">{service.featuredProject.hotel}</p>
                <p className="mt-4 text-lg font-medium text-gold">{service.featuredProject.metric}</p>
                <Link
                  href="/projects"
                  className="gold-underline mt-6 inline-block w-fit text-sm font-medium text-gold"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-graphite py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-16 lg:px-20">
          <motion.h2
            className="text-2xl font-light text-ivory md:text-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div
            className="mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
          >
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-tb-border">
                  <AccordionTrigger className="text-left text-sm font-medium text-ivory hover:text-gold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-silver">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-obsidian py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.h2
            className="text-2xl font-light text-ivory md:text-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            Complete Engineering Partnership
          </motion.h2>
          <motion.div
            className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {related.map((rel) => (
              <motion.div key={rel.slug} variants={fadeUp}>
                <Link
                  href={`/services/${rel.slug}`}
                  className="group block rounded-lg border border-tb-border bg-graphite p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-smoke"
                >
                  <h3 className="text-base font-medium text-ivory">{rel.name}</h3>
                  <div className="mt-3 flex items-center gap-1 text-sm text-gold transition-transform duration-300 group-hover:translate-x-1">
                    <span>Learn more</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service CTA */}
      <section className="bg-graphite py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.h2
            className="text-3xl font-light text-ivory md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Have a {service.name.toLowerCase()} challenge?
          </motion.h2>
          <motion.p
            className="mt-4 text-silver"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Tell us about your project. We&rsquo;ll provide a preliminary assessment
            and respond within 2 hours.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
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
            <span className="text-xs text-ghost">We respond within 2 hours</span>
          </motion.div>
        </div>
      </section>
    </>
  );
}