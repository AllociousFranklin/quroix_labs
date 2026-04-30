"use client";

import React from "react";

export const SchemaMarkup = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Quroix Labs",
    "url": "https://quroixlabs.com",
    "logo": "https://quroixlabs.com/icon.svg",
    "sameAs": [
      "https://linkedin.com/company/quroixlabs",
      "https://x.com/quroixlabs"
    ],
    "description": "Elite AI Automation Agency specializing in Engineering Intelligence and Autonomous AI Agents."
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
      "name": "Quroix Labs"
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
