import { type Metadata } from 'next';
import { ChevronRight, Clock, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const articlesData: Record<string, {
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorTitle: string;
  leadParagraph: string;
  sections: { heading: string; content: string; callout?: string }[];
}> = {
  'hvac-red-sea-climate': {
    title: 'Why Hotel HVAC Systems Fail in Red Sea Climate — And How to Prevent It',
    category: 'HVAC',
    readTime: '8 min',
    date: 'Jun 2025',
    author: 'TRIANGLE BLACK Engineering Team',
    authorTitle: 'Hospitality Engineering Specialists',
    leadParagraph: 'After servicing over 50 hotel HVAC systems across the Red Sea coast, we have identified the same failure patterns repeating across properties — regardless of brand, size, or equipment manufacturer. This article documents what we have learned and how we prevent these failures for our clients.',
    sections: [
      {
        heading: 'The Red Sea HVAC Challenge',
        content: 'The Red Sea coast presents what may be the most demanding HVAC environment in global hospitality. Summer ambient temperatures regularly exceed 45°C with relative humidity above 70%. Solar gain on south and west-facing facades can add 15-20°C to surface temperatures. Guest rooms, designed for comfort at 22-24°C, require cooling differentials of 20-25°C — a demand that pushes HVAC equipment to its engineering limits for sustained periods of 4-6 months per year.\n\nMost HVAC systems in the region were designed using standard ASHRAE climate data for zone 2B (hot-dry), which significantly underestimates the humidity and solar load conditions specific to the Red Sea coastal microclimate. This design gap is the root cause of the majority of HVAC performance failures we encounter.',
      },
      {
        heading: 'The Five Failure Patterns',
        content: 'Through our project portfolio, we have identified five recurring failure patterns that account for over 80% of hotel HVAC performance issues in the Red Sea region:\n\n1. Undersized chiller plants designed to standard climate data rather than site-specific conditions\n2. Inadequate condenser water treatment in coastal environments causing accelerated heat exchanger fouling\n3. Poor ductwork insulation and air leakage losing 15-25% of cooling capacity before it reaches guest rooms\n4. Incompatible control strategies that cannot maintain narrow brand-standard temperature tolerances during peak loads\n5. Deferred maintenance that compounds small efficiency losses into major capacity failures\n\nEach of these patterns is preventable with proper engineering, and each has a specific remediation approach that we have refined across multiple properties.',
        callout: 'Key Insight: 73% of the HVAC failures we have investigated in Red Sea hotels trace back to original design decisions — not equipment age or maintenance practices.',
      },
      {
        heading: 'Prevention Strategies',
        content: 'For new construction, the solution begins with site-specific thermal load analysis using Red Sea microclimate data rather than standard ASHRAE zone data. We typically specify chillers 15-20% above standard calculations for Red Sea coastal properties, which adds minimal capital cost but provides critical capacity headroom.\n\nFor existing properties, the most impactful intervention is typically a comprehensive system audit that identifies the specific failure pattern(s) affecting the property. We have found that addressing just the top two failure patterns — chiller capacity adequacy and condenser water treatment — can restore 80-90% of original system performance at a fraction of full replacement cost.\n\nPreventive maintenance programs designed for coastal conditions — including quarterly condenser cleaning, semi-annual coil treatment, and annual system balancing — consistently deliver 30-40% improvement in system longevity compared to standard maintenance schedules.',
      },
      {
        heading: 'The Brand Standard Factor',
        content: 'International hotel brands have very specific temperature and humidity tolerances that must be maintained in guest rooms. Marriott, for example, requires 22±1°C with relative humidity between 40-60%. These tolerances are significantly tighter than Egyptian building code requirements and are often beyond the capability of HVAC systems designed to minimum code standards.\n\nWhen a hotel brand conducts a standard audit and finds temperature excursions, the consequences can range from brand standard non-compliance notices to, in extreme cases, franchise agreement actions. We have seen properties face brand remediation requirements that cost 3-5x what proper HVAC engineering would have cost during construction.\n\nOur approach is to engineer HVAC systems to the tighter of brand standard requirements and site-specific climate conditions — whichever is more demanding. This dual-standard approach has eliminated brand standard HVAC non-compliance across our entire client portfolio.',
      },
    ],
  },
  'electrical-upgrades-egypt': {
    title: 'The Complete Guide to Hotel Electrical System Upgrades in Egypt',
    category: 'Electrical',
    readTime: '12 min',
    date: 'May 2025',
    author: 'TRIANGLE BLACK Engineering Team',
    authorTitle: 'Hospitality Engineering Specialists',
    leadParagraph: 'Hotel electrical infrastructure in Egypt faces a convergence of challenges: aging installations, evolving technology demands, updated brand standards, and increasing energy costs. This guide provides hotel Chief Engineers and General Managers with a comprehensive framework for planning, executing, and optimizing electrical system upgrades.',
    sections: [
      {
        heading: 'When to Upgrade',
        content: 'The decision to upgrade a hotel electrical system is driven by a combination of factors. The most common triggers we encounter include: persistent power quality issues affecting guest room technology, inability to support new brand standard requirements for in-room amenities, energy costs significantly above industry benchmarks, and upcoming renovation programs that require electrical infrastructure updates.\n\nA comprehensive electrical system audit is the essential first step. This audit should cover load analysis, transformer condition assessment, switchgear inspection, distribution system evaluation, and energy monitoring data review. The audit typically reveals that upgrading is less expensive and less disruptive than most hotel operators expect, with typical payback periods of 3-5 years through energy savings alone.',
      },
      {
        heading: 'Planning the Upgrade',
        content: 'Effective electrical upgrade planning requires understanding both the current state and the future requirements. We recommend a 10-year forward-looking approach that considers planned room renovations, F&B changes, technology upgrades, and potential capacity additions.\n\nThe most critical planning decision is whether to upgrade in phases or as a single project. For operating hotels, phased upgrades are almost always the preferred approach — they minimize disruption, spread capital expenditure, and allow the hotel to validate performance improvements before committing to subsequent phases.',
        callout: 'Planning Tip: Always include 20-25% spare capacity in your upgrade specifications. Hotel electrical loads consistently increase over time as new technology is added.',
      },
      {
        heading: 'Execution in Operating Hotels',
        content: 'Executing electrical upgrades in operating hotels requires careful planning around guest impact. Our methodology uses temporary power arrangements to maintain full service during switchovers, with each floor or zone typically experiencing less than 2 hours of planned power transfer.\n\nThe key to successful live-hotel electrical work is the temporary power plan. This plan must account for all loads on the affected circuits, including guest rooms, corridors, emergency lighting, fire alarm systems, and BMS connections. We develop dedicated temporary power distribution for each phase of the upgrade, ensuring that guest experience is never compromised.\n\nQuality verification during installation is critical. Every connection, every termination, and every piece of equipment must be tested and documented before energization. Our commissioning process includes earth fault loop impedance testing, insulation resistance testing, protective device coordination verification, and complete functional testing of all circuits and systems.',
      },
    ],
  },
};

const slugs = Object.keys(articlesData);

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const article = articlesData[slug];
    if (!article) return { title: 'Article Not Found' };
    return { title: `${article.title} — TRIANGLE BLACK`, description: article.leadParagraph.slice(0, 160) };
  });
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articlesData[slug];
  if (!article) return <div>Article not found</div>;

  const related = slugs.filter((s) => s !== slug).slice(0, 3).map((s) => ({ ...articlesData[s], slug: s }));

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-obsidian pt-24">
        <div className="mx-auto max-w-3xl px-6 md:px-16 lg:px-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-ghost uppercase tracking-wider">
            <Link href="/" className="hover:text-silver transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/intelligence" className="hover:text-silver transition-colors">Intelligence</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/intelligence/blog" className="hover:text-silver transition-colors">Blog</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-silver">{article.category}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <article className="bg-obsidian pb-20 pt-8 md:pb-28 md:pt-12">
        <div className="mx-auto max-w-3xl px-6 md:px-16 lg:px-20">
          <span className="text-xs uppercase tracking-wider text-gold">{article.category}</span>
          <h1 className="mt-4 text-3xl font-light text-ivory leading-tight md:text-4xl lg:text-5xl">{article.title}</h1>
          <div className="mt-6 flex items-center gap-6 text-xs text-ghost">
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{article.readTime} read</span>
            <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" />{article.author}</span>
            <span>{article.date}</span>
          </div>
        </div>
      </article>

      {/* Lead */}
      <section className="bg-obsidian pb-16">
        <div className="mx-auto max-w-3xl px-6 md:px-16 lg:px-20">
          <p className="text-xl text-ivory/80 leading-relaxed md:text-2xl">{article.leadParagraph}</p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Body */}
      <section className="bg-obsidian py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-16 lg:px-20">
          {article.sections.map((section, i) => (
            <div key={i} className={i > 0 ? 'mt-12' : ''}>
              <h2 className="text-xl font-medium text-ivory md:text-2xl">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-silver">
                {section.content.split('\n\n').map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
              </div>
              {section.callout && (
                <div className="mt-6 rounded-lg border border-gold/20 bg-gold-muted p-6">
                  <p className="text-sm font-medium text-gold">{section.callout}</p>
                </div>
              )}
            </div>
          ))}

          {/* Inline CTA */}
          <div className="mt-16 rounded-lg border border-tb-border bg-graphite p-8 text-center">
            <h3 className="text-lg font-medium text-ivory">Need expert guidance for your property?</h3>
            <p className="mt-2 text-sm text-silver">Our engineering team can provide a site-specific assessment tailored to your hotel.</p>
            <Link href="/contact" className="focus-gold mt-6 inline-flex h-11 items-center gap-2 bg-gold px-6 text-sm font-semibold text-obsidian transition-colors hover:bg-gold-light">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="bg-graphite py-12">
        <div className="mx-auto max-w-3xl px-6 md:px-16 lg:px-20 flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-steel">
            <span className="text-xs font-medium text-gold">TB</span>
          </div>
          <div>
            <p className="text-sm font-medium text-ivory">{article.author}</p>
            <p className="text-xs text-silver">{article.authorTitle}</p>
            <p className="mt-2 text-xs text-ghost">TRIANGLE BLACK is Egypt&apos;s premier hospitality engineering partnership, delivering world-class MEP, HVAC, and renovation services to 5-star hotels across the Red Sea region.</p>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-obsidian py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20">
          <h2 className="text-2xl font-light text-ivory">Related Articles</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/intelligence/blog/${r.slug}`} className="group block rounded-lg border border-tb-border bg-graphite p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30">
                <span className="text-xs uppercase tracking-wider text-gold">{r.category}</span>
                <h3 className="mt-2 text-base font-medium text-ivory leading-snug group-hover:text-gold transition-colors">{r.title}</h3>
                <p className="mt-2 text-sm text-silver line-clamp-2">{r.leadParagraph}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}