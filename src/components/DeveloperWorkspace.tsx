import { motion } from "framer-motion";
import { Terminal, Code, Cpu, Sparkles, Activity, FileCode } from "lucide-react";

export default function DeveloperWorkspace() {
  const codeSnippets = [
    "import { lux } from 'sinkode';",
    "const brand = lux.elevate();",
    "brand.setAesthetic('cinematic');",
    "brand.render({ speed: 'instant' });",
    "// Looks premium, converts trust"
  ];

  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] max-w-2xl mx-auto flex items-center justify-center overflow-hidden rounded-3xl p-1 bg-gradient-to-br from-white/5 to-transparent border border-white/5 shadow-2xl">
      {/* Cinematic Studio Backdrop and Smoke/Ambient Fog */}
      <div className="absolute inset-0 bg-[#060606] pointer-events-none" />
      
      {/* Custom Vignette & Fog Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_transparent_20%,_#050505_90%)] z-10 pointer-events-none" />
      
      {/* Background Soft Pulsing Orange Spotlights representing warm studio lights */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [-20, 20, -20],
          y: [-10, 15, -10],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[450px] h-[450px] bg-brand-orange rounded-full blur-[130px] -z-10 pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.1, 0.2, 0.1],
          x: [30, -30, 30],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute w-[350px] h-[350px] bg-brand-orange-dark rounded-full blur-[110px] -z-10 pointer-events-none"
      />

      {/* Floating Particles Sparkles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 500 - 250 + 200,
              y: Math.random() * 400 + 100,
              opacity: Math.random() * 0.3 + 0.1,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * -150 - 50],
              opacity: [0, 0.7, 0],
              x: [null, Math.random() * 60 - 30 + (Math.random() * 100 - 50)],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-brand-orange-light blur-[1px]"
          />
        ))}
      </div>

      {/* Volumetric Voluminous Screen Beam Projecting from the Laptop */}
      <div className="absolute left-[38%] top-[38%] w-[130px] h-[220px] bg-gradient-to-b from-brand-orange/20 to-transparent blur-2xl origin-top rotate-[-18deg] pointer-events-none mix-blend-screen opacity-65 z-10" />

      {/* MAIN CINEMATIC WORKSPACE FRAME (Drifts inside space like a physical 3D Camera Rig) */}
      <motion.div
        animate={{
          y: [-12, 12, -12],
          x: [-8, 8, -8],
          rotate: [-0.8, 0.8, -0.8],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative w-full h-full flex items-center justify-center z-20 pointer-events-none"
      >
        {/* Core Workspace Vector Illustration */}
        <svg
          viewBox="0 0 800 600"
          className="w-[90%] h-[90%] drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Defs block for linear/radial gradients */}
          <defs>
            {/* Glossy Desk surface reflection */}
            <linearGradient id="deskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#121215" stopOpacity="0.9" />
              <stop offset="35%" stopColor="#0B0B0C" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#050505" stopOpacity="1" />
            </linearGradient>
            
            {/* Screen shine bevel gradient */}
            <linearGradient id="screenChrome" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#ff8c42" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#cc5500" stopOpacity="0.4" />
            </linearGradient>

            {/* Orange face highlighting */}
            <radialGradient id="faceGlow" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#ffaa71" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#f36100" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#1A120D" stopOpacity="1" />
            </radialGradient>

            {/* Developer Torso Gradient */}
            <linearGradient id="torsoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E1E22" />
              <stop offset="100%" stopColor="#0F0F11" />
            </linearGradient>

            {/* Metallic Laptop Base */}
            <linearGradient id="laptopMetal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3A3A42" />
              <stop offset="50%" stopColor="#222226" />
              <stop offset="100%" stopColor="#111113" />
            </linearGradient>
          </defs>

          {/* 1. Ergonomic Studio Office Chair (Behind developer) */}
          <g id="ergonomChair" opacity="0.85">
            {/* Chair Back Rest */}
            <path
              d="M 230 180 C 230 120, 275 110, 275 160 C 275 210, 255 310, 245 420 C 245 440, 235 450, 220 440 L 205 320 Z"
              fill="#0B0B0C"
              stroke="#222225"
              strokeWidth="2.5"
            />
            {/* Technical Mesh Lines inside back rest */}
            <path d="M 245 150 Q 260 250, 238 380" stroke="rgba(255,107,0,0.25)" strokeWidth="1.5" />
            <path d="M 255 165 Q 268 260, 243 360" stroke="rgba(255,107,0,0.15)" strokeWidth="1.5" />
            
            {/* Chair Seat cushion */}
            <path
              d="M 185 410 C 185 390, 220 380, 275 395 C 295 400, 310 415, 298 435 C 285 450, 225 455, 195 440 Z"
              fill="#131317"
              stroke="#2A2A30"
              strokeWidth="2"
            />
            {/* Chair Mechanism Cylindrical Stem */}
            <rect x="235" y="445" width="22" height="65" rx="4" fill="#1C1C21" />
            <rect x="241" y="450" width="10" height="55" fill="#2A2A32" />
            {/* Chair Five-Star Spoke Base */}
            <path
              d="M 210 505 L 175 520 C 165 525, 165 532, 178 530 L 235 515 Z"
              fill="#0E0E11"
              stroke="#222228"
            />
            <path
              d="M 270 505 L 315 525 C 325 530, 329 527, 318 520 L 255 515 Z"
              fill="#0E0E11"
              stroke="#222228"
            />
          </g>

          {/* 2. Sleek Minimalist Desk Layout (with smooth orange reflection) */}
          <g id="deskTop">
            {/* Desk Surface Panel */}
            <path
              d="M 100 480 Q 400 460, 700 480 L 740 590 L 60 590 Z"
              fill="url(#deskGrad)"
              stroke="rgba(255,140,60,0.08)"
              strokeWidth="2"
            />
            {/* Light streak on index of desk edge */}
            <path
              d="M 100 480 Q 400 460, 700 480"
              stroke="url(#screenChrome)"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.8"
            />
            <path
              d="M 115 483 Q 400 463, 685 483"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1"
            />
          </g>

          {/* 3. Developer Character sitting and typing */}
          <g id="developerCharacter">
            {/* Torso / Back curvature */}
            <path
              d="M 215 310 C 215 260, 245 220, 280 220 C 315 220, 318 290, 312 340 C 305 380, 290 440, 285 450 C 275 460, 225 455, 220 440 C 215 410, 215 360, 215 310 Z"
              fill="url(#torsoGrad)"
              stroke="#26262B"
              strokeWidth="2"
            />

            {/* Neck */}
            <path
              d="M 285 195 Q 295 190, 305 195 L 300 222 L 280 215 Z"
              fill="#1A120D"
              stroke="#221815"
            />

            {/* Head Silhouette with dynamic glowing screen shadow */}
            {/* Facing right toward laptop screen */}
            <path
              d="M 270 160 C 270 120, 310 110, 315 130 C 315 140, 312 148, 318 152 C 324 156, 328 160, 325 168 C 320 178, 312 182, 305 195 C 295 200, 285 200, 278 190 C 270 180, 270 170, 270 160 Z"
              fill="url(#faceGlow)"
              stroke="#401B05"
              strokeWidth="1.5"
            />
            
            {/* Hair details or cap representing stylish modern engineer */}
            <path
              d="M 270 160 C 268 142, 280 120, 305 120 C 315 120, 308 140, 290 142 C 285 142, 275 148, 270 160 Z"
              fill="#101012"
            />

            {/* Left Arm and typing Hand (Pulsing micro-strokes) */}
            <g id="typingLeftArm">
              {/* Shoulder to elbow */}
              <path
                d="M 292 238 C 322 250, 345 290, 340 310 C 335 320, 310 320, 300 305"
                stroke="#1E1E22"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Forearm and Wrist going to the laptop */}
              {/* Animation applied on forearm group */}
              <g className="animate-[pulse_1.8s_infinite_ease-in-out]">
                <path
                  d="M 335 305 L 435 342 C 445 345, 452 342, 458 346"
                  stroke="#1A120D"
                  strokeWidth="11"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Sleeve detailing */}
                <path
                  d="M 335 305 L 385 324"
                  stroke="#2E2E35"
                  strokeWidth="13"
                  strokeLinecap="round"
                />
                {/* Finger dots reacting on keyboard */}
                <circle cx="463" cy="344" r="3.5" fill="#ffaa71" />
                <circle cx="458" cy="348" r="3" fill="#ff8c42" />
              </g>
            </g>

            {/* Right Arm and typing Hand (staggered typing animation speed) */}
            <g id="typingRightArm">
              {/* Sleeve back curve */}
              <path
                d="M 298 245 C 335 260, 355 300, 348 318 C 342 330, 320 330, 308 312"
                stroke="#17171A"
                strokeWidth="18"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Forearm group staggered slightly */}
              <g className="animate-[pulse_1.4s_infinite_ease-in-out_0.2s]">
                <path
                  d="M 345 312 L 442 350 C 452 353, 460 348, 465 352"
                  stroke="#ffaa71"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="469" cy="351" r="3" fill="#ffaa71" />
                <circle cx="464" cy="354" r="2.5" fill="#ff7a1a" />
              </g>
            </g>
          </g>

          {/* 4. Elegant Glowing Laptop Hardware */}
          <g id="glowingLaptop" className="drop-shadow-[0_0_20px_rgba(255,107,0,0.35)]">
            {/* Brand icon / glowing decal back of laptop */}
            {/* Screen back casing */}
            <path
              d="M 458 290 L 518 195 C 522 188, 528 188, 532 195 L 590 288 C 594 294, 592 300, 584 300 L 464 300 Z"
              fill="url(#laptopMetal)"
              stroke="#2C2C32"
              strokeWidth="2.5"
            />

            {/* Screen Inner Glass Layer radiating Orange Glow */}
            <path
              d="M 466 288 L 522 201 C 524 198, 528 198, 530 201 L 582 288 Z"
              fill="#120A06"
              stroke="url(#screenChrome)"
              strokeWidth="2.5"
            />
            
            {/* Radial Inner glow display content representation */}
            <path
              d="M 466 288 L 522 201 L 582 288 Z"
              fill="url(#screenChrome)"
              opacity="0.25"
              className="mix-blend-screen"
            />

            {/* Laptop Base Bevel plate */}
            <path
              d="M 440 355 L 430 361 C 425 364, 432 368, 440 368 L 532 376 C 540 376, 545 372, 545 368 L 515 355 Z"
              fill="url(#laptopMetal)"
            />
            {/* Laptop Keyboard Area emitting glowing point grids */}
            <path
              d="M 442 357 L 512 357 L 532 369 L 452 369 Z"
              fill="#0F0F12"
              stroke="rgba(255,107,0,0.5)"
              strokeWidth="0.8"
            />
            {/* Keyboard Keys grid pattern emitting ambient lights */}
            <line x1="454" y1="360" x2="512" y2="360" stroke="#ff7a1a" strokeWidth="1.2" opacity="0.8" className="animate-[pulse_1s_infinite_ease-out]" />
            <line x1="451" y1="364" x2="518" y2="364" stroke="#ffab5c" strokeWidth="1.2" opacity="0.6" className="animate-[pulse_1.2s_infinite_ease-out_0.2s]" />
          </g>

          {/* 5. Isometric Glowing Code Lines flow out of Laptop */}
          <g id="glowingCodeFlow" className="pointer-events-none">
            {/* Light trails of code floating */}
            <path d="M 505 240 Q 540 220, 580 240" stroke="#ff8c42" strokeWidth="2.5" strokeDasharray="50 150" strokeDashoffset="0" className="animate-[dash_6s_linear_infinite]" opacity="0.8" />
            <path d="M 490 260 Q 550 240, 610 270" stroke="#ff6b00" strokeWidth="2" strokeDasharray="40 120" strokeDashoffset="50" className="animate-[dash_4s_linear_infinite]" opacity="0.9" />
          </g>
        </svg>

        {/* 6. Foreground floating Glassmorphism Holographic Panels */}
        {/* Panel A: Modern Tech metric statistics */}
        <motion.div
          animate={{
            y: [-12, 12, -12],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[4%] top-[15%] w-48 glass rounded-xl border border-brand-orange-light/20 p-3 shadow-[0_15px_35px_rgba(255,107,0,0.12)] backdrop-blur-xl bg-brand-black/85"
        >
          <div className="flex items-center gap-1.5 mb-2">
            <Activity className="w-3.5 h-3.5 text-brand-orange" />
            <span className="text-[9px] font-mono tracking-wider text-gray-400 uppercase font-medium">Conversion Graph</span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-display font-medium text-white tracking-tight">+420%</span>
            <span className="text-[8px] text-brand-orange font-mono font-bold">AESTHETIC</span>
          </div>
          {/* Small animated fake line chart SVG */}
          <div className="w-full h-8 mt-2 overflow-hidden">
            <svg viewBox="0 0 100 30" width="100%" height="100%">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                d="M0,25 Q15,5 30,20 T60,8 T90,2 L100,5"
                fill="none"
                stroke="url(#chartGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#cc5500" />
                  <stop offset="100%" stopColor="#ff8c42" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>

        {/* Panel B: Floating luxury code panel typing state */}
        <motion.div
          animate={{
            y: [12, -12, 12],
            scale: [1, 0.98, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute left-[2%] bottom-[12%] w-56 glass rounded-xl border border-brand-orange/15 p-3.5 shadow-[0_15px_30px_rgba(0,0,0,0.7)] backdrop-blur-xl bg-brand-black/90 font-mono text-[9px] leading-relaxed text-gray-400"
        >
          <div className="flex items-center justify-between border-b border-white/5 pb-1.5 mb-2">
            <div className="flex items-center gap-1">
              <Code className="w-3 h-3 text-brand-orange-light" />
              <span className="text-[8px] text-gray-500 uppercase tracking-widest">engine.ts</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
          </div>
          <div className="space-y-1">
            {codeSnippets.map((snippet, idx) => (
              <motion.div
                key={idx}
                initial={{ width: "100%", opacity: 1 }}
                animate={{ width: "100%", opacity: 1 }}
                className="overflow-hidden whitespace-nowrap"
              >
                <span className="text-[#888]">{`>`}</span>{" "}
                <span className={idx === 4 ? "text-brand-orange-light font-medium" : ""}>
                  {snippet}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Panel C: Rotating architectural hologram wheel */}
        <motion.div
          animate={{
            y: [-8, 8, -8],
            rotate: 360,
          }}
          transition={{
            y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          }}
          className="absolute right-[12%] bottom-[16%] w-16 h-16 rounded-full border border-dashed border-brand-orange/30 flex items-center justify-center opacity-80 backdrop-blur-sm shadow-[0_0_20px_rgba(255,107,0,0.15)] bg-gradient-to-br from-brand-orange/10 to-transparent"
        >
          <Cpu className="w-6 h-6 text-brand-orange animate-pulse" />
        </motion.div>
      </motion.div>

      {/* Screen Reflection overlay shimmer */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-brand-orange/[0.01] to-transparent pointer-events-none z-30" />
      
      {/* Absolute high-end aesthetic overlay labels representing architectural details */}
      <div className="absolute top-4 left-4 font-mono text-[9px] text-brand-orange-light/40 tracking-[0.25em] z-30 flex items-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5 text-brand-orange/50 animate-spin" style={{ animationDuration: '6s' }} />
        <span>CINEMATIC WORKSPACE MODULE</span>
      </div>
      
      {/* Soft noise text indicator representing status */}
      <div className="absolute bottom-4 right-4 font-mono text-[9px] text-gray-400/50 tracking-[0.2em] z-30 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-brand-orange/80 animate-ping" />
        <span>ACTIVE PORTFOLIO LINK</span>
      </div>
    </div>
  );
}
