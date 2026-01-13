import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const roles = [
  {
    id: 1,
    title: "Full-Stack Developer",
    type: "Entry / Mid",
    location: "Part-time or project-based • Remote / Flexible",
    color: "from-indigo-500 to-purple-500",
    description:
      "Build web platforms, dashboards, and internal tools with the team.",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    type: "Intern / Junior",
    location: "Flexible",
    color: "from-cyan-500 to-blue-500",
    description:
      "Create clean, modern designs for websites and digital products.",
  },
  {
    id: 3,
    title: "Automation Engineer",
    type: "Beginner-Friendly",
    location: "Flexible",
    color: "from-purple-500 to-pink-500",
    description:
      "Help build no-code / low-code automations and workflows for clients.",
  },
  {
    id: 4,
    title: "Content/Technical Writer",
    type: "Part-Time",
    location: "Remote",
    color: "from-orange-500 to-red-500",
    description:
      "Help write documentation, guides, and website content.",
  },
  {
    id: 5,
    title: "General Internship — Open Application",
    type: "Students Welcome",
    location: "Flexible",
    color: "from-green-500 to-emerald-500",
    description:
      "For students who want hands-on experience in engineering, design, product, or operations.",
  },
];

export function OpenRoles() {
  const handleApply = () => {
    window.dispatchEvent(new CustomEvent("navigate", { detail: "apply" }));
  };

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">Open Roles</h2>
          <p className="text-lg text-gray-400">
            These roles match our actual real needs right now
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ x: 12 }}
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
                    <div className="mb-4">
                      <h3 className="text-2xl mb-2">{role.title}</h3>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`px-3 py-1 bg-gradient-to-r ${role.color} rounded-lg text-xs`}>
                          {role.type}
                        </span>
                        <span className="text-sm text-gray-500">
                          {role.location}
                        </span>
                      </div>
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
                    onClick={handleApply}
                    className={`px-8 py-4 bg-gradient-to-r ${role.color} rounded-xl flex items-center gap-2 hover:shadow-lg transition-shadow whitespace-nowrap`}
                  >
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Side Accent */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${role.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}