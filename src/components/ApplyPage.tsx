import { motion } from "motion/react";
import { ApplyHero } from "./apply/ApplyHero";
import { ApplyForm } from "./apply/ApplyForm";

export function ApplyPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <ApplyHero />
      <ApplyForm />
    </motion.div>
  );
}
