import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [lines, setLines] = useState<string[]>([]);

  const codeLines = [
    "INITIALIZING_SINKODE_ENVIRONMENT...",
    "ESTABLISHING_SECURE_CONNECTION...",
    "LOADING_PREMIUM_UI_MODULES...",
    "MOUNTING_CINEMATIC_ASSETS...",
    "RENDERING_FUTURISTIC_EXPERIENCE...",
    "SYSTEM_SYNCHRONIZED_SUCCESSFULLY",
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < codeLines.length) {
        setLines((prev) => [...prev, codeLines[currentLine]]);
        setProgress((prev) => Math.min(prev + 100 / codeLines.length, 100));
        currentLine++;
      }
    }, 400);

    const timeout = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/10 rounded-full blur-[120px] opacity-50" />
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-brand-orange-dark/10 rounded-full blur-[100px] opacity-40" />

      {/* Cinematic Screen Representation */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-3xl glass-card rounded-2xl border border-white/10 p-1 overflow-hidden"
      >
        <div className="bg-[#0a0a0a] rounded-xl p-6 h-[400px] flex flex-col relative overflow-hidden glow-orange">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-brand-orange-light opacity-50" />
          {/* Header */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
            <span className="ml-4 font-mono text-xs text-gray-500 tracking-widest">
              SINKODE_TERMINAL_V1.0
            </span>
          </div>
          /* Terminal Lines */
          <div className="flex-1 font-mono text-sm space-y-2">
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`${i === lines.length - 1 ? "text-brand-orange font-bold glow-text" : "text-gray-400"}`}
              >
                <span className="text-gray-600 mr-2">{">"}</span>
                {line}
              </motion.div>
            ))}
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 h-4 bg-brand-orange mt-2 glow-orange"
            />
          </div>
          {/* Progress Bar */}
          <div className="mt-auto">
            <div className="flex justify-between items-center mb-2 font-mono text-xs text-gray-500">
              <span>SYSTEM BOOT</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-brand-orange to-brand-orange-light glow-orange"
              />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="noise-bg" />
    </motion.div>
  );
}
