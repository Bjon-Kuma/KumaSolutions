import { HeroSection } from '@/components/hero-section';
import { ProblemSection } from '@/components/problem-section';
import { WhatWeDo } from '@/components/what-we-do';
import { SolutionSection } from '@/components/solution-section';
import { UseCases } from '@/components/use-cases';
import { PortfolioCarousel } from '@/components/portfolio-carousel';
import { HowWeWork } from '@/components/how-we-work';
import { ServicesSection } from '@/components/services-section';
import { FaqSection } from '@/components/faq-section';
import { CTASection } from '@/components/cta-section';
import { ContactSection } from '@/components/contact-section';
import { WhatsAppButton } from '@/components/whatsapp-button';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <WhatWeDo />
      <SolutionSection />
      <UseCases />
      <PortfolioCarousel />
      <HowWeWork />
      <ServicesSection />
      <FaqSection />
      <CTASection />
      <ContactSection />
      <WhatsAppButton />
    </>
  );
}
