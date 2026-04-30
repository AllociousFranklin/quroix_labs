import "../works.css";
import CaseStudyBIMContent from "./CaseStudyBIMContent";

export const metadata = {
  title: "BIM Engineering Studio — Enterprise AI Architecture Case Study",
  description: "How Quroix Labs deployed custom RAG pipelines and the AgentCore Framework for BIM Engineering Studio, achieving 3.5x faster ROI and 90% accuracy in conversational data analysis.",
  alternates: {
    canonical: 'https://quroixlabs.com/works/casestudy-bim',
  },
  openGraph: {
    title: 'BIM Engineering Studio — Enterprise AI Architecture Case Study | Quroix Labs',
    description: "Multi-agent orchestration for architectural engineering. 3.5x faster ROI, 60% reduction in project discovery latency.",
    url: 'https://quroixlabs.com/works/casestudy-bim',
    images: [{ url: '/mockups/trielement.webp', width: 1920, height: 1080, alt: 'BIM Engineering Studio AI Architecture by Quroix Labs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BIM Engineering Studio — AI Architecture Case Study | Quroix Labs',
    description: "3.5x faster ROI through AgentCore Framework and custom RAG pipelines.",
    images: ['/mockups/trielement.webp'],
  },
};

export default function CaseStudyBIMPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "BIM Engineering Studio — Enterprise AI Architecture Case Study",
            "description": "Multi-agent orchestration and RAG pipelines for architectural engineering intelligence.",
            "url": "https://quroixlabs.com/works/casestudy-bim",
            "image": "https://quroixlabs.com/mockups/trielement.webp",
            "author": { "@id": "https://quroixlabs.com/#organization" },
            "publisher": { "@id": "https://quroixlabs.com/#organization" },
            "datePublished": "2026-02-01",
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
              { "@type": "ListItem", "position": 3, "name": "BIM Engineering Studio", "item": "https://quroixlabs.com/works/casestudy-bim" }
            ]
          })
        }}
      />
      <CaseStudyBIMContent />
    </>
  );
}
