import { Cpu, Globe, Cloud, Wrench } from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'IoT Systems',
    desc: 'Device firmware, edge computing, and telemetry pipelines that scale from prototype to fleet.'
  },
  {
    icon: Globe,
    title: 'Web Experiences',
    desc: 'Fast, responsive applications with rich interactions and accessible design.'
  },
  {
    icon: Cloud,
    title: 'Cloud & Platforms',
    desc: 'Secure APIs, data processing, and automation built on resilient cloud architectures.'
  },
  {
    icon: Wrench,
    title: 'Product Engineering',
    desc: 'End-to-end product delivery, from discovery to launch and continuous improvement.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">What we do</h2>
          <p className="mt-3 text-white/70">Focused, outcome-driven delivery across the stack.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/[0.08]">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
