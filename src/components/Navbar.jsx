import { useState } from "react";
import { FaBars, FaTimes, FaFileAlt } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Shipped Products", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-slate-950 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition duration-300">
            AR
          </div>
          <span className="text-xl font-bold font-heading tracking-tight bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
            Sangem Aravind Reddy
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <ul className="flex gap-7">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-slate-300 hover:text-cyan-400 transition duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/Sangem_Aravind_Reddy_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500 hover:text-slate-950 transition duration-300"
          >
            <FaFileAlt className="text-xs" />
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-2xl text-slate-300 hover:text-cyan-400 focus:outline-none p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800/80 px-6 py-6 shadow-2xl">
          <ul className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-2 text-slate-300 hover:text-cyan-400 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/Sangem_Aravind_Reddy_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition"
                onClick={() => setIsOpen(false)}
              >
                <FaFileAlt />
                View Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;