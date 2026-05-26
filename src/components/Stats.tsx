import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Check } from "lucide-react";
import { fadeUp } from "./Hero";
import Hls from "hls.js";

const features = [
  "Fast Custom Delivery",
  "Affordable Investments",
  "Premium Bespoke Design",
  "Perfect Mobile Responsive",
  "Technically Optimized SEO",
  "Conversion Tailored UX",
  "Interactive Fluid Motion",
  "Ultra Peak Speed Performance",
];

const Counter = ({
  value,
  label,
  suffix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="text-center p-8 liquid-glass rounded-2xl relative overflow-hidden group h-full flex flex-col justify-center shadow-2xl transition-all duration-500 hover:scale-[1.02]"
    >
      <div className="absolute -inset-1 bg-[radial-gradient(circle_at_50%_40%,_rgba(255,255,255,0.02)_0%,_transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="text-5xl md:text-6xl font-sans font-bold text-white mb-2 tracking-tight group-hover:text-neutral-100 transition-colors duration-300">
        {count}
        {suffix}
      </div>
      <div className="text-[10px] text-neutral-400 font-mono tracking-widest uppercase leading-snug">
        {label}
      </div>
    </div>
  );
};

export default function WhyChooseUs() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoUrl = "https://stream.mux.com/jPyJ2YM6Nlly7U6EyfxM01tz4D4uPE3gyJ4PYuvY62Wg.m3u8";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        maxMaxBufferLength: 10,
        enableWorker: true,
      });
      hls.loadSource(videoUrl);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoUrl;
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [videoUrl]);

  return (
    <section className="relative py-32 bg-black border-t border-white/5 overflow-hidden huge-section gpu-accelerated">
      {/* Background looping muted HLS video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden select-none pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-70 scale-102"
        />
        {/* Soft elegant overlay to ensure maximum readability */}
        <div className="absolute inset-0 bg-black/55 mix-blend-multiply" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="flex flex-col">
            <motion.div
              {...fadeUp(0.1)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-6 backdrop-blur-md self-start"
            >
              <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase font-medium">
                Why Sinkode Media
              </span>
            </motion.div>
            
            <motion.h2
              {...fadeUp(0.25)}
              className="text-4xl md:text-6xl font-sans font-medium mb-6 leading-tight tracking-tight text-white"
            >
              Engineering Trust Through{" "}
              <span className="font-serif italic text-white editorial-italic">Excellence.</span>
            </motion.h2>
            
            <motion.p
              {...fadeUp(0.4)}
              className="text-gray-400 text-lg mb-10 leading-relaxed font-light"
            >
              We translate high-fidelity visual expectations and extreme technical mechanics into sleek, performant,
              and exceptionally reliable web systems customized for modern devices.
            </motion.p>

            <motion.div
              {...fadeUp(0.55)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center transition-colors group-hover:bg-white group-hover:text-black">
                    <Check size={11} className="text-white group-hover:text-black transition-colors" />
                  </div>
                  <span className="text-neutral-300 text-sm hover:text-white transition-colors font-light">
                    {feature}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Staggered Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <motion.div {...fadeUp(0.1)}>
              <Counter value={50} suffix="+" label="Clients Delivered" />
            </motion.div>
            
            <motion.div {...fadeUp(0.25)}>
              <Counter value={100} suffix="%" label="Responsive UI" />
            </motion.div>
            
            <motion.div {...fadeUp(0.4)}>
              <Counter value={2} suffix="x" label="Faster Speed" />
            </motion.div>
            
            <motion.div {...fadeUp(0.55)}>
              <Counter value={99} suffix="%" label="Retention Rate" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
