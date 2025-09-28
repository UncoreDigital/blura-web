"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const currentTargetRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const noHover = window.matchMedia(
      "(hover: none), (pointer: coarse)"
    ).matches;
    if (noHover) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const prevCursor = document.documentElement.style.cursor;
    document.documentElement.style.cursor = "none";

    gsap.set(cursor, { x: -9999, y: -9999 });

    const onMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.12,
        ease: "power3.out",
      });
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-hover-effect]");
      if (!target || target === currentTargetRef.current) return;

      currentTargetRef.current = target as HTMLElement;

      // Change text color on hover
      gsap.to(target, {
        color: "#ffffff",
        duration: 0.2,
      });

      // Animate cursor
      gsap.to(cursor, {
        scale: 1.6,
        duration: 0.18,
      });
    };

    const onOut = () => {
      const current = currentTargetRef.current;
      if (current) {
        gsap.to(current, {
          color: "#071f43",
          duration: 0.2,
        });
        currentTargetRef.current = null;
      }
      gsap.to(cursor, { scale: 1, duration: 0.18 });
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.documentElement.style.cursor = prevCursor || "";
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
        fixed top-0 left-0 z-[9999]
        w-10 h-10 rounded-full
      "
    />
  );
}
