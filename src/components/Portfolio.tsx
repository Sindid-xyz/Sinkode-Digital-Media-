import { motion } from "framer-motion";
import { ExternalLink, Maximize2 } from "lucide-react";
import { fadeUp } from "./Hero";
import HlsBackground from "./HlsBackground";

const projects = [
  {
    title: "Culinary Elegance",
    category: "Restaurants",
    imageStyle: "bg-gradient-to-br from-neutral-900 to-neutral-850",
    color: "neutral",
    link: "https://yokososylhet.netlify.app/",
  },
  {
    title: "Dental Studio",
    category: "Medical Clinics",
    imageStyle: "bg-gradient-to-br from-neutral-800 to-neutral-950",
    color: "neutral",
    link: "https://holydentalsyl.netlify.app/",
  },
  {
    title: "Aura Luxury",
    category: "Luxury Brands",
    imageStyle: "bg-gradient-to-br from-neutral-900 to-neutral-750",
    color: "neutral",
    comingSoon: true,
  },
  {
    title: "Nova Tech Store",
    category: "E-commerce",
    imageStyle: "bg-gradient-to-br from-neutral-850 to-neutral-900",
    color: "neutral",
    comingSoon: true,
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-32 bg-black border-t border-white/5 overflow-hidden huge-section gpu-accelerated"
    >
      <HlsBackground opacity={0.7} overlayClass="bg-black/60" />
      <div className="noise-bg opacity-5 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-24 flex flex-col items-center">
          <motion.div
            {...fadeUp(0.1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-6 backdrop-blur-md"
          >
            <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase font-medium">
              Selected Works
            </span>
          </motion.div>

          <motion.h2
            {...fadeUp(0.25)}
            className="text-4xl md:text-6xl font-sans font-medium mb-6 tracking-tight text-white"
          >
            Cinematic <span className="font-serif italic text-white editorial-italic">Showcase.</span>
          </motion.h2>
          
          <motion.p
            {...fadeUp(0.4)}
            className="text-gray-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed"
          >
            Explore our exhaustively curated catalog of Bespoke digital flagship platforms forged for industry leaders in pure monochrome layouts.
          </motion.p>
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => {
            const delay = 0.2 + idx * 0.15;
            return (
              <motion.div
                key={idx}
                {...fadeUp(delay)}
                className="group relative z-10 pointer-events-auto"
              >
                {project.comingSoon ? (
                  <div className="group cursor-pointer block">
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-950 border border-white/5 mb-6">
                      <div
                        className={`absolute inset-0 ${project.imageStyle} transition-transform duration-700 group-hover:scale-105`}
                      />
                      <div className="absolute inset-4 sm:inset-10 liquid-glass rounded-xl p-4 shadow-2xl flex flex-col transform translate-y-8 group-hover:translate-y-4 transition-transform duration-500">
                        <div className="flex gap-1.5 mb-4">
                          <div className="w-2 h-2 rounded-full bg-neutral-800" />
                          <div className="w-2 h-2 rounded-full bg-neutral-700" />
                          <div className="w-2 h-2 rounded-full bg-neutral-600" />
                        </div>
                        <div className="flex-1 flex flex-col gap-3">
                          <div className="w-3/4 h-8 bg-white/[0.03] rounded-lg animate-pulse" />
                          <div className="w-full flex-1 bg-white/[0.01] rounded-lg border border-white/5 flex items-center justify-center">
                            <span className="text-white/20 font-sans font-bold text-2xl tracking-tight uppercase">
                              {project.title}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="px-6 py-2.5 rounded-full bg-white/10 text-white font-mono text-[10px] tracking-widest flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          COMING SOON
                        </div>
                      </div>
                    </div>

                    <div className="px-2">
                      <h3 className="text-xl font-medium text-neutral-200 group-hover:text-white transition-colors mb-1">
                        {project.title}
                      </h3>
                      <p className="text-neutral-500 font-mono text-xs uppercase tracking-wider">
                        {project.category}
                      </p>
                    </div>
                  </div>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group cursor-pointer block"
                  >
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-950 border border-white/5 mb-6">
                      <div
                        className={`absolute inset-0 ${project.imageStyle} transition-transform duration-700 group-hover:scale-105`}
                      />
                      <div className="absolute inset-4 sm:inset-10 liquid-glass rounded-xl p-4 shadow-2xl flex flex-col transform translate-y-8 group-hover:translate-y-4 transition-transform duration-500">
                        <div className="flex gap-1.5 mb-4">
                          <div className="w-2 h-2 rounded-full bg-neutral-800" />
                          <div className="w-2 h-2 rounded-full bg-neutral-700" />
                          <div className="w-2 h-2 rounded-full bg-neutral-600" />
                        </div>
                        <div className="flex-1 flex flex-col gap-3">
                          <div className="w-3/4 h-8 bg-white/[0.03] rounded-lg" />
                          <div className="w-full flex-1 bg-white/[0.01] rounded-lg border border-white/5 flex items-center justify-center">
                            <span className="text-white/20 font-sans font-bold text-2xl tracking-tight uppercase">
                              {project.title}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transform scale-75 group-hover:scale-100 transition-all duration-300 hover:bg-neutral-250">
                          <ExternalLink size={20} />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition-all duration-300 hover:bg-white/20">
                          <Maximize2 size={20} />
                        </div>
                      </div>
                    </div>

                    <div className="px-2">
                      <h3 className="text-xl font-medium text-neutral-200 group-hover:text-white transition-colors mb-1">
                        {project.title}
                      </h3>
                      <p className="text-neutral-500 font-mono text-xs uppercase tracking-wider">
                        {project.category}
                      </p>
                    </div>
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
