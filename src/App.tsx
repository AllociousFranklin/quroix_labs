import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
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
import { Footer } from "./components/Footer";
import { SEO, pageSEO } from "./components/SEO";
import { ScrollProgress } from "./components/ScrollProgress";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Listen for navigation events from components
  useEffect(() => {
    const handleNavigate = (e: CustomEvent) => {
      setCurrentPage(e.detail);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("navigate", handleNavigate as EventListener);
    return () => window.removeEventListener("navigate", handleNavigate as EventListener);
  }, []);

  // Get SEO config for current page
  const getSEOConfig = () => {
    switch (currentPage) {
      case "home":
        return pageSEO.home;
      case "services":
        return pageSEO.services;
      case "products":
        return pageSEO.products;
      case "case-studies":
        return pageSEO.caseStudies;
      case "research":
        return pageSEO.research;
      case "careers":
        return pageSEO.careers;
      case "apply":
        return {
          title: "Apply Now | Quroix Labs",
          description: "Apply for open positions at Quroix Labs. Join our team and build intelligent systems, automation tools, and digital products.",
          keywords: "quroix labs careers, job application, apply now, join team, career opportunities"
        };
      case "partnership":
        return pageSEO.partnership;
      case "request-demo":
        return pageSEO.requestDemo;
      case "contact":
        return pageSEO.contact;
      case "privacy":
        return pageSEO.privacy;
      case "terms":
        return pageSEO.terms;
      default:
        return pageSEO.home;
    }
  };

  // Render current page with smooth transitions
  const renderPage = () => {
    switch (currentPage) {
      case "home": return <HomePage />;
      case "services": return <ServicesPage />;
      case "products": return <ProductsPage />;
      case "case-studies": return <CaseStudiesPage />;
      case "research": return <ResearchPage />;
      case "partnership": return <PartnershipPage />;
      case "careers": return <CareersPage />;
      case "apply": return <ApplyPage />;
      case "request-demo": return <RequestDemoPage />;
      case "contact": return <ContactPage />;
      case "privacy": return <PrivacyPage />;
      case "terms": return <TermsPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
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