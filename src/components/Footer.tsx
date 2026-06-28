'use client'

import {
  MapPin,
  Phone,
  Mail,
  PhoneCall,
  MessageCircle,
} from 'lucide-react'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

const services = [
  'MEP Works',
  'HVAC Systems',
  'Electrical Systems',
  'Plumbing Systems',
  'Waterproofing',
  'Hotel Renovation',
  'Technical Procurement',
  'Engineering Consulting',
  'Operational Support',
]

const companyLinks = [
  { label: 'About TRIANGLE BLACK', href: '/about' },
  { label: 'Our Process', href: '/about' },
  { label: 'Leadership Team', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
]

const intelligenceLinks = [
  { label: 'Engineering Blog', href: '/intelligence/blog' },
  { label: 'Technical Guides', href: '/intelligence' },
  { label: 'Calculators', href: '/intelligence' },
  { label: 'Egypt Hotel Report', href: '/intelligence' },
]

export default function Footer() {
  return (
    <footer
      className="bg-graphite border-t border-tb-border"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 — Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <polygon points="10,0 20,18 0,18" fill="#C9A96E" />
              </svg>
              <span className="text-ivory text-base font-semibold tracking-wide">
                TRIANGLE BLACK
              </span>
            </div>
            <p className="text-xs text-silver mt-3 leading-relaxed max-w-[260px]">
              Egypt&rsquo;s Premier Hospitality Engineering Partner
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver hover:text-gold transition-colors"
                aria-label="Follow TRIANGLE BLACK on LinkedIn"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            </div>
            <p className="text-xs text-ghost mt-4">ISO 9001 Certified</p>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="text-xs font-semibold text-ivory tracking-wider uppercase mb-4">
              Services
            </h3>
            <nav aria-label="Services">
              <ul className="space-y-0">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="/services"
                      className="block py-1.5 text-sm text-silver hover:text-gold transition-colors focus-gold rounded-sm"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3 — Company & Intelligence */}
          <div>
            <h3 className="text-xs font-semibold text-ivory tracking-wider uppercase mb-4">
              Company
            </h3>
            <nav aria-label="Company">
              <ul className="space-y-0">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="block py-1.5 text-sm text-silver hover:text-gold transition-colors focus-gold rounded-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <h3 className="text-xs font-semibold text-ivory tracking-wider uppercase mt-6 mb-4">
              Intelligence
            </h3>
            <nav aria-label="Intelligence">
              <ul className="space-y-0">
                {intelligenceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="block py-1.5 text-sm text-silver hover:text-gold transition-colors focus-gold rounded-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-xs font-semibold text-ivory tracking-wider uppercase mb-4">
              Get in Touch
            </h3>
            <address className="not-italic space-y-3">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-sm text-silver">
                  Sharm El-Sheikh, South Sinai, Egypt
                </span>
              </div>

              {/* Phone */}
              <a
                href="tel:+20690000000"
                className="flex items-center gap-2.5 text-sm text-silver hover:text-gold transition-colors focus-gold rounded-sm"
              >
                <Phone className="h-4 w-4 text-gold shrink-0" aria-hidden="true" />
                <span>+20 69 XXX XXXX</span>
              </a>

              {/* Email */}
              <a
                href="mailto:engineering@triangleblack.com"
                className="flex items-center gap-2.5 text-sm text-silver hover:text-gold transition-colors focus-gold rounded-sm"
              >
                <Mail className="h-4 w-4 text-gold shrink-0" aria-hidden="true" />
                <span>engineering@triangleblack.com</span>
              </a>
            </address>

            {/* Emergency Line */}
            <div className="mt-5 pt-5 border-t border-tb-border">
              <a
                href="tel:+20690000000"
                className="flex items-center gap-2.5 text-sm font-medium text-tb-error hover:text-tb-error/80 transition-colors focus-gold rounded-sm"
              >
                <PhoneCall className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>24/7 Emergency Line</span>
              </a>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-3">
              <a
                href="https://wa.me/20690000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm font-medium text-gold hover:text-gold-light transition-colors focus-gold rounded-sm"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-tb-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-ghost">
              &copy; 2025 TRIANGLE BLACK. All rights reserved.
            </p>
            <nav aria-label="Legal" className="flex items-center gap-5">
              <a
                href="#privacy"
                className="text-xs text-ghost hover:text-silver transition-colors focus-gold rounded-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-xs text-ghost hover:text-silver transition-colors focus-gold rounded-sm"
              >
                Terms of Service
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}