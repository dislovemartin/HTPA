"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  value: string | number;
  className?: string;
  direction?: "up" | "down";
}

export default function AnimatedCounter({ value, className, direction = "up" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? Number(value) : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Extract numeric part and suffix (like '+')
  const numericValue = parseFloat(String(value).replace(/[^\d.-]/g, ""));
  const suffix = String(value).replace(/^[\d.-]+/, "");

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : numericValue);
    }
  }, [motionValue, isInView, direction, numericValue]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = latest.toFixed(0) + suffix;
        }
      }),
    [springValue, suffix]
  );

  return <span className={className} ref={ref} />;
} 