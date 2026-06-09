const About = () => {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8">
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
        </div>

        <div className="grid grid-cols-2 gap-5">

          <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800">
            <h3 className="text-4xl font-bold text-cyan-400">
              5+
            </h3>
            <p>Projects Built</p>
          </div>

          <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800">
            <h3 className="text-4xl font-bold text-cyan-400">
              3
            </h3>
            <p>Internships</p>
          </div>

          <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800">
            <h3 className="text-4xl font-bold text-cyan-400">
              8.42
            </h3>
            <p>CGPA</p>
          </div>

          <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800">
            <h3 className="text-4xl font-bold text-cyan-400">
              AI
            </h3>
            <p>Focused Career</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;