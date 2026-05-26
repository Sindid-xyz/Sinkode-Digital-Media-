import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { fadeUp } from "./Hero";
import HlsBackground from "./HlsBackground";

export default function Testimonials() {
  return (
    <section className="relative py-32 bg-black border-t border-white/5 overflow-hidden huge-section gpu-accelerated">
      <HlsBackground opacity={0.7} overlayClass="bg-black/60" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-24 flex flex-col items-center">
          <motion.div
            {...fadeUp(0.1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-6 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase font-medium">
              Verified Client Endorsements
            </span>
          </motion.div>
          
          <motion.h2
            {...fadeUp(0.25)}
            className="text-4xl md:text-6xl font-sans font-medium mb-6 tracking-tight text-white"
          >
            Client <span className="font-serif italic text-white editorial-italic">Endorsements.</span>
          </motion.h2>

          <motion.p
            {...fadeUp(0.4)}
            className="text-gray-400 text-lg font-light leading-relaxed"
          >
            We practice transparency and build high-quality digital assets. Here from real clients soon.
          </motion.p>
        </div>

        {/* Testimonials Loading Block */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            {...fadeUp(0.5)}
            className="liquid-glass p-12 md:p-16 rounded-3xl flex flex-col items-center text-center shadow-2xl relative overflow-hidden group"
          >
            {/* Spinning decorative background gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/5 rounded-full filter blur-3xl pointer-events-none" />

            <div className="relative mb-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-white/20 rounded-full filter blur-xl opacity-30 animate-pulse" />
              <div className="w-20 h-20 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center relative">
                <Loader2 className="text-white animate-spin" size={32} style={{ animationDuration: '4s' }} />
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-sans font-semibold text-white tracking-tight mb-4">
              Reviews Coming Soon
            </h3>
            
            <p className="text-muted-foreground text-sm font-light max-w-md leading-relaxed mb-8">
              True excellence doesn't rely on simulated evaluations. We are currently preparing verified, genuine client endorsements from outstanding businesses we partner with.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-mono tracking-wider text-neutral-300 font-medium uppercase">
                100% Authentic Feedback Only
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
