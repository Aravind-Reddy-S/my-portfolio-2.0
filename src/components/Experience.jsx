import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer Intern (AI & Full Stack)",
    company: "NexSyrus Pvt Ltd",
    duration: "Jun 2026 - Dec 2026",
    description:
      "Worked on the design, development, testing, and deployment of modern software applications, AI-powered solutions, and web platforms."
  },
  {
    role: "AI Developer (Official Project)",
    company: "Vaagdevi College of Engineering",
    duration: "May 2026 - June 2026",
    description:
      "Developed AI-powered chatbot solutions using Django and OpenAI APIs. Implemented backend workflows and REST API integrations."
  },
  {
    role: "R&D Intern",
    company: "Essence Roots Creations LLP (Shadow Arts)",
    duration: "Mar 2026 - Present",
    description:
      "Developed AI-driven prototypes and automation solutions. Contributed to backend systems and technical documentation."
  },
  {
    role: "Technical Lead Intern",
    company: "Kalaakshi",
    duration: "May 2026 - Jul 2026",
    description:
      "Worked on event management platform development and deployment. Supported backend workflows and database operations."
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <motion.h2 
        className="text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <div className="space-y-8">

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="
              bg-slate-900/60
              border
              border-slate-800
              rounded-3xl
              p-8
              hover:border-cyan-400
              transition-all
            "
          >
            <h3 className="text-2xl font-bold text-cyan-400">
              {exp.role}
            </h3>

            <p className="text-slate-300 mt-2">
              {exp.company}
            </p>

            <p className="text-sm text-slate-500 mt-1">
              {exp.duration}
            </p>

            <p className="text-slate-400 mt-4">
              {exp.description}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Experience;