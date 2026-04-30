import "./contact.css";
import { ContactPageSection } from "./ContactPageSection";

export const metadata = {
  title: "Contact Quroix Labs | Start Your AI Automation Project",
  description: "Ready to scale? Get in touch with Quroix Labs for a consultation on AI automation, intelligent workflows, custom software, or enterprise website development.",
  alternates: {
    canonical: 'https://quroixlabs.com/contact',
  },
  openGraph: {
    title: 'Contact Quroix Labs | Start Your AI Automation Project',
    description: "Schedule a 30-minute strategy call with Quroix Labs. AI automation, intelligent workflows, and custom software consultation.",
    url: 'https://quroixlabs.com/contact',
    images: [{ url: '/images/quroixlabs.png', width: 1200, height: 630, alt: 'Contact Quroix Labs - Start Your AI Automation Project' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Quroix Labs | Start Your AI Automation Project',
    description: "Schedule a 30-minute strategy call for AI automation and custom software consultation.",
    images: ['/images/quroixlabs.png'],
  },
};

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Quroix Labs",
            "description": "Get in touch with Quroix Labs regarding AI automation, custom software, or enterprise projects.",
            "url": "https://quroixlabs.com/contact",
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
              "name": "Contact",
              "item": "https://quroixlabs.com/contact"
            }]
          })
        }}
      />
      <ContactPageSection />
    </>
  );
}