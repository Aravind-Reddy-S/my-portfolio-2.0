const projects = [
  {
    title: "Vitaguard AI",
    tech: "Java • REST APIs • MySQL",
    description:
      "AI-powered healthcare support platform with intelligent monitoring workflows and backend API integrations.",
    github: "https://github.com/Aravind-Reddy-S/vita-guard-ai",
  },

  {
    title: "ALPHA AI Assistant",
    tech: "Python • OpenAI API • AI Assistant",
    description:
      "Intelligent AI assistant capable of handling user interactions, automation workflows, and AI-powered conversational experiences using modern LLM technologies.",
    github: "https://github.com/Aravind-Reddy-S/ALPHA-AI-Assistant",
  },

  {
    title: "Shadow Arts",
    tech: "Django • MySQL • E-Commerce",
    description:
      "E-commerce and event booking platform where users can purchase artwork, paintings, and book creative events.",
    github: "#",
  },

  {
    title: "Kalaakshi",
    tech: "Django • MySQL",
    description:
      "Live event management platform with registration workflows, event management, and backend operations.",
    github: "https://github.com/Aravind-Reddy-S/Kalaakshi",
  },

  {
    title: "College Chatbot Assistant",
    tech: "Python • Django • OpenAI API",
    description:
      "AI-powered chatbot built for institutional queries using OpenAI APIs and backend automation workflows.",
    github: "https://github.com/Aravind-Reddy-S/college-chatbot",
  },

  {
    title: "Agri-Response",
    tech: "Java",
    description:
      "Soil and fertilizer recommendation system providing crop-specific suggestions based on soil conditions.",
    github: "https://github.com/Aravind-Reddy-S/Agri-Response",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
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
            "
          >
            <h3 className="text-2xl font-bold text-cyan-400">
              {project.title}
            </h3>

            <p className="text-sm text-slate-500 mt-2">
              {project.tech}
            </p>

            <p className="text-slate-400 mt-5">
              {project.description}
            </p>

            <a
              href={project.github}
              target="_blank"
              className="inline-block mt-6 text-cyan-400"
            >
              View Project →
            </a>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;