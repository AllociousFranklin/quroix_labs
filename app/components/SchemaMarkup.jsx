"use client";

import React from "react";

export const SchemaMarkup = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://quroixlabs.com/#organization",
    "name": "Quroix Labs",
    "url": "https://quroixlabs.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://quroixlabs.com/images/quroix_logo.svg",
      "width": 512,
      "height": 512
    },
    "image": "https://quroixlabs.com/images/quroixlabs.png",
    "sameAs": [
      "https://linkedin.com/company/quroixlabs",
      "https://x.com/quroixlabs",
      "https://instagram.com/quroixlabs"
    ],
    "description": "Quroix Labs is an elite AI automation agency specializing in engineering intelligence, autonomous AI agents, and intelligent workflow automation for global enterprises.",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "Allocious Franklin R",
        "jobTitle": "CEO and Founder"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "43, Vivekanandhar Street, KK Nagar",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-6382696238",
      "contactType": "customer service",
      "email": "quroixlabs@gmail.com",
      "availableLanguage": ["English"]
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "AI Automation",
      "Autonomous AI Agents",
      "RAG Pipeline Architecture",
      "LLM Orchestration",
      "Enterprise Software Development",
      "Workflow Automation",
      "Custom Software Development"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://quroixlabs.com/#website",
    "name": "Quroix Labs",
    "url": "https://quroixlabs.com",
    "publisher": { "@id": "https://quroixlabs.com/#organization" },
    "description": "Engineering Intelligence & AI Automation for Enterprise",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://quroixlabs.com/works?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://quroixlabs.com/#localbusiness",
    "name": "Quroix Labs",
    "url": "https://quroixlabs.com",
    "image": "https://quroixlabs.com/images/quroixlabs.png",
    "telephone": "+91-6382696238",
    "email": "quroixlabs@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "43, Vivekanandhar Street, KK Nagar",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600078",
      "addressCountry": "IN"
    },
    "priceRange": "$$$$",
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "United States" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "United Arab Emirates" }
    ],
    "serviceType": ["AI Automation", "Custom Software Development", "Intelligent Workflow Design", "Autonomous AI Agent Development"]
  };

  const flowPilotSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "FlowPilot Engine",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Cloud-based",
    "description": "Proprietary AI orchestration engine designed by Quroix Labs for complex enterprise workflow automation and multi-agent coordination. Handles legacy SOAP/REST APIs, SQL databases, and mainframe systems via secure, low-latency orchestration layers.",
    "creator": { "@id": "https://quroixlabs.com/#organization" },
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
    "description": "Enterprise-grade framework by Quroix Labs for building, deploying, and scaling autonomous AI agents within secure corporate environments. Supports multi-agent coordination and SOC2-aligned data governance.",
    "creator": { "@id": "https://quroixlabs.com/#organization" }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Integration & Automation",
    "provider": { "@id": "https://quroixlabs.com/#organization" },
    "description": "Quroix Labs provides custom AI software development, intelligent workflow automation, enterprise RAG pipeline architecture, and autonomous agent deployment for businesses worldwide.",
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Automation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Autonomous AI Agent Development",
            "description": "Custom design, development, and deployment of autonomous AI agents that handle complex business tasks with minimal human oversight."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enterprise AI Architecture",
            "description": "End-to-end AI system architecture including RAG pipelines, LLM orchestration, and multi-agent coordination for enterprise environments."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Intelligent Workflow Automation",
            "description": "Custom workflow design and automation using the FlowPilot engine to eliminate manual processes and reduce operational overhead."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "High-Performance Web Development",
            "description": "Enterprise-grade websites and web applications built with Next.js, React, and Three.js for maximum performance and conversion."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "Tailored internal tools and platforms designed around how your business actually operates, not generic off-the-shelf solutions."
          }
        }
      ]
    }
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How Quroix Labs Builds AI Automation Systems",
    "description": "Our proven process for deploying enterprise AI automation — from discovery to production-ready systems in 4-8 weeks.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Discovery & Workflow Mapping",
        "text": "We analyze your existing business processes, identify automation opportunities, and map out the optimal AI integration points."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Architecture Design",
        "text": "Our engineers design the system architecture, selecting the right AI models, orchestration layers, and integration patterns for your specific needs."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Agent Development & Training",
        "text": "We build and train autonomous AI agents using the AgentCore Framework, implementing custom RAG pipelines and LLM orchestration layers."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Integration & Testing",
        "text": "The system is integrated with your existing tools and thoroughly tested in staging environments to ensure reliability and accuracy."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Production Deployment & Monitoring",
        "text": "We deploy the automation to production with real-time monitoring, achieving production readiness in 4-8 weeks from initial discovery."
      }
    ],
    "totalTime": "P8W"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does an AI automation agency do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An AI automation agency like Quroix Labs designs, builds, and deploys intelligent systems that automate complex business processes. This includes autonomous AI agents, workflow automation, RAG pipeline architecture, and custom software development — all engineered to reduce operational overhead and accelerate growth."
        }
      },
      {
        "@type": "Question",
        "name": "How does the FlowPilot engine integrate with legacy systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The FlowPilot engine utilizes a modular adapter architecture, allowing it to interface with legacy SOAP/REST APIs, SQL databases, and mainframe systems via secure, low-latency orchestration layers. This means businesses can modernize their workflows without replacing existing infrastructure."
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
        "name": "How long does it take to implement AI automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Quroix Labs typically delivers production-ready AI automation systems in 4-8 weeks using agile deployment methodology. This includes discovery, architecture design, agent development, integration testing, and production deployment with real-time monitoring."
        }
      },
      {
        "@type": "Question",
        "name": "What industries benefit most from AI automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Quroix Labs has deployed AI automation across multiple industries including engineering consultancies, creative agencies, e-commerce platforms, luxury gyms and clinics, and professional services firms. Any industry with repetitive processes, data-heavy workflows, or complex decision-making can benefit significantly from AI automation."
        }
      },
      {
        "@type": "Question",
        "name": "What is an autonomous AI agent?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An autonomous AI agent is a software system that can perceive its environment, make decisions, and take actions to achieve specific goals with minimal human intervention. Quroix Labs builds enterprise-grade autonomous agents using the AgentCore Framework, capable of handling tasks like lead scoring, document processing, data analysis, and workflow orchestration."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between RPA and AI automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional RPA (Robotic Process Automation) follows rigid, rule-based scripts, while AI automation uses machine learning, natural language processing, and autonomous agents to handle unstructured data, make intelligent decisions, and adapt to changing conditions. Quroix Labs specializes in AI-native automation that goes far beyond simple RPA."
        }
      },
      {
        "@type": "Question",
        "name": "What is a RAG pipeline?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A RAG (Retrieval-Augmented Generation) pipeline combines large language models with external knowledge bases to generate accurate, contextual responses. Quroix Labs architects enterprise RAG pipelines that allow AI agents to query proprietary company data — such as technical documentation, CAD files, or business records — via natural language, dramatically reducing information retrieval time."
        }
      },
      {
        "@type": "Question",
        "name": "How much does custom AI automation cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of AI automation varies based on complexity, integration requirements, and scale. Quroix Labs offers consultation to assess your specific needs and provide a clear project scope. Contact us at quroixlabs@gmail.com or schedule a 30-minute strategy call to discuss your project."
        }
      },
      {
        "@type": "Question",
        "name": "Can AI agents replace manual business processes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, AI agents can automate many manual business processes. Quroix Labs has replaced over 10,000 hours of manual labor across 50+ projects by deploying intelligent automation systems. Common processes automated include lead scoring, document processing, client onboarding, data analysis, membership management, and multi-channel communication orchestration."
        }
      }
    ]
  };

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Quroix Labs AI Automation Services",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "ratingCount": "23",
      "reviewCount": "23"
    },
    "brand": { "@id": "https://quroixlabs.com/#organization" }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
    </>
  );
};
