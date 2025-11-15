import { motion } from "motion/react";
import { Flame, Rocket, Beaker, Zap } from "lucide-react";

const pipelineItems = [
  {
    stage: "In Development",
    icon: Flame,
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-950/50 to-red-950/50",
    items: [
      {
        name: "AgentMesh",
        description: "Multi-agent orchestration platform for complex AI workflows and autonomous task execution.",
      },
      {
        name: "SmartDocs AI",
        description: "Intelligent documentation system that auto-generates and maintains technical docs from code.",
      },
    ],
  },
  {
    stage: "Coming Soon",
    icon: Rocket,
    color: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-950/50 to-purple-950/50",
    items: [
      {
        name: "VoiceFlow",
        description: "Natural voice interface builder for creating conversational AI experiences without code.",
      },
      {
        name: "DataSense",
        description: "Real-time data quality monitoring with automated cleansing and validation rules.",
      },
    ],
  },
  {
    stage: "Prototype Stage",
    icon: Beaker,
    color: "from-cyan-500 to-blue-500",
    bgColor: "from-cyan-950/50 to-blue-950/50",
    items: [
      {
        name: "CodeGenius",
        description: "AI pair programmer that understands your codebase and suggests optimizations in real-time.",
      },
      {
        name: "SecureGuard AI",
        description: "Autonomous security system that identifies vulnerabilities and patches them automatically.",
      },
    ],
  },
];

export function InnovationPipeline() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">Innovation Pipeline</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A glimpse into what we're building next
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pipelineItems.map((stage, stageIndex) => (
            <motion.div
              key={stage.stage}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: stageIndex * 0.2 }}
              className="relative group"
            >
              <div className="relative h-full p-8 bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 backdrop-blur-sm">
                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-br ${stage.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${stage.color} rounded-xl flex items-center justify-center`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stage.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl">{stage.stage}</h3>
                  </div>

                  {/* Items */}
                  <div className="space-y-4">
                    {stage.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: stageIndex * 0.2 + itemIndex * 0.1 }}
                        whileHover={{ x: 5 }}
                        className={`p-4 bg-gradient-to-br ${stage.bgColor} rounded-xl border border-gray-800/50 cursor-pointer transition-all duration-300`}
                      >
                        <div className="flex items-start gap-2 mb-2">
                          <Zap className={`w-4 h-4 mt-1 flex-shrink-0 bg-gradient-to-br ${stage.color} bg-clip-text text-transparent`} />
                          <h4 className="text-lg">{item.name}</h4>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stage Indicator */}
                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{stage.items.length} projects</span>
                      <motion.div
                        className={`px-3 py-1 bg-gradient-to-r ${stage.color} rounded-full text-xs`}
                        animate={{
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Active
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500">
            Want early access to our upcoming products?{" "}
            <motion.a
              href="#"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
              whileHover={{ x: 5 }}
            >
              Join the waitlist →
            </motion.a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
