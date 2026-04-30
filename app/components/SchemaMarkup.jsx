"use client";

import React from "react";

export const SchemaMarkup = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "QuroixLabs",
    "url": "https://quroixlabs.com",
    "logo": "https://quroixlabs.com/icon.svg",
    "sameAs": [
      "https://linkedin.com/company/quroixlabs",
      "https://x.com/quroixlabs"
    ],
    "description": "Elite AI Automation Agency specializing in Engineering Intelligence and Autonomous AI Agents."
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "QuroixLabs",
    "image": "https://quroixlabs.com/images/quroix_logo.svg",
    "@id": "https://quroixlabs.com",
    "url": "https://quroixlabs.com",
    "telephone": "+91-6382696238",
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
      "latitude": 13.0333,
      "longitude": 80.2000
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  const flowPilotSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "FlowPilot Engine",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Cloud-based",
    "description": "Proprietary AI orchestration engine designed for complex enterprise workflow automation and multi-agent coordination.",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    }
  };

  const agentCoreSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AgentCore Framework",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Agnostic",
    "description": "Enterprise-grade framework for building, deploying, and scaling autonomous AI agents within secure corporate environments."
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Integration & Automation",
    "provider": {
      "@type": "Organization",
      "name": "QuroixLabs"
    },
    "description": "Custom AI software development, intelligent workflow automation, and enterprise RAG pipeline architecture.",
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Autonomous AI Agent Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enterprise AI Architecture"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does the FlowPilot engine integrate with legacy systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The FlowPilot engine utilizes a modular adapter architecture, allowing it to interface with legacy SOAP/REST APIs, SQL databases, and mainframe systems via secure, low-latency orchestration layers."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical ROI for an AgentCore deployment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Clients typically report 30-40% reduction in operational overhead and a 3.5x faster ROI compared to traditional software development, with initial pilot programs achieving production readiness in 4-8 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Does QuroixLabs provide custom AI automation for global clients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, QuroixLabs is a global AI automation agency based in Chennai, delivering bespoke agentic infrastructure and intelligent workflows to enterprise clients across North America, Europe, and Asia."
        }
      },
      {
        "@type": "Question",
        "name": "What industries does QuroixLabs serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in high-complexity sectors including Engineering (BIM/MEP), Healthcare, Financial Services, and Digital Commerce, where accuracy and autonomous decision-making are critical."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(flowPilotSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agentCoreSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};
