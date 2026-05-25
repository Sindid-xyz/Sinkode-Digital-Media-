import { motion } from "framer-motion";
import { ArrowRight, Phone, Instagram, MessageSquare } from "lucide-react";
import { CONTACT_INFO } from "../config";
import { fadeUp } from "./Hero";
import HlsBackground from "./HlsBackground";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 bg-black border-t border-white/10 overflow-hidden"
    >
      <HlsBackground opacity={0.7} overlayClass="bg-black/60" />
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          {...fadeUp(0.25)}
          className="liquid-glass border border-white/5 rounded-3xl p-12 md:p-24 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle luxurious internal white blurs instead of orange */}
          <div className="absolute -top-32 -left-32 w-72 h-72 bg-white/[0.03] rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-white/[0.02] rounded-full blur-[110px] pointer-events-none" />

          <h2 className="text-4xl md:text-7xl font-sans font-medium mb-6 relative z-10 tracking-tight text-white leading-[1.1]">
            Let's Build Something{" "}
            <span className="font-serif italic text-white block sm:inline-block editorial-italic">Premium.</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-lg mx-auto relative z-10 font-light leading-relaxed">
            Ready to upgrade your digital presence? Collaborate directly with our digital architects 
            to manifest your company's absolute visual pinnacle.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative z-55">
            <a
              href="https://api.whatsapp.com/send?phone=8801309334404"
              target="_blank"
              rel="noreferrer"
              className="group relative z-50 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white text-black font-extrabold transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto shadow-xl cursor-pointer pointer-events-auto text-sm uppercase"
            >
              <MessageSquare size={18} className="pointer-events-none" />
              <span className="tracking-wider text-xs font-bold pointer-events-none">Message on WhatsApp</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform pointer-events-none" />
            </a>

            <a
              href="tel:+8801309332204"
              className="group relative z-30 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/[0.03] border border-white/15 text-neutral-200 font-bold hover:bg-white/[0.08] hover:border-white/30 hover:text-white transition-all w-full sm:w-auto shadow-md cursor-pointer pointer-events-auto text-sm uppercase"
            >
              <Phone size={18} className="pointer-events-none text-neutral-400 group-hover:text-white transition-colors" />
              <span className="tracking-wider text-xs font-bold pointer-events-none">01309332204</span>
              <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 pointer-events-none" />
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 relative z-50 flex items-center justify-center">
            <a
              href={CONTACT_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group cursor-pointer pointer-events-auto relative z-50"
            >
              <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:text-white transition-colors duration-300">
                <Instagram size={18} />
              </div>
              <span className="font-light tracking-widest uppercase text-xs">
                Follow @sinkode.media
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
