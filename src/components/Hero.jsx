import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl text-center">

        <p className="text-cyan-400 text-lg mb-4">
          ✋🏻 HELLO, I'm
        </p>

        <h1 className="text-6xl md:text-8xl font-bold leading-tight">
          <span className="text-white">SANGEM</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            ARAVIND REDDY
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-slate-300 mt-6">
          AI & Full Stack Developer
        </h2>

        <p className="max-w-3xl mx-auto text-slate-400 mt-6 text-lg">
          Passionate Computer Science Engineering student focused on
          Artificial Intelligence, Backend Development, and Full Stack
          Engineering. Building intelligent software solutions using
          Java, Python, Django, REST APIs, and AI technologies.
        </p>

        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          <a
            href="#projects"
            className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-3 rounded-xl font-semibold"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="border border-cyan-500 hover:bg-cyan-500/10 transition px-8 py-3 rounded-xl font-semibold"
          >
            Download Resume
          </a>
        </div>

        <div className="flex justify-center gap-8 mt-10 text-4xl">
          <a
            href="https://github.com/Aravind-Reddy-S"
            target="_blank"
          >
            <FaGithub className="hover:text-cyan-400 transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/sangem-aravind-reddy-b115a2352"
            target="_blank"
          >
            <FaLinkedin className="hover:text-cyan-400 transition" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;