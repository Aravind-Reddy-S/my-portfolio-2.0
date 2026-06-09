const certifications = [
  "IBM AI Agent Architect – IBM SkillsBuild",
  "Full Stack Web Development with AI Tools – Edunet Foundation & TASK",
  "CS50: Introduction to Computer Science – Harvard University",
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Certifications
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
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
            <h3 className="font-semibold text-lg text-cyan-400">
              {cert}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;