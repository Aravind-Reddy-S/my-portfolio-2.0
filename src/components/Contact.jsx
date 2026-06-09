import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-32"
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Contact Me
      </h2>

      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-10 text-center">

        <p className="text-slate-400 text-lg mb-8">
          I'm actively seeking internship opportunities, AI projects,
          and full-stack development roles. Feel free to connect with me.
        </p>

        <div className="space-y-3 mb-10">
          <p className="text-slate-300">
            📧 aravindreddy1916@gmail.com
          </p>

          <p className="text-slate-300">
        📍 Warangal, Telangana, India
          </p>

          <p className="text-cyan-400 font-medium">
            Available for Internships • Freelance • AI Projects
          </p>
        </div>

        <div className="flex justify-center gap-8 text-4xl mb-10">

          <a
            href="mailto:aravindreddy1916@gmail.com"
            className="hover:text-cyan-400 transition"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/Aravind-Reddy-S"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sangem-aravind-reddy-b115a2352"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

        </div>

        <a
          href="/resume.pdf"
          download
          className="
            inline-block
            bg-cyan-500
            hover:bg-cyan-600
            px-8
            py-4
            rounded-xl
            font-semibold
            transition
          "
        >
          Download Resume
        </a>

      </div>
    </section>
  );
};

export default Contact;