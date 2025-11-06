import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[84vh] md:min-h-[92vh]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-white/70 dark:bg-neutral-900/70 backdrop-blur border border-neutral-200/60 dark:border-neutral-800 text-neutral-700 dark:text-neutral-200">Consulting • Engineering • Delivery</span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-600 dark:from-white dark:via-neutral-200 dark:to-neutral-400 bg-clip-text text-transparent">
              Build standout IoT, web, and software experiences
            </h1>
            <p className="mt-6 text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl">
              ConsultantsDen is a product-focused consulting studio helping ambitious teams ship beautiful, reliable systems — from connected devices to cloud platforms and modern web apps.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
                Start a project
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-white/80 hover:bg-white dark:bg-neutral-900/80 dark:hover:bg-neutral-900 backdrop-blur border border-neutral-200/60 dark:border-neutral-800 text-neutral-900 dark:text-white">
                Explore services
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-neutral-950 dark:via-neutral-950/80" />
    </section>
  );
}
