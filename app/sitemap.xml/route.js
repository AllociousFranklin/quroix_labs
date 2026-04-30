import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://quroixlabs.com';
  const lastMod = '2026-04-30';

  const pages = [
    {
      url: `${baseUrl}/`,
      priority: '1.0',
      changefreq: 'daily',
      images: [
        {
          loc: `${baseUrl}/images/quroixlabs.png`,
          title: 'Quroix Labs - Engineering Intelligence & AI Automation',
          caption: 'Architecting autonomous AI agents and intelligent workflows for the global enterprise.'
        }
      ],
      videos: [
        {
          thumbnail_loc: `${baseUrl}/images/quroixlabs.png`,
          title: 'Quroix Labs - Engineering Intelligence Showreel',
          description: 'Showcasing autonomous AI agents and enterprise-grade automation solutions powered by FlowPilot and AgentCore.',
          content_loc: `${baseUrl}/videos/hero.mp4`,
          player_loc: `${baseUrl}/`,
          duration: 60,
          publication_date: '2026-04-30T00:00:00Z'
        }
      ]
    },
    {
      url: `${baseUrl}/about`,
      priority: '0.9',
      changefreq: 'monthly',
      images: [
        {
          loc: `${baseUrl}/images/quroix_logo.svg`,
          title: 'About Quroix Labs',
          caption: 'Elite AI automation agency and engineering consultancy.'
        }
      ]
    },
    {
      url: `${baseUrl}/works`,
      priority: '0.9',
      changefreq: 'weekly',
      images: [
        {
          loc: `${baseUrl}/mockups/trielement.webp`,
          title: 'Our Portfolio of AI Solutions',
          caption: 'Showcasing 50+ projects and 10,000+ hours of manual labor replaced.'
        }
      ]
    },
    {
      url: `${baseUrl}/contact`,
      priority: '0.8',
      changefreq: 'monthly'
    },
    {
      url: `${baseUrl}/works/casestudy-bim`,
      priority: '0.8',
      changefreq: 'monthly',
      images: [
        {
          loc: `${baseUrl}/mockups/trielement.webp`,
          title: 'BIM Engineering Studio Case Study',
          caption: '3.5x faster ROI through AgentCore Framework and custom RAG pipelines.'
        }
      ]
    },
    {
      url: `${baseUrl}/works/casestudy-mep`,
      priority: '0.8',
      changefreq: 'monthly',
      images: [
        {
          loc: `${baseUrl}/images/test18.webp`,
          title: 'MEP Design Consultants Case Study',
          caption: '30% reduction in technical bid response latency via FlowPilot engine.'
        }
      ]
    },
    {
      url: `${baseUrl}/works/casestudy-smma`,
      priority: '0.8',
      changefreq: 'monthly',
      images: [
        {
          loc: `${baseUrl}/images/test19.webp`,
          title: 'SMMA Agency Case Study',
          caption: '40% growth in high-intent lead generation through automated engagement.'
        }
      ]
    },
    {
      url: `${baseUrl}/works/casestudy-gym`,
      priority: '0.8',
      changefreq: 'monthly',
      images: [
        {
          loc: `${baseUrl}/images/test20.webp`,
          title: 'Apex Gym Case Study',
          caption: '30% reduction in membership churn via persistent retention agents.'
        }
      ]
    },
    {
      url: `${baseUrl}/terms`,
      priority: '0.3',
      changefreq: 'yearly'
    },
    {
      url: `${baseUrl}/privacy`,
      priority: '0.3',
      changefreq: 'yearly'
    },
    {
      url: `${baseUrl}/cookies`,
      priority: '0.3',
      changefreq: 'yearly'
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${pages
    .map((page) => {
      return `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${page.images ? page.images.map(img => `
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title><![CDATA[${img.title}]]></image:title>
      <image:caption><![CDATA[${img.caption}]]></image:caption>
    </image:image>`).join('') : ''}
    ${page.videos ? page.videos.map(vid => `
    <video:video>
      <video:thumbnail_loc>${vid.thumbnail_loc}</video:thumbnail_loc>
      <video:title><![CDATA[${vid.title}]]></video:title>
      <video:description><![CDATA[${vid.description}]]></video:description>
      <video:content_loc>${vid.content_loc}</video:content_loc>
      <video:player_loc>${vid.player_loc}</video:player_loc>
      <video:duration>${vid.duration}</video:duration>
      <video:publication_date>${vid.publication_date}</video:publication_date>
    </video:video>`).join('') : ''}
  </url>`;
    })
    .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=600',
    },
  });
}
