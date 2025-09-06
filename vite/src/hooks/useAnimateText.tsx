"use client";
import { useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

type SplitTextOptions = {
  selector?: string;
  duration?: number;
  x?: number; // 👈 added
  y?: number;
  alpha?: number;
  stagger?: number;
  trigger?: string | Element;
  start?: string;
  end?: string;
  once?: boolean;
  linesClass?: string;
  type?:
    | "words"
    | "chars"
    | "lines"
    | "words, chars"
    | "words, lines"
    | "chars, lines";
  delay?: number;
};

export function useAnimateText({
  selector = ".split",
  duration = 1,
  x = 0, // 👈 default no x offset
  y = 100,
  alpha = 0,
  stagger = 0.05,
  trigger,
  start = "top 80%",
  end = "bottom top",
  once = true,
  type = "words, chars",
  linesClass = "line-wrapper++",
  delay = 0,
}: SplitTextOptions = {}) {
  useEffect(() => {
    const split = new SplitText(selector, {
      type,
      linesClass,
    });

    const targets =
      type === "chars"
        ? split.chars
        : type === "words"
        ? split.words
        : [...(split.words || []), ...(split.chars || [])];

    const animation = gsap.from(targets, {
      duration,
      x, // 👈 now animates X too
      y,
      autoAlpha: alpha,
      stagger,
      ease: "power3.out",
      delay,
      scrollTrigger: trigger
        ? {
            trigger,
            start,
            end,
            once,
          }
        : undefined,
    });

    return () => {
      split.revert();
      animation.kill();
      if (trigger) ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [
    selector,
    duration,
    x,
    y,
    alpha,
    stagger,
    trigger,
    start,
    end,
    once,
    type,
    delay,
  ]);
}
