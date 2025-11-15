import { motion } from "motion/react";
import { Bot, Workflow, Code, Shield, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Build intelligent autonomous systems that understand context, make decisions, and execute complex workflows without human intervention. Our AI agents learn from interactions, adapt to changing conditions, and scale seamlessly with your business needs.",
    features: [
      "Natural language understanding and generation",
      "Multi-agent coordination and orchestration",
      "Continuous learning and performance optimization",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Workflow,
    title: "Automations",
    description:
      "Transform manual processes into intelligent workflows that run 24/7. We design automation systems that integrate seamlessly with your existing tools, eliminate repetitive tasks, and free your team to focus on strategic work that drives growth.",
    features: [
      "Custom workflow design and implementation",
      "Integration with 100+ business tools",
      "Real-time monitoring and error handling",
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Code,
    title: "Web & Platform Engineering",
    description:
      "Create modern, scalable platforms that grow with your business. From MVP to enterprise scale, we build robust systems using cutting-edge technologies, best practices, and architectures designed for performance, security, and maintainability.",
    features: [
      "Full-stack development with modern frameworks",
      "Cloud-native architecture and deployment",
      "API design and microservices implementation",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protect your business with enterprise-grade security solutions. We implement comprehensive security strategies covering infrastructure, applications, and data. From threat detection to compliance, we ensure your systems are fortified against evolving cyber threats.",
    features: [
      "Security audits and vulnerability assessments",
      "Zero-trust architecture implementation",
      "Compliance and regulatory alignment (SOC 2, GDPR)",
    ],
    color: "from-orange-500 to-red-500",
  },
];

export function ServicesDetailed() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative p-12 bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-3xl border border-gray-800 hover:border-gray-700 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                {/* Animated Background Glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                <div
                  className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                <div className="relative z-10 grid lg:grid-cols-[auto_1fr_auto] gap-8 items-start">
                  {/* Icon */}
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-6">
                    <h3 className="text-3xl lg:text-4xl">{service.title}</h3>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            className={`w-5 h-5 mt-1 flex-shrink-0 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`}
                            style={{
                              filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.5))",
                            }}
                          />
                          <span className="text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-4 bg-gradient-to-r ${service.color} rounded-xl flex items-center gap-2 hover:shadow-2xl transition-shadow whitespace-nowrap`}
                    style={{
                      boxShadow: "0 0 30px rgba(99, 102, 241, 0.3)",
                    }}
                  >
                    View Details
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
