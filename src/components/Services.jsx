import { CircuitBoard, Globe, Server, Wrench } from 'lucide-react';

const services = [
  {
    icon: CircuitBoard,
    title: 'IoT Systems',
    desc: 'Hardware integration, device firmware, secure connectivity, and fleet management for reliable, scalable deployments.',
  },
  {
    icon: Globe,
    title: 'Web Experiences',
    desc: 'Design and development of high-performance websites and apps using modern stacks and accessible UX.',
  },
  {
    icon: Server,
    title: 'Cloud & Platforms',
    desc: 'APIs, data pipelines, and infrastructure that support real-time analytics and seamless integrations.',
  },
  {
    icon: Wrench,
    title: 'Product Engineering',
    desc: 'From discovery to delivery — roadmaps, prototyping, and full-stack build with measurable outcomes.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-24 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">What we do</h2>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">End-to-end consulting, tailored to outcomes. We combine strategy, design, and engineering to move your product forward.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 hover:shadow-xl transition-shadow">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400 text-white">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
