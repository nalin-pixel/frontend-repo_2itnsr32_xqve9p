import React from 'react';
import { Briefcase } from 'lucide-react';

const roles = [
  {
    company: 'ImpacterAI Inc',
    title: 'Software Engineer',
    location: 'San Francisco, CA',
    period: 'Aug 2025 – Present',
    bullets: [
      'Architected multi-agent orchestration engine powering PersuadioAI, enabling real-time conversational AI for enterprise sales processing 5M+ calls/day with sub-second response times.',
      'Scaled real-time data-processing pipelines with FastAPI, Redis, and Kubernetes, improving throughput 5× and reducing p99 latency 40%.',
      'Optimized ML serving on Azure, reducing memory usage 68% and p99 inference time 70% via KV caching and batching.',
      'Built graph-driven analytics processing 80K+ events/min for real-time anomaly detection across 12+ microservices.'
    ],
  },
  {
    company: 'University of Illinois at Chicago',
    title: 'Software Engineer',
    location: 'Chicago, IL',
    period: 'Nov 2023 – Aug 2025',
    bullets: [
      'Designed modular RESTful APIs with Spring Boot, handling 6M+ requests/day using PostgreSQL, Redis, and MongoDB.',
      'Implemented thread-pool management and multi-layer caching, improving throughput 2.5× and reducing query time 65%.',
      'Built a full-stack semantic search platform using MERN + Elasticsearch for instant search over 62M+ records.',
      'Accelerated HPC training by 67% using parallel computing and custom CUDA kernels across 24+ GPU cores.'
    ],
  },
  {
    company: 'SimplyFI Innovations',
    title: 'Software Engineer 1',
    location: 'India',
    period: 'May 2022 – Aug 2023',
    bullets: [
      'Built trade finance automation handling 3000+ documents/day, cutting review time 90% with IDP workflows.',
      'Developed real-time fraud dashboards for 10M+ transactions/day with Prometheus and Grafana, reducing detection time 67%.',
      'Automated deployments to cut release cycles from 2 days to 1 hour across 16 microservices with 99.9% uptime.'
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-10 flex items-center gap-3">
          <Briefcase className="h-6 w-6 text-emerald-400" />
          <h2 className="text-2xl font-semibold">Experience</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {roles.map((r) => (
            <article key={r.company} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">{r.title} • {r.company}</h3>
                <span className="text-xs text-slate-300">{r.period}</span>
              </div>
              <p className="mt-1 text-sm text-slate-300">{r.location}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-200">
                {r.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
