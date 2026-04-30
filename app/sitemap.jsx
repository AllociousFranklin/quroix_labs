export default function sitemap() {
  const baseUrl = 'https://quroixlabs.com';

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date('2026-04-30'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-04-30'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/works`,
      lastModified: new Date('2026-04-30'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2026-04-15'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Case Studies
    {
      url: `${baseUrl}/works/casestudy-mep`,
      lastModified: new Date('2026-04-30'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/works/casestudy-bim`,
      lastModified: new Date('2026-04-30'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/works/casestudy-smma`,
      lastModified: new Date('2026-04-30'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/works/casestudy-gym`,
      lastModified: new Date('2026-04-30'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Legal Pages
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}