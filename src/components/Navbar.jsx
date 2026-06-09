import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-400">
           SAR.dev
        </h1>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
  <li><a href="#about">About</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href="#experience">Experience</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#certifications">Certifications</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
      </div>
    </nav>
  );
};

export default Navbar;