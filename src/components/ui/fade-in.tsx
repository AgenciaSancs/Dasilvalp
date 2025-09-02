"use client";

import { useState, useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FadeInOnScrollProps {
  children: ReactNode;
  className?: string;
}

export function FadeInOnScroll({ children, className }: FadeInOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
  }, []);

  return (
    <div
      ref={elementRef}
      className={cn(
        'transition-opacity duration-1000 ease-in',
        isVisible ? 'opacity-100' : 'opacity-0',
        className
      )}
    >
      {children}
    </div>
  );
}
