"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MaskCursor() {
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

    // Set initial position and size
    gsap.set(mask, { width: 40, height: 40, x: -100, y: -100 });

    const onMove = (e: MouseEvent) => {
      gsap.to(mask, {
        x: e.clientX - parseFloat(mask.style.width) / 2,
        y: e.clientY - parseFloat(mask.style.height) / 2,
        duration: 0.15,
        ease: "power3.out",
      });
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "button, a, [data-hover-effect]"
      );
      if (target) {
        gsap.to(mask, {
          width: 80,
          height: 80,
          duration: 0.2,
          ease: "power3.out",
        });
      }
    };

    const onOut = (e: MouseEvent) => {
      const related = e.relatedTarget as Node | null;
      if (
        !related ||
        !(related as HTMLElement).closest("button, a, [data-hover-effect]")
      ) {
        gsap.to(mask, {
          width: 40,
          height: 40,
          duration: 0.2,
          ease: "power3.out",
        });
      }
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
      ref={maskRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
    />

    // <div
    //   ref={maskRef}
    //   style={{
    //     width: "40px",
    //     height: "40px",
    //     borderRadius: "50%",
    //     border: "2px solid #071f43",
    //     backgroundColor: "transparent",
    //     backdropFilter: "invert(1)", // Inverts text behind
    //     WebkitBackdropFilter: "invert(1)", // Safari support
    //   }}
    //   className="fixed top-0 left-0 pointer-events-none z-[9999]"
    // />
  );
}
