import { motion } from "motion/react";
import { useState } from "react";
import { db, storage } from "../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  FileText,
  Upload,
  Loader2,
  CheckCircle2,
  Linkedin,
  Github,
  Link as LinkIcon,
} from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  linkedin: string;
  github: string;
  portfolio: string;
  coverLetter: string;
  resumeFile: File | null;
}

export function ApplyForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    linkedin: "",
    github: "",
    portfolio: "",
    coverLetter: "",
    resumeFile: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [uploadProgress, setUploadProgress] = useState("");

  const positions = [
    "Full-Stack Developer (Entry / Mid)",
    "UI/UX Designer (Intern / Junior)",
    "Automation Engineer (Beginner-Friendly)",
    "Content/Technical Writer (Part-Time)",
    "General Internship — Open Application",
  ];

  const experienceLevels = [
    "Student / Fresh Graduate",
    "0-1 years",
    "1-2 years",
    "2-3 years",
    "3+ years",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Limit file size to 5MB
      if (file.size > 5 * 1024 * 1024) {
        alert("File size should not exceed 5MB");
        return;
      }
      setFormData((prev) => ({ ...prev, resumeFile: file }));
    }
  };

  const uploadResume = async (file: File): Promise<string> => {
    const timestamp = Date.now();
    const fileName = `resumes/${timestamp}_${file.name}`;
    const storageRef = ref(storage, fileName);

    setUploadProgress("Uploading resume...");
    await uploadBytes(storageRef, file);

    setUploadProgress("Getting download URL...");
    const downloadURL = await getDownloadURL(storageRef);

    setUploadProgress("");
    return downloadURL;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let resumeURL = "";

      // Upload resume if provided
      if (formData.resumeFile) {
        resumeURL = await uploadResume(formData.resumeFile);
      }

      // Submit to Firestore
      await addDoc(collection(db, "job_applications"), {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        experience: formData.experience,
        linkedin: formData.linkedin || null,
        github: formData.github || null,
        portfolio: formData.portfolio || null,
        coverLetter: formData.coverLetter,
        resumeURL: resumeURL || null,
        resumeFileName: formData.resumeFile?.name || null,
        submittedAt: serverTimestamp(),
        status: "new",
      });

      setIsSuccess(true);

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        linkedin: "",
        github: "",
        portfolio: "",
        coverLetter: "",
        resumeFile: null,
      });

      // Reset file input
      const fileInput = document.getElementById("resume") as HTMLInputElement;
      if (fileInput) fileInput.value = "";
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative p-12 bg-gradient-to-br from-green-950/20 to-emerald-950/20 rounded-3xl border border-green-500/30 backdrop-blur-sm text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 className="w-10 h-10 text-white" />
              </motion.div>

              <h2 className="text-3xl lg:text-4xl mb-4">
                Application Submitted Successfully! 🎉
              </h2>

              <p className="text-lg text-gray-400 mb-8">
                Thank you for applying to Quroix Labs. We've received your
                application and will review it carefully. We'll get back to you
                within 3-5 business days.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent("navigate", { detail: "careers" })
                  );
                }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl hover:shadow-lg transition-shadow"
              >
                Back to Careers
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="relative p-8 lg:p-12 bg-gradient-to-br from-gray-900/80 to-gray-950/80 rounded-3xl border border-gray-800 backdrop-blur-sm"
          >
            <div className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-2xl mb-6">Personal Information</h3>

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>

              {/* Position Information */}
              <div className="space-y-4 pt-6">
                <h3 className="text-2xl mb-6">Position Details</h3>

                {/* Position */}
                <div>
                  <label
                    htmlFor="position"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    Position Applying For <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors appearance-none"
                    >
                      <option value="">Select a position</option>
                      {positions.map((pos) => (
                        <option key={pos} value={pos}>
                          {pos}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Experience Level */}
                <div>
                  <label
                    htmlFor="experience"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    Experience Level <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors appearance-none"
                  >
                    <option value="">Select experience level</option>
                    {experienceLevels.map((exp) => (
                      <option key={exp} value={exp}>
                        {exp}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Links (Optional) */}
              <div className="space-y-4 pt-6">
                <h3 className="text-2xl mb-6">
                  Links <span className="text-sm text-gray-500">(Optional)</span>
                </h3>

                {/* LinkedIn */}
                <div>
                  <label
                    htmlFor="linkedin"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    LinkedIn Profile
                  </label>
                  <div className="relative">
                    <Linkedin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="url"
                      id="linkedin"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                </div>

                {/* GitHub */}
                <div>
                  <label
                    htmlFor="github"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    GitHub Profile
                  </label>
                  <div className="relative">
                    <Github className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="url"
                      id="github"
                      name="github"
                      value={formData.github}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="https://github.com/yourusername"
                    />
                  </div>
                </div>

                {/* Portfolio */}
                <div>
                  <label
                    htmlFor="portfolio"
                    className="block text-sm text-gray-400 mb-2"
                  >
                    Portfolio / Website
                  </label>
                  <div className="relative">
                    <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                </div>
              </div>

              {/* Cover Letter */}
              <div className="pt-6">
                <label
                  htmlFor="coverLetter"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Cover Letter / Why do you want to join?{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FileText className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about yourself, your experience, and why you want to join Quroix Labs..."
                  />
                </div>
              </div>

              {/* Resume Upload */}
              <div className="pt-6">
                <label
                  htmlFor="resume"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Upload Resume{" "}
                  <span className="text-sm text-gray-500">
                    (Optional - PDF, DOC, DOCX, max 5MB)
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                  <label
                    htmlFor="resume"
                    className="flex items-center gap-3 w-full px-4 py-4 bg-gray-900/50 border border-gray-700 rounded-xl hover:border-indigo-500 transition-colors cursor-pointer group"
                  >
                    <Upload className="w-5 h-5 text-gray-500 group-hover:text-indigo-400 transition-colors" />
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {formData.resumeFile
                        ? formData.resumeFile.name
                        : "Click to upload resume"}
                    </span>
                  </label>
                </div>
                {uploadProgress && (
                  <p className="text-sm text-indigo-400 mt-2">
                    {uploadProgress}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting Application...
                  </>
                ) : (
                  <>
                    Submit Application
                  </>
                )}
              </motion.button>

              <p className="text-sm text-gray-500 text-center mt-4">
                By submitting this form, you agree to our data processing
                practices as outlined in our Privacy Policy.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
