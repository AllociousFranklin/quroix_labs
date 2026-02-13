import "./globals.css";
import { Navigation } from "./Navigation";
import Script from "next/script";

export const metadata = {
  title: "Quroixlabs | Websites, Automations & Software Engineered for Real-World Impact",
  description: "Build high-performance digital systems that drive growth. Custom websites, intelligent automation, and scalable software designed for startups and enterprises.",
  keywords: ["website design", "UX/UI design", "web development", "full-stack development", "custom websites", "digital solutions", "automation systems", "business automation", "custom software development", "enterprise software", "scalable web platforms", "intelligent automation", "workflow automation", "digital transformation", "AI automation", "process automation", "web applications", "SaaS development", "API development", "database design", "cloud solutions", "DevOps automation"],
  alternates: {
    canonical: 'https://quroixlabs.com/',
  },
  openGraph: {
    title: "Quroixlabs | Websites, Automations & Software Engineered for Real-World Impact",
    description: "Build high-performance digital systems that drive growth. Custom websites, intelligent automation, and scalable software designed for startups and enterprises.",
    images: [{ url: "/images/quroix_logo.svg", width: 1200, height: 630, alt: "Quroix Labs - Engineering Digital Systems" }],
    url: 'https://quroixlabs.com',
    siteName: 'Quroix Labs',
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Font Preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
        />

        {/* Critical Hero CSS */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .hero-h1 {
                font-family: 'Inter', sans-serif;
                font-size: 3rem;
                line-height: 1;
                letter-spacing: -0.025em;
                font-weight: 500;
                color: white;
              }
              @media (min-width: 1024px) {
                .hero-h1 {
                  font-size: 4.5rem;
                }
              }
            `,
          }}
        />

        {/* GTM & GA Preconnects */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://firebaseinstallations.googleapis.com" />

        {/* Organization Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://quroixlabs.com/#organization",
              "name": "Quroix Labs",
              "url": "https://quroixlabs.com",
              "logo": "https://quroixlabs.com/assets/Q.png.48x48.png",
              "sameAs": [
                "https://www.linkedin.com/company/quroixlabs",
                "https://x.com/quroixlabs",
                "https://www.youtube.com/@quroixlabs",
                "https://www.instagram.com/quroixlabs",
                "https://github.com/quroixlabs",
                "https://medium.com/@quroixlabs"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-6382696238",
                "contactType": "customer service"
              }
            }),
          }}
        />

        {/* Website Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Quroix Labs",
              "url": "https://quroixlabs.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://quroixlabs.com/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body>
        {/* Hidden SEO Backlinks Section */}
        <section style={{ display: "none" }} aria-hidden="true">
          <h1>Quroix Labs: Engineering Intelligence & AI Automation</h1>
          <p>
            Quroix Labs specializes in autonomous AI agents, intelligent systems,
            and scalable digital platforms using our proprietary FlowPilot engine.
          </p>
          <nav>
            <ul>
              <li>AI Automation Agency</li>
              <li>Autonomous AI Agents</li>
              <li>AgentCore Framework</li>
              <li>Intelligent Workflows</li>
            </ul>
          </nav>
        </section>

        <Navigation />
        {children}

        {/* Deferred Google Analytics (3.5s delay for performance) */}
        <Script
          id="deferred-gtag"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              setTimeout(function () {
                var script = document.createElement('script');
                script.async = true;
                script.src = "https://www.googletagmanager.com/gtag/js?id=G-PKD0WX02BV";
                document.head.appendChild(script);

                script.onload = function () {
                  window.dataLayer = window.dataLayer || [];
                  function gtag() { dataLayer.push(arguments); }
                  gtag('js', new Date());
                  gtag('config', 'G-PKD0WX02BV');
                };
              }, 3500);
            `,
          }}
        />
      </body>
    </html>
  );
}

