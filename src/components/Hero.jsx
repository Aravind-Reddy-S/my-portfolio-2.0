import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaDownload, FaRocket } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <motion.div 
        className="max-w-5xl text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <HiOutlineSparkles className="text-cyan-400" />
          <span>Associate Frontend Developer • Full Stack Specialist</span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black font-heading tracking-tight leading-[1.08] text-white">
          SANGEM <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
            ARAVIND REDDY
          </span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-300 font-medium mt-6 font-heading">
          Associate Frontend Developer <span className="text-cyan-400">|</span> React <span className="text-cyan-400">|</span> Tailwind CSS <span className="text-cyan-400">|</span> Full Stack
        </h2>

        <p className="max-w-3xl mx-auto text-slate-400 mt-6 text-base sm:text-lg leading-relaxed">
          Full-stack developer with <strong className="text-white font-semibold">1.5+ years</strong> of hands-on experience building production-ready web applications using <strong className="text-cyan-300 font-semibold">React, Tailwind CSS, Django, and REST APIs</strong>. Shipped <strong className="text-white font-semibold">7+ live projects</strong> across e-commerce, CRM, event booking, and SaaS platforms.
        </p>

        {/* Quick Contact & Info Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-xs sm:text-sm text-slate-300">
          <a 
            href="mailto:aravindreddy1916@gmail.com" 
            className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 px-3.5 py-1.5 rounded-full hover:border-cyan-500/50 hover:text-cyan-300 transition"
          >
            <FaEnvelope className="text-cyan-400" />
            aravindreddy1916@gmail.com
          </a>
          <a 
            href="tel:+918374537353" 
            className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 px-3.5 py-1.5 rounded-full hover:border-cyan-500/50 hover:text-cyan-300 transition"
          >
            <FaPhoneAlt className="text-cyan-400 text-xs" />
            +91-8374537353
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <a
            href="#projects"
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 px-8 py-3.5 rounded-2xl font-bold transition shadow-lg shadow-cyan-500/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            <FaRocket className="text-slate-950" />
            Explore 7+ Shipped Projects
          </a>

          <a
            href="/Sangem_Aravind_Reddy_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-slate-700 bg-slate-900/80 hover:bg-slate-800 hover:border-cyan-500/50 text-white px-8 py-3.5 rounded-2xl font-semibold transition"
          >
            <FaDownload className="text-cyan-400" />
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8 text-2xl text-slate-400">
          <a
            href="https://github.com/Aravind-Reddy-S"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 hover:-translate-y-1 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sangem-aravind-reddy-b115a2352"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 hover:-translate-y-1 transition duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:aravindreddy1916@gmail.com"
            aria-label="Send Email"
            className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 hover:-translate-y-1 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;