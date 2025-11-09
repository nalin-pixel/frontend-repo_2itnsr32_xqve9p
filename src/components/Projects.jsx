import React from 'react';
import { Rocket, MapPin, Server } from 'lucide-react';

const projects = [
  {
    name: 'DynamicFlow Scheduler',
    icon: <Server className="h-5 w-5" />,
    desc: 'Distributed, fault-tolerant scheduler (Java & Spring Boot) with work-stealing using RabbitMQ, boosting task speed 30% and reducing downtime 50%.',
    tags: ['Java', 'Spring Boot', 'RabbitMQ', 'Redis'],
  },
  {
    name: 'Crashlens',
    icon: <MapPin className="h-5 w-5" />,
    desc: 'Traffic analytics and visualization platform on AWS with React + Python, D3.js, WebRTC and Mapbox for real-time insights and CRUD tooling.',
    tags: ['React', 'Python', 'D3.js', 'Mapbox', 'AWS'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-slate-900 py-20 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-10 flex items-center gap-3">
          <Rocket className="h-6 w-6 text-emerald-400" />
          <h2 className="text-2xl font-semibold">Projects</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.name} className="group rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 shadow-2xl backdrop-blur-md transition hover:from-white/10">
              <div className="mb-3 inline-flex items-center gap-2 text-white">
                <span className="rounded-md bg-emerald-500/20 p-2 text-emerald-300 ring-1 ring-emerald-500/30">{p.icon}</span>
                <h3 className="text-lg font-semibold">{p.name}</h3>
              </div>
              <p className="text-sm text-slate-200">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/15">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
