import "./about.css";
import { AboutPageSection } from "./AboutPageSection";

export const metadata = {
  title: "About Quroixlabs | Engineering Team for Digital Growth",
  description: "Meet the engineers and problem-solvers behind Quroix Labs. We build scalable websites, automation systems, and custom software that drive real business outcomes.",
  alternates: {
    canonical: 'https://quroixlabs.com/about',
  },
  openGraph: {
    title: 'About Quroixlabs | Engineering Team for Digital Growth',
    description: "Meet the engineers and problem-solvers behind Quroix Labs. We build scalable websites, automation systems, and custom software that drive real business outcomes.",
    url: 'https://quroixlabs.com/about',
    images: [{ url: '/images/quroix_logo.svg', width: 1200, height: 630, alt: 'About Quroix Labs Team' }],
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
            "description": "Meet the engineers and problem-solvers behind Quroix Labs.",
            "url": "https://quroixlabs.com/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "Quroix Labs",
              "logo": "https://quroixlabs.com/images/quroix_logo.svg"
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
      <AboutPageSection />
    </>
  );
}