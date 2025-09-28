"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function MaskCursor() {
  const maskRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const normalSize = 20; // small bubble
  const hoverSize = 70; // enlarged bubble

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mask = maskRef.current;
    if (!mask) return;

    const hero = document.querySelector<HTMLElement>(".hero-section");
    if (!hero) return;

    const prevCursor = document.documentElement.style.cursor;

    // Initial setup
    gsap.set(mask, {
      width: normalSize,
      height: normalSize,
      x: -100,
      y: -100,
      opacity: 0,
    });

    const onMove = (e: MouseEvent) => {
      if (!active) return;
      gsap.to(mask, {
        x: e.clientX - parseFloat(mask.style.width) / 2,
        y: e.clientY - parseFloat(mask.style.height) / 2,
        duration: 0.15,
        ease: "power3.out",
      });
    };

    const onHeroEnter = () => {
      setActive(true);
      document.documentElement.style.cursor = "none";
      gsap.to(mask, { opacity: 1, duration: 0.25 });
    };

    const onHeroLeave = () => {
      setActive(false);
      document.documentElement.style.cursor = prevCursor || "";
      gsap.to(mask, { opacity: 0, duration: 0.25 });
    };

    const onHover = (e: MouseEvent) => {
      if (!active) return;

      const target = (e.target as HTMLElement).closest(
        "a, [data-hover-effect], .hover-target"
      );

      // If it's a button → show normal cursor & hide custom cursor
      const buttonTarget = (e.target as HTMLElement).closest("button");
      if (buttonTarget) {
        document.documentElement.style.cursor = "pointer";
        gsap.to(mask, { opacity: 0, duration: 0.2 });
        return;
      } else {
        document.documentElement.style.cursor = "none";
        gsap.to(mask, { opacity: 1, duration: 0.2 });
      }

      if (target) {
        gsap.to(mask, {
          width: hoverSize,
          height: hoverSize,
          duration: 0.35, // smoother transition
          ease: "power3.out",
        });
      }
    };

    const onHoverOut = (e: MouseEvent) => {
      if (!active) return;

      const related = e.relatedTarget as Node | null;
      if (
        !related ||
        !(related as HTMLElement).closest(
          "a, [data-hover-effect], .hover-target"
        )
      ) {
        gsap.to(mask, {
          width: normalSize,
          height: normalSize,
          duration: 0.35, // smooth shrink
          ease: "power3.out",
        });
      }
    };

    hero.addEventListener("mouseenter", onHeroEnter);
    hero.addEventListener("mouseleave", onHeroLeave);
    hero.addEventListener("mouseover", onHover);
    hero.addEventListener("mouseout", onHoverOut);
    window.addEventListener("mousemove", onMove);

    return () => {
      hero.removeEventListener("mouseenter", onHeroEnter);
      hero.removeEventListener("mouseleave", onHeroLeave);
      hero.removeEventListener("mouseover", onHover);
      hero.removeEventListener("mouseout", onHoverOut);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.style.cursor = prevCursor || "";
    };
  }, [active]);

  return (
    <div
      ref={maskRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
    />
  );
}
