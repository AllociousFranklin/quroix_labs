import { motion } from "motion/react";
import { MapPin, Clock, ArrowRight } from "lucide-react";

const roles = [
  {
    id: 1,
    title: "Senior AI Engineer",
    type: "Full-time",
    location: "Remote",
    color: "from-violet-500 to-purple-500",
    description:
      "Lead the development of AI-powered systems and machine learning pipelines. Work with cutting-edge LLMs, agent architectures, and production ML infrastructure. You'll design intelligent systems that scale to millions of users and solve complex real-world problems.",
  },
  {
    id: 2,
    title: "Full-Stack Engineer",
    type: "Full-time",
    location: "Remote",
    color: "from-fuchsia-500 to-pink-500",
    description:
      "Build modern web applications using React, Next.js, and Node.js. Own features end-to-end from database design to pixel-perfect UIs. You'll work on real products used by thousands of users and have direct impact on business outcomes.",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Remote",
    color: "from-indigo-500 to-cyan-500",
    description:
      "Design and maintain scalable cloud infrastructure on AWS/GCP. Build CI/CD pipelines, implement monitoring solutions, and ensure 99.9% uptime. You'll work with Kubernetes, Terraform, and modern DevOps tooling to keep systems running smoothly.",
  },
  {
    id: 4,
    title: "Product Designer",
    type: "Full-time",
    location: "Remote",
    color: "from-purple-500 to-fuchsia-500",
    description:
      "Create intuitive interfaces for complex AI systems. Conduct user research, design prototypes, and collaborate with engineers to build products users love. You'll shape the user experience of next-generation intelligent applications.",
  },
  {
    id: 5,
    title: "Technical Writer",
    type: "Part-time",
    location: "Remote",
    color: "from-pink-500 to-orange-500",
    description:
      "Write technical documentation, tutorials, and guides for developers. Create content that explains complex AI and engineering concepts in clear, accessible language. You'll help developers worldwide use our products and understand cutting-edge technology.",
  },
];

export function OpenRoles() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">Open Roles</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Find your next challenge
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 10 }}
              className="relative group"
            >
              <div className="relative p-8 bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 backdrop-blur-sm">
                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-br ${role.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    {/* Title & Badges */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl">{role.title}</h3>
                      <span className={`px-3 py-1 bg-gradient-to-r ${role.color} rounded-lg text-xs`}>
                        {role.type}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        {role.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed">
                      {role.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-4 bg-gradient-to-r ${role.color} rounded-xl flex items-center gap-2 hover:shadow-lg transition-shadow whitespace-nowrap`}
                  >
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Side Accent */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${role.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
