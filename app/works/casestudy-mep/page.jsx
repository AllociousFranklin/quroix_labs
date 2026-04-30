import "../works.css";
import CaseStudyMEPContent from "./CaseStudyMEPContent";

export const metadata = {
  title: "MEP Design Consultants — AI Automation Case Study",
  description: "How Quroix Labs deployed the FlowPilot engine to automate global MEP engineering workflows, reducing technical bid response latency by 30% and increasing lead inquiries by 40%.",
  alternates: {
    canonical: 'https://quroixlabs.com/works/casestudy-mep',
  },
  openGraph: {
    title: 'MEP Design Consultants — AI Automation Case Study | Quroix Labs',
    description: "Deploying autonomous AI agents and intelligent workflows for global MEP engineering consultants. 30% faster bid responses, 40% more leads.",
    url: 'https://quroixlabs.com/works/casestudy-mep',
    images: [{ url: '/mockups/trielementdesign.webp', width: 1920, height: 1080, alt: 'MEP Design Consultants AI Automation by Quroix Labs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MEP Design Consultants — AI Automation Case Study | Quroix Labs',
    description: "30% faster bid responses, 40% more leads through FlowPilot engine deployment.",
    images: ['/mockups/trielementdesign.webp'],
  },
};

export default function CaseStudyMEPPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "MEP Design Consultants — AI Automation Case Study",
            "description": "How Quroix Labs deployed the FlowPilot engine to automate global MEP engineering workflows.",
            "url": "https://quroixlabs.com/works/casestudy-mep",
            "image": "https://quroixlabs.com/mockups/trielementdesign.webp",
            "author": { "@id": "https://quroixlabs.com/#organization" },
            "publisher": { "@id": "https://quroixlabs.com/#organization" },
            "datePublished": "2026-01-15",
            "dateModified": "2026-04-30"
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://quroixlabs.com" },
              { "@type": "ListItem", "position": 2, "name": "Works", "item": "https://quroixlabs.com/works" },
              { "@type": "ListItem", "position": 3, "name": "MEP Design Consultants", "item": "https://quroixlabs.com/works/casestudy-mep" }
            ]
          })
        }}
      />
      <CaseStudyMEPContent />
    </>
  );
}
