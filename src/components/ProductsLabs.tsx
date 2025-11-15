import { motion } from "motion/react";
import { Brain, Database, Sparkles, Terminal, ArrowRight } from "lucide-react";

const products = [
  {
    icon: Brain,
    name: "Neural Insights",
    purpose: "AI-powered analytics that predict business trends before they happen.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Database,
    name: "DataForge",
    purpose: "Automated data pipelines that transform raw data into actionable intelligence.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Sparkles,
    name: "AutoFlow Studio",
    purpose: "Visual workflow builder for creating intelligent automation without code.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Terminal,
    name: "DevOps AI",
    purpose: "Intelligent deployment and monitoring system with self-healing capabilities.",
    color: "from-orange-500 to-red-500",
  },
];

export function ProductsLabs() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">Our Intelligent Tools & Labs</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Internal innovations we're building for the future
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => {
                const event = new CustomEvent("navigate", { detail: "products" });
                window.dispatchEvent(event);
              }}
              className="group relative cursor-pointer"
            >
              <div className="relative h-full bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden backdrop-blur-sm">
                {/* Preview Thumbnail Area */}
                <div className="relative h-40 bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20`}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div
                    className={`relative w-16 h-16 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <product.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Neon Accent Lines */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl mb-3 flex items-center gap-2">
                    {product.name}
                    <motion.span
                      className="inline-block"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                    </motion.span>
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {product.purpose}
                  </p>

                  <motion.button
                    className={`flex items-center gap-2 text-sm bg-gradient-to-r ${product.color} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
                    whileHover={{ x: 5 }}
                  >
                    Explore
                    <ArrowRight className="w-4 h-4 text-indigo-400" />
                  </motion.button>
                </div>

                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${product.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}