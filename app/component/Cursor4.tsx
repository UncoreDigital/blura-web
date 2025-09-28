"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor4() {
  const maskRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const noHover = window.matchMedia(
      "(hover: none), (pointer: coarse)"
    ).matches;
    if (noHover) return;

    const mask = maskRef.current;
    if (!mask) return;

    const prevCursor = document.documentElement.style.cursor;
    document.documentElement.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      gsap.to(mask, {
        x: e.clientX - 40, // center the circle
        y: e.clientY - 40,
        duration: 0.15,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.style.cursor = prevCursor || "";
    };
  }, []);

  return (
    <div
      ref={maskRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
    />
  );
}
