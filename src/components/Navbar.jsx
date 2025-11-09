import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-900/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:px-8 md:px-12 lg:px-16">
        <a href="#home" className="font-semibold tracking-tight text-white">YR Dasari</a>
        <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#education" className="hover:text-white">Education</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="mailto:yash1th263@gmail.com" aria-label="Email" className="text-slate-300 hover:text-white">
            <Mail className="h-5 w-5" />
          </a>
          <a href="tel:13126468975" aria-label="Phone" className="text-slate-300 hover:text-white">
            <Phone className="h-5 w-5" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-300 hover:text-white">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-300 hover:text-white">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
