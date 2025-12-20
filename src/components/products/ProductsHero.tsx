import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function ProductsHero() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-transparent to-cyan-950/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-indigo-950/50 to-cyan-950/50 rounded-full border border-indigo-500/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              PRODUCTS & LABS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl lg:text-7xl mb-6 leading-tight"
          >
            Where intelligence meets{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              engineering
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-12"
          >
            At Quroix Labs, we don't just build solutions — we build intelligent
            systems that solve real problems at scale. Here are the flagship
            products we've crafted and the next generation of innovations we're
            developing.
          </motion.p>

          {/* Hero Image Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/30 z-10 group-hover:opacity-0 transition-opacity duration-500" />
              <ImageWithFallback
                src="/assets/dashboard.webp"
                alt="Product analytics dashboard"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/30 to-blue-600/30 z-10 group-hover:opacity-0 transition-opacity duration-500" />
              <ImageWithFallback
                src="/assets/Aii.png"
                alt="Machine learning network"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}