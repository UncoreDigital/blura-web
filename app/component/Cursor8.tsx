"use client";

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MaskCursor() {
  const maskRef = useRef<HTMLDivElement | null>(null);
  const normalSize = 20;
  const hoverSize = 70;

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mask = maskRef.current;
    if (!mask) return;

    const prevCursor = document.documentElement.style.cursor;

    // Initial setup
    gsap.set(mask, {
      width: normalSize,
      height: normalSize,
      x: -100,
      y: -100,
      opacity: 1,
    });

    // // Helper to convert rgb to hex
    // const rgbToHex = (rgb: string) => {
    //   const rgbValues = rgb.match(/\d+/g);
    //   if (!rgbValues) return "#ffffff";
    //   return (
    //     "#" +
    //     rgbValues
    //       .map((x) => {
    //         const hex = parseInt(x).toString(16);
    //         return hex.length === 1 ? "0" + hex : hex;
    //       })
    //       .join("")
    //   );
    // };

    // Move cursor
    const onMove = (e: MouseEvent) => {
      gsap.to(mask, {
        x: e.clientX - parseFloat(mask.style.width) / 2,
        y: e.clientY - parseFloat(mask.style.height) / 2,
        duration: 0.15,
        ease: "power3.out",
      });
    };

    // Hover logic
    const onHover = (e: MouseEvent) => {
      const element = e.target as HTMLElement | null;

      if (element?.closest("button, input, textarea, select, img")) {
        document.documentElement.style.cursor = "auto";
        gsap.to(mask, { opacity: 0, duration: 0.2 });
        return;
      }

      document.documentElement.style.cursor = "none";
      gsap.to(mask, { opacity: 1, duration: 0.2 });

      // // **Dynamic background color detection**
      // const computedColor = window.getComputedStyle(element)?.color;
      // const hexColor = rgbToHex(computedColor).toLowerCase();

      // // Simple condition: if text is blueish (#071f43 in your case), make mask white
      // let maskColor = "#F8E0BC"; // default
      // let maskTextColor = "#000000"; // default text color
      // if (hexColor === "#071f43") {
      //   maskColor = "#F8E0BC";
      // } else if (hexColor === "#ffffff") {
      //   maskColor = "#ffffffb3";  ///ffffffb3
      // }

      // gsap.to(mask, {
      //   backgroundColor: maskColor,
      //   color: maskTextColor,
      //   duration: 0.2,
      // });

      // Size change on headings
      if (element && /^(H[1-6])$/.test(element.tagName)) {
        gsap.to(mask, {
          width: hoverSize,
          height: hoverSize,
          duration: 0.35,
          ease: "power3.out",
        });
      } else {
        gsap.to(mask, {
          width: normalSize,
          height: normalSize,
          duration: 0.35,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onHover);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onHover);
      document.documentElement.style.cursor = prevCursor || "";
    };
  }, []);

  return (
    <div
      ref={maskRef}
      className="hidden sm:block fixed top-0 left-0 pointer-events-none z-[9999]"
    />
  );
}
