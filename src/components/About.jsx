import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <motion.h2 
        className="text-5xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">

        <motion.div 
          className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
            Who Am I?
          </h3>

          <p className="text-slate-300 leading-8">
            Computer Science Engineering student passionate about
            Artificial Intelligence, Backend Development and
            Full Stack Engineering.

            Experienced in developing AI-powered applications,
            REST APIs, scalable web platforms and intelligent
            software solutions using Java, Python, Django and MySQL.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-5">

          {[
            { value: "8+", label: "Projects Built" },
            { value: "4", label: "Internships" },
            { value: "8.31", label: "CGPA" },
            { value: "AI", label: "Focused Career" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                {stat.value}
              </h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default About;