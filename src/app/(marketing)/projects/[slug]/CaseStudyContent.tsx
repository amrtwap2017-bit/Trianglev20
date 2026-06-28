'use client';

import { motion } from 'framer-motion';
import {
  Building2,
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Ruler,
  DoorOpen,
  TrendingUp,
  Quote,
  MapPin,
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

/* ─── Types ───────────────────────────────────────────────────────── */

interface Metric {
  icon: typeof Clock;
  label: string;
  value: string;
}

interface GalleryItem {
  caption: string;
}

interface CaseStudyData {
  slug: string;
  title: string;
  hotelName: string;
  location: string;
  categories: string[];
  metrics: Metric[];
  context: {
    type: string;
  } & Record<string, string>;
  challenge: string[];
  approach: string[];
  outcome: string[];
  clientQuote?: {
    text: string;
    name: string;
    title: string;
  };
  gallery: GalleryItem[];
  relatedSlugs: string[];
}

/* ─── Project Data ────────────────────────────────────────────────── */

const allProjects: CaseStudyData[] = [
  // ── 1. Climate System Overhaul (DETAILED) ──────────────────────
  {
    slug: 'climate-system-overhaul',
    title: 'Complete Climate System Overhaul',
    hotelName: '5-Star International Resort',
    location: 'Sharm El-Sheikh, South Sinai',
    categories: ['HVAC', 'Renovation'],
    metrics: [
      { icon: Clock, label: 'Duration', value: '14 Weeks' },
      { icon: Ruler, label: 'Scope', value: '400+ Rooms' },
      { icon: DoorOpen, label: 'Rooms', value: 'Zero Evacuations' },
      { icon: TrendingUp, label: 'Outcome', value: '98% Occupancy Maintained' },
    ],
    context: {
      type: 'Full-service 5-star beachfront resort with 420 rooms, 6 F&B outlets, 3 pools, and a 2,500 m² spa. Part of a major international hospitality brand with strict guest experience standards.',
      location: 'Naama Bay, Sharm El-Sheikh — a high-temperature, high-humidity coastal environment placing exceptional demands on HVAC systems year-round.',
      brandStandards: 'The brand mandates indoor temperatures between 22–24°C in all guest areas with noise levels below NC-30, regardless of ambient conditions exceeding 42°C.',
      reason:
        'The original chiller plant, installed 12 years prior, had reached end-of-life. Cooling capacity had degraded by 35%, guest comfort complaints had risen 4x in 18 months, and energy costs had increased by 28% year-over-year.',
    },
    challenge: [
      'Complete chiller plant replacement without evacuating a single guest room — the resort operates at 85–98% occupancy year-round.',
      'Existing ductwork ran through confined ceiling plenums shared with fire suppression and electrical trunking, leaving zero tolerance for error.',
      'The Red Sea coast\'s corrosive salt-laden atmosphere had degraded connections, requiring all new refrigerant piping and electrical terminations to meet enhanced corrosion-resistance specifications.',
      'Strict brand compliance required the new system to achieve NC-30 noise ratings in guest rooms while delivering 30% more cooling capacity.',
      'A 14-week window aligned with the low-occupancy shoulder season — any delay would push into peak season with severe revenue impact.',
    ],
    approach: [
      'Phased zone-by-zone replacement strategy: divided the resort into 8 thermal zones, replacing one zone at a time while temporary cooling units maintained guest comfort.',
      'Deployed 12 portable high-capacity spot coolers and a temporary chilled water loop to bridge each zone during switchover — each transition completed within 6 hours.',
      '3D BIM coordination of all ceiling plenums before any physical work began, resolving 47 clashes between HVAC, electrical, fire, and plumbing runs prior to installation.',
      'All refrigerant piping installed with Type 316L stainless steel and coated fittings rated for C5-M marine corrosion environments.',
      'Pre-commissioning functional performance testing (FPT) on every AHU, FCU, and VAV box before final connection, ensuring zero defects at handover.',
    ],
    outcome: [
      'Delivered 2 weeks ahead of the 14-week schedule. Zero guest room evacuations throughout the entire project duration.',
      'Guest comfort complaints related to HVAC dropped from 47 per month to 3 — a 94% reduction sustained over the first 6 months of operation.',
      'Energy consumption reduced by 22% compared to the previous system, saving the property approximately EGP 2.8M annually in utility costs.',
      'The new system achieved NC-25 average noise levels in guest rooms — exceeding the brand\'s NC-30 requirement by two acoustic grades.',
      '97% guest satisfaction score for room climate comfort in the post-project brand audit, up from 71% pre-project.',
    ],
    clientQuote: {
      text: 'TRIANGLE BLACK delivered what three other firms told us was impossible — a full chiller replacement without ever asking a guest to leave their room. Their planning was surgical.',
      name: 'Ahmed El-Masry',
      title: 'Director of Engineering, International Resort Group',
    },
    gallery: [
      { caption: 'New chiller plant installation — 4 × 500TR centrifugal chillers' },
      { caption: 'BIM coordination model showing HVAC routing through ceiling plenums' },
      { caption: 'Temporary cooling bridge system during Zone 5 switchover' },
      { caption: 'Commissioning team performing functional performance testing' },
      { caption: 'Completed AHU installation with acoustic insulation' },
      { caption: 'Post-project thermal imaging — uniform temperature distribution' },
    ],
    relatedSlugs: ['mep-new-build', 'hotel-renovation-200-rooms', 'electrical-upgrade'],
  },

  // ── 2. MEP New Build (DETAILED) ────────────────────────────────
  {
    slug: 'mep-new-build',
    title: 'Full MEP New Build',
    hotelName: 'Luxury Beach Resort',
    location: 'Sharm El-Sheikh, South Sinai',
    categories: ['MEP', 'Electrical'],
    metrics: [
      { icon: Clock, label: 'Duration', value: '18 Months' },
      { icon: Ruler, label: 'Scope', value: '45,000 m²' },
      { icon: DoorOpen, label: 'Rooms', value: '320 Keys' },
      { icon: TrendingUp, label: 'Outcome', value: 'On-Time Handover' },
    ],
    context: {
      type: 'Ground-up luxury beach resort development comprising 320 guest rooms, 8 villa suites, 5 restaurants, conference center, spa, and extensive landscape lighting.',
      location: 'Shark\'s Bay, Sharm El-Sheikh — a new development on a reclaimed coastal site requiring specialized foundation and infrastructure engineering.',
      brandStandards:
        'Designed to meet a top-tier international brand\'s design and engineering standards, with LEED Silver certification as a project requirement.',
      reason:
        'The developer selected TRIANGLE BLACK as the sole MEP contractor following a competitive tender, citing our track record in Red Sea hospitality environments and our in-house BIM capabilities.',
    },
    challenge: [
      '45,000 m² of built area across multiple building typologies — each with different HVAC load profiles, electrical demands, and plumbing specifications.',
      'Coastal site required all below-grade infrastructure to incorporate enhanced waterproofing, cathodic protection, and marine-grade material specifications.',
      'LEED Silver requirements demanded precise energy modeling, water reuse systems, and commissioning documentation across all MEP disciplines.',
      'Construction timeline ran through two summer seasons — requiring careful sequencing to protect partially installed systems from extreme heat and humidity.',
    ],
    approach: [
      'Full MEP design coordination using Autodesk Revit BIM models with weekly clash detection sessions, achieving 98% clash resolution before any on-site installation.',
      'Dedicated commissioning authority (CxA) team embedded within the project from design review through final acceptance, ensuring all LEED commissioning prerequisites were met.',
      'Modular MEP prefabrication for corridor risers and plant room skids, reducing on-site installation time by 25% and improving quality consistency.',
      'Integrated building management system (BMS) programmed and tested across all 12 subsystems before handover, with staff training delivered over 4 weeks.',
    ],
    outcome: [
      '45,000 m² of MEP infrastructure delivered on schedule and within 2% of the approved budget — exceptional for a project of this complexity in the region.',
      'LEED Silver certification achieved on first submission, with the project scoring above the category average in Energy & Atmosphere and Water Efficiency.',
      'The BMS integration reduced projected energy costs by 18% compared to the ASHRAE 90.1 baseline, saving an estimated EGP 3.5M per year.',
      'Zero MEP-related punch list items at practical completion — a first for the main contractor on this development.',
    ],
    clientQuote: {
      text: 'TRIANGLE BLACK didn\'t just install systems — they engineered an ecosystem. The BIM coordination alone saved us months of rework and millions in change orders.',
      name: 'Karim Hassan',
      title: 'Project Director, Red Sea Development Company',
    },
    gallery: [
      { caption: 'MEP rough-in progress — main corridor riser installation' },
      { caption: 'BIM coordination model — mechanical room layout' },
      { caption: 'Chiller plant room during final commissioning' },
      { caption: 'Electrical switchgear room — 4,000A main distribution' },
      { caption: 'Plumbing manifold installation — guest room wet walls' },
      { caption: 'Completed resort facade at dusk — lighting design' },
    ],
    relatedSlugs: ['climate-system-overhaul', 'consultation-new-build', 'procurement-ffe'],
  },

  // ── 3. Emergency Waterproofing (DETAILED) ──────────────────────
  {
    slug: 'emergency-waterproofing',
    title: 'Emergency Waterproofing Intervention',
    hotelName: 'International Brand Hotel',
    location: 'Hurghada, Red Sea',
    categories: ['Waterproofing'],
    metrics: [
      { icon: Clock, label: 'Duration', value: '72 Hours' },
      { icon: Ruler, label: 'Scope', value: '6 Floors Affected' },
      { icon: DoorOpen, label: 'Rooms', value: '84 Rooms Protected' },
      { icon: TrendingUp, label: 'Outcome', value: 'Full Containment' },
    ],
    context: {
      type: '430-room 5-star hotel on the Hurghada waterfront, part of a global hospitality brand with a flagship Red Sea property.',
      location: 'Hurghada Marina district — a high-water-table coastal zone with aggressive saline groundwater conditions.',
      brandStandards: 'Zero tolerance for water intrusion in guest areas. Brand standards mandate immediate remediation of any water-related issue within 24 hours of identification.',
      reason:
        'Severe water infiltration was discovered in 84 guest rooms across 6 floors following a period of unusually heavy rainfall combined with a failure in the original below-grade waterproofing membrane. Guest complaints surged overnight, and the brand\'s regional quality team issued a 72-hour remediation directive.',
    },
    challenge: [
      '72-hour deadline from the brand\'s regional office — failure to meet it would trigger a brand audit and potential de-flagging proceedings.',
      'Water intrusion was occurring through multiple failure points: the original membrane, construction joints, and penetrations around plumbing risers — requiring a comprehensive rather than patchwork solution.',
      '84 affected rooms needed to remain serviceable or be relocated within the same property, which was operating at 92% occupancy.',
      'The below-grade waterproofing failure had allowed saline groundwater to reach reinforcing steel in the parking structure, creating an urgent structural concern beyond the cosmetic water damage.',
    ],
    approach: [
      'Immediate deployment: mobilized a 28-person emergency crew within 4 hours of the initial call, arriving with a pre-packed emergency waterproofing kit including 600m² of crystalline waterproofing membrane, injection resins, and all necessary equipment.',
      'Rapid diagnostic phase (Hours 4–12): thermal imaging, moisture mapping, and core sampling to identify all active infiltration paths and assess structural impact.',
      'Two-phase containment strategy: Phase 1 (Hours 12–36) — stop active water intrusion using pressure-injected polyurethane resin and crystalline slurry applied to all identified breach points. Phase 2 (Hours 36–72) — permanent remediation with a dual-layer membrane system and structural reinforcement of affected parking level.',
      'Parallel room restoration: while waterproofing proceeded below, a separate team restored affected room finishes — replacing damaged drywall, repainting, and deep-cleaning soft furnishings — so rooms could return to service immediately upon waterproofing completion.',
    ],
    outcome: [
      'All active water intrusion halted within 18 hours — well under the 72-hour brand directive. Full remediation and room restoration completed in 68 hours.',
      'Zero rooms permanently taken out of service. 76 of 84 affected rooms returned to inventory within the 72-hour window; the remaining 8 required an additional 24 hours for structural drying.',
      'The brand\'s regional quality team conducted a follow-up inspection 30 days post-remediation and rated the response as "exemplary" — the highest possible classification.',
      'Structural assessment confirmed no long-term reinforcement damage. The new waterproofing system carries a 10-year manufacturer\'s warranty backed by TRIANGLE BLACK\'s own 5-year workmanship guarantee.',
    ],
    clientQuote: {
      text: 'They arrived with a plan and executed it with military precision. TRIANGLE BLACK turned a brand-critical emergency into a case study in crisis engineering. Our regional team now references this project as the standard.',
      name: 'Sarah Lindgren',
      title: 'Vice President of Technical Services, International Hotel Group',
    },
    gallery: [
      { caption: 'Thermal imaging scan identifying active infiltration paths' },
      { caption: 'Emergency crew deploying injection resin at floor joints' },
      { caption: 'Crystalline waterproofing application to parking structure ceiling' },
      { caption: 'Dual-layer membrane installation on affected exterior wall' },
      { caption: 'Room restoration — parallel track with waterproofing works' },
      { caption: 'Post-remediation moisture survey — all zones dry' },
    ],
    relatedSlugs: ['climate-system-overhaul', 'hotel-renovation-200-rooms', 'maintenance-program'],
  },

  // ── 4. Electrical Upgrade (SHORTER) ────────────────────────────
  {
    slug: 'electrical-upgrade',
    title: 'Electrical Infrastructure Upgrade',
    hotelName: '5-Star City Hotel',
    location: 'Cairo, Egypt',
    categories: ['Electrical'],
    metrics: [
      { icon: Clock, label: 'Duration', value: '10 Weeks' },
      { icon: Ruler, label: 'Scope', value: '28,000 m²' },
      { icon: DoorOpen, label: 'Rooms', value: '350 Keys' },
      { icon: TrendingUp, label: 'Outcome', value: '40% Energy Reduction' },
    ],
    context: {
      type: 'Full-service 5-star city hotel in downtown Cairo with 350 rooms, extensive banquet facilities, and a commercial retail podium.',
      location: 'Central Cairo — aging municipal power infrastructure with frequent voltage fluctuations and outages.',
      brandStandards: 'Requires N+1 redundancy on all critical power systems and UPS backup for all guest floors.',
      reason:
        'The hotel\'s original electrical infrastructure, installed 15 years prior, could no longer support modern guest room loads (smart TVs, multiple charging points, in-room control systems) and was causing regular power quality complaints.',
    },
    challenge: [
      'Complete main distribution board (MDB) and switchgear replacement while maintaining power to a fully operational 350-room hotel.',
      'Integration of new smart building controls with legacy BMS infrastructure without disrupting existing automation sequences.',
      'Cairo\'s municipal power grid required enhanced power conditioning equipment to meet the brand\'s voltage stability requirements.',
    ],
    approach: [
      'Temporary power distribution system installed to maintain full hotel operations during each phase of the main switchgear replacement.',
      'Modular switchgear approach: pre-assembled and tested off-site, minimizing hot-work time and reducing on-site installation from 6 weeks to 3 weeks.',
      'Power quality audit and comprehensive energy study conducted in weeks 1–3 to size the new distribution system and identify efficiency opportunities.',
    ],
    outcome: [
      'Energy consumption reduced by 40% through upgraded distribution efficiency, LED retrofit, and intelligent load management.',
      'Power quality complaints eliminated entirely — zero guest-reported electrical issues in the 6 months following handover.',
      'New infrastructure sized for 25% future expansion capacity, protecting the owner\'s investment for the next 15+ years.',
    ],
    gallery: [
      { caption: 'New main switchgear installation in the plant room' },
      { caption: 'Temporary power distribution during phased replacement' },
      { caption: 'Smart room control panel integration' },
      { caption: 'Power quality monitoring dashboard' },
    ],
    relatedSlugs: ['mep-new-build', 'climate-system-overhaul', 'consultation-new-build'],
  },

  // ── 5. Maintenance Program (SHORTER) ───────────────────────────
  {
    slug: 'maintenance-program',
    title: 'Preventive Maintenance Program',
    hotelName: 'Resort Complex',
    location: 'Red Sea, Egypt',
    categories: ['Support'],
    metrics: [
      { icon: Clock, label: 'Duration', value: 'Ongoing (2+ Years)' },
      { icon: Ruler, label: 'Scope', value: 'Entire Property' },
      { icon: DoorOpen, label: 'Rooms', value: '600+ Keys' },
      { icon: TrendingUp, label: 'Outcome', value: '35% Downtime Reduction' },
    ],
    context: {
      type: 'Large-scale resort complex with 600+ rooms, multiple pools, spa, water park, and extensive outdoor landscape systems.',
      location: 'Red Sea coast — harsh marine environment with extreme temperature cycling and salt air exposure.',
      brandStandards: 'Requires documented preventive maintenance schedules and audit-ready compliance records for all building systems.',
      reason:
        'The property had been operating under a reactive maintenance model, resulting in escalating equipment failures, increasing guest complaints, and spiraling emergency repair costs.',
    },
    challenge: [
      'Transitioning from a reactive to a preventive maintenance culture across a 250-person facilities team.',
      'Cataloguing and condition-assessing over 4,000 individual MEP assets across the property.',
      'Designing maintenance schedules that work within the hotel\'s occupancy patterns — never disrupting peak-period operations.',
    ],
    approach: [
      'Comprehensive asset audit: identified, tagged, and condition-rated all 4,200+ MEP assets using a custom CMMS integration.',
      'Developed risk-based maintenance prioritization — critical systems (chillers, fire pumps, main electrical) on weekly checks; non-critical on monthly/quarterly cycles.',
      'Embedded TRIANGLE BLACK maintenance engineers on-site permanently, providing day-to-day management, training, and quality oversight.',
    ],
    outcome: [
      'Equipment downtime reduced by 35% in the first year, with a further 10% improvement in year two.',
      'Emergency repair costs reduced by 52%, from EGP 4.2M annually to EGP 2.0M.',
      'Guest satisfaction scores for facilities and room maintenance improved from 3.2 to 4.6 out of 5.',
    ],
    gallery: [
      { caption: 'Asset tagging and condition assessment on chiller plant' },
      { caption: 'CMMS dashboard showing preventive maintenance schedule' },
      { caption: 'On-site team conducting scheduled AHU maintenance' },
      { caption: 'Training session with property facilities staff' },
    ],
    relatedSlugs: ['climate-system-overhaul', 'electrical-upgrade', 'emergency-waterproofing'],
  },

  // ── 6. Hotel Renovation 200 Rooms (SHORTER) ────────────────────
  {
    slug: 'hotel-renovation-200-rooms',
    title: 'Hotel Renovation — 200 Rooms',
    hotelName: 'Beach Resort',
    location: 'Sharm El-Sheikh, South Sinai',
    categories: ['Renovation'],
    metrics: [
      { icon: Clock, label: 'Duration', value: '16 Weeks' },
      { icon: Ruler, label: 'Scope', value: '200 Rooms' },
      { icon: DoorOpen, label: 'Phases', value: '4 Rotations' },
      { icon: TrendingUp, label: 'Outcome', value: 'Zero Guest Complaints' },
    ],
    context: {
      type: '200-room 4-star beachfront resort undergoing a full room renovation including complete MEP upgrade, new bathroom finishes, and smart room controls.',
      location: 'Sharm El-Sheikh — operating at 80%+ occupancy year-round, making traditional full-hotel closure renovation impossible.',
      brandStandards: 'Renovation must achieve brand\'s latest room design standard while maintaining existing guest service levels.',
      reason:
        'The property had not undergone a significant room renovation in 8 years and was falling behind the brand\'s updated design and technology standards.',
    },
    challenge: [
      'Full room strip-out and rebuild — including complete bathroom demolition, new plumbing, electrical rewiring, and HVAC replacement — in occupied hotel wings.',
      'Dust, noise, and vibration control to ensure zero impact on adjacent occupied rooms and public areas.',
      'Supply chain management for 200 rooms worth of FF&E, fixtures, and MEP materials with just-in-time delivery to minimize on-site storage.',
    ],
    approach: [
      '4-phase rotation plan: 50 rooms per phase, each phase completed in 3.5 weeks with a 1-week buffer between phases for deep cleaning and quality inspection.',
      'Temporary construction barriers with acoustic insulation and HEPA-filtered negative pressure to contain dust and noise within the active renovation zone.',
      'Dedicated logistics coordinator managing a 200-item procurement schedule with bi-weekly deliveries aligned to construction milestones.',
    ],
    outcome: [
      'Zero guest complaints related to renovation noise, dust, or disruption throughout the entire 16-week program.',
      'All 200 rooms completed to the brand\'s latest design standard, approved on first inspection with zero punch items.',
      'Project delivered 4 days ahead of the contracted schedule, allowing the hotel to return all rooms to revenue service before the peak season.',
    ],
    gallery: [
      { caption: 'Room strip-out phase — bathroom demolition' },
      { caption: 'New plumbing rough-in during reconstruction' },
      { caption: 'Completed room — final finish and staging' },
      { caption: 'Quality inspection with brand representative' },
    ],
    relatedSlugs: ['climate-system-overhaul', 'procurement-ffe', 'mep-new-build'],
  },

  // ── 7. Procurement FF&E (SHORTER) ──────────────────────────────
  {
    slug: 'procurement-ffe',
    title: 'Technical Procurement — FF&E',
    hotelName: 'International Hotel',
    location: 'El Gouna, Red Sea',
    categories: ['Procurement'],
    metrics: [
      { icon: Clock, label: 'Duration', value: '12 Weeks' },
      { icon: Ruler, label: 'Scope', value: '500+ Items' },
      { icon: DoorOpen, label: 'Suppliers', value: '38 Vendors' },
      { icon: TrendingUp, label: 'Outcome', value: '8% Under Budget' },
    ],
    context: {
      type: '250-room 5-star hotel in the El Gouna resort community undergoing a complete FF&E refresh as part of a brand repositioning.',
      location: 'El Gouna, Red Sea — a purpose-built resort town 25km north of Hurghada with limited local supply chain.',
      brandStandards: 'All FF&E items must meet brand-approved specifications for durability, fire rating, and aesthetic compliance.',
      reason:
        'The hotel was repositioning from a 4-star to a 5-star brand, requiring replacement of all furniture, fixtures, and equipment to meet the elevated brand standard.',
    },
    challenge: [
      '500+ individual item specifications across guest rooms, corridors, public areas, and back-of-house spaces.',
      'Sourcing from 38 different vendors across Europe, Asia, and Egypt with varying lead times and quality standards.',
      'Managing customs clearance and inland logistics for internationally sourced items to a remote Red Sea location.',
    ],
    approach: [
      'Detailed specification review and value engineering: identified 23 opportunities to specify locally available alternatives without compromising brand standards, reducing cost and lead time.',
      'Consolidated logistics hub in Cairo for receiving, quality-inspecting, and repacking all items before final delivery to El Gouna.',
      'Weekly vendor tracking with automated delay alerts and pre-identified alternate suppliers for every critical-path item.',
    ],
    outcome: [
      'All 500+ items procured, delivered, and installed within the 12-week program — not a single item arrived damaged or non-conforming.',
      'Total procurement cost came in 8% under the approved budget through strategic value engineering and competitive vendor negotiation.',
      'The brand\'s FF&E inspection at opening scored 97/100 — the highest first-open score in the brand\'s Egypt portfolio.',
    ],
    gallery: [
      { caption: 'Quality inspection at Cairo logistics hub' },
      { caption: 'FF&E staging and pre-assembly area' },
      { caption: 'Guest room furniture installation' },
      { caption: 'Final brand inspection walkthrough' },
    ],
    relatedSlugs: ['hotel-renovation-200-rooms', 'mep-new-build', 'consultation-new-build'],
  },

  // ── 8. Consultation New Build (SHORTER) ────────────────────────
  {
    slug: 'consultation-new-build',
    title: 'Engineering Consultation — New Build',
    hotelName: 'Mixed-Use Resort',
    location: 'North Coast, Egypt',
    categories: ['Consulting'],
    metrics: [
      { icon: Clock, label: 'Duration', value: '8 Weeks' },
      { icon: Ruler, label: 'Scope', value: 'Full Feasibility' },
      { icon: DoorOpen, label: 'Buildings', value: '12 Structures' },
      { icon: TrendingUp, label: 'Outcome', value: 'Complete Feasibility Delivered' },
    ],
    context: {
      type: 'Greenfield mixed-use resort development with 12 structures including a 200-room hotel, 40 branded residences, beach club, and wellness center.',
      location: 'North Coast, Mediterranean — a developing tourism corridor with limited existing utility infrastructure.',
      brandStandards: 'Designed to international hospitality standards with sustainability certification as a project goal.',
      reason:
        'The developer required an independent engineering feasibility study and MEP design review before committing to the full construction phase, having received conflicting technical advice from multiple consultants.',
    },
    challenge: [
      'Evaluating MEP feasibility for a greenfield site with no existing municipal utility connections — requiring assessment of independent power, water, and wastewater solutions.',
      'Providing independent review of the architect\'s and main consultant\'s MEP designs to identify risks, value-engineering opportunities, and compliance gaps.',
      'Delivering a comprehensive feasibility report within 8 weeks to meet the developer\'s investment committee deadline.',
    ],
    approach: [
      'Rapid site assessment: geotechnical survey, utility availability mapping, and environmental baseline study completed in the first 2 weeks.',
      'Parallel engineering review tracks: mechanical, electrical, and plumbing teams independently reviewed the existing design documentation against international hospitality standards.',
      'Financial modeling: developed detailed CAPEX and OPEX projections for all MEP scenarios, including ROI analysis for sustainability investments (solar PV, greywater recycling, heat recovery).',
    ],
    outcome: [
      'Comprehensive 120-page feasibility report delivered on schedule, covering MEP design review, utility strategy, risk assessment, and financial projections.',
      'Identified EGP 18M in potential CAPEX savings through 14 specific value-engineering recommendations without compromising guest experience or brand standards.',
      'Recommended independent solar PV and battery storage system projected to reduce grid energy dependency by 45% and achieve payback within 4.5 years.',
      'The developer\'s investment committee approved the project based on the TRIANGLE BLACK feasibility study, and subsequently appointed TRIANGLE BLACK as the MEP contractor for the construction phase.',
    ],
    gallery: [
      { caption: 'Site survey and geotechnical assessment' },
      { caption: 'MEP design review workshop with project stakeholders' },
      { caption: 'Utility infrastructure mapping — North Coast corridor' },
      { caption: 'Feasibility report presentation to investment committee' },
    ],
    relatedSlugs: ['mep-new-build', 'electrical-upgrade', 'procurement-ffe'],
  },
];

/* ─── Find project by slug ────────────────────────────────────────── */

function getProject(slug: string): CaseStudyData | undefined {
  return allProjects.find((p) => p.slug === slug);
}

function getRelatedProjects(slugs: string[]): CaseStudyData[] {
  return slugs
    .map((s) => allProjects.find((p) => p.slug === s))
    .filter((p): p is CaseStudyData => p !== undefined);
}

/* ─── Animation variants ──────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

/* ─── Case Study Content Component ────────────────────────────────── */

export default function CaseStudyContent({ slug }: { slug: string }) {
  const project = getProject(slug);

  if (!project) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen flex items-center justify-center bg-obsidian">
          <div className="text-center">
            <h1 className="text-2xl text-ivory">Project not found</h1>
            <a href="/projects" className="mt-4 inline-block text-gold gold-underline">
              Back to Projects
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const relatedProjects = getRelatedProjects(project.relatedSlugs);

  return (
    <>
      <Navigation />
      <main id="main-content" className="bg-obsidian min-h-screen pt-20 lg:pt-24">
        {/* ── Breadcrumb ─────────────────────────────────────────── */}
        <div className="border-b border-tb-border">
          <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20 py-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
              <a href="/projects" className="text-silver hover:text-gold transition-colors focus-gold flex items-center gap-1.5">
                <ArrowLeft className="h-3.5 w-3.5" />
                Projects
              </a>
              <span className="text-tb-border-light">/</span>
              <span className="text-ghost truncate max-w-xs">{project.title}</span>
            </nav>
          </div>
        </div>

        {/* ── Header Block ───────────────────────────────────────── */}
        <section className="border-b border-tb-border">
          <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20 py-12 md:py-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              {/* Categories */}
              <motion.div className="flex flex-wrap gap-2" variants={fadeUp}>
                {project.categories.map((cat) => (
                  <span
                    key={cat}
                    className="text-xs uppercase tracking-wider text-gold font-medium"
                  >
                    {cat}
                  </span>
                ))}
              </motion.div>

              {/* Title */}
              <motion.h1
                className="mt-4 text-3xl font-light text-ivory md:text-4xl lg:text-5xl leading-tight"
                variants={fadeUp}
              >
                {project.title}
              </motion.h1>

              {/* Hotel + Location */}
              <motion.div className="mt-3 flex items-center gap-4 text-silver" variants={fadeUp}>
                <span className="text-base">{project.hotelName}</span>
                <span className="text-tb-border-light">·</span>
                <span className="flex items-center gap-1.5 text-sm">
                  <MapPin className="h-3.5 w-3.5 text-gold" />
                  {project.location}
                </span>
              </motion.div>

              {/* Metrics Strip */}
              <motion.div
                className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
                variants={staggerContainer}
              >
                {project.metrics.map((metric) => (
                  <motion.div
                    key={metric.label}
                    className="rounded-lg border border-tb-border bg-steel/50 p-4"
                    variants={fadeUp}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <metric.icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                      <span className="text-xs uppercase tracking-wider text-ghost">{metric.label}</span>
                    </div>
                    <span className="text-lg font-medium text-ivory">{metric.value}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── Hero Image Placeholder ─────────────────────────────── */}
        <div className="border-b border-tb-border">
          <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20 py-12 md:py-16">
            <motion.div
              className="flex aspect-[21/9] items-center justify-center rounded-lg bg-steel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Building2 className="h-20 w-20 text-ivory/10" strokeWidth={1} />
            </motion.div>
          </div>
        </div>

        {/* ── The Context ────────────────────────────────────────── */}
        <section className="border-b border-tb-border">
          <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20 py-12 md:py-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              <motion.div className="flex items-center gap-3 mb-8" variants={fadeUp}>
                <div className="h-px flex-1 bg-tb-border" />
                <span className="text-xs uppercase tracking-widest text-gold font-medium">The Context</span>
                <div className="h-px flex-1 bg-tb-border" />
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {Object.entries(project.context).map(([key, value]) => (
                  <motion.div key={key} variants={fadeUp}>
                    <h3 className="text-sm font-medium text-gold uppercase tracking-wider mb-2">
                      {key === 'type' ? 'Property Type' : key === 'brandStandards' ? 'Brand Standards' : key === 'reason' ? 'Why This Project Existed' : 'Location'}
                    </h3>
                    <p className="text-sm text-silver leading-relaxed">{value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── The Engineering Challenge ──────────────────────────── */}
        <section className="border-b border-tb-border">
          <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20 py-12 md:py-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              <motion.div className="flex items-center gap-3 mb-8" variants={fadeUp}>
                <div className="h-px flex-1 bg-tb-border" />
                <span className="text-xs uppercase tracking-widest text-gold font-medium">The Engineering Challenge</span>
                <div className="h-px flex-1 bg-tb-border" />
              </motion.div>
              <div className="max-w-3xl mx-auto space-y-4">
                {project.challenge.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4"
                    variants={fadeUp}
                  >
                    <span className="shrink-0 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-tb-border text-xs text-gold">
                      {i + 1}
                    </span>
                    <p className="text-sm text-silver leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── TRIANGLE BLACK's Approach ──────────────────────────── */}
        <section className="border-b border-tb-border">
          <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20 py-12 md:py-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              <motion.div className="flex items-center gap-3 mb-8" variants={fadeUp}>
                <div className="h-px flex-1 bg-tb-border" />
                <span className="text-xs uppercase tracking-widest text-gold font-medium">TRIANGLE BLACK&apos;s Approach</span>
                <div className="h-px flex-1 bg-tb-border" />
              </motion.div>
              <div className="max-w-3xl mx-auto space-y-4">
                {project.approach.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4"
                    variants={fadeUp}
                  >
                    <span className="shrink-0 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-xs font-medium text-obsidian">
                      {i + 1}
                    </span>
                    <p className="text-sm text-silver leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── The Outcome ────────────────────────────────────────── */}
        <section className="border-b border-tb-border">
          <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20 py-12 md:py-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              <motion.div className="flex items-center gap-3 mb-8" variants={fadeUp}>
                <div className="h-px flex-1 bg-tb-border" />
                <span className="text-xs uppercase tracking-widest text-gold font-medium">The Outcome</span>
                <div className="h-px flex-1 bg-tb-border" />
              </motion.div>
              <div className="max-w-3xl mx-auto space-y-4">
                {project.outcome.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4"
                    variants={fadeUp}
                  >
                    <span className="shrink-0 mt-1 text-gold">✓</span>
                    <p className="text-sm text-ivory leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>

              {/* Client Quote */}
              {project.clientQuote && (
                <motion.div
                  className="mt-12 max-w-2xl mx-auto rounded-lg border border-tb-border bg-steel/30 p-8"
                  variants={fadeUp}
                >
                  <Quote className="h-6 w-6 text-gold/40 mb-4" strokeWidth={1.5} />
                  <blockquote className="text-base text-ivory/90 leading-relaxed italic">
                    &ldquo;{project.clientQuote.text}&rdquo;
                  </blockquote>
                  <div className="mt-4">
                    <p className="text-sm font-medium text-ivory">{project.clientQuote.name}</p>
                    <p className="text-xs text-silver mt-0.5">{project.clientQuote.title}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* ── Photography Gallery ────────────────────────────────── */}
        <section className="border-b border-tb-border">
          <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20 py-12 md:py-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              <motion.div className="flex items-center gap-3 mb-8" variants={fadeUp}>
                <div className="h-px flex-1 bg-tb-border" />
                <span className="text-xs uppercase tracking-widest text-gold font-medium">Project Gallery</span>
                <div className="h-px flex-1 bg-tb-border" />
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.gallery.map((item, i) => (
                  <motion.div
                    key={i}
                    className="group"
                    variants={fadeUp}
                  >
                    <div className="flex aspect-[4/3] items-center justify-center rounded-lg bg-steel border border-tb-border transition-colors duration-300 group-hover:border-gold/20">
                      <Building2 className="h-8 w-8 text-ivory/10" strokeWidth={1} />
                    </div>
                    <p className="mt-2 text-xs text-silver">{item.caption}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Related Projects ───────────────────────────────────── */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
            >
              <motion.div className="flex items-center gap-3 mb-8" variants={fadeUp}>
                <div className="h-px flex-1 bg-tb-border" />
                <span className="text-xs uppercase tracking-widest text-gold font-medium">Related Projects</span>
                <div className="h-px flex-1 bg-tb-border" />
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((related) => (
                  <motion.a
                    key={related.slug}
                    href={`/projects/${related.slug}`}
                    className="group block rounded-lg border border-tb-border bg-graphite p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30"
                    variants={fadeUp}
                  >
                    <div className="flex aspect-video items-center justify-center rounded bg-steel mb-4">
                      <Building2 className="h-8 w-8 text-ivory/10" strokeWidth={1} />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-gold">
                      {related.categories.join(' · ')}
                    </span>
                    <h3 className="mt-1.5 text-base font-medium text-ivory group-hover:text-gold-light transition-colors">
                      {related.title}
                    </h3>
                    <p className="mt-1 text-sm text-silver">{related.hotelName}, {related.location.split(',')[0]}</p>
                    <p className="mt-2 text-sm font-medium text-gold">{related.metrics[3].value}</p>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────── */}
        <section className="border-t border-tb-border">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-ivory leading-tight">
                Have a <span className="text-gold">similar project</span>?
              </h2>
              <p className="mt-4 text-silver">
                Let&apos;s discuss how TRIANGLE BLACK can deliver the same precision for your property.
              </p>
              <a
                href="/contact"
                className="focus-gold inline-flex h-12 items-center gap-2 rounded-none bg-gold px-6 font-semibold text-obsidian transition-colors hover:bg-gold-light md:h-[52px] md:px-8 mt-8"
              >
                Discuss Your Project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}