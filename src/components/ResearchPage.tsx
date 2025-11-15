import { motion } from "motion/react";
import { ResearchHero } from "./research/ResearchHero";
import { FeaturedArticle } from "./research/FeaturedArticle";
import { BlogGrid } from "./research/BlogGrid";
import { NewsletterCTA } from "./research/NewsletterCTA";

export function ResearchPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <ResearchHero />
      <FeaturedArticle />
      <BlogGrid />
      <NewsletterCTA />
    </motion.div>
  );
}
