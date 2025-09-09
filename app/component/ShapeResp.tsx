// Shape.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Shape() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      {
        y: 100,         // start slightly below
        opacity: 0,     // start invisible
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",   // when 80% of viewport reached
          toggleActions: "play none none reverse", 
        },
      }
    );
  }, []);

  return (
    <section
      className="w-full h-[740px] sm:h-[600px] lg:h-[600px] bg-white py-16 px-4 sm:px-8 lg:px-12"
      id="our-story"
      ref={sectionRef}
    >
      <div className="max-w-[1276px] mx-auto bg-[#071f43] px-6 sm:px-12 lg:px-[91px] py-12 flex flex-col gap-6">
        {/* Title */}
        <h2 className="font-['Frank_Ruhl_Libre'] text-3xl sm:text-4xl lg:text-[54px] font-medium leading-tight text-white text-center">
          How Blüra Took Shape
        </h2>

        {/* Subtitle */}
        <p className="font-['Frank_Ruhl_Libre'] text-base sm:text-lg lg:text-[18px] font-semibold text-white text-center">
          At blüra, we don&apos;t just bottled water, we Canned clarity.
        </p>

        {/* Description */}
        <p className="font-['Frank_Ruhl_Libre'] text-sm sm:text-base lg:text-[18px] font-light leading-relaxed text-white text-center max-w-4xl lg:max-w-[1094px] mx-auto">
          It all started with a simple truth: water is the most essential thing
          we consume, and we are consuming it in the most harmful way. Mountains
          of plastic waste, microplastics invading our bodies, and a planet
          begging for a timeout. 
          <br />
          <br />
          <p className="font-['Frank_Ruhl_Libre'] text-base sm:text-lg lg:text-[18px] font-semibold text-white text-center">It was time to change the flow.</p>
          <p className="font-['Frank_Ruhl_Libre'] text-base sm:text-lg lg:text-[18px] font-semibold text-white text-center">And we listened. We chose Truth over Trends.</p>
          <br />
          We ventured to the Himalayan foothills, where the air is thinner, the
          thoughts are clearer, and the water, wiser. blüra is a whisper from
          the mountains. Drawn from ancient Himalayas, it is a mineral-rich,
          naturally filtered water that flows through Himalayan rocks,
          containing elements such as 
          <span className="font-['Frank_Ruhl_Libre'] text-base sm:text-lg lg:text-[18px] font-semibold text-white text-center"> Calcium, Magnesium, and Bicarbonates</span>, that
          not only hydrate but also revitalise. 
          <br />
          <p className="font-['Frank_Ruhl_Libre'] text-base sm:text-lg lg:text-[18px] font-semibold text-white text-center">No chemicals. No gimmicks. Just
          the earth&apos;s wisdom in a Can.</p>
        </p>
      </div>
    </section>
  );
}
