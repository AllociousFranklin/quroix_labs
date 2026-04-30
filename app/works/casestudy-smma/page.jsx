import "../works.css";
import CaseStudySMMAContent from "./CaseStudySMMAContent";

export const metadata = {
  title: "SMMA Agency — AI-Driven Growth Engine Case Study",
  description: "How Quroix Labs engineered an autonomous growth engine for a high-volume SMMA agency, achieving 25% boost in sales conversions and 65% faster client onboarding.",
  alternates: {
    canonical: 'https://quroixlabs.com/works/casestudy-smma',
  },
  openGraph: {
    title: 'SMMA Agency — AI-Driven Growth Engine Case Study | Quroix Labs',
    description: "AI-driven lead scoring and automated onboarding pipelines. 25% more conversions, 65% faster onboarding.",
    url: 'https://quroixlabs.com/works/casestudy-smma',
    images: [{ url: '/mockups/kinimatic.webp', width: 1920, height: 1080, alt: 'SMMA Agency AI Growth Engine by Quroix Labs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SMMA Agency — AI Growth Engine Case Study | Quroix Labs',
    description: "25% boost in sales conversions through AI-driven lead scoring and automated onboarding.",
    images: ['/mockups/kinimatic.webp'],
  },
};

export default function CaseStudySMMAPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "SMMA Agency — AI-Driven Growth Engine Case Study",
        "description": "Autonomous growth engine with AI-driven lead scoring and automated multi-channel onboarding.",
        "url": "https://quroixlabs.com/works/casestudy-smma",
        "image": "https://quroixlabs.com/mockups/kinimatic.webp",
        "author": { "@id": "https://quroixlabs.com/#organization" },
        "publisher": { "@id": "https://quroixlabs.com/#organization" },
        "datePublished": "2026-02-15", "dateModified": "2026-04-30"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://quroixlabs.com" },
          { "@type": "ListItem", "position": 2, "name": "Works", "item": "https://quroixlabs.com/works" },
          { "@type": "ListItem", "position": 3, "name": "SMMA Agency", "item": "https://quroixlabs.com/works/casestudy-smma" }
        ]
      }) }} />
      <CaseStudySMMAContent />
    </>
  );
}
