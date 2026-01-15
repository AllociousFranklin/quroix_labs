import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";

/* Layout & UI */
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";
import { CommandPalette } from "./components/CommandPalette";
import { SmoothScroll } from "./components/SmoothScroll";

/* Pages */
import { HomePage } from "./components/HomePage";
import { CustomCursor } from "./components/CustomCursor";

// Lazy load heavy pages
const ServicesPage = lazy(() => import("./components/ServicesPage").then(m => ({ default: m.ServicesPage })));
const ProductsPage = lazy(() => import("./components/ProductsPage").then(m => ({ default: m.ProductsPage })));
const CaseStudiesPage = lazy(() => import("./components/CaseStudiesPage").then(m => ({ default: m.CaseStudiesPage })));
const ResearchPage = lazy(() => import("./components/ResearchPage").then(m => ({ default: m.ResearchPage })));
const CareersPage = lazy(() => import("./components/CareersPage").then(m => ({ default: m.CareersPage })));
const ApplyPage = lazy(() => import("./components/ApplyPage").then(m => ({ default: m.ApplyPage })));
const PartnershipPage = lazy(() => import("./components/PartnershipPage").then(m => ({ default: m.PartnershipPage })));
const RequestDemoPage = lazy(() => import("./components/RequestDemoPage").then(m => ({ default: m.RequestDemoPage })));
const ContactPage = lazy(() => import("./components/ContactPage").then(m => ({ default: m.ContactPage })));
const PrivacyPage = lazy(() => import("./components/PrivacyPage").then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import("./components/TermsPage").then(m => ({ default: m.TermsPage })));

/* SEO */
import { SEO } from "./seo/SEO";
import { pageSEO } from "./seo/pageSeo";

/* URL ↔ Page mapping */
const ROUTES: Record<string, string> = {
  "/": "home",
  "/services": "services",
  "/products": "products",
  "/case-studies": "case-studies",
  "/research": "research",
  "/careers": "careers",
  "/apply": "apply",
  "/partnership": "partnership",
  "/request-demo": "request-demo",
  "/contact": "contact",
  "/privacy": "privacy",
  "/terms": "terms"
};

export default function App() {
  /* Initialize page from URL */
  const [currentPage, setCurrentPage] = useState(() => {
    return ROUTES[window.location.pathname] || "home";
  });

  /* Handle in-app navigation events */
  useEffect(() => {
    const handleNavigate = (e: CustomEvent) => {
      const page = e.detail;
      const path =
        Object.keys(ROUTES).find(key => ROUTES[key] === page) || "/";

      window.history.pushState({}, "", path);
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("navigate", handleNavigate as EventListener);
    return () =>
      window.removeEventListener("navigate", handleNavigate as EventListener);
  }, []);



  /* Handle browser back / forward buttons */
  useEffect(() => {
    const onPopState = () => {
      const page = ROUTES[window.location.pathname] || "home";
      setCurrentPage(page);
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  /* Track page views for Google Analytics (SPA) */
  useEffect(() => {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "page_view", {
        page_path: window.location.pathname,
        page_title: document.title
      });
    }
  }, [currentPage]);


  /* SEO configuration */
  const getSEOConfig = () => {
    switch (currentPage) {
      case "home":
        return { ...pageSEO.home, type: "home" };

      case "services":
        return {
          ...pageSEO.services,
          type: "service",
          serviceName: "AI Development Services"
        };

      case "products":
        return { ...pageSEO.products, type: "home" };

      case "case-studies":
        return { ...pageSEO.caseStudies, type: "home" };

      case "research":
        return { ...pageSEO.research, type: "home" };

      case "careers":
        return { ...pageSEO.careers, type: "home" };

      case "apply":
        return {
          title: "Apply Now | Quroix Labs",
          description:
            "Apply for open positions at Quroix Labs. Join our team and build intelligent AI systems.",
          canonical: "https://quroixlabs.com/apply",
          type: "home"
        };

      case "partnership":
        return { ...pageSEO.partnership, type: "home" };

      case "request-demo":
        return { ...pageSEO.requestDemo, type: "home" };

      case "contact":
        return { ...pageSEO.contact, type: "home" };

      case "privacy":
        return { ...pageSEO.privacy, type: "home" };

      case "terms":
        return { ...pageSEO.terms, type: "home" };

      default:
        return { ...pageSEO.home, type: "home" };
    }
  };

  /* Render current page */
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "services":
        return <ServicesPage />;
      case "products":
        return <ProductsPage />;
      case "case-studies":
        return <CaseStudiesPage />;
      case "research":
        return <ResearchPage />;
      case "partnership":
        return <PartnershipPage />;
      case "careers":
        return <CareersPage />;
      case "apply":
        return <ApplyPage />;
      case "request-demo":
        return <RequestDemoPage />;
      case "contact":
        return <ContactPage />;
      case "privacy":
        return <PrivacyPage />;
      case "terms":
        return <TermsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Dynamic SEO */}
      <SEO {...getSEOConfig()} />

      <SmoothScroll />
      <CustomCursor />
      <CommandPalette />
      <ScrollProgress />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Suspense fallback={<div className="min-h-screen bg-black/90" />}>
            {renderPage()}
          </Suspense>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
