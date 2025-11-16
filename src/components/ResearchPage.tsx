import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function ResearchPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <section className="min-h-screen flex items-center justify-center py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-transparent to-cyan-950/20" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20 rounded-full">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span className="text-sm text-gray-300">Coming Soon</span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-5xl lg:text-7xl">Research</h1>
              <p className="text-2xl lg:text-3xl text-gray-400">
                Deep Intelligence, Coming Soon
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6 text-lg text-gray-400 leading-relaxed"
            >
              <p>
                At Quroix Labs, we're building a dedicated space for insights, technical
                explorations, and engineering research that reflect the way we design and
                deploy intelligent systems.
              </p>

              {/* List */}
              <div className="space-y-3 text-left max-w-2xl mx-auto">
                <p className="text-gray-300">This will include:</p>
                <ul className="space-y-2 pl-6">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span>Thought pieces on AI, autonomy, and automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span>
                      Engineering breakdowns of how we build high-performance systems
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span>Explorations of emerging technologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-400 mt-1">•</span>
                    <span>Internal research from Quroix Labs engineers</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2 pt-4">
                <p className="text-gray-300">Our goal is simple:</p>
                <p className="text-xl text-white">
                  To share the intelligence behind the intelligence we build.
                </p>
              </div>

              <p className="text-xl text-indigo-400 pt-4">Launching Soon.</p>

              <p className="pt-2">
                If you'd like early access to our first research releases, you can join the
                list below.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent("navigate", { detail: "contact" })
                  );
                }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl hover:shadow-2xl transition-all"
                style={{
                  boxShadow: "0 0 40px rgba(99, 102, 241, 0.4)",
                }}
              >
                <span className="text-lg">Notify Me</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}