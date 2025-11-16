import { motion } from "motion/react";
import { ArrowRight, Rocket, CheckCircle2 } from "lucide-react";

export function ProductsCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-transparent to-cyan-950/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative p-12 lg:p-16 bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-3xl border border-gray-800 backdrop-blur-sm">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-3xl opacity-20 blur-2xl" />

            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-indigo-950/50 to-cyan-950/50 rounded-full border border-indigo-500/30 mb-6"
                >
                  <Rocket className="w-4 h-4 text-indigo-400" />
                  <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                    Work With Us
                  </span>
                </motion.div>

                <h2 className="text-4xl lg:text-5xl mb-6">
                  Work With Us
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  We apply the same excellence from our internal products to the
                  projects we build for clients.
                </p>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg mb-1">MVP in 2–4 weeks</h3>
                    <p className="text-sm text-gray-400">
                      Fast turnaround without compromising quality
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg mb-1">End-to-end product development</h3>
                    <p className="text-sm text-gray-400">
                      From concept to deployment and beyond
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg mb-1">Launch & scaling support</h3>
                    <p className="text-sm text-gray-400">
                      Ongoing support included
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    window.dispatchEvent(
                      new CustomEvent("navigate", { detail: "request-demo" })
                    );
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl hover:shadow-lg transition-shadow flex items-center gap-3"
                >
                  🟦 Start a Project
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    window.dispatchEvent(
                      new CustomEvent("navigate", { detail: "partnership" })
                    );
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-lg transition-shadow flex items-center gap-3"
                >
                  🟣 Let's Collaborate
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-600/20 to-transparent rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-cyan-600/20 to-transparent rounded-br-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}