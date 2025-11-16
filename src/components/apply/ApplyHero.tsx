import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function ApplyHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-transparent to-cyan-950/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-indigo-950/50 to-cyan-950/50 rounded-full border border-indigo-500/30 mb-8"
            >
              <Briefcase className="w-4 h-4 text-indigo-400" />
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Join Our Team
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-6xl mb-6 leading-tight"
            >
              Apply to{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Quroix Labs
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 leading-relaxed"
            >
              We're excited to learn more about you. Fill out the form below and we'll get back to you within 3-5 business days.
            </motion.p>
          </motion.div>

          {/* Professional Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative group hidden lg:block"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 group-hover:border-indigo-500/50 transition-colors duration-500">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1752170080622-18196de87763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3JraW5nfGVufDF8fHx8MTc2MzI0OTkxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional developer working"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}