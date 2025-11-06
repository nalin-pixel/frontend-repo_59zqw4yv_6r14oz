export default function CTA() {
  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-gradient-to-tr from-fuchsia-100 via-violet-100 to-cyan-100 dark:from-fuchsia-500/10 dark:via-violet-500/10 dark:to-cyan-500/10">
          <div className="p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">Have an idea? Let’s build it together.</h3>
              <p className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-xl">Tell us about your goals and constraints — we’ll propose a pragmatic plan with timelines, milestones, and investment options.</p>

              <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className="col-span-1 sm:col-span-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-violet-400" placeholder="Company / Name" />
                <input className="rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-violet-400" placeholder="Email" />
                <input className="rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-violet-400" placeholder="Budget" />
                <textarea rows={4} className="col-span-1 sm:col-span-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-violet-400" placeholder="Project details" />

                <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row gap-3 mt-2">
                  <button type="button" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">Request proposal</button>
                  <a href="mailto:hello@consultantsden.com" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-white/80 hover:bg-white dark:bg-neutral-900/80 dark:hover:bg-neutral-900 backdrop-blur border border-neutral-200/60 dark:border-neutral-800 text-neutral-900 dark:text-white">Email us</a>
                </div>
              </form>
            </div>

            <div className="hidden lg:block">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900 p-8">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-4">
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white">Delivery</p>
                    <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">Sprints, demos, clear milestones.</p>
                  </div>
                  <div className="rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-4">
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white">Quality</p>
                    <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">Automated checks and reviews.</p>
                  </div>
                  <div className="rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-4">
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white">Security</p>
                    <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">Best practices baked in.</p>
                  </div>
                  <div className="rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-4">
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white">Scale</p>
                    <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-300">Cloud-native and ready to grow.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
