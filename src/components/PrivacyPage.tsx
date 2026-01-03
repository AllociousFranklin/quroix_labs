import { motion } from "motion/react";
import { Shield } from "lucide-react";

export function PrivacyPage() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/10 via-transparent to-cyan-950/10 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-indigo-950/50 to-cyan-950/50 rounded-full border border-indigo-500/30 mb-8"
          >
            <Shield className="w-4 h-4 text-indigo-400" />
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent text-sm">
              Your Privacy Matters
            </span>
          </motion.div>

          <h1 className="text-5xl lg:text-6xl mb-6 leading-tight">Privacy Policy</h1>
          <p className="text-xl text-gray-400">
            Quroix Labs · Last updated: 2025
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-12 bg-gradient-to-br from-gray-900/50 to-gray-950/50 rounded-3xl border border-gray-800 backdrop-blur-sm">
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed mb-8">
                At Quroix Labs, we respect your privacy and are committed to protecting your personal
                information. This Privacy Policy explains how we collect, use, and safeguard your data
                when you interact with our website, services, or contact forms.
              </p>

              <h2 className="text-2xl mb-4 mt-12">1. Information We Collect</h2>
              <p className="text-gray-400 mb-4">We may collect:</p>
              <ul className="space-y-2 text-gray-400 mb-8">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company details</li>
                <li>Project information submitted through forms</li>
                <li>Files uploaded during demo or contact requests</li>
                <li>Basic analytics (page visits, browser type)</li>
              </ul>
              <p className="text-gray-400">
                We do not collect passwords, financial data, or sensitive personal information.
              </p>

              <h2 className="text-2xl mb-4 mt-12">2. How We Use Your Information</h2>
              <p className="text-gray-400 mb-4">We use the data to:</p>
              <ul className="space-y-2 text-gray-400 mb-8">
                <li>Respond to inquiries</li>
                <li>Provide demos or proposals</li>
                <li>Improve our website and services</li>
                <li>Communicate business-related updates</li>
                <li>Maintain internal records</li>
              </ul>
              <p className="text-gray-400">
                We do not sell, rent, or share your information with third parties.
              </p>

              <h2 className="text-2xl mb-4 mt-12">3. Data Storage & Security</h2>
              <p className="text-gray-400">
                Your data is stored securely using industry-standard encryption and access control.
                Only authorized Quroix Labs personnel may access submitted information.
              </p>

              <h2 className="text-2xl mb-4 mt-12">4. Cookies & Analytics</h2>
              <p className="text-gray-400">
                Our website may use cookies or analytics tools to improve performance. You can turn
                off cookies in your browser settings.
              </p>

              <h2 className="text-2xl mb-4 mt-12">5. Third-Party Tools</h2>
              <p className="text-gray-400 mb-4">We may use:</p>
              <ul className="space-y-2 text-gray-400 mb-8">
                <li>Email service providers</li>
                <li>Analytics platforms</li>
                <li>Form submission services</li>
              </ul>
              <p className="text-gray-400">
                These tools follow their own privacy policies.
              </p>

              <h2 className="text-2xl mb-4 mt-12">6. Your Rights</h2>
              <p className="text-gray-400 mb-4">You may request:</p>
              <ul className="space-y-2 text-gray-400 mb-8">
                <li>Access to your data</li>
                <li>Correction or deletion</li>
                <li>Opt-out from communication</li>
              </ul>
              <p className="text-gray-400">
                Contact us at{" "}
                <span className="text-indigo-400">
                  quroixlabs@gmail.com
                </span>{" "}
                to request changes.
              </p>

              <h2 className="text-2xl mb-4 mt-12">7. Updates to This Policy</h2>
              <p className="text-gray-400">
                We may update this Privacy Policy periodically. Changes will be posted on this page.
              </p>

              <div className="mt-12 pt-8 border-t border-gray-800">
                <p className="text-gray-400">
                  If you have questions, contact us at{" "}
                  <span className="text-indigo-400">
                    quroixlabs@gmail.com
                  </span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}