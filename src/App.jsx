import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SkillsEducation from './components/SkillsEducation';

function Footer() {
  return (
    <footer className="bg-slate-900 py-10 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-lg font-semibold text-white">Let’s build something performant.</h3>
            <p className="text-sm">312-646-8975 • <a href="mailto:yash1th263@gmail.com" className="underline decoration-emerald-400/60 underline-offset-2">yash1th263@gmail.com</a></p>
          </div>
          <div className="flex gap-4 text-sm">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
          </div>
        </div>
        <p className="mt-6 text-xs text-slate-400">© {new Date().getFullYear()} Yashwanth Reddy Dasari. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans antialiased">
      <Navbar />
      <Hero3D />
      <Experience />
      <Projects />
      <SkillsEducation />
      <Footer />
    </div>
  );
}
