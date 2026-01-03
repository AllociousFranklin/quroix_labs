import { motion } from "motion/react";
import { ResearchHero } from "./research/ResearchHero";
import { FeaturedArticle } from "./research/FeaturedArticle";
import { NewsletterCTA } from "./research/NewsletterCTA";

export function ResearchPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20 bg-[#0a0a0a]"
    >
      <ResearchHero />
      <FeaturedArticle />
      <NewsletterCTA />
    </motion.div>
  );
}