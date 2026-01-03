import { motion } from "motion/react";
import { ArrowRight, Users, Rocket, Zap, Target, CheckCircle2, Lightbulb, Code, TrendingUp, Shield, Sparkles, Brain } from "lucide-react";

export function PartnershipPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-32 relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(99,102,241,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(6,182,212,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-transparent to-cyan-950/20" />
        </div>

        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center space-y-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 rounded-full backdrop-blur-sm">
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                  <span className="text-sm text-gray-200">Build Together</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-6xl lg:text-8xl mb-8 leading-tight tracking-tight">
                Partner With{" "}
                <span className="relative inline-block">
                  <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-indigo-400 to-cyan-400 opacity-30" />
                  <span className="relative bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                    Quroix Labs
                  </span>
                </span>
              </h1>
              <p className="text-3xl lg:text-4xl text-gray-400 mb-12">
                Build the future together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative p-12 bg-gradient-to-br from-gray-900/60 to-gray-950/60 rounded-3xl border border-gray-800/50 backdrop-blur-xl overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 via-purple-600/5 to-cyan-600/5"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <div className="relative z-10 text-xl text-gray-300 leading-relaxed space-y-6">
                  <p>Some founders come with <span className="text-white">funding</span> but no technical team.</p>
                  <p>Some come with a <span className="text-white">strong idea</span> but no execution support.</p>
                  <p>Some come alone — looking for a <span className="text-white">co-builder</span> who understands technology, product, and growth.</p>

                  <div className="pt-8 space-y-6 border-t border-gray-800">
                    <p className="text-gray-200">At Quroix Labs, we become more than engineers.</p>
                    <p className="text-2xl lg:text-3xl text-white">
                      We become <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">partners</span> — helping you transform an idea into a product, and a product into a company.
                    </p>
                  </div>

                  <p className="text-xl pt-8 text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text">
                    Let's create something that matters.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="pt-8"
            >
              <motion.button
                onClick={() => {
                  const event = new CustomEvent("navigate", { detail: "request-demo" });
                  window.dispatchEvent(event);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl text-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative">Start a Collaboration</span>
                <ArrowRight className="relative w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-white/20 blur-xl" />
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Partnership Means */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl lg:text-6xl mb-6">
              What Partnership Means at{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Quroix Labs
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Users,
                title: "Co-Building, Not Outsourcing",
                description: "We don't just develop. We work with you like a technical co-founder — deeply invested in your product's success.",
                color: "from-indigo-500 to-purple-500",
              },
              {
                icon: Rocket,
                title: "From Idea to Intelligent Product",
                description: "Your vision becomes a full-fledged intelligent system with engineering, AI, design, automation, and strategic support.",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Target,
                title: "Shared Ownership & Commitment",
                description: "We explore equity-based or hybrid collaboration models when the idea aligns with our long-term vision.",
                color: "from-cyan-500 to-blue-500",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />

                <div className="relative h-full p-10 bg-gradient-to-br from-gray-900/90 to-gray-950/90 rounded-3xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 backdrop-blur-xl overflow-hidden">
                  <motion.div
                    className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`}
                  />

                  <motion.div
                    className={`relative w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-8 shadow-2xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  <h3 className="text-2xl lg:text-3xl mb-6 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-5xl lg:text-6xl text-center mb-16">Who This Is For</h2>

            <div className="relative p-12 lg:p-16 bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-3xl border border-gray-800/50 backdrop-blur-xl overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-cyan-600/5"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              <div className="relative z-10">
                <p className="text-2xl text-gray-300 mb-10">This partnership is ideal for:</p>

                <ul className="space-y-6">
                  {[
                    "Founders with a strong idea but no technical co-founder",
                    "Startups needing an engineering partner to build MVPs fast",
                    "Solo founders needing a reliable product + AI + automation team",
                    "Teams with vision but lacking execution",
                    "Anyone who wants to build something ambitious with the right support",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-start gap-5 group"
                    >
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-indigo-500/30 rounded-full blur-lg group-hover:bg-indigo-400/40 transition-colors" />
                        <CheckCircle2 className="relative w-7 h-7 text-indigo-400 mt-1" />
                      </div>
                      <span className="text-xl text-gray-300 leading-relaxed group-hover:text-white transition-colors">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How Partnership Works */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl text-center mb-20"
          >
            How Partnership Works
          </motion.h2>

          <div className="max-w-5xl mx-auto space-y-6">
            {[
              {
                number: "1",
                title: "Ideation & Discovery",
                description: "We help refine your concept, clarify goals, and identify core value.",
                icon: Lightbulb,
                color: "from-indigo-500 to-purple-500",
              },
              {
                number: "2",
                title: "Strategy & Roadmap",
                description: "We create a product vision, technical architecture, and execution plan.",
                icon: Target,
                color: "from-purple-500 to-pink-500",
              },
              {
                number: "3",
                title: "Build & Iterate",
                description: "Rapid development cycles: AI, automation, platform, security, design, UX.",
                icon: Code,
                color: "from-pink-500 to-orange-500",
              },
              {
                number: "4",
                title: "Scale & Co-Own",
                description: "We support launch, growth, optimization, and long-term evolution. Equity/hybrid models available for selected startups.",
                icon: TrendingUp,
                color: "from-cyan-500 to-blue-500",
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />

                <div className="relative p-8 lg:p-10 bg-gradient-to-br from-gray-900/90 to-gray-950/90 rounded-2xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 backdrop-blur-xl overflow-hidden">
                  <motion.div
                    className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-r ${step.color} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                  />

                  <div className="relative z-10 flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <step.icon className="w-10 h-10 text-white" />
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-4 mb-4">
                        <span className={`inline-block text-sm px-4 py-1.5 bg-gradient-to-r ${step.color} rounded-full shadow-lg`}>
                          Step {step.number}
                        </span>
                        <h3 className="text-2xl lg:text-3xl text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-400 text-lg leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.1),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.1),transparent_60%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl text-center mb-20"
          >
            Why Partner With{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Quroix Labs
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Full-Stack Intelligence",
                description: "AI agents, automation, platform engineering, security — all under one roof.",
                color: "from-indigo-500 to-purple-500",
              },
              {
                icon: Rocket,
                title: "Rapid Brandable Execution",
                description: "We build polished, production-ready systems fast.",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Shield,
                title: "Founder-Level Commitment",
                description: "We take projects seriously — as if they were our own.",
                color: "from-cyan-500 to-blue-500",
              },
              {
                icon: TrendingUp,
                title: "Long-Term Vision",
                description: "We're building a venture lab — your idea could be one of our next flagship successes.",
                color: "from-orange-500 to-red-500",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />

                <div className="relative h-full p-8 bg-gradient-to-br from-gray-900/90 to-gray-950/90 rounded-2xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 backdrop-blur-xl overflow-hidden">
                  <motion.div
                    className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${item.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`}
                  />

                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6 shadow-xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h3 className="text-xl lg:text-2xl mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl text-center mb-20"
          >
            Partnership Models
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: "⚡",
                title: "Co-Build + Equity",
                description: "Lower development cost + small equity share from the startup.",
                color: "from-indigo-500 to-purple-500",
                highlight: false,
              },
              {
                icon: "⚡",
                title: "Hybrid (Partial Paid + Partial Equity)",
                description: "Balanced commitment for both sides.",
                color: "from-purple-500 to-pink-500",
                highlight: true,
              },
              {
                icon: "⚡",
                title: "Full Paid Build + Strategic Partnership",
                description: "Traditional service + mentorship + long-term support.",
                color: "from-cyan-500 to-blue-500",
                highlight: false,
              },
            ].map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative"
              >
                {model.highlight && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                )}

                <div className={`relative h-full p-10 bg-gradient-to-br from-gray-900/90 to-gray-950/90 rounded-3xl border ${model.highlight ? 'border-indigo-500/50' : 'border-gray-800/50'
                  } hover:border-gray-700/50 transition-all duration-500 backdrop-blur-xl overflow-hidden`}>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${model.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}
                  />
                  <div
                    className={`absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br ${model.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`}
                  />

                  <div className="relative z-10">
                    <div className="text-6xl mb-6">{model.icon}</div>
                    <h3 className="text-2xl lg:text-3xl mb-6 text-white">{model.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">{model.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Potential */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_70%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="relative p-16 lg:p-20 bg-gradient-to-br from-gray-900/70 to-gray-950/70 rounded-3xl border border-gray-800/50 backdrop-blur-2xl overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-cyan-600/10"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              <div className="absolute -top-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <Sparkles className="w-16 h-16 mx-auto mb-10 text-indigo-400" />
                </motion.div>
                <p className="text-3xl lg:text-5xl leading-relaxed text-gray-300">
                  "A single idea can become something{" "}
                  <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                    extraordinary
                  </span>{" "}
                  —<br />
                  <span className="text-white">
                    with the right partners building beside you.
                  </span>
                  "
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-5xl lg:text-6xl text-center mb-20">What We Look For</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { label: "Clarity of idea", icon: Lightbulb, color: "from-indigo-500 to-purple-500" },
                { label: "Long-term potential", icon: TrendingUp, color: "from-purple-500 to-pink-500" },
                { label: "Strong founder mindset", icon: Brain, color: "from-cyan-500 to-blue-500" },
                { label: "Real-world impact", icon: Target, color: "from-blue-500 to-indigo-500" },
                { label: "Ambition", icon: Rocket, color: "from-orange-500 to-red-500" },
                { label: "Technical alignment", icon: Code, color: "from-pink-500 to-purple-500" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="relative h-full p-8 bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-2xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 text-center overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                    />
                    <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                    <motion.div
                      className={`relative w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <p className="relative text-xl text-gray-300 group-hover:text-white transition-colors">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/50 via-purple-950/30 to-cyan-950/50" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-cyan-600/10"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        {/* Animated Orbs */}
        <motion.div
          className="absolute left-1/4 top-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-1/4 top-1/2 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-5xl lg:text-7xl mb-8 leading-tight">
              Ready to explore becoming our{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                next partner
              </span>
              ?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Tell us about your vision — and let's build something powerful together.
            </p>

            <motion.button
              onClick={() => {
                const event = new CustomEvent("navigate", { detail: "request-demo" });
                window.dispatchEvent(event);
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 80px rgba(99, 102, 241, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-4 px-14 py-6 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl text-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative">Start a Partnership Conversation</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative"
              >
                <ArrowRight className="w-6 h-6" />
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div >
  );
}
