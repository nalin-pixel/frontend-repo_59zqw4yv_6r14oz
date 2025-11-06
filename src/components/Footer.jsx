export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-lg font-semibold text-neutral-900 dark:text-white">ConsultantsDen</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Strategy • Design • Engineering</p>
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} ConsultantsDen. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
