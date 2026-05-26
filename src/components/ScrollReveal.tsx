import { ReactNode, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  blur?: boolean;
  scale?: boolean;
  className?: string;
  staggerChildren?: boolean;
  key?: any;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.85,
  blur = true,
  scale = true,
  className = "",
  staggerChildren = false,
}: ScrollRevealProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const getOffset = () => {
    if (isMobile) return { y: 0, x: 0 }; // Remove transform offsets on mobile
    switch (direction) {
      case "up":
        return { y: 40, x: 0 };
      case "down":
        return { y: -40, x: 0 };
      case "left":
        return { y: 0, x: 35 };
      case "right":
        return { y: 0, x: -35 };
      default:
        return { y: 0, x: 0 };
    }
  };

  const offset = getOffset();

  if (staggerChildren) {
    const containerVariants = {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: isMobile ? 0 : 0.12, // Remove stagger delay on mobile
          delayChildren: isMobile ? 0 : delay,
        },
      },
    };

    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={isMobile ? { once: true, margin: "-20px" } : { once: true, margin: "-10%" }}
        variants={containerVariants}
      >
        {children}
      </motion.div>
    );
  }

  const revealVariants = {
    hidden: {
      opacity: isMobile ? 0.95 : 0, // Near instant ready state on mobile
      y: offset.y,
      x: offset.x,
      scale: scale && !isMobile ? 0.95 : 1,
      filter: blur && !isMobile ? "blur(12px)" : "blur(0px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: isMobile ? 0.15 : duration,
        delay: isMobile ? 0 : delay,
        ease: isMobile ? "easeOut" : [0.16, 1, 0.3, 1], // Custom premium cubic-bezier for desktop
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={isMobile ? { once: true, margin: "-20px" } : { once: true, margin: "-10%" }}
      variants={revealVariants}
    >
      {children}
    </motion.div>
  );
}

// Child element helper for staggered parents
interface ScrollRevealItemProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  blur?: boolean;
  scale?: boolean;
  className?: string;
  duration?: number;
  key?: any;
}

export function ScrollRevealItem({
  children,
  direction = "up",
  blur = true,
  scale = true,
  className = "",
  duration = 0.8,
}: ScrollRevealItemProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const getOffset = () => {
    if (isMobile) return { y: 0, x: 0 };
    switch (direction) {
      case "up":
        return { y: 25, x: 0 };
      case "down":
        return { y: -25, x: 0 };
      case "left":
        return { y: 0, x: 25 };
      case "right":
        return { y: 0, x: -25 };
      default:
        return { y: 0, x: 0 };
    }
  };

  const offset = getOffset();

  const itemVariants = {
    hidden: {
      opacity: isMobile ? 0.95 : 0,
      y: offset.y,
      x: offset.x,
      scale: scale && !isMobile ? 0.97 : 1,
      filter: blur && !isMobile ? "blur(8px)" : "blur(0px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: isMobile ? 0.15 : duration,
        ease: isMobile ? "easeOut" : [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
