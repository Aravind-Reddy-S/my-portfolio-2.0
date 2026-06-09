import {
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiDjango,
  SiMysql,
  SiJavascript,
  SiOpenai,
} from "react-icons/si";

const skills = [
  {
    name: "Java",
    icon: <FaJava size={40} />,
  },
  {
    name: "Python",
    icon: <FaPython size={40} />,
  },
  {
    name: "Django",
    icon: <SiDjango size={40} />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={40} />,
  },
  {
    name: "MySQL",
    icon: <SiMysql size={40} />,
  },
  {
    name: "OpenAI API",
    icon: <SiOpenai size={40} />,
  },
  {
    name: "Git",
    icon: <FaGitAlt size={40} />,
  },
  {
    name: "GitHub",
    icon: <FaGithub size={40} />,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              bg-slate-900/60
              border
              border-slate-800
              rounded-3xl
              p-8
              flex
              flex-col
              items-center
              gap-4
              hover:border-cyan-400
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            <div className="text-cyan-400">
              {skill.icon}
            </div>

            <h3 className="font-semibold">
              {skill.name}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;