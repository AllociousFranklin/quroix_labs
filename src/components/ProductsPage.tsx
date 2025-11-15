import { motion } from "motion/react";
import { ProductsHero } from "./products/ProductsHero";
import { ProductsDetailed } from "./products/ProductsDetailed";
import { InnovationPipeline } from "./products/InnovationPipeline";
import { WhyTheseProductsMatter } from "./products/WhyTheseProductsMatter";
import { ProductsCTA } from "./products/ProductsCTA";

export function ProductsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <ProductsHero />
      <ProductsDetailed />
      <InnovationPipeline />
      <WhyTheseProductsMatter />
      <ProductsCTA />
    </motion.div>
  );
}
