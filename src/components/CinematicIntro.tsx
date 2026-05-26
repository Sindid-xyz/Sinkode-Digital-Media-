import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { CONTACT_INFO } from "../config";
import workspaceImg from "../assets/images/character_coding_desk_1779619838188.png";

export default function CinematicIntro({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // Elegant, minimal animation sequence optimized for device types
    const isMobileDevice = typeof window !== "undefined" && window.innerWidth <= 768;
    const speedMultiplier = isMobileDevice ? 0.35 : 1; //snappy 2 second flow for mobile to optimize FCP/render

    const t1 = setTimeout(() => setPhase(1), 500 * speedMultiplier); // Start logo fade and developer image fade
    const t2 = setTimeout(() => setPhase(2), 2000 * speedMultiplier); // Crossfade logo to text and code snippets
    const t3 = setTimeout(() => setPhase(3), 4800 * speedMultiplier); // Start exit
    const t4 = setTimeout(() => onComplete(), 5800 * speedMultiplier); // Complete

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)", scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] },
    },
  };

  const codeLines = [
    "const initLuxuryPipeline = async () => {",
    "  await coreSystem.connect();",
    "  renderUI({ mode: 'monochrome-luxury' });",
    "  return STATUS_ONLINE;",
    "};"
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center font-mono pointer-events-none overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_#000000_70%)] opacity-80 z-10" />
      
      {/* Background Coding Character Image */}
      <AnimatePresence>
        {phase >= 1 && (
          <motion.img
            src={workspaceImg}
            alt="Developer Coding"
            initial={{ opacity: 0, scale: 1.1, filter: "brightness(0.2) blur(10px)" }}
            animate={{ 
              opacity: phase >= 2 ? 0.3 : 0.6, 
              scale: 1, 
              filter: phase >= 2 ? "brightness(0.4) blur(4px)" : "brightness(0.6) blur(0px)"
            }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center z-0 mix-blend-screen opacity-20 filter grayscale"
          />
        )}
      </AnimatePresence>

      <div className="relative z-20 flex flex-col items-center justify-center">
        {/* Phase 1: Logo Reveal */}
        <AnimatePresence>
          {phase === 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute flex items-center justify-center"
            >
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-white/10 bg-black p-1 flex items-center justify-center shadow-[0_0_35px_rgba(255,255,255,0.1)]">
                <img
                  src={CONTACT_INFO.logo}
                  alt="Sinkode Media Logo"
                  className="w-full h-full object-cover rounded-full mix-blend-screen"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase 2: Staggered Content Animation and Coding Details */}
        <AnimatePresence>
          {phase === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute flex flex-col items-center w-full"
            >
              {/* Subtle coding text overlay */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.5, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute -top-32 w-full max-w-lg hidden sm:block text-[10px] sm:text-xs text-neutral-500 leading-relaxed font-mono"
              >
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ delay: 0.8 + i * 0.15, duration: 0.6, ease: "linear" }}
                    className="overflow-hidden whitespace-nowrap"
                  >
                    {line}
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex items-center justify-center gap-4 sm:gap-6 w-full px-4 relative z-10"
              >
                <div className="flex text-4xl sm:text-6xl md:text-7xl font-sans font-bold text-white tracking-[0.1em] uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] font-sans">
                  {"Sinkode".split("").map((char, index) => (
                    <motion.span key={`sinkode-${index}`} variants={letter} className="inline-block">
                      {char}
                    </motion.span>
                  ))}
                </div>
                <div className="flex text-4xl sm:text-6xl md:text-7xl font-sans font-light text-neutral-400 tracking-[0.1em] uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.05)] font-sans">
                  {"Media".split("").map((char, index) => (
                    <motion.span key={`media-${index}`} variants={letter} className="inline-block">
                      {char}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.5 }}
                transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
                className="h-[1px] w-32 sm:w-48 bg-gradient-to-r from-transparent via-white to-transparent mt-8 origin-center"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
