import { motion } from "motion/react";
import { ServicesHero } from "./services/ServicesHero";
import { ServicesDetailed } from "./services/ServicesDetailed";
import { OurProcess } from "./services/OurProcess";
import { TechnologiesWeUse } from "./services/TechnologiesWeUse";
import { ServicesCTA } from "./services/ServicesCTA";

export function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <ServicesHero />
      <ServicesDetailed />
      <OurProcess />
      <TechnologiesWeUse />
      <ServicesCTA />
    </motion.div>
  );
}
