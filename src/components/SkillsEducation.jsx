import React from 'react';
import { Code, GraduationCap, Cpu } from 'lucide-react';

export default function SkillsEducation() {
  return (
    <section id="skills" className="relative bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <Code className="h-6 w-6 text-emerald-400" />
              <h2 className="text-2xl font-semibold">Technical Skills</h2>
            </div>
            <ul className="space-y-2 text-sm text-slate-200">
              <li><strong>Languages:</strong> Java, Python, Go, C#, C++, JavaScript, TypeScript, SQL, Bash, CUDA</li>
              <li><strong>Frameworks:</strong> Spring Boot, FastAPI, Node.js, React.js, gRPC, Hibernate</li>
              <li><strong>Tools:</strong> Kafka, Redis, Docker, Kubernetes, NGINX, Elasticsearch, RabbitMQ, Prometheus, Grafana, Spark, Flink</li>
              <li><strong>Databases:</strong> PostgreSQL, MongoDB, MySQL, Cassandra, AWS DynamoDB, S3, GCP BigQuery, Vector DBs</li>
              <li><strong>Cloud & DevOps:</strong> AWS, Azure, GCP, Linux, GitHub Actions, CI/CD, Microservices, RESTful APIs</li>
              <li><strong>AI/ML:</strong> LangChain, PyTorch, TensorFlow, MLflow, RAG, OpenAI & Gemini APIs, Mistral, HF</li>
              <li><strong>Certifications:</strong> AWS Solutions Architect – Associate (2024)</li>
            </ul>
          </div>
          <div id="education">
            <div className="mb-6 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-emerald-400" />
              <h2 className="text-2xl font-semibold">Education</h2>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <h3 className="font-semibold text-white">University of Illinois Chicago — MS in Computer Science</h3>
                <p className="text-sm text-slate-300">CGPA: 3.9/4 • Aug 2023 – May 2025</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <h3 className="font-semibold text-white">Vellore Institute of Technology — BS in Computer Science</h3>
                <p className="text-sm text-slate-300">CGPA: 3.7/4 • July 2019 – May 2023</p>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-slate-300">
              <Cpu className="h-4 w-4 text-emerald-400" />
              <span>Focused on distributed systems, HPC, and scalable microservices.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
