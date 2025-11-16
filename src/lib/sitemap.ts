// Sitemap generator for SEO
// This helps search engines discover all pages on your site

export const sitemapPages = [
  {
    url: "https://quroixlabs.com",
    priority: 1.0,
    changefreq: "weekly",
  },
  {
    url: "https://quroixlabs.com/services",
    priority: 0.9,
    changefreq: "weekly",
  },
  {
    url: "https://quroixlabs.com/products",
    priority: 0.9,
    changefreq: "weekly",
  },
  {
    url: "https://quroixlabs.com/case-studies",
    priority: 0.8,
    changefreq: "weekly",
  },
  {
    url: "https://quroixlabs.com/research",
    priority: 0.8,
    changefreq: "daily",
  },
  {
    url: "https://quroixlabs.com/partnership",
    priority: 0.7,
    changefreq: "monthly",
  },
  {
    url: "https://quroixlabs.com/careers",
    priority: 0.7,
    changefreq: "weekly",
  },
  {
    url: "https://quroixlabs.com/request-demo",
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    url: "https://quroixlabs.com/contact",
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    url: "https://quroixlabs.com/privacy",
    priority: 0.3,
    changefreq: "yearly",
  },
  {
    url: "https://quroixlabs.com/terms",
    priority: 0.3,
    changefreq: "yearly",
  },
];

export function generateSitemap(): string {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return sitemap;
}

// Generate robots.txt content
export function generateRobotsTxt(): string {
  return `# Quroix Labs - Robots.txt
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://quroixlabs.com/sitemap.xml

# Crawl-delay for polite bots
Crawl-delay: 1

# Block bad bots
User-agent: AhrefsBot
Crawl-delay: 10

User-agent: SemrushBot
Crawl-delay: 10`;
}
