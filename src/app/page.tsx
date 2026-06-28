'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import SocialProofBar from '@/components/sections/SocialProofBar';
import PositioningStatement from '@/components/sections/PositioningStatement';
import ServicesOverview from '@/components/sections/ServicesOverview';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import StatsBar from '@/components/sections/StatsBar';
import PartnerDifference from '@/components/sections/PartnerDifference';
import KnowledgeHub from '@/components/sections/KnowledgeHub';
import Testimonials from '@/components/sections/Testimonials';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main id="main-content" className="flex-1">
        <Hero />
        <SocialProofBar />
        <PositioningStatement />
        <ServicesOverview />
        <FeaturedProjects />
        <StatsBar />
        <PartnerDifference />
        <KnowledgeHub />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}