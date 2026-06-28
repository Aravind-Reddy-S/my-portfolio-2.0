import { motion } from "framer-motion";

const projects = [
  {
    title: "ALPHA AI Assistant",
    tech: "Python • OpenAI API • AI Assistant",
    description:
      "Intelligent AI assistant capable of handling user interactions, automation workflows, and AI-powered conversational experiences using modern LLM technologies.",
    github: "https://github.com/Aravind-Reddy-S/ALPHA-AI-Assistant",
  },
  {
    title: "College Chatbot v2.0",
    tech: "Python • AI • Backend",
    description:
      "An upgraded and optimized version of the AI college assistant featuring improved conversation handling and performance.",
    github: "https://github.com/Aravind-Reddy-S/college_chatbot2.0",
  },
  {
    title: "Vitaguard AI",
    tech: "Java • REST APIs • MySQL",
    description:
      "AI-powered healthcare support platform with intelligent monitoring workflows and backend API integrations.",
    github: "https://github.com/Aravind-Reddy-S/vita-guard-ai",
  },
  {
    title: "Captain Bro",
    tech: "React • AI • Backend",
    description:
      "An intelligent application built to handle complex workflows and enhance user productivity.",
    github: "https://github.com/Aravind-Reddy-S/captain-bro",
  },
  {
    title: "Oryol Technologies Platform",
    tech: "JavaScript • Full Stack",
    description:
      "A complete full-stack web platform built for Oryol Technologies with modern web technologies.",
    github: "https://github.com/Aravind-Reddy-S/Oryol-Technologies-Pvt-Ltd",
  },
  {
    title: "Agri-Response",
    tech: "Java",
    description:
      "Soil and fertilizer recommendation system providing crop-specific suggestions based on soil conditions.",
    github: "https://github.com/Aravind-Reddy-S/Agri-Response",
  },
  {
    title: "Shadow Arts",
    tech: "Django • MySQL • E-Commerce",
    description:
      "E-commerce and event booking platform where users can purchase artwork, paintings, and book creative events.",
    github: "https://github.com/Aravind-Reddy-S/shadow-arts",
  },
  {
    title: "Kalaakshi",
    tech: "Django • MySQL",
    description:
      "Live event management platform with registration workflows, event management, and backend operations.",
    github: "https://github.com/Aravind-Reddy-S/Kalaakshi",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <motion.h2 
        className="text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="
              bg-slate-900/60
              border
              border-slate-800
              rounded-3xl
              p-8
              hover:border-cyan-400
              hover:-translate-y-2
              transition-all
              duration-300
              flex
              flex-col
              h-full
            "
          >
            <h3 className="text-2xl font-bold text-cyan-400">
              {project.title}
            </h3>

            <p className="text-sm text-slate-500 mt-2">
              {project.tech}
            </p>

            <p className="text-slate-400 mt-5 flex-grow">
              {project.description}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-cyan-400 hover:text-cyan-300 transition mt-auto"
            >
              View Project →
            </a>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Projects;