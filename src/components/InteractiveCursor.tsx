import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function InteractiveCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverType, setHoverType] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Smooth mouse coordinates tracking using spring dynamics
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Detect mobile/touch support first to prevent cursor overlay on iPads/phones
    const checkIsMobile = () => {
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsMobile(hasTouch);
    };

    checkIsMobile();
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    // Track when user enters interactive anchors, buttons, or cards
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const interactiveEl = target.closest("a, button, .glass-card, [role='button'], input, textarea, select");
      if (interactiveEl) {
        setIsHovered(true);
        if (interactiveEl.classList.contains("glass-card")) {
          setHoverType("card");
        } else if (interactiveEl.tagName === "A" || interactiveEl.tagName === "BUTTON") {
          setHoverType("click");
        } else {
          setHoverType("input");
        }
      } else {
        setIsHovered(false);
        setHoverType(null);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Lag follower ring */}
      <motion.div
        ref={cursorRef}
        style={{
          x: cursorX,
          y: cursorY,
          pointerEvents: "none",
        }}
        className="fixed w-8 h-8 rounded-full pointer-events-none z-[1000] border border-white/40 mix-blend-difference"
        animate={{
          scale: isHovered 
            ? hoverType === "card"
              ? 2.2
              : hoverType === "click"
                ? 1.6
                : 1.2
            : 1,
          backgroundColor: isHovered 
            ? "rgba(255, 255, 255, 0.1)" 
            : "rgba(255, 255, 255, 0)",
          borderColor: isHovered 
            ? "rgba(255, 255, 255, 0.8)" 
            : "rgba(255, 255, 255, 0.4)",
          boxShadow: isHovered
            ? "0 0 15px rgba(255, 255, 255, 0.2)"
            : "0 0 0px rgba(0,0,0,0)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.2 }}
      />

      {/* Tiny precise lead dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          pointerEvents: "none",
        }}
        className="fixed w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[1000] mix-blend-difference"
        animate={{
          scale: isHovered ? 0.3 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
    </>
  );
}
