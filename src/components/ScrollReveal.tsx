import { ReactNode } from "react";

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
  className = "",
}: ScrollRevealProps) {
  // Completely neutral instant renderer to avoid any delayed triggers or blank spaces
  return (
    <div className={className}>
      {children}
    </div>
  );
}

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
  className = "",
}: ScrollRevealItemProps) {
  // Neutral instant child layout
  return (
    <div className={className}>
      {children}
    </div>
  );
}
