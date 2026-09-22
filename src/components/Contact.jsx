import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaDownload, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Get In Touch</span>
        <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-white mt-2">
          Let's Build Something Great
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-slate-900/60 border border-slate-800/80 rounded-3xl p-8 sm:p-12 backdrop-blur-sm relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-slate-300 text-lg leading-relaxed">
            I'm currently seeking <strong className="text-white">Frontend & Full Stack roles</strong>, AI software engineering opportunities, and challenging freelance projects.
          </p>
        </div>

        {/* Contact Method Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          <a
            href="mailto:aravindreddy1916@gmail.com"
            className="flex items-center gap-4 p-5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80 transition duration-300 group"
          >
            <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xl group-hover:scale-110 transition">
              <FaEnvelope />
            </div>
            <div className="overflow-hidden">
              <span className="block text-xs uppercase font-bold text-slate-500">Email Me</span>
              <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition truncate block">
                aravindreddy1916@gmail.com
              </span>
            </div>
          </a>

          <a
            href="tel:+918374537353"
            className="flex items-center gap-4 p-5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80 transition duration-300 group"
          >
            <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xl group-hover:scale-110 transition">
              <FaPhoneAlt />
            </div>
            <div>
              <span className="block text-xs uppercase font-bold text-slate-500">Call / WhatsApp</span>
              <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition">
                +91-8374537353
              </span>
            </div>
          </a>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-950/70 border border-slate-800 sm:col-span-2 lg:col-span-1">
            <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <span className="block text-xs uppercase font-bold text-slate-500">Location</span>
              <span className="text-sm font-semibold text-slate-200">
                Warangal, Telangana, India
              </span>
            </div>
          </div>
        </div>

        {/* Social and CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-slate-800/80">
          <a
            href="mailto:aravindreddy1916@gmail.com"
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 px-8 py-3.5 rounded-2xl font-bold transition shadow-lg shadow-cyan-500/20"
          >
            <FaPaperPlane />
            <span>Send An Email</span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto border border-slate-700 bg-slate-950 hover:bg-slate-800 text-white px-8 py-3.5 rounded-2xl font-semibold transition"
          >
            <FaDownload className="text-cyan-400" />
            <span>Download Resume (PDF)</span>
          </a>
        </div>

        {/* Direct Social Links */}
        <div className="flex justify-center gap-6 mt-8 pt-6 text-2xl text-slate-400 border-t border-slate-800/50">
          <a
            href="https://github.com/Aravind-Reddy-S"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sangem-aravind-reddy-b115a2352"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;