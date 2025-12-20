import { motion } from "motion/react";
import { Rocket } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function CareersHero() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-transparent to-cyan-950/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-indigo-950/50 to-cyan-950/50 rounded-full border border-indigo-500/30 mb-8"
            >
              <Rocket className="w-4 h-4 text-indigo-400" />
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                We're Just Getting Started
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl mb-8 leading-tight"
            >
              Careers at{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Quroix Labs
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl mb-6 text-white"
            >
              Join us in our early days. Build something
              meaningful.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-gray-400 leading-relaxed mb-4"
            >
              Quroix Labs is a young and fast-moving team building
              intelligent systems, automation tools, and digital
              products for founders and businesses.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-400 leading-relaxed"
            >
              If you want to grow fast, solve real problems, and
              build products that make an impact, you'll fit right
              in.
            </motion.p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 group-hover:border-indigo-500/50 transition-colors duration-500">
              <ImageWithFallback
                src="/assets/carrers.png"
                alt="Quroix Labs office workspace"
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