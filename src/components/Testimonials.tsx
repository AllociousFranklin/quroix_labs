import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Quroix Labs transformed our entire data pipeline in just 3 weeks. Their AI-driven approach cut our processing time by 70% and gave us insights we never knew existed.",
    name: "Sarah Chen",
    role: "CTO",
    industry: "FinTech",
    rating: 5,
  },
  {
    quote: "Working with Quroix was like having a world-class engineering team embedded in our company. They delivered a production-ready platform that scaled from day one.",
    name: "Michael Rodriguez",
    role: "VP of Engineering",
    industry: "Healthcare",
    rating: 5,
  },
  {
    quote: "The automation workflows they built saved us hundreds of hours monthly. It's not just about efficiency—it's about being able to focus on what really matters for our growth.",
    name: "Emily Watson",
    role: "Head of Operations",
    industry: "E-commerce",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/10 via-transparent to-cyan-950/10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4">Trusted by Leaders</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See what our clients say about working with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="relative h-full p-8 bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm">
                {/* Glow Effect */}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-br from-indigo-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                />

                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <Quote className="w-10 h-10 text-indigo-500/30" />
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-gray-300 leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-cyan-600 rounded-full flex items-center justify-center">
                      <span className="text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">
                        {testimonial.role} • {testimonial.industry}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
