import { motion } from "motion/react";
import { Search, Lightbulb, Code2, TestTube2, Rocket } from "lucide-react";

const stages = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We dive deep into your business needs, challenges, and goals. Through workshops and analysis, we map out the perfect solution architecture.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    description:
      "Develop a comprehensive roadmap with clear milestones, technical specifications, and timelines. We align technology choices with business objectives.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Build your solution using agile methodologies with continuous feedback loops. Regular demos ensure we're always aligned with your vision.",
    color: "from-pink-500 to-orange-500",
  },
  {
    icon: TestTube2,
    title: "Testing",
    description:
      "Rigorous QA processes including automated testing, security audits, and performance optimization. We ensure quality at every level.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description:
      "Smooth launch with zero-downtime deployment strategies. Post-launch support and monitoring ensure everything runs perfectly from day one.",
    color: "from-blue-500 to-indigo-500",
  },
];

export function OurProcess() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">Our Process</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A proven methodology that delivers results every time
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line - Hidden on mobile, shown on lg */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 transform -translate-x-1/2" />

          <div className="space-y-12">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative p-8 bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 backdrop-blur-sm group"
                  >
                    {/* Glow Effect */}
                    <motion.div
                      className={`absolute -inset-1 bg-gradient-to-br ${stage.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <motion.div
                          className={`w-14 h-14 bg-gradient-to-br ${stage.color} rounded-xl flex items-center justify-center`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <stage.icon className="w-7 h-7 text-white" />
                        </motion.div>
                        <div>
                          <div className="text-sm text-gray-500">Step {index + 1}</div>
                          <h3 className="text-2xl">{stage.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-400 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Center Circle - Only visible on large screens */}
                <div className="hidden lg:block relative flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className={`w-16 h-16 bg-gradient-to-br ${stage.color} rounded-full flex items-center justify-center border-4 border-[#0a0a0a]`}
                  >
                    <motion.div
                      className="w-8 h-8 bg-white rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.8, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
