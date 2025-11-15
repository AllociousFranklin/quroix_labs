import { motion } from "motion/react";
import { Bot, Workflow, Code, Shield, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Agents",
    description: "Intelligent autonomous systems that learn, adapt, and execute complex tasks with minimal supervision.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Workflow,
    title: "Automations",
    description: "Streamline operations with smart workflows that eliminate manual processes and boost efficiency.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Code,
    title: "Web & Platform Engineering",
    description: "Build scalable, modern platforms with cutting-edge technologies and best practices.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Enterprise-grade security solutions to protect your systems, data, and digital assets.",
    color: "from-orange-500 to-red-500",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">Core Services</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            End-to-end solutions designed to transform your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-8 bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 backdrop-blur-sm overflow-hidden">
                {/* Animated Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Glow Effect */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                <div className="relative z-10 flex flex-col h-full">
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <h3 className="text-xl mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  <motion.button
                    onClick={() => {
                      const event = new CustomEvent("navigate", { detail: "services" });
                      window.dispatchEvent(event);
                    }}
                    className="flex items-center gap-2 text-sm text-indigo-400 group-hover:text-indigo-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
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