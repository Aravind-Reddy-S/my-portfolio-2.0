import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaExternalLinkAlt, 
  FaGooglePlay, 
  FaGithub, 
  FaGlobe, 
  FaStore, 
  FaBuilding, 
  FaGraduationCap, 
  FaRocket,
  FaRobot,
  FaLayerGroup
} from "react-icons/fa";

const shippedProducts = [
  {
    title: "Kalaakshi",
    category: "E-commerce, Event Booking & Arts Marketplace",
    website: "https://www.kalaakshi.com",
    displayUrl: "www.kalaakshi.com",
    description:
      "Multi-vendor platform for booking art events, purchasing art, and managing event logistics. Built with React frontend, Django backend, and MySQL database.",
    tech: ["React", "Django", "MySQL", "REST APIs", "Multi-Vendor"],
    badge: "Live Marketplace",
    icon: <FaStore className="text-cyan-400" />
  },
  {
    title: "OneClickBiz",
    category: "Business Onboarding & SaaS Platform",
    website: "https://www.oneclickbiz.in",
    displayUrl: "www.oneclickbiz.in",
    description:
      "All-in-one platform enabling businesses to go online and become operational. Integrated frontend-backend architecture with REST APIs and responsive Tailwind CSS design.",
    tech: ["React", "Tailwind CSS", "REST APIs", "SaaS Onboarding"],
    badge: "Live SaaS",
    icon: <FaRocket className="text-cyan-400" />
  },
  {
    title: "Nest Infra Developers CRM",
    category: "Real Estate Management System",
    website: "https://www.crm.nestinfradevelopers.in",
    displayUrl: "www.crm.nestinfradevelopers.in",
    description:
      "Custom CRM platform for real estate business with project tracking, lead management, and analytics. React frontend with Tailwind CSS styling and normalized MySQL database.",
    tech: ["React", "Tailwind CSS", "MySQL", "CRM Analytics"],
    badge: "Enterprise CRM",
    icon: <FaBuilding className="text-cyan-400" />
  },
  {
    title: "School ERP – Geethamjali High School",
    category: "Production Mobile Application",
    platform: "Google Play Store (NexSyrus Pvt Ltd)",
    playStore: "https://play.google.com/store/apps",
    description:
      "Production-ready mobile app for school management system. Handled backend implementation, database schema design, and deployment optimization. Currently live on Google Play Store (Maddur).",
    tech: ["Mobile App", "Backend Optimization", "MySQL", "Database Schema"],
    badge: "Google Play Store",
    icon: <FaGooglePlay className="text-emerald-400" />
  },
  {
    title: "Himastech Digital Reality Solutions",
    category: "Company Website & Portfolio",
    website: "https://www.himastechdigi.com",
    displayUrl: "www.himastechdigi.com",
    description:
      "Marketing and portfolio website for digital solutions company. Responsive React-based frontend with Tailwind CSS for modern design principles.",
    tech: ["React", "Tailwind CSS", "Modern UI/UX", "SEO"],
    badge: "Company Website",
    icon: <FaGlobe className="text-cyan-400" />
  },
  {
    title: "MerlinFlow Technologies",
    category: "Multi-vertical SaaS Platform (Founder)",
    website: "https://www.merlinflow.in",
    displayUrl: "www.merlinflow.in",
    description:
      "Multi-vertical SaaS startup targeting schools, hospitals, retail, and SMEs. Led full-stack development, product design, and technical execution as founder.",
    tech: ["React", "Full Stack", "SaaS Architecture", "Product Design"],
    badge: "Founder Startup",
    icon: <FaLayerGroup className="text-purple-400" />
  },
  {
    title: "College Chatbot Assistant",
    category: "Institutional AI Assistant",
    institution: "Vaagdevi College of Engineering",
    github: "https://github.com/Aravind-Reddy-S/college_chatbot2.0",
    description:
      "Intelligent chatbot using Django and OpenAI APIs to reduce manual query handling. Deployed on college portal with real-time assistance capabilities.",
    tech: ["Python", "Django", "OpenAI API", "REST APIs", "AI Automation"],
    badge: "Live AI Deployment",
    icon: <FaRobot className="text-cyan-400" />
  }
];

const otherProjects = [
  {
    title: "Vayu AI Assistant",
    tech: "Python • OpenAI API • LLMs",
    description: "Intelligent AI assistant capable of handling conversational workflows and automated task handling with LLM architectures.",
    github: "https://github.com/Aravind-Reddy-S/Vayu.git"
  },
  {
    title: "Vitaguard AI",
    tech: "Java • REST APIs • MySQL",
    description: "AI-powered healthcare support platform with intelligent monitoring workflows and backend API integrations.",
    github: "https://github.com/Aravind-Reddy-S/vita-guard-ai"
  },
  {
    title: "Captain Bro",
    tech: "React • AI • Backend",
    description: "An intelligent workflow tool built to handle complex tasks and enhance developer productivity.",
    github: "https://github.com/Aravind-Reddy-S/captain-bro"
  },
  {
    title: "Agri-Response",
    tech: "Java • Algorithms",
    description: "Soil and fertilizer recommendation system providing crop-specific suggestions based on environmental parameters.",
    github: "https://github.com/Aravind-Reddy-S/Agri-Response"
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("shipped");

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Production Portfolio</span>
        <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-white mt-2">
          Live Projects & Shipped Products
        </h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-base">
          Proven track record of building and deploying production-ready platforms for startups, enterprises, and educational institutions.
        </p>

        {/* Tab Toggle */}
        <div className="flex justify-center mt-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setActiveTab("shipped")}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition duration-300 ${
                activeTab === "shipped"
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              🚀 Shipped Live Products (7)
            </button>
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition duration-300 ${
                activeTab === "all"
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              💻 Other Repositories & Labs
            </button>
          </div>
        </div>
      </motion.div>

      {activeTab === "shipped" ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shippedProducts.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="
                bg-slate-900/60
                border
                border-slate-800/80
                rounded-3xl
                p-7
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
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {project.icon}
                    {project.badge}
                  </span>
                  
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-cyan-400 transition text-sm p-1"
                      aria-label={`Visit ${project.title}`}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  {project.playStore && (
                    <span className="text-emerald-400 text-sm">
                      <FaGooglePlay />
                    </span>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-cyan-400 transition text-base p-1"
                      aria-label={`GitHub for ${project.title}`}
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>

                <h3 className="text-2xl font-bold font-heading text-white group-hover:text-cyan-300 transition">
                  {project.title}
                </h3>

                <p className="text-xs font-medium text-cyan-400/90 mt-1 mb-3">
                  {project.category}
                </p>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-950/70 border border-slate-800 text-[11px] font-semibold text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 text-xs font-bold transition duration-300 group/btn"
                  >
                    <span>Visit Live Site</span>
                    <span className="text-[11px] text-slate-400 group-hover/btn:text-slate-900 transition">
                      {project.displayUrl} →
                    </span>
                  </a>
                )}

                {project.playStore && (
                  <div className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-slate-800/80 text-emerald-400 text-xs font-semibold">
                    <span className="flex items-center gap-1.5">
                      <FaGooglePlay /> Live on Play Store (Maddur)
                    </span>
                  </div>
                )}

                {project.institution && (
                  <div className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-slate-800/80 text-cyan-300 text-xs font-medium">
                    <span className="flex items-center gap-1.5">
                      <FaGraduationCap /> {project.institution}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="
                bg-slate-900/60
                border
                border-slate-800/80
                rounded-3xl
                p-7
                hover:border-cyan-500/40
                transition-all
                duration-300
                flex
                flex-col
                justify-between
                backdrop-blur-sm
              "
            >
              <div>
                <h3 className="text-xl font-bold font-heading text-white">
                  {project.title}
                </h3>
                <p className="text-xs text-cyan-400 mt-1 mb-3">
                  {project.tech}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-semibold transition"
              >
                <FaGithub />
                <span>View Source Code →</span>
              </a>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;