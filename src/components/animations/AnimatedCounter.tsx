"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  direction?: "up" | "down";
  duration?: number;
  format?: (val: number) => string;
  className?: string;
}

export function AnimatedCounter({
  value,
  direction = "up",
  duration = 2,
  format = (val) => val.toLocaleString(),
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [currentValue, setCurrentValue] = useState(direction === "up" ? 0 : value);

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number;
    const startValue = direction === "up" ? 0 : value;
    const endValue = direction === "up" ? value : 0;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      const current = Math.floor(startValue + easeProgress * (endValue - startValue));
      setCurrentValue(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCurrentValue(endValue);
      }
    };

    window.requestAnimationFrame(step);
  }, [value, duration, direction, isInView]);

  return (
    <span ref={ref} className={className}>
      {format(currentValue)}
    </span>
  );
}
