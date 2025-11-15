import { motion } from "motion/react";
import { Brain, Database, Sparkles, Terminal, ArrowRight } from "lucide-react";

const products = [
  {
    icon: Brain,
    name: "Neural Insights",
    tagline: "AI-powered analytics that predict business trends before they happen.",
    description:
      "Neural Insights transforms raw business data into actionable intelligence using advanced machine learning models. Our platform analyzes patterns across multiple data sources, identifies emerging trends, and provides predictive insights that help businesses stay ahead of the curve. With natural language querying and automated report generation, decision-makers get the information they need without waiting for data teams.",
    color: "from-indigo-500 to-purple-500",
    features: ["Real-time predictive analytics", "Natural language insights", "Automated reporting"],
  },
  {
    icon: Database,
    name: "DataForge",
    tagline: "Automated data pipelines that transform raw data into actionable intelligence.",
    description:
      "DataForge is an intelligent ETL platform that automatically discovers, cleanses, and transforms data from any source. Built for modern data teams, it eliminates manual pipeline maintenance with self-healing workflows, automatic schema detection, and smart error recovery. DataForge learns from your data patterns and continuously optimizes performance, reducing pipeline development time from weeks to hours.",
    color: "from-cyan-500 to-blue-500",
    features: ["Self-healing pipelines", "Auto schema detection", "Smart data transformation"],
  },
  {
    icon: Sparkles,
    name: "AutoFlow Studio",
    tagline: "Visual workflow builder for creating intelligent automation without code.",
    description:
      "AutoFlow Studio empowers teams to build complex automation workflows through an intuitive drag-and-drop interface. Connect APIs, databases, AI models, and business tools with pre-built integrations and custom logic blocks. The platform includes AI-assisted workflow suggestions, automatic error handling, and real-time monitoring. From simple task automation to sophisticated multi-step processes, AutoFlow makes it accessible to everyone.",
    color: "from-purple-500 to-pink-500",
    features: ["No-code automation", "AI-powered suggestions", "200+ integrations"],
  },
  {
    icon: Terminal,
    name: "DevOps AI",
    tagline: "Intelligent deployment and monitoring system with self-healing capabilities.",
    description:
      "DevOps AI revolutionizes infrastructure management with autonomous monitoring, intelligent alerting, and self-healing capabilities. The platform uses machine learning to detect anomalies, predict potential failures, and automatically remediate common issues before they impact users. With smart rollback mechanisms, predictive scaling, and security monitoring, DevOps AI keeps your systems running smoothly 24/7 while reducing operational overhead.",
    color: "from-orange-500 to-red-500",
    features: ["Self-healing infrastructure", "Predictive scaling", "Smart anomaly detection"],
  },
];

export function ProductsDetailed() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="space-y-20">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-3xl border border-gray-800 hover:border-gray-700 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                <div
                  className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br ${product.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`}
                />

                <div className="grid lg:grid-cols-[400px_1fr] gap-0">
                  {/* Thumbnail Area */}
                  <div className="relative h-80 lg:h-auto bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center overflow-hidden">
                    {/* Animated Background Pattern */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20`}
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, 0],
                      }}
                      transition={{ duration: 8, repeat: Infinity }}
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

                    {/* Floating Icon */}
                    <motion.div
                      className="relative z-10"
                      animate={{
                        y: [0, -20, 0],
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <motion.div
                        className={`w-32 h-32 bg-gradient-to-br ${product.color} rounded-3xl flex items-center justify-center`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        style={{
                          boxShadow: `0 20px 60px rgba(99, 102, 241, 0.4)`,
                        }}
                      >
                        <product.icon className="w-16 h-16 text-white" />
                      </motion.div>
                    </motion.div>

                    {/* Accent Border */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.color}`}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-12 flex flex-col justify-between">
                    <div>
                      <h3 className="text-3xl lg:text-4xl mb-3">{product.name}</h3>
                      <p className={`text-lg mb-6 bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                        {product.tagline}
                      </p>
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {product.description}
                      </p>

                      {/* Key Features */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {product.features.map((feature, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className={`px-4 py-2 bg-gradient-to-r ${product.color} bg-opacity-10 rounded-full text-sm border border-gray-700`}
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div>
                      <motion.button
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className={`px-8 py-4 bg-gradient-to-r ${product.color} rounded-xl flex items-center gap-2 hover:shadow-2xl transition-shadow`}
                        style={{
                          boxShadow: "0 0 30px rgba(99, 102, 241, 0.3)",
                        }}
                      >
                        Explore Product
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
