import "./works.css";
import { WorksPageSection } from "./WorksPageSection";

export const metadata = {
  title: "Our Work | Quroixlabs Portfolio",
  description: "Explore our portfolio of high-performance websites, custom software, and automation systems delivered for clients across industries.",
  alternates: {
    canonical: 'https://quroixlabs.com/works',
  },
  openGraph: {
    title: 'Our Work | Quroixlabs Portfolio',
    description: "Explore our portfolio of high-performance websites, custom software, and automation systems delivered for clients across industries.",
    url: 'https://quroixlabs.com/works',
    images: [{ url: '/images/quroix_logo.svg', width: 1200, height: 630, alt: 'Quroix Labs Project Portfolio' }],
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
            "name": "Quroix Labs Projects",
            "description": "Portfolio of digital projects including websites, automations, and software.",
            "url": "https://quroixlabs.com/works"
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