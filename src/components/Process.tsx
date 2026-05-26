import { motion } from "framer-motion";
import { fadeUp } from "./Hero";
import HlsBackground from "./HlsBackground";

const steps = [
  {
    num: "01",
    title: "Discussion",
    desc: "Understanding your vision, business goals, and target audience.",
  },
  {
    num: "02",
    title: "Planning",
    desc: "Architecting the technical stack and UI/UX wireframes.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Crafting a bespoke, premium aesthetic tailored to your brand.",
  },
  {
    num: "04",
    title: "Development",
    desc: "Engineering the platform with modern, performant code.",
  },
  {
    num: "05",
    title: "Launch",
    desc: "Final testing, optimization, and deploying to production.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-32 bg-black border-t border-white/5 overflow-hidden huge-section gpu-accelerated"
    >
      <HlsBackground opacity={0.7} overlayClass="bg-black/60" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-24 flex flex-col items-center">
          <motion.div
            {...fadeUp(0.1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-6 backdrop-blur-md"
          >
            <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase font-medium">
              Our Methodology
            </span>
          </motion.div>

          <motion.h2
            {...fadeUp(0.25)}
            className="text-4xl md:text-6xl font-sans font-medium mb-6 tracking-tight text-white"
          >
            The Sinkode <span className="font-serif italic text-white editorial-italic">Pipeline.</span>
          </motion.h2>
        </div>

        {/* Process Roadmap */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent -translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const delay = 0.15 + idx * 0.12;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center justify-between ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Left or Right Content Card */}
                  <motion.div
                    {...fadeUp(delay)}
                    className={`w-full md:w-[45%] relative z-10`}
                  >
                    <div className="liquid-glass p-8 rounded-2xl group transition-all duration-500 hover:scale-[1.01]">
                      <div className="text-neutral-400 font-mono text-[10px] mb-2 tracking-widest uppercase font-medium">
                        PHASE {step.num}
                      </div>
                      <h3 className="text-2xl font-sans font-medium text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 font-light text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>

                  {/* Center Node containing Stage Number (Desktop Only) */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black border border-white/15 items-center justify-center z-20 overflow-hidden group shadow-lg">
                    {/* Dark subtle glow */}
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <span className="font-mono text-neutral-300 text-xs relative z-10 transition-colors">
                      {step.num}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
