import { motion } from "motion/react";
import { ResearchHero } from "./research/ResearchHero";
import { FeaturedArticle } from "./research/FeaturedArticle";
import { BlogGrid } from "./research/BlogGrid";
import { NewsletterCTA } from "./research/NewsletterCTA";

export function ResearchPage() {
  return (
    <div className="pt-20 bg-[#0a0a0a] min-h-screen">
      <ResearchHero />
      <FeaturedArticle />
      <BlogGrid />
      <NewsletterCTA />
    </div>
  );
}