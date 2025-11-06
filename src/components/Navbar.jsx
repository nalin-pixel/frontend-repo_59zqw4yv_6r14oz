import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200/70 dark:border-neutral-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400 text-white">
              <Rocket className="h-4 w-4" />
            </span>
            <span>ConsultantsDen</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition-colors">
              Start a project
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-neutral-800 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block rounded-md px-3 py-2 text-base font-semibold text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                onClick={() => setOpen(false)}
              >
                Start a project
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
