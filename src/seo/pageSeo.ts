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
  }
};
