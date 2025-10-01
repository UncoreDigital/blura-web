"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (leftRef.current) {
        gsap.fromTo(
          leftRef.current,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }

      if (rightRef.current) {
        gsap.fromTo(
          rightRef.current,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white" id="contact">
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Info */}
        <div
          ref={leftRef}
          className="bg-[#071f43] text-white px-6 sm:px-12 lg:px-24 py-12 flex-1 flex flex-col gap-6"
        >
          <h2 className="font-['Frank_Ruhl_Libre'] text-3xl sm:text-4xl font-bold capitalize">
            be a blüra being
          </h2>
          <p className="font-['Frank_Ruhl_Libre'] text-sm sm:text-base font-light leading-relaxed">
            blüra is our answer to your luxury that doesn’t come at a planetary
            cost. It’s a brand built on transparency and taste. A chilled can
            against your palm. The first sip. The sudden pause inside you.
            That’s not hydration. That’s healing. That’s nature, grounding you
            again. <br />
            <br />
            If that’s you, welcome. You’re one of us. A{" "}
            <strong>blüra being</strong>.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <div className="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/CK6SNG0NLD.png)] bg-cover bg-no-repeat" />
              <span className="font-['Frank_Ruhl_Libre']">+91- 7990394138</span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/WF6wqEaxAH.png)] bg-cover bg-no-repeat" />
              <span className="font-['Frank_Ruhl_Libre']">
                contact@bluralife.com
              </span>
            </div>
          </div>
        </div>

        {/* Right Iframe */}
        <div
          ref={rightRef}
          className="bg-white px-6 sm:px-12 lg:px-24 py-12 flex-1"
        >
          <h3 className="font-['Frank_Ruhl_Libre'] text-3xl sm:text-4xl mb-2">
            Have Questions? Let’s Connect!
          </h3>
          <p className="font-['Frank_Ruhl_Libre'] text-gray-700 mb-6">
            We’re here to help - reach out to learn more
          </p>

          <iframe
            src="https://kaironixsolution.com/blura/blura-life/"
            width="100%"
            height="600"
            style={{ border: "none" }}
            title="Contact Form"
          />
        </div>
      </div>
    </section>
  );
}
