import { motion } from "motion/react";
import {
  Brain,
  Activity,
  FileText,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const products = [
  {
    id: 1,
    title: "CuratorBot",
    subtitle: "AI-powered Medical RAG System with 10GB+ Knowledge Base",
    description:
      "CuratorBot is a domain-specialized medical intelligence system built with advanced RAG pipelines. It processes over 10GB of verified medical data, enabling precise, context-rich responses for clinicians, students, and healthcare researchers.",
    icon: Brain,
    color: "from-indigo-500 to-purple-500",
    capabilities: [
      "Deep medical inference through RAG",
      "Evidence-backed answers",
      "Instant reference retrieval",
      "HIPAA-conscious data handling",
      "Multi-document reasoning",
    ],
    link: "https://curatorai-two.vercel.app/", // 🔥 YOUR LINK 1
  },
  {  
    id: 2,
    title: "OptiFit",
    subtitle: "AI Fitness Intelligence for Athletes, Trainers & Coaches",
    description:
      "OptiFit combines computer vision and performance analytics to evaluate athlete workouts in real time. It tracks your form, posture, stability, and movement patterns — then provides personalized coaching insights instantly. It's also becoming a talent discovery platform, helping coaches scout emerging athletes.",
    icon: Activity,
    color: "from-cyan-500 to-blue-500",
    capabilities: [
      "AI workout analysis (CV-based)",
      "Form correction & performance scoring",
      "Athlete–Coach collaboration",
      "Progress tracking & insights",
      "Community + scouting ecosystem",
    ],
    link: "https://studio-nu-neon.vercel.app/  ", // 🔥 YOUR LINK 2
  },
  {
    id: 3,
    title: "MediReport AI",
    subtitle: "AI Medical Report Analyzer & Personal Health Dashboard",
    description:
      "MediReport AI extracts key insights from medical reports and prescriptions in seconds. Users get summaries, risk flags, medication reminders, and a clean timeline of their health data.",
    icon: FileText,
    color: "from-purple-500 to-pink-500",
    capabilities: [
      "OCR + LLM report analysis",
      "Prescription understanding",
      "Risk detection & flagging",
      "Medication reminders",
      "Secure personal dashboard",
    ],
    link: "https://medi-report-ai-hacktrix.vercel.app/", // 🔥 YOUR LINK 3
  },
  {
    id: 4,
    title: "MSEC Portal",
    subtitle: "Secure ERP Ecosystem for Colleges",
    description:
      "A robust student management platform with admin dashboards, analytics, and strict security. Designed for institutions needing a modern, scalable, AI-enabled ERP.",
    icon: GraduationCap,
    color: "from-orange-500 to-red-500",
    capabilities: [
      "Admin & faculty dashboards",
      "Secure student database",
      "Timetables + attendance",
      "Role-based access control",
      "AI-enabled report generation",
    ],
    link: "https://cmiss.vercel.app/", // 🔥 YOUR LINK 4
  },
];

export function ProductsDetailed() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">OUR CORE PRODUCTS</h2>
          <p className="text-xl text-gray-400">Live & Proven</p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative p-8 lg:p-12 bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-3xl border border-gray-800 hover:border-gray-700 transition-all duration-300 backdrop-blur-sm">
                
                {/* Glow */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-br ${product.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                    >
                      <product.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-3xl">{product.title}</h3>

                        {/* BUTTON UPDATED */}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => window.open(product.link, "_blank")}
                          className={`px-6 py-3 bg-gradient-to-r ${product.color} rounded-xl flex items-center gap-2 hover:shadow-lg transition-shadow whitespace-nowrap`}
                        >
                          Explore Product
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>

                      <p className="text-lg text-gray-400 mb-4">
                        {product.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Capabilities */}
                  <div>
                    <h4 className="text-lg mb-4 text-gray-200">Capabilities</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {product.capabilities.map((capability, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-400">{capability}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Side Accent */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-3xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
