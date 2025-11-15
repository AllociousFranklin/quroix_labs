import { HeroSection } from "./HeroSection";
import { ValueProposition } from "./ValueProposition";
import { ServicesOverview } from "./ServicesOverview";
import { WhyChoose } from "./WhyChoose";
import { ProductsLabs } from "./ProductsLabs";
import { Testimonials } from "./Testimonials";
import { CTAStrip } from "./CTAStrip";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueProposition />
      <ServicesOverview />
      <WhyChoose />
      <ProductsLabs />
      <Testimonials />
      <CTAStrip />
    </>
  );
}
