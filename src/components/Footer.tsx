import { CONTACT_INFO } from "../config";

export default function Footer() {
  return (
    <footer className="relative bg-black py-16 border-t border-white/10 overflow-hidden z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/20 bg-neutral-900 p-0.5 flex items-center justify-center transition-all duration-300 shadow-md shadow-black/80">
            <img
              src={CONTACT_INFO.logo}
              alt="Sinkode Media logo"
              className="w-full h-full object-cover rounded-full mix-blend-screen opacity-100"
            />
          </div>
          <span className="font-sans font-bold text-lg tracking-widest uppercase text-white">
            SINKODE<span className="text-neutral-300 font-light">MEDIA</span>
          </span>
        </div>

        <p className="text-[11px] text-neutral-300 font-bold font-mono tracking-widest uppercase text-center">
          Building Future Experience
        </p>

        <div className="text-[11px] uppercase tracking-widest text-neutral-400 md:border-l border-white/15 md:pl-12 flex items-center md:h-10 text-center font-mono font-medium">
          © {new Date().getFullYear()} Sinkode Media.
          <br className="md:hidden" /> All rights reserved.
        </div>
      </div>
    </footer>
  );
}
