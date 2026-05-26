import { motion } from "framer-motion";

export default function GlowDivider() {
  return (
    <div className="relative w-full flex justify-center items-center py-12 md:py-16 bg-black overflow-hidden pointer-events-none select-none">
      {/* Outer wrapper to enforce localized dimensions */}
      <div className="relative w-[200px] md:w-[380px] flex justify-center items-center h-12">
        
        {/* Soft, deep ambient neon cyan/blue backdrop glow */}
        <motion.div
          animate={{
            opacity: [0.25, 0.45, 0.25],
            scale: [0.93, 1.07, 0.93],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[120px] md:w-[240px] h-[30px] md:h-[50px] rounded-full bg-cyan-500/20 blur-[25px] md:blur-[35px] z-0"
        />

        {/* Dense, localized white-hot center spark backing glow */}
        <motion.div
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [0.96, 1.04, 0.96],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[50px] md:w-[100px] h-[10px] md:h-[16px] rounded-full bg-white/15 blur-[10px] md:blur-[15px] z-0"
        />

        {/* Horizontal energy light streak representing the beam line */}
        <div className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent flex justify-center items-center z-10">
          
          {/* Intense, ultra-crisp white-hot central core segment */}
          <div className="absolute w-[45px] md:w-[90px] h-[1px] bg-white shadow-[0_0_15px_rgba(255,255,255,1),_0_0_5px_rgba(34,211,238,0.85)]" />
        </div>

        {/* Ambient microscopic floating energy particles drifting upwards */}
        <svg className="absolute w-full h-16 overflow-visible pointer-events-none" style={{ top: "-30px" }}>
          {/* Micro spark 1 */}
          <motion.circle
            r="1"
            fill="white"
            initial={{ cx: "38%", cy: "100%", opacity: 0 }}
            animate={{
              cy: ["100%", "35%", "10%"],
              cx: ["38%", "35%", "37%"],
              opacity: [0, 0.75, 0],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />
          {/* Micro spark 2 */}
          <motion.circle
            r="1.2"
            fill="#22d3ee"
            initial={{ cx: "50%", cy: "100%", opacity: 0 }}
            animate={{
              cy: ["100%", "45%", "0%"],
              cx: ["50%", "52%", "48%"],
              opacity: [0, 0.9, 0],
            }}
            transition={{
              duration: 4.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.6,
            }}
          />
          {/* Micro spark 3 */}
          <motion.circle
            r="0.8"
            fill="white"
            initial={{ cx: "62%", cy: "100%", opacity: 0 }}
            animate={{
              cy: ["100%", "30%", "15%"],
              cx: ["62%", "65%", "63%"],
              opacity: [0, 0.65, 0],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.9,
            }}
          />
        </svg>

      </div>
    </div>
  );
}
