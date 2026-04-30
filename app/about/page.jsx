import "./about.css";
import { AboutPageSection } from "./AboutPageSection";

export const metadata = {
  title: "About Quroix Labs | Engineering Team for Digital Growth",
  description: "Meet the engineers and problem-solvers behind Quroix Labs. We build scalable websites, automation systems, and custom software that drive real business outcomes for enterprises worldwide.",
  alternates: {
    canonical: 'https://quroixlabs.com/about',
  },
  openGraph: {
    title: 'About Quroix Labs | Engineering Team for Digital Growth',
    description: "Meet the engineers and problem-solvers behind Quroix Labs. We build scalable websites, automation systems, and custom software that drive real business outcomes.",
    url: 'https://quroixlabs.com/about',
    images: [{ url: '/images/quroixlabs.png', width: 1200, height: 630, alt: 'About Quroix Labs - Engineering Team for Digital Growth' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Quroix Labs | Engineering Team for Digital Growth',
    description: "Meet the engineers building scalable websites, automation systems, and custom software for enterprises.",
    images: ['/images/quroixlabs.png'],
  },
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Quroix Labs",
            "description": "Meet the engineers and problem-solvers behind Quroix Labs — an elite AI automation agency.",
            "url": "https://quroixlabs.com/about",
            "mainEntity": {
              "@type": "Organization",
              "@id": "https://quroixlabs.com/#organization"
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
              "name": "About",
              "item": "https://quroixlabs.com/about"
            }]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Quroix Labs Team",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "item": { "@type": "Person", "name": "Allocious Franklin R", "jobTitle": "CEO and Founder", "worksFor": { "@id": "https://quroixlabs.com/#organization" } } },
              { "@type": "ListItem", "position": 2, "item": { "@type": "Person", "name": "Akash N", "jobTitle": "CQO and Co-Founder", "worksFor": { "@id": "https://quroixlabs.com/#organization" } } },
              { "@type": "ListItem", "position": 3, "item": { "@type": "Person", "name": "AkashMadhav Y", "jobTitle": "CTO & Co-Founder", "worksFor": { "@id": "https://quroixlabs.com/#organization" } } },
              { "@type": "ListItem", "position": 4, "item": { "@type": "Person", "name": "Mohamed Al Silmi", "jobTitle": "CFO & Co-Founder", "worksFor": { "@id": "https://quroixlabs.com/#organization" } } }
            ]
          })
        }}
      />
      <AboutPageSection />
    </>
  );
}