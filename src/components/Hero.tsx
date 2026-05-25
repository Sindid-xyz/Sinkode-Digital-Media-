import { motion } from "framer-motion";
import { CONTACT_INFO } from "../config";

// Requested reusable fadeUp animation helper with custom delays
export const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Background looping muted video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden select-none pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-85 scale-102"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
        />
        {/* Soft elegant overlay */}
        <div className="absolute inset-0 bg-[#000000]/15 mix-blend-multiply" />
      </div>

      {/* Bottom gradient fade to black to blend smoothly with standard page flow */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

      {/* Hero Content */}
      <div className="max-w-6xl mx-auto px-6 w-full relative z-20 text-center pt-28 md:pt-32 flex flex-col items-center justify-center h-[500px]">

        {/* Heading: text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] */}
        <motion.h1
          {...fadeUp(0.3)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] leading-[1.05] text-white max-w-4xl"
        >
          We Design <span className="font-serif italic font-normal text-white">Digital</span> Experiences
        </motion.h1>

        {/* Beautiful high-visibility subtitle */}
        <motion.p
          {...fadeUp(0.5)}
          className="mt-8 text-white font-normal text-[20px] leading-[40px] italic font-['Georgia',serif] max-w-3xl tracking-tight filter drop-shadow-md"
        >
          We Build Websites That Make Businesses Look Expensive.
        </motion.p>

        {/* Animated start your website CTA button */}
        <motion.div
          {...fadeUp(0.7)}
          className="mt-10 pointer-events-auto"
        >
          <motion.a
            href={CONTACT_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3.5 px-8 py-4 rounded-xl bg-white text-black font-semibold text-base shadow-[0px_10px_30px_rgba(255,255,255,0.18)] transition-colors hover:bg-neutral-100 active:scale-[0.98]"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0px 15px 35px rgba(255, 255, 255, 0.28)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            Start your website
            <span className="text-lg transition-transform duration-300">→</span>
          </motion.a>
        </motion.div>

        {/* Quick scroll prompt */}
        <motion.div
          {...fadeUp(1.0)}
          className="mt-20 flex flex-col items-center gap-2 text-neutral-500 hover:text-white transition-colors cursor-pointer"
          onClick={() => {
            document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-[10px] tracking-[0.2em] font-mono uppercase">Discover More</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-neutral-600 rounded-full"
          />
        </motion.div>

      </div>
    </section>
  );
}
