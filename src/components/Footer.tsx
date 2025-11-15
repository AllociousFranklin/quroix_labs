import { motion } from "motion/react";
import { Zap, Mail, Phone } from "lucide-react";

export function Footer() {
  const quickLinksLeft = ["Services", "Products", "Case Studies"];
  const quickLinksRight = ["Research", "Careers", "Contact"];

  return (
    <footer className="relative py-20 border-t border-gray-800">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Left - Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl tracking-tight">Quroix Labs</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Engineering intelligence for the real world.
            </p>
          </motion.div>

          {/* Center - Quick Links (2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-sm tracking-wider uppercase text-gray-500 mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <ul className="space-y-3">
                {quickLinksLeft.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors inline-block"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {quickLinksRight.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors inline-block"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right - Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm tracking-wider uppercase text-gray-500 mb-6">Contact</h3>
            <div className="space-y-4">
              <a
                href="mailto:hello@quroixlabs.com"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 group"
              >
                <Mail className="w-5 h-5 text-gray-600 group-hover:text-indigo-500 transition-colors" />
                <span>hello@quroixlabs.com</span>
              </a>
              <a
                href="tel:+91"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 group"
              >
                <Phone className="w-5 h-5 text-gray-600 group-hover:text-indigo-500 transition-colors" />
                <span>+91 ——————</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500"
        >
          <p>© 2025 Quroix Labs</p>
          <div className="flex items-center gap-3">
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const event = new CustomEvent("navigate", { detail: "privacy" });
                window.dispatchEvent(event);
              }}
              className="hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <span>·</span>
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const event = new CustomEvent("navigate", { detail: "terms" });
                window.dispatchEvent(event);
              }}
              className="hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              Terms
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}