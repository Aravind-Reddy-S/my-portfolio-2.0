import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaBriefcase, FaCode } from "react-icons/fa";

const About = () => {
  const stats = [
    { value: "1.5+", label: "Years Experience", icon: <FaBriefcase className="text-cyan-400" /> },
    { value: "7+", label: "Shipped Live Products", icon: <FaCode className="text-cyan-400" /> },
    { value: "8.31", label: "B.Tech CGPA", icon: <FaGraduationCap className="text-cyan-400" /> },
    { value: "3+", label: "Industry Certifications", icon: <FaAward className="text-cyan-400" /> }
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Background & Focus</span>
        <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-white mt-2">
          About Me
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Professional Summary Card */}
        <motion.div 
          className="lg:col-span-7 bg-slate-900/60 border border-slate-800/80 rounded-3xl p-8 sm:p-10 backdrop-blur-sm relative overflow-hidden"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl" />
          
          <h3 className="text-2xl font-bold font-heading mb-4 text-white flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-cyan-400 inline-block" />
            Professional Summary
          </h3>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
            Full-stack developer with <strong className="text-cyan-300 font-semibold">1.5+ years of hands-on experience</strong> building production-ready web applications using <strong className="text-white">React, Tailwind CSS, Django, and REST APIs</strong>.
          </p>

          <p className="text-slate-400 leading-relaxed mb-6">
            I have shipped <strong className="text-slate-200">7+ live projects</strong> across e-commerce, CRM, event booking, and SaaS platforms. I possess a strong foundation in <span className="text-slate-200 font-medium">OOP, DSA, database design, and modern frontend workflows</span>. Certified by Harvard (CS50), SkillsBuild, and Edunet Foundation.
          </p>

          <div id="education" className="pt-6 border-t border-slate-800/80 mt-6">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xl shrink-0 mt-1">
                <FaGraduationCap />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-cyan-400">Education</span>
                <h4 className="text-lg font-bold text-white font-heading mt-0.5">
                  B.Tech in Computer Science & Engineering
                </h4>
                <p className="text-slate-300 text-sm">
                  Vaagdevi College of Engineering <span className="text-slate-500">•</span> 2023 – 2027
                </p>
                <div className="inline-block mt-2 px-3 py-1 rounded-full bg-slate-800 text-cyan-300 text-xs font-semibold">
                  CGPA: 8.31 / 10
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-slate-900/60 p-6 sm:p-7 rounded-3xl border border-slate-800/80 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + (index * 0.1) }}
            >
              <div className="text-2xl mb-3">{stat.icon}</div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </span>
              </h3>
              <p className="text-slate-400 text-sm font-medium mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;