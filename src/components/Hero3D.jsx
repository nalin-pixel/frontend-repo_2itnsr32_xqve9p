import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero3D() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        {/* Updated to the new interactive animation scene */}
        <Spline scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlay to improve text contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/25 to-slate-950/70" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pt-32 pb-20 sm:px-8 md:px-12 lg:px-16">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200 backdrop-blur-md ring-1 ring-white/15"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          Move your mouse — the hero is interactive
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        >
          YASHWANTH REDDY DASARI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-lg leading-relaxed text-slate-200"
        >
          Software Engineer skilled in distributed systems, backend architecture, and scalable microservices using Java, C++, and Python. Strong foundation in algorithms and data structures, with experience building high-performance services handling millions of requests.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="mailto:yash1th263@gmail.com"
            className="group inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 font-medium text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
          >
            Contact Me
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 font-medium text-white ring-1 ring-white/15 backdrop-blur transition hover:bg-white/20"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
