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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobileDevice = typeof window !== "undefined" && window.innerWidth <= 768;
    setIsMobile(isMobileDevice);

    // Optimized storytelling timers for device types:
    // Mobile is smoother, slower, and immersive; Desktop is premium & fast cinematic feel.
    const delay1 = isMobileDevice ? 700 : 500;   // Start logo fade and developer image fade
    const delay2 = isMobileDevice ? 2600 : 2000; // Crossfade logo to text and code snippets
    const delay3 = isMobileDevice ? 6200 : 4800; // Start exit
    const delay4 = isMobileDevice ? 7650 : 5800; // Complete

    const t1 = setTimeout(() => setPhase(1), delay1);
    const t2 = setTimeout(() => setPhase(2), delay2);
    const t3 = setTimeout(() => setPhase(3), delay3);
    const t4 = setTimeout(() => onComplete(), delay4);

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
        staggerChildren: isMobile ? 0.08 : 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 15, filter: isMobile ? "none" : "blur(8px)", scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      filter: isMobile ? "none" : "blur(0px)",
      scale: 1,
      transition: { duration: isMobile ? 1.4 : 0.8, ease: [0.16, 1, 0.3, 1] },
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
      exit={{ opacity: 0, filter: isMobile ? "none" : "blur(10px)" }}
      transition={{ duration: isMobile ? 1.2 : 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center font-mono pointer-events-none overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_#000000_70%)] opacity-80 z-10" />
      
      {/* Background Coding Character Image */}
      <AnimatePresence>
        {phase >= 1 && (
          <motion.img
            src={workspaceImg}
            alt="Developer Coding"
            initial={{ opacity: 0, scale: 1.05, filter: isMobile ? "brightness(0.25)" : "brightness(0.2) blur(10px)" }}
            animate={{ 
              opacity: phase >= 2 ? (isMobile ? 0.22 : 0.3) : (isMobile ? 0.45 : 0.6), 
              scale: 1, 
              filter: phase >= 2 
                ? (isMobile ? "brightness(0.35)" : "brightness(0.4) blur(4px)") 
                : (isMobile ? "brightness(0.55)" : "brightness(0.6) blur(0px)")
            }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: isMobile ? 4.0 : 3, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center z-0 mix-blend-screen opacity-20 filter grayscale"
          />
        )}
      </AnimatePresence>

      <div className="relative z-20 flex flex-col items-center justify-center">
        {/* Phase 1: Logo Reveal */}
        <AnimatePresence>
          {phase === 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: isMobile ? "none" : "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: isMobile ? "none" : "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.02, filter: isMobile ? "none" : "blur(8px)" }}
              transition={{ duration: isMobile ? 1.4 : 1.0, ease: "easeInOut" }}
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
              exit={{ opacity: 0, filter: isMobile ? "none" : "blur(10px)", scale: 1.02 }}
              transition={{ duration: isMobile ? 1.2 : 0.8, ease: "easeInOut" }}
              className="absolute flex flex-col items-center w-full"
            >
              {/* Subtle coding text overlay */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
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
                className="flex items-center justify-center gap-2 sm:gap-6 w-full px-4 relative z-10"
              >
                <div className="flex text-3xl sm:text-6xl md:text-7xl font-sans font-bold text-white tracking-[0.08em] sm:tracking-[0.1em] uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] font-sans">
                  {"Sinkode".split("").map((char, index) => (
                    <motion.span key={`sinkode-${index}`} variants={letter} className="inline-block">
                      {char}
                    </motion.span>
                  ))}
                </div>
                <div className="flex text-3xl sm:text-6xl md:text-7xl font-sans font-light text-neutral-400 tracking-[0.08em] sm:tracking-[0.1em] uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.05)] font-sans">
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
                className="h-[1px] w-24 sm:w-48 bg-gradient-to-r from-transparent via-white to-transparent mt-8 origin-center"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
