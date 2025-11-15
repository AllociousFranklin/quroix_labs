import { motion } from "motion/react";
import { CareersHero } from "./careers/CareersHero";
import { WhyJoinUs } from "./careers/WhyJoinUs";
import { OpenRoles } from "./careers/OpenRoles";
import { CultureSection } from "./careers/CultureSection";
import { CareersCTA } from "./careers/CareersCTA";

export function CareersPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <CareersHero />
      <WhyJoinUs />
      <OpenRoles />
      <CultureSection />
      <CareersCTA />
    </motion.div>
  );
}
