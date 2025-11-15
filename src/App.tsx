import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { ServicesPage } from "./components/ServicesPage";
import { ProductsPage } from "./components/ProductsPage";
import { CaseStudiesPage } from "./components/CaseStudiesPage";
import { ResearchPage } from "./components/ResearchPage";
import { CareersPage } from "./components/CareersPage";
import { RequestDemoPage } from "./components/RequestDemoPage";
import { ContactPage } from "./components/ContactPage";
import { PrivacyPage } from "./components/PrivacyPage";
import { TermsPage } from "./components/TermsPage";
import { Footer } from "./components/Footer";

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

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "home" && <HomePage />}
      {currentPage === "services" && <ServicesPage />}
      {currentPage === "products" && <ProductsPage />}
      {currentPage === "case-studies" && <CaseStudiesPage />}
      {currentPage === "research" && <ResearchPage />}
      {currentPage === "careers" && <CareersPage />}
      {currentPage === "request-demo" && <RequestDemoPage />}
      {currentPage === "contact" && <ContactPage />}
      {currentPage === "privacy" && <PrivacyPage />}
      {currentPage === "terms" && <TermsPage />}
      <Footer />
    </div>
  );
}