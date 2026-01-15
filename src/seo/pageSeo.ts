// src/seo/pageSeo.ts
import { SITE } from "./seo.config";

export const pageSEO = {
  home: {
    title: "Quroix Labs — AI Automation & Intelligent Systems",
    description:
      "Quroix Labs builds scalable AI automation, machine learning platforms, and intelligent systems for startups and enterprises.",
    canonical: SITE.url
  },

  services: {
    title:
      "AI Development Services | Custom ML, Automation & AI Platforms — Quroix Labs",
    description:
      "Custom AI development services including machine learning models, automation systems, and enterprise AI platforms.",
    canonical: `${SITE.url}/services`,
    serviceName: "AI Development Services"
  },

  research: {
    title:
      "AI Research & Insights | Machine Learning, Automation & Industry Trends",
    description:
      "Expert insights, tutorials, and research articles on AI, machine learning, and intelligent automation.",
    canonical: `${SITE.url}/research`
  },

  contact: {
    title: "Contact Quroix Labs — Build Your AI Solution",
    description:
      "Get in touch with Quroix Labs for AI consulting, custom ML development, and intelligent automation solutions.",
    canonical: `${SITE.url}/contact`
  },

  products: {
    title: "AI Products & Platforms — Quroix Labs",
    description:
      "Explore our suite of AI products and intelligent platforms designed for enterprise automation.",
    canonical: `${SITE.url}/products`
  },

  caseStudies: {
    title: "Case Studies — AI Success Stories | Quroix Labs",
    description:
      "See how Quroix Labs has transformed businesses with custom AI solutions and automation strategies.",
    canonical: `${SITE.url}/case-studies`
  },

  careers: {
    title: "Careers at Quroix Labs — Join the AI Revolution",
    description:
      "Join our team of engineers and researchers building the future of intelligent systems.",
    canonical: `${SITE.url}/careers`
  },

  partnership: {
    title: "Partnership Program — Collaborate with Quroix Labs",
    description:
      "Partner with us to deliver cutting-edge AI solutions to your clients.",
    canonical: `${SITE.url}/partnership`
  },

  requestDemo: {
    title: "Request a Demo — Experience Intelligent Automation",
    description:
      "Schedule a personalized demo of our AI platforms and see how they can benefit your business.",
    canonical: `${SITE.url}/request-demo`
  },

  privacy: {
    title: "Privacy Policy — Quroix Labs",
    description:
      "Our commitment to protecting your data and privacy.",
    canonical: `${SITE.url}/privacy`
  },

  terms: {
    title: "Terms of Service — Quroix Labs",
    description:
      "Terms and conditions for using Quroix Labs services and products.",
    canonical: `${SITE.url}/terms`
  }
};
