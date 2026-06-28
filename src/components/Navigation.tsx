'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Phone,
  Mail,
  MessageCircle,
  Wrench,
  Wind,
  Zap,
  Droplets,
  ShieldCheck,
  Building2,
  Package,
  Compass,
  Headphones,
  FileText,
  BookOpen,
  Library,
  Calculator,
  BarChart3,
  Database,
  Building,
  GitBranch,
  Users,
  Award,
  Briefcase,
  type LucideIcon,
} from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

interface MenuItem {
  label: string;
  description: string;
  icon: LucideIcon;
  href?: string;
}

interface NavDropdown {
  label: string;
  href: string;
  items: MenuItem[];
}

const servicesItems: MenuItem[] = [
  { label: 'MEP Works', description: 'Integrated mechanical, electrical & plumbing systems', icon: Wrench, href: '/services/mep-works' },
  { label: 'HVAC Systems', description: 'Climate control for luxury guest environments', icon: Wind, href: '/services/hvac' },
  { label: 'Electrical Systems', description: 'Power distribution & low-voltage infrastructure', icon: Zap, href: '/services/electrical' },
  { label: 'Plumbing Systems', description: 'Water supply, drainage & sanitary engineering', icon: Droplets, href: '/services/plumbing' },
  { label: 'Waterproofing', description: 'Structural water protection & moisture barriers', icon: ShieldCheck, href: '/services/waterproofing' },
  { label: 'Hotel Renovation', description: 'Turnkey renovation while maintaining operations', icon: Building2, href: '/services/hotel-renovation' },
  { label: 'Technical Procurement', description: 'Sourcing & specification of engineered materials', icon: Package, href: '/services/procurement' },
  { label: 'Engineering Consulting', description: 'Strategic technical advisory & feasibility studies', icon: Compass, href: '/services/consulting' },
  { label: 'Operational Support', description: 'Ongoing maintenance & 24/7 technical assistance', icon: Headphones, href: '/services/operational-support' },
];

const intelligenceItems: MenuItem[] = [
  { label: 'Engineering Blog', description: 'Insights from our project sites & engineering teams', icon: FileText, href: '/intelligence/blog' },
  { label: 'Technical Guides', description: 'In-depth resources for hospitality engineering', icon: BookOpen, href: '/intelligence' },
  { label: 'Specification Library', description: 'Curated specs for hotel MEP systems', icon: Library, href: '/intelligence' },
  { label: 'Engineering Calculators', description: 'Load, sizing & energy estimation tools', icon: Calculator, href: '/intelligence' },
  { label: 'Egypt Hotel Report', description: 'Market analysis & sector performance data', icon: BarChart3, href: '/intelligence' },
  { label: 'Industry Data', description: 'Benchmarking metrics & compliance standards', icon: Database, href: '/intelligence' },
];

const companyItems: MenuItem[] = [
  { label: 'About TRIANGLE BLACK', description: 'Our mission, vision & engineering heritage', icon: Building, href: '/about' },
  { label: 'Our Process', description: 'How we deliver precision at every phase', icon: GitBranch, href: '/about' },
  { label: 'Leadership Team', description: 'The engineers & executives behind the brand', icon: Users, href: '/about' },
  { label: 'Certifications', description: 'ISO, safety & industry accreditations', icon: Award, href: '/about' },
  { label: 'Careers', description: 'Join Egypt\'s top hospitality engineering team', icon: Briefcase, href: '/careers' },
];

const dropdowns: NavDropdown[] = [
  { label: 'Services', href: '/services', items: servicesItems },
  { label: 'Intelligence', href: '/intelligence', items: intelligenceItems },
  { label: 'Company', href: '/about', items: companyItems },
];

// ─── Triangle Logo Icon ─────────────────────────────────────────────────────

function TriangleLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <polygon points="12,2 22,20 2,20" fill="#C9A96E" />
    </svg>
  );
}

// ─── Desktop Dropdown ───────────────────────────────────────────────────────

function DesktopDropdown({
  dropdown,
  isOpen,
}: {
  dropdown: NavDropdown;
  isOpen: boolean;
}) {
  const cols =
    dropdown.items.length <= 5 ? 1 : dropdown.items.length <= 6 ? 2 : 3;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[min(680px,92vw)] z-50"
        >
          <div className="nav-glass rounded-xl border border-tb-border shadow-2xl shadow-black/40 p-5">
            <div className={`grid gap-1 ${cols === 3 ? 'grid-cols-3' : cols === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
              {dropdown.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-start gap-3.5 rounded-lg px-3 py-2.5 -mx-1 transition-colors duration-150 hover:bg-white/[0.04] focus-visible:bg-white/[0.04] focus-visible:outline-none focus-gold"
                  aria-label={item.label}
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gold-muted text-gold transition-colors duration-150 group-hover:bg-gold/20">
                    <item.icon size={16} strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-ivory transition-colors duration-150 group-hover:text-gold-light">
                      {item.label}
                    </div>
                    <div className="mt-0.5 text-xs leading-relaxed text-ghost line-clamp-2">
                      {item.description}
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-tb-border">
              <a
                href={dropdown.href}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-gold transition-colors duration-150 hover:text-gold-light focus-visible:outline-none focus-gold"
              >
                View all {dropdown.label.toLowerCase()}
                <ArrowRight size={12} strokeWidth={2} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Mobile Accordion Section ───────────────────────────────────────────────

function MobileAccordionSection({ dropdown }: { dropdown: NavDropdown }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-tb-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors duration-150 hover:bg-white/[0.02] focus-visible:outline-none focus-gold"
        aria-expanded={isOpen}
        aria-controls={`mobile-accordion-${dropdown.label.toLowerCase()}`}
      >
        <span className="text-[15px] font-medium text-ivory">
          {dropdown.label}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-ghost"
        >
          <ChevronDown size={18} strokeWidth={1.5} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`mobile-accordion-${dropdown.label.toLowerCase()}`}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-3">
              {dropdown.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3.5 px-6 py-2.5 transition-colors duration-150 hover:bg-white/[0.03] focus-visible:outline-none focus-gold"
                  aria-label={item.label}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gold-muted text-gold">
                    <item.icon size={14} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-ivory">
                      {item.label}
                    </div>
                    <div className="text-xs text-ghost mt-0.5">
                      {item.description}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Navigation Component ──────────────────────────────────────────────

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // ── Scroll detection ──
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Lock body scroll when mobile menu open ──
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // ── Close mobile menu on Escape ──
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  // ── Desktop dropdown hover handlers ──
  const handleDropdownEnter = useCallback((label: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 120);
  }, []);

  const handleDropdownItemEnter = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  }, []);

  const handleDropdownItemLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 120);
  }, []);

  return (
    <>
      <header
        ref={navRef}
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          scrolled
            ? 'nav-glass border-b border-tb-border shadow-lg shadow-black/20'
            : 'border-b border-transparent'
        }`}
      >
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="mx-auto flex h-16 items-center justify-between px-5 sm:px-6 lg:h-20 lg:px-8 xl:px-10"
        >
          {/* ── Logo ── */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-gold rounded-md"
            aria-label="TRIANGLE BLACK — Home"
          >
            <TriangleLogo className="transition-transform duration-200 group-hover:scale-110" />
            <span className="text-[15px] font-semibold tracking-[0.12em] text-ivory uppercase">
              Triangle Black
            </span>
          </a>

          {/* ── Desktop Links ── */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {dropdowns.map((dropdown) => {
              const isActive = activeDropdown === dropdown.label;
              return (
                <div
                  key={dropdown.label}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(dropdown.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <a
                    href={dropdown.href}
                    className={`inline-flex items-center gap-1 rounded-md px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors duration-150 focus-visible:outline-none focus-gold ${
                      isActive
                        ? 'text-ivory'
                        : 'text-silver hover:text-ivory'
                    }`}
                    aria-haspopup="true"
                    aria-expanded={isActive}
                    aria-label={`${dropdown.label} menu`}
                    onClick={(e) => {
                      // Allow normal anchor navigation
                      setActiveDropdown(null);
                    }}
                  >
                    {dropdown.label}
                    <motion.span
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={14} strokeWidth={1.5} />
                    </motion.span>
                  </a>
                  <div
                    onMouseEnter={handleDropdownItemEnter}
                    onMouseLeave={handleDropdownItemLeave}
                  >
                    <DesktopDropdown
                      dropdown={dropdown}
                      isOpen={isActive}
                    />
                  </div>
                </div>
              );
            })}

            {/* Projects — simple link */}
            <a
              href="/projects"
              className="inline-flex items-center rounded-md px-3.5 py-2 text-[13px] font-medium tracking-wide text-silver transition-colors duration-150 hover:text-ivory focus-visible:outline-none focus-gold"
            >
              Projects
            </a>
          </div>

          {/* ── Desktop CTA + Mobile Toggle ── */}
          <div className="flex items-center gap-3">
            <a
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-[13px] font-semibold tracking-wide text-obsidian transition-all duration-200 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/10 active:bg-gold-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
            >
              Discuss a Project
              <ArrowRight size={14} strokeWidth={2.5} />
            </a>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden relative flex h-10 w-10 items-center justify-center rounded-md text-ivory transition-colors hover:bg-white/[0.06] focus-visible:outline-none focus-gold"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative w-5 h-5">
                <motion.span
                  animate={
                    mobileOpen
                      ? { rotate: 45, y: 6 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-0 block h-[1.5px] w-5 rounded-full bg-current"
                />
                <motion.span
                  animate={
                    mobileOpen
                      ? { opacity: 0, scaleX: 0 }
                      : { opacity: 1, scaleX: 1 }
                  }
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-[9px] block h-[1.5px] w-5 rounded-full bg-current origin-center"
                />
                <motion.span
                  animate={
                    mobileOpen
                      ? { rotate: -45, y: -6 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-[18px] block h-[1.5px] w-5 rounded-full bg-current"
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 flex w-[85vw] max-w-sm flex-col bg-graphite border-l border-tb-border lg:hidden"
            >
              {/* Header */}
              <div className="flex h-16 items-center justify-between px-6 border-b border-tb-border shrink-0">
                <a
                  href="#"
                  className="flex items-center gap-2 focus-visible:outline-none focus-gold rounded-md"
                  aria-label="TRIANGLE BLACK — Home"
                  onClick={() => setMobileOpen(false)}
                >
                  <TriangleLogo />
                  <span className="text-[13px] font-semibold tracking-[0.12em] text-ivory uppercase">
                    Triangle Black
                  </span>
                </a>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-md text-silver transition-colors hover:bg-white/[0.06] hover:text-ivory focus-visible:outline-none focus-gold"
                  aria-label="Close menu"
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>

              {/* Scrollable links */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                {/* Direct link: Projects */}
                <a
                  href="/projects"
                  className="flex items-center px-6 py-4 text-[15px] font-medium text-ivory border-b border-tb-border transition-colors hover:bg-white/[0.02] focus-visible:outline-none focus-gold"
                  onClick={() => setMobileOpen(false)}
                >
                  Projects
                </a>

                {/* Dropdown accordions */}
                {dropdowns.map((dropdown) => (
                  <MobileAccordionSection key={dropdown.label} dropdown={dropdown} />
                ))}

                {/* Mobile CTA */}
                <div className="px-6 py-5 border-b border-tb-border">
                  <a
                    href="/contact"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 text-[14px] font-semibold tracking-wide text-obsidian transition-all duration-200 hover:bg-gold-light active:bg-gold-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    onClick={() => setMobileOpen(false)}
                  >
                    Discuss a Project
                    <ArrowRight size={15} strokeWidth={2.5} />
                  </a>
                </div>
              </div>

              {/* Bottom contact bar */}
              <div className="shrink-0 border-t border-tb-border bg-obsidian/50 px-6 py-4">
                <div className="flex items-center justify-around">
                  <a
                    href="https://wa.me/201000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1.5 text-ghost transition-colors hover:text-gold focus-visible:outline-none focus-gold"
                    aria-label="Contact on WhatsApp"
                  >
                    <MessageCircle size={20} strokeWidth={1.5} />
                    <span className="text-[10px] font-medium tracking-wide uppercase">
                      WhatsApp
                    </span>
                  </a>
                  <a
                    href="tel:+201000000000"
                    className="flex flex-col items-center gap-1.5 text-ghost transition-colors hover:text-gold focus-visible:outline-none focus-gold"
                    aria-label="Call us"
                  >
                    <Phone size={20} strokeWidth={1.5} />
                    <span className="text-[10px] font-medium tracking-wide uppercase">
                      Call
                    </span>
                  </a>
                  <a
                    href="mailto:info@triangleblack.com"
                    className="flex flex-col items-center gap-1.5 text-ghost transition-colors hover:text-gold focus-visible:outline-none focus-gold"
                    aria-label="Email us"
                  >
                    <Mail size={20} strokeWidth={1.5} />
                    <span className="text-[10px] font-medium tracking-wide uppercase">
                      Contact
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}