import "../works.css";
import CaseStudyGymContent from "./CaseStudyGymContent";

export const metadata = {
  title: "Apex Gym — Membership Intelligence Case Study",
  description: "How Quroix Labs deployed automated membership intelligence for Apex Gym, achieving 30% reduction in churn, 45% increase in engagement, and 20% growth in digital sign-ups.",
  alternates: {
    canonical: 'https://quroixlabs.com/works/casestudy-gym',
  },
  openGraph: {
    title: 'Apex Gym — Membership Intelligence Case Study | Quroix Labs',
    description: "Automated membership intelligence and retention workflows. 30% less churn, 45% more engagement.",
    url: 'https://quroixlabs.com/works/casestudy-gym',
    images: [{ url: '/mockups/heave.webp', width: 1920, height: 1080, alt: 'Apex Gym Membership Intelligence by Quroix Labs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apex Gym — Membership Intelligence Case Study | Quroix Labs',
    description: "30% reduction in membership churn through autonomous AI agent deployment.",
    images: ['/mockups/heave.webp'],
  },
};

export default function CaseStudyGymPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "Article",
        "headline": "Apex Gym — Membership Intelligence Case Study",
        "description": "Automated membership intelligence and AI-driven retention workflows for modern fitness centers.",
        "url": "https://quroixlabs.com/works/casestudy-gym",
        "image": "https://quroixlabs.com/mockups/heave.webp",
        "author": { "@id": "https://quroixlabs.com/#organization" },
        "publisher": { "@id": "https://quroixlabs.com/#organization" },
        "datePublished": "2026-03-01", "dateModified": "2026-04-30"
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://quroixlabs.com" },
          { "@type": "ListItem", "position": 2, "name": "Works", "item": "https://quroixlabs.com/works" },
          { "@type": "ListItem", "position": 3, "name": "Apex Gym", "item": "https://quroixlabs.com/works/casestudy-gym" }
        ]
      }) }} />
      <CaseStudyGymContent />
    </>
  );
}
