import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

/* Layout & UI */
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ScrollProgress } from "./components/ScrollProgress";

/* Pages */
import { HomePage } from "./components/HomePage";
import { ServicesPage } from "./components/ServicesPage";
import { ProductsPage } from "./components/ProductsPage";
import { CaseStudiesPage } from "./components/CaseStudiesPage";
import { ResearchPage } from "./components/ResearchPage";
import { CareersPage } from "./components/CareersPage";
import { ApplyPage } from "./components/ApplyPage";
import { PartnershipPage } from "./components/PartnershipPage";
import { RequestDemoPage } from "./components/RequestDemoPage";
import { ContactPage } from "./components/ContactPage";
import { PrivacyPage } from "./components/PrivacyPage";
import { TermsPage } from "./components/TermsPage";

/* SEO (NEW SYSTEM) */
import { SEO } from "./seo/SEO";
import { pageSEO } from "./seo/pageSeo";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  /* Listen for custom navigation events */
  useEffect(() => {
    const handleNavigate = (e: CustomEvent) => {
      setCurrentPage(e.detail);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("navigate", handleNavigate as EventListener);
    return () =>
      window.removeEventListener("navigate", handleNavigate as EventListener);
  }, []);

  /* SEO configuration based on current page */
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
      {/* SEO updates dynamically on page change */}
      <SEO {...getSEOConfig()} />

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
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
