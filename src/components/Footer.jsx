import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-400">
        <div className="flex items-center gap-2 font-medium">
          <span>Sangem Aravind Reddy</span>
          <span className="text-slate-600">•</span>
          <span className="text-cyan-400">Associate Frontend & Full Stack Developer</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Aravind-Reddy-S"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sangem-aravind-reddy-b115a2352"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:aravindreddy1916@gmail.com"
            className="hover:text-cyan-400 transition"
          >
            Email
          </a>
        </div>

        <div className="text-slate-500 text-xs">
          © {new Date().getFullYear()} Sangem Aravind Reddy. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;