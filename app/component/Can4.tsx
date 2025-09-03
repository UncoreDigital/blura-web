"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CanBafore() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLSpanElement>(null);
  const paraRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);

  const headingText = "The Beauty of Blüra Water".split(" ");

  useEffect(() => {
    let tl: gsap.core.Timeline | null = null;

    const ctx = gsap.context(() => {
      const words = headingRef.current?.querySelectorAll("span");

      if (words && paraRef.current && img1Ref.current && img2Ref.current && sectionRef.current) {
        tl = gsap.timeline({ paused: true });

        // Image animations
        tl.from(
          img1Ref.current,
          {
            x: 100,
            y: 50,
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          img2Ref.current,
          {
            x: -100,
            y: 50,
            scale: 0.8,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        );

        // Text animations
        tl.from(words, {
          opacity: 0,
          y: 30,
          duration: 0.2,
          stagger: 0,
          ease: "power3.out",
        }).from(
          paraRef.current,
          { opacity: 0, y: 20, duration: 1 },
          "-=0"
        );

        

        // Scroll trigger
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 70%",
          onEnter: () => tl?.restart(),
        });

        // Hover replay
        sectionRef.current.addEventListener("mouseenter", () => {
          tl?.restart();
        });
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="main-container flex h-[600px]! w-full max-w-[1276px] min-h-[232px] md:min-h-[337px] lg:min-h-[463px] xl:min-h-[549px] flex-col gap-4 md:gap-6 lg:gap-[26px] items-center flex-nowrap bg-[#071f43] relative overflow-hidden mx-auto my-0"
    >
      <div className="flex pt-[30px] md:pt-[50px] lg:pt-[72px] pr-[20px] md:pr-[50px] lg:pr-[91px] pb-0 pl-[20px] md:pl-[50px] lg:pl-[91px] flex-col gap-[10px] md:gap-[17px] items-center self-stretch shrink-0 flex-nowrap relative">
        <span
          ref={headingRef}
          className="h-auto self-stretch shrink-0 basis-auto font-['Frank_Ruhl_Libre'] text-[24px] md:text-[36px] lg:text-[48px] xl:text-[54px] font-normal leading-[30px] md:leading-[46px] lg:leading-[62px] xl:leading-[70px] text-[#fff] relative text-center whitespace-nowrap z-[1]"
        >
          The Beauty of Blüra Water 
          {/* {headingText.map((word, i) => (
            <span key={i} className="inline-block mr-2">
              {word}
            </span>
          ))} */}
        </span>
        <div
          
          className="w-full max-w-[1276px] shrink-0 font-['Plus_Jakarta_Sans'] text-[14px] md:text-[16px] lg:text-[18px] font-bold leading-[18px] md:leading-[20px] lg:leading-[22.68px] relative text-center z-[2]"
        >
          <span className="font-['Frank_Ruhl_Libre'] text-[14px] md:text-[16px] lg:text-[18px] font-bold leading-[18px] md:leading-[20px] lg:leading-[22.68px] text-[#fff] relative text-center">
            Drink like it means Something! <br /> <br />
          </span>
          <span className="font-['Frank_Ruhl_Libre'] text-[14px] md:text-[16px] lg:text-[18px] font-light leading-[18px] md:leading-[20px] lg:leading-[22.68px] text-[#fff] relative text-center">
            blüra doesn&apos;t shock your tongue or leave an afterthought. It
            simply disappears, 
            <br />
            as if it were always part of you. It nourishes
            without asking for attention. 
            <br />
            No artificial mineral addition, free
            of impurities,
            <br />
            blüra is natural alkaline water that is soft on the
            <br />
            palate and gentle on your body.
          </span>
        </div>
      </div>

      {/* Image 1 */}
      <div
        ref={img1Ref}
        className="w-[40.45%] h-[220px] md:h-[320px] lg:h-[440px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/zPvJ0zWqvS.png)] bg-contain bg-center bg-no-repeat absolute top-[90px] md:top-[140px] lg:top-[190px] left-[65.18%] z-[4]"
      />
      {/* Image 2 */}
      <div
        ref={img2Ref}
        className="w-[32.84%] h-[200px] md:h-[300px] lg:h-[400px] shrink-0 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/VV84h7H9c8.png)] bg-contain bg-center bg-no-repeat absolute top-[100px] md:top-[150px] lg:top-[200px] left-[-1.49%] z-[3]"
      />
    </div>
  );
}