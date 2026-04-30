import "./contact.css";
import { ContactPageSection } from "./ContactPageSection";

export const metadata = {
  title: "Contact QuroixLabs | Start Your Project",
  description: "Ready to scale? Get in touch with QuroixLabs for a consultation on your website, automation, or custom software needs.",
  alternates: {
    canonical: 'https://quroixlabs.com/contact',
  },
  openGraph: {
    title: 'Contact QuroixLabs | Start Your Project',
    description: "Ready to scale? Get in touch with QuroixLabs for a consultation on your website, automation, or custom software needs.",
    url: 'https://quroixlabs.com/contact',
    images: [{ url: '/images/quroix_logo.svg', width: 1200, height: 630, alt: 'Contact QuroixLabs' }],
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
            "name": "Contact QuroixLabs",
            "description": "Get in touch with QuroixLabs regarding your project.",
            "url": "https://quroixlabs.com/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "QuroixLabs",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-6382696238",
                "contactType": "customer service"
              }
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