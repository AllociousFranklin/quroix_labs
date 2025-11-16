import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  author?: string;
}

export function SEO({
  title = "Quroix Labs - AI-Powered Automation & Intelligent Systems for Startups & Enterprises",
  description = "Transform your business with custom AI solutions, intelligent automation, and cutting-edge platforms. Quroix Labs builds scalable AI systems that drive real results for startups and enterprises.",
  keywords = "AI development, machine learning solutions, intelligent automation, AI consulting, custom AI platforms, enterprise AI, startup AI solutions, artificial intelligence services, ML engineering, data science consulting, AI transformation, automation solutions, predictive analytics, NLP solutions, computer vision AI",
  ogImage = "https://quroixlabs.com/og-image.jpg",
  ogType = "website",
  canonicalUrl = "https://quroixlabs.com",
  author = "Quroix Labs"
}: SEOProps) {
  
  useEffect(() => {
    // Update title
    document.title = title;

    // Helper function to update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Standard meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", author);
    updateMetaTag("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    updateMetaTag("googlebot", "index, follow");
    updateMetaTag("viewport", "width=device-width, initial-scale=1.0");

    // Open Graph meta tags for social media
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:url", canonicalUrl, true);
    updateMetaTag("og:type", ogType, true);
    updateMetaTag("og:site_name", "Quroix Labs", true);
    updateMetaTag("og:locale", "en_US", true);

    // Twitter Card meta tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);
    updateMetaTag("twitter:site", "@QuroixLabs");
    updateMetaTag("twitter:creator", "@QuroixLabs");

    // Additional SEO meta tags
    updateMetaTag("application-name", "Quroix Labs");
    updateMetaTag("apple-mobile-web-app-title", "Quroix Labs");
    updateMetaTag("format-detection", "telephone=no");
    updateMetaTag("theme-color", "#4f46e5");

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // Structured Data (JSON-LD Schema)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Quroix Labs",
      "url": "https://quroixlabs.com",
      "logo": "https://quroixlabs.com/logo.png",
      "description": description,
      "email": "quroixlabs@gmail.com",
      "telephone": "+91-6382696238",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/company/quroixlabs",
        "https://twitter.com/QuroixLabs",
        "https://github.com/QuroixLabs"
      ],
      "foundingDate": "2024",
      "founders": [
        {
          "@type": "Person",
          "name": "Quroix Labs Team"
        }
      ],
      "serviceType": [
        "AI Development",
        "Machine Learning Solutions",
        "Intelligent Automation",
        "Custom AI Platforms",
        "Enterprise AI Consulting"
      ],
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      }
    };

    // Add or update structured data script
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.setAttribute("type", "application/ld+json");
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, ogImage, ogType, canonicalUrl, author]);

  return null;
}

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: "Quroix Labs - AI-Powered Automation & Intelligent Systems",
    description: "Transform your business with custom AI solutions, intelligent automation, and cutting-edge platforms. Quroix Labs builds scalable AI systems that drive real results for startups and enterprises.",
    keywords: "AI development, machine learning, intelligent automation, AI consulting, custom AI platforms, enterprise AI, startup AI solutions",
    canonicalUrl: "https://quroixlabs.com"
  },
  services: {
    title: "AI Services & Solutions - Custom ML, Automation & Platform Development | Quroix Labs",
    description: "Comprehensive AI services including custom machine learning models, intelligent automation systems, AI platform development, and enterprise AI consulting. Transform your business with cutting-edge AI solutions.",
    keywords: "AI services, machine learning development, automation services, AI consulting, custom ML models, AI platform development, enterprise AI solutions, intelligent automation",
    canonicalUrl: "https://quroixlabs.com/services"
  },
  products: {
    title: "AI Products & Labs - Innovation Pipeline & Custom Solutions | Quroix Labs",
    description: "Explore our AI products and innovation labs. From predictive analytics to NLP solutions, discover cutting-edge AI products designed to solve real business challenges.",
    keywords: "AI products, ML products, AI innovation labs, predictive analytics, NLP solutions, computer vision, AI SaaS, intelligent products",
    canonicalUrl: "https://quroixlabs.com/products"
  },
  caseStudies: {
    title: "AI Case Studies & Success Stories - Real Results from Real Clients | Quroix Labs",
    description: "Explore how we've helped startups and enterprises transform their businesses with custom AI solutions. Real case studies, measurable results, proven ROI.",
    keywords: "AI case studies, machine learning success stories, AI implementation examples, enterprise AI results, AI ROI, ML project examples",
    canonicalUrl: "https://quroixlabs.com/case-studies"
  },
  research: {
    title: "AI Research & Insights - Latest Trends, Tutorials & Thought Leadership | Quroix Labs",
    description: "Stay ahead with our AI research, technical tutorials, industry insights, and thought leadership articles. Expert perspectives on machine learning, automation, and emerging AI trends.",
    keywords: "AI research, machine learning tutorials, AI insights, ML blog, AI trends, tech articles, AI thought leadership, ML best practices",
    canonicalUrl: "https://quroixlabs.com/research"
  },
  careers: {
    title: "Careers at Quroix Labs - Join Our AI Innovation Team",
    description: "Join Quroix Labs and work on cutting-edge AI projects. We're hiring ML engineers, AI researchers, full-stack developers, and innovators passionate about transforming businesses with AI.",
    keywords: "AI careers, machine learning jobs, AI engineer jobs, ML engineer hiring, AI startup careers, tech jobs, AI researcher positions",
    canonicalUrl: "https://quroixlabs.com/careers"
  },
  partnership: {
    title: "Partner with Quroix Labs - Collaborative AI Solutions & Joint Ventures",
    description: "Explore partnership opportunities with Quroix Labs. Joint ventures, technology partnerships, and collaborative AI solutions for agencies, consultants, and enterprises.",
    keywords: "AI partnerships, technology partnerships, joint ventures, AI collaboration, enterprise partnerships, strategic alliances",
    canonicalUrl: "https://quroixlabs.com/partnership"
  },
  requestDemo: {
    title: "Request a Demo - See Our AI Solutions in Action | Quroix Labs",
    description: "Schedule a personalized demo of our AI solutions. See how custom machine learning, intelligent automation, and AI platforms can transform your business.",
    keywords: "AI demo, request demo, AI consultation, ML demo, AI platform demo, schedule consultation",
    canonicalUrl: "https://quroixlabs.com/request-demo"
  },
  contact: {
    title: "Contact Quroix Labs - Let's Build Your AI Solution Together",
    description: "Get in touch with Quroix Labs. Whether you need AI consulting, custom ML development, or intelligent automation solutions, our team is ready to help transform your business.",
    keywords: "contact AI company, AI consultation, ML consulting, reach out, AI inquiry, get in touch",
    canonicalUrl: "https://quroixlabs.com/contact"
  },
  privacy: {
    title: "Privacy Policy - How We Protect Your Data | Quroix Labs",
    description: "Read our privacy policy to understand how Quroix Labs collects, uses, and protects your personal information. Your privacy matters to us.",
    keywords: "privacy policy, data protection, GDPR, privacy practices",
    canonicalUrl: "https://quroixlabs.com/privacy"
  },
  terms: {
    title: "Terms of Service - Legal Terms & Conditions | Quroix Labs",
    description: "Read our terms of service outlining the legal terms and conditions for using Quroix Labs website and services.",
    keywords: "terms of service, legal terms, terms and conditions, user agreement",
    canonicalUrl: "https://quroixlabs.com/terms"
  }
};
