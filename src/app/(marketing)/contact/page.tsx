'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, MessageCircle, Mail, MapPin, AlertTriangle, Clock, Check } from 'lucide-react';

const services = [
  'MEP Works', 'HVAC Systems', 'Electrical Systems', 'Plumbing Systems',
  'Waterproofing', 'Hotel Renovation', 'Technical Procurement', 'Engineering Consulting', 'Operational Support',
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '', company: '', jobTitle: '', email: '', phone: '', service: '', message: '', urgent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setFormState('success');
    } catch {
      setFormState('error');
    }
  };

  const inputClass = 'w-full rounded-sm border border-tb-border bg-steel px-4 py-3.5 text-sm text-ivory placeholder-ghost transition-colors focus:border-gold focus:outline-none';
  const labelClass = 'block text-xs font-medium uppercase tracking-wider text-silver mb-2';

  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <motion.p className="text-xs uppercase tracking-widest text-gold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>Contact</motion.p>
          <motion.h1 className="mt-4 text-4xl font-light text-ivory md:text-5xl lg:text-6xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
            Let&rsquo;s Discuss Your
            <br /><span className="text-gold">Engineering Challenge</span>
          </motion.h1>
          <motion.p className="mt-6 max-w-xl text-lg text-silver" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
            Tell us about your project. We&rsquo;ll respond within 2 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods + Form */}
      <section className="bg-obsidian pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Left: Methods */}
            <motion.div className="space-y-8" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
              <div className="rounded-lg border border-tb-border bg-graphite p-6">
                <h3 className="text-sm font-medium text-ivory">Three Ways to Reach Us</h3>
                <div className="mt-6 space-y-6">
                  <a href="https://wa.me/201000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-silver hover:text-gold transition-colors group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-muted text-gold">
                      <MessageCircle className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ivory group-hover:text-gold transition-colors">WhatsApp</p>
                      <p className="text-xs text-silver">+20 100 000 0000</p>
                    </div>
                  </a>
                  <a href="tel:+202069000000" className="flex items-center gap-4 text-silver hover:text-gold transition-colors group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-muted text-gold">
                      <Phone className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ivory group-hover:text-gold transition-colors">Phone</p>
                      <p className="text-xs text-silver">+20 69 000 0000</p>
                    </div>
                  </a>
                  <a href="mailto:engineering@triangleblack.com" className="flex items-center gap-4 text-silver hover:text-gold transition-colors group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-muted text-gold">
                      <Mail className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ivory group-hover:text-gold transition-colors">Email</p>
                      <p className="text-xs text-silver">engineering@triangleblack.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Office */}
              <div className="rounded-lg border border-tb-border bg-graphite p-6">
                <h3 className="text-sm font-medium text-ivory">Office</h3>
                <div className="mt-4 flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <p className="text-sm text-silver">Sharm El-Sheikh, South Sinai, Egypt</p>
                </div>
              </div>

              {/* Response time */}
              <div className="flex items-center gap-3 rounded-lg border border-gold/20 bg-gold-muted p-4">
                <Clock className="h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-medium text-ivory">We respond within 2 hours</p>
                  <p className="text-xs text-silver">Business hours: 8AM — 10PM EET, 7 days</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div className="lg:col-span-2" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={fadeUp}>
              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center rounded-lg border border-tb-success/30 bg-tb-success/5 p-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-tb-success/10">
                    <Check className="h-8 w-8 text-tb-success" />
                  </div>
                  <h3 className="mt-6 text-xl font-medium text-ivory">Message Received</h3>
                  <p className="mt-3 text-silver">We will respond within 2 hours. Check your email for a confirmation.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input type="text" required className={inputClass} placeholder="Your full name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div>
                      <label className={labelClass}>Company / Hotel *</label>
                      <input type="text" required className={inputClass} placeholder="Your company or hotel" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                    </div>
                    <div>
                      <label className={labelClass}>Job Title *</label>
                      <input type="text" required className={inputClass} placeholder="Your position" value={formData.jobTitle} onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })} />
                    </div>
                    <div>
                      <label className={labelClass}>Email *</label>
                      <input type="email" required className={inputClass} placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                    <div>
                      <label className={labelClass}>Phone / WhatsApp *</label>
                      <input type="tel" required className={inputClass} placeholder="+20 100 000 0000" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                    <div>
                      <label className={labelClass}>Service Interest</label>
                      <select className={inputClass} value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>
                        <option value="">Select a service</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>Project Description</label>
                    <textarea className={`${inputClass} min-h-[120px] resize-y`} placeholder="Tell us about your engineering challenge..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" id="urgent" className="h-4 w-4 rounded border-tb-border bg-steel text-gold focus:ring-gold" checked={formData.urgent} onChange={(e) => setFormData({ ...formData, urgent: e.target.checked })} />
                    <label htmlFor="urgent" className="text-sm text-silver">This is urgent and requires immediate attention</label>
                  </div>
                  <div className="flex items-center gap-4">
                    <button type="submit" disabled={formState === 'loading'} className="focus-gold inline-flex h-12 items-center gap-2 bg-gold px-8 font-semibold text-obsidian transition-colors hover:bg-gold-light disabled:opacity-60 md:h-[52px]">
                      {formState === 'loading' ? 'Sending...' : 'Send Message'}
                      <Send className="h-4 w-4" />
                    </button>
                    {formState === 'error' && <span className="text-sm text-tb-error">Something went wrong. Please try again or call us.</span>}
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="bg-graphite py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div className="rounded-lg border border-tb-error/30 bg-tb-error/5 p-8 md:p-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <AlertTriangle className="mx-auto h-10 w-10 text-tb-error" strokeWidth={1.5} />
            <h2 className="mt-4 text-xl font-medium text-ivory">24/7 Emergency Engineering Line</h2>
            <p className="mt-3 text-sm text-silver">For critical engineering failures requiring immediate response. Available 24 hours a day, 365 days a year.</p>
            <a href="tel:+202069000000" className="mt-6 inline-flex h-12 items-center gap-2 bg-tb-error px-8 font-semibold text-white transition-colors hover:opacity-90 md:h-[52px]">
              <Phone className="h-4 w-4" /> Call Emergency Line
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}