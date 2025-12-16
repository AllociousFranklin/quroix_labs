// src/seo/SEO.tsx
import { Helmet } from "react-helmet-async";
import { SITE } from "./seo.config";
import {
  organizationSchema,
  websiteSchema,
  serviceSchema,
  articleSchema
} from "./schemas";

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  type?: "home" | "service" | "article";
  serviceName?: string;
  articleDate?: string;
}

export function SEO({
  title,
  description,
  canonical,
  type = "home",
  serviceName,
  articleDate
}: SEOProps) {
  const schemas = [
    type === "home" && websiteSchema,
    type === "home" && organizationSchema,
    type === "service" && serviceName
      ? serviceSchema(serviceName)
      : null,
    type === "article" && articleDate
      ? articleSchema(title, canonical, articleDate)
      : null
  ].filter(Boolean);

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Robots */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:image" content={SITE.ogImage} />
      <meta property="og:locale" content={SITE.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={SITE.ogImage} />
      <meta name="twitter:site" content={SITE.twitterHandle} />

      {/* Theme */}
      <meta name="theme-color" content="#4f46e5" />

      {/* Structured Data */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
    </Helmet>
  );
}
