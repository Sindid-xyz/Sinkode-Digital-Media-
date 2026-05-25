import { motion } from "framer-motion";
import { fadeUp } from "./Hero";
import HlsBackground from "./HlsBackground";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-32 bg-black border-t border-white/5 overflow-hidden"
    >
      <HlsBackground opacity={0.7} overlayClass="bg-black/60" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          <motion.div
            {...fadeUp(0.1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-6 backdrop-blur-md"
          >
            <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase font-medium">
              Investment
            </span>
          </motion.div>

          <motion.h2
            {...fadeUp(0.25)}
            className="text-4xl md:text-6xl font-sans font-medium mb-6 tracking-tight text-white"
          >
            Transparent <span className="font-serif italic text-white editorial-italic">Pricing.</span>
          </motion.h2>
          
          <motion.p
            {...fadeUp(0.4)}
            className="text-gray-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed"
          >
            Premium tailored engineering. Discover flexible transparent pricing adapted strictly 
            to your digital requirements and business goals.
          </motion.p>
        </div>

        {/* Pricing Card */}
        <motion.div
          {...fadeUp(0.55)}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="liquid-glass rounded-2xl p-10 md:p-14 relative flex flex-col items-center text-center overflow-hidden shadow-2xl"
          >
            {/* Top ambient white subtle glow overlay */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

            <h3 className="text-2xl font-sans font-semibold mb-4 text-white relative z-10">
              Bespoke Web Engineering
            </h3>
            
            <p className="text-gray-400 text-sm mb-10 max-w-md relative z-10 font-light leading-relaxed">
              Every system is customized entirely from scratch. We build high-fidelity interactive digital architectures 
              featuring lightning speeds, perfect responsive mobile grids, and buttery Framer Motion animations.
            </p>

            <div className="mb-10 relative z-10 flex flex-col items-center">
              <span className="text-[10px] font-mono text-neutral-400 mb-3 uppercase tracking-[0.25em] font-medium">
                Estimated Range
              </span>
              
              <div className="flex items-end justify-center gap-2.5">
                <span className="text-5xl md:text-6xl font-sans font-extrabold text-white tracking-tight pb-1">
                  4,000 - 10,000
                </span>
                <span className="text-neutral-400 font-mono text-sm uppercase tracking-widest mb-2 font-medium">BDT</span>
              </div>
              
              <span className="text-[11px] text-neutral-500 mt-5 italic">
                * Final packages are configured precisely in agreement with milestones
              </span>
            </div>

            <a
              href="https://wa.link/rhz5pp"
              target="_blank"
              rel="noreferrer"
              className="relative w-full max-w-xs overflow-hidden py-4 rounded-xl bg-white text-black text-center font-bold tracking-wider hover:bg-neutral-200 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group z-50 shadow-md cursor-pointer pointer-events-auto text-sm uppercase transition-all"
            >
              <span className="relative z-10">Request Consultation</span>
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
