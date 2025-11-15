import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, TrendingUp, Building2, Briefcase } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    company: "FinPulse",
    industry: "Finance",
    logo: "💰",
    color: "from-green-500 to-emerald-500",
    problem: "Manual data reconciliation taking 40+ hours per week, leading to errors and delayed reporting.",
    solution: "Built an AI-powered automation system that processes transactions, detects anomalies, and generates real-time financial reports.",
    result: "95% reduction in processing time",
    metrics: [
      { label: "Time Saved", value: "38 hrs/week" },
      { label: "Error Rate", value: "-99%" },
      { label: "ROI", value: "420%" },
    ],
  },
  {
    id: 2,
    company: "MediConnect",
    industry: "Health",
    logo: "🏥",
    color: "from-blue-500 to-cyan-500",
    problem: "Patient scheduling system causing bottlenecks, missed appointments, and inefficient resource allocation.",
    solution: "Developed an intelligent scheduling platform with predictive analytics, automated reminders, and resource optimization.",
    result: "87% decrease in no-shows",
    metrics: [
      { label: "No-Show Rate", value: "-87%" },
      { label: "Capacity Utilized", value: "+43%" },
      { label: "Patient Satisfaction", value: "4.9/5" },
    ],
  },
  {
    id: 3,
    company: "RetailGenius",
    industry: "Retail",
    logo: "🛒",
    color: "from-purple-500 to-pink-500",
    problem: "Inventory management inefficiencies leading to stockouts, overstocking, and $2M in lost revenue annually.",
    solution: "Implemented AI-driven inventory forecasting with real-time demand prediction and automated reordering.",
    result: "73% improvement in stock accuracy",
    metrics: [
      { label: "Stock Accuracy", value: "73%" },
      { label: "Carrying Cost", value: "-$850K" },
      { label: "Revenue Increase", value: "+$1.8M" },
    ],
  },
  {
    id: 4,
    company: "TechFlow",
    industry: "Tech",
    logo: "💻",
    color: "from-indigo-500 to-purple-500",
    problem: "DevOps workflows requiring 15+ manual steps per deployment, causing delays and increasing error rates.",
    solution: "Created a fully automated CI/CD pipeline with intelligent testing, rollback mechanisms, and performance monitoring.",
    result: "10x faster deployment speed",
    metrics: [
      { label: "Deployment Time", value: "2h → 12min" },
      { label: "Production Bugs", value: "-78%" },
      { label: "Developer Time", value: "+25 hrs/week" },
    ],
  },
  {
    id: 5,
    company: "EduSmart",
    industry: "Education",
    logo: "📚",
    color: "from-yellow-500 to-orange-500",
    problem: "Student engagement tracking was manual and ineffective, making it impossible to provide personalized learning paths.",
    solution: "Built an AI-powered learning platform that analyzes student behavior, adapts content difficulty, and provides personalized recommendations.",
    result: "64% increase in completion rates",
    metrics: [
      { label: "Completion Rate", value: "+64%" },
      { label: "Avg. Test Scores", value: "+28%" },
      { label: "Student Satisfaction", value: "4.8/5" },
    ],
  },
  {
    id: 6,
    company: "LogiTrack",
    industry: "Tech",
    logo: "🚚",
    color: "from-orange-500 to-red-500",
    problem: "Supply chain visibility gaps causing delivery delays and customer complaints across 12 distribution centers.",
    solution: "Developed real-time tracking system with predictive delivery windows, route optimization, and automated alerts.",
    result: "92% on-time delivery rate",
    metrics: [
      { label: "On-Time Delivery", value: "92%" },
      { label: "Customer Complaints", value: "-81%" },
      { label: "Fuel Savings", value: "$340K/year" },
    ],
  },
];

const industries = ["All", "Tech", "Retail", "Finance", "Health", "Education"];

export function CaseStudiesGrid() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const filteredStudies = caseStudies.filter(
    (study) => selectedIndustry === "All" || study.industry === selectedIndustry
  );

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Industry Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <motion.button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl text-sm transition-all duration-300 ${
                  selectedIndustry === industry
                    ? "bg-gradient-to-r from-orange-600 to-cyan-600 text-white shadow-lg shadow-orange-500/30"
                    : "bg-gray-900/80 border border-gray-800 text-gray-400 hover:border-gray-700 hover:text-white"
                }`}
              >
                {industry}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Case Studies Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndustry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="relative h-full p-8 bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 backdrop-blur-sm overflow-hidden">
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-br ${study.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Logo & Company */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${study.color} rounded-xl flex items-center justify-center text-3xl`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {study.logo}
                      </motion.div>
                      <div>
                        <h3 className="text-xl">{study.company}</h3>
                        <span className="text-sm text-gray-500">{study.industry}</span>
                      </div>
                    </div>

                    {/* Problem */}
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        Problem
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {study.problem}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        Solution
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    {/* Result Badge */}
                    <div className="mb-6">
                      <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Key Result
                      </div>
                      <div
                        className={`inline-block px-4 py-2 bg-gradient-to-r ${study.color} rounded-lg text-sm`}
                      >
                        {study.result}
                      </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-2 mb-6 pb-6 border-b border-gray-800">
                      {study.metrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <div className={`text-lg bg-gradient-to-r ${study.color} bg-clip-text text-transparent`}>
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-500">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ x: 5 }}
                      className={`flex items-center gap-2 text-sm bg-gradient-to-r ${study.color} bg-clip-text text-transparent group-hover:gap-3 transition-all`}
                    >
                      Read Case Study
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Results Summary */}
        {filteredStudies.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 text-lg">
              No case studies found for this industry yet.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
