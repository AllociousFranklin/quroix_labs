import { motion } from "motion/react";
import { CaseStudiesHero } from "./casestudies/CaseStudiesHero";
import { CaseStudiesGrid } from "./casestudies/CaseStudiesGrid";
import { CaseStudiesCTA } from "./casestudies/CaseStudiesCTA";

export function CaseStudiesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <CaseStudiesHero />
      <CaseStudiesGrid />
      <CaseStudiesCTA />
    </motion.div>
  );
}
