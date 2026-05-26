import { motion } from "framer-motion";
import {
  Utensils,
  Stethoscope,
  Diamond,
  ShoppingCart,
  Building2,
  MonitorSmartphone,
  Search,
  Zap,
  Smartphone,
  MessageCircle,
  CalendarCheck,
  Paintbrush,
} from "lucide-react";
import { fadeUp } from "./Hero";
import HlsBackground from "./HlsBackground";

const services = [
  {
    icon: Utensils,
    title: "Restaurant Website Design",
    desc: "Mouth-watering digital experiences with menu catalogs and online ordering.",
  },
  {
    icon: Stethoscope,
    title: "Dental & Medical",
    desc: "Trust-building websites for clinics with secure patient portals.",
  },
  {
    icon: Diamond,
    title: "Luxury Brand Websites",
    desc: "High-end aesthetic designs that scream premium quality and exclusivity.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Websites",
    desc: "High-conversion online stores designed to maximize your sales.",
  },
  {
    icon: Building2,
    title: "Business Landing Pages",
    desc: "Lead-generating pages engineered for maximum conversion rates.",
  },
  {
    icon: MonitorSmartphone,
    title: "Portfolio Websites",
    desc: "Showcase your work with stunning, interactive galleries.",
  },
  {
    icon: Search,
    title: "Website SEO",
    desc: "Rank higher on Google with our advanced on-page technical SEO.",
  },
  {
    icon: Zap,
    title: "Speed Optimization",
    desc: "Lightning-fast load times to retain visitors User Experience.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    desc: "Flawless design on all devices, from ultrawide monitors to smartphones.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    desc: "Direct client communication built right into your website.",
  },
  {
    icon: CalendarCheck,
    title: "Booking Systems",
    desc: "Automated reservation and appointment scheduling systems.",
  },
  {
    icon: Paintbrush,
    title: "Premium UI/UX Design",
    desc: "Intuitive, stunning user interfaces that elevate your brand.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32 border-t border-white/5 bg-black overflow-hidden huge-section gpu-accelerated"
    >
      <HlsBackground opacity={0.65} overlayClass="bg-black/50" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-24 flex flex-col items-center">
          <motion.div
            {...fadeUp(0.1)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-6 backdrop-blur-md"
          >
            <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase font-medium">
              Core Capabilities
            </span>
          </motion.div>

          <motion.h2
            {...fadeUp(0.25)}
            className="text-4xl md:text-6xl font-sans font-medium mb-6 tracking-tight text-white"
          >
            Digital Engineering For{" "}
            <span className="font-serif italic text-white editorial-italic">Every Industry.</span>
          </motion.h2>
          
          <motion.p
            {...fadeUp(0.4)}
            className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl"
          >
            We never utilize stock layouts. Every detail is carefully forged from scratch in monochrome 
            elegance to solve your distinct digital challenges.
          </motion.p>
        </div>

        {/* Services Grid with Staggered Fade Up Delays */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const delay = 0.1 + (index % 4) * 0.1;
            return (
              <motion.div
                key={index}
                {...fadeUp(delay)}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="liquid-glass p-8 rounded-2xl group relative overflow-hidden h-full flex flex-col justify-between cursor-pointer shadow-2xl"
              >
                {/* Micro Ambient Shimmer Overlay */}
                <div className="absolute -inset-2 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.03)_0%,_transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10">
                  {/* Icon Block with subtle edge shadow on hover */}
                  <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 text-neutral-400 group-hover:text-white group-hover:border-white/30 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300">
                    <service.icon size={22} />
                  </div>

                  <h3 className="text-lg font-medium mb-3 font-sans text-neutral-200 group-hover:text-white transition-colors duration-350">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
