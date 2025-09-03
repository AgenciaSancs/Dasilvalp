"use client";

import { useEffect, useState, useRef } from "react";

interface AnimatedNumberProps {
  finalValue: number;
  duration?: number;
  suffix?: string;
}

export function AnimatedNumber({ finalValue, duration = 2000, suffix = "" }: AnimatedNumberProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTime: number | null = null;
          const step = (timestamp: number) => {
            if (!startTime) {
              startTime = timestamp;
            }
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            setCurrentValue(Math.floor(percentage * finalValue));
            if (progress < duration) {
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);

          if(elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [finalValue, duration]);

  return (
    <span ref={elementRef}>
      {currentValue}
      {suffix}
    </span>
  );
}