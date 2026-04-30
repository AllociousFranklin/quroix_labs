import "./works.css";
import { WorksPageSection } from "./WorksPageSection";

export const metadata = {
  title: "Our Work | Quroix Labs Portfolio & Case Studies",
  description: "Explore the Quroix Labs portfolio: 50+ AI automation projects, high-performance websites, and custom software delivered for clients across e-commerce, engineering, fitness, and creative industries.",
  alternates: {
    canonical: 'https://quroixlabs.com/works',
  },
  openGraph: {
    title: 'Our Work | Quroix Labs Portfolio & Case Studies',
    description: "50+ projects delivered. Explore AI automation case studies, custom websites, and intelligent workflow systems built for enterprises.",
    url: 'https://quroixlabs.com/works',
    images: [{ url: '/images/quroixlabs.png', width: 1200, height: 630, alt: 'Quroix Labs Project Portfolio - AI Automation & Custom Software' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work | Quroix Labs Portfolio & Case Studies',
    description: "50+ AI automation projects delivered across multiple industries. Explore our case studies.",
    images: ['/images/quroixlabs.png'],
  },
};

export default function Works() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Quroix Labs Projects & Case Studies",
            "description": "Portfolio of 50+ digital projects including AI automation systems, enterprise websites, and custom software solutions.",
            "url": "https://quroixlabs.com/works",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "MEP Design Consultants", "url": "https://quroixlabs.com/works/casestudy-mep" },
                { "@type": "ListItem", "position": 2, "name": "BIM Engineering Studio", "url": "https://quroixlabs.com/works/casestudy-bim" },
                { "@type": "ListItem", "position": 3, "name": "SMMA Agency", "url": "https://quroixlabs.com/works/casestudy-smma" },
                { "@type": "ListItem", "position": 4, "name": "Apex Gym", "url": "https://quroixlabs.com/works/casestudy-gym" }
              ]
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://quroixlabs.com"
            }, {
              "@type": "ListItem",
              "position": 2,
              "name": "Works",
              "item": "https://quroixlabs.com/works"
            }]
          })
        }}
      />
      <WorksPageSection />
    </>
  );
}