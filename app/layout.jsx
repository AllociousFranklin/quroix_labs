import "./globals.css";
import { Navigation } from "./Navigation";
import Script from "next/script";
import { SchemaMarkup } from "./components/SchemaMarkup";

export const metadata = {
  metadataBase: new URL('https://quroixlabs.com'),
  title: "QuroixLabs | Engineering Intelligence & AI Automation for Enterprise",
  description: "Architecting autonomous AI agents, intelligent workflows, and custom software. Elite AI automation agency utilizing the FlowPilot engine and AgentCore Framework.",
  keywords: ["AI Automation Agency", "Autonomous AI Agents", "Intelligent Workflows", "FlowPilot engine", "AgentCore Framework", "Enterprise AI Architecture", "RAG pipeline architecture", "LLM orchestration", "n8n integration", "business automation", "custom software development"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "QuroixLabs | Engineering Intelligence & AI Automation",
    description: "Architecting autonomous AI agents and intelligent workflows for the global enterprise.",
    images: [{ url: "/icon.svg", width: 1200, height: 630, alt: "QuroixLabs - Engineering Intelligence" }],
    url: 'https://quroixlabs.com',
    siteName: 'QuroixLabs',
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
        <link rel="alternate" type="text/markdown" title="Markdown Mirror" href="/mirrors/index.md" />

        <SchemaMarkup />
      </head>
      <body>
        {/* Hidden SEO Backlinks Section */}
        <section style={{ display: "none" }} aria-hidden="true">
          <h1>QuroixLabs: Engineering Intelligence & AI Automation</h1>
          <p>
            QuroixLabs specializes in autonomous AI agents, intelligent systems,
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

