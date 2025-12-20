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
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent" />

      {/* Animated background orbs */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          opacity: [0.1, 0.15, 0.1],
        }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">Our Core Services</h2>
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
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Animated glow border */}
              <div className={`absolute -inset-[1px] bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />
              <div className={`absolute -inset-[2px] bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl`} />

              <div className="relative h-full p-8 bg-gradient-to-br from-gray-900/90 to-gray-950/90 rounded-2xl border border-gray-800 group-hover:border-transparent transition-all duration-300 backdrop-blur-sm overflow-hidden">
                {/* Animated Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Glow Effect */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.color} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                <div className="relative z-10 flex flex-col h-full">
                  <motion.div
                    className={`relative w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-6 overflow-hidden`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg`} />
                    <service.icon className="w-6 h-6 text-white relative z-10" />
                  </motion.div>

                  <h3 className="text-xl font-medium text-white mb-3">
                    {service.title}
                  </h3>
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