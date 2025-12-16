// src/seo/schemas.ts
import { SITE } from "./seo.config";

/* ORGANIZATION (Homepage only) */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  logo: SITE.logo,
  email: SITE.email,
  telephone: SITE.phone,
  sameAs: [
    "https://www.linkedin.com/company/quroixlabs",
    "https://twitter.com/QuroixLabs",
    "https://github.com/QuroixLabs"
  ]
};

/* WEBSITE (Homepage only) */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url
};

/* SERVICE (Services page) */
export const serviceSchema = (serviceName: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  provider: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide"
  }
});

/* ARTICLE (Blog / Research pages) */
export const articleSchema = (
  title: string,
  url: string,
  publishedDate: string
) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  datePublished: publishedDate,
  author: {
    "@type": "Organization",
    name: SITE.name
  },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    logo: {
      "@type": "ImageObject",
      url: SITE.logo
    }
  },
  mainEntityOfPage: url
});
