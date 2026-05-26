import { ReactNode } from "react";
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
  const getOffset = () => {
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
          staggerChildren: 0.12,
          delayChildren: delay,
        },
      },
    };

    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={containerVariants}
      >
        {children}
      </motion.div>
    );
  }

  const revealVariants = {
    hidden: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.15,
        delay: 0,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
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
  const getOffset = () => {
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
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.15,
      },
    },
  };

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
