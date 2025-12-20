import { motion } from "motion/react";
import { Workflow, BarChart3, Bot, Layers } from "lucide-react";

const products = [
  {
    icon: Workflow,
    name: "FlowPilot",
    subtitle: "Workflow Engine",
    description: "Internal tool we use to speed up automation and process design for client projects. Makes repetitive logic faster to build and deploy. Built with modular templates that we can customize per project, reducing development time by 60% while maintaining quality and flexibility.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: BarChart3,
    name: "InsightGrid",
    subtitle: "Analytics Framework",
    description: "A modular analytics layer we use to create dashboards, reports, and intelligence features inside client platforms. Provides pre-built components for data visualization, real-time monitoring, and predictive insights that we integrate seamlessly into custom solutions.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Bot,
    name: "AgentCore",
    subtitle: "AI Agent Base Model",
    description: "Our internal agent framework that lets us create custom AI assistants for different business workflows. Handles natural language processing, context management, and tool integration, allowing us to deploy intelligent agents faster across various industries and use cases.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Layers,
    name: "ForgeStack",
    subtitle: "Deployment Toolkit",
    description: "Lightweight DevOps and monitoring toolkit we use to deploy and maintain client products efficiently. Automates containerization, scaling, health checks, and incident response. Ensures 99.9% uptime with automated rollbacks and proactive monitoring across all deployments.",
    color: "from-orange-500 to-red-500",
  },
];

export function ProductsLabs() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />

      {/* Animated background orb */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">Our Intelligent Tools & Labs</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Internal systems we're building to improve how we deliver intelligence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Multi-layer glow border */}
              <div className={`absolute -inset-[1px] bg-gradient-to-br ${product.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
              <div className={`absolute -inset-[2px] bg-gradient-to-br ${product.color} rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl`} />

              <div className="relative h-full bg-gradient-to-br from-gray-900/90 to-gray-950/90 rounded-2xl border border-gray-800 group-hover:border-transparent transition-all duration-300 backdrop-blur-sm overflow-hidden">
                {/* Header with icon */}
                <div className="relative p-6 pb-4 border-b border-gray-800/50">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`relative w-14 h-14 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg`} />
                      <product.icon className="w-7 h-7 text-white relative z-10" />
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-medium text-white mb-1">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500">{product.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="p-6 pt-5">
                  <p className="text-gray-400 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Animated Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Glow Effect */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${product.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}