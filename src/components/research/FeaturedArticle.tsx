import { motion } from "motion/react";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

export function FeaturedArticle() {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-3xl border border-gray-800 hover:border-gray-700 transition-all duration-500 backdrop-blur-sm overflow-hidden">
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="grid lg:grid-cols-[500px_1fr] gap-0">
              {/* Featured Image */}
              <div className="relative h-80 lg:h-auto bg-gradient-to-br from-indigo-900/30 to-cyan-900/30 flex items-center justify-center overflow-hidden">
                {/* Animated Pattern */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-cyan-600/20"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />

                {/* Grid Pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                  }}
                />

                {/* Featured Badge */}
                <motion.div
                  className="absolute top-6 left-6 px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-lg text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  Featured
                </motion.div>

                {/* Central Icon */}
                <motion.div
                  className="relative z-10 text-6xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🚀
                </motion.div>

                {/* Accent Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-12 flex flex-col justify-between">
                <div>
                  <motion.span
                    className="inline-block px-3 py-1 bg-indigo-950/50 rounded-full text-sm text-indigo-400 border border-indigo-500/30 mb-4"
                  >
                    Artificial Intelligence
                  </motion.span>

                  <h2 className="text-3xl lg:text-4xl mb-4">
                    The Future of Agentic AI: Beyond Simple Automation
                  </h2>

                  <p className="text-lg text-gray-400 leading-relaxed mb-6">
                    We are moving from "chatbots" to autonomous agents capable of planning, coding, and decision-making.
                    At Quroix Labs, we explore how "Agentic AI" is redefining software engineering, allowing us to build
                    complex systems with unprecedented speed and precision.
                  </p>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Quroix Intelligence Team
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Jan 01, 2026
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      8 min read
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <motion.button
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      window.open(
                        "https://medium.com/@quroixlabs/the-future-of-agentic-ai-beyond-ai-automations-4ff96bcf284f?postPublishedType=repub",
                        "_blank"
                      )
                    }
                    className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl flex items-center gap-2 hover:shadow-2xl transition-shadow"
                    style={{
                      boxShadow: "0 0 30px rgba(99, 102, 241, 0.3)",
                    }}
                  >
                    Read Full Article
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
