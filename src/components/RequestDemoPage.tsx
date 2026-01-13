import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Upload, CheckCircle2, X } from "lucide-react";
import { db, storage } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export function RequestDemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    category: "",
    budget: "",
    description: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    company: "",
    category: "",
    budget: "",
    description: "",
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      fullName: "",
      email: "",
      company: "",
      category: "",
      budget: "",
      description: "",
    };
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
      isValid = false;
    }

    if (!formData.category) {
      newErrors.category = "Please select a category";
      isValid = false;
    }

    if (!formData.budget) {
      newErrors.budget = "Please select a budget range";
      isValid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = "Project description is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const isFormValid = () => {
    return (
      formData.fullName.trim() !== "" &&
      formData.email.trim() !== "" &&
      validateEmail(formData.email) &&
      formData.company.trim() !== "" &&
      formData.category !== "" &&
      formData.budget !== "" &&
      formData.description.trim() !== ""
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);

    try {
      let fileURL = "";

      // Upload file if one was selected
      if (uploadedFile) {
        setUploading(true);
        const timestamp = Date.now();
        const fileName = `${timestamp}_${uploadedFile.name}`;
        const storageRef = ref(storage, `demo_requests/${fileName}`);
        await uploadBytes(storageRef, uploadedFile);
        fileURL = await getDownloadURL(storageRef);
        setUploading(false);
      }

      // Add document to Firestore
      await addDoc(collection(db, "demo_requests"), {
        fullName: formData.fullName,
        email: formData.email,
        company: formData.company,
        category: formData.category,
        budget: formData.budget,
        description: formData.description,
        fileURL: fileURL || null,
        fileName: uploadedFile?.name || null,
        submittedAt: serverTimestamp(),
        type: "demo_request",
      });

      // Show success message
      setSubmitted(true);
      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setSubmitting(false);
      setUploading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleFileUpload = async () => {
    if (!uploadedFile) return;

    setUploading(true);

    try {
      const storageRef = ref(storage, `demo_requests/${uploadedFile.name}`);
      await uploadBytes(storageRef, uploadedFile);
      const downloadURL = await getDownloadURL(storageRef);
      console.log("File uploaded successfully:", downloadURL);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("There was an error uploading your file. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative p-16 bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-3xl border border-gray-800 backdrop-blur-sm text-center overflow-hidden">
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-cyan-600/10"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative z-10">
                {/* Success Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full mb-8"
                >
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </motion.div>

                {/* Success Message */}
                <h2 className="text-4xl mb-4">Thank You!</h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  Our team will reach out within 24–48 hours with your personalized demo.
                </p>

                <p className="text-sm text-gray-500">
                  Want to talk sooner? Email us at{" "}
                  <span className="text-indigo-400">
                    quroixlabs@gmail.com
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-transparent to-cyan-950/20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-indigo-950/50 to-cyan-950/50 rounded-full border border-indigo-500/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent text-sm">
              48-Hour Response Time
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl lg:text-6xl mb-6 leading-tight"
          >
            Request a{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Tailored Demo
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            Tell us about your idea and we'll prepare a personalized walkthrough within 48 hours.
          </motion.p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative p-10 bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-3xl border border-gray-800 backdrop-blur-sm">
            {/* Form Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 rounded-3xl blur-xl opacity-50" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="John Doe"
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="john@company.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Company / Startup Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Your Company"
                />
                {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
              </div>

              {/* Project Category */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Project Category <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-indigo-500 transition-colors"
                >
                  <option value="">Select a category</option>
                  <option value="ai-agents">AI Agents</option>
                  <option value="automation">Automation</option>
                  <option value="platform">Platform Development</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="other">Other</option>
                </select>
                {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Budget Range <span className="text-red-500">*</span>
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800 rounded-xl text-white focus:outline-none focus:border-indigo-500 transition-colors"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under ₹5,000 — Small fixes, micro-sites, single pages, tiny automations</option>
                  <option value="5k-20k">₹5,000 – ₹20,000 — Basic websites, small automations, simple dashboards</option>
                  <option value="20k-50k">₹20,000 – ₹50,000 — Full websites, AI agents, platforms, workflow systems</option>
                  <option value="50k-1l">₹50,000 – ₹1,00,000 — Advanced custom systems, multi-module platforms</option>
                  <option value="1l-plus">₹1,00,000+ — High-end intelligent platforms, long-term engineering</option>
                </select>
                {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Project Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  placeholder="Tell us about your project, goals, and what you're looking to achieve..."
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  File Upload <span className="text-gray-500">(Optional)</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                    className="hidden"
                    id="file-upload"
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gray-900/80 border border-gray-800 border-dashed rounded-xl text-gray-400 hover:border-indigo-500 hover:text-indigo-400 transition-colors cursor-pointer"
                  >
                    <Upload className="w-5 h-5" />
                    <span>Upload PDF, briefs, or screenshots</span>
                  </label>
                </div>
                {uploadedFile && (
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-gray-400">{uploadedFile.name}</span>
                    <button
                      type="button"
                      className="text-red-500 hover:text-red-600"
                      onClick={() => setUploadedFile(null)}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
                {uploading && (
                  <p className="text-sm text-gray-500 mt-2">Uploading...</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={!isFormValid() || submitting || uploading}
                whileHover={{ scale: isFormValid() && !submitting && !uploading ? 1.02 : 1 }}
                whileTap={{ scale: isFormValid() && !submitting && !uploading ? 0.98 : 1 }}
                className={`w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl text-lg transition-all ${!isFormValid() || submitting || uploading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:shadow-2xl hover:shadow-indigo-500/50"
                  }`}
              >
                {uploading ? "Uploading file..." : submitting ? "Submitting..." : "Book My Demo"}
              </motion.button>

              {/* Privacy Note */}
              <p className="text-sm text-gray-500 text-center">
                By submitting, you agree to our terms. We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Response within 48 hours
          </span>
          <span>•</span>
          <span>NDA available</span>
          <span>•</span>
          <span>No commitment required</span>
        </motion.div>
      </div>
    </div>
  );
}