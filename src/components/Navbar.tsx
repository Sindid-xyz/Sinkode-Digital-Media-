import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CONTACT_INFO } from "../config";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        transition={{ duration: 0 }}
        className={`fixed left-1/2 -translate-x-1/2 z-40 transition-all duration-200 rounded-2xl w-[calc(100%-2rem)] max-w-5xl ${
          scrolled 
            ? "py-3.5 top-5 border border-white/15 bg-black/95 backdrop-blur-2xl shadow-[0_25px_50px_rgba(0,0,0,0.95)]" 
            : "py-6 top-8 border border-white/5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 relative group select-none pointer-events-auto">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/15 bg-black p-0.5 flex items-center justify-center transition-all duration-300 group-hover:border-white shadow-md shadow-black/80">
              <img
                src={CONTACT_INFO.logo}
                alt="Sinkode Media"
                className="w-full h-full object-cover rounded-full mix-blend-screen"
              />
            </div>
            <span className="font-sans font-bold text-base sm:text-xl tracking-widest uppercase transition-colors text-white">
              SINKODE<span className="text-neutral-400 font-light">MEDIA</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 relative z-50">
            <div className="flex items-center gap-8 text-[11px] font-medium uppercase tracking-[0.25em] text-neutral-400">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors relative z-50 pointer-events-auto cursor-pointer group py-1"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="bg-white text-black border border-white px-5 py-2.5 rounded-lg text-[10px] font-bold tracking-widest uppercase hover:bg-neutral-200 transition-all duration-300 cursor-pointer pointer-events-auto relative z-50 shadow-md"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Right Side Group */}
          <div className="flex md:hidden items-center gap-3 relative z-50">
            <button
              className="relative z-[60] text-neutral-400 hover:text-white cursor-pointer pointer-events-auto p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
          className="fixed inset-x-0 top-0 z-[35] bg-black/98 border-b border-white/10 pt-28 pb-10 px-6 md:hidden flex flex-col items-center gap-6 pointer-events-auto"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-sans font-medium text-neutral-300 hover:text-white transition-colors relative z-50 cursor-pointer pointer-events-auto"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 px-8 py-3 rounded-lg bg-white text-black font-bold text-sm text-center relative z-50 cursor-pointer pointer-events-auto w-full max-w-xs"
          >
            Contact Us
          </a>
        </motion.div>
      )}
    </>
  );
}
