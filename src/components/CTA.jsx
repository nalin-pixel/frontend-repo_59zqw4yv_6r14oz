export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-black to-black">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Let’s build something remarkable</h2>
            <p className="mt-3 text-white/70">
              Tell us about your challenge. We’ll respond within one business day.
            </p>
            <ul className="mt-6 space-y-2 text-white/70 text-sm">
              <li>• Fixed-price discovery sprints</li>
              <li>• Transparent weekly delivery</li>
              <li>• Security-first engineering</li>
            </ul>
          </div>

          <form className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm text-white/70">Name</label>
                <input className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm text-white/70">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="jane@company.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-white/70">Project brief</label>
              <textarea rows={5} className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="What are you building?" />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <a href="mailto:hello@consultantsden.com" className="text-sm text-white/70 hover:text-white">or email us: hello@consultantsden.com</a>
              <button type="button" className="inline-flex items-center rounded-md bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-black hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-black">
                Send inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
