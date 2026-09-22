import { motion } from "framer-motion";
import { FaCertificate, FaAward, FaUniversity, FaBrain } from "react-icons/fa";

const certifications = [
  {
    title: "CS50: Introduction to Computer Science",
    issuer: "Harvard University",
    period: "In Progress",
    status: "Verified Enrollment",
    icon: <FaUniversity className="text-red-400" />,
    badgeColor: "border-red-500/30 text-red-400 bg-red-500/10",
    description: "Rigorous study in computer science fundamentals, algorithms, data structures, memory management, security, and full-stack software development."
  },
  {
    title: "Full Stack Web Development with AI Tools",
    issuer: "Edunet Foundation & TASK",
    period: "2025 – 2026",
    status: "Completed Program",
    icon: <FaAward className="text-cyan-400" />,
    badgeColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
    description: "Hands-on engineering curriculum covering modern full-stack web architectures integrated with cutting-edge AI developer workflows."
  },
  {
    title: "IBM AI Agent Architect",
    issuer: "IBM SkillsBuild",
    period: "Professional Credential",
    status: "Specialization",
    icon: <FaBrain className="text-blue-400" />,
    badgeColor: "border-blue-500/30 text-blue-400 bg-blue-500/10",
    description: "Specialized training in architecting multi-agent AI systems, LLM orchestration, prompt engineering, and production agent deployment."
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-24">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Credentials & Honors</span>
        <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-white mt-2">
          Certifications & Learning
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="
              bg-slate-900/60
              border
              border-slate-800/80
              rounded-3xl
              p-8
              hover:border-cyan-500/40
              hover:-translate-y-1.5
              transition-all
              duration-300
              flex
              flex-col
              justify-between
              backdrop-blur-sm
              group
            "
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-6">
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 text-2xl group-hover:scale-110 transition duration-300">
                  {cert.icon}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${cert.badgeColor}`}>
                  {cert.status}
                </span>
              </div>

              <h3 className="text-xl font-bold font-heading text-white group-hover:text-cyan-300 transition">
                {cert.title}
              </h3>

              <div className="flex items-center justify-between text-xs text-slate-400 mt-2 mb-4 pb-4 border-b border-slate-800/80">
                <span className="font-semibold text-slate-300">{cert.issuer}</span>
                <span>{cert.period}</span>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-cyan-400 font-medium">
              <FaCertificate /> Verified Technical Certification
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;