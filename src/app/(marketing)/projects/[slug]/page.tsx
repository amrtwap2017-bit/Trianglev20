import { type Metadata } from 'next';
import Link from 'next/link';
import ProjectDetailClient from './ProjectDetailClient';

const projectsData: Record<string, {
  title: string;
  hotel: string;
  location: string;
  category: string;
  metric: string;
  duration: string;
  scope: string;
  rooms: string;
  context: string;
  challenge: string;
  approach: string;
  outcome: string;
  quote: { text: string; name: string; title: string };
}> = {
  'climate-system-overhaul': {
    title: 'Complete Climate System Overhaul — Red Sea Resort',
    hotel: '5-Star International Resort',
    location: 'Sharm El-Sheikh',
    category: 'HVAC · Renovation',
    metric: '98% Occupancy Maintained',
    duration: '14 Weeks',
    scope: 'Full HVAC Replacement',
    rooms: '420 Rooms',
    context: 'A 420-room 5-star resort in Sharm El-Sheikh operating at peak capacity faced escalating guest comfort complaints. The original HVAC system, installed 12 years prior, could no longer maintain the narrow temperature tolerances required by the international brand standard. Summer peak loads regularly exceeded system capacity, resulting in guest room temperatures rising above 24°C despite the chiller plant operating at maximum output. The property needed a complete HVAC system replacement without any reduction in guest capacity or revenue.',
    challenge: 'The engineering challenge was exceptional in both scale and constraint. Replacing the entire chiller plant, AHU network, and guest room fan coil units in a 420-room property that operates at 95-98% occupancy during the 6-month summer season required military-grade planning precision. The existing plant room had spatial limitations that restricted equipment options. The coastal salt air environment had accelerated corrosion on the original system, requiring us to specify corrosion-resistant materials for the replacement. Additionally, the brand standard required specific temperature and humidity tolerances that the local climate made exceptionally demanding to achieve.',
    approach: 'We developed a phased replacement strategy that maintained 100% cooling capacity throughout. Phase 1 installed temporary cooling to cover the first chiller replacement. Phase 2 replaced the remaining chillers and upgraded the BMS controls. Phase 3 systematically replaced AHU units on a floor-by-floor basis during low-occupancy windows. Phase 4 installed new fan coil units in guest rooms using our rapid-swap protocol — each room completed in under 4 hours with zero noise impact on adjacent rooms. The entire project was managed through our dedicated site office with daily coordination meetings with the hotel engineering team.',
    outcome: 'The project was delivered 2 weeks ahead of the original 16-week schedule. During the entire replacement period, zero guest complaints related to temperature or noise were recorded. The new system achieved a 32% reduction in energy consumption compared to the previous installation, translating to approximately $180,000 in annual energy savings. Guest comfort scores improved by 15 points in the brand\'s post-stay survey. The system now maintains 22±1°C in all guest rooms even during peak August conditions when external temperatures exceed 45°C.',
    quote: { text: 'TRIANGLE BLACK delivered what three other firms told us was impossible — a full HVAC replacement in an operating resort with zero guest impact. The energy savings alone will pay for the project in under 3 years.', name: 'Ahmed Hassan', title: 'Chief Engineer, 5-Star Resort' },
  },
  'mep-new-build': {
    title: 'Full MEP New Build — Luxury Beach Resort',
    hotel: 'Luxury Beach Resort',
    location: 'Sharm El-Sheikh',
    category: 'MEP · Electrical',
    metric: '45,000 m² Delivered',
    duration: '18 Months',
    scope: 'Full MEP Scope',
    rooms: '350 Rooms',
    context: 'A newly developed luxury beach resort in Sharm El-Sheikh required complete MEP engineering, procurement, and installation across 45,000 square meters including 350 guest rooms, multiple F&B outlets, spa facilities, conference center, and extensive back-of-house areas. The project demanded integration with the architectural vision of a premium international brand while meeting the specific engineering standards required for the local coastal environment.',
    challenge: 'The sheer scale of the project required careful coordination across all MEP disciplines. The coastal location demanded enhanced corrosion protection for all exposed equipment and infrastructure. The brand standard required specific performance criteria for guest room acoustics, lighting levels, and climate control that exceeded typical Egyptian construction standards. The remote location created logistics challenges for material delivery and skilled labor availability.',
    approach: 'We deployed a dedicated MEP coordination team using BIM-based clash detection to eliminate spatial conflicts before installation began. A centralized procurement operation managed all material specifications, vendor qualification, and delivery scheduling. Our construction teams worked in carefully phased sequences, with dedicated quality engineers at every milestone. Weekly coordination meetings with the main contractor, architect, and brand representative ensured alignment throughout the 18-month program.',
    outcome: 'The project was completed on schedule and within 3% of the original budget — exceptional performance for a project of this scale. All brand standard requirements were met or exceeded on first inspection. The BIM coordination eliminated over 200 potential clashes that would have caused delays and rework in traditional construction. The MEP systems commissioning achieved first-pass success on all performance tests.',
    quote: { text: 'The MEP coordination was the best I have seen in 20 years of hotel development. TRIANGLE BLACK\'s approach prevented problems we did not even know we had.', name: 'International Brand Representative', title: 'Technical Director' },
  },
  'emergency-waterproofing': {
    title: 'Emergency Waterproofing Intervention',
    hotel: 'International Brand Hotel',
    location: 'Hurghada',
    category: 'Waterproofing',
    metric: 'Resolved in 72 Hours',
    duration: '72 Hours',
    scope: 'Emergency Remediation',
    rooms: '280 Rooms',
    context: 'A 280-room international brand hotel in Hurghada experienced sudden and severe water infiltration affecting 40 guest rooms across 4 floors. The water penetration was causing immediate damage to room finishes, creating potential mold risk, and generating escalating guest complaints that threatened the property\'s online reputation scores. The hotel management declared an engineering emergency.',
    challenge: 'The urgency of the situation required immediate response while maintaining guest operations. The source of the water infiltration was not immediately apparent — it could have originated from multiple potential failure points including roof membrane, plumbing systems, or exterior envelope. Working in an occupied hotel with guest movement through affected areas required careful containment and noise management. The brand standard required resolution within 5 days to prevent formal brand compliance action.',
    approach: 'Our emergency response team was on-site within 3 hours of the call. We immediately deployed thermal imaging and moisture mapping to identify the exact infiltration pathway — which traced to a combination of failed roof membrane at two locations and condensation from an improperly insulated plumbing chase. We established containment zones, deployed temporary protection for affected guest rooms, and mobilized our waterproofing team with materials pre-staged from our Sharm El-Sheikh depot. The repair was executed in 72 hours across three simultaneous work fronts.',
    outcome: 'All water infiltration was completely resolved within 72 hours — 3 days ahead of the brand compliance deadline. Affected guest rooms were restored to brand standard condition within 5 days total. The hotel received zero negative reviews related to the water issue. We subsequently developed and installed a comprehensive monitoring system and preventive maintenance protocol for the entire building envelope.',
    quote: { text: 'Within 3 hours they were on-site with a plan. Within 72 hours the problem was completely solved. That is not a contractor — that is a partner.', name: 'Sarah Mitchell', title: 'General Manager' },
  },
  'electrical-upgrade': {
    title: 'Electrical Infrastructure Upgrade',
    hotel: '5-Star City Hotel',
    location: 'Cairo',
    category: 'Electrical',
    metric: '40% Energy Reduction',
    duration: '10 Weeks',
    scope: 'Full Electrical Upgrade',
    rooms: '300 Rooms',
    context: 'A prestigious 5-star city hotel in Cairo needed to modernize its electrical infrastructure, which was originally installed 15 years prior. The existing system could not reliably support modern guest expectations for in-room technology, while energy consumption was significantly above contemporary benchmarks. The hotel also needed to upgrade fire alarm and emergency power systems to meet updated brand standards.',
    challenge: 'The hotel needed to remain fully operational during the upgrade. The existing electrical rooms had limited space for new equipment. Integration with the building management system required careful planning to avoid disrupting existing controls. The upgrade needed to comply with updated Egyptian electrical codes and the latest international hotel brand engineering standards simultaneously.',
    approach: 'We developed a phased upgrade plan that replaced electrical distribution floor by floor. Temporary power arrangements ensured zero interruption to guest rooms during switchovers. New energy-efficient transformers and intelligent power monitoring were installed in the main switch room. LED lighting retrofits were coordinated with interior design updates. The entire project was managed through our BIM coordination platform to ensure perfect spatial fit for all new equipment.',
    outcome: 'The upgraded electrical system achieved a 40% reduction in total energy consumption. Power reliability improved to 99.99% uptime. The new fire alarm system met all current brand standard requirements. Guest satisfaction scores for room technology and lighting quality improved by 22%. The energy savings alone are projected to deliver full ROI within 4 years.',
    quote: { text: 'The energy savings exceeded every projection. But what truly impressed us was the zero-impact execution — our guests never noticed a thing.', name: 'Michael Torres', title: 'Director of Engineering' },
  },
  'maintenance-program': {
    title: 'Preventive Maintenance Program',
    hotel: 'Resort Complex',
    location: 'Red Sea',
    category: 'Operational Support',
    metric: '35% Downtime Reduction',
    duration: 'Ongoing (24 months)',
    scope: 'Full Property AMC',
    rooms: '600 Rooms',
    context: 'A large resort complex with 600 rooms across multiple properties needed a comprehensive preventive maintenance program. The previous reactive approach had resulted in escalating repair costs, increasing guest complaints about equipment failures, and growing maintenance backlog that was creating operational risk across the property portfolio.',
    challenge: 'The scale of the property portfolio — 600 rooms across multiple buildings and facility types — required a systematic approach to maintenance planning. The engineering team needed training on preventive maintenance methodologies. Spare parts inventory was disorganized, causing delays in routine maintenance. No CMMS system was in place, making it impossible to track maintenance history or plan effectively.',
    approach: 'We began with a comprehensive engineering assessment of all building systems and equipment. From this baseline, we developed a tailored preventive maintenance program with task schedules, inspection checklists, and performance benchmarks. We deployed a CMMS system and trained the hotel engineering team on its use. A dedicated TRIANGLE BLACK maintenance coordinator was assigned to oversee program execution and provide weekly performance reports.',
    outcome: 'After 24 months, the maintenance program has achieved a 35% reduction in equipment downtime, a 45% reduction in emergency repair costs, and a 60% reduction in maintenance backlog. Guest complaints related to engineering issues have decreased by 70%. The property now has complete visibility into equipment condition and can plan capital replacements proactively rather than reactively.',
    quote: { text: 'Their preventive maintenance program reduced our emergency repair costs by 45% in the first year. That is not a vendor — that is a partner.', name: 'Operations Director', title: 'Resort Complex' },
  },
  'hotel-renovation-200-rooms': {
    title: 'Hotel Renovation — 200 Rooms',
    hotel: 'Beach Resort',
    location: 'Sharm El-Sheikh',
    category: 'Renovation',
    metric: 'Zero Guest Complaints',
    duration: '16 Weeks',
    scope: 'Full Guest Room Renovation',
    rooms: '200 Rooms',
    context: 'A 200-room beach resort in Sharm El-Sheikh required a complete guest room renovation to meet updated brand standards. The renovation included new bathrooms, updated MEP systems, new FF&E, and technology infrastructure upgrades. The hotel needed to maintain at least 70% occupancy throughout the renovation period to meet revenue targets.',
    challenge: 'Renovating 200 rooms while maintaining high occupancy required an extremely precise phasing strategy. Each room needed to be stripped, re-plumbed, re-wired, waterproofed, finished, and furnished within a tight 3-day turnaround per room. Noise, dust, and worker movement needed to be completely invisible to remaining guests. Brand standard inspection needed to pass on first attempt for every completed room.',
    approach: 'We divided the property into zones and developed a rolling renovation schedule that maintained a buffer of fully operational rooms at all times. Each room renovation followed our 72-hour rapid-turnaround protocol: Day 1 — strip and rough-in, Day 2 — MEP installation and waterproofing, Day 3 — finishes and FF&E installation. Acoustic barriers, HEPA filtration, and dedicated worker corridors ensured zero impact on guests. Daily quality inspections at each phase ensured first-pass brand compliance.',
    outcome: 'All 200 rooms were renovated in 16 weeks — 2 weeks ahead of schedule. Throughout the entire renovation period, zero guest complaints related to construction noise, dust, or disruption were recorded. The hotel maintained an average occupancy of 82% during the renovation period. All rooms passed brand standard inspection on first submission. The renovated rooms achieved a 25-point improvement in guest satisfaction scores.',
    quote: { text: 'Working with TRIANGLE BLACK on our full renovation was the smoothest engineering experience in my 20 years of hotel operations. Zero guest impact.', name: 'General Manager', title: 'Beach Resort' },
  },
  'procurement-ffe': {
    title: 'Technical Procurement — FF&E Program',
    hotel: 'International Hotel',
    location: 'El Gouna',
    category: 'Procurement',
    metric: '500+ Items Sourced',
    duration: '8 Weeks',
    scope: 'Complete FF&E Procurement',
    rooms: '180 Rooms',
    context: 'A newly renovated 180-room international hotel in El Gouna required complete FF&E procurement for the renovated spaces including guest rooms, public areas, and F&B outlets. The procurement needed to meet exact brand specifications while managing a complex supply chain involving over 500 individual items from multiple international manufacturers.',
    challenge: 'The brand specification required exact product matching from approved vendor lists, with zero tolerance for substitutes. Lead times varied significantly between items — from 2 weeks to 12 weeks — requiring sophisticated logistics planning. Import regulations and customs clearance for international shipments added complexity to the timeline. Quality verification was critical to ensure every item met specifications before installation.',
    approach: 'We assigned a dedicated procurement manager who developed a comprehensive procurement schedule aligned with the renovation phasing. Each item was tracked through a detailed logistics management system. We conducted pre-shipment quality inspections at manufacturer facilities and on-arrival verification at the project site. Just-in-time delivery coordination ensured materials arrived exactly when needed for installation, minimizing on-site storage requirements.',
    outcome: 'All 500+ items were procured and delivered on schedule, with 98% arriving within the planned delivery window. Zero items failed quality verification. The procurement management saved the project an estimated 12% compared to the client\'s initial budget through strategic vendor negotiation and logistics optimization. All items passed brand standard verification on first inspection.',
    quote: { text: 'Every single item matched the brand specification perfectly. The logistics coordination was flawless — materials arrived exactly when our installation teams needed them.', name: 'Procurement Director', title: 'International Hotel' },
  },
  'consultation-new-build': {
    title: 'Engineering Consultation — New Build',
    hotel: 'Mixed-Use Resort',
    location: 'North Coast',
    category: 'Consulting',
    metric: 'Complete Feasibility Delivered',
    duration: '6 Weeks',
    scope: 'Full Engineering Feasibility',
    rooms: '500 Rooms (Planned)',
    context: 'A real estate developer planning a 500-room mixed-use resort on Egypt\'s North Coast required comprehensive engineering feasibility analysis before committing to the project. The development included a hotel, residential units, retail spaces, and recreational facilities. The developer needed to understand the full scope of MEP infrastructure requirements, associated costs, and technical risks.',
    challenge: 'The mixed-use nature of the development created complex engineering requirements with different standards for hotel, residential, and commercial spaces. The North Coast location presented specific environmental challenges including coastal exposure, limited utility infrastructure, and seasonal demand patterns. The developer needed clear, actionable recommendations with confidence levels and risk assessments to support their investment decision.',
    approach: 'We conducted a thorough site assessment including geotechnical analysis, utility availability survey, and environmental impact assessment. Our engineering team developed detailed MEP concept designs with multiple options for each major system. Cost estimates were developed with 15% contingency and sensitivity analysis. A phased infrastructure development plan was created to align with the developer\'s planned construction schedule. The final report included over 200 pages of technical analysis and recommendations.',
    outcome: 'The feasibility report provided the developer with complete confidence to proceed with the project. Our recommendations identified $2.3M in potential cost savings through alternative system selections and phasing strategies. The concept MEP designs provided sufficient detail for the developer to proceed with detailed architectural design. The risk assessment identified 12 key technical risks with mitigation strategies for each.',
    quote: { text: 'The feasibility report was the most comprehensive engineering analysis we have ever received. It gave us complete confidence to proceed with a $50M investment.', name: 'Development Director', title: 'Real Estate Developer' },
  },
};

const projectSlugs = Object.keys(projectsData);

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = projectsData[slug];
    if (!project) return { title: 'Project Not Found' };
    return {
      title: `${project.title} — TRIANGLE BLACK`,
      description: project.context.slice(0, 160),
    };
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData[slug];
  if (!project) return <div>Project not found</div>;

  const related = projectSlugs.filter((s) => s !== slug).slice(0, 3).map((s) => ({
    ...projectsData[s],
    slug: s,
  }));

  return <ProjectDetailClient project={project} related={related} />;
}