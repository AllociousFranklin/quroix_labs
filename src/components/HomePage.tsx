import { Suspense, lazy } from "react";
import { HeroSection } from "./HeroSection";
import { ValueProposition } from "./ValueProposition";

const ServicesOverview = lazy(() => import("./ServicesOverview").then(module => ({ default: module.ServicesOverview })));
const WhyChoose = lazy(() => import("./WhyChoose").then(module => ({ default: module.WhyChoose })));
const ProductsLabs = lazy(() => import("./ProductsLabs").then(module => ({ default: module.ProductsLabs })));
const Testimonials = lazy(() => import("./Testimonials").then(module => ({ default: module.Testimonials })));
const CTAStrip = lazy(() => import("./CTAStrip").then(module => ({ default: module.CTAStrip })));

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueProposition />
      <Suspense fallback={<div className="h-20" />}>
        <ServicesOverview />
        <WhyChoose />
        <ProductsLabs />
        <Testimonials />
        <CTAStrip />
      </Suspense>
    </>
  );
}
