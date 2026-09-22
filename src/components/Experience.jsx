import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaBuilding, FaCheckCircle } from "react-icons/fa";

const experiences = [
  {
    role: "Software Engineer Intern (AI & Full Stack)",
    company: "NexSyrus Pvt Ltd",
    duration: "Jun 2026 – Dec 2026",
    bullets: [
      "Designed and deployed modern web applications and AI-powered solutions in fast-paced product environment",
      "Built full-stack features across React frontends, Django backends, and REST API integrations",
      "Collaborated in agile team on end-to-end product lifecycle design, development, testing, and deployment"
    ],
    tech: ["React", "Django", "REST APIs", "AI Solutions", "Full Stack"]
  },
  {
    role: "AI Technical Engineer Intern",
    company: "Essence Minds Creation LLP (Shadow Arts)",
    duration: "Mar 2026 – Sep 2026",
    bullets: [
      "Built AI-driven prototypes integrating third-party APIs to automate key business workflows",
      "Developed and tested backend modules, improving system reliability and reducing manual processes",
      "Maintained clear technical documentation to support team collaboration and future development"
    ],
    tech: ["AI Prototypes", "API Automation", "Backend Modules", "Documentation"]
  },
  {
    role: "Technical Intern",
    company: "Kalaakshi",
    duration: "May 2026 – Jul 2026",
    bullets: [
      "Contributed to building and deploying a live event management platform under real production deadlines",
      "Handled backend implementation, database schema design, and deployment pipeline optimization"
    ],
    tech: ["React", "Django", "MySQL", "Database Design", "Deployment Pipeline"]
  },
  {
    role: "AI Development (Official Project)",
    company: "Vaagdevi College of Engineering",
    duration: "May 2026",
    bullets: [
      "Developed an institutional AI chatbot using Django and OpenAI APIs to reduce manual query handling significantly",
      "Designed and implemented REST API endpoints for automated response workflows on the college portal"
    ],
    tech: ["Python", "Django", "OpenAI API", "REST APIs", "Chatbot Architecture"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Career & Internships</span>
        <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-white mt-2">
          Work Experience
        </h2>
      </motion.div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="
              relative
              bg-slate-900/60
              border
              border-slate-800/80
              rounded-3xl
              p-8
              sm:p-10
              hover:border-cyan-500/40
              transition-all
              duration-300
              backdrop-blur-sm
              group
            "
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div>
                <h3 className="text-2xl font-bold font-heading text-white group-hover:text-cyan-300 transition">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-2 text-slate-300 font-medium mt-1 text-base">
                  <FaBuilding className="text-cyan-400 text-sm" />
                  <span>{exp.company}</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs sm:text-sm font-medium shrink-0 self-start md:self-auto">
                <FaCalendarAlt className="text-cyan-400" />
                <span>{exp.duration}</span>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <FaCheckCircle className="text-cyan-400 mt-1 shrink-0 text-sm" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/60">
              {exp.tech.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-lg bg-slate-950/60 border border-slate-800 text-xs font-semibold text-slate-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;