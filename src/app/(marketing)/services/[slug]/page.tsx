import { type Metadata } from 'next';
import Link from 'next/link';
import ServiceDetailClient from './ServiceDetailClient';

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
  featuredProject: {
    title: string;
    hotel: string;
    metric: string;
  };
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
}

const servicesData: Record<string, ServiceData> = {
  'mep-works': {
    name: 'MEP Works',
    slug: 'mep-works',
    headline: 'Integrated Mechanical, Electrical & Plumbing Engineering',
    description: 'Full-scope MEP design coordination and execution for luxury hotel environments. We deliver seamlessly integrated building systems that meet international brand standards while optimizing for the unique demands of Egyptian hospitality operations.',
    icon: 'Zap',
    painPoints: [
      'Disconnected mechanical, electrical, and plumbing systems that create coordination failures and costly rework during installation and commissioning phases',
      'Brand standard gaps where individual systems may function but fail to meet the integrated performance requirements of international hotel chains like Marriott, Hilton, or Accor',
      'Poor design coordination leading to spatial conflicts between ductwork, piping, and electrical conduit that compromise ceiling heights and aesthetic standards in guest areas',
    ],
    approach: [
      { title: 'Engineering Assessment', description: 'Comprehensive site survey and existing systems audit including load calculations, capacity analysis, and condition assessment of all MEP infrastructure.' },
      { title: 'Design Coordination', description: 'Multi-discipline BIM coordination to eliminate spatial conflicts, optimize routing, and ensure all systems integrate seamlessly within architectural constraints.' },
      { title: 'Integration Planning', description: 'Phased implementation plan that sequences mechanical, electrical, and plumbing work to minimize disruption and maintain construction timelines.' },
      { title: 'Execution & Installation', description: 'Skilled MEP teams install all systems to international specifications with real-time quality checkpoints at every milestone.' },
      { title: 'Commissioning', description: 'Full system commissioning including functional performance tests, integrated systems testing, and balance verification across all MEP disciplines.' },
      { title: 'Handover & Documentation', description: 'Complete as-built documentation, operation manuals, maintenance schedules, and staff training for seamless transition to hotel operations teams.' },
    ],
    scope: ['Mechanical system design & installation', 'Electrical power distribution', 'Plumbing & sanitary systems', 'Fire protection systems', 'BMS integration & controls', 'HVAC ductwork & piping', 'Energy management systems', 'Sustainability compliance'],
    standards: ['ASHRAE Standards', 'IEC Electrical Codes', 'NFPA Fire Protection', 'ISO 9001 Quality Management', 'International Hotel Brand Specifications'],
    featuredProject: { title: 'Full MEP New Build', hotel: 'Luxury Beach Resort, Sharm El-Sheikh', metric: '45,000 m² Delivered' },
    faqs: [
      { question: 'What makes MEP coordination critical for hotels?', answer: 'In luxury hotels, MEP systems must work as an integrated whole. A poorly coordinated chiller plant can affect electrical loads, which impacts fire suppression water pressure. Our coordination process ensures every system supports the others.' },
      { question: 'Do you work with international brand standards?', answer: 'Yes. We engineer to Marriott, Hilton, IHG, Accor, Four Seasons, and Kempinski brand specifications. Our team maintains updated brand standard documentation and assigns dedicated compliance engineers to every project.' },
      { question: 'Can you handle MEP for operating hotels?', answer: 'This is our specialty. We have developed protocols for live-hotel MEP work that include guest experience protection measures, noise management, phased execution, and 24/7 contingency coverage.' },
      { question: 'What is the typical timeline for an MEP project?', answer: 'Timelines vary significantly by scope. A guest room MEP refresh might take 4-6 weeks per floor. A full hotel MEP new build typically ranges from 8-18 months depending on scale and complexity.' },
      { question: 'Do you provide as-built documentation?', answer: 'Every TRIANGLE BLACK MEP project includes comprehensive as-built documentation including updated drawings, equipment specifications, warranty information, and maintenance protocols.' },
      { question: 'How do you handle MEP in existing buildings?', answer: 'We conduct detailed surveys using non-destructive testing methods, create 3D scans of existing infrastructure, and develop integration plans that work with the building\'s current structural and spatial constraints.' },
    ],
    relatedServices: ['hvac', 'electrical', 'plumbing'],
  },
  'hvac': {
    name: 'HVAC Systems',
    slug: 'hvac',
    headline: 'Climate Control Engineering for Luxury Guest Environments',
    description: 'From chiller plant design to guest room VRV systems, we engineer HVAC solutions that deliver precise comfort in the demanding Red Sea climate while minimizing energy consumption and operational costs.',
    icon: 'Thermometer',
    painPoints: [
      'Guest comfort complaints during peak summer months when outdated or undersized HVAC systems struggle to maintain consistent temperatures across 400+ room properties',
      'Escalating energy costs from aging chiller plants and poorly optimized air handling systems that consume far more power than modern equivalents, directly impacting hotel profitability',
      'Brand standard compliance failures where HVAC systems cannot maintain the narrow temperature and humidity tolerances required by international hotel chains for guest satisfaction ratings',
    ],
    approach: [
      { title: 'Thermal Load Analysis', description: 'Detailed heat load calculations accounting for Red Sea solar exposure, occupancy patterns, F&B operations, and peak summer conditions to right-size every component.' },
      { title: 'System Selection', description: 'Evaluation of chiller types (centrifugal, screw, scroll), VRV/VRF systems, and hybrid approaches based on hotel size, load profile, and operational requirements.' },
      { title: 'Duct Design & Routing', description: 'Engineered ductwork layouts that optimize air distribution, minimize noise transmission, and maintain architectural ceiling heights in guest-facing areas.' },
      { title: 'Installation & Piping', description: 'Precision installation of all HVAC equipment including chiller connections, refrigerant piping, condensate management, and BMS integration points.' },
      { title: 'Commissioning & Balancing', description: 'Full system commissioning including refrigerant charge verification, airflow balancing across all zones, control sequence testing, and performance benchmarking.' },
      { title: 'Optimization & Handover', description: 'Energy optimization tuning, control programming, staff training on system operation, and establishment of preventive maintenance protocols.' },
    ],
    scope: ['Chiller plant design & replacement', 'VRV/VRF system installation', 'Air handling unit (AHU) systems', 'Fan coil unit systems', 'BMS integration & controls', 'Energy recovery systems', 'Kitchen ventilation', 'Exhaust & fresh air systems'],
    standards: ['ASHRAE 15 (Refrigerant Safety)', 'ASHRAE 62.1 (Ventilation)', 'ASHRAE 90.1 (Energy Standard)', 'ISO 50001 (Energy Management)', 'Hotel Brand Climate Specifications'],
    featuredProject: { title: 'Complete Climate System Overhaul', hotel: '5-Star Resort, Sharm El-Sheikh', metric: '98% Occupancy Maintained' },
    faqs: [
      { question: 'How do you size HVAC for Red Sea climate conditions?', answer: 'We perform detailed thermal load analysis using ASHRAE methodology with Red Sea-specific climate data, accounting for solar gain, humidity, and peak summer conditions that can exceed 45°C with high humidity.' },
      { question: 'Can you replace chiller plants in operating hotels?', answer: 'Yes — this is one of our core capabilities. We use phased replacement strategies that maintain cooling capacity throughout the project, typically achieving zero guest impact through temporary cooling solutions and careful sequencing.' },
      { question: 'What HVAC brands do you work with?', answer: 'We work with all major HVAC manufacturers including Carrier, Trane, Daikin, York, and LG. We specify based on project requirements, brand standard compliance, and long-term maintainability in the Egyptian market.' },
      { question: 'How much energy savings can a new HVAC system deliver?', answer: 'Modern chiller systems typically deliver 25-40% energy savings compared to systems installed 10-15 years ago. We provide detailed energy modeling before any project to project exact savings for your property.' },
      { question: 'Do you provide BMS integration?', answer: 'Yes. All our HVAC installations include full BMS integration with monitoring, control, and alarm capabilities. We work with all major BMS platforms including Honeywell, Siemens, and Johnson Controls.' },
    ],
    relatedServices: ['mep-works', 'electrical', 'operational-support'],
  },
  'electrical': {
    name: 'Electrical Systems',
    slug: 'electrical',
    headline: 'Power Distribution & Emergency Infrastructure for Hotels',
    description: 'Comprehensive electrical engineering from main distribution design to emergency power systems, lighting infrastructure, and low-voltage systems — all built to the reliability standards that luxury hospitality demands.',
    icon: 'CircuitBoard',
    painPoints: [
      'Power reliability concerns where electrical infrastructure cannot handle peak demand from kitchen operations, HVAC systems, and guest amenities simultaneously without voltage fluctuations',
      'Safety compliance gaps in emergency power systems, fire alarm integration, and life safety electrical systems that may not meet international hotel brand requirements or Egyptian electrical codes',
      'Lighting quality issues where poorly designed lighting systems fail to create the ambiance that luxury guests expect while consuming excessive energy and requiring frequent maintenance',
    ],
    approach: [
      { title: 'Load Audit & Analysis', description: 'Comprehensive electrical load audit covering all hotel systems including HVAC, lighting, kitchen, F&B, guest rooms, and back-of-house operations.' },
      { title: 'Distribution Design', description: 'Engineered power distribution systems with proper redundancy, fault protection, and load balancing to ensure reliable power delivery to every area of the hotel.' },
      { title: 'Emergency Systems', description: 'Design and installation of emergency power systems including generator sizing, ATS integration, UPS systems for critical loads, and life safety power requirements.' },
      { title: 'Installation & Testing', description: 'Professional installation with comprehensive testing including earth fault loop impedance, insulation resistance, and protective device coordination studies.' },
      { title: 'Lighting Systems', description: 'Architectural lighting design that balances ambiance, energy efficiency, and maintainability using LED technology and intelligent control systems.' },
      { title: 'Handover & Training', description: 'Complete single-line diagrams, panel schedules, and operation training for hotel engineering teams to safely maintain and operate all electrical systems.' },
    ],
    scope: ['Main distribution boards', 'Emergency generator systems', 'UPS & critical power', 'Lighting design & installation', 'Fire alarm systems', 'Data & communication cabling', 'Security system wiring', 'Energy monitoring systems'],
    standards: ['IEC 60364 (Electrical Installations)', 'NFPA 70 (National Electrical Code)', 'NFPA 72 (Fire Alarm)', 'ISO 45001 (Safety Management)', 'Egyptian Electrical Code'],
    featuredProject: { title: 'Electrical Infrastructure Upgrade', hotel: '5-Star City Hotel, Cairo', metric: '40% Energy Reduction' },
    faqs: [
      { question: 'Do you handle generator systems for hotels?', answer: 'Yes. We design and install complete emergency power systems including generator sizing, automatic transfer switches, fuel storage, and load management systems that ensure seamless power continuity during outages.' },
      { question: 'Can you upgrade electrical systems in operating hotels?', answer: 'Absolutely. We specialize in live-environment electrical upgrades using phased approaches, temporary power solutions, and careful scheduling to maintain guest services throughout the project.' },
    ],
    relatedServices: ['mep-works', 'hvac', 'operational-support'],
  },
  'plumbing': {
    name: 'Plumbing Systems',
    slug: 'plumbing',
    headline: 'Water Supply, Drainage & Fire Protection Engineering',
    description: 'From hot water generation and distribution to sanitary drainage systems and fire suppression infrastructure — engineered for the continuous demand of luxury hotel operations in water-scarce environments.',
    icon: 'Droplets',
    painPoints: [
      'Water supply inconsistency where aging infrastructure fails to deliver adequate pressure and temperature to all guest rooms simultaneously during peak morning and evening demand periods',
      'Drainage and sanitation failures that cause unpleasant odors, blockages, and potential health code violations — particularly damaging in coastal environments with high water tables',
      'Fire protection compliance gaps where outdated suppression systems may not meet current international codes or insurance requirements for high-occupancy hospitality properties',
    ],
    approach: [
      { title: 'System Audit', description: 'Complete water system assessment including flow rates, pressure mapping, water quality testing, and drainage capacity evaluation.' },
      { title: 'Design Engineering', description: 'Engineered plumbing systems sized for peak hotel demand with proper redundancy, water treatment integration, and energy-efficient hot water generation.' },
      { title: 'Pipe Sizing & Routing', description: 'Precise pipe sizing calculations and routing that minimize pressure drop, ensure balanced distribution, and maintain architectural standards.' },
      { title: 'Installation', description: 'Professional installation using approved materials with hydrostatic testing, disinfection, and comprehensive quality verification at every stage.' },
      { title: 'Fire Protection', description: 'Complete fire suppression system installation including wet/dry risers, sprinkler systems, hose reel stations, and fire pump integration.' },
      { title: 'Commissioning', description: 'System commissioning including flow testing, pressure verification, temperature calibration, water quality verification, and complete documentation.' },
    ],
    scope: ['Hot water generation & distribution', 'Cold water supply systems', 'Sanitary drainage', 'Rainwater drainage', 'Fire suppression systems', 'Water treatment plants', 'Greywater recycling', 'Swimming pool plumbing'],
    standards: ['IPC (International Plumbing Code)', 'NFPA 13 (Sprinkler Systems)', 'WHO Water Quality Standards', 'ISO 14001 (Environmental Management)', 'Egyptian Plumbing Codes'],
    featuredProject: { title: 'Preventive Maintenance Program', hotel: 'Resort Complex, Red Sea', metric: '35% Downtime Reduction' },
    faqs: [
      { question: 'How do you handle water scarcity in hotel plumbing design?', answer: 'We incorporate water-efficient fixtures, greywater recycling systems, and smart irrigation management. Our designs typically reduce water consumption by 30-40% compared to conventional hotel plumbing systems.' },
      { question: 'Do you install fire suppression systems?', answer: 'Yes. We are qualified to design and install complete fire suppression systems including wet and dry sprinkler systems, fire hose reels, fire pumps, and associated alarm and monitoring systems.' },
    ],
    relatedServices: ['mep-works', 'waterproofing', 'hvac'],
  },
  'waterproofing': {
    name: 'Waterproofing',
    slug: 'waterproofing',
    headline: 'Structural Water Protection for Coastal Hotel Environments',
    description: 'Specialized waterproofing solutions designed for the unique challenges of Red Sea coastal construction — high humidity, salt spray, and extreme temperature cycling that accelerate material degradation.',
    icon: 'Shield',
    painPoints: [
      'Persistent water infiltration causing structural damage, mold growth, and guest room deterioration that leads to costly emergency repairs and negative guest reviews in coastal hotel properties',
      'Premature waterproofing failure from using generic solutions not engineered for the specific challenges of saltwater exposure, UV degradation, and thermal cycling in desert-coastal climates',
      'Compliance issues with international hotel brand standards that require specific waterproofing performance criteria for bathrooms, wet areas, and building envelopes in luxury properties',
    ],
    approach: [
      { title: 'Moisture Assessment', description: 'Comprehensive moisture mapping using thermal imaging, moisture meters, and structural analysis to identify all water ingress points and vulnerability areas.' },
      { title: 'Surface Preparation', description: 'Meticulous surface preparation including crack repair, substrate treatment, and surface profiling to ensure maximum adhesion and long-term performance.' },
      { title: 'System Application', description: 'Application of engineered waterproofing systems using manufacturer-approved methods with quality checkpoints at every layer.' },
      { title: 'Quality Testing', description: 'Flood testing, electronic leak detection, and adhesion testing to verify complete waterproofing integrity before any finishing work begins.' },
      { title: 'Protection & Finishing', description: 'Installation of protective layers, drainage systems, and coordination with finishing trades to ensure waterproofing systems remain intact during construction.' },
      { title: 'Warranty & Monitoring', description: 'Extended warranty programs with periodic inspection schedules to catch and address any issues before they become problems.' },
    ],
    scope: ['Bathroom waterproofing', 'Roof waterproofing', 'Foundation protection', 'Pool deck waterproofing', 'Balcony & terrace systems', 'Below-grade waterproofing', 'Planter box lining', 'Expansion joint sealing'],
    standards: ['ASTM International Standards', 'ISO 11600 (Sealants)', 'ACI Guide to Waterproofing', 'Manufacturer Specifications', 'International Hotel Brand Standards'],
    featuredProject: { title: 'Emergency Waterproofing Intervention', hotel: 'International Brand Hotel, Hurghada', metric: 'Resolved in 72 Hours' },
    faqs: [
      { question: 'Why is waterproofing different in coastal Egypt?', answer: 'The Red Sea coast presents unique challenges: high salt content in air and water accelerates material degradation, extreme temperature cycling causes thermal stress on waterproofing membranes, and high humidity creates constant moisture pressure on building envelopes.' },
      { question: 'How long does hotel waterproofing last?', answer: 'With proper engineering and quality installation, our waterproofing systems are designed for 15-25 year service life. We include periodic inspection programs to identify and address any degradation before failures occur.' },
    ],
    relatedServices: ['plumbing', 'hotel-renovation', 'mep-works'],
  },
  'hotel-renovation': {
    name: 'Hotel Renovation',
    slug: 'hotel-renovation',
    headline: 'Turnkey Renovation While Maintaining Full Operations',
    description: 'We have perfected the art of renovating luxury hotels while they remain open. Our zero-downtime protocols, guest experience protection measures, and phased execution methodologies deliver brand-transformation results without revenue interruption.',
    icon: 'Hammer',
    painPoints: [
      'Guest disruption and negative reviews during renovation work that damages online reputation scores and directly impacts revenue through booking cancellations and reduced occupancy rates',
      'Budget overruns caused by poor scoping, unexpected conditions in aging buildings, and inadequate planning that turn planned renovations into costly emergency projects',
      'Brand standard compliance gaps where renovation work fails to meet updated brand specifications for room layouts, bathroom fixtures, lighting, and technology infrastructure requirements',
    ],
    approach: [
      { title: 'Master Planning', description: 'Detailed renovation master plan including phasing strategy, guest protection measures, logistics planning, and brand standard requirement mapping for the entire property.' },
      { title: 'Phasing Strategy', description: 'Intelligent zone-based phasing that maximizes rooms in service, minimizes construction impact on guests, and maintains revenue generation throughout the project.' },
      { title: 'Guest Protection', description: 'Comprehensive guest experience protection including noise management, dust containment, temporary facilities, and communication protocols that maintain guest satisfaction.' },
      { title: 'Execution', description: 'Skilled renovation teams executing demolition, MEP modifications, finishes, and FF&E installation with military precision and real-time quality management.' },
      { title: 'FF&E Installation', description: 'Professional furniture, fixtures, and equipment installation including procurement coordination, assembly, quality inspection, and room staging to brand standards.' },
      { title: 'Reveal & Handover', description: 'Systematic room and area reveal process including deep cleaning, final inspection, punch list completion, and operational handover to hotel teams.' },
    ],
    scope: ['Guest room renovation', 'Public area refresh', 'F&B outlet renovation', 'Spa & wellness areas', 'Back-of-house upgrades', 'FF&E procurement & installation', 'Soft goods replacement', 'Technology infrastructure updates'],
    standards: ['International Hotel Brand Renovation Standards', 'LEED/ESTIDAMA Guidelines', 'Local Building Codes', 'Fire & Life Safety Codes', 'ADA/Accessibility Compliance'],
    featuredProject: { title: 'Hotel Renovation — 200 Rooms', hotel: 'Beach Resort, Sharm El-Sheikh', metric: 'Zero Guest Complaints' },
    faqs: [
      { question: 'Can you really renovate while the hotel is open?', answer: 'Yes. We have developed proprietary protocols specifically for live-hotel renovation. Our track record includes multiple 200+ room renovations completed with zero guest relocation requirements and maintained occupancy above 85%.' },
      { question: 'How do you handle noise during renovation?', answer: 'We use comprehensive noise management including acoustic barriers, scheduled work windows, vibration monitoring, and real-time noise level tracking. We establish quiet hours that align with guest sleep patterns.' },
    ],
    relatedServices: ['mep-works', 'electrical', 'procurement'],
  },
  'procurement': {
    name: 'Technical Procurement',
    slug: 'procurement',
    headline: 'Equipment Sourcing & Specification Management',
    description: 'Strategic procurement of engineered materials and equipment specifically for hotel environments. We ensure every item meets brand specifications, performs reliably in local conditions, and arrives on schedule.',
    icon: 'Package',
    painPoints: [
      'Specification mismatch where procured equipment does not meet international hotel brand requirements, leading to costly replacements, project delays, and potential brand standard audit failures',
      'Supply chain uncertainty with long lead times, customs clearance delays, and quality inconsistencies from vendors unfamiliar with the exacting standards of luxury hospitality environments',
      'Counterfeit or substandard materials entering the supply chain that compromise system performance, safety compliance, and long-term reliability of critical hotel engineering infrastructure',
    ],
    approach: [
      { title: 'Specification Review', description: 'Detailed review of all project specifications, brand standard requirements, and local condition factors to develop precise procurement documentation.' },
      { title: 'Vendor Selection', description: 'Evaluation and qualification of vendors based on product quality, brand approvals, delivery capability, after-sales support, and track record in hospitality projects.' },
      { title: 'Order Management', description: 'Professional purchase order management including specification verification, pricing negotiation, delivery scheduling, and progress tracking.' },
      { title: 'Logistics Coordination', description: 'End-to-end logistics management including shipping, customs clearance, warehousing, and just-in-time delivery to project sites.' },
      { title: 'Quality Inspection', description: 'Pre-delivery and on-site quality inspection to verify all materials and equipment meet specifications before installation begins.' },
      { title: 'Installation Support', description: 'Technical support during installation including manufacturer coordination, warranty registration, and commissioning assistance.' },
    ],
    scope: ['MEP equipment procurement', 'Brand-approved material sourcing', 'FF&E specification matching', 'Quality verification & testing', 'Customs & logistics management', 'Vendor qualification', 'Warranty management', 'Spare parts inventory'],
    standards: ['ISO 9001 (Quality Management)', 'International Hotel Brand Vendor Lists', 'CE/UL Product Certifications', 'Local Import Regulations', 'Sustainability Standards'],
    featuredProject: { title: 'Technical Procurement — FF&E', hotel: 'International Hotel, El Gouna', metric: '500+ Items Sourced' },
    faqs: [
      { question: 'Do you work with specific equipment brands?', answer: 'We work with all major MEP and hotel equipment manufacturers. Our primary focus is ensuring every item meets the specific brand standards and project requirements, regardless of manufacturer.' },
      { question: 'How do you ensure quality in procurement?', answer: 'Every procurement goes through our 5-step quality process: specification verification, vendor qualification, pre-shipment inspection, on-site verification, and commissioning support.' },
    ],
    relatedServices: ['mep-works', 'consulting', 'hotel-renovation'],
  },
  'consulting': {
    name: 'Engineering Consulting',
    slug: 'consulting',
    headline: 'Strategic Engineering Advisory & Feasibility Studies',
    description: 'Expert engineering consultancy that helps hotel owners, developers, and operators make informed decisions about their most significant capital investments in building infrastructure.',
    icon: 'FileSearch',
    painPoints: [
      'Uninformed capital expenditure decisions based on incomplete engineering assessments that lead to undersized systems, costly change orders, and suboptimal long-term performance',
      'Budget surprises during construction when engineering complexities that should have been identified during planning emerge as costly change orders and project delays',
      'Compliance gaps with international hotel brand engineering standards that may not be discovered until brand standard audits, potentially requiring expensive remediation work',
    ],
    approach: [
      { title: 'Discovery & Brief', description: 'Comprehensive discovery process including stakeholder interviews, document review, site assessment, and requirements definition.' },
      { title: 'Technical Analysis', description: 'In-depth engineering analysis of existing conditions, system performance, code compliance, and brand standard alignment.' },
      { title: 'Recommendations', description: 'Clear, prioritized recommendations with cost-benefit analysis, risk assessment, and implementation timelines for each finding.' },
      { title: 'Strategic Planning', description: 'Long-term engineering strategy including CAPEX planning, phased investment roadmaps, and technology upgrade pathways.' },
      { title: 'Implementation Support', description: 'Ongoing advisory support during project execution including design review, contractor evaluation, and quality oversight.' },
      { title: 'Review & Optimization', description: 'Post-implementation review to verify outcomes, identify optimization opportunities, and update strategic plans.' },
    ],
    scope: ['Feasibility studies', 'Engineering system audits', 'CAPEX planning & budgeting', 'Brand compliance review', 'Energy audits', 'Due diligence for acquisitions', 'Expert witness services', 'Technical specification development'],
    standards: ['ASHRAE Guidelines', 'International Building Codes', 'Hotel Brand Engineering Standards', 'RICS Valuation Standards', 'PMI Project Management'],
    featuredProject: { title: 'Engineering Consultation — New Build', hotel: 'Mixed-Use Resort, North Coast', metric: 'Complete Feasibility Delivered' },
    faqs: [
      { question: 'What types of consulting do you provide?', answer: 'We provide feasibility studies, engineering system audits, CAPEX planning, brand compliance reviews, energy audits, and acquisition due diligence. Each engagement is tailored to the specific decision being made.' },
      { question: 'Do you work with hotel developers?', answer: 'Yes. We regularly advise hotel developers, asset owners, and investment groups on engineering aspects of new builds, acquisitions, and major renovation projects across Egypt.' },
    ],
    relatedServices: ['mep-works', 'hvac', 'procurement'],
  },
  'operational-support': {
    name: 'Operational Support',
    slug: 'operational-support',
    headline: '24/7 Emergency Response & Annual Maintenance Programs',
    description: 'Ongoing engineering partnership that keeps your hotel running perfectly. From preventive maintenance programs to emergency response, we provide the continuous technical support that operating hotels need.',
    icon: 'Headphones',
    painPoints: [
      'Unexpected equipment failures that disrupt guest experience, cause negative reviews, and require expensive emergency repairs that could have been prevented with proper maintenance programs',
      'Maintenance backlog accumulation where deferred maintenance on MEP systems creates compounding problems that eventually require major capital expenditure rather than routine service',
      'Rising energy costs from poorly maintained equipment that operates below design efficiency, wasting thousands of dollars monthly on preventable energy consumption',
    ],
    approach: [
      { title: 'Engineering Assessment', description: 'Comprehensive assessment of all building systems, current maintenance practices, equipment condition, and performance benchmarks.' },
      { title: 'Program Design', description: 'Custom maintenance program design including preventive schedules, inspection checklists, spare parts planning, and performance KPIs.' },
      { title: 'Team Deployment', description: 'Dedicated engineering team assignment with specialized skills matched to your hotel\'s specific equipment and brand requirements.' },
      { title: 'Implementation', description: 'Structured program rollout including baseline data collection, system tagging, CMMS setup, and team onboarding.' },
      { title: 'Monitoring & Optimization', description: 'Continuous performance monitoring with monthly reporting, trend analysis, and proactive recommendations for system optimization.' },
      { title: 'Reporting & Review', description: 'Regular management reports including maintenance KPIs, cost analysis, energy performance, and strategic recommendations.' },
    ],
    scope: ['Preventive maintenance programs', '24/7 emergency response', 'Annual maintenance contracts', 'Energy management', 'Indoor air quality', 'Water treatment', 'Equipment lifecycle planning', 'Staff training programs'],
    standards: ['ISO 55001 (Asset Management)', 'ASHRAE Maintenance Standards', 'NFPA Equipment Maintenance', 'Hotel Brand Maintenance Requirements', 'OSHA Safety Standards'],
    featuredProject: { title: 'Preventive Maintenance Program', hotel: 'Resort Complex, Red Sea', metric: '35% Downtime Reduction' },
    faqs: [
      { question: 'What is your emergency response time?', answer: 'Our emergency response team is available 24/7/365. For clients on our AMC program, we commit to on-site response within 2 hours for critical issues and 4 hours for non-critical requests in the Sharm El-Sheikh area.' },
      { question: 'How do preventive maintenance programs reduce costs?', answer: 'Our programs typically reduce emergency repair costs by 30-45% and extend equipment life by 20-30%. Preventive maintenance is consistently 3-5x less expensive than reactive repair.' },
    ],
    relatedServices: ['hvac', 'electrical', 'plumbing'],
  },
};

const serviceSlugs = Object.keys(servicesData);

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  // For static generation, metadata is resolved at build time
  return params.then(({ slug }) => {
    const service = servicesData[slug];
    if (!service) return { title: 'Service Not Found' };
    return {
      title: `${service.name} — TRIANGLE BLACK | Hospitality Engineering Egypt`,
      description: service.description.slice(0, 160),
      openGraph: { title: `${service.name} — TRIANGLE BLACK`, description: service.description.slice(0, 160) },
    };
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return <div>Service not found</div>;

  return <ServiceDetailClient service={service} allServices={servicesData} />;
}