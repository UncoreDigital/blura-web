"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Reason() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !imgRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { x: -150, opacity: 0 }, // start left
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { x: 150, opacity: 0 }, // start right
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white h-[710px] sm:h-[600px] lg:h-[520px] py-16 px-4 sm:px-8 mobile-responsive-cls"
    >
      <div className="main-container max-w-[1270px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-[109px] items-center">
        {/* Left Image */}
        <div
          ref={imgRef}
          className="w-full max-w-[321px] h-[320px] sm:h-[400px] lg:h-[482px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/bOwGUgKDbZ.png)] bg-cover bg-no-repeat flex-shrink-0"
        />

        {/* Right Content */}
        <div
          ref={textRef}
          className="flex flex-col gap-5 lg:gap-[20px] w-full max-w-[758px]"
        >
          <h2 className="font-['Frank_Ruhl_Libre'] text-3xl sm:text-4xl lg:text-[54px] font-medium leading-tight lg:leading-[65.88px] text-left
          text-[#071f43]">
            Cans for a Reason
          </h2>
          <p className="font-['Frank_Ruhl_Libre'] text-sm sm:text-base lg:text-[18px] font-light leading-relaxed text-black text-left">
            Not Just Canned. We Considered.
            <br />
            We didn&apos;t go plastic-free because it was trendy. We went
            plastic-free because it was a necessity.
            <br />
            <br />
            You drink water every day. But how often do you feel it? Plastic
            pollutes not just the planet, but the experience. But our aluminium
            cans are infinitely recyclable, travel safer, better for the earth,
            and cooler to hold. Unlike plastic, the water tastes better too. No
            leaching. No odour. And most importantly, it matches your belief and
            <span className="font-['Frank_Ruhl_Libre'] text-base sm:text-lg lg:text-[18px] font-semibold text-black text-center"> Elevate Yourself!</span>
          </p>
        </div>
      </div>
    </section>
  );
}
