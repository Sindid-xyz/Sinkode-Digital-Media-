import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CinematicIntro from "./components/CinematicIntro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/Stats";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GlowDivider from "./components/GlowDivider";
import InteractiveParticleBackground from "./components/InteractiveParticleBackground";
import InteractiveCursor from "./components/InteractiveCursor";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Lock scrolling while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [loading]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/10 selection:text-white relative overflow-x-hidden">
      {/* Background ambient lighting and noise/grid representing 'Frosted Glass' Theme */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.1]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Cinematic Moving Ambient Gradients & Floating Glowing Shapes (Grayscale) */}
        <motion.div
          animate={{
            x: [0, 60, -30, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.18, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[15%] -left-[10%] w-[650px] h-[650px] bg-white rounded-full blur-[170px] opacity-[0.03] hidden md:block"
        />

        <motion.div
          animate={{
            x: [0, -70, 40, 0],
            y: [0, 90, -40, 0],
            scale: [1, 0.85, 1.15, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[35%] -right-[15%] w-[550px] h-[550px] bg-white rounded-full blur-[160px] opacity-[0.02] hidden md:block"
        />

        {/* Soft studio light sweep effect */}
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/[0.015] to-transparent pointer-events-none hidden md:block"
        />
      </div>

      {/* High-fidelity interactive background particles */}
      {!loading && <InteractiveParticleBackground />}

      {/* Deluxe inertia cursor track follower */}
      {!loading && <InteractiveCursor />}

      <AnimatePresence>
        {loading && <CinematicIntro onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div
        className={`transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"} relative z-10`}
      >
        <Navbar />
        <main>
          <Hero />
          <GlowDivider />
          <Services />
          <WhyChooseUs />
          <GlowDivider />
          <Portfolio />
          <Process />
          <GlowDivider />
          <Pricing />
          <GlowDivider />
          <Testimonials />
          <GlowDivider />
          <Contact />
        </main>
        <GlowDivider />
        <Footer />
      </div>
    </div>
  );
}
