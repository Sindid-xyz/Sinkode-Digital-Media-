import { motion } from "framer-motion";
import { CONTACT_INFO } from "../config";
import { useState, useEffect } from "react";

// Responsive, high-performance exported helper for other sections import
export const fadeUp = (delay: number) => {
  return {
    initial: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.1, delay: 0 },
  };
};

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Responsive luxurious fadeUp animation profiles - made completely instant to guarantee FCP
  const getFadeUp = (delay: number) => {
    return {
      initial: { opacity: 1, y: 0 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.1, delay: 0 },
    };
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white px-4 sm:px-6"
    >
      {/* Background looping premium video with optimized performance */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden select-none pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="w-full h-full object-cover opacity-70 sm:opacity-85 scale-101 will-change-transform transform-gp"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
        />
        <div className="absolute inset-0 bg-[#000000]/30 mix-blend-multiply" />
      </div>

      {/* Bottom gradient fade to black */}
      <div className="absolute bottom-0 left-0 right-0 h-40 md:h-64 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      {/* Hero Content with compact mobile margins and high accessibility */}
      <div className="max-w-5xl mx-auto w-full relative z-20 text-center pt-24 pb-12 md:pt-32 flex flex-col items-center justify-center min-h-[50vh] md:min-h-[600px]">
        
        {/* Responsive Heading */}
        <motion.h1
          {...getFadeUp(0.25)}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight md:tracking-[-2px] leading-[1.1] md:leading-[1.05] text-white max-w-4xl"
        >
          We Design <span className="font-serif italic font-normal text-white">Digital</span> Experiences
        </motion.h1>

        {/* High readability subtext */}
        <motion.p
          {...getFadeUp(0.4)}
          className="mt-6 md:mt-8 text-neutral-200 md:text-white font-normal text-lg sm:text-[20px] leading-[28px] md:leading-[40px] italic font-['Georgia',serif] max-w-2xl tracking-tight filter drop-shadow-md"
        >
          We Build Websites That Make Businesses Look Expensive.
        </motion.p>

        {/* Highly premium dynamic CTA button */}
        <motion.div
          {...getFadeUp(0.55)}
          className="mt-8 md:mt-10 pointer-events-auto"
        >
          <motion.a
            href={CONTACT_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-white text-black font-semibold text-sm sm:text-base shadow-[0px_10px_30px_rgba(255,255,255,0.12)] transition-colors hover:bg-neutral-100 active:scale-[0.98]"
            whileHover={isMobile ? undefined : { 
              scale: 1.05, 
              boxShadow: "0px 15px 35px rgba(255, 255, 255, 0.22)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            Start your website
            <span className="text-base transition-transform duration-300">→</span>
          </motion.a>
        </motion.div>

        {/* Soft layout scroll prompt */}
        <motion.div
          {...getFadeUp(0.7)}
          className="mt-14 md:mt-16 flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors cursor-pointer select-none"
          onClick={() => {
            document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-[9px] sm:text-[10px] tracking-[0.25em] font-mono uppercase">Discover More</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2.5 bg-neutral-500 rounded-full"
          />
        </motion.div>

      </div>
    </section>
  );
}
