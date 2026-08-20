import ChennaiLocationContent from "./ChennaiLocationContent";

export const metadata = {
  title: "AI Automation Agency in Chennai | Quroix Labs",
  description: "Quroix Labs is Chennai's leading AI automation agency and engineering consultancy. We design and deploy autonomous AI agents, secure RAG pipelines, and custom workflow automation for enterprise, manufacturing, and tech businesses in Tamil Nadu and globally.",
  alternates: {
    canonical: 'https://quroixlabs.com/location/chennai',
  },
  openGraph: {
    title: 'AI Automation Agency in Chennai | Quroix Labs',
    description: "Chennai's leading engineering consultancy for autonomous AI agents and intelligent workflows. We build custom RAG pipelines, LLM orchestration, and enterprise software.",
    url: 'https://quroixlabs.com/location/chennai',
    images: [{ url: '/images/quroixlabs.png', width: 1200, height: 630, alt: 'Quroix Labs Chennai - AI Automation Agency & Custom Software' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Agency in Chennai | Quroix Labs',
    description: "Chennai's leading engineering consultancy for autonomous AI agents, local RAG pipelines, and intelligent enterprise workflow automation.",
    images: ['/images/quroixlabs.png'],
  },
};

export default function ChennaiLocation() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://quroixlabs.com/location/chennai/#localbusiness",
    "name": "Quroix Labs Chennai",
    "url": "https://quroixlabs.com/location/chennai",
    "image": "https://quroixlabs.com/images/quroixlabs.png",
    "telephone": "+91-6382696238",
    "email": "quroixlabs@gmail.com",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "43, Vivekanandhar Street, KK Nagar",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600078",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.0405",
      "longitude": "80.2016"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Chennai" },
      { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
      { "@type": "Country", "name": "India" }
    ],
    "serviceType": [
      "AI Automation Agency",
      "Autonomous AI Agent Development",
      "Enterprise RAG Pipeline Architecture",
      "Intelligent Workflow Design",
      "Custom Software Development"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://quroixlabs.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Location",
        "item": "https://quroixlabs.com/location/chennai"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Chennai",
        "item": "https://quroixlabs.com/location/chennai"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ChennaiLocationContent />
    </>
  );
}
