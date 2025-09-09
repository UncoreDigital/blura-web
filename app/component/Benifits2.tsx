"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Benefits() {
  const benefits = [
    {
      title: "Balances Your Body's pH",
      desc: "With a natural pH of 7-8, blüra helps neutralize acidity and supports better digestion.",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/JZfxUgA2iq.png",
    },
    {
      title: "Hydrates Smarter",
      desc: "Rich in minerals like calcium and magnesium for deeper, more efficient hydration.",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/cQxrA5nM87.png",
    },
    {
      title: "100% Natural, Zero Processing",
      desc: "No additives, no chemical treatment- just water as nature intended.",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/8rCYY45kTQ.png",
    },
    {
      title: "Strengthens from Within",
      desc: "Minerals that support bone health, muscle recovery, and nerve function.",
      icon: "https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/ZgU7xyOFeP.png",
    },
  ];

  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!cardsRef.current.length) return;

    gsap.fromTo(
      cardsRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current[0].parentElement,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="w-full bg-white py-16 px-6 h-[1100px] sm:h-[500px] lg:h-[470px]">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-12 font-['Frank_Ruhl_Libre'] text-[#071f43]">
        Benefits of Drinking Blüra Water
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {benefits.map((item, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            className="group bg-white shadow-md hover:shadow-lg transition p-6 flex flex-col gap-4 hover:bg-[#071f43] cursor-pointer opacity-0"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-[55px] h-[55px] transition duration-300 group-hover:invert group-hover:brightness-0"
            />
            <h3 className="font-['Frank_Ruhl_Libre'] text-lg font-semibold text-gray-900 group-hover:text-white transition">
              {item.title}
            </h3>
            <p className="font-['Frank_Ruhl_Libre'] text-gray-600 text-sm leading-relaxed group-hover:text-white transition">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
