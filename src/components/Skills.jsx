import { 
  FaJava, 
  FaPython, 
  FaGitAlt, 
  FaGithub, 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaDatabase, 
  FaServer, 
  FaCode, 
  FaTools 
} from "react-icons/fa";
import { 
  SiDjango, 
  SiMysql, 
  SiJavascript, 
  SiOpenai, 
  SiTailwindcss, 
  SiMongodb 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <FaCode className="text-cyan-400" />,
    skills: [
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Python", icon: <FaPython className="text-blue-400" /> },
      { name: "Java", icon: <FaJava className="text-red-400" /> },
      { name: "SQL", icon: <FaDatabase className="text-cyan-400" /> }
    ]
  },
  {
    title: "Frontend Engineering",
    icon: <FaReact className="text-cyan-400" />,
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
      { name: "HTML5 & CSS3", icon: <FaHtml5 className="text-orange-400" /> },
      { name: "Responsive Design", icon: <FaCss3Alt className="text-blue-400" /> },
      { name: "REST API Integration", icon: <FaServer className="text-teal-400" /> }
    ]
  },
  {
    title: "Backend & AI",
    icon: <FaServer className="text-cyan-400" />,
    skills: [
      { name: "Django", icon: <SiDjango className="text-emerald-400" /> },
      { name: "REST APIs", icon: <FaServer className="text-cyan-400" /> },
      { name: "OpenAI API Integration", icon: <SiOpenai className="text-emerald-300" /> },
      { name: "Microservices", icon: <FaCode className="text-indigo-400" /> }
    ]
  },
  {
    title: "Database Management",
    icon: <FaDatabase className="text-cyan-400" />,
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
      { name: "Database Design", icon: <FaDatabase className="text-cyan-400" /> },
      { name: "Query Optimization & Normalization", icon: <FaDatabase className="text-indigo-300" /> }
    ]
  },
  {
    title: "Tools, CS & Core Foundations",
    icon: <FaTools className="text-cyan-400" />,
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-slate-200" /> },
      { name: "VS Code", icon: <VscVscode className="text-blue-400" /> },
      { name: "OOP & DSA", icon: <FaCode className="text-cyan-400" /> },
      { name: "DBMS & Collections", icon: <FaDatabase className="text-purple-400" /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Expertise & Technologies</span>
        <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-white mt-2">
          Technical Skills
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`
              bg-slate-900/60
              border
              border-slate-800/80
              rounded-3xl
              p-7
              hover:border-cyan-500/40
              transition-all
              duration-300
              backdrop-blur-sm
              flex
              flex-col
              justify-between
              ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}
            `}
          >
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/80">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-950/70 border border-slate-800 text-sm font-medium text-slate-300 hover:text-white hover:border-cyan-500/40 transition duration-200"
                  >
                    <span className="text-base">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;