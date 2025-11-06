export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} ConsultantsDen. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#home" className="hover:text-white">Top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
