import "./globals.css";
import { Navigation } from "./Navigation";
import Script from "next/script";
import { SchemaMarkup } from "./components/SchemaMarkup";
import { Inter, Space_Grotesk } from 'next/font/google';

const sfProText = Inter({
  subsets: ['latin'],
  variable: '--font-sf-text',
  display: 'swap',
});

const sfProDisplay = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sf-display',
  display: 'swap',
});

const causten = Inter({
  subsets: ['latin'],
  variable: '--font-causten',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://quroixlabs.com'),
  title: {
    default: "Quroix Labs | Engineering Intelligence & AI Automation for Enterprise",
    template: "%s | Quroix Labs",
  },
  description: "Quroix Labs is an elite AI automation agency architecting autonomous AI agents, intelligent workflows, and custom software. Utilizing the proprietary FlowPilot engine and AgentCore Framework for enterprise-grade automation.",
  keywords: ["AI Automation Agency", "Autonomous AI Agents", "Intelligent Workflows", "FlowPilot engine", "AgentCore Framework", "Enterprise AI Architecture", "RAG pipeline architecture", "LLM orchestration", "n8n integration", "business automation", "custom software development", "AI agents for enterprise", "workflow automation", "Quroix Labs"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Quroix Labs | Engineering Intelligence & AI Automation",
    description: "Architecting autonomous AI agents and intelligent workflows for the global enterprise. 50+ projects delivered, 10,000+ hours of manual labor replaced.",
    images: [{ url: "/images/quroixlabs.png", width: 1200, height: 630, alt: "Quroix Labs - Engineering Intelligence & AI Automation Agency" }],
    url: 'https://quroixlabs.com',
    siteName: 'Quroix Labs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@quroixlabs',
    creator: '@quroixlabs',
    title: "Quroix Labs | Engineering Intelligence & AI Automation",
    description: "Architecting autonomous AI agents and intelligent workflows for the global enterprise.",
    images: ["/images/quroixlabs.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'G-PKD0WX02BV', // Current GA4 ID
    // googleSearchConsole: 'YOUR_VERIFICATION_ID_HERE', 
  },
  category: 'technology',
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

        <SchemaMarkup />
      </head>
      <body className={`${sfProText.variable} ${sfProDisplay.variable} ${causten.variable}`}>
        <Navigation />
        {children}

        {/* Deferred Google Analytics (3.5s delay for performance) */}
        <Script
          id="deferred-gtag"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              const loadGTM = function () {
                if (window.gtmLoaded) return;
                window.gtmLoaded = true;
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
                ['scroll', 'mousemove', 'touchstart', 'keydown'].forEach(e => window.removeEventListener(e, loadGTM));
              };
              ['scroll', 'mousemove', 'touchstart', 'keydown'].forEach(e => window.addEventListener(e, loadGTM, { once: true, passive: true }));
              setTimeout(loadGTM, 7000);
            `,
          }}
        />
      </body>
    </html>
  );
}
